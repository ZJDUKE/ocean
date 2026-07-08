// 矿产疑似位置标注点
export const mineralMarkers = [
  { id: 'SUS-2026-0001', name: '琼东南盆地油气构造', type: '石油天然气', source: '多方综合', conf: '高', status: '已验证', company: '中海油海南分公司', pos: { x: 22, y: 37 }, evidenceCount: 8, area: '南海 · 琼东南盆地', coord: '17°35\'N, 111°20\'E' },
  { id: 'SUS-2026-0002', name: '北部湾海砂矿区', type: '海砂', source: '地质调查', conf: '中', status: '待验证', company: '海南地质局', pos: { x: 30, y: 52 }, evidenceCount: 4, area: '南海 · 北部湾', coord: '19°50\'N, 108°30\'E' },
  { id: 'SUS-2026-0003', name: '西沙海槽可燃冰远景', type: '天然气水合物', source: '地球物理', conf: '高', status: '已验证', company: '广州海洋地质调查局', pos: { x: 52, y: 42 }, evidenceCount: 12, area: '南海 · 西沙海槽', coord: '16°40\'N, 112°15\'E' },
  { id: 'SUS-2026-0004', name: '中沙多金属结核区', type: '多金属结核', source: '遥感影像', conf: '中', status: '待验证', company: '中科院深海所', pos: { x: 68, y: 48 }, evidenceCount: 3, area: '南海 · 中沙群岛', coord: '15°30\'N, 114°50\'E' },
  { id: 'SUS-2026-0005', name: '三亚滨海沙矿', type: '滨海沙矿', source: '地质调查', conf: '低', status: '待验证', company: '海南省地质调查院', pos: { x: 45, y: 58 }, evidenceCount: 2, area: '南海 · 三亚海域', coord: '18°10\'N, 109°30\'E' },
  { id: 'SUS-2026-0006', name: '琼北富钴结壳区', type: '富钴结壳', source: '多方综合', conf: '中', status: '已验证', company: '海南地质局', pos: { x: 38, y: 30 }, evidenceCount: 6, area: '南海 · 琼北海域', coord: '19°20\'N, 110°50\'E' },
  { id: 'SUS-2026-0007', name: '中建南盆地油气显示', type: '石油天然气', source: '地球物理', conf: '高', status: '已验证', company: '中海油', pos: { x: 58, y: 55 }, evidenceCount: 9, area: '南海 · 中建南盆地', coord: '14°30\'N, 113°40\'E' },
  { id: 'SUS-2026-0008', name: '南沙热液硫化物区', type: '热液硫化物', source: '地球化学', conf: '低', status: '待验证', company: '中科院南海所', pos: { x: 75, y: 62 }, evidenceCount: 2, area: '南海 · 南沙海域', coord: '12°00\'N, 116°30\'E' },
  { id: 'SUS-2026-0009', name: '莺歌海盆地气田', type: '石油天然气', source: '多方综合', conf: '高', status: '已验证', company: '中海油', pos: { x: 15, y: 45 }, evidenceCount: 11, area: '南海 · 莺歌海盆地', coord: '17°10\'N, 108°00\'E' },
  { id: 'SUS-2026-0010', name: '南沙多金属结核远景区', type: '多金属结核', source: '遥感影像', conf: '低', status: '待验证', company: '中科院深海所', pos: { x: 55, y: 68 }, evidenceCount: 1, area: '南海 · 南沙海域', coord: '10°30\'N, 115°20\'E' },
]

// 矿产专题图层
export const layers = [
  { id: 'distribution', name: '矿产资源分布', color: '#ef4444', visible: true },
  { id: 'suspicious', name: '矿产疑似位置', color: '#f59e0b', visible: true },
  { id: 'rights', name: '矿业权范围', color: '#8b5cf6', visible: true },
  { id: 'project', name: '勘查项目位置', color: '#3b82f6', visible: true },
  { id: '3dmodel', name: '三维地质模型覆盖区', color: '#10b981', visible: false },
  { id: 'evidence', name: '证据链标注点', color: '#f97316', visible: false },
  { id: 'expiry', name: '矿权到期预警', color: '#ec4899', visible: false },
  { id: 'sediment', name: '沉积物类型图', color: '#06b6d4', visible: false },
]

// 场景Tab
export const sceneTabs = [
  { key: 'overview', label: '综合态势', icon: '🌊' },
  { key: 'mineral', label: '海洋矿产', icon: '⛏️', badge: 24, active: true },
  { key: 'disaster', label: '灾害防治', icon: '🌪️' },
  { key: 'enforcement', label: '海洋执法', icon: '🚢' },
  { key: 'fishery', label: '渔业资源', icon: '🐟' },
]

// 统计数据
export const mapStats = [
  { icon: '🔍', value: '6', label: '正在勘查' },
  { icon: '📦', value: '8', label: '探明储量矿区' },
  { icon: '💰', value: '4.2亿', label: '年度投入' },
  { icon: '📜', value: '18', label: '矿权有效' },
]
