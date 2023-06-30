import * as types from './types';

export function reducer(state, action) {  
  switch (action.type) {
    case types.OpenModalSaveType:
      return {
        ...state,
        mode: 'savePin'
      }
    case types.CloseModalsType:
      return {
        ...state,
        mode: null
      }
    case types.FetchFoldersInitType:
      return {
        ...state
      }
    case types.FetchFoldersSuccessType:
      return {
        ...state,
        folders: action.payload
      }
    default:
      return state;
  }
}
