import React from 'react';

import * as S from './style';

const ItemContainer = ({ children, showingSlideCardNum, slidingSize, handleTransitionEnd, itemGap }) => {
  return (
    <S.ItemContainer showingSlideCardNum={showingSlideCardNum} slidingSize={slidingSize} onTransitionEnd={handleTransitionEnd} itemGap={itemGap}>
      {children.map((child, idx) => (
        <S.Item key={`cardContainer-${idx}`} showingSlideCardNum={showingSlideCardNum} itemGap={itemGap}>
          {child}
        </S.Item>
      ))}
    </S.ItemContainer>
  );
};

export default ItemContainer;
