import {
  SetTitleValueAction,
  SetBodyValueAction,
  SetSendingArticleAction,
  SetIsSubmitSuccessAction,
  ClosePopupAction,
} from '.';

export enum ActionTypes {
  setTitleValue,
  setBodyValue,
  createArticle,
  setSendingArticle,
  setIsSubmitSuccess,
  closePopup,
}

export type Action =
  | SetTitleValueAction
  | SetBodyValueAction
  | SetSendingArticleAction
  | SetIsSubmitSuccessAction
  | ClosePopupAction;
