import path from 'path';
import genDiff from '../gendiff.js';

const getFixturePath = (filename) => path.resolve(__dirname, '../__fixtures__', filename);

test.each([
  ['file1.json', 'file2.json'],
  ['file1.yml', 'file2.yml'],
])('should return correct diff for files', (file1, file2) => {
  const filepath1 = getFixturePath(file1);
  const filepath2 = getFixturePath(file2);

  const expected = `{
    - follow: false
      host: hexlet.io
    - proxy: 123.234.53.22
    - timeout: 50
    + timeout: 20
    + verbose: true
  }`;

  const result = genDiff(filepath1, filepath2);
  expect(result).toBe(expected);
});
