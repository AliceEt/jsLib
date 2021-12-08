/**
 * 生成随机字符串
 */
export const randomString = (length = 8) => {
  const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  const maxPos = $chars.length
  let pwd = ''
  for (let i = 0; i < length; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}

/**
 * 判断日期是否为工作日
 */
export const isWeekday = (date: any) => date.getDay() % 6 !== 0

/**
 * 格式化当前时间为可读性描述
 */
export const getDateTime = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = checkTime(date.getMonth() + 1)
  const day = checkTime(date.getDate())
  const hour = checkTime(date.getHours() + 1)
  const minute = checkTime(date.getMinutes())
  const second = checkTime(date.getSeconds())
  function checkTime(i: any) {
    if (i < 10) {
      i = '0' + i
    }
    return i
  }
  return '' + year + '年' + month + '月' + day + '日 ' + hour + '时' + minute + '分' + second + '秒'
}

/**
 * 格式化时间为可读性描述
 * @param time
 * @returns
 */
export const transformDateTime = (time: string) => {
  const currentDate = new Date()
  const modifyDate = new Date(time)
  const timeDiff = (currentDate as any) - (modifyDate as any)
  const days = Math.floor(timeDiff / (24 * 3600 * 1000))
  const level = timeDiff % (24 * 3600 * 1000)
  const hours = Math.floor(level / (3600 * 1000))
  const level2 = level % (3600 * 1000)
  const minutes = Math.floor(level2 / (60 * 1000))
  let update
  if (days > 0) {
    const tempTime = time.split(' ')
    update = tempTime[0] + ' ' + tempTime[1].split(':')[0] + ':' + tempTime[1].split(':')[1] + ' '
  } else {
    update =
      (hours === 0 ? '' : `${hours}小时`) +
      (minutes === 0 && hours === 0 ? '刚刚' : `${minutes}分钟前`)
  }
  return update
}

/**
 * 反转字符串
 * @param str
 */
export const reverseStr = (str: string) => str.split('').reverse()
  .join('')

/**
 * 保留小数点（非四舍五入）
 * @param n
 * @param fixed 保留几位小数位
 * @returns
 */
export const toFixed = (n: number, fixed: number) =>
  ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed)

export const uniqueArray = (arr: Array<any>) => {
  return [...new Set(arr)]
}
