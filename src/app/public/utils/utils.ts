import { Code } from "../code-container/service/code.domain";

// export const getIdFromTitle = (title: string) => {
//   return title.replace(/\s/g, '').toLowerCase();
// }

export const getCodeFromMap = (key: string, codeMap: Map<string, Code>): Code => {
  return codeMap.get(key) ? codeMap.get(key)! : {code: "", languages: []};
}