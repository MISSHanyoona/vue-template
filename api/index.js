import { get, post,getLocation } from './helper'

// const getLocationAPI = getLocation('https://restapi.amap.com/v3/ip?key=9e1678cad8b95a0c4d3fede01f12ef91')
const getLocationAPI = getLocation('http://api.benlai58.com/area/shield/getArea')
const getArticalAPI = get('/search/article')// 获取创头条文章
const getArticleInfoAPI = get('/article/shield/findById')// 根据ID获取文章详情
const getArticleChangeAPI = get('/article/shield/next')// 文章详情 上/下一篇
const articleStatic = get('/article/shield/statistics')// 文章详情埋点
const postApplyForm = post('/apply/create')//al 法律顾问 预约 开通律司通会员登录表单
const postShieldApplyForm = post('/apply/shield/create')//开通律司通会员不登录表单
//搜索
const getLawyerAPI = get('/search/customerLawyer') // 获取 查询律师
const getCfgDataAPI = get('/cfgData/shield/findList')// type=lawyer_specialty按专业type=lawyer_question按问题lawyer_field按案件 status 1,2
//律师详情
const getLawyerDetailAPI = get('/customerLawyer/findByCustomerCode')//获取律师详情
const getLawyerServiceAPI = get('/item/findBySysCode')//获取律师服务 6个
const getServiceItemAPI = get('/customerItem/page')//获取律师已开通服务
const getLawyerArticleAPI = get('/search/customerArticle')//获取律师详情文章资讯   new 代表新闻咨询、law代表法律知识、classic代表典型案例
const getLawyerOrderAPI = post('/createOrder')//律师下单提交接口
const getLawyerFreeShieldAPI = post('/request/shield/addRequest')//律师免费咨询、立即约ta提交接口 未登录
const getLawyerFreeAPI = post('/request/addRequest')//律师免费咨询、立即约ta提交接口 已登录
const getServiceProdAPI = get('/item/findByCode')//获取律师服务介绍
const getLawyerCodeAPI = get('/qrCode/shield/getQrCode') //获取律师移动端二维码
const getcustomerArticleAPI = get('/customerArticle/findById') //获取他的文集文章详情
//
const getPhoneCodeAPI = get('/code/shield/getMsgCode') //获取手机短信验证码
const getAreaAPI = get('/serviceArea/shield/findByPid') // 获取地区
//
const getItnodeFilter = get('/itnode/shield/filter') // 首页小表单热门问题
//修改密码
const findPsdOneAPI = post('/zhg/cust/shield/findPswdOne') // 修改密码1
const findPsdTwoAPI = post('/zhg/cust/shield/findPswdTwo') // 修改密码2
//登录、注册
const postLoginAPI = post('/zhg/cust/shield/login') //账号登陆
const postLoginPhoneAPI = post('/zhg/cust/shield/loginPhone') //手机号码登录
const postLoginServiceAPI = post('/zhg/cust/shield/login?serviceCode=JRLS') //服务商登录
const postRegisterAPI = post('/zhg/cust/shield/register') //账号注册
const getImgCodeAPI = get('/code/shield/getImgCode') //获取图片验证码
//


export {
  
  getLocationAPI,
  getArticalAPI,
  getArticleInfoAPI,
  getArticleChangeAPI,
  articleStatic,
  postApplyForm,
  postShieldApplyForm,
  getLawyerAPI,
  getCfgDataAPI,

  getLawyerDetailAPI,
  getLawyerServiceAPI,
  getServiceItemAPI,
  getLawyerArticleAPI,
  getLawyerOrderAPI,
  getLawyerFreeShieldAPI,
  getLawyerFreeAPI,
  getServiceProdAPI,
  getLawyerCodeAPI,
  getcustomerArticleAPI,
  getPhoneCodeAPI,
  getAreaAPI,
  getItnodeFilter,

  postLoginAPI,
  postLoginPhoneAPI,
  postLoginServiceAPI,
  postRegisterAPI,
  getImgCodeAPI,
  findPsdOneAPI,
  findPsdTwoAPI
}
