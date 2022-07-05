import styled from '@emotion/styled'

import { LogoImage, AwardItemGroup, MetricItemGroup } from '@/components'

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

const StyledMetricItemGroup = styled(MetricItemGroup)`
  margin-bottom: 50px;
  ${smoothAppearUpAnimation}
  animation-delay:${delayGap}ms;
`

const StyledAwardItemGroup = styled(AwardItemGroup)`
  ${smoothAppearUpAnimation}
  animation-delay: ${delayGap * 2}ms;
`

const AchievementSection = () => (
  <AchievementSectionContainer>
    <StyledLogoImage />
    <div>
      <StyledMetricItemGroup />
      <StyledAwardItemGroup />
    </div>
  </AchievementSectionContainer>
)

export default AchievementSection
