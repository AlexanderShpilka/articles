import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ActionTypes } from './types';
import { StoreState } from '../reducer';
import { articles } from '../apis/articles';

export interface SetTitleValueAction {
  type: ActionTypes.setTitleValue;
  payload: string;
}

export interface SetBodyValueAction {
  type: ActionTypes.setBodyValue;
  payload: string;
}

export interface SetSendingArticleAction {
  type: ActionTypes.setSendingArticle;
  payload: boolean;
}

export interface SetIsSubmitSuccessAction {
  type: ActionTypes.setIsSubmitSuccess;
  payload: boolean | null;
}

export interface ClosePopupAction {
  type: ActionTypes.closePopup;
}

export const setTitleInputValue = (value: string): SetTitleValueAction => ({
  type: ActionTypes.setTitleValue,
  payload: value,
});

export const setBodyInputValue = (value: string): SetBodyValueAction => ({
  type: ActionTypes.setBodyValue,
  payload: value,
});

export const createArticle = (): ThunkAction<void, StoreState, unknown, Action<ActionTypes>> => {
  return async (dispatch, getState) => {
    const { titleValue, bodyValue } = getState();

    dispatch<SetSendingArticleAction>({
      type: ActionTypes.setSendingArticle,
      payload: true,
    });

    try {
      await articles.post('/articles', { title: titleValue, description: bodyValue });

      dispatch<SetIsSubmitSuccessAction>({
        type: ActionTypes.setIsSubmitSuccess,
        payload: true,
      });

      dispatch<SetTitleValueAction>({
        type: ActionTypes.setTitleValue,
        payload: '',
      });

      dispatch<SetBodyValueAction>({
        type: ActionTypes.setBodyValue,
        payload: '',
      });
    } catch (e) {
      dispatch<SetIsSubmitSuccessAction>({
        type: ActionTypes.setIsSubmitSuccess,
        payload: false,
      });
    } finally {
      dispatch<SetSendingArticleAction>({
        type: ActionTypes.setSendingArticle,
        payload: false,
      });
    }
  };
};

export const setIsSubmitSuccess = (isSubmitSuccess: boolean | null): SetIsSubmitSuccessAction => ({
  type: ActionTypes.setIsSubmitSuccess,
  payload: isSubmitSuccess,
});

export const closePopup = (): ClosePopupAction => ({
  type: ActionTypes.closePopup,
});
