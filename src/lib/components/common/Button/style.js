import styled from 'styled-components';

const BasicButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  :disabled {
    color: gray;
  }
`;

export default BasicButton;
