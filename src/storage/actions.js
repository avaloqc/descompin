import * as types from './types';
import * as pinService from '../services/pinService';

export const openModalSavepinAction = () => ({
  type: types.OpenModalSaveType
});

export const openModalCreateFolderAction = () => ({
  type: types.OpenModalCreateFolderType
});

export const closeModalsAction = () => ({
  type: types.CloseModalsType
});

export const fetchFoldersInitAction = () => {
  return {
    type: types.FetchFoldersInitType
  }
}
export const fetchFoldersSuccessAction = (folders) => {
  return {
    type: types.FetchFoldersSuccessType,
    payload: folders
  }
}
export const fetchFoldersAction = async (dispatch) => {
  dispatch(fetchFoldersInitAction())
  const folders = await pinService.getFolders();
  dispatch(fetchFoldersSuccessAction(folders));
}

export const saveFolderInitAction = () => {
  return {
    type: types.SaveFolderInitType,
  }
}
export const saveFolderSuccessAction = (folder) => {
  return {
    type: types.SaveFolderSuccessType,
    payload: folder
  }
}
export const saveFolderAction = async (folderName, dispatch) => {
  dispatch(saveFolderInitAction())
  const folder = await pinService.saveFolder(folderName);
  dispatch(saveFolderSuccessAction(folder))
}