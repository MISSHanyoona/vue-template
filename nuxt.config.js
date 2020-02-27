
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '今日律司',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '我们还是中国中小企业协会信用评级推荐单位、国家中小企业公共示范服务平台e办事的战略合作伙伴。通过我们对中小微企业的深度研究和大数据基础，我们为企业与律师架设一座以现代信息技术为基础的沟通服务桥梁。构建完善的生态链和深度服务能力，助力中国优质律师的高成长，服务、赋能。' },
      { hid: 'keywords', name: 'keywords', content: '今日律司，聚焦中国高成长律师的一站式法律咨询服务平台，平台隶属于蚁集网，前身是蚁集网平台旗下的一个专业服务类目，是全国领先的智慧产业服务平台的法律服务行业独家合作平台。' },
      { name: 'referrer', content: 'no-referrer'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  // loading: './components/loading.vue',
  loading: { color: '#ff5500'},
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/common.css',
    'element-ui/lib/theme-chalk/index.css',

  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/common.js', ssr: true },
    {src: '~/plugins/ElementUI', ssr: true }
    
  ],
  /*
  ** Nuxt.js dev-modul    es
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    vendor: ['element-ui'],
    extend (config, ctx) {
    }
  },
  server: {
    // port: 8074, // default: 3000
    // host: '192.168.0.45' // default: localhost
  }
}
