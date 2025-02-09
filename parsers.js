import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const parseFile = (filepath) => {
  const extname = path.extname(filepath);
  const fileContent = fs.readFileSync(filepath, 'utf8');

  if (extname === '.json') {
    return JSON.parse(fileContent);
  }

  if (extname === '.yml' || extname === '.yaml') {
    return yaml.load(fileContent);
  }

  throw new Error(`Ошибка при парсинге файла: ${extname}`);
};

export default parseFile;
