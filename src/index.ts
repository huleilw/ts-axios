import { AxiosRequestConfig } from './types'
import XmlHttpReq from './XmlHttpReq'
function axios(config: AxiosRequestConfig): void {
  XmlHttpReq(config)
}
export default axios
