import styled from 'styled-components';

import Button from '../../common/Button';

const BasicButton = styled(Button)`
  position: absolute;
  top: 50px;
  z-index: 1;
`;

export const LeftButton = styled(BasicButton)`
  font-size: ${({ buttonSizeOnBothSide }) => buttonSizeOnBothSide};
  left: ${({ buttonSizeOnBothSide }) => -Number(buttonSizeOnBothSide.split('px')[0]) - 10}px;
`;

export const RightButton = styled(BasicButton)`
  font-size: ${({ buttonSizeOnBothSide }) => buttonSizeOnBothSide};
  right: ${({ buttonSizeOnBothSide }) => -Number(buttonSizeOnBothSide.split('px')[0]) - 10}px;
`;
