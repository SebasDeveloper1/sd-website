import React from 'react';

export function useEvents() {
  const initialState = {
    openMenuHeader: false,
  };

  const actionTypes = {
    click_header_menu: 'CLICK_HEADER_MENU',
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.click_header_menu:
        return {
          ...state,
          openMenuHeader: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleHeaderMenu = () => {
    dispatch({
      type: actionTypes.click_header_menu,
      payload: !state.openMenuHeader,
    });
  };

  return {
    state,
    handleHeaderMenu,
  };
}
