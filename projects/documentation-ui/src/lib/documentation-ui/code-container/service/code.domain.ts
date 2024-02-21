export class Code {
  code: string;
  languages: CodeLanguageType[];
}

export enum CodeLanguageType {
  html = 'html',
  typescript = 'typescript',
  python = 'python',
  bash = 'bash',
  css = 'css'
}