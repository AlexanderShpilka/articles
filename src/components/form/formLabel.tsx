import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: inline-block;
  min-width: 100px;
  color: #090a0b;
`;

interface FormLabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

export default function FormLabel(props: FormLabelProps): JSX.Element {
  const { htmlFor, children } = props;

  return <Label htmlFor={htmlFor}>{children}</Label>;
}
