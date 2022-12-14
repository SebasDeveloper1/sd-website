import React, { useReducer } from 'react';

export function useEvents() {
  const initialState = {
    openMenuHeader: false,
    openModal: { modalChild: null, modalInfo: {}, modalState: false },
  };

  const actionTypes = {
    click_header_menu: 'CLICK_HEADER_MENU',
    click_modal: 'CLICK_MODAL',
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.click_header_menu:
        return {
          ...state,
          openMenuHeader: action.payload,
        };
      case actionTypes.click_modal:
        return {
          ...state,
          openModal: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleHeaderMenu = () => {
    dispatch({
      type: actionTypes.click_header_menu,
      payload: !state.openMenuHeader,
    });
  };

  const handleModal = ({ modalChild, modalInfo = {} }) => {
    dispatch({
      type: actionTypes.click_modal,
      payload: {
        modalChild,
        modalInfo,
        modalState: !state.openModal.modalState,
      },
    });
  };

  const handleModalDown = (event, { modalChild, modalInfo = {} }) => {
    event.preventDefault();
    if (
      // eslint-disable-next-line operator-linebreak
      (!state.openModal && event.keyCode === 13) ||
      (state.openModal && event.keyCode === 27)
    ) {
      handleModal({ modalChild, modalInfo });
    }
  };

  return {
    state,
    handleHeaderMenu,
    handleModal,
    handleModalDown,
  };
}
