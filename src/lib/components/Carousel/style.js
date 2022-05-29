import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
`;

export const Container = styled.section`
  position: relative;
  margin: 0 ${({ buttonSizeOnBothSide }) => buttonSizeOnBothSide};
`;
