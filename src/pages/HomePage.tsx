import styled from '@emotion/styled'

import { MetricsContainer } from '@/components'

const Wrapper = styled.div`
  border: 1px solid gray;
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
`
const HomePage = () => (
  <Wrapper>
    <MetricsContainer />
  </Wrapper>
)

export default HomePage
