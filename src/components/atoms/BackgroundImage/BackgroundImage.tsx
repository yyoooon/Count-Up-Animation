import styled from '@emotion/styled'

interface BackgroundImageType extends React.ComponentProps<'div'> {
  imageUrl: string
  width: string | number
  height: string | number
  children?: React.ReactElement | React.ReactElement[]
}

const BackgroundImageBox = styled.div<{
  imageUrl: string
  width: string | number
  height: string | number
}>`
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height};
  text-align: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`

const BackgroundImage = ({
  children,
  imageUrl,
  width = '100px',
  height = '100px',
  ...props
}: BackgroundImageType) => (
  <BackgroundImageBox
    imageUrl={imageUrl}
    width={width}
    height={height}
    {...props}
  >
    {children}
  </BackgroundImageBox>
)

export default BackgroundImage
