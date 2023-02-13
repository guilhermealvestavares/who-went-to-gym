export const isSameDate = (lastTime, now) => {
  console.log(lastTime?.toLocaleDateString())
  console.log(now?.toLocaleDateString())

  return lastTime?.toLocaleDateString() === now?.toLocaleDateString()
}

