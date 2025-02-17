import { readFileSync } from 'fs';
import { resolve } from 'path';
import { cwd } from 'process';
import genDiff from './gen_diff.js';
import getParse from './parsers.js';
import getFormat from './formatters/index.js';

const getFileContent = (path) => readFileSync(resolve(cwd(), path), 'utf-8');

const getExtension = (path) => path.split('.').pop();

export default (filepath1, filepath2, format = 'stylish') => {
  const fileContent1 = getFileContent(filepath1);
  const fileContent2 = getFileContent(filepath2);

  const firstObject = getParse(fileContent1, getExtension(filepath1));
  const secondObject = getParse(fileContent2, getExtension(filepath2));

  return getFormat(genDiff(firstObject, secondObject), format);
};
