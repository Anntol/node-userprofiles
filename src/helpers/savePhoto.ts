import path from 'path';
import sharp from 'sharp';

import { fileURLToPath } from 'url';
import { ensureDirSync } from 'fs-extra';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDirPath = path.join(dirname, '../../uploads/images');

const fileDimension = 200;

export default async function savePhoto(file: Express.Multer.File): Promise<string> {
  ensureDirSync(imagesDirPath);
  const imagePath = path.resolve(imagesDirPath, `${Date.now()}-${file.originalname}`);
  await sharp(file.buffer)
    .resize(fileDimension, fileDimension)
    .toFile(imagePath);
  return imagePath;
}
