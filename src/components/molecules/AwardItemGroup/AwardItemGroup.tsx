import styled from '@emotion/styled'

import { play_store, badge_Apple } from '@/assets'
import { AwardItem } from '@/components'

const AwardItemGroupBox = styled.div`
  display: flex;
`
const StyledAwardItem = styled(AwardItem)`
  margin-right: 20px;
`

const AwardItemGroup = ({ ...props }) => (
  <AwardItemGroupBox {...props}>
    <StyledAwardItem
      imageUrl={play_store}
      year="2018"
      provider="구글 플레이 스토어"
      title="올해의 앱 최우수상 수상"
    />
    <StyledAwardItem
      imageUrl={badge_Apple}
      year="2018"
      provider="애플 앱 스토어"
      title="올해의 여행앱 선정"
    />
  </AwardItemGroupBox>
)

export default AwardItemGroup
