/**
 * getFolders()
 * saveFolder()
 * savePinInFolder()
*/

export const getFolders = async () => {
  return JSON.parse(localStorage.getItem('folders')) || [];
}

export const saveFolder = async (folderName) => {
  const folders = await getFolders();
  const newFolder = createFolder(folderName)
  folders.push(newFolder);
  savefolders(folders);
  return newFolder;
}

export const savePinInFolder = async (pinId, folderId) => {
  const folders = await getFolders();
  const folderIndex = folders.findIndex((folder)=> (folder.id===folderId))
  if (folderIndex !==-1) {
    folders[folderIndex].pins.push(pinId);
   savefolders(folders);
  }
  return {...folders[folderIndex]};
} 

const createFolder = (folderName) => {
  const newFolder = {
    id: generateId(),
    name: folderName,
    pins: [] 
  };
  return newFolder;
}

const savefolders = (folders) => {
  localStorage.setItem('folders', JSON.stringify(folders));
}

const generateId = () => {
  return `${(Math.floor(Math.random()*100_000)).toString(16)}-${Math.floor(Math.random()*100_000)}`
}