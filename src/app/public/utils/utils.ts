export const getIdFromTitle = (title: string) => {
  return title.replace(/\s/g, '').toLowerCase();
}