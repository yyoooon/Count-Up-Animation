import styled from '@emotion/styled'

import { play_store, badge_Apple } from '@/assets'
import { AwardText } from '@/components'

const AwardTextGroupBox = styled.div`
  display: flex;
`
const StyledAwardText = styled(AwardText)`
  margin-right: 20px;
`

const AwardTextGroup = ({ ...props }) => (
  <AwardTextGroupBox {...props}>
    <StyledAwardText
      imageUrl={play_store}
      year="2018"
      provider="구글 플레이 스토어"
      title="올해의 앱 최우수상 수상"
    />
    <StyledAwardText
      imageUrl={badge_Apple}
      year="2018"
      provider="애플 앱 스토어"
      title="올해의 여행앱 선정"
    />
  </AwardTextGroupBox>
)

export default AwardTextGroup
