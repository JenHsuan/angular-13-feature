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


export const updateGoogleAnalyticsId = (googleAnalyticsId: string) => {
  const script1 = document.createElement('script');
  script1.type = 'text/javascript';
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;    
  
  document.getElementsByTagName('head')[0].appendChild(script1);
  
  const script2 = document.createElement('script');
  
  script2.type="text/javascript";
  script2.innerHTML= `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', ${googleAnalyticsId});
  `;
  document.getElementsByTagName('head')[0].appendChild(script2);
}