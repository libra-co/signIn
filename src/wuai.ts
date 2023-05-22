/*
 * @Author: liuhongbo 916196375@qq.com
 * @Date: 2023-05-21 23:44:01
 * @LastEditors: liuhongbo 916196375@qq.com
 * @LastEditTime: 2023-05-22 01:46:28
 * @FilePath: \signInPlug\src\wuai.ts
 * @Description: 吾爱
 */
import axios from "axios"
import { getNowTime, pushMsg } from ".";
const { wuai } = require('./config')

export const signInWuai = async () => {
    // 1.登录吾爱论坛
    const loginRes = await axios({
        url: 'https://www.52pojie.cn/home.php?mod=task&do=apply&id=2',
        method: 'post',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'cookie': '__bid_n=1869df778d53d4f30e4207; __gads=ID=1fb5d21c414232ff-2255e0d9f6db0028:T=1678591488:RT=1678591488:S=ALNI_MZb7lpzLU3FPNRuRD0_sN155-PJTA; FPTOKEN=aIhwbnJEVI/Fv7UxZeHHDh0iq35RYFGFYta06zuLLvZUy7dUU7TAnkb3iQlPR6vQN49JzCizTn3ZuXWAOevszed2sJDhF3nYarz51l2VBi+WVPdUZTPNBwAvXVGxVR2QTxvWK0cG1s4gD85U3ohgOtA5/AFvOZJhi7iPARac6j1bszeEFbTuqwto8p4Gd2C8VGLRnqpyKvxhVFN4cSmtcbVi+iEaUc7MSqehgtdbEwgbjHtin8j1dTUw960By2wIDJZksXa2M7VB5znCY5gjieJTp8/JiFRlydZXqO+576eS5r4/bO4kkWdKadvtEH0Pkvw3awYhyrD0Qo188OIJjPbvLStjIXbscOViqVaGLmsnUJBsMCBKOhmcrXf/W5KZnzQDNPAHBSb0+aKrR9inDw==|8/Q5NFaXNOKqLImupq2oWMjTjcus8auLl8CvOjw7SC8=|10|37a140b047d9fc56f4b1584a1e6f28c2; __gpi=UID=00000bd7a50cdf2c:T=1678591488:RT=1679195793:S=ALNI_MZCfw13kpgbvaILZI6zWa-iKXBlrg; htVC_2132_connect_login=1; htVC_2132_connect_is_bind=1; htVC_2132_connect_uin=1B10323F6D0FFB8A2C9DD1578FED4FCC; KF4=rLQqqR; htVC_2132_nofavfid=1; htVC_2132_smile=1D1; wzws_sessionid=gmRiMWNhYaBkajHQgTE1YzJmNoAxMjMuMTc1LjE5Ni41Nw==; htVC_2132_saltkey=A2EFEURM; htVC_2132_lastvisit=1684677560; htVC_2132_visitedfid=24; htVC_2132_viewid=tid_1786169; Hm_lvt_46d556462595ed05e05f009cdafff31a=1684681171; htVC_2132_seccodecSAzv4=6364178.34cf94e93e90101ca1; htVC_2132_seccodecSAzv4MW6=6364179.c2eda9be75114f4de7; htVC_2132_con_request_uri=https%3A%2F%2Fwww.52pojie.cn%2Fconnect.php%3Fmod%3Dlogin%26op%3Dcallback%26referer%3Dhttps%253A%252F%252Fwww.52pojie.cn%252Fthread-1786169-2-1.html; htVC_2132_client_created=1684683678; htVC_2132_client_token=1B10323F6D0FFB8A2C9DD1578FED4FCC; htVC_2132_ulastactivity=1684683678%7C0; htVC_2132_auth=21daWjVbZjKV9CxpSbmzND8txINMRmSESvK%2FKfz6Fe3C5cmiZHvYLS2eOA7xrXYHic5%2BHczPlHDvYSOrlC4%2BEb8WABM; htVC_2132_stats_qc_login=3; htVC_2132_sid=0; htVC_2132_lastcheckfeed=863611%7C1684683679; htVC_2132_checkpm=1; htVC_2132_st_p=863611%7C1684683680%7Cd8710dd1aec0268a3113ae51656e908e; htVC_2132_noticonf=863611D1D3_3_1; htVC_2132_secqaaqS0=6364195.82e7201afa8e49bad3; htVC_2132_lastact=1684683683%09forum.php%09; Hm_lpvt_46d556462595ed05e05f009cdafff31a=1684683695'
        },
        data: 'formhash=7b2b2b2b&referer=https%3A%2F%2Fwww.52pojie.cn%2Fhome.php%3Fmod%3Dtask&fastloginfield=username&username=liuhongbo&password=liuhongbo&questionid=0&answer=&cookietime=2592000&submit=true'
    })
    console.log('loginRes', loginRes.data)
    // 2.获取签到页面的url
    const signInUrl = loginRes.data.match(/<a href="(.*?)" id="JD_sign"/)
    console.log('signInUrl', signInUrl)
    // 3.请求签到页面
    const signInPageRes = await axios({
        url: signInUrl,
        method: 'get',
        headers: {
            'cookie': '__bid_n=1869df778d53d4f30e4207; __gads=ID=1fb5d21c414232ff-2255e0d9f6db0028:T=1678591488:RT=1678591488:S=ALNI_MZb7lpzLU3FPNRuRD0_sN155-PJTA; FPTOKEN=aIhwbnJEVI/Fv7UxZeHHDh0iq35RYFGFYta06zuLLvZUy7dUU7TAnkb3iQlPR6vQN49JzCizTn3ZuXWAOevszed2sJDhF3nYarz51l2VBi+WVPdUZTPNBwAvXVGxVR2QTxvWK0cG1s4gD85U3ohgOtA5/AFvOZJhi7iPARac6j1bszeEFbTuqwto8p4Gd2C8VGLRnqpyKvxhVFN4cSmtcbVi+iEaUc7MSqehgtdbEwgbjHtin8j1dTUw960By2wIDJZksXa2M7VB5znCY5gjieJTp8/JiFRlydZXqO+576eS5r4/bO4kkWdKadvtEH0Pkvw3awYhyrD0Qo188OIJjPbvLStjIXbscOViqVaGLmsnUJBsMCBKOhmcrXf/W5KZnzQDNPAHBSb0+aKrR9inDw==|8/Q5NFaXNOKqLImupq2oWMjTjcus8auLl8CvOjw7SC8=|10|37a140b047d9fc56f4b1584a1e6f28c2; __gpi=UID=00000bd7a50cdf2c:T=1678591488:RT=1679195793:S=ALNI_MZCfw13kpgbvaILZI6zWa-iKXBlrg; htVC_2132_connect_login=1; htVC_2132_connect_is_bind=1; htVC_2132_connect_uin=1B10323F6D0FFB8A2C9DD1578FED4FCC; KF4=rLQqqR; htVC_2132_nofavfid=1; htVC_2132_smile=1D1; wzws_sessionid=gmRiMWNhYaBkajHQgTE1YzJmNoAxMjMuMTc1LjE5Ni41Nw==; htVC_2132_saltkey=A2EFEURM; htVC_2132_lastvisit=1684677560; htVC_2132_visitedfid=24; htVC_2132_viewid=tid_1786169; Hm_lvt_46d556462595ed05e05f009cdafff31a=1684681171; htVC_2132_seccodecSAzv4=6364178.34cf94e93e90101ca1; htVC_2132_seccodecSAzv4MW6=6364179.c2eda9be75114f4de7; htVC_2132_con_request_uri=https%3A%2F%2Fwww.52pojie.cn%2Fconnect.php%3Fmod%3Dlogin%26op%3Dcallback%26referer%3Dhttps%253A%252F%252Fwww.52pojie.cn%252Fthread-1786169-2-1.html; htVC_2132_client_created=1684683678; htVC_2132_client_token=1B10323F6D0FFB8A2C9DD1578FED4FCC; htVC_2132_ulastactivity=1684683678%7C0; htVC_2132_auth=21daWjVbZjKV9CxpSbmzND8txINMRmSESvK%2FKfz6Fe3C5cmiZHvYLS2eOA7xrXYHic5%2BHczPlHDvYSOrlC4%2BEb8WABM; htVC_2132_stats_qc_login=3; htVC_2132_sid=0; htVC_2132_lastcheckfeed=863611%7C1684683679; htVC_2132_checkpm=1; htVC_2132_st_p=863611%7C1684683680%7Cd8710dd1aec0268a3113ae51656e908e; htVC_2132_noticonf=863611D1D3_3_1; htVC_2132_secqaaqS0=6364195.82e7201afa8e49bad3; htVC_2132_lastact=1684683683%09forum.php%09; Hm_lpvt_46d556462595ed05e05f009cdafff31a=1684683695'
        }
    })
    console.log('signInPageRes', signInPageRes)
    // 4.获取签到页面的签到按钮
    const signInBtn = signInPageRes.data.match(/<a href="(.*?)" id="JD_sign"/)[1]
    console.log('signInBtn', signInBtn)
    // 5.点击签到按钮
    const signInBtnRes = await axios({
        url: signInBtn,
        method: 'get',
        headers: {
            'cookie': '__bid_n=1869df778d53d4f30e4207; __gads=ID=1fb5d21c414232ff-2255e0d9f6db0028:T=1678591488:RT=1678591488:S=ALNI_MZb7lpzLU3FPNRuRD0_sN155-PJTA; FPTOKEN=aIhwbnJEVI/Fv7UxZeHHDh0iq35RYFGFYta06zuLLvZUy7dUU7TAnkb3iQlPR6vQN49JzCizTn3ZuXWAOevszed2sJDhF3nYarz51l2VBi+WVPdUZTPNBwAvXVGxVR2QTxvWK0cG1s4gD85U3ohgOtA5/AFvOZJhi7iPARac6j1bszeEFbTuqwto8p4Gd2C8VGLRnqpyKvxhVFN4cSmtcbVi+iEaUc7MSqehgtdbEwgbjHtin8j1dTUw960By2wIDJZksXa2M7VB5znCY5gjieJTp8/JiFRlydZXqO+576eS5r4/bO4kkWdKadvtEH0Pkvw3awYhyrD0Qo188OIJjPbvLStjIXbscOViqVaGLmsnUJBsMCBKOhmcrXf/W5KZnzQDNPAHBSb0+aKrR9inDw==|8/Q5NFaXNOKqLImupq2oWMjTjcus8auLl8CvOjw7SC8=|10|37a140b047d9fc56f4b1584a1e6f28c2; __gpi=UID=00000bd7a50cdf2c:T=1678591488:RT=1679195793:S=ALNI_MZCfw13kpgbvaILZI6zWa-iKXBlrg; htVC_2132_connect_login=1; htVC_2132_connect_is_bind=1; htVC_2132_connect_uin=1B10323F6D0FFB8A2C9DD1578FED4FCC; KF4=rLQqqR; htVC_2132_nofavfid=1; htVC_2132_smile=1D1; wzws_sessionid=gmRiMWNhYaBkajHQgTE1YzJmNoAxMjMuMTc1LjE5Ni41Nw==; htVC_2132_saltkey=A2EFEURM; htVC_2132_lastvisit=1684677560; htVC_2132_visitedfid=24; htVC_2132_viewid=tid_1786169; Hm_lvt_46d556462595ed05e05f009cdafff31a=1684681171; htVC_2132_seccodecSAzv4=6364178.34cf94e93e90101ca1; htVC_2132_seccodecSAzv4MW6=6364179.c2eda9be75114f4de7; htVC_2132_con_request_uri=https%3A%2F%2Fwww.52pojie.cn%2Fconnect.php%3Fmod%3Dlogin%26op%3Dcallback%26referer%3Dhttps%253A%252F%252Fwww.52pojie.cn%252Fthread-1786169-2-1.html; htVC_2132_client_created=1684683678; htVC_2132_client_token=1B10323F6D0FFB8A2C9DD1578FED4FCC; htVC_2132_ulastactivity=1684683678%7C0; htVC_2132_auth=21daWjVbZjKV9CxpSbmzND8txINMRmSESvK%2FKfz6Fe3C5cmiZHvYLS2eOA7xrXYHic5%2BHczPlHDvYSOrlC4%2BEb8WABM; htVC_2132_stats_qc_login=3; htVC_2132_sid=0; htVC_2132_lastcheckfeed=863611%7C1684683679; htVC_2132_checkpm=1; htVC_2132_st_p=863611%7C1684683680%7Cd8710dd1aec0268a3113ae51656e908e; htVC_2132_noticonf=863611D1D3_3_1; htVC_2132_secqaaqS0=6364195.82e7201afa8e49bad3; htVC_2132_lastact=1684683683%09forum.php%09; Hm_lpvt_46d556462595ed05e05f009cdafff31a=1684683695'
        }
    })
    console.log('signInBtnRes', signInBtnRes)
    // 6.获取签到成功的提示信息
    const signInSuccessMsg = signInBtnRes.data.match(/<div id="messagetext".*?>(.*?)<\/div>/)[1]
    console.log('signInSuccessMsg', signInSuccessMsg)
    // 7.将签到成功的提示信息推送到微信上
    pushMsg('吾爱论坛签到成功', signInSuccessMsg)
}

// const axios = require('axios');
// const qs = require('qs');

// // 设置请求头，伪装成浏览器访问
// const headers = {
//   'User-Agent':
//     'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
//   Referer: 'https://www.52pojie.cn/',
//   Origin: 'https://www.52pojie.cn',
// };

// // 向服务器发送签到请求
// async function signIn() {
//   // 在请求时带上 Cookie，可以避免每次登录
//   const cookie = '替换成你的吾爱论坛 Cookie';
//   const response = await axios.post(
//     'https://www.52pojie.cn/home.php?mod=task&do=apply&id=2',
//     qs.stringify({
//       // 这里特别注意，需要提交对应的 formhash 参数
//       // 可以通过 getTaskInfo() 函数获取到 formhash 值
//       formhash: '替换成获取到的 formhash',
//     }),
//     {
//       headers: {
//         ...headers,
//         Cookie: cookie,
//         // 需要设置 Content-Type 为 application/x-www-form-urlencoded
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//     }
//   );

//   return response.data;
// }

// // 获取签到任务信息，包括剩余次数和 formhash 值等
// async function getTaskInfo() {
//   // 在请求时带上 Cookie，可以避免每次登录
//   const cookie = '替换成你的吾爱论坛 Cookie';
//   const response = await axios.get(
//     'https://www.52pojie.cn/home.php?mod=task&do=apply&id=2',
//     {
//       headers: {
//         ...headers,
//         Cookie: cookie,
//       },
//     }
//   );

//   // 从响应中解析出剩余次数和 formhash 值等相关信息
//   const data = response.data;
//   const remainingTimesRegex = /您还可以申请 (\d+) 次/; // 正则匹配剩余次数
//   const formhashRegex = /name="formhash" value="([a-z0-9]+)"/; // 正则匹配 formhash

//   const remainingTimes = parseInt(data.match(remainingTimesRegex)[1], 10);
//   const formhash = data.match(formhashRegex)[1];

//   return { remainingTimes, formhash };
// }

// async function main() {
//   try {
//     const taskInfo = await getTaskInfo();
//     console.log(`当前剩余次数：${taskInfo.remainingTimes}`);
//     if (taskInfo.remainingTimes === 0) {
//       console.log('签到已完成');
//       return;
//     }

//     const result = await signIn();
//     if (result.includes('恭喜')) {
//       console.log('签到成功！');
//     } else {
//       console.log('签到失败！');
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// main();