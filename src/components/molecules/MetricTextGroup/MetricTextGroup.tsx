import styled from '@emotion/styled'

import { MetricText } from '@/components'

const MetricTextGroupBox = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledMetricText = styled(MetricText)`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`

const MetricTextGroup = ({ ...props }) => (
  <MetricTextGroupBox {...props}>
    <StyledMetricText number={700} unit="만 명" target="여행자" />
    <StyledMetricText number={100} unit="만 개" target="여행 리뷰" />
    <StyledMetricText number={470} unit="만 개" target="여행 일정" />
  </MetricTextGroupBox>
)

export default MetricTextGroup
