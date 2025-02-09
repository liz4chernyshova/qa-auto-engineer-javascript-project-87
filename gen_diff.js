import _ from 'lodash';
import parseFile from './parsers.js';

const genDiff = (filepath1, filepath2) => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);

  const keys = _.union(Object.keys(data1), Object.keys(data2));
  const sortedKeys = _.sortBy(keys);

  const diff = sortedKeys.map((key) => {
    if (!Object.prototype.hasOwnProperty.call(data1, key)) {
      return `  + ${key}: ${data2[key]}`;
    }

    if (!Object.prototype.hasOwnProperty.call(data2, key)) {
      return `  - ${key}: ${data1[key]}`;
    }

    if (data1[key] !== data2[key]) {
      return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
    }

    return `    ${key}: ${data1[key]}`;
  }).join('\n');

  return `{\n${diff}\n}`;
};

export default genDiff;
