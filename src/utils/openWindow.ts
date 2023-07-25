export const openWindow = (
  pathname: string,
  query?: Record<string, string | number>,
) => {
  if (!location) {
    return;
  }
  const { origin, pathname: oldPathname, search } = location;
  const sp = new URLSearchParams(search);
  Object.entries(query || {}).forEach(([key, value]) => {
    sp.set(key, value.toString());
  });
  window.open(`${origin}${pathname || oldPathname}?${sp.toString()}`);
};
