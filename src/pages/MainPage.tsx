import styled from '@emotion/styled'

import { AchievementSection } from '@/components'

const PageLayoutBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
`
const MainPage = () => (
  <PageLayoutBox>
    <AchievementSection />
  </PageLayoutBox>
)

export default MainPage
