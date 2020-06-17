import React from 'react';
import styled from 'styled-components';

const Textarea = styled.textarea`
  width: 250px;
  height: 150px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
`;

interface FormTextareaProps {
  id: string;
  value: string;
  handler(evt: React.ChangeEvent<HTMLTextAreaElement>): void;
  required?: boolean;
}

export default function FormTextarea(props: FormTextareaProps): JSX.Element {
  const { value, handler, id, required } = props;

  return <Textarea value={value} onChange={handler} id={id} required={required} />;
}
