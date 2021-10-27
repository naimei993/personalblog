//项目的菜单配置
const articleList = [ //eslint-disable-next-line
    {
      title: 'React学习笔记', // 菜单标题名称
      id:'123456', // 对应的path
      creactDate:'2021-10-5', // 图标名称
      type:'学习笔记',
      img:'',
      content:'ECMAScript 6（简称ES6）是于2015年6月正式发布的JavaScript语言的标准，正式名为ECMAScript 2015（ES2015）。它的目标是使得JavaScript语言可以用来编写复杂的大型应用程序，成为企业级开发语言。此篇es6文章为前两篇es6文章的优化扩展整合版本。',
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
  export default articleList