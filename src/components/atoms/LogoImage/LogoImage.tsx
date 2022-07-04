import styled from '@emotion/styled'

import { triple } from '@/assets'

const LogoImageBox = styled.div<{ imageUrl: string }>`
  width: 400px;
  height: 338px;
  padding-top: 280px;
  text-align: center;
  color: rgba(58, 58, 58, 0.7);
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`

const LogoImage = () => (
  <LogoImageBox imageUrl={triple}>
    <span>2019년 2월 기준</span>
  </LogoImageBox>
)

export default LogoImage
