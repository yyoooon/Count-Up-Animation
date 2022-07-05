import styled from '@emotion/styled'

import { LogoImage, AwardTextGroup } from '@/components'

const PageLayout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
`
const HomePage = () => (
  <PageLayout>
    <LogoImage />
    <AwardTextGroup />
  </PageLayout>
)

export default HomePage
