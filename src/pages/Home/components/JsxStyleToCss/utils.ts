const styleStr2obj = (str) => {
  const arr = str
    .replaceAll(' ', '')
    .split('\n')
    .filter((x) => x.includes(':'))
    .map((x) => {
      const entry = x
        .replace(/,$/, '')
        .replaceAll(`"`, '')
        .replaceAll(`'`, '')
        .split(':');
      const valueNum = Number(entry[1]);
      return Number.isNaN(valueNum) ? entry : [entry[0], valueNum];
    });
  return Object.fromEntries(arr);
};

export function o2s(o) {
  const obj = styleStr2obj(o);
  const elm = new Option();
  Object.keys(obj).forEach((a: string) => {
    elm.style[a] = obj[a];
  });
  return elm.getAttribute('style')?.replaceAll(';', ';\n');
}

// test/usage:
// o2s({
//   fontSize: '4em',
//   zIndex: 2,
//   marginLeft: '-.5em',
// });
