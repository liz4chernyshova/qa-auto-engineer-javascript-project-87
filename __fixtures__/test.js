const fs = require('fs');
const path = require('path');

function compareJsonFiles(file1, file2) {
  const json1 = JSON.parse(fs.readFileSync(path.join(__dirname, '..', file1), 'utf-8'));
  const json2 = JSON.parse(fs.readFileSync(path.join(__dirname, '..', file2), 'utf-8'));
  return JSON.stringify(json1) === JSON.stringify(json2);
}

test('should compare flat JSON files correctly', () => {
  const file1 = 'file1.json';
  const file2 = 'file1.json';
  expect(compareJsonFiles(file1, file2)).toBe(true);
});
