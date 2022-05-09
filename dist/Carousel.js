import React, { useState } from 'react';
import styled from 'styled-components';
import 'reset-css';
const DEFAULT_SHOWING_CARD_NUM = 4;
const DEFAULT_ITEM_GAP = '36px';
const DEFAULT_BUTTON_SIZE_ON_BOTH_SIDE = '25px';
const items = [{
  id: 1,
  content: '1'
}, {
  id: 2,
  content: '2'
}, {
  id: 3,
  content: '3'
}, {
  id: 4,
  content: '4'
}, {
  id: 5,
  content: '5'
}, {
  id: 6,
  content: '6'
}, {
  id: 7,
  content: '7'
}, {
  id: 8,
  content: '8'
}, {
  id: 9,
  content: '9'
}, {
  id: 10,
  content: '10'
}, {
  id: 11,
  content: '11'
}];

const Carousel = ({
  children,
  showingSlideCardNum = DEFAULT_SHOWING_CARD_NUM,
  itemGap = DEFAULT_ITEM_GAP,
  buttonSizeOnBothSide = DEFAULT_BUTTON_SIZE_ON_BOTH_SIDE
}) => {
  const [slidingSize, setSlidingSize] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  const handleTransitionEnd = () => {
    setIsMoving(false);
  };

  const handleClickSlide = movingSlidingSize => {
    setIsMoving(true);
    setSlidingSize(slidingSize + movingSlidingSize);
  };

  return /*#__PURE__*/React.createElement(StyledContainer, {
    buttonSizeOnBothSide: buttonSizeOnBothSide
  }, /*#__PURE__*/React.createElement(CarouselButton, {
    showingSlideCardNum: showingSlideCardNum,
    handleClickSlide: handleClickSlide,
    cardNum: children?.length || items.length,
    isMoving: isMoving,
    buttonSizeOnBothSide: buttonSizeOnBothSide
  }), /*#__PURE__*/React.createElement(StyledWrapper, {
    itemGap: itemGap,
    buttonSize: buttonSizeOnBothSide
  }, /*#__PURE__*/React.createElement(ItemContainer, {
    showingSlideCardNum: showingSlideCardNum,
    slidingSize: slidingSize,
    handleTransitionEnd: handleTransitionEnd,
    itemGap: itemGap
  }, children ? children : items.map(({
    id,
    content
  }) => /*#__PURE__*/React.createElement(StyledChildrenItem, {
    key: `item-${id}`
  }, content)))));
};

const CarouselButton = ({
  showingSlideCardNum,
  handleClickSlide,
  isMoving,
  cardNum,
  buttonSizeOnBothSide
}) => {
  const initialHeadCardOrder = 1;
  const [curHeadCardOrder, setCurHeadCardOrder] = useState(initialHeadCardOrder);
  const [disabledPrevBtn, setDisabledPrevBtn] = useState(true);
  const [disabledNextBtn, setDisabledNextBtn] = useState(false);

  const handleClickPrev = () => {
    if (disabledPrevBtn) return;
    /**
     * 1 2 3 4 | 5 6 7 8 (이전에 4개 있는 경우)
     * 5 - 4 => 1
     * 1 2 3 | 4 5 6 7 |(이전에 3개 있는 경우)
     * 4 - 4 => 0
     * 1 2 | 3 4 5 6 | (이전에 2개 있는 경우)
     * 3 - 4 => -1
     * 1 | 2 3 4 5 | (이전에 1개 있는 경우)
     * 2- 4 => -2
     */

    const prevOrder = curHeadCardOrder - showingSlideCardNum;
    const isLeakNFirstSlide = prevOrder < 1;
    const isFirstShowingSlide = isLeakNFirstSlide || prevOrder === initialHeadCardOrder;
    changeBtnActivation(isFirstShowingSlide, setDisabledPrevBtn, setDisabledNextBtn);
    /**
     * if(showingSlideCardNum = 4) 1 2 3 | 4 5 6 7 | => 4 + 4 - (4 + 1) = 3
     * if(showingSlideCardNum = 3) 1 2 | 3 4 5 | => 3 + 3 - (3 + 1) = 2
     */

    const sizeToMove = showingSlideCardNum + curHeadCardOrder - (showingSlideCardNum + initialHeadCardOrder);
    setCurHeadCardOrder(isLeakNFirstSlide ? curHeadCardOrder - sizeToMove : curHeadCardOrder - showingSlideCardNum);
    const prevSlidingSize = getSlidingSize(isLeakNFirstSlide, sizeToMove, showingSlideCardNum);
    handleClickSlide(prevSlidingSize);
  };

  const handleClickNext = () => {
    if (disabledNextBtn) return;
    const showingHeadCardOrder = curHeadCardOrder + showingSlideCardNum;
    const sizeToMove = cardNum % showingSlideCardNum;
    const isUndividedLastSlide = (showingHeadCardOrder - initialHeadCardOrder) / showingSlideCardNum === Math.floor(cardNum / showingSlideCardNum);
    const isDividedLastSlide = showingHeadCardOrder + showingSlideCardNum === cardNum + initialHeadCardOrder;
    const isLastShowingSlide = isUndividedLastSlide || isDividedLastSlide;
    changeBtnActivation(isLastShowingSlide, setDisabledNextBtn, setDisabledPrevBtn);
    setCurHeadCardOrder(isUndividedLastSlide ? curHeadCardOrder + sizeToMove : showingHeadCardOrder);
    const nextSlidingSize = getSlidingSize(isUndividedLastSlide, sizeToMove, showingSlideCardNum);
    handleClickSlide(-nextSlidingSize);
  };

  const changeBtnActivation = (isImmovable, setSelectedBtnActivate, setAnotherBtnActivate) => {
    if (isImmovable) {
      setSelectedBtnActivate(true);
    } else {
      setSelectedBtnActivate(false);
    }

    setAnotherBtnActivate(false);
  };

  const getSlidingSize = (isMoveableSlide, sizeToMove, showingSlideCardNum) => {
    const moveDefault = 100;
    const slidingSize = isMoveableSlide ? Math.floor(moveDefault * (sizeToMove / showingSlideCardNum)) : moveDefault;
    return slidingSize;
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledLeftButton, {
    icon: '◀',
    disabled: disabledPrevBtn || isMoving,
    onClick: handleClickPrev,
    buttonSizeOnBothSide: buttonSizeOnBothSide
  }), /*#__PURE__*/React.createElement(StyledRightButton, {
    icon: '▶',
    disabled: disabledNextBtn || isMoving,
    onClick: handleClickNext,
    buttonSizeOnBothSide: buttonSizeOnBothSide
  }));
};

