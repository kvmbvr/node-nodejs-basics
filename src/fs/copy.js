import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirDest = path.join(__dirname, 'files')
const copyDirDest = path.join(__dirname, 'files_copy')

const copy = async () => {
  await isFilesExist()
  await isCopyFilesExist()
  await createDir()
  await copyFiles()
}

const isFilesExist = async () => {
  await fs.opendir(dirDest, (err) => {
    if(err) {
      throw new Error('FS operation failed')
    }
  })
}

const isCopyFilesExist = async () => {
  await fs.opendir(copyDirDest, (err) => {
    if(!err) {
      throw new Error('FS operation failed')
    }
  })
}

const createDir = async () => {
  await fs.mkdir(copyDirDest, (err) => {
    if(err) {
      console.error(err)
    }
  })
}

const copyFiles = async () => {
  await fs.readdir(dirDest, (err, files) => {
    if(err) {
      console.error(err)
      return
    }
    for (const file of files) {
      const srcFile = path.join(dirDest, file);
      const destFile = path.join(copyDirDest, file);
      fs.copyFile(srcFile, destFile, (err) => {
        if(err) {
          console.error(err)
        }
      });
    }
  })
  
}

await copy();