//项目的菜单配置
const menuList = [ //eslint-disable-next-line
  {
    title: '首页', // 菜单标题名称
    key: 'admin', // 对应的path
    icon: 'HomeOutlined', // 图标名称
    path: '/admin'//对应路径
  },
  {
    title: '实战',
    key: 'actualcombat',
    icon: 'FormOutlined',
    path: '/actualcombat',
  },

  {
    title: '生活',
    key: 'life',
    icon: 'SmileOutlined',
    path: '/life'
  },
  {
    title: '记录',
    key: 'record',
    icon: 'FileTextOutlined',
    path: '/record'
  },

  {
    title: '互动',
    key: 'interactive',
    icon: 'LikeOutlined',
    path:'/interactive'
  },
  {
    title: '关于',
    key: 'about',
    icon: 'InfoCircleOutlined',
    path: '/about'
  },
  {
    title: '',
    key: 'more',
    icon: 'CaretDownOutlined',
    children: [
      {
        title: '百度',
        key: 'bar',
        icon: 'BarChartOutlined',
        path: '/admin/charts/bar'
      },
      {
        title: '谷歌',
        key: 'line',
        icon: 'LineChartOutlined',
        path: '/admin/charts/line'
      },
      {
        title: '夸克',
        key:  'pie',
        icon: 'PieChartOutlined',
        path: '/admin/charts/pie'
      },
    ]
  },
]
export default menuList