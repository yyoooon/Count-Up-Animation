import { useEffect, useRef } from 'react'
import styled from '@emotion/styled'

import { countUpAnimation } from '@/util'

const MetricTextBox = styled.div`
  font-size: 36px;
`
const MeasureText = styled.strong`
  font-weight: bold;
`

interface MetricTextProps extends React.ComponentProps<'div'> {
  number: number
  unit: string
  target: string
}

const MetricText = ({ number, unit, target, ...props }: MetricTextProps) => {
  const count = useRef<HTMLElement>(null)

  useEffect(() => {
    countUpAnimation({
      maxNumber: number,
      duration: 2000,
      delay: 25,
      excutor: (num: number) => {
        if (!count.current) {
          return
        }
        count.current.innerText = String(num)
      },
    })
  }, [number])

  return (
    <MetricTextBox {...props}>
      <MeasureText>
        <span ref={count}>{number}</span>
        <span>{unit}</span>
      </MeasureText>
      <span>의 {target}</span>
    </MetricTextBox>
  )
}

export default MetricText
