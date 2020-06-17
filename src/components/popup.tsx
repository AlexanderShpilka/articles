import React from 'react';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { StoreState } from '../reducer';
import { closePopup } from '../actions';

const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
`;

const PopupContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  padding: 10px;
  border-radius: 4px;
  background-color: #fff;
  text-align: center;
  transform: translate(-50%, -50%);
`;

const PopupClose = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  background-color: #090a0b;
  cursor: pointer;
`;

interface PopupTitleProps {
  readonly success?: boolean;
}

const PopupTitle = styled.h2<PopupTitleProps>`
  color: ${(props) => (props.success ? 'green' : 'red')};
  text-transform: uppercase;
`;

const BackHome = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #090a0b;

  a {
    color: #fff;
  }
`;

interface PopupProps {
  isSubmitSuccess: boolean | null;
}

export default function Popup(): JSX.Element | null {
  const { isSubmitSuccess } = useSelector<StoreState, PopupProps>((state: StoreState) => ({
    isSubmitSuccess: state.isSubmitSuccess,
  }));

  const dispatch: Dispatch = useDispatch();

  const handleCloseButtonClick = () => dispatch(closePopup());

  const handleBackHomeButtonClick = () => dispatch(closePopup());

  if (isSubmitSuccess == null) {
    return null;
  }

  return (
    <PopupWrapper>
      <PopupContent>
        <PopupClose onClick={handleCloseButtonClick}>X</PopupClose>
        {isSubmitSuccess ? (
          <>
            <PopupTitle success>Success</PopupTitle>
            <p>Article was successfully created</p>
          </>
        ) : (
          <>
            <PopupTitle>Error</PopupTitle>
            <p>Failed to create an article. Please try again later</p>
          </>
        )}
        <BackHome onClick={handleBackHomeButtonClick}>
          <Link href="/">
            <a>Back Home</a>
          </Link>
        </BackHome>
      </PopupContent>
    </PopupWrapper>
  );
}
