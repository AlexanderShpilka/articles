import React from 'react';
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import FormLabel from './formLabel';
import FormInput from './formInput';
import FormTextarea from './FormTextarea';
import FormButton from './formButton';
import { StoreState } from '../../reducer';
import { setTitleInputValue, setBodyInputValue, createArticle } from '../../actions';

interface FormProps {
  titleValue: string;
  bodyValue: string;
  sendingArticle: boolean;
}

export default function Form(): JSX.Element {
  const { titleValue, bodyValue, sendingArticle } = useSelector<StoreState, FormProps>((state: StoreState) => ({
    titleValue: state.titleValue,
    bodyValue: state.bodyValue,
    sendingArticle: state.sendingArticle,
  }));

  const dispatch: Dispatch = useDispatch();

  const handleTitleInputChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setTitleInputValue(evt.target.value));
  };

  const handleBodyInputChange = (evt: React.ChangeEvent<HTMLTextAreaElement>): void => {
    dispatch(setBodyInputValue(evt.target.value));
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    // Насколько знаю между redux и redux-thunk есть нестыковки
    // в том плане, что dispatch ожидает объект с полем type,
    // тогда как createPost передает функцию для выполнения асинхронной операции.
    // Пришлось поставить тип any. Без этого build завершался ошибкой
    // и нельзя было задеплоить приложение.
    dispatch<any>(createArticle());
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <FormLabel htmlFor="title-value">Title:</FormLabel>
        <FormInput type="text" value={titleValue} handler={handleTitleInputChange} id="title-value" required />
      </p>
      <p>
        <FormLabel htmlFor="body-value">Body:</FormLabel>
        <FormTextarea value={bodyValue} handler={handleBodyInputChange} id="body-value" required />
      </p>
      <FormButton disabled={sendingArticle}>Send</FormButton>
    </form>
  );
}
