export interface Theme {
  name: string;
  properties: {[key: string]: string};
}

export const light: Theme = {
  name: "light",
  properties: {
    "--foreground-default": "#08090a",
    "--foreground-secondary": "oklch(97.12% .002 325.59)",
    "--foreground-active": "oklch(51.74% .25453048882711515 315.26261625862725)",
    "--foreground-quaternary": "#2b2828",
    "--foreground-light": "#7c7676",

    "--background-default": "#fbfafb",
    "--background-light": "#fff",

    "--primary-default": "#8c8a8a",

    "--logo": "../assets/image/angular-logo.png"
  }
};

export const dark: Theme = {
  name: "dark",
  properties: {
    "--foreground-default": "#fff",
    "--foreground-secondary": "oklch(97.12% .002 325.59)",
    "--foreground-active": "oklch(51.74% .25453048882711515 315.26261625862725)",
    "--foreground-quaternary": "#2b2828",
    "--foreground-light": "#fff",

    "--background-default": "#000000",
    "--background-light": "#0a0a0a",

    "--primary-default": "#cecece",
    
    "--logo": "../assets/image/angular-logo-dark.png"
  }
};

export enum ThemeType {
  light = 'light',
  dark = 'dark'
} 