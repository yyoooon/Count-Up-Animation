import { Global, css } from '@emotion/react'

const style = css`
  * {
    margin: 0;
    padding: 0;
    font-family: 'AppleSDGothicNeo', 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
  }

  html {
    font-family: 'AppleSDGothicNeo', 'Noto Sans KR', sans-serif;
  }

  body {
    font-family: 'AppleSDGothicNeo', 'Noto Sans KR', sans-serif;
  }
`

const GlobalStyle = () => {
  return <Global styles={style} />
}

export default GlobalStyle
