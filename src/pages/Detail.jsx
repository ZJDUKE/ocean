import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useToast } from '../context/ToastContext'
import { detailDataMap, allDetailIds, getAdjacentIds } from '../mock/detail'
import './Detail.css'

function renderStars(score) {
  const full = Math.round(score / 20)
  return (
    <span className="stars">
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} className={i <= full ? 'star-filled' : 'star-empty'}>★</span>
      ))}
    </span>
  )
}

function getConfTag(conf) {
  const map = { '强': 'high-conf', '良好': 'med-conf', '一般': 'low-conf' }
  return map[conf] || 'med-conf'
}

function getStatusTag(status) {
  return status === '已验证' ? 'verified' : 'pending'
}

const infoFields = [
  { key: 'id', label: '疑似位置编号' },
  { key: 'name', label: '名称' },
  { key: 'mineralType', label: '矿产种类' },
  { key: 'source', label: '信息来源' },
  { key: 'area', label: '所属海域' },
  { key: 'coord', label: '中心坐标' },
  { key: 'depth', label: '水深', unit: 'm' },
  { key: 'estimatedArea', label: '预估面积', unit: 'km²' },
  { key: 'confidence', label: '置信等级' },
  { key: 'status', label: '状态' },
  { key: 'discoverDate', label: '发现日期' },
  { key: 'updateDate', label: '更新日期' },
  { key: 'dataOwner', label: '数据负责人' },
  { key: 'department', label: '所属部门' },
  {
    key: 'confidenceScore',
    label: '置信评分',
    render: (v) => (
      <>{v}<span className="unit">/100</span></>
    ),
  },
  {
    key: 'evidenceTotal',
    label: '证据总数',
    render: (v) => (
      <>{v}<span className="unit">条</span></>
    ),
  },
]

export default function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const toast = useToast()

  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('remote')
  const [showModal, setShowModal] = useState(false)
  const [showMiniMap, setShowMiniMap] = useState(false)
  const [verified, setVerified] = useState(false)

  const data = detailDataMap[id]
  const notFound = !data

  useEffect(() => {
    setLoading(true)
    setActiveTab('remote')
    setShowModal(false)
    setShowMiniMap(false)
    setVerified(data?.detailInfo?.status === '已验证')
    const t = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(t)
  }, [id])

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner" />
        <span>加载中...</span>
      </div>
    )
  }

  if (notFound) {
    return (
      <div className="detail-page">
        <div className="empty-state" style={{ paddingTop: 80 }}>
          <div className="empty-icon">🔍</div>
          <p style={{ fontSize: 16, marginBottom: 12 }}>未找到 ID 为「{id}」的疑似位置</p>
          <button className="btn btn-outline" onClick={() => navigate('/onemap')}>
            ← 返回海洋一张图
          </button>
        </div>
      </div>
    )
  }

  const { detailInfo, evidenceTabs, evidenceData, companies } = data
  const { prev, next } = getAdjacentIds(id)
  const currentEvidences = evidenceData[activeTab] || []
  const relatedMarkers = detailInfo.relatedMarkers || []

  const handleVerify = () => {
    setShowModal(false)
    setVerified(true)
    toast('已标记为已验证')
  }

  const handleExport = () => {
    toast('报告导出任务已提交，请稍后在消息中心下载')
  }

  const handleFileClick = (item) => {
    toast(`查看文件：${item.file} — ${item.name}`)
  }

  return (
    <div className="detail-page">
      {/* Back bar */}
      <div className="back-bar">
        <a onClick={() => navigate('/onemap')}>← 返回海洋一张图</a>
        <span className="sep">|</span>
        <button
          className="btn btn-sm btn-outline"
          onClick={() => setShowMiniMap(prev => !prev)}
        >
          📍 {showMiniMap ? '关闭地图' : '在地图中查看'}
        </button>
        <span className="location-text">📍 当前位置：{detailInfo.area}</span>
      </div>

      {/* Header */}
      <div className="detail-header">
        <div className="dh-left">
          <h1>
            {detailInfo.name}
            <span className="pos-id">{detailInfo.id}</span>
          </h1>
          <div className="dh-meta">
            {renderStars(detailInfo.confidenceScore)}
            <span className={`tag ${getStatusTag(detailInfo.status)}`}>
              {verified ? '已验证' : '待验证'}
            </span>
            <span style={{ color: 'var(--text-light)', fontSize: 12 }}>
              来源：{detailInfo.source}
            </span>
            <span style={{ color: 'var(--text-light)', fontSize: 12 }}>
              发现：{detailInfo.discoverDate}
            </span>
            <span style={{ color: 'var(--text-light)', fontSize: 12 }}>
              更新：{detailInfo.updateDate}
            </span>
          </div>
        </div>
        <div className="dh-right">
          <button
            className="btn btn-primary"
            disabled={verified}
            onClick={() => setShowModal(true)}
          >
            ✅ 标记为已验证
          </button>
          <button className="btn btn-outline" onClick={handleExport}>
            📄 导出报告
          </button>
        </div>
      </div>

      {/* Prev / Next navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 18, gap: 12 }}>
        {prev ? (
          <button
            className="btn btn-outline"
            onClick={() => navigate(`/detail/${prev}`)}
          >
            ◀ 上一个
          </button>
        ) : (
          <div />
        )}
        {next && (
          <button
            className="btn btn-outline"
            onClick={() => navigate(`/detail/${next}`)}
          >
            下一个 ▶
          </button>
        )}
      </div>

      {/* 基本信息 */}
      <div className="section">
        <div className="section-header">
          <h3>📋 基本信息</h3>
        </div>
        <div className="section-body">
          <div className="info-grid">
            {infoFields.map(field => {
              const value = detailInfo[field.key]
              return (
                <div key={field.key} className="info-item">
                  <div className="ii-label">{field.label}</div>
                  <div className="ii-value">
                    {field.render ? field.render(value) : value}
                    {!field.render && field.unit && <span className="unit">{field.unit}</span>}
                  </div>
                </div>
              )
            })}
            <div className="info-item full">
              <div className="ii-label">综合描述</div>
              <div className="ii-value" style={{ fontSize: 13, lineHeight: 1.7, fontWeight: 400 }}>
                {detailInfo.description}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 证据链 */}
      <div className="section">
        <div className="section-header">
          <h3>🔗 证据链</h3>
          <span className="tag verified" style={{ fontSize: 12 }}>
            共 {detailInfo.evidenceTotal} 条证据
          </span>
        </div>
        <div className="section-body">
          {/* Tabs */}
          <div className="evi-tabs">
            {evidenceTabs.map(tab => (
              <button
                key={tab.key}
                className={`evi-tab ${activeTab === tab.key ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.icon} {tab.label}
                <span className="evi-count">{tab.count}</span>
              </button>
            ))}
          </div>

          {/* Summary bar */}
          <div className="evi-summary">
            <div className="es-item">
              证据链评估：<span className="es-val good">综合置信度较高</span>
            </div>
            <div className="es-item">
              有效证据占比：<span className="es-val good">87.5%</span>
            </div>
            <div className="es-item" style={{ flex: 1 }}>
              <span style={{ color: 'var(--text-light)' }}>
                多维度证据相互印证，构造-地球物理-地球化学证据链完整
              </span>
            </div>
          </div>

          {/* Table */}
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>证据名称</th>
                  <th>来源</th>
                  <th>数据类型</th>
                  <th>日期</th>
                  <th>置信贡献</th>
                  <th>结论摘要</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {currentEvidences.map((evi, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 500 }}>{evi.name}</td>
                    <td style={{ color: 'var(--text-light)' }}>{evi.source}</td>
                    <td>{evi.type}</td>
                    <td style={{ color: 'var(--text-light)' }}>{evi.date}</td>
                    <td>
                      <span className={`tag ${getConfTag(evi.conf)}`}>{evi.conf}</span>
                    </td>
                    <td style={{ color: 'var(--text-light)', maxWidth: 260, whiteSpace: 'normal', wordBreak: 'break-all' }}>
                      {evi.summary}
                    </td>
                    <td>
                      <span className="evi-file" onClick={() => handleFileClick(evi)}>
                        {evi.file}
                      </span>
                    </td>
                  </tr>
                ))}
                {currentEvidences.length === 0 && (
                  <tr>
                    <td colSpan={7} style={{ textAlign: 'center', color: 'var(--text-light)', padding: 40 }}>
                      暂无证据数据
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 相关企业 */}
      <div className="section">
        <div className="section-header">
          <h3>🏢 相关企业</h3>
          {companies.length > 0 && (
            <button className="btn btn-sm btn-outline" onClick={() => toast('查看全部关联企业（演示）')}>
              查看全部
            </button>
          )}
        </div>
        <div className="section-body" style={{ padding: companies.length === 0 ? '16px 20px' : 0 }}>
          {companies.length === 0 ? (
            <div style={{ textAlign: 'center', color: 'var(--text-light)', padding: '20px 0' }}>
              暂无关联企业
            </div>
          ) : (
            <div className="table-wrap company-table">
              <table>
                <thead>
                  <tr>
                    <th>企业名称</th>
                    <th>统一社会信用代码</th>
                    <th>关联类型</th>
                    <th>关联项目</th>
                    <th>联系方式</th>
                    <th>备注</th>
                  </tr>
                </thead>
                <tbody>
                  {companies.map((c, i) => (
                    <tr key={i} onClick={() => toast(`查看企业详情：${c.name}`)}>
                      <td style={{ fontWeight: 500 }}>{c.name}</td>
                      <td style={{ color: 'var(--text-light)', fontFamily: 'monospace', fontSize: 12 }}>{c.creditCode}</td>
                      <td><span className={`comp-tag ${c.type}`}>{c.typeLabel}</span></td>
                      <td style={{ color: 'var(--text-light)' }}>{c.project}</td>
                      <td style={{ color: 'var(--text-light)' }}>{c.contact}</td>
                      <td style={{ color: 'var(--text-light)', maxWidth: 200, whiteSpace: 'normal', wordBreak: 'break-all' }}>{c.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* 关联标注点 */}
      {relatedMarkers.length > 0 && (
        <div className="section">
          <div className="section-header">
            <h3>📍 关联标注点</h3>
          </div>
          <div className="section-body">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 10 }}>
              {relatedMarkers.map(rid => {
                const related = detailDataMap[rid]
                if (!related) return null
                const r = related.detailInfo
                return (
                  <div
                    key={rid}
                    className="card"
                    style={{ cursor: 'pointer', marginBottom: 0 }}
                    onClick={() => navigate(`/detail/${rid}`)}
                  >
                    <div className="card-body" style={{ padding: '12px 16px' }}>
                      <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{r.name}</div>
                      <div style={{ fontSize: 12, color: 'var(--text-light)' }}>
                        {r.id} · {r.mineralType}
                      </div>
                      <div style={{ fontSize: 12, color: 'var(--text-light)', marginTop: 4 }}>
                        {r.area} · {r.depth}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Verification Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h4>✅ 确认验证</h4>
            <p>
              即将标记「<strong>{detailInfo.name}</strong>（{detailInfo.id}）」为<strong>已验证</strong>状态。
              此操作将更新该疑似位置的状态信息，确认后不可直接撤销。
            </p>
            <div className="modal-actions">
              <button className="btn btn-outline" onClick={() => setShowModal(false)}>
                取消
              </button>
              <button className="btn btn-primary" onClick={handleVerify}>
                确认验证
              </button>
            </div>
          </div>
        </div>
      )}

      {/* GIS Mini Map */}
      <div className={`gis-mini ${showMiniMap ? 'show' : ''}`}>
        <div className="gm-header">
          <span>🗺️ 位置示意图</span>
          <button onClick={() => setShowMiniMap(false)}>✕</button>
        </div>
        <div className="gm-map">
          <div className="gm-placeholder">
            <div className="gm-pin">📍</div>
            <div>{detailInfo.area}</div>
            <div style={{ marginTop: 4, opacity: 0.6 }}>{detailInfo.coord}</div>
          </div>
          <div className="coord-label">{detailInfo.coord}</div>
        </div>
      </div>
    </div>
  )
}
