import styled from '@emotion/styled'

import { AchievementSection } from '@/components'

const PageLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
`
const HomePage = () => (
  <PageLayout>
    <AchievementSection />
  </PageLayout>
)

export default HomePage
