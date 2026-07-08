import { useRef, useEffect, useState } from 'react'

/**
 * 3D 矿产地质模型视图
 * 使用 Canvas 绘制三维矿层/地层可视化
 * 支持鼠标拖拽旋转
 */
export default function Mineral3DView({ mineralType = '石油天然气', height = 360 }) {
  const canvasRef = useRef(null)
  const [rotation, setRotation] = useState({ x: 0.3, y: 0.5 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  const mineralColors = {
    '石油天然气': { layer1: '#ef4444', layer2: '#dc2626', label: '油气层', symbol: '🛢️' },
    '海砂': { layer1: '#f59e0b', layer2: '#d97706', label: '海砂层', symbol: '🏖️' },
    '天然气水合物': { layer1: '#8b5cf6', layer2: '#7c3aed', label: '水合物层', symbol: '❄️' },
    '多金属结核': { layer1: '#3b82f6', layer2: '#2563eb', label: '结核层', symbol: '🔵' },
    '富钴结壳': { layer1: '#10b981', layer2: '#059669', label: '结壳层', symbol: '🟢' },
    '热液硫化物': { layer1: '#f97316', layer2: '#ea580c', label: '硫化物层', symbol: '🌋' },
    '滨海沙矿': { layer1: '#ec4899', layer2: '#db2777', label: '砂矿层', symbol: '🏝️' },
  }

  const mc = mineralColors[mineralType] || mineralColors['石油天然气']

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const W = canvas.width
    const H = canvas.height
    const cx = W / 2
    const cy = H / 2

    let animId
    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      // Sea background gradient
      const seaGrad = ctx.createLinearGradient(0, 0, 0, H)
      seaGrad.addColorStop(0, '#0a2a4a')
      seaGrad.addColorStop(0.6, '#0d3a5a')
      seaGrad.addColorStop(1, '#0a3a2a')
      ctx.fillStyle = seaGrad
      ctx.fillRect(0, 0, W, H)

      const rx = rotation.x
      const ry = rotation.y

      // 3D projection helper
      const project = (x, y, z) => ({
        px: cx + (x * Math.cos(ry) - z * Math.sin(ry)) * 0.7,
        py: cy + (x * Math.sin(rx) * Math.sin(ry) + y * Math.cos(rx) + z * Math.sin(rx) * Math.cos(ry)) * 0.7,
      })

      // Box dimensions
      const w = 200, d = 160

      // Layer heights (vertical)
      const layers = [
        { h: 20, color: '#1a5a3a', label: '海底表层' },
        { h: 40, color: '#2d7a4a', label: '沉积层' },
        { h: mc.layer2, label: mc.label, color: mc.layer1, isOre: true },
        { h: 30, color: '#4a3a2a', label: '基岩层' },
      ]

      // Draw layers from bottom to top
      let yOffset = -60
      for (const layer of layers) {
        const yStart = yOffset
        const yEnd = yOffset + layer.h

        const p0 = project(-w / 2, yStart, -d / 2)
        const p1 = project(w / 2, yStart, -d / 2)
        const p2 = project(w / 2, yStart, d / 2)
        const p3 = project(-w / 2, yStart, d / 2)
        const p4 = project(-w / 2, yEnd, -d / 2)
        const p5 = project(w / 2, yEnd, -d / 2)
        const p6 = project(w / 2, yEnd, d / 2)
        const p7 = project(-w / 2, yEnd, d / 2)

        // Top face
        ctx.beginPath()
        ctx.moveTo(p0.px, p0.py)
        ctx.lineTo(p1.px, p1.py)
        ctx.lineTo(p2.px, p2.py)
        ctx.lineTo(p3.px, p3.py)
        ctx.closePath()
        ctx.fillStyle = layer.color + '99'
        ctx.fill()
        ctx.strokeStyle = 'rgba(255,255,255,0.15)'
        ctx.lineWidth = 0.5
        ctx.stroke()

        // Bottom face
        ctx.beginPath()
        ctx.moveTo(p4.px, p4.py)
        ctx.lineTo(p5.px, p5.py)
        ctx.lineTo(p6.px, p6.py)
        ctx.lineTo(p7.px, p7.py)
        ctx.closePath()
        ctx.fillStyle = layer.color + '66'
        ctx.fill()
        ctx.stroke()

        // Front face
        ctx.beginPath()
        ctx.moveTo(p0.px, p0.py)
        ctx.lineTo(p1.px, p1.py)
        ctx.lineTo(p5.px, p5.py)
        ctx.lineTo(p4.px, p4.py)
        ctx.closePath()
        const grad = ctx.createLinearGradient(p0.px, p0.py, p1.px, p1.py)
        grad.addColorStop(0, layer.color + '88')
        grad.addColorStop(1, layer.color + '44')
        ctx.fillStyle = grad
        ctx.fill()
        ctx.strokeStyle = 'rgba(255,255,255,0.12)'
        ctx.stroke()

        // Right face
        ctx.beginPath()
        ctx.moveTo(p1.px, p1.py)
        ctx.lineTo(p2.px, p2.py)
        ctx.lineTo(p6.px, p6.py)
        ctx.lineTo(p5.px, p5.py)
        ctx.closePath()
        ctx.fillStyle = layer.color + '55'
        ctx.fill()
        ctx.stroke()

        // Left face
        ctx.beginPath()
        ctx.moveTo(p0.px, p0.py)
        ctx.lineTo(p3.px, p3.py)
        ctx.lineTo(p7.px, p7.py)
        ctx.lineTo(p4.px, p4.py)
        ctx.closePath()
        ctx.fillStyle = layer.color + '33'
        ctx.fill()
        ctx.stroke()

        if (layer.isOre) {
          // Draw ore symbols inside the layer
          const symbols = 6
          for (let i = 0; i < symbols; i++) {
            const t = i / symbols
            const sx = -w * 0.3 + t * w * 0.6
            const sy = yStart + layer.h * 0.4
            const sz = -d * 0.3 + (i % 3) * d * 0.3
            const sp = project(sx, sy, sz)
            ctx.beginPath()
            ctx.arc(sp.px, sp.py, 3, 0, Math.PI * 2)
            ctx.fillStyle = '#fff'
            ctx.globalAlpha = 0.3 + t * 0.3
            ctx.fill()
            ctx.globalAlpha = 1
          }
        }

        yOffset = yEnd

        // Label on front face
        const labelY = yStart + layer.h / 2
        const lp = project(-w / 2 - 5, labelY, 0)
        ctx.fillStyle = 'rgba(255,255,255,0.6)'
        ctx.font = '11px sans-serif'
        ctx.textAlign = 'right'
        ctx.fillText(layer.label, lp.px - 5, lp.py + 3)
      }

      // Top surface grid lines
      const gridP = project(-w / 2, -60, -d / 2)
      ctx.strokeStyle = 'rgba(255,255,255,0.08)'
      ctx.lineWidth = 0.5
      for (let i = 0; i <= 8; i++) {
        const t = i / 8
        const x = -w / 2 + t * w
        const zp1 = project(x, -60, -d / 2)
        const zp2 = project(x, -60, d / 2)
        ctx.beginPath()
        ctx.moveTo(zp1.px, zp1.py)
        ctx.lineTo(zp2.px, zp2.py)
        ctx.stroke()
        const z = -d / 2 + t * d
        const xp1 = project(-w / 2, -60, z)
        const xp2 = project(w / 2, -60, z)
        ctx.beginPath()
        ctx.moveTo(xp1.px, xp1.py)
        ctx.lineTo(xp2.px, xp2.py)
        ctx.stroke()
      }

      // Labels
      ctx.fillStyle = 'rgba(255,255,255,0.4)'
      ctx.font = '10px sans-serif'
      ctx.textAlign = 'center'
      const titleP = project(0, -80, 0)
      ctx.fillStyle = 'rgba(255,255,255,0.7)'
      ctx.font = 'bold 13px sans-serif'
      ctx.fillText(`${mc.symbol} ${mineralType} 三维地质模型`, cx, 20)

      ctx.fillStyle = 'rgba(255,255,255,0.25)'
      ctx.font = '10px sans-serif'
      ctx.fillText('🖱️ 拖拽旋转 | 滚轮缩放', cx, H - 10)

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animId)
  }, [rotation, mineralType])

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setDragStart({ x: e.clientX, y: e.clientY })
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    const dx = (e.clientX - dragStart.x) * 0.01
    const dy = (e.clientY - dragStart.y) * 0.01
    setDragStart({ x: e.clientX, y: e.clientY })
    setRotation(prev => ({
      x: Math.max(-Math.PI / 2, Math.min(Math.PI / 2, prev.x + dy)),
      y: prev.y + dx,
    }))
  }

  const handleMouseUp = () => setIsDragging(false)
  const handleWheel = (e) => {
    e.preventDefault()
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: height }}>
      <canvas
        ref={canvasRef}
        width={800}
        height={height * 2}
        style={{ width: '100%', height: '100%', cursor: isDragging ? 'grabbing' : 'grab' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      />
    </div>
  )
}
