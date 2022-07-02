import styled from '@emotion/styled'

import { CountUpText } from '@/components'

const Wrapper = styled.div`
  border: 1px solid gray;
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
`
const HomePage = () => (
  <Wrapper>
    <CountUpText maxNumber={350} unit="만 명" target="여행자" />
    <CountUpText maxNumber={100} unit="만 개" target="여행 리뷰" />
    <CountUpText maxNumber={470} unit="만 개" target="여행 일정" />
  </Wrapper>
)

export default HomePage
