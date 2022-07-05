import styled from '@emotion/styled'

import { BackgroundImage } from '@/components'
import { triple } from '@/assets'

const StyledBackgroundImage = styled(BackgroundImage)`
  padding-top: 280px;
  color: rgba(58, 58, 58, 0.7);
`

const LogoImage = ({ ...props }) => (
  <StyledBackgroundImage
    imageUrl={triple}
    width="400px"
    height="338px"
    {...props}
  >
    <span>2019년 2월 기준</span>
  </StyledBackgroundImage>
)

export default LogoImage
