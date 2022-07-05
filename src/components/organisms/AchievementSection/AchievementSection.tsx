import styled from '@emotion/styled'

import { LogoImage, AwardTextGroup, MetricTextGroup } from '@/components'

import { smoothAppearUpAnimation, delayGap } from './transitionAnimation'

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
  ${smoothAppearUpAnimation}
  animation-delay: ${delayGap * 0}ms;
`

const StyledMetricTextGroup = styled(MetricTextGroup)`
  margin-bottom: 50px;
  ${smoothAppearUpAnimation}
  animation-delay:${delayGap}ms;
`

const StyledAwardTextGroup = styled(AwardTextGroup)`
  ${smoothAppearUpAnimation}
  animation-delay: ${delayGap * 2}ms;
`

const AchievementSection = () => (
  <AchievementSectionContainer>
    <StyledLogoImage />
    <div>
      <StyledMetricTextGroup />
      <StyledAwardTextGroup />
    </div>
  </AchievementSectionContainer>
)

export default AchievementSection
