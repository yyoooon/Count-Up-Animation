import { useEffect, useRef } from 'react'
import styled from '@emotion/styled'

import { countUpAnimation } from './countUpAnimation'

interface MetricItemProps extends React.ComponentProps<'div'> {
  number: number
  unit: string
  target: string
}

const MetricItemBox = styled.div`
  font-size: 36px;
`
const MeasureText = styled.strong`
  font-weight: bold;
`

const MetricItem = ({ number, unit, target, ...props }: MetricItemProps) => {
  const numberEl = useRef<HTMLElement>(null)

  useEffect(() => {
    countUpAnimation({
      maxCountNumber: number,
      duration: 2000,
      delay: 25,
      onCountNumber: (countNumber: number) => {
        if (!numberEl.current) {
          return
        }
        numberEl.current.innerText = String(countNumber)
      },
    })
  }, [number])

  return (
    <MetricItemBox {...props}>
      <MeasureText>
        <span ref={numberEl}>{number}</span>
        {unit}
      </MeasureText>
      <span>의 {target}</span>
    </MetricItemBox>
  )
}

export default MetricItem
