import path from 'path';
import multer from 'multer';

const storage = multer.memoryStorage();
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