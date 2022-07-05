import styled from '@emotion/styled'

import { LogoImage, AwardTextGroup, MetricTextGroup } from '@/components'

const PageLayout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
`
const HomePage = () => (
  <PageLayout>
    <LogoImage />
    <MetricTextGroup />
    <AwardTextGroup />
  </PageLayout>
)

export default HomePage
