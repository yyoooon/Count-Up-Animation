import styled from '@emotion/styled'

const AwardTextBox = styled.div<{ imageUrl: string }>`
  display: flex;
  justify-content: left;
  align-items: center;

  &:before {
    content: '';
    display: block;
    width: 54px;
    height: 54px;
    margin-right: 10px;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`

const TextBox = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: rgba(58, 58, 58, 0.8);
`
const ProviderText = styled.span`
  display: block;
`

interface AwardTextProps extends React.ComponentProps<'div'> {
  imageUrl: string
  year: string
  provider: string
  title: string
}

const AwardText = ({
  imageUrl,
  year,
  provider,
  title,
  ...props
}: AwardTextProps) => (
  <AwardTextBox {...props} imageUrl={imageUrl}>
    <TextBox>
      <ProviderText>
        {year}&nbsp;{provider}
      </ProviderText>
      <strong>{title}</strong>
    </TextBox>
  </AwardTextBox>
)

export default AwardText