const ItemContainer = ({
  children,
  showingSlideCardNum,
  slidingSize,
  handleTransitionEnd,
  itemGap
}) => {
  return /*#__PURE__*/React.createElement(StyledItemContainer, {
    showingSlideCardNum: showingSlideCardNum,
    slidingSize: slidingSize,
    onTransitionEnd: handleTransitionEnd,
    itemGap: itemGap
  }, children.map((child, idx) => /*#__PURE__*/React.createElement(StyledItem, {
    key: `cardContainer-${idx}`,
    showingSlideCardNum: showingSlideCardNum,
    itemGap: itemGap
  }, child)));
};
/** Button Style*/


const Button = ({
  className,
  icon,
  disabled,
  onClick
}) => {
  return /*#__PURE__*/React.createElement(BasicButton, {
    disabled: disabled,
    className: className,
    onClick: onClick
  }, icon);
};

const BasicButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  :disabled {
    color: gray;
  }
`;
/**Carousel Style */

const StyledWrapper = styled.div`
  overflow: hidden;
`;
const StyledContainer = styled.section`
  position: relative;
  margin: 0 ${({
  buttonSizeOnBothSide
}) => buttonSizeOnBothSide};
`;
/**ItemConatiner Style */

const StyledItemContainer = styled.ul`
  display: flex;
  width: calc(100% + ${({
  itemGap
}) => itemGap});
  transition: transform 1s linear 0s;
  transform: translateX(${({
  slidingSize
}) => slidingSize}%);
  margin-left: calc(-${({
  itemGap
}) => itemGap} / 2);
`;
const StyledItem = styled.li`
  flex-shrink: 0;
  width: calc(${({
  showingSlideCardNum
}) => 1 / showingSlideCardNum * 100}% - ${({
  itemGap
}) => itemGap});
  height: calc(${({
  showingSlideCardNum
}) => 1 / showingSlideCardNum * 100}% - ${({
  itemGap
}) => itemGap});
  margin: 0 calc(${({
  itemGap
}) => itemGap} / 2);
`;
/**CarouselButton Style */

const StyledButton = styled(Button)`
  position: absolute;
  top: 50px;
  z-index: 1;
`;
const StyledLeftButton = styled(StyledButton)`
  font-size: ${({
  buttonSizeOnBothSide
}) => buttonSizeOnBothSide};
  left: ${({
  buttonSizeOnBothSide
}) => -Number(buttonSizeOnBothSide.split('px')[0]) - 10}px;
`;
const StyledRightButton = styled(StyledButton)`
  font-size: ${({
  buttonSizeOnBothSide
}) => buttonSizeOnBothSide};
  right: ${({
  buttonSizeOnBothSide
}) => -Number(buttonSizeOnBothSide.split('px')[0]) - 10}px;
`;
/**Default children Style*/

const StyledChildrenItem = styled.div`
  background: #f7ebfa;
  text-align: center;
  font-size: 2rem;
  line-height: 140px;
  height: 150px;
  border-radius: 8px;
`;
export default Carousel;