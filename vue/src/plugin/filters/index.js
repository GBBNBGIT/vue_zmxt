import moment from "moment";

/**
 * 格式化时间
 */

export function timeFormat(val) {
  if (val) {
    return moment(val).format("YYYY-MM-DD HH:mm:ss") === "Invalid date"
      ? val
      : moment(val).format("YYYY-MM-DD HH:mm:ss");
  } else {
    return "";
  }
}

/**
 * 手机号隐藏中间4位
 */

export function encodePhone(date) {
  return date.replace(/^(\d{3})\d{4}(\d+)/, '$1****$2')
}
