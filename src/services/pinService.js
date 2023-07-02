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
  const folderIndex = folders.findIndex((folder) => (folder.id === folderId))
  if (folderIndex !== -1) {
    folders[folderIndex].pins.push(pinId);
    savefolders(folders);
  }
  return { ...folders[folderIndex] };
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
  return `${(Math.floor(Math.random() * 100_000)).toString(16)}-${Math.floor(Math.random() * 100_000)}`
}

export const getPins = async () => {
  return [
    {
      id: '123',
      title: 'Triginometria',
      image: 'https://picsum.photos/200/300?53',
      total: 0,
    },
    {
      id: '234',
      title: 'JavaScript',
      image: 'https://picsum.photos/200/300?52',
      total: 0,
    },
    {
      id: '456',
      title: 'Natureza',
      image: 'https://picsum.photos/200/300?51',
      total: 0,
    }
  ]
}