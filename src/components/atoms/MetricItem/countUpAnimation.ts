interface CountUpAnimationType {
  initialCountNumber?: number
  maxCountNumber: number
  duration: number
  delay: number
  onCountNumber: (num: number) => void
}

const getRepeatCount = (maxCountNumber: number, delay: number) => {
  let decreasingValue = maxCountNumber
  let repeatCount = 0

  while (Math.ceil(maxCountNumber - decreasingValue) !== maxCountNumber) {
    repeatCount++

    const step = decreasingValue / delay
    decreasingValue -= step
  }

  return repeatCount
}

const getTimeToRepeatOnce = (
  maxCountNumber: number,
  delay: number,
  duration: number,
) => {
  const repeatCount = getRepeatCount(maxCountNumber, delay)
  return duration / repeatCount
}

export const countUpAnimation = ({
  initialCountNumber = 0,
  maxCountNumber,
  duration,
  delay,
  onCountNumber,
}: CountUpAnimationType) => {
  let countNumber = initialCountNumber
  let decreasingValue = maxCountNumber
  const timeToRepeatOnce = getTimeToRepeatOnce(maxCountNumber, delay, duration)

  const handle = setInterval(() => {
    const nextCountNumber = Math.ceil(maxCountNumber - decreasingValue)

    if (countNumber !== nextCountNumber) {
      countNumber = nextCountNumber
      onCountNumber(countNumber)
    }

    if (countNumber === maxCountNumber) {
      clearInterval(handle)
      return
    }

    const nextDegreeOfDecreasing = decreasingValue / delay
    decreasingValue -= nextDegreeOfDecreasing
  }, timeToRepeatOnce)
}
