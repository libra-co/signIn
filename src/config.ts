/*
 * @Author: libra 916196375@qq.com
 * @Date: 2023-05-21 21:44:09
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-05-23 14:23:01
 * @FilePath: \signInPlug\config.js
 * @Description: 配置项
 */
//config.js
//查询今日是否签到成功接口  https://api.juejin.cn/growth_api/v1/get_today_status
module.exports = {
  //掘金相关参数
  juejin: {
    signInUrl: `https://api.juejin.cn/growth_api/v1/check_in`,
    drawkUrl: `https://api.juejin.cn/growth_api/v1/lottery_config/get`,
    drawUrl: `https://api.juejin.cn/growth_api/v1/lottery/draw`,
    headers: {
      Referer: "https://juejin.cn/",
      "Upgrade-Insecure-Requests": 1,
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36",
      cookie: `__tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227205922068951746063%2522%252C%2522user_unique_id%2522%253A%25227205922068951746063%2522%252C%2522timestamp%2522%253A1677759499598%257D; n_mh=julZqX76tWQLi5aI4GCZMZ3ndJl-63AfqzCtPHx-cCk; sid_guard=b5d11c677cd92ad7eee14a18746472ca%7C1677762424%7C31536000%7CFri%2C+01-Mar-2024+13%3A07%3A04+GMT; uid_tt=0dccf7f7e62948cea035aaa4dc37d3aa; uid_tt_ss=0dccf7f7e62948cea035aaa4dc37d3aa; sid_tt=b5d11c677cd92ad7eee14a18746472ca; sessionid=b5d11c677cd92ad7eee14a18746472ca; sessionid_ss=b5d11c677cd92ad7eee14a18746472ca; sid_ucp_v1=1.0.0-KDY5ZTFkMDUxOTUyNzI3YzliZDRmZWJkMWY0MTA3MTdiMDNjOTE3MjgKFgiIj6HT9I02EPi-gqAGGLAUOAJA8QcaAmxmIiBiNWQxMWM2NzdjZDkyYWQ3ZWVlMTRhMTg3NDY0NzJjYQ; ssid_ucp_v1=1.0.0-KDY5ZTFkMDUxOTUyNzI3YzliZDRmZWJkMWY0MTA3MTdiMDNjOTE3MjgKFgiIj6HT9I02EPi-gqAGGLAUOAJA8QcaAmxmIiBiNWQxMWM2NzdjZDkyYWQ3ZWVlMTRhMTg3NDY0NzJjYQ; store-region=jp; store-region-src=uid; _tea_utm_cache_2608={%22utm_source%22:%22gold_browser_extension%22}; _ga=GA1.2.252265367.1679920277; csrf_session_id=f6462e7d2cf4a60c4de9d75d131a8c7d; msToken=plf0AmYU43Q7M7uw_0dIyeXYLUu6-SmUD3rSExVFMa21wPFjdGDEWRfrzVAF3hVK7mxuN4mmtl7yOgTP2ARakcZgJPBkgaLcPPUwNkXNIus=`, //用自己的
    }, //相关请求头
  },
  qqMusic: {
    signInUrl: `https://dachebijia.001api.com/Api/qy?qq=916196375&t=1`,
    backupUrl: `http://api.qdikun.com/api/qqmusic/?qq=916196375`, // 备用接口
    headers: {
      Referer: "dachebijia.001api.com/",
      "Upgrade-Insecure-Requests": 1,
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36",
    }, //相关请求头
  },
  ailiyun: {
    signInUrl: `https://auth.aliyundrive.com/v2/account/token`,
    awardUrl: `https://member.aliyundrive.com/v1/activity/sign_in_list`,
    drawUrl: `https://member.aliyundrive.com/v1/activity/sign_in_reward?_rx-s=mobile`,
    refresh_token: `2a776cff2b08420c93a836641e2a028e`,
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhM2VjNmRiMzRiYTY0MjUzOGNlODg2NGM0NjVmNTkzYiIsImN1c3RvbUpzb24iOiJ7XCJjbGllbnRJZFwiOlwiMjVkelgzdmJZcWt0Vnh5WFwiLFwiZG9tYWluSWRcIjpcImJqMjlcIixcInNjb3BlXCI6W1wiRFJJVkUuQUxMXCIsXCJTSEFSRS5BTExcIixcIkZJTEUuQUxMXCIsXCJVU0VSLkFMTFwiLFwiVklFVy5BTExcIixcIlNUT1JBR0UuQUxMXCIsXCJTVE9SQUdFRklMRS5MSVNUXCIsXCJCQVRDSFwiLFwiT0FVVEguQUxMXCIsXCJJTUFHRS5BTExcIixcIklOVklURS5BTExcIixcIkFDQ09VTlQuQUxMXCIsXCJTWU5DTUFQUElORy5MSVNUXCIsXCJTWU5DTUFQUElORy5ERUxFVEVcIl0sXCJyb2xlXCI6XCJ1c2VyXCIsXCJyZWZcIjpcImh0dHBzOi8vd3d3LmFsaXl1bmRyaXZlLmNvbS9cIixcImRldmljZV9pZFwiOlwiMzdlYTRjNTJlYzdjNGZhNWFhZmFkNTBlN2ZhZTI5MjVcIn0iLCJleHAiOjE2ODQ3NjQ5NzcsImlhdCI6MTY4NDc1NzcxN30.VAtZPSoZRGWYd7RUHZue2ZHpDqVDi3tAb4lTH4uFLuTYvjH_upI-6QyYw1kKEmiHwsZMk7jsfJyKmUrKNXu59CqaLqAJoFBzp8xmzQkHYZeaK5qTFmWQcce47eFIC75OSeS_K0Azv5_jYxrRvd_LPLn9q9m4Qu8UZ7boWd3GlJQ',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'Host': 'api.aliyundrive.com',
      'Connection': 'keep-alive'
    },
    awardHeaders: {
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhM2VjNmRiMzRiYTY0MjUzOGNlODg2NGM0NjVmNTkzYiIsImN1c3RvbUpzb24iOiJ7XCJjbGllbnRJZFwiOlwiMjVkelgzdmJZcWt0Vnh5WFwiLFwiZG9tYWluSWRcIjpcImJqMjlcIixcInNjb3BlXCI6W1wiRFJJVkUuQUxMXCIsXCJTSEFSRS5BTExcIixcIkZJTEUuQUxMXCIsXCJVU0VSLkFMTFwiLFwiVklFVy5BTExcIixcIlNUT1JBR0UuQUxMXCIsXCJTVE9SQUdFRklMRS5MSVNUXCIsXCJCQVRDSFwiLFwiT0FVVEguQUxMXCIsXCJJTUFHRS5BTExcIixcIklOVklURS5BTExcIixcIkFDQ09VTlQuQUxMXCIsXCJTWU5DTUFQUElORy5MSVNUXCIsXCJTWU5DTUFQUElORy5ERUxFVEVcIl0sXCJyb2xlXCI6XCJ1c2VyXCIsXCJyZWZcIjpcImh0dHBzOi8vd3d3LmFsaXl1bmRyaXZlLmNvbS9cIixcImRldmljZV9pZFwiOlwiYjVkNWY5MWYyYTVkNGUyZmEzNTE1YmYzOTc2OWM1NzRcIn0iLCJleHAiOjE2ODQ3Njk4MDksImlhdCI6MTY4NDc2MjU0OX0.csb5C6T_101UoNXRGGQXafUqkKV5WPOu4vmTVwNxMl1wUbumTT8yeGU2ttmnYL2FCNDatXEyYYAf37XDnUmvWbQGiQjUrS-EzpZ9kPNoirzb0Lo6rBx2kT2ErP-M6ylUBUE4WDaHACuUghoZ0iOUNNH88K9C3FMzr6Wc4xIxIWE',
      'User-Agent': 'Apifox/1.0.0 (https://www.apifox.cn)',
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'Host': 'member.aliyundrive.com',
      'Connection': 'keep-alive'
    },
    drawHeaders: {
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhM2VjNmRiMzRiYTY0MjUzOGNlODg2NGM0NjVmNTkzYiIsImN1c3RvbUpzb24iOiJ7XCJjbGllbnRJZFwiOlwiMjVkelgzdmJZcWt0Vnh5WFwiLFwiZG9tYWluSWRcIjpcImJqMjlcIixcInNjb3BlXCI6W1wiRFJJVkUuQUxMXCIsXCJTSEFSRS5BTExcIixcIkZJTEUuQUxMXCIsXCJVU0VSLkFMTFwiLFwiVklFVy5BTExcIixcIlNUT1JBR0UuQUxMXCIsXCJTVE9SQUdFRklMRS5MSVNUXCIsXCJCQVRDSFwiLFwiT0FVVEguQUxMXCIsXCJJTUFHRS5BTExcIixcIklOVklURS5BTExcIixcIkFDQ09VTlQuQUxMXCIsXCJTWU5DTUFQUElORy5MSVNUXCIsXCJTWU5DTUFQUElORy5ERUxFVEVcIl0sXCJyb2xlXCI6XCJ1c2VyXCIsXCJyZWZcIjpcImh0dHBzOi8vd3d3LmFsaXl1bmRyaXZlLmNvbS9cIixcImRldmljZV9pZFwiOlwiYjVkNWY5MWYyYTVkNGUyZmEzNTE1YmYzOTc2OWM1NzRcIn0iLCJleHAiOjE2ODQ3Njk4MDksImlhdCI6MTY4NDc2MjU0OX0.csb5C6T_101UoNXRGGQXafUqkKV5WPOu4vmTVwNxMl1wUbumTT8yeGU2ttmnYL2FCNDatXEyYYAf37XDnUmvWbQGiQjUrS-EzpZ9kPNoirzb0Lo6rBx2kT2ErP-M6ylUBUE4WDaHACuUghoZ0iOUNNH88K9C3FMzr6Wc4xIxIWE',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'Host': 'member.aliyundrive.com',
      'Connection': 'keep-alive'
    },
  },
  xiaoPoZhan: {
    username: '916196375',
    password: '916196375',
    loginInUrl: 'https://xiaopz.top/php/x.php?_rx-s=mobile',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
      'Accept': '*/*',
      'Host': 'xiaopz.top',
      'Connection': 'keep-alive',
      'Content-Type': 'text/html; charset=UTF-8',
    },
    signInUrl: 'https://xiaopz.top/php/x.php?_rx-s=mobile',
    
  },
  //消息推送相关参数 关注pushplus微信公众号可以获得一对一推送的调用参数，不是推广
  pushPlus: {
    url: `http://www.pushplus.plus/send`,
    token: `553f9cb70843431597a3886f6e21409b`, //没有广告啊，这是免费的
  }
} as const
