import { keyframes, css } from '@emotion/react'

const smoothAppearUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export const smoothAppearUpAnimation = css`
  animation-name: ${smoothAppearUp};
  animation-duration: 700ms;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
`

export const delayGap = 100
