import styled from '@emotion/styled'

import MetricItem from './MetricItem'

const StyledMetricItem = styled(MetricItem)`
  margin-bottom: 36px;
`

const MetricsContainer = ({ ...props }) => (
  <section {...props}>
    <StyledMetricItem number={1350} unit="만 명" target="여행자" />
    <StyledMetricItem number={21} unit="만 개" target="여행 리뷰" />
    <StyledMetricItem number={470} unit="만 개" target="여행 일정" />
  </section>
)

export default MetricsContainer
