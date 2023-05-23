/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-05-23 13:39:23
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-05-23 14:34:41
 * @FilePath: /signIn/src/xiaopozhan.ts
 * @Description: 小破站
 */

import axios from 'axios';
import { getNowTime, pushMsg } from '.';
var FormData = require('form-data');
const { xiaoPoZhan } = require('./config');

export const signInXiaopozhan = async () => {
    const { username, password, loginInUrl, headers } = xiaoPoZhan
    const getToekn = async () => {
        const formdata = new FormData()
        formdata.append('username', username)
        formdata.append('userpass', password)
        formdata.append('c', 'users')
        try {
            const { data } = await axios({
                url: loginInUrl,
                method: 'post',
                headers: { ...headers, ...formdata.getHeaders() },
                data: formdata,
            })
            if (data) {
                const token: string = data.token
                return Promise.resolve(token)
            } else {
                return Promise.reject('小破站获取token失败')
            }
        } catch (error) {
            console.log('error', error)
            return Promise.reject('小破站获取token失败')
        }
    }

    const siginIn = async (token: string) => {
        const formdata = new FormData()
        formdata.append('token', token)
        formdata.append('c', 'Signin')
        try {
            const { data } = await axios({
                url: loginInUrl,
                method: 'post',
                headers: { ...headers, ...formdata.getHeaders() },
                data: formdata,
            })
            if (data && data[0]) {
                return Promise.resolve(`小破站签到成功，获得${data[1]}金币，获得金币${data[2]}`)
            } else {
                return Promise.reject('小破站签到失败')
            }
        } catch (error) {
            console.log('error', error)
            return Promise.reject('小破站签到失败')
        }
    }

    try {
        const token = await getToekn()
        const successMsg = await siginIn(token)
        pushMsg('小破站签到结果', successMsg)
    } catch (error) {
        console.log('error', error)
        pushMsg('小破站签到结果', error)
    }
}