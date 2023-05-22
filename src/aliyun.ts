/*
 * @Author: liuhongbo 916196375@qq.com
 * @Date: 2023-05-22 20:30:30
 * @LastEditors: liuhongbo 916196375@qq.com
 * @LastEditTime: 2023-05-22 22:21:12
 * @FilePath: \signInPlug\src\aliyun.ts
 * @Description: 阿里云
 */

const axios = require("axios");
import { getNowTime, pushMsg } from ".";
const { ailiyun } = require("./config");

export const signInAliyun = async () => {
    const { signInUrl, headers, awardUrl, awardHeaders, drawUrl, drawHeaders, refresh_token } = ailiyun;

    const getAliyunToken = async (refresh_token: string) => {
        try {
            const { data: loginData } = await axios({
                url: signInUrl,
                method: 'post',
                headers,
                data: {
                    "grant_type": "refresh_token",
                    "refresh_token": refresh_token
                }
            });
            if (loginData) {
                const access_token: string = loginData.token_type + loginData.access_token
                return Promise.resolve(access_token)
            } else {
                return Promise.reject('阿里云签到失败!')
            }
        } catch (error) {
            console.log('error', error)
            return Promise.reject('阿里云签到失败!')
        }
    }

    const getDrawCount = async (access_token: string) => {
        try {
            const { data: drawData } = await axios({
                url: awardUrl,
                method: 'post',
                headers: { "Authorization": access_token, ...awardHeaders },
                data: JSON.stringify({ "_rx-s": "mobile" })
            })
            if (drawData) {
                const signInCount: number = drawData.result.signInCount
                return Promise.resolve(signInCount)
            } else {
                return Promise.reject('阿里云签到失败!')
            }
        } catch (error) {
            console.log('error', error)
            return Promise.reject('阿里云签到失败!')
        }
    }

    const signInAliyun = async (signInCount: number, access_token: string) => {
        try {
            const { data: awardData } = await axios({
                url: drawUrl,
                method: 'post',
                data: JSON.stringify({ "signInDay": signInCount }),
                headers: { "Authorization": access_token, ...drawHeaders },
            })
            if (awardData) {
                console.log(`\n\n------ ${getNowTime(`toLocaleTimeString`)} 阿里云抽奖成功 ------\n`);
                const successMsg = `本月累计签到${signInCount}天，本次签到获得${awardData.result.name}, ${awardData.result.description}, ${awardData.result.notice}`
                console.log(successMsg)
                return Promise.resolve(successMsg)
            } else {
                return Promise.reject('阿里云签到失败!')
            }

        } catch (error) {
            console.log('error', error)
            return Promise.reject('阿里云签到失败!')
        }
    }

    try {
        const access_token = await getAliyunToken(refresh_token)
        const signInCount = await getDrawCount(access_token)
        const successMsg = await signInAliyun(signInCount, access_token)
        pushMsg('阿里云签到', successMsg)
    } catch (error) {
        console.log(`\n ------ ${getNowTime(`toLocaleTimeString`)} 阿里云抽奖失败 ------\n`);
        pushMsg(`阿里云签到结果`, '阿里云签到失败!')

    }
}