const getLocationOrigin = () => {
  return window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '')
}

const companyName = '综合服务平台'
const version = 'V11.0.3'
const baiduKey = 'lcuOQ71SCZhqpxsr1vL2mXoplWEoVctL'

export default {
  version,
  companyName,
  getLocationOrigin,
  baiduKey
}
