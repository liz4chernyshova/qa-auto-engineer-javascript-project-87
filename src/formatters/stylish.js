const getIndent = (depth, intend = 4) => ' '.repeat(intend * depth - (depth === 1 ? 2 : intend));

const stringify = (value, depth = 1) => {
  if (value === null || typeof value !== 'object') return `${value}`;

  const entries = Object.entries(value);
  const lines = entries.map(([key, val]) => `${getIndent(depth)} ${key}: ${stringify(val, depth + 1)}`);
  return ['{', ...lines, `${getIndent(depth)}}`].join('\n');
};

const getStylishFormat = (diffTree) => {
  const iter = (node, depth = 1) => node
    .flatMap(({
      status, key, value, value1, value2, children,
    }) => {
      const indent = getIndent(depth);
      if (status === 'nested') return `${indent} ${key}: ${iter(children, depth + 1)}`;
      if (status === 'deleted') return `${indent}- ${key}: ${stringify(value, depth + 1)}`;
      if (status === 'added') return `${indent}+ ${key}: ${stringify(value, depth + 1)}`;
      if (status === 'changed') {
        return [
          `${indent}- ${key}: ${stringify(value1, depth + 1)}`,
          `${indent}+ ${key}: ${stringify(value2, depth + 1)}`,
        ];
      }
      return `${indent}  ${key}: ${stringify(value, depth + 1)}`;
    })
    .join('\n');

  return ['{', iter(diffTree), '}'].join('\n');
};

export default getStylishFormat;
