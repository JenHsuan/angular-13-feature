import { Code } from "../service/code.domain";

export const getCodeFromMap = (key: string, codeMap: Map<string, Code>): Code => {
  return codeMap.get(key) ? codeMap.get(key)! : {code: "", languages: []};
}