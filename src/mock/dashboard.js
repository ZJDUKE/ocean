// 矿产类型
export const mineralTypes = [
  { key: 'oilGas', label: '石油天然气', color: '#ef4444' },
  { key: 'seaSand', label: '海砂', color: '#f59e0b' },
  { key: 'gasHydrate', label: '天然气水合物', color: '#8b5cf6' },
  { key: 'polymetallic', label: '多金属结核', color: '#3b82f6' },
  { key: 'cobaltCrust', label: '富钴结壳', color: '#10b981' },
  { key: 'hydrothermal', label: '热液硫化物', color: '#f97316' },
  { key: 'beachPlacer', label: '滨海沙矿', color: '#ec4899' },
]

// 统计数据
export const dashboardStats = {
  explorationCount: 6,
  reserveCount: 8,
  annualInvestment: '4.2亿',
  validRights: 18,
}

// 预警信息
export const alerts = [
  { type: 'warn', msg: '琼东南海域发现疑似非法勘查活动', time: '10分钟前' },
  { type: 'info', msg: '矿业权证「SY-2026-0012」将于30天后到期', time: '1小时前' },
  { type: 'info', msg: '三亚湾海砂储量月报已超期3天未填报', time: '2小时前' },
]

// 最近动态
export const activities = [
  { time: '09:30', desc: '勘查管理员 <strong>王建军</strong> 提交了琼东南盆地油气勘查项目验收申请' },
  { time: '09:15', desc: '储量管理员 <strong>陈芳</strong> 更新了西沙海槽可燃冰储量数据' },
  { time: '08:50', desc: '系统自动生成了 <strong>2026年4月储量台账</strong>' },
  { time: '08:30', desc: '矿业权管理员 <strong>赵明</strong> 审批通过了「三亚海砂开采」矿权续期申请' },
  { time: '昨日', desc: '环境监测系统在 <strong>琼北海域</strong> 检测到水质异常（pH 8.9）' },
]

// 勘查项目列表
export const explorationProjects = [
  { name: '琼东南盆地油气勘查', location: '琼东南 · 3,200km²', mineral: '石油天然气', company: '中海油', phase: '详查', status: '进行中' },
  { name: '三亚湾海砂资源调查', location: '三亚湾 · 860km²', mineral: '海砂', company: '地质院', phase: '普查', status: '进行中' },
  { name: '西沙海槽可燃冰先导', location: '西沙海槽 · 2,100km²', mineral: '天然气水合物', company: '广州海洋局', phase: '勘探', status: '进行中' },
  { name: '中沙多金属结核调查', location: '中沙群岛 · 4,500km²', mineral: '多金属结核', company: '中科院深海所', phase: '预查', status: '筹备中' },
  { name: '琼北富钴结壳评价', location: '琼北海域 · 1,200km²', mineral: '富钴结壳', company: '海南地质局', phase: '详查', status: '进行中' },
]

// 储量和矿权简表
export const reserveSummary = [
  { area: '琼东南盆地气田', mineral: '石油天然气', reserve: '2,500万吨', change: '+5.2%' },
  { area: '三亚湾海砂矿区', mineral: '海砂', reserve: '3,600万m³', change: '-1.2%' },
  { area: '西沙海槽可燃冰', mineral: '天然气水合物', reserve: '1,800万吨油当量', change: '--' },
  { area: '琼北滨海沙矿', mineral: '滨海沙矿', reserve: '890万m³', change: '+2.8%' },
]

export const rightsList = [
  { name: '琼东南油气探矿权', holder: '中海油海南分公司', area: '3,200km²', expire: '2028-06-30', status: '有效' },
  { name: '三亚湾海砂采矿权', holder: '海南海砂矿业', area: '120km²', expire: '2026-09-15', status: '即将到期' },
  { name: '西沙海槽可燃冰探矿权', holder: '广州海洋地质局', area: '2,100km²', expire: '2029-12-31', status: '有效' },
  { name: '琼北海砂探矿权', holder: '海南地质局', area: '680km²', expire: '2027-03-20', status: '有效' },
]
