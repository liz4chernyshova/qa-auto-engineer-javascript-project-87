const getDiff = (data1, data2) => {
  const keys = [...new Set([...Object.keys(data1), ...Object.keys(data2)])];
  const sortedKeys = [...keys].sort();

  return sortedKeys.map((key) => {
    if (data1[key] && data2[key] && typeof data1[key] === 'object' && typeof data2[key] === 'object') {
      return { status: 'nested', key, children: getDiff(data1[key], data2[key]) };
    }
    if (!(key in data1)) {
      return { status: 'added', key, value: data2[key] };
    }
    if (!(key in data2)) {
      return { status: 'deleted', key, value: data1[key] };
    }
    if (data1[key] === data2[key]) {
      return { status: 'unchanged', key, value: data1[key] };
    }
    return {
      status: 'changed', key, value1: data1[key], value2: data2[key],
    };
  });
};

export default getDiff;
