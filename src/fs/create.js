import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const create = async () => {
  fs.open(path.join(__dirname, 'files/fresh.txt'), 'ax+', (err) => {
    if(err) {
      if(err.code === 'EEXIST') {
        throw new Error('FS operation failed');
      }
    }
  })

  fs.writeFile(path.join(__dirname, 'files/fresh.txt'), 'I am fresh and young', 'utf8', (err) => {
    if(err) {
      console.err(err.message)
    }
  })
};

await create();