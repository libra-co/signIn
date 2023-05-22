import axios from "axios"
import { getNowTime, pushMsg } from ".";
const { qqMusic } = require('./config')

export const signInQqMusic = async (backupUrl?: string) => {
    const { signInUrl, headers } = qqMusic
    const res = await axios({
        url: signInUrl,
        method: 'get',
        headers
    })
    if (res && res.data && res.data.msg.indexOf('失败') === -1) {
        pushMsg('音乐加速', res.data.msg)
    } else {
        if (backupUrl) {
            pushMsg('音乐加速', '音乐加速失败')
        }
        if (res.data.msg.indexOf('失败') !== -1) {
            signInQqMusic(qqMusic.backupUrl)
            pushMsg('音乐加速', res.data.msg)
        }
    }
}