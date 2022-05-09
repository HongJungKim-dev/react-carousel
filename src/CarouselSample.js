import React from 'react';
import styled from 'styled-components';

import Carousel from './components/Carousel';

const showingSlideCardNum = 5;
const itemGap = '36px';
const buttonSizeOnBothSide = '25px';
const items = [
  {
    id: 1,
    content: '1',
  },
  {
    id: 2,
    content: '2',
  },
  {
    id: 3,
    content: '3',
  },
  {
    id: 4,
    content: '4',
  },
  {
    id: 5,
    content: '5',
  },
  {
    id: 6,
    content: '6',
  },
  {
    id: 7,
    content: '7',
  },
  {
    id: 8,
    content: '8',
  },
  {
    id: 9,
    content: '9',
  },
  {
    id: 10,
    content: '10',
  },
  {
    id: 11,
    content: '11',
  },
];

const CarouselSample = () => {
  return (
    <StyledContainer>
      <Carousel showingSlideCardNum={showingSlideCardNum} itemGap={itemGap} buttonSizeOnBothSide={buttonSizeOnBothSide}>
        {items.map(({ id, content }) => (
          <StyledItem key={`item-${id}`}>{content}</StyledItem>
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
