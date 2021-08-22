import multer from 'multer';
import * as fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesPath = path.join(dirname, '../..//uploads/images');

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    fs.ensureDirSync(imagesPath);
    cb(null, imagesPath);
  },
  filename: function (_req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (_req, file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
  
    const extname =  filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
  
    if (mimetype && extname){
      return cb(null, true);
    } else {
      cb(new Error('Provided file should be an image!'));
    }
  },
});

const multerMw = upload.single('photo');

export default multerMw;