import { useEffect, useRef } from 'react'
import styled from '@emotion/styled'

import { countUpAnimation } from '@/util'

const MetricItemContainer = styled.div`
  font-size: 36px;
`
const MeasureText = styled.strong`
  font-weight: bold;
`

interface MetricItemProps extends React.ComponentProps<'div'> {
  number: number
  unit: string
  target: string
}

const MetricItem = ({ number, unit, target, ...props }: MetricItemProps) => {
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
    <MetricItemContainer {...props}>
      <MeasureText>
        <span ref={count}>{number}</span>
        <span>{unit}</span>
      </MeasureText>
      <span>의 {target}</span>
    </MetricItemContainer>
  )
}

export default MetricItem
