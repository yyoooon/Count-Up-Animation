const getTime = (maxNumber: number, delay: number, time: number) => {
  let now = maxNumber
  let count = 0
  while (Math.ceil(maxNumber - now) !== maxNumber) {
    const step = now / delay
    count++
    now -= step
  }
  return time / count
}

interface CounterType {
  maxNumber: number
  duration: number
  delay: number
  excutor: (num: number) => void
}

// eslint-disable-next-line promise/prefer-await-to-callbacks
const counter = ({ maxNumber, duration, delay, excutor }: CounterType) => {
  let now = maxNumber
  let num = 0
  const time = getTime(maxNumber, delay, duration)

  const handle = setInterval(() => {
    num = Math.ceil(maxNumber - now)
    // eslint-disable-next-line promise/prefer-await-to-callbacks
    excutor(num)

    if (num === maxNumber) {
      clearInterval(handle)
      return
    }

    const step = now / delay
    now -= step
  }, time)
}

export default counter
