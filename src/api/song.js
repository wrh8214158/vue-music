import { commonParams } from './config'
import axios from 'axios'

export function getLyric(mid) {
  const url = '/api/lyric'
  const data = Object.assign({}, commonParams, {
    songmid: mid,
    pcachetime: +new Date(),
    platform: 'yqq.json',
    hostUin: 0,
    needNewCode: 0,
    format: 'json',
    notice: 0,
    g_tk: 5381
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
