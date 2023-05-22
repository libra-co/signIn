/*
 * @Author: libra 916196375@qq.com
 * @Date: 2023-05-21 22:19:08
 * @LastEditors: liuhongbo 916196375@qq.com
 * @LastEditTime: 2023-05-22 00:28:47
 * @FilePath: \signInPlug\juejin.js
 * @Description: 掘金
 */

const axios = require("axios");
import { getNowTime, pushMsg } from ".";
const { juejin } = require("./config");

/**
 * 掘金自动签到 请求方法
 */
export const signInJueJin = async () => {
    console.log(`\n\n------${getNowTime(`toLocaleDateString`)} - 开始签到------\n`);
    const { headers, signInUrl } = juejin; //签到相关参数
    const res = await axios({
        url: signInUrl,
        method: `post`,
        headers,
    });
    if (res && res.data) {
        console.log(`\n ${JSON.stringify(res.data)} \n \n ------ ${getNowTime(`toLocaleTimeString`)} 签到成功 ------\n`);
        //签到成功后推送消息
        if (res.data.err_no == 0) {
            pushMsg(`掘金签到结果`, `获得: ${res.data.data.incr_point}矿石, 总计: ${res.data.data.sum_point}矿石`)
        } else {
            console.log('res.data', res.data)
            pushMsg(`掘金签到结果`, res.data.err_msg);
        }
        //签到成功后，30s内查询免费抽奖次数
        setTimeout(() => {
            freeCheck();
        }, Math.random() * 30 * 1000)
    } else {
        console.log(res);
        console.log(`\n ------ ${getNowTime(`toLocaleTimeString`)} 签到失败 ------ \n`);
        pushMsg(`掘金签到结果`, `签到失败: ${res.data}`); //签到成功后推送消息
    }
}

/**
 * 查询还有几次免费抽奖的机会
 */
const freeCheck = async () => {
    console.log(`\n------${getNowTime(`toLocaleString`)} 开始查询抽奖次数 ------`);
    const { headers, drawkUrl } = juejin; //查询免费次数相关参数
    const res = await axios({
        url: drawkUrl,
        method: `get`,
        headers,
    });
    if (res && res.data) {
        console.log(`\n ------ 获得免费抽奖次数：${res.data.data.free_count || 0} ------\n`);
        if (res.data.data.free_count > 0) {
            //如果有免费抽奖次数直接开始抽奖
            luckDraw();
        }
    } else {
        console.log(res);
        console.log(`\n ------ ${getNowTime(`toLocaleTimeString`)} 查询抽奖次数失败 ------ \n`);
    }
}

/**
 * 掘金抽奖函数方法
 */
const luckDraw = async () => {
    console.log(`\n------${getNowTime(`toLocaleString`)} 开始抽奖 ------`);
    const { headers, drawUrl } = juejin; //抽奖相关参数
    const res = await axios({
        url: drawUrl,
        method: `post`,
        headers,
    });
    if (res && res.data) {
        console.log(`\n ------ ${getNowTime(`toLocaleTimeString`)}  抽奖成功，获得：${res.data.data.lottery_name} ------\n`);
        pushMsg(`掘金抽奖结果`, `奖品: ${res.data.data.lottery_name}`)
    } else {
        console.log(res);
        console.log(`\n ------ ${getNowTime(`toLocaleTimeString`)} 抽奖失败 ------ \n`);
        pushMsg(`掘金抽奖结果`, `结果: 抽奖失败`)
    }
}