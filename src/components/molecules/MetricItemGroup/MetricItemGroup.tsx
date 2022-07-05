import styled from '@emotion/styled'

import { MetricItem } from '@/components'

const MetricItemGroupBox = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledMetricItem = styled(MetricItem)`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`

const MetricItemGroup = ({ ...props }) => (
  <MetricItemGroupBox {...props}>
    <StyledMetricItem number={700} unit="만 명" target="여행자" />
    <StyledMetricItem number={100} unit="만 개" target="여행 리뷰" />
    <StyledMetricItem number={470} unit="만 개" target="여행 일정" />
  </MetricItemGroupBox>
)

export default MetricItemGroup
