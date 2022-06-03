import React from 'react';
import styled from 'styled-components';

import Carousel from './lib/components/Carousel';
import items from './lib/constants/constants';

const showingSlideCardNum = 5;
const itemGap = '36px';
const buttonSizeOnBothSide = '25px';

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
