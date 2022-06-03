import React from 'react';

import BasicButton from './style';

const Button = ({ className, icon, disabled, onClick }) => {
  return (
    <BasicButton disabled={disabled} className={className} onClick={onClick}>
      {icon}
    </BasicButton>
  );
};

export default Button;
