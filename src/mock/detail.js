// ============================================================
// 矿产疑似位置 — 全量详情数据映射表
// 按 markerId 索引，支持 /detail/:id 动态路由
// ============================================================

// 所有10个标注点的详情数据
export const detailDataMap = {
  'SUS-2026-0001': {
    detailInfo: {
      id: 'SUS-2026-0001', name: '琼东南盆地油气构造', mineralType: '石油天然气',
      source: '多方综合', area: '南海 · 琼东南盆地', coord: "17°35'N, 111°20'E",
      depth: '800m', estimatedArea: '3,200km²', confidence: '高', status: '已验证',
      discoverDate: '2026-03-15', updateDate: '2026-05-20',
      dataOwner: '李明远（海洋厅矿产处）', department: '海南省海洋厅矿产管理处',
      confidenceScore: 92, evidenceTotal: 8,
      relatedMarkers: ['SUS-2026-0007', 'SUS-2026-0009'],
      description: '位于琼东南盆地中央坳陷带，区域构造背景显示良好的生储盖组合条件。多道地震剖面显示存在大型构造圈闭，振幅异常与AVO属性指示含油气性。邻近已探明气田，成藏条件优越。',
    },
    evidenceTabs: [
      { key: 'remote', label: '遥感影像', icon: '📡', count: 2 },
      { key: 'geophy', label: '地球物理', icon: '🌍', count: 3 },
      { key: 'geochem', label: '地球化学', icon: '🧪', count: 1 },
      { key: 'geology', label: '地质勘查', icon: '📋', count: 1 },
      { key: 'history', label: '历史文献', icon: '📚', count: 1 },
    ],
    evidenceData: {
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
    },
    companies: [
      { name: '中海油海南分公司', creditCode: '91460000MA5TXXXXX', type: 'operator', typeLabel: '作业者', project: '琼东南盆地油气勘探项目', contact: '0898-68XXXXXX', note: '已取得该区块探矿权' },
      { name: '广州海洋地质调查局', creditCode: '1210000044XXXXXX', type: 'research', typeLabel: '科研机构', project: '南海油气资源综合调查', contact: '020-87XXXXXX', note: '提供地球物理数据支撑' },
      { name: '中石油南方勘探开发公司', creditCode: '91460000MA7XXXXXX', type: 'investor', typeLabel: '投资方', project: '琼东南区块风险勘探合作', contact: '0898-68XXXXXX', note: '参与风险勘探投资' },
    ],
    projects: ['琼东南盆地油气勘查'],
    rights: ['琼东南油气探矿权'],
  },

  'SUS-2026-0002': {
    detailInfo: {
      id: 'SUS-2026-0002', name: '北部湾海砂矿区', mineralType: '海砂',
      source: '地质调查', area: '南海 · 北部湾', coord: "19°50'N, 108°30'E",
      depth: '60m', estimatedArea: '860km²', confidence: '中', status: '待验证',
      discoverDate: '2025-08-20', updateDate: '2026-05-10',
      dataOwner: '王建军（海洋厅矿产处）', department: '海南省海洋厅矿产管理处',
      confidenceScore: 65, evidenceTotal: 4,
      relatedMarkers: ['SUS-2026-0006'],
      description: '位于北部湾海域，海底表层沉积物以砂质为主，粒度分析显示分选性好，含矿层厚度约5-15m。前期采样显示海砂品质良好，适宜作为建筑用砂原料。',
    },
    evidenceTabs: [
      { key: 'remote', label: '遥感影像', icon: '📡', count: 1 },
      { key: 'geophy', label: '地球物理', icon: '🌍', count: 1 },
      { key: 'geochem', label: '地球化学', icon: '🧪', count: 0 },
      { key: 'geology', label: '地质勘查', icon: '📋', count: 2 },
      { key: 'history', label: '历史文献', icon: '📚', count: 0 },
    ],
    evidenceData: {
      remote: [{ name: 'GF-2高分辨率影像', source: '中国资源卫星中心', type: '影像', date: '2025-07-15', conf: '一般', summary: '可见海底砂波地貌分布', file: '查看影像' }],
      geophy: [{ name: '单道地震剖面', source: '海南地质局', type: '地震', date: '2025-06-10', conf: '良好', summary: '识别海砂层厚度约8-15m，分布连续', file: '查看图件' }],
      geochem: [],
      geology: [
        { name: '海底表层沉积物采样', source: '海南省地质调查院', type: '采样', date: '2025-05-20', conf: '良好', summary: '砂质含量>85%，含泥量<5%，符合建筑用砂标准', file: '查看报告' },
        { name: '北部湾海砂资源评价报告', source: '海南地质局', type: '评价报告', date: '2025-09-01', conf: '良好', summary: '预测资源量3,600万m³，可采储量2,400万m³', file: '查看全文' },
      ],
      history: [],
    },
    companies: [
      { name: '海南地质局', creditCode: '12460000XXXXXX', type: 'research', typeLabel: '科研机构', project: '北部湾海砂资源调查', contact: '0898-65XXXXXX', note: '调查单位' },
      { name: '海南海砂矿业有限公司', creditCode: '91460000MA7YYYYYY', type: 'operator', typeLabel: '作业者', project: '北部湾海砂开采项目', contact: '0898-65XXXXXX', note: '已取得采矿权' },
    ],
    projects: ['三亚湾海砂资源调查'],
    rights: ['三亚湾海砂采矿权'],
  },

  'SUS-2026-0003': {
    detailInfo: {
      id: 'SUS-2026-0003', name: '西沙海槽可燃冰远景', mineralType: '天然气水合物',
      source: '地球物理', area: '南海 · 西沙海槽', coord: "16°40'N, 112°15'E",
      depth: '1,200m', estimatedArea: '2,100km²', confidence: '高', status: '已验证',
      discoverDate: '2025-06-10', updateDate: '2026-05-22',
      dataOwner: '陈芳（储量管理处）', department: '海南省海洋厅储量管理处',
      confidenceScore: 88, evidenceTotal: 12,
      relatedMarkers: ['SUS-2026-0004', 'SUS-2026-0010'],
      description: '西沙海槽区域具备天然气水合物成藏的温压条件。BSR界面清晰，分布范围广。多道地震显示存在明显的似海底反射层（BSR），振幅空白带和速度异常等典型水合物标志。',
    },
    evidenceTabs: [
      { key: 'remote', label: '遥感影像', icon: '📡', count: 2 },
      { key: 'geophy', label: '地球物理', icon: '🌍', count: 5 },
      { key: 'geochem', label: '地球化学', icon: '🧪', count: 2 },
      { key: 'geology', label: '地质勘查', icon: '📋', count: 2 },
      { key: 'history', label: '历史文献', icon: '📚', count: 1 },
    ],
    evidenceData: {
      remote: [
        { name: 'HY-1C海洋水色影像', source: '国家卫星海洋应用中心', type: '影像', date: '2025-12-20', conf: '良好', summary: '海表温度异常区与BSR分布范围吻合', file: '查看影像' },
        { name: 'TerraSAR-X影像', source: '德国宇航中心', type: '雷达', date: '2026-01-05', conf: '一般', summary: '海面粗糙度显示微弱异常', file: '查看影像' },
      ],
      geophy: [
        { name: '多道地震BSR解释', source: '广州海洋地质调查局', type: '地震', date: '2025-08-15', conf: '强', summary: 'BSR清晰，分布面积约800km²，振幅空白带明显', file: '查看图件' },
        { name: '海底热流测量', source: '中科院南海海洋所', type: '热流', date: '2025-09-10', conf: '良好', summary: '热流值45-55mW/m²，有利于水合物稳定', file: '查看数据' },
        { name: '三维地震体属性分析', source: '中海油研究总院', type: '地震属性', date: '2026-02-15', conf: '强', summary: '阻抗反演显示高波速异常，含水合物层厚度约80m', file: '查看分析报告' },
        { name: 'OBS海底地震仪探测', source: '中科院深海所', type: '地震', date: '2025-11-20', conf: '良好', summary: '纵波速度异常，Vp/Vs比值降低，指示水合物存在', file: '查看报告' },
        { name: '电磁探测CSEM', source: '中国地质大学（北京）', type: '电磁', date: '2026-03-05', conf: '良好', summary: '电阻率异常层与BSR位置一致', file: '查看图件' },
      ],
      geochem: [
        { name: '海底沉积物孔隙水氯离子浓度', source: '广州海洋地质调查局', type: '化探', date: '2025-10-08', conf: '良好', summary: '氯离子浓度降低，显示水合物分解信号', file: '查看报告' },
        { name: '海水中甲烷浓度检测', source: '中科院南海海洋所', type: '化探', date: '2025-12-15', conf: '一般', summary: '海水中甲烷浓度略高于背景值', file: '查看数据' },
      ],
      geology: [
        { name: '西沙海槽地质构造图', source: '广州海洋地质调查局', type: '地质图', date: '2025-07-01', conf: '良好', summary: '构造背景适宜，发育滑塌构造和断裂系统', file: '查看图件' },
        { name: '沉积物粒度与矿物组成', source: '中国地质大学（武汉）', type: '测试', date: '2025-09-12', conf: '良好', summary: '细粒沉积物为主，有机碳含量0.8-1.2%', file: '查看报告' },
      ],
      history: [
        { name: '南海天然气水合物勘查进展', source: '中国知网', type: '文献', date: '2024-10-15', conf: '一般', summary: '指出西沙海槽为水合物重点远景区', file: '查看摘要' },
      ],
    },
    companies: [
      { name: '广州海洋地质调查局', creditCode: '1210000044XXXXXX', type: 'research', typeLabel: '科研机构', project: '西沙海槽天然气水合物调查', contact: '020-87XXXXXX', note: '承担BSR地震调查' },
      { name: '中科院深海科学与工程研究所', creditCode: '12100000XXXXXX', type: 'research', typeLabel: '科研机构', project: '深海探测技术支撑', contact: '0898-88XXXXXX', note: '提供OBS探测服务' },
      { name: '中海油研究总院', creditCode: '911100001000XXXX', type: 'investor', typeLabel: '投资方', project: '水合物开采技术预研', contact: '010-84XXXXXX', note: '参与开采技术论证' },
    ],
    projects: ['西沙海槽可燃冰先导'],
    rights: ['西沙海槽可燃冰探矿权'],
  },

  'SUS-2026-0004': {
    detailInfo: {
      id: 'SUS-2026-0004', name: '中沙多金属结核区', mineralType: '多金属结核',
      source: '遥感影像', area: '南海 · 中沙群岛', coord: "15°30'N, 114°50'E",
      depth: '3,800m', estimatedArea: '4,500km²', confidence: '中', status: '待验证',
      discoverDate: '2025-11-05', updateDate: '2026-04-18',
      dataOwner: '赵海燕（深海所）', department: '中科院深海科学与工程研究所',
      confidenceScore: 58, evidenceTotal: 3,
      relatedMarkers: ['SUS-2026-0010'],
      description: '水深3,500-4,000m的深海盆地，海底表层分布大量多金属结核。前期采样显示结核丰度中等，Mn、Cu、Co、Ni品位处于工业边界品位附近。',
    },
    evidenceTabs: [
      { key: 'remote', label: '遥感影像', icon: '📡', count: 1 },
      { key: 'geophy', label: '地球物理', icon: '🌍', count: 1 },
      { key: 'geochem', label: '地球化学', icon: '🧪', count: 0 },
      { key: 'geology', label: '地质勘查', icon: '📋', count: 1 },
      { key: 'history', label: '历史文献', icon: '📚', count: 0 },
    ],
    evidenceData: {
      remote: [{ name: 'MODIS水深反演', source: '国家卫星海洋应用中心', type: '遥感', date: '2025-10-12', conf: '一般', summary: '海底地貌特征显示深海平原分布', file: '查看影像' }],
      geophy: [{ name: '多波束测深数据', source: '中科院深海所', type: '地形', date: '2025-09-18', conf: '良好', summary: '水深3,500-4,000m，地形平坦，适合结核分布', file: '查看图件' }],
      geochem: [],
      geology: [{ name: '深海拖网采样', source: '中科院深海所', type: '采样', date: '2025-11-02', conf: '良好', summary: '结核丰度8-15kg/m²，Mn 28%，Cu 1.2%，Ni 1.5%', file: '查看报告' }],
      history: [],
    },
    companies: [
      { name: '中科院深海科学与工程研究所', creditCode: '12100000XXXXXX', type: 'research', typeLabel: '科研机构', project: '中沙多金属结核调查', contact: '0898-88XXXXXX', note: '承担采样与分析工作' },
    ],
    projects: ['中沙多金属结核调查'],
    rights: [],
  },

  'SUS-2026-0005': {
    detailInfo: {
      id: 'SUS-2026-0005', name: '三亚滨海沙矿', mineralType: '滨海沙矿',
      source: '地质调查', area: '南海 · 三亚海域', coord: "18°10'N, 109°30'E",
      depth: '15m', estimatedArea: '380km²', confidence: '低', status: '待验证',
      discoverDate: '2025-04-20', updateDate: '2025-12-10',
      dataOwner: '陈志远', department: '海南省地质调查院',
      confidenceScore: 35, evidenceTotal: 2,
      relatedMarkers: ['SUS-2026-0002'],
      description: '三亚近岸海域，水深10-20m，海底沉积物以砂质为主。前期零星采样显示砂质较好，但分布范围有限，品位稳定性待进一步查证。',
    },
    evidenceTabs: [
      { key: 'remote', label: '遥感影像', icon: '📡', count: 0 },
      { key: 'geophy', label: '地球物理', icon: '🌍', count: 1 },
      { key: 'geochem', label: '地球化学', icon: '🧪', count: 0 },
      { key: 'geology', label: '地质勘查', icon: '📋', count: 1 },
      { key: 'history', label: '历史文献', icon: '📚', count: 0 },
    ],
    evidenceData: {
      remote: [],
      geophy: [{ name: '浅地层剖面探测', source: '海南省地质调查院', type: '物探', date: '2025-04-08', conf: '一般', summary: '显示砂层厚度3-8m，连续性一般', file: '查看图件' }],
      geochem: [],
      geology: [{ name: '海底表层取样', source: '海南省地质调查院', type: '采样', date: '2025-04-15', conf: '一般', summary: '砂质含量70-80%，含少量粉砂和黏土', file: '查看报告' }],
      history: [],
    },
    companies: [
      { name: '海南省地质调查院', creditCode: '12460000XXXXXX', type: 'research', typeLabel: '科研机构', project: '三亚滨海沙矿调查', contact: '0898-65XXXXXX', note: '调查实施单位' },
    ],
    projects: [],
    rights: [],
  },

  'SUS-2026-0006': {
    detailInfo: {
      id: 'SUS-2026-0006', name: '琼北富钴结壳区', mineralType: '富钴结壳',
      source: '多方综合', area: '南海 · 琼北海域', coord: "19°20'N, 110°50'E",
      depth: '1,500m', estimatedArea: '1,200km²', confidence: '中', status: '已验证',
      discoverDate: '2025-05-15', updateDate: '2026-04-25',
      dataOwner: '刘海洋', department: '海南地质局矿产资源处',
      confidenceScore: 60, evidenceTotal: 6,
      relatedMarkers: ['SUS-2026-0002', 'SUS-2026-0005'],
      description: '琼北深海台地边缘，海山斜坡带发育富钴结壳。前期ROV观测和采样显示结壳厚度1-6cm，Co品位0.5-0.8%，Pt含量较高。',
    },
    evidenceTabs: [
      { key: 'remote', label: '遥感影像', icon: '📡', count: 1 },
      { key: 'geophy', label: '地球物理', icon: '🌍', count: 2 },
      { key: 'geochem', label: '地球化学', icon: '🧪', count: 1 },
      { key: 'geology', label: '地质勘查', icon: '📋', count: 1 },
      { key: 'history', label: '历史文献', icon: '📚', count: 1 },
    ],
    evidenceData: {
      remote: [{ name: 'WorldView-3立体影像', source: '美国DigitalGlobe', type: '影像', date: '2025-04-20', conf: '一般', summary: '海山地貌特征明显，陡坡发育', file: '查看影像' }],
      geophy: [
        { name: '多波束海底地形', source: '海南地质局', type: '地形', date: '2025-03-15', conf: '良好', summary: '识别海山斜坡带，坡度15-25°，水深1,200-1,800m', file: '查看图件' },
        { name: '浅地层剖面', source: '海南地质局', type: '物探', date: '2025-04-10', conf: '良好', summary: '结壳层声学反射特征明显，厚度不均', file: '查看图件' },
      ],
      geochem: [{ name: '海底岩石地球化学分析', source: '中国地质大学（北京）', type: '化探', date: '2025-06-20', conf: '良好', summary: 'Co 0.65%, Ni 0.4%, Mn 22%, Pt 0.5g/t', file: '查看报告' }],
      geology: [{ name: 'ROV海底观测与采样', source: '海南地质局', type: '水下观测', date: '2025-05-10', conf: '强', summary: '结壳厚度2-6cm，覆盖率60-80%，品质较好', file: '查看视频记录' }],
      history: [{ name: '南海富钴结壳资源潜力评估', source: '中国知网', type: '文献', date: '2024-08-20', conf: '一般', summary: '指出琼北海山带为结壳找矿重点区域', file: '查看摘要' }],
    },
    companies: [
      { name: '海南地质局', creditCode: '12460000XXXXXX', type: 'research', typeLabel: '科研机构', project: '琼北富钴结壳资源评价', contact: '0898-65XXXXXX', note: '调查实施单位' },
      { name: '中国地质大学（北京）', creditCode: '12100000XXXXXX', type: 'research', typeLabel: '科研机构', project: '结壳成因与成矿规律研究', contact: '010-82XXXXXX', note: '合作研究单位' },
    ],
    projects: ['琼北富钴结壳评价'],
    rights: ['琼北海砂探矿权'],
  },

  'SUS-2026-0007': {
    detailInfo: {
      id: 'SUS-2026-0007', name: '中建南盆地油气显示', mineralType: '石油天然气',
      source: '地球物理', area: '南海 · 中建南盆地', coord: "14°30'N, 113°40'E",
      depth: '2,000m', estimatedArea: '2,800km²', confidence: '高', status: '已验证',
      discoverDate: '2025-09-10', updateDate: '2026-05-18',
      dataOwner: '张明辉', department: '中海油海南分公司勘探部',
      confidenceScore: 85, evidenceTotal: 9,
      relatedMarkers: ['SUS-2026-0001', 'SUS-2026-0009'],
      description: '中建南盆地为南海西部重要的含油气盆地，古近系-新近系发育多套生储盖组合。地震资料显示存在多个大型构造圈闭和岩性圈闭。',
    },
    evidenceTabs: [
      { key: 'remote', label: '遥感影像', icon: '📡', count: 1 },
      { key: 'geophy', label: '地球物理', icon: '🌍', count: 4 },
      { key: 'geochem', label: '地球化学', icon: '🧪', count: 1 },
      { key: 'geology', label: '地质勘查', icon: '📋', count: 2 },
      { key: 'history', label: '历史文献', icon: '📚', count: 1 },
    ],
    evidenceData: {
      remote: [{ name: 'ASTER热红外影像', source: 'NASA', type: '影像', date: '2025-08-15', conf: '良好', summary: '海表温度异常指示油气渗漏', file: '查看影像' }],
      geophy: [
        { name: '三维地震构造解释', source: '中海油天津分公司', type: '地震', date: '2025-07-20', conf: '强', summary: '识别4个构造圈闭，总面积320km²', file: '查看图件' },
        { name: '地震相分析', source: '中海油研究总院', type: '地震属性', date: '2025-08-25', conf: '良好', summary: '河道砂体发育，储层物性良好', file: '查看报告' },
        { name: '重力与磁力异常', source: '广州海洋地质调查局', type: '重磁', date: '2025-06-10', conf: '良好', summary: '局部重力高+磁力低，指示构造隆起', file: '查看图件' },
        { name: '2D地震测线解释', source: '中石油东方物探', type: '地震', date: '2025-09-05', conf: '强', summary: '圈闭幅度200-400m，闭合面积50-120km²', file: '查看图件' },
      ],
      geochem: [{ name: '海底沉积物酸解烃检测', source: '中石化无锡地质所', type: '化探', date: '2025-10-12', conf: '一般', summary: 'C2-C5烃类异常，指示油气运移', file: '查看报告' }],
      geology: [
        { name: '区域地质综合研究报告', source: '中海油海南分公司', type: '研究报告', date: '2025-08-01', conf: '良好', summary: '古近系始新统烃源岩厚度200-400m，有机碳1.5-2.5%', file: '查看全文' },
        { name: '储层预测与评价', source: '中海油研究总院', type: '评价报告', date: '2025-11-15', conf: '良好', summary: '砂岩储层孔隙度15-22%，渗透率50-200mD', file: '查看报告' },
      ],
      history: [{ name: '南海西部油气成藏规律研究', source: '中国知网', type: '文献', date: '2024-12-10', conf: '一般', summary: '指出中建南盆地具有良好的油气勘探前景', file: '查看摘要' }],
    },
    companies: [
      { name: '中海油', creditCode: '911100001000XXXX', type: 'operator', typeLabel: '作业者', project: '中建南盆地油气勘探项目', contact: '010-84XXXXXX', note: '勘探作业主导单位' },
      { name: '中石油东方地球物理公司', creditCode: '91110000XXXXXX', type: 'investor', typeLabel: '投资方', project: '南海地震采集项目', contact: '010-81XXXXXX', note: '承担地震数据采集' },
      { name: '广州海洋地质调查局', creditCode: '1210000044XXXXXX', type: 'research', typeLabel: '科研机构', project: '南海西部油气资源调查', contact: '020-87XXXXXX', note: '提供基础地质资料' },
    ],
    projects: [],
    rights: [],
  },

  'SUS-2026-0008': {
    detailInfo: {
      id: 'SUS-2026-0008', name: '南沙热液硫化物区', mineralType: '热液硫化物',
      source: '地球化学', area: '南海 · 南沙海域', coord: "12°00'N, 116°30'E",
      depth: '2,800m', estimatedArea: '200km²', confidence: '低', status: '待验证',
      discoverDate: '2025-12-20', updateDate: '2026-03-05',
      dataOwner: '林海', department: '中科院南海海洋研究所',
      confidenceScore: 30, evidenceTotal: 2,
      relatedMarkers: ['SUS-2026-0010'],
      description: '南海东南部扩张脊附近，水深2,500-3,000m。前期海水异常检测显示存在热液喷口迹象，但尚未直接观测到硫化物堆积体。',
    },
    evidenceTabs: [
      { key: 'remote', label: '遥感影像', icon: '📡', count: 0 },
      { key: 'geophy', label: '地球物理', icon: '🌍', count: 1 },
      { key: 'geochem', label: '地球化学', icon: '🧪', count: 1 },
      { key: 'geology', label: '地质勘查', icon: '📋', count: 0 },
      { key: 'history', label: '历史文献', icon: '📚', count: 0 },
    ],
    evidenceData: {
      remote: [],
      geophy: [{ name: '海底地形与扩张脊识别', source: '中科院南海海洋所', type: '地形', date: '2025-12-10', conf: '一般', summary: '识别扩张脊地形，轴部发育裂谷', file: '查看图件' }],
      geochem: [{ name: '海水异常探测（Mn/Fe/CH₄）', source: '中科院南海海洋所', type: '化探', date: '2025-12-15', conf: '一般', summary: '海水中Mn浓度偏高，Fe轻微异常，甲烷异常', file: '查看报告' }],
      geology: [],
      history: [],
    },
    companies: [
      { name: '中科院南海海洋研究所', creditCode: '12100000XXXXXX', type: 'research', typeLabel: '科研机构', project: '南海热液活动调查', contact: '020-89XXXXXX', note: '承担海水异常探测' },
    ],
    projects: [],
    rights: [],
  },

  'SUS-2026-0009': {
    detailInfo: {
      id: 'SUS-2026-0009', name: '莺歌海盆地气田', mineralType: '石油天然气',
      source: '多方综合', area: '南海 · 莺歌海盆地', coord: "17°10'N, 108°00'E",
      depth: '300m', estimatedArea: '4,500km²', confidence: '高', status: '已验证',
      discoverDate: '2024-06-15', updateDate: '2026-05-20',
      dataOwner: '周志强', department: '中海油湛江分公司',
      confidenceScore: 95, evidenceTotal: 11,
      relatedMarkers: ['SUS-2026-0001', 'SUS-2026-0007'],
      description: '莺歌海盆地是南海西部已探明的含油气盆地，已发现多个气田。该区中新统-上新统发育大型泥底辟构造和超压体系，天然气资源丰富。',
    },
    evidenceTabs: [
      { key: 'remote', label: '遥感影像', icon: '📡', count: 2 },
      { key: 'geophy', label: '地球物理', icon: '🌍', count: 4 },
      { key: 'geochem', label: '地球化学', icon: '🧪', count: 2 },
      { key: 'geology', label: '地质勘查', icon: '📋', count: 2 },
      { key: 'history', label: '历史文献', icon: '📚', count: 1 },
    ],
    evidenceData: {
      remote: [
        { name: 'Envisat ASAR影像', source: '欧空局', type: '雷达', date: '2024-08-20', conf: '良好', summary: '检测到海面油膜与气苗异常', file: '查看影像' },
        { name: 'Landsat-8 OLI影像', source: 'USGS', type: '影像', date: '2024-09-10', conf: '良好', summary: '识别海底泥火山分布区', file: '查看影像' },
      ],
      geophy: [
        { name: '高分辨率三维地震', source: '中海油湛江分公司', type: '地震', date: '2024-05-15', conf: '强', summary: '精确刻画泥底辟构造，识别多个含气构造', file: '查看图件' },
        { name: 'AVO烃类检测', source: '中海油研究总院', type: '地震属性', date: '2024-07-20', conf: '强', summary: 'Ⅲ类AVO异常，含气概率>85%', file: '查看报告' },
        { name: '地震反演波阻抗', source: '中海油研究总院', type: '地震属性', date: '2024-08-10', conf: '强', summary: '低阻抗异常指示高孔隙度含气砂岩', file: '查看图件' },
        { name: '海底热流与地温场', source: '中国地质大学（北京）', type: '热流', date: '2024-06-20', conf: '良好', summary: '高地温梯度(4.5°C/100m)，天然气生成条件优越', file: '查看报告' },
      ],
      geochem: [
        { name: '天然气组分与碳同位素分析', source: '中海油实验中心', type: '化探', date: '2024-09-15', conf: '强', summary: '甲烷含量>95%，δ¹³C₁=-38‰，热成因气特征', file: '查看报告' },
        { name: '海底沉积物吸附烃', source: '中海油实验中心', type: '化探', date: '2024-10-05', conf: '良好', summary: 'C1-C4烃类含量高，指示活跃油气运移', file: '查看报告' },
      ],
      geology: [
        { name: '莺歌海盆地成藏综合研究', source: '中海油湛江分公司', type: '研究报告', date: '2024-07-01', conf: '强', summary: '证实该区为大型天然气富集区，探明地质储量超千亿方', file: '查看全文' },
        { name: '钻井岩心描述与测井解释', source: '中海油湛江分公司', type: '钻井', date: '2024-08-20', conf: '强', summary: '气层厚度20-60m，孔隙度18-28%，渗透率100-500mD', file: '查看报告' },
      ],
      history: [{ name: '南海天然气勘探重大突破', source: '石油学报', type: '期刊', date: '2024-03-10', conf: '良好', summary: '系统总结莺歌海盆地天然气成藏理论与勘探实践', file: '查看全文' }],
    },
    companies: [
      { name: '中海油湛江分公司', creditCode: '91460000MA5TZZZZZ', type: 'operator', typeLabel: '作业者', project: '莺歌海盆地天然气开发', contact: '0759-38XXXXXX', note: '气田开发作业者' },
      { name: '中海油研究总院', creditCode: '911100001000XXXX', type: 'research', typeLabel: '科研机构', project: '莺歌海盆地天然气成藏规律研究', contact: '010-84XXXXXX', note: '提供地质研究支撑' },
      { name: '中国石油大学（北京）', creditCode: '12100000XXXXXX', type: 'research', typeLabel: '科研机构', project: '超压盆地成藏动力学研究', contact: '010-89XXXXXX', note: '学术合作单位' },
    ],
    projects: [],
    rights: [],
  },

  'SUS-2026-0010': {
    detailInfo: {
      id: 'SUS-2026-0010', name: '南沙多金属结核远景区', mineralType: '多金属结核',
      source: '遥感影像', area: '南海 · 南沙海域', coord: "10°30'N, 115°20'E",
      depth: '4,200m', estimatedArea: '6,000km²', confidence: '低', status: '待验证',
      discoverDate: '2025-10-10', updateDate: '2025-12-20',
      dataOwner: '赵海燕（深海所）', department: '中科院深海科学与工程研究所',
      confidenceScore: 25, evidenceTotal: 1,
      relatedMarkers: ['SUS-2026-0004', 'SUS-2026-0008'],
      description: '南沙海域深海盆地，水深超过4,000m。根据海底地形和区域成矿规律推断可能存在多金属结核分布，但尚无直接采样证据。',
    },
    evidenceTabs: [
      { key: 'remote', label: '遥感影像', icon: '📡', count: 1 },
      { key: 'geophy', label: '地球物理', icon: '🌍', count: 0 },
      { key: 'geochem', label: '地球化学', icon: '🧪', count: 0 },
      { key: 'geology', label: '地质勘查', icon: '📋', count: 0 },
      { key: 'history', label: '历史文献', icon: '📚', count: 0 },
    ],
    evidenceData: {
      remote: [{ name: '卫星测高反演海底地形', source: '法国CLS空间中心', type: '地形', date: '2025-09-25', conf: '一般', summary: '识别深海平原区，地形平坦，沉积环境稳定', file: '查看数据' }],
      geophy: [],
      geochem: [],
      geology: [],
      history: [],
    },
    companies: [],
    projects: [],
    rights: [],
  },
}

// 获取所有详情信息的列表（用于相邻导航）
export const allDetailIds = Object.keys(detailDataMap)

// 获取相邻ID
export function getAdjacentIds(id) {
  const idx = allDetailIds.indexOf(id)
  if (idx === -1) return { prev: null, next: null }
  return {
    prev: idx > 0 ? allDetailIds[idx - 1] : null,
    next: idx < allDetailIds.length - 1 ? allDetailIds[idx + 1] : null,
  }
}
