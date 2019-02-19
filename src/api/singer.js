// import jsonp from 'common/js/jsonp'
// import { commonParams, options } from './config'
import { commonParams } from './config'
import axios from 'axios'

export function getSingerList() {
  const url = '/api/getSingerList'
  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSingerDetail(singerId) {
  const url = '/api/getSingerDetail'
  const data = Object.assign({}, commonParams, {
    needNewCode: 0,
    platform: 'yqq',
    order: 'listen',
    begin: 0,
    num: 100,
    singermid: singerId
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?inCharset=utf8
// outCharset=utf-8
// notice=0
// platform=yqq
// needNewCode=0
// singermid=002J4UUk29y8BY
// order=listen
// begin=0
// num=30