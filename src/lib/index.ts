/**
 * 随机字符串
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
 * 提取邮箱
 */
export const extractEmail = (mail: string) => {
  const mailReg = /([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+/
  const match = mail.match(mailReg)
  return match && match[0]
}
