import miment from './miment'

//当前年月日
const dateFormat = 'YYYY-MM-DD'
const times = String(miment().format(dateFormat)).split('-')
const yearTime = Number(times[0])
const monthTime = Number(times[1])


//判断闰年与否
export function leapyear() {

  if ((yearTime % 4 === 0 && yearTime % 100 !== 0) || yearTime % 400 === 0) {
    return true
  } else {
    return false
  }
}

//周
export function leaperWeek() {
  const mondy = miment().firstDayOfWeek().add(1, 'DD').format(dateFormat)
  const sundy = miment().firstDayOfWeek().add(7, 'DD').format(dateFormat)
  const next_mondy = miment().firstDayOfWeek().add(8, 'DD').format(dateFormat)
  const next_sundy = miment().firstDayOfWeek().add(14, 'DD').format(dateFormat)
  return { mondy, sundy, next_mondy, next_sundy }
}

//月
export function leaperMonth() {
  const start_month = miment().firstDay().format(dateFormat)
  const end_month = miment().lastDay().format(dateFormat)
  const next_start_month = miment().lastDay().add(1, 'DD').format(dateFormat)
  const next_end_month = miment(next_start_month).lastDay().format(dateFormat)
  return { start_month, end_month, next_start_month, next_end_month }
}
//年度跨越
export function leaperYear() {
  const yearstart = `${yearTime}-1-1`
  const yearend = `${yearTime}-12-31`
  const res = [yearstart, yearend]
  return res
}

//本日
export function leaperDate() {
  const today = miment().format(dateFormat)
  const nextday = miment().add(1, 'DD').format(dateFormat)
  return { today, nextday }
}

//学期跨越2月1号-9月1号 9月1号-2月1号
export function leaperTerm() {
  let termstart = ''
  let termend = ''
  let termend_show = ""
  let monthList = []
  if (monthTime >= 2 && monthTime <= 7) {
    //上学期
    termstart = `${yearTime}-2-1`
    termend_show = `${yearTime}-8-1`
    termend = miment(`${yearTime}-8-1`).add(-1, 'DD').format(dateFormat)
    monthList = [2, 3, 4, 5, 6, 7]
  } else {
    //下学期
    termstart = `${yearTime}-8-1`
    termend_show = `${yearTime + 1}-2-1`
    termend = miment(`${yearTime + 1}-2-1`).add(-1, 'DD').format(dateFormat)
    monthList = [8, 9, 10, 11, 12, 1]
  }
  return { termstart, termend, termend_show, monthList }
}
