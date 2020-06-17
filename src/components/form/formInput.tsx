import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 250px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
`;

interface FormInputProps {
  type: string;
  id: string;
  value: string;
  handler(evt: React.ChangeEvent<HTMLInputElement>): void;
  required?: boolean;
}

export default function FormInput(props: FormInputProps): JSX.Element {
  const { type, value, handler, id, required } = props;

  return <Input type={type} value={value} onChange={handler} id={id} required={required} />;
}
