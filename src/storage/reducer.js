import * as types from './types'
export function reducer(state, action) {
  switch (action.type) {
    case types.OPEN_MODAL_SAVE_PIN_TYPE:
      return {
        ...state,
        mode: 'savePin'
      }
    case types.CLOSE_MODALS_TYPE:
      return {
        ...state,
        mode: null
      }
    default:
      return state;
  }
}
