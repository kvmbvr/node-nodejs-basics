import fs from 'fs/promises'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const wrongFilePath = path.join(__dirname, 'files/wrongFilename.txt');
const properFilePath = path.join(__dirname, 'files/properFilename.md');

const rename = async () => {
  try {
    await fs.access(wrongFilePath)
    try {
      await fs.access(properFilePath)
      throw Error('FS operation failed properfile')
    } catch(err) {
      if(err){
        if(err.code === 'ENOENT') {
          await fs.rename(wrongFilePath, properFilePath);
        } 
      }
    }
  } catch(err) {
    if(err) {
      throw new Error('FS operation failed wrongfile')
    }
  }
};

await rename();