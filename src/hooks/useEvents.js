import { useReducer } from 'react';

export function useEvents() {
  /* Setting the initial state of the store. */
  const initialState = {
    openMenuHeader: false,
    openModal: { modalChild: null, modalInfo: {}, modalState: false },
  };

  /* An object that contains the action types that are being used in the reducer. */
  const actionTypes = {
    click_header_menu: 'CLICK_HEADER_MENU',
    click_modal: 'CLICK_MODAL',
  };

  /**
   * It takes in a state and an action, and returns a new state based on the action.
   * @param state - The current state of the store.
   * @param action - This is the action object that is dispatched.
   * @returns The state is being returned.
   */
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

  /**
   * When the user clicks the header menu, toggle the state of the openMenuHeader property.
   */
  const handleHeaderMenu = () => {
    dispatch({
      type: actionTypes.click_header_menu,
      payload: !state.openMenuHeader,
    });
  };

  /**
   * It takes an object with a modalChild and modalInfo property,
   * and then dispatches an action with a
   * payload that contains the modalChild, modalInfo, and modalState.
   */
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

  /**
   * If the modal is open and the user presses the escape key,
   * close the modal. If the modal is closed
   * and the user presses the enter key, open the modal.
   * @param event - the event that is being passed down from the parent component
   */
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
