import React, { useState } from 'react';

import CarouselButton from './CarouselButton';
import ItemContainer from './ItemContainer';
import * as S from './style';

const Carousel = ({ children, showingSlideCardNum, itemGap, buttonSizeOnBothSide }) => {
  const [slidingSize, setSlidingSize] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  const handleTransitionEnd = () => {
    setIsMoving(false);
  };

  const handleClickSlide = (movingSlidingSize) => {
    setIsMoving(true);
    setSlidingSize(slidingSize + movingSlidingSize);
  };

  return (
    <S.Container buttonSizeOnBothSide={buttonSizeOnBothSide}>
      <CarouselButton
        showingSlideCardNum={showingSlideCardNum}
        handleClickSlide={handleClickSlide}
        cardNum={children.length}
        isMoving={isMoving}
        buttonSizeOnBothSide={buttonSizeOnBothSide}
      />
      <S.Wrapper itemGap={itemGap} buttonSize={buttonSizeOnBothSide}>
        <ItemContainer
          showingSlideCardNum={showingSlideCardNum}
          slidingSize={slidingSize}
          handleTransitionEnd={handleTransitionEnd}
          itemGap={itemGap}
        >
          {children}
        </ItemContainer>
      </S.Wrapper>
    </S.Container>
  );
};

export default Carousel;
