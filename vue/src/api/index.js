import RequestMethod from './axios'

const { $get, $post } = new RequestMethod()

/**
 * 获取消息
 * @param {} params
 */
export function getMessage (params) {
  return $get('/user/message/getUserMsg', params)
}