# YangYoon_Triple_Work

[배포 링크](https://yang-yoon-triple-work.vercel.app/)

</br>

## 프로젝트 실행 방법

1. 폴더를 내려받아주세요. 
2. 터미널에 `yarn install`을 실행해주세요.
3. 패키지가 다운 받아졌으면 `yarn start`를 실행해주세요. 

</br>

## 기술 스택

</br>

CRA을 사용하지 않고 직접 환경을 구성했습니다.

- `react, react dom`
- `typescript` : 타입 오류를 방지 하고 명확한 타입 명시를 위해 사용했습니다.
- `webpack5` : 모듈 사용과 파일 번들링을 위해 사용했습니다.
- `babel` : es6, typscript, react, emotion에서 사용되는 신문법을 브라우저 호환성을 위해 트랜스파일 해주기 위해 사용했습니다.
- `eslint-config-triple` : triple의 코드 컨벤션을 지키기 위해 사용했습니다.
- `emotion`: css-in-js로 스타일을 적용하기 위해 사용했습니다.

</br>

## 기능 구현 내용


### 🔧  기본  사항

```
✅ 문구, 이미지의 레이아웃과 스타일은 트리플 홈페이지와 동일해야 합니다. 단,반응형 레이아웃은 고려하지 않습니다. 최소 화면 폭을 1200px로 고정합니다.
✅ React를 이용하여 개발합니다. 그 외의 개발 스택은 자유롭게 구성합니다.
✅ Google Chrome 최신 버전에서 동작해야 합니다.
✅ 린팅/포매팅 셋업 시 titicacadev/eslint-config-triple을 적용해주세요.
```

</br>

### 🔧  영역 별 등장 애니메이션

</br>

**요구 사항**
```
✅ 좌측 이미지, 지표 문구, 수상 내역 순으로 표시해야 합니다.
✅ 살짝 위로 떠오르는 듯한 애니메이션과 투명도를 조절하는 애니메이션을 적용해야 합니다.
✅ 등장 애니메이션의 duration은 700ms이고, 애니메이션 사이 간격은 100ms입니다.
```

</br>

**구현 방법**
- css의 keyframes과 animation속성을 이용해 구현했습니다.
- 공통적으로 적용되는 애니메이션 속성을 추상화해 적용하고, 등장 delay만 다르게 적용해주었습니다.

</br>

**로직 코드**

```ts
// AchievementSection/transitionAnimation.ts

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

```

</br>

**사용 코드**
```tsx
// AchievementSection/AchievementSection.tsx

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
```


<br/>

</br>

### 🔧  숫자가 올라가는 애니메이션

</br>

**요구 사항**
```
✅ 각 숫자는 0부터 시작합니다.
✅ 세 숫자 모두 2초 동안 증가하고, 동시에 끝나야 합니다.
✅ 증가 속도가 느려지는 효과를 구현해야 합니다.
✅ React와 DOM API만을 이용해 구현해야 합니다.
```

</br>

**구현 방법** 

숫자가 다음 숫자로 변하는 시간을 점점 늦추는 방법으로 구현했습니다.
- counteNumber는 maxCountNumber에서 decreasingValue을 뺀 값을 정수로 올림한 값입니다.
- decreasingValue은 계속 감소되기 때문에  그래서 countingNumber가 점점 커지게 됩니다.
- decreasingValue 값이 감소하는 정도가 점점 줄어들기 때문에 countingNumber는 증가 되는 정도가 점점 줄게 됩니다.
- 감소하는 정도가 1이하가 되면 숫자가 바뀌지 않게 되는 빈도가 많아지고, 숫자가 바뀌는 속도가 늦어지게 됩니다.

<br/>

- 2초의 제한시간이 있기 때문에 특정 숫자까지 도달하는 동안 위의 로직을 몇 번 반복하는 지 먼저 구한 후,
- 2000(ms)으로 나눠준 값을 setInterval의 2번째 인자로 적용하였습니다

```
// 다음 정수로 바뀌는 시간이 점점 증가함

0.5
0.97
1.42
1.85
2.26
2.64
3.01
3.36
3.69
4.01
4.31
4.59
4.86
5.12
5.36
5.59
5.81
6.02
6.22
6.41
6.59
6.76
6.92
```

</br>

**로직 코드**

```tsx

// MetricItem/countUpAnimation.ts

interface CountUpAnimationType {
  initialCountNumber?: number
  maxCountNumber: number
  duration: number
  delay: number
  onCountNumber: (num: number) => void
}

const getRepeatCount = (maxCountNumber: number, delay: number) => {
  let decreasingValue = maxCountNumber
  let repeatCount = 0

  while (Math.ceil(maxCountNumber - decreasingValue) !== maxCountNumber) {
    repeatCount++

    const step = decreasingValue / delay
    decreasingValue -= step
  }

  return repeatCount
}

const getTimeToRepeatOnce = (
  maxCountNumber: number,
  delay: number,
  duration: number,
) => {
  const repeatCount = getRepeatCount(maxCountNumber, delay)
  return duration / repeatCount
}

export const countUpAnimation = ({
  initialCountNumber = 0,
  maxCountNumber,
  duration,
  delay,
  onCountNumber,
}: CountUpAnimationType) => {
  let countNumber = initialCountNumber
  let decreasingValue = maxCountNumber
  const timeToRepeatOnce = getTimeToRepeatOnce(maxCountNumber, delay, duration)

  const handle = setInterval(() => {
    const nextCountNumber = Math.ceil(maxCountNumber - decreasingValue)

    if (countNumber !== nextCountNumber) {
      countNumber = nextCountNumber
      onCountNumber(countNumber)
    }

    if (countNumber === maxCountNumber) {
      clearInterval(handle)
      return
    }

    const nextDegreeOfDecreasing = decreasingValue / delay
    decreasingValue -= nextDegreeOfDecreasing
  }, timeToRepeatOnce)
}

```

</br>

**사용 코드**
```tsx
// MetricItem/MetricItem.tsx
  useEffect(() => {
    countUpAnimation({
      maxCountNumber: number,
      duration: 2000,
      delay: 25,
      onCountNumber: (num: number) => {
        if (!count.current) {
          return
        }
        count.current.innerText = String(num)
      },
    })
  }, [number])
```

</br>

## 폴더 구조

```
root
├─ public
│  └─ index.html
└─ src
   ├─ assets
   │  ├─ images
   │  │  ├─ badge-apple.png
   │  │  ├─ play-store.png
   │  │  └─ triple.png
   │  └─ index.ts
   ├─ components
   │  ├─ atoms
   │  │  ├─ AwardItem
   │  │  │  └─ AwardItem.tsx
   │  │  ├─ BackgroundImage
   │  │  │  └─ BackgroundImage.tsx
   │  │  └─ MetricItem
   │  │     ├─ MetricItem.tsx
   │  │     └─ countUpAnimation.ts
   │  ├─ molecules
   │  │  ├─ AwardItemGroup
   │  │  │  └─ AwardItemGroup.tsx
   │  │  ├─ LogoImage
   │  │  │  └─ LogoImage.tsx
   │  │  └─ MetricItemGroup
   │  │     └─ MetricItemGroup.tsx
   │  ├─ organisms
   │  │  └─ AchievementSection
   │  │      ├─ AchievementSection.tsx
   │  │      └─ transitionAnimation.ts
   │  └─ index.ts
   ├─ pages
   │  ├─ MainPage.tsx
   │  └─ index.ts
   ├─ style
   │  ├─ GlobalStyle.tsx
   │  └─ index.ts
   ├─ App.tsx
   └─ index.tsx
```
</br>

## 컴포넌트 구조

```
<MainPage>
   <AchievementSection>
      <LogoImage>
      <MetricItemGroup>
      <AwardItemGroup>
   <AchievementSection>
<MainPage>
```

</br>

## 스타일드 컴포넌트 네이밍 컨벤션
`section태그`: ~container *(ex.AchievementSectionContainer)*

`div태그`: ~box *(ex.MetricItemBox)*

`span태그`: ~text  *(ex.MeasureText)*

</br>

## 트러블 슈팅과 아쉬운 점
https://yoonnote.notion.site/d9785cd863c548b985bd989a7e37e5ea

