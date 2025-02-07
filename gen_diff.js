import _ from 'lodash';
import parseFile from './fileParser.js';

const genDiff = (filepath1, filepath2) => {
  const file1Data = parseFile(filepath1);
  const file2Data = parseFile(filepath2);

  const allKeys = _.sortBy([...new Set([...Object.keys(file1Data), ...Object.keys(file2Data)])]);

  const diff = allKeys.map((key) => {
    if (!(key in file1Data)) {
      return `  + ${key}: ${file2Data[key]}`;
    }
    if (!(key in file2Data)) {
      return `  - ${key}: ${file1Data[key]}`;
    }
    if (file1Data[key] !== file2Data[key]) {
      return `  - ${key}: ${file1Data[key]}\n  + ${key}: ${file2Data[key]}`;
    }
    return `    ${key}: ${file1Data[key]}`;
  });

  return diff.join('\n');
};

export default genDiff;
