import React from 'react';
import styled from 'styled-components';

import CarouselSample from './CarouselSample';

const App = () => {
  return (
    <StyledApp>
      <CarouselSample />
    </StyledApp>
  );
};

const StyledApp = styled.div`
  margin: 0 50px;
`;
export default App;
