import React from 'react';
import styled from 'styled-components';

const Textarea = styled.textarea`
  width: 100%;
  max-width: 400px;
  height: 170px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  resize: vertical;
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
