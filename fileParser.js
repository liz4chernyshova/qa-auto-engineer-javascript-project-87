import fs from 'fs';
import path from 'path';

function parseFile(filePath) {
  const resolvedPath = path.resolve(process.cwd(), filePath);

  const fileContent = fs.readFileSync(resolvedPath, 'utf-8');

  try {
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Ошибка при парсинге файла ${filePath}: ${error.message}`);
    return null;
  }
}

export default parseFile;
