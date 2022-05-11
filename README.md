# react-carousel

carousel in React

### Demo

https://user-images.githubusercontent.com/58525009/167331869-642f1022-fc29-4276-a7fb-82d19acc15b2.mp4

### Installation

```
npm install @eden-kim/react-carousel
```

### Usage

```jsx
import React from 'react';
import styled from 'styled-components';

import Carousel from '@eden-kim/react-carousel';

const showingSlideCardNum = 5;
const itemGap = '36px';
const buttonSizeOnBothSide = '25px';
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const CarouselSample = () => {
  return (
    <StyledContainer>
      <Carousel showingSlideCardNum={showingSlideCardNum} itemGap={itemGap} buttonSizeOnBothSide={buttonSizeOnBothSide}>
        {items.map((item) => (
          <StyledItem key={`content-${item}`}>{item}</StyledItem>
        ))}
      </Carousel>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin-top: 50px;
`;

const StyledItem = styled.div`
  background: #f7ebfa;
  text-align: center;
  font-size: 2rem;
  line-height: 140px;
  height: 150px;
  border-radius: 8px;
`;

export default CarouselSample;
```

### Props

|         Name         |  Type  |           Description            |
| :------------------: | :----: | :------------------------------: |
| showingSlideCardNum  | number | Number of Items which is showing |
|       itemGap        | string |     Gap length between items     |
| buttonSizeOnBothSide | string |    Button size on both sides     |
