import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToast } from '../context/ToastContext'
import { mineralMarkers, layers, sceneTabs, mapStats } from '../mock/onemap'
import './OneMap.css'

const filterOptions = [
  { key: 'all', label: '全部', cls: '' },
  { key: 'high', label: '高置信', cls: 'high-conf' },
  { key: 'medium', label: '中置信', cls: 'med-conf' },
  { key: 'low', label: '低置信', cls: 'low-conf' },
  { key: 'verified', label: '已验证', cls: 'verified' },
  { key: 'pending', label: '待验证', cls: 'pending' },
]

function getConfTag(m) {
  if (m.conf === '高') return 'high-conf'
  if (m.conf === '中') return 'med-conf'
  return 'low-conf'
}
function getStatusTag(m) {
  return m.status === '已验证' ? 'verified' : 'pending'
}
function getConfLabel(m) {
  if (m.conf === '高') return '高置信'
  if (m.conf === '中') return '中置信'
  return '低置信'
}

export default function OneMap() {
  const navigate = useNavigate()
  const toast = useToast()
  const [activeScene, setActiveScene] = useState('mineral')
  const [selectedMarker, setSelectedMarker] = useState(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')
  const [opacity, setOpacity] = useState(0.8)
  const [visibleLayers, setVisibleLayers] = useState(() => layers.filter(l => l.visible).map(l => l.id))
  const [highlightedId, setHighlightedId] = useState(null)

  const filteredMarkers = useMemo(() => {
    return mineralMarkers.filter(m => {
      if (searchQuery.trim()) {
        const q = searchQuery.trim().toLowerCase()
        if (!m.name.toLowerCase().includes(q) && !m.id.toLowerCase().includes(q) && !m.type.toLowerCase().includes(q)) {
          return false
        }
      }
      switch (activeFilter) {
        case 'high': return m.conf === '高'
        case 'medium': return m.conf === '中'
        case 'low': return m.conf === '低'
        case 'verified': return m.status === '已验证'
        case 'pending': return m.status === '待验证'
        default: return true
      }
    })
  }, [searchQuery, activeFilter])

  const handleSceneTab = (key) => {
    setActiveScene(key)
    setSelectedMarker(null)
    toast(`切换到「${sceneTabs.find(t => t.key === key)?.label || key}」视图`)
  }

  const handleMarkerClick = (m, e) => {
    e.stopPropagation()
    setSelectedMarker(m)
    setTooltipPos({ x: m.pos.x, y: m.pos.y })
    setHighlightedId(m.id)
    toast(`查看标注点：${m.name}`)
  }

  const handleDetail = (id) => {
    setSelectedMarker(null)
    toast('正在跳转至详情页...')
    navigate('/detail/' + id)
  }

  const handleTableRowClick = (m) => {
    setSelectedMarker(m)
    setTooltipPos({ x: m.pos.x, y: m.pos.y })
    setHighlightedId(m.id)
    const container = document.querySelector('.map-area')
    if (container) {
      container.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }

  const toggleLayer = (id) => {
    setVisibleLayers(prev =>
      prev.includes(id) ? prev.filter(l => l !== id) : [...prev, id]
    )
  }

  const confDotClass = (m) => {
    if (m.conf === '高') return 'high-conf'
    if (m.conf === '中') return 'med-conf'
    return 'low-conf'
  }

  const isVisible = (m) => {
    if (activeFilter === 'all') return true
    switch (activeFilter) {
      case 'high': return m.conf === '高'
      case 'medium': return m.conf === '中'
      case 'low': return m.conf === '低'
      case 'verified': return m.status === '已验证'
      case 'pending': return m.status === '待验证'
      default: return true
    }
  }

  return (
    <div className="onemap-page">
      {/* Scene Tabs */}
      <div className="scene-tabs">
        {sceneTabs.map(tab => (
          <div
            key={tab.key}
            className={`scene-tab ${tab.key === activeScene ? 'active' : ''}`}
            onClick={() => handleSceneTab(tab.key)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span>{tab.label}</span>
            {tab.badge && <span className="tab-badge">{tab.badge}</span>}
          </div>
        ))}
      </div>

      {/* Map Area */}
      <div className="map-area" onClick={() => { setSelectedMarker(null); setHighlightedId(null) }}>
        {/* Grid Overlay */}
        <div className="map-grid-overlay" />

        {/* SVG Coastline */}
        <svg
          className="map-svg"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="landGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(16,185,129,.15)" />
              <stop offset="100%" stopColor="rgba(16,185,129,.06)" />
            </linearGradient>
            <linearGradient id="landGradMainland" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(59,130,246,.12)" />
              <stop offset="100%" stopColor="rgba(59,130,246,.04)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Bathymetric contour hints */}
          <ellipse cx="500" cy="500" rx="420" ry="380" fill="none" stroke="rgba(255,255,255,.03)" strokeWidth="1" />
          <ellipse cx="480" cy="490" rx="350" ry="320" fill="none" stroke="rgba(255,255,255,.02)" strokeWidth="1" />

          {/* Hainan Island */}
          <path
            d="M 370,285
               C 385,270, 410,265, 430,268
               C 450,271, 465,278, 475,295
               C 485,315, 490,340, 485,365
               C 480,385, 472,405, 460,420
               C 448,435, 432,442, 415,440
               C 398,438, 382,430, 370,415
               C 355,395, 345,370, 340,345
               C 335,320, 338,300, 348,285
               C 352,278, 358,280, 370,285
               Z"
            fill="url(#landGrad)"
            stroke="rgba(16,185,129,.5)"
            strokeWidth="1.5"
            filter="url(#glow)"
          />

          {/* Hainan - inner detail */}
          <path
            d="M 395,300
               C 415,295, 440,300, 450,320
               C 460,340, 455,380, 440,400
               C 425,415, 405,415, 395,400
               C 380,380, 370,345, 375,320
               C 378,308, 385,302, 395,300
               Z"
            fill="none"
            stroke="rgba(16,185,129,.15)"
            strokeWidth="0.8"
          />

          {/* Mainland China - Guangdong/Guangxi southern coast */}
          <path
            d="M 50,120
               C 100,115, 180,110, 250,115
               C 300,118, 340,120, 370,125
               C 400,130, 430,135, 460,140
               C 500,148, 540,155, 580,165
               C 610,172, 640,180, 670,190
               C 700,200, 720,210, 740,225
               C 755,235, 765,248, 770,260
               C 778,278, 780,290, 775,300"
            fill="none"
            stroke="rgba(59,130,246,.3)"
            strokeWidth="1.2"
            filter="url(#glow)"
          />

          {/* Leizhou Peninsula */}
          <path
            d="M 400,130
               C 405,145, 408,160, 410,175
               C 412,190, 413,205, 410,220
               C 408,230, 405,240, 398,250
               C 393,256, 388,260, 382,265"
            fill="none"
            stroke="rgba(59,130,246,.3)"
            strokeWidth="1.2"
            filter="url(#glow)"
          />

          {/* Vietnam coastline hint */}
          <path
            d="M 55,180
               C 48,210, 42,240, 38,270
               C 34,300, 32,330, 35,360
               C 38,385, 45,408, 55,430
               C 65,452, 78,470, 95,485
               C 110,498, 128,508, 145,515"
            fill="none"
            stroke="rgba(59,130,246,.25)"
            strokeWidth="1"
            filter="url(#glow)"
          />

          {/* Paracel / Xisha Islands */}
          <circle cx="590" cy="380" r="3" fill="rgba(16,185,129,.4)" stroke="rgba(16,185,129,.6)" strokeWidth="0.8" />
          <circle cx="600" cy="390" r="1.5" fill="rgba(16,185,129,.3)" />
          <circle cx="585" cy="395" r="2" fill="rgba(16,185,129,.3)" />
          <text x="590" y="370" fill="rgba(255,255,255,.2)" fontSize="8" textAnchor="middle">西沙群岛</text>

          {/* Paracel outline */}
          <ellipse cx="590" cy="390" rx="25" ry="18" fill="none" stroke="rgba(16,185,129,.1)" strokeWidth="0.5" />

          {/* Zhongsha Islands */}
          <circle cx="680" cy="420" r="1.8" fill="rgba(16,185,129,.25)" />
          <text x="680" y="435" fill="rgba(255,255,255,.15)" fontSize="7" textAnchor="middle">中沙群岛</text>

          {/* Spratly / Nansha Islands */}
          <circle cx="630" cy="620" r="2.5" fill="rgba(16,185,129,.35)" stroke="rgba(16,185,129,.5)" strokeWidth="0.6" />
          <circle cx="640" cy="635" r="1.5" fill="rgba(16,185,129,.25)" />
          <circle cx="620" cy="610" r="1.2" fill="rgba(16,185,129,.2)" />
          <circle cx="645" cy="615" r="1" fill="rgba(16,185,129,.2)" />
          <circle cx="625" cy="630" r="1.8" fill="rgba(16,185,129,.25)" />
          <text x="630" y="655" fill="rgba(255,255,255,.15)" fontSize="7" textAnchor="middle">南沙群岛</text>

          {/* Spratly outline */}
          <ellipse cx="635" cy="625" rx="30" ry="25" fill="none" stroke="rgba(16,185,129,.08)" strokeWidth="0.5" />

          {/* Dongsha Islands */}
          <circle cx="770" cy="250" r="2" fill="rgba(16,185,129,.3)" />
          <text x="770" y="240" fill="rgba(255,255,255,.15)" fontSize="7" textAnchor="middle">东沙群岛</text>

          {/* Latitude / Longitude decoration lines */}
          <line x1="100" y1="500" x2="900" y2="500" stroke="rgba(255,255,255,.03)" strokeWidth="0.5" strokeDasharray="4,6" />
          <line x1="500" y1="100" x2="500" y2="900" stroke="rgba(255,255,255,.03)" strokeWidth="0.5" strokeDasharray="4,6" />
        </svg>

        {/* Markers */}
        <div className="map-markers">
          {mineralMarkers.map(m => {
            const visible = isVisible(m)
            return (
              <div
                key={m.id}
                className={`map-marker ${highlightedId === m.id ? 'highlighted' : ''} ${!visible ? 'dimmed' : ''}`}
                style={{ left: `${m.pos.x}%`, top: `${m.pos.y}%` }}
                onClick={(e) => handleMarkerClick(m, e)}
              >
                <div className={`marker-dot ${confDotClass(m)}`} />
                <div className="marker-label">{m.name}</div>
              </div>
            )
          })}
        </div>

        {/* Stats Overlay */}
        <div className="map-stats">
          {mapStats.map((s, i) => (
            <div key={i} className="stat-chip" onClick={() => toast(`查看统计：${s.label}（${s.value}）`)}>
              <span className="sc-icon">{s.icon}</span>
              <div>
                <div className="sc-val">{s.value}</div>
                <div className="sc-label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Search + Filter Panel */}
        <div className="search-panel" onClick={e => e.stopPropagation()}>
          <div className="search-input-wrap">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="搜索标注点..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                style={{ background: 'none', border: 'none', color:'var(--text-light)', cursor:'pointer', fontSize:'14px', padding:0 }}
                onClick={() => setSearchQuery('')}
              >
                ✕
              </button>
            )}
          </div>
          <div className="filter-chips">
            {filterOptions.map(f => (
              <span
                key={f.key}
                className={`filter-chip ${f.cls} ${activeFilter === f.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
              </span>
            ))}
          </div>
        </div>

        {/* Layer Panel */}
        <div className="layer-panel" onClick={e => e.stopPropagation()}>
          <div className="lp-header">🗂️ 专题图层</div>
          {layers.map(l => (
            <label key={l.id} className="layer-item">
              <input
                type="checkbox"
                className="layer-checkbox"
                checked={visibleLayers.includes(l.id)}
                onChange={() => toggleLayer(l.id)}
              />
              <span className="layer-color" style={{ background: l.color }} />
              <span className="layer-name">{l.name}</span>
            </label>
          ))}
          <div className="layer-opacity">
            <span>透明度</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={opacity}
              onChange={e => setOpacity(parseFloat(e.target.value))}
            />
            <span style={{ width: '30px', textAlign:'right' }}>{Math.round(opacity * 100)}%</span>
          </div>
        </div>

        {/* Legend */}
        <div className="map-legend" onClick={e => e.stopPropagation()}>
          <div className="legend-title">图例</div>
          <div className="legend-item">
            <span className="legend-dot" style={{ background: 'var(--danger)' }} />
            <span>高置信度</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot" style={{ background: 'var(--warning)' }} />
            <span>中置信度</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot" style={{ background: 'var(--info)' }} />
            <span>低置信度</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot" style={{ background: 'var(--success)' }} />
            <span>已验证</span>
          </div>
        </div>

        {/* Scale Bar */}
        <div className="map-scale">
          <div className="scale-bar" />
          <div className="scale-text">0 &nbsp;&nbsp; 50 &nbsp;&nbsp; 100 km</div>
        </div>

        {/* Marker Tooltip */}
        {selectedMarker && (
          <div
            className="marker-tooltip"
            style={{
              left: `calc(${tooltipPos.x}% + 20px)`,
              top: `calc(${tooltipPos.y}% - 60px)`,
              transform: tooltipPos.x > 70 ? 'translateX(-280px)' : 'none',
            }}
            onClick={e => e.stopPropagation()}
          >
            <div className="tt-header">
              <h4>{selectedMarker.name}</h4>
              <button className="tt-close" onClick={() => { setSelectedMarker(null); setHighlightedId(null) }}>×</button>
            </div>
            <div className="tt-row">
              <span className="tt-label">编号</span>
              <span className="tt-value">{selectedMarker.id}</span>
            </div>
            <div className="tt-row">
              <span className="tt-label">疑似矿种</span>
              <span className="tt-value">{selectedMarker.type}</span>
            </div>
            <div className="tt-row">
              <span className="tt-label">置信等级</span>
              <span className="tt-value">
                <span className={`tag ${getConfTag(selectedMarker)}`}>{getConfLabel(selectedMarker)}</span>
              </span>
            </div>
            <div className="tt-row">
              <span className="tt-label">验证状态</span>
              <span className="tt-value">
                <span className={`tag ${getStatusTag(selectedMarker)}`}>{selectedMarker.status}</span>
              </span>
            </div>
            <div className="tt-row">
              <span className="tt-label">责任单位</span>
              <span className="tt-value">{selectedMarker.company}</span>
            </div>
            <div className="tt-actions">
              <button className="btn btn-accent btn-sm" onClick={() => handleDetail(selectedMarker.id)}>
                📋 查看详情
              </button>
              <button
                className="btn btn-outline btn-sm"
                onClick={() => { setSelectedMarker(null); setHighlightedId(null); toast('已关闭标注点') }}
              >
                关闭
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Panel - Table */}
      <div className="bottom-panel">
        <div className="bp-header">
          <h3>📋 矿产疑似位置列表</h3>
          <span className="bp-count">
            共 {filteredMarkers.length} 条记录
            {filteredMarkers.length !== mineralMarkers.length && (
              <span style={{ color: 'var(--text-light)', fontSize:'11px', marginLeft:'4px' }}>
                （已筛选）
              </span>
            )}
          </span>
        </div>
        <div className="bp-table-wrap">
          {filteredMarkers.length === 0 ? (
            <div className="table-empty">
              <div style={{ fontSize:'24px', marginBottom:'8px', opacity:'.3' }}>🔍</div>
              <p>没有符合条件的标注点</p>
              {searchQuery && <p style={{ fontSize:'11px', marginTop:'4px' }}>尝试修改搜索条件或筛选器</p>}
            </div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>位置编号</th>
                  <th>名称</th>
                  <th>疑似矿种</th>
                  <th>发现来源</th>
                  <th>置信等级</th>
                  <th>验证状态</th>
                  <th>证据数量</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {filteredMarkers.map(m => (
                  <tr
                    key={m.id}
                    className={highlightedId === m.id ? 'active-row' : ''}
                    onClick={() => handleTableRowClick(m)}
                  >
                    <td style={{ fontFamily:'monospace', fontSize:'11px', color:'var(--text-light)' }}>{m.id}</td>
                    <td style={{ fontWeight:500 }}>{m.name}</td>
                    <td>{m.type}</td>
                    <td style={{ color:'var(--text-light)' }}>{m.source}</td>
                    <td><span className={`tag ${getConfTag(m)}`}>{getConfLabel(m)}</span></td>
                    <td><span className={`tag ${getStatusTag(m)}`}>{m.status}</span></td>
                    <td>{m.evidenceCount} 项</td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline"
                        onClick={(e) => { e.stopPropagation(); handleDetail(m.id) }}
                      >
                        查看详情
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}
