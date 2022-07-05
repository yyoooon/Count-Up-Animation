import styled from '@emotion/styled'

import { LogoImage, AwardTextGroup, MetricTextGroup } from '@/components'

const AchievementSectionContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledLogoImage = styled(LogoImage)`
  position: relative;
  top: 30px;
  margin-right: 200px;
`
const StyledMetricTextGroup = styled(MetricTextGroup)`
  margin-bottom: 50px;
`

const AchievementSection = () => (
  <AchievementSectionContainer>
    <StyledLogoImage />
    <div>
      <StyledMetricTextGroup />
      <AwardTextGroup />
    </div>
  </AchievementSectionContainer>
)

export default AchievementSection
