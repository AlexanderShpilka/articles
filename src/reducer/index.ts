import { Reducer } from 'redux';
import { Action, ActionTypes } from '../actions/types';

export interface StoreState {
  titleValue: string;
  bodyValue: string;
  sendingArticle: boolean;
  isSubmitSuccess: boolean | null;
}

const initialState = {
  titleValue: '',
  bodyValue: '',
  sendingArticle: false,
  isSubmitSuccess: null,
};

export const reducer: Reducer<StoreState, Action> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.setTitleValue:
      return {
        ...state,
        titleValue: action.payload,
      };

    case ActionTypes.setBodyValue:
      return {
        ...state,
        bodyValue: action.payload,
      };

    case ActionTypes.setSendingArticle:
      return {
        ...state,
        sendingArticle: action.payload,
      };

    case ActionTypes.setIsSubmitSuccess:
      return {
        ...state,
        isSubmitSuccess: action.payload,
      };

    case ActionTypes.closePopup:
      return {
        ...state,
        isSubmitSuccess: null,
      };

    default:
      return state;
  }
};
