import { useEffect, useRef } from 'react'

import { countUpAnimation } from '@/util'

interface CountUpTextProps extends React.ComponentProps<'div'> {
  maxNumber: number
  unit: string
  target: string
}

const CountUpText = ({
  maxNumber,
  unit,
  target,
  ...props
}: CountUpTextProps) => {
  const count = useRef<HTMLElement>(null)

  useEffect(() => {
    countUpAnimation({
      maxNumber,
      duration: 2000,
      delay: 25,
      excutor: (num) => {
        if (!count.current) {
          return
        }
        count.current.innerText = String(num)
      },
    })
  }, [maxNumber])

  return (
    <div {...props}>
      <strong ref={count}>{maxNumber}</strong>
      <span>{unit}의</span>
      <span>{target}</span>
    </div>
  )
}

export default CountUpText
