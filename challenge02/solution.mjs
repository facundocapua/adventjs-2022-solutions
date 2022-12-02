export default function countHours (year, holidays) {
  return holidays.reduce((current, holiday) => {
    const date = new Date(`${year}-${holiday}`)
    const isWeekend = date.getDay() === 0 || date.getDay() === 6
    return isWeekend ? current : current + 2
  }, 0)
}
