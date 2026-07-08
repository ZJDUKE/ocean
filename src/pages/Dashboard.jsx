import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToast } from '../context/ToastContext'
import { dashboardStats, alerts, activities, explorationProjects, reserveSummary, rightsList } from '../mock/dashboard'
import './Dashboard.css'

export default function Dashboard() {
  const navigate = useNavigate()
  const toast = useToast()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(t)
  }, [])

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner" />
        <span>加载中...</span>
      </div>
    )
  }

  const stats = [
    { icon: '🔍', value: dashboardStats.explorationCount, label: '正在勘查', desc: '个勘查项目' },
    { icon: '📦', value: dashboardStats.reserveCount, label: '探明储量矿区', desc: '个矿区已探明' },
    { icon: '💰', value: dashboardStats.annualInvestment, label: '年度投入', desc: '元勘查经费' },
    { icon: '📜', value: dashboardStats.validRights, label: '矿权有效', desc: '个矿业权' },
  ]

  const handleAlertClick = (a) => {
    if (a.markerId) {
      navigate(`/detail/${a.markerId}`)
    } else {
      toast(`查看详情：${a.msg}`)
    }
  }

  const handleActivityClick = (a) => {
    if (a.markerId) {
      navigate(`/detail/${a.markerId}`)
    } else {
      toast('查看动态详情')
    }
  }

  return (
    <div className="dashboard">
      <div className="page-header">
        <div>
          <h1>矿产管理工作台</h1>
          <p className="page-desc">欢迎回来，今天有 <strong style={{color:'var(--accent)'}}>3</strong> 条待办事项需要处理</p>
        </div>
        <button className="btn btn-accent" onClick={() => navigate('/onemap')}>
          🗺️ 进入一张图
        </button>
      </div>

      <div className="stats-grid">
        {stats.map((s, i) => (
          <div key={i} className="stat-card" onClick={() => navigate('/onemap')}>
            <div className="stat-icon">{s.icon}</div>
            <div className="stat-label">{s.label}</div>
            <div className="stat-value">{s.value}</div>
            <div className="stat-desc">{s.desc}</div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <div className="card-header">
            <h3>⚠️ 预警与待办</h3>
            <span className="tag verified" style={{cursor:'pointer'}} onClick={() => toast('已标记全部已读')}>全部已读</span>
          </div>
          <div className="card-body" style={{padding:'12px 20px'}}>
            {alerts.map((a, i) => (
              <div key={i} className={`alert-item ${a.type}`} onClick={() => handleAlertClick(a)}>
                <span className={`alert-dot ${a.type}`} />
                <span className="alert-msg">{a.msg}</span>
                <span className="alert-time">{a.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>🕐 最近动态</h3>
            <button className="btn btn-sm btn-outline" onClick={() => toast('已刷新动态')}>刷新</button>
          </div>
          <div className="card-body" style={{padding:'8px 20px'}}>
            {activities.map((a, i) => (
              <div key={i} className="activity-item" onClick={() => handleActivityClick(a)}>
                <span className="activity-time">{a.time}</span>
                <span className="activity-desc">{a.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3>🏗️ 勘查项目执行中</h3>
          <button className="btn btn-sm btn-primary" onClick={() => toast('新增勘查项目（演示交互）')}>＋ 新增项目</button>
        </div>
        <div className="card-body table-wrap">
          <table>
            <thead>
              <tr>
                <th>项目名称</th>
                <th>位置/面积</th>
                <th>矿产种类</th>
                <th>建设单位</th>
                <th>阶段</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {explorationProjects.map((p, i) => (
                <tr key={i} onClick={() => navigate(`/detail/${p.markerId}`)}>
                  <td style={{fontWeight:500}}>{p.name}</td>
                  <td style={{color:'var(--text-light)'}}>{p.location}</td>
                  <td>{p.mineral}</td>
                  <td style={{color:'var(--text-light)'}}>{p.company}</td>
                  <td><span className="tag med-conf">{p.phase}</span></td>
                  <td><span className={`tag ${p.status === '进行中' ? 'verified' : 'pending'}`}>{p.status}</span></td>
                  <td>
                    <button className="btn btn-sm btn-outline" onClick={(e) => { e.stopPropagation(); navigate(`/detail/${p.markerId}`) }}>
                      详情
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <div className="card-header">
            <h3>📊 储量动态</h3>
            <button className="btn btn-sm btn-outline" onClick={() => toast('导出储量台账（演示）')}>📤 导出</button>
          </div>
          <div className="card-body table-wrap" style={{padding:'0'}}>
            <table style={{fontSize:'12px'}}>
              <thead>
                <tr><th>矿区</th><th>矿种</th><th>储量</th><th>变动</th></tr>
              </thead>
              <tbody>
                {reserveSummary.map((r, i) => (
                  <tr key={i} onClick={() => navigate(`/detail/${r.markerId}`)}>
                    <td>{r.area}</td>
                    <td style={{color:'var(--text-light)'}}>{r.mineral}</td>
                    <td>{r.reserve}</td>
                    <td>
                      <span style={{color: r.change.startsWith('+') ? 'var(--success)' : 'var(--text-light)'}}>{r.change}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>📜 矿业权即将到期</h3>
            <button className="btn btn-sm btn-outline" onClick={() => toast('查看全部矿业权（演示）')}>查看全部</button>
          </div>
          <div className="card-body table-wrap" style={{padding:'0'}}>
            <table style={{fontSize:'12px'}}>
              <thead>
                <tr><th>矿权名称</th><th>权利人</th><th>有效期</th><th>状态</th></tr>
              </thead>
              <tbody>
                {rightsList.map((r, i) => (
                  <tr key={i} onClick={() => navigate(`/detail/${r.markerId}`)}>
                    <td>{r.name}</td>
                    <td style={{color:'var(--text-light)'}}>{r.holder}</td>
                    <td style={{color:'var(--text-light)'}}>{r.expire}</td>
                    <td><span className={`tag ${r.status === '有效' ? 'verified' : 'pending'}`}>{r.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
