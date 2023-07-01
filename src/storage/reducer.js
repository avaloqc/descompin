import * as types from './types';

export function reducer(state, action) {  
  switch (action.type) {
    case types.OpenModalSaveType:
      return {
        ...state,
        type: types.OpenModalSaveType,
        mode: 'savePin'
      }
    case types.CloseModalsType:
      return {
        ...state,
        type: types.CloseModalsType,
        mode: null
      }
    case types.FetchFoldersInitType:
      return {
        ...state,
        type: types.FetchFoldersInitType,
      }
    case types.FetchFoldersSuccessType:
      return {
        ...state,
        type: types.FetchFoldersSuccessType,
        folders: action.payload
      }
    case types.OpenModalCreateFolderType:
      return {
        ...state,
        type: types.OpenModalCreateFolderType,
        mode: 'createFolder'
      }
    case types.SaveFolderSuccessType:
      return {
        ...state,
        type: types.SaveFolderSuccessType,
        folders: [
          ...state.folders,
          action.payload
        ]
      }
    case types.SaveFolderType:
      return {
        ...state,
        type: types.SaveFolderType,
        folders: action.payload
      }
    default:
      return state;
  }
}
