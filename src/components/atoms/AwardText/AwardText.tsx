import styled from '@emotion/styled'

import { BackgroundImage } from '@/components'

interface AwardTextProps extends React.ComponentProps<'div'> {
  imageUrl: string
  year: string
  provider: string
  title: string
}

const AwardTextBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`

const TextsBox = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  margin-left: 10px;
  color: rgba(58, 58, 58, 0.8);
`
const ProviderText = styled.span`
  display: block;
`

const AwardText = ({
  imageUrl,
  year,
  provider,
  title,
  ...props
}: AwardTextProps) => (
  <AwardTextBox {...props}>
    <BackgroundImage
      imageUrl={imageUrl}
      width="54px"
      height="54px"
      aria-hidden="true"
    />
    <TextsBox>
      <ProviderText>
        {year}&nbsp;{provider}
      </ProviderText>
      <strong>{title}</strong>
    </TextsBox>
  </AwardTextBox>
)

export default AwardText
