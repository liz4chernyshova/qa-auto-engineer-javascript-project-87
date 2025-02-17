import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import genDiff from '../src/index.js';

const filename = fileURLToPath(import.meta.url);
const dirName = dirname(filename);
const readFile = (nameOfFile) => readFileSync(resolve(dirName, '..', '__fixtures__', nameOfFile), 'utf-8');

const cases = [
  ['__fixtures__/file1.json', '__fixtures__/file2.json', readFile('stylish.txt')],
  ['__fixtures__/file1.yml', '__fixtures__/file2.yml', readFile('stylish.txt')],
  ['__fixtures__/file1.json', '__fixtures__/file2.json', readFile('stylish.txt'), 'stylish'],
  ['__fixtures__/file1.yml', '__fixtures__/file2.yml', readFile('stylish.txt'), 'stylish'],
  ['__fixtures__/file1.json', '__fixtures__/file2.json', readFile('plain.txt'), 'plain'],
  ['__fixtures__/file1.yml', '__fixtures__/file2.yml', readFile('plain.txt'), 'plain'],
  ['__fixtures__/file1.json', '__fixtures__/file2.json', readFile('json.txt'), 'json'],
  ['__fixtures__/file1.yml', '__fixtures__/file2.yml', readFile('json.txt'), 'json'],
];

test.each(cases)('compares two files', (a, b, result, format = 'stylish') => {
  expect(genDiff(a, b, format).trim()).toBe(result.trim());
});
