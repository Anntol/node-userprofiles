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

const upload = multer({ storage: storage });

const multerMw = upload.single('photo');

export default multerMw;