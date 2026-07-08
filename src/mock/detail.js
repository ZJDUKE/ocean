// 基本信息
export const detailInfo = {
  id: 'SUS-2026-0001',
  name: '琼东南盆地油气构造',
  mineralType: '石油天然气',
  source: '多方综合',
  area: '南海 · 琼东南盆地',
  coord: "17°35'N, 111°20'E",
  depth: '800m',
  estimatedArea: '3,200km²',
  confidence: '高',
  status: '已验证',
  discoverDate: '2026-03-15',
  updateDate: '2026-05-20',
  dataOwner: '李明远（海洋厅矿产处）',
  department: '海南省海洋厅矿产管理处',
  confidenceScore: 92,
  evidenceTotal: 8,
  description: '位于琼东南盆地中央坳陷带，区域构造背景显示良好的生储盖组合条件。多道地震剖面显示存在大型构造圈闭，振幅异常与AVO属性指示含油气性。邻近已探明气田，成藏条件优越。',
}

// 证据链数据
export const evidenceData = {
  remote: [
    { name: 'Landsat-9 OLI多光谱影像', source: '中国资源卫星中心', type: '影像', date: '2025-12-03', conf: '强', summary: '显示海面油膜异常，疑似油气渗漏', file: '查看影像' },
    { name: 'Sentinel-1 SAR雷达影像', source: '欧空局', type: '雷达', date: '2026-01-18', conf: '良好', summary: '检测到海面粗糙度异常，吻合油膜分布', file: '查看影像' },
  ],
  geophy: [
    { name: '多道地震剖面解释', source: '中海油天津分公司', type: '地震', date: '2025-08-20', conf: '强', summary: '识别大型构造圈闭，面积约120km²', file: '查看图件' },
    { name: '重磁力异常图', source: '广州海洋地质调查局', type: '重磁', date: '2025-06-15', conf: '良好', summary: '局部重力高异常，指示基底隆起构造', file: '查看图件' },
    { name: 'AVO属性分析', source: '中海油研究总院', type: '地震属性', date: '2026-02-10', conf: '良好', summary: 'AVO异常检测显示含油气概率72%', file: '查看分析报告' },
  ],
  geochem: [
    { name: '海底沉积物烃类检测', source: '中科院南海海洋所', type: '化探', date: '2025-11-05', conf: '一般', summary: 'C1-C5烃类含量偏高，但异常幅度有限', file: '查看报告' },
  ],
  geology: [
    { name: '区域地质调查报告', source: '海南省地质调查院', type: '地质报告', date: '2025-04-10', conf: '良好', summary: '确认该区存在新近系滨海-浅海相沉积，具备生烃条件', file: '查看全文' },
  ],
  history: [
    { name: '南海北部油气勘探成果综述', source: '中国知网', type: '文献', date: '2024-12-01', conf: '一般', summary: '文献综述中指出该区带为潜在勘探远景区', file: '查看摘要' },
  ],
}

// 证据链维度定义
export const evidenceTabs = [
  { key: 'remote', label: '遥感影像', icon: '📡', count: 2 },
  { key: 'geophy', label: '地球物理', icon: '🌍', count: 3 },
  { key: 'geochem', label: '地球化学', icon: '🧪', count: 1 },
  { key: 'geology', label: '地质勘查', icon: '📋', count: 1 },
  { key: 'history', label: '历史文献', icon: '📚', count: 1 },
]

// 相关企业
export const companies = [
  { name: '中海油海南分公司', creditCode: '91460000MA5TXXXXX', type: 'operator', typeLabel: '作业者', project: '琼东南盆地油气勘探项目', contact: '0898-68XXXXXX', note: '已取得该区块探矿权' },
  { name: '广州海洋地质调查局', creditCode: '1210000044XXXXXX', type: 'research', typeLabel: '科研机构', project: '南海油气资源综合调查', contact: '020-87XXXXXX', note: '提供地球物理数据支撑' },
  { name: '中石油南方勘探开发公司', creditCode: '91460000MA7XXXXXX', type: 'investor', typeLabel: '投资方', project: '琼东南区块风险勘探合作', contact: '0898-68XXXXXX', note: '参与风险勘探投资' },
]
