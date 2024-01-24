export const getIdFromTitle = (title: string) => {
  return title.replace(/\s/g, '').toLowerCase();
}

export const getHash = (title: string) => {
  return `#${getIdFromTitle(title)}`;
}