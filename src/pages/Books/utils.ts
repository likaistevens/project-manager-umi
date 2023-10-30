export const mdCache = {};

function importAll(r) {
  r.keys().forEach((key) => (mdCache[key] = r(key)));
}

importAll(require.context('./md', true, /\.md$/));

export const resolveMdDir = (map: Record<string, string>) => {
  const resMap: Record<string, { title: string; src: string }[]> = {};
  Object.entries(map).forEach(([key, value]) => {
    const keyArr = key.split('/');
    const parentTitle = keyArr[1];
    const childTitle = keyArr[2].replace('.md', '');
    resMap[parentTitle] = resMap[parentTitle] || [];
    resMap[parentTitle].push({
      title: childTitle,
      src: value,
    });
  });
  return Object.entries(resMap).map(([key, value]) => {
    return {
      title: key,
      children: value,
    };
  });
};
