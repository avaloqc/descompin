import * as types from './types';
import * as pinService from '../services/pinService';

const sleep = (time) => (
  new Promise (resolve => setTimeout(resolve, time))
);

export const openModalSavepinAction = (pinId) => ({
  type: types.OpenModalSaveType,
  payload: pinId
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
export const saveFolderAction = async (dispatch, pinId, folderName) => {
  dispatch(saveFolderInitAction());
  await sleep(1000);
  const folder = await pinService.saveFolder(folderName);
  const folderPlusPin = await pinService.savePinInFolder(pinId, folder.id)
  dispatch(saveFolderSuccessAction(folderPlusPin));
}

export const savePinInFolderInitAction = () => {
  return {
    type: types.SavePinInFolderInitType,
  }
}
export const savePinInFolderSuccessAction = (folders) => {
  return {
    type: types.SavePinInFolderSuccessType,
    payload: folders,
  }
}

export const savePinInFolderAction = async (dispatch, pinId, folderId) => {
  dispatch(savePinInFolderInitAction());
  await sleep(1000);
  await pinService.savePinInFolder(pinId, folderId);
  const updatedFolders = await pinService.getFolders()
  dispatch(savePinInFolderSuccessAction(updatedFolders));
}

export const fetchPinsDataInitAction = () => ({
  type: types.fetchPinsDataInitType
})
export const fetchPinsDataSuccessAction = (pinCardsData) => ({
  type: types.fetchPinsDataSuccessType,
  payload: pinCardsData
})
export const fetchPinsDataAction = async (dispatch) => {
  dispatch(fetchPinsDataInitAction())
  const pinsData = await pinService.getPins();
  dispatch(fetchPinsDataSuccessAction(pinsData))
}