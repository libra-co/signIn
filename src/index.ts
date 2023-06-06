/*
 * @Author: Libra 916196375@qq.com
 * @Date: 2023-05-21 21:43:57
 * @LastEditors: liuhongbo 916196375@qq.com
 * @LastEditTime: 2023-06-06 21:57:10
 * @FilePath: \signInPlug\index.js
 * @Description: 一键签到脚本
 */

import axios from "axios";
import { signInJueJin } from "./juejin";
import { signInQqMusic } from "./qqMusic";
import { signInWuai } from "./wuai";
import { signInAliyun } from "./aliyun";

//需要使用的包文件
const schedule = require("node-schedule");
//相关参数保存在文件内
const { pushPlus } = require("./config");

/**
 * 获取当前时间的格式化时间
 * @param {String} key 调用js日期函数 
 * @returns 当前时间格式化的字符串
 */
export const getNowTime = (key) => {
    let nowTime = ``;
    try {
        nowTime = new Date()[key]();
    } catch (e) {
        nowTime = `获取时间函数错误！`;
        console.error(`请传入日期函数 —— ${e}`);
    }
    return nowTime;
}

/**
 * pushplus消息推送，关注wx公众号可以调用他们的接口进行wx消息推送
 * @param {String} title 
 * @param {JSON} content 
 */
export const pushMsg = async (title: string, content: string) => {
    console.log(`\n------${getNowTime(`toLocaleString`)} 开始推送wx消息 ------`);
    console.log('content', content)
    //获取配置参数
    const { url, token } = pushPlus;
    const res = await axios({
        url,
        method: `get`,
        params: {
            token,
            template: `json`,
            title,
            content,
        }
    });
    if (res && res.data) {
        console.log(`\n ${JSON.stringify(res.data)} \n\n------ ${getNowTime(`toLocaleTimeString`)} 推送成功 ------\n`);
    } else {
        console.log(res);
        console.log(`\n------ ${getNowTime(`toLocaleTimeString`)} 推送失败 ------ \n`);
    }
}


//定时触发任务
const signTask = () => {
    //每天在6:00-6:10随机签到
    // 解释一下这个定时器的时间格式：秒 分 时 日 月 周几
    // 改成执行两次，防止签到失败
    // 你帮我写
    schedule.scheduleJob("0 0 6 * * *", () => {
        setTimeout(() => {
            signInJueJin(); // 掘金签到
            signInQqMusic() // QQ音乐时长
            signInAliyun() // 阿里云签到
        }, Math.random() * 10 * 60 * 1000)
    })
}

// 定时触发任务2
const signTask2 = () => {
    //每天在21:00-21:10随机签到
    schedule.scheduleJob("0 0 21 * * *", () => {
        setTimeout(() => {
            signInJueJin(); // 掘金签到
            signInQqMusic() // QQ音乐时长
            signInAliyun() // 阿里云签到
        }, Math.random() * 10 * 60 * 1000)
    })
}



//开始执行任务
console.log(`开始执行任务-${getNowTime('toLocaleString')}`);
signTask()
signTask2()