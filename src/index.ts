import { AxiosRequestConfig } from './types'
import XmlHttpReq from './XmlHttpReq'
import { buildURL } from './helpers/url'
function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  XmlHttpReq(config)
}
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
}
function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}
export default axios
