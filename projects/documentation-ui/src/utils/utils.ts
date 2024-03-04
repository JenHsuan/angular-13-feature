import { KeyValue } from "@angular/common";

export const getIdFromTitle = (title: string) => {
  return title.replace(/\s/g, '').toLowerCase();
}

export const getHash = (title: string) => {
  return `#${getIdFromTitle(title)}`;
}

export const originalOrder = (a: KeyValue<string, string>, b: KeyValue<string, string>): number => {
  return 0;
}