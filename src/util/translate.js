export function idToImg (id) {
  return 'https://avatars2.githubusercontent.com/u/' + id
}
export function timeaGo (date) {
  let time = Date.parse(date)
  let now = Date.now()
  let temp = now - time
  let temp2 = now - temp
  let tTime = new Date(temp2)
  // let Y = tTime.getFullYear()
  // let M = tTime.getMonth() + 1
  // let D = tTime.getDay()
  let h = tTime.getHours()
  let m = tTime.getMinutes()
  let s = tTime.getSeconds()
  if (h % 24 >= 1) {
    return h % 24 + '天前'
  } else if (m % 60 >= 1) {
    return m % 60 + '分钟前'
  } else if (s % 60 >= 1) {
    return s % 60 + '秒前'
  }
}
