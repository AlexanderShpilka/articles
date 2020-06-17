import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  color: #fff;
  background-color: #090a0b;
  cursor: pointer;
  transition: 0.2s;

  &:hover:not(:disabled) {
    color: #090a0b;
    background-color: #fff;
  }

  &:disabled {
    opacity: 0.6;
  }
`;

interface FormButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
}

export default function FormButton(props: FormButtonProps): JSX.Element {
  const { disabled, children } = props;

  return <Button disabled={disabled}>{children}</Button>;
}
