This library provides a few UI components to help you to create a documentation website.

![demo](https://raw.githubusercontent.com/JenHsuan/angular-13-feature/main/demo/screenshot.png)

# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Demo site](#demo-site)
* [UI components](#ui-components)
  * [app-doc-reviewer-container](#1-app-doc-reviewer-container)
  * [app-section-container](#2-app-section-container)
  * [app-theme and theme service](#3-app-theme-and-theme-service)
  * [app-navigation-button-container](#4-app-navigation-button-container)
  * [app-footer-container](#5-app-footer-container)
  * [app-mobile-nav-container](#6-app-mobile-nav-container)
  * [app-code-container](#7-app-code-container)
  * [app-side-bar-container](#8-app-side-bar-container)
  * [lib-doc-nav-container](#9-lib-doc-nav-container)
  * [app-loading-indicator](#10-app-loading-indicator)

# Installation
1. Install angular-documentation-ui@latest
```bash
# For npm 7+, you need to add --legacy-peer-deps

npm i angular-documentation-ui@latest
```

2. Install the @fortawesome/angular-fontawesome, ngx-highlightjs according to the compatibility table
```bash
# For npm 7+, you need to add --legacy-peer-deps

npm install @fortawesome/angular-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons ngx-highlightjs
```

### Compatibility table
* This library supports Angular 12.x, 13.x, 14.x, 15.x

|  Angular  | angular-documentation-ui   |  ngx-highlightjs | @fortawesome/angular-fontawesome  |@fortawesome/fontawesome-svg-core | @fortawesome/free-solid-svg-icons |
|  ----  | ----  | ----  | ---- | ---- | ---- |
| 12.x | 0.9.x  | ^6.1.3 | ^0.9.0  | ^1.2.35 | ^5.15.3 |
| 13.x | 0.9.x  | ^6.1.3 | ^0.9.0  | ^1.2.35 | ^5.15.3 |
| 14.x | 0.9.x  | ^7.0.1 | ^0.10.0 | ^1.2.36 | ^5.15.4 |
| 15.x | 0.9.x  | ^7.0.1 | ^0.10.0 | ^1.2.36 | ^5.15.4 |

# Usage
To get up and running using Angular documentation UI with Angular follow the below steps:

### For module-based applications
1. Import this module to add.module.ts
```typescript
import { DocumentationUiModule } from 'angular-documentation-ui';

@NgModule({
  declarations: [
    AppComponent,
    ...
  ],
  imports: [
    ...,
    DocumentationUiModule
  ],
  providers: [
    ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

2. Import the scss file to src/styles.scss
```scss
@import "../node_modules/angular-documentation-ui/styles/theme/index";
@import "../node_modules/angular-documentation-ui/styles/pages/index";
@import "../node_modules/angular-documentation-ui/styles/code/index";

body {
  background: var(--background-default);
}
```

### For component-based applications
1. Import this module to main.ts
```typescript
import { DocumentationUiModule } from 'angular-documentation-ui';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(DocumentationUiModule)
    ],
});

```

2. Import the scss file to src/styles.scss
```scss
@import "../node_modules/angular-documentation-ui/styles/theme/index";
@import "../node_modules/angular-documentation-ui/styles/pages/index";
@import "../node_modules/angular-documentation-ui/styles/code/index";

body {
  background: var(--background-default);
}
```

# Demo site
* [Note of Angular 12](https://eloquent-macaron-9ce67b.netlify.app/#/home)
* [Note of Angular 13](https://profound-kangaroo-9db0c6.netlify.app/#/home)
* [Note of Angular 14](https://glistening-cupcake-ead467.netlify.app/#/home)
* [Note of Angular 15](https://verdant-fenglisu-1b7a2d.netlify.app/#/home)

# UI components

## 1. app-doc-reviewer-container
This component allows us to create the timeline to indicate the current section with the highlighted color.

* The following screnshot shows the demo of this component.
  * ![demo](https://raw.githubusercontent.com/JenHsuan/angular-13-feature/main/src/assets/image/doc-reviewer-demo.png)

### Parameters

|  Name  | Type   |  Description |
|  ----  | ----  | ----  | 
| [titles] | string[]  | Item names on the list | 
| [sections] | QueryList<ElementRef> | Instances of sections | 
| [getIdFromTitle] | function  | TThe function to create ID for title |

### Usage

1. Retrieve section elements and define section titles in your component
```typescript
import { getIdFromTitle } from 'angular-documentation-ui';

export class MyComponent {
  getIdFromTitle = getIdFromTitle;
  
  sectionTitles = [
    "1",
    "2"
  ];
  
  @ViewChildren("section", {read: ElementRef}) sections: QueryList<ElementRef> | undefined;
}

``` 

2. Update your template
```html
<app-doc-reviewer-container
  [sections]="sections"
  [titles]="sectionTitles"
  [getIdFromTitle]="getIdFromTitle">
</app-doc-reviewer-container>

<div #section>
  <div class="title" [id]="getIdFromTitle(sectionTitles[0])" title>{{ sectionTitles[0] }}
  </div>  
</div>

<div #section>
  <div class="title" [id]="getIdFromTitle(sectionTitles[1])" title>{{ sectionTitles[1] }}
  </div>
</div>
```

## 2. app-section-container
This component allows us to fold and unfold the content.

* The following screnshot shows the demo of this component.
  * ![demo](https://raw.githubusercontent.com/JenHsuan/angular-13-feature/main/src/assets/image/section_demo.png)

### Parameters
None.

### Usage
1. Update in your component
```typescript
import { getIdFromTitle } from 'angular-documentation-ui';

export class MyComponent {
  getIdFromTitle = getIdFromTitle;
}

``` 

2. Update your template
```html
<app-section-container>
  <div class="title" [id]="getIdFromTitle(sectionTitles[0])" title>{{ sectionTitles[0] }}</div>
  <div class="description-container">
    <div class="item">
      content
    </div>
  </div>
</app-section-container>

``` 

## 3. app-theme and theme service
This component allows us to switch the theme for the UI component from this library.

* The following screnshot shows the demo of this component.
  * light
    * ![demo](https://raw.githubusercontent.com/JenHsuan/angular-13-feature/main/src/assets/image/theme_light.png)
  * dark
    * ![demo](https://raw.githubusercontent.com/JenHsuan/angular-13-feature/main/src/assets/image/theme_dark.png)

### Parameters
None.

### Usage

1. Inject the Thene service to the App component
```typescript
import { ThemeService } from 'angular-documentation-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private themeService: ThemeService) {
    let themeType = this.themeService.getCurrentThemeType();
    this.themeService.setThemeByThemeType(themeType);
  }
}

``` 

2. Add the theme switcher to the template

```html
<div class="theme-container">
  <app-theme></app-theme>
</div>
```

## 4. app-navigation-button-container
This component allows us to navigate to the next page or the last page of the self-defined orders.
* The following screnshot shows the demo of this component.
  * ![demo](https://raw.githubusercontent.com/JenHsuan/angular-13-feature/main/src/assets/image/button_demo.png)

### Parameters

|  Name  | Type   |  Description |
|  ----  | ----  | ----  | 
| [routeMap] | map<string, string>  | The map to store pairs of URLs and string | 
| [sideBarList] | string[] | Unique string for each route |

### Usage

1. Define routeMap and sideBarList in your component
```typescript
export const sideBarList = [
  RouteType.DOCUMENTS,
  RouteType.MIGRATIONS,
  RouteType.BREAKING_CHANGE,
];

export const RouteMap = new Map<string, RouteType>([
  ['/documents', RouteType.DOCUMENTS],
  ['/migrations', RouteType.MIGRATIONS],
  ['/breaking-changes', RouteType.BREAKING_CHANGE],
]);

export const sideBarList = [
  RouteType.DOCUMENTS,
  RouteType.MIGRATIONS,
  RouteType.BREAKING_CHANGE,
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sideBarList = sideBarList;
  routeMap = RouteMap;
}

``` 

2. Add the theme switcher to the template

```html
<app-navigation-button-container 
  [routeMap]="routeMap"
  [sideBarList]="sideBarList">
</app-navigation-button-container>
```

## 5. app-footer-container

* The following screnshot shows the demo of this component.
  * ![demo](https://raw.githubusercontent.com/JenHsuan/angular-13-feature/main/src/assets/image/footer_demo.png)

### Parameters

|  Name  | Type   |  Description |
|  ----  | ----  | ----  | 
| [routeMap] | map<string, string>  | The map to store pairs of URLs and string | 
| [sideBarList] | string[] | Unique string for each route
| [showNavigationButton] | boolean  | Show the navigation buttons or not | 
| [externalLinkMap] | map<string, string>  | The map to store pairs of titles and URLs |

### Usage

1. Define routeMap and sideBarList in your component
```typescript
export const sideBarList = [
  RouteType.DOCUMENTS,
  RouteType.MIGRATIONS,
  RouteType.BREAKING_CHANGE,
];

export const RouteMap = new Map<string, RouteType>([
  ['/documents', RouteType.DOCUMENTS],
  ['/migrations', RouteType.MIGRATIONS],
  ['/breaking-changes', RouteType.BREAKING_CHANGE],
]);

export const sideBarList = [
  RouteType.DOCUMENTS,
  RouteType.MIGRATIONS,
  RouteType.BREAKING_CHANGE,
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sideBarList = sideBarList;
  routeMap = RouteMap;

  linkMap = new Map<string, string>([
    ["angular-doc-ui", "https://www.npmjs.com/package/angular-documentation-ui?activeTab=readme"]
  ]);
}

``` 

2. Add the footer to the template

```html
<app-footer-container 
  [routeMap]="routeMap"
  [sideBarList]="sideBarList"
  [showNavigationButton]="false"
  [externalLinkMap]="linkMap">
</app-footer-container>
```

## 6. app-mobile-nav-container

* The following screnshot shows the demo of this component.
  * ![demo](https://raw.githubusercontent.com/JenHsuan/angular-13-feature/main/src/assets/image/mobile_demo.png)

### Parameters

|  Name  | Type   |  Description |
|  ----  | ----  | ----  | 
| [routeMap] | map<string, string>  | The map to store pairs of URLs and string | 
| [sideBarList] | string[] | Unique string for each route
| [typeTitleMap] | map<string, string>  | The map to store pairs of types and titles |

### Usage

1. Define routeMap typeTitleMap, and sideBarList in your component
```typescript
export enum RouteType {
  BREAKING_CHANGE = 'BREAKING_CHANGE',
  DOCUMENTS = 'DOCUMENTS',
  MIGRATIONS = 'MIGRATIONS',
}

export const RouteMap = new Map<string, RouteType>([
  ['/documents', RouteType.DOCUMENTS],
  ['/migrations', RouteType.MIGRATIONS],
  ['/breaking-changes', RouteType.BREAKING_CHANGE],
]);

export const TypeTitleMap = new Map<RouteType, string>([
  [RouteType.DOCUMENTS, 'About This Website'],
  [RouteType.MIGRATIONS, 'Upgrade to Angular 13'],
  [RouteType.BREAKING_CHANGE, 'Breaking Changes'],
  ]);

export const sideBarList = [
  RouteType.DOCUMENTS,
  RouteType.MIGRATIONS,
  RouteType.BREAKING_CHANGE,
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sideBarList = sideBarList;
  routeMap = RouteMap;
}

``` 

2. Add the nav-container to the template

```html
<app-mobile-nav-container
  [routeMap]="routeMap"
  [sideBarList]="sideBarList"
  [typeTitleMap]="typeTitleMap">
</app-mobile-nav-container>
```

## 7. app-code-container
* The following screnshot shows the demo of this component.
  * ![demo](https://raw.githubusercontent.com/JenHsuan/angular-13-feature/main/src/assets/image/code-demo.png)


### Parameters

|  Name  | Type   |  Description |
|  ----  | ----  | ----  | 
| [key] | string  | The key of the code snippet | 
| [codeMap] | map<string, Code>  | The map to store pairs of keys and code snippets |

### Usage
1. Define the codeMap in your component
```typescript
import { getIdFromTitle } from 'angular-documentation-ui';
import { Code, CodeLanguageType } from "angular-documentation-ui";

export class MyComponent {
  codeMap = new Map<string, Code>([
    ["instruction", {
      code: `
npx @angular/cli@13 new Angular13Project
      `,
      languages:[CodeLanguageType.html]
    }]
  ])
}

``` 

2. Add the app-code-container to the template

```html
<app-code-container key="instruction" [codeMap]="codeMap">
</app-code-container>
```

## 8.app-side-bar-container
* The following screnshot shows the demo of this component.
  * ![demo](https://raw.githubusercontent.com/JenHsuan/angular-13-feature/main/src/assets/image/sidebar_demo.png)

### Parameters

|  Name  | Type   |  Description |
|  ----  | ----  | ----  | 
| [routeMap] | map<string, string>  | The map to store pairs of URLs and string | 
| [sideBarList] | string[] | Unique string for each route
| [typeTitleMap] | map<string, string>  | The map to store pairs of types and titles |
| [selectedRoute] | string  | The default selected route |
| [showThemeButton] | boolean  | Show the theme buttons or not | 


### Usage

1. Define routeMap, TypeTitleMapand sideBarList in your component
```typescript
export enum RouteType {
  BREAKING_CHANGE = 'BREAKING_CHANGE',
  DOCUMENTS = 'DOCUMENTS',
  MIGRATIONS = 'MIGRATIONS',
}

export const RouteMap = new Map<string, RouteType>([
  ['/documents', RouteType.DOCUMENTS],
  ['/migrations', RouteType.MIGRATIONS],
  ['/breaking-changes', RouteType.BREAKING_CHANGE],
]);

export const sideBarList = [
  RouteType.DOCUMENTS,
  RouteType.MIGRATIONS,
  RouteType.BREAKING_CHANGE,
];

export const TypeTitleMap = new Map<RouteType, string>([
  [RouteType.DOCUMENTS, 'About This Website'],
  [RouteType.MIGRATIONS, 'Upgrade to Angular 13'],
  [RouteType.BREAKING_CHANGE, 'Breaking Changes'],
  ]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sideBarList = sideBarList;
  routeMap = RouteMap;
  typeTitleMap = TypeTitleMap;
}

``` 

2. Add the app-side-bar-container to the template

```html
<app-side-bar-container
  [routeMap]="routeMap"
  [sideBarList]="sideBarList"
  [typeTitleMap]="typeTitleMap"
  selectedRoute="DOCUMENTS">
  {{ customized content}}
</app-side-bar-container>
```

## 9. lib-doc-nav-container
* It's the componnt combined app-side-bar-container and the app-mobile-nav-container

### Parameters

|  Name  | Type   |  Description |
|  ----  | ----  | ----  | 
| [routeMap] | map<string, string>  | The map to store pairs of URLs and string | 
| [sideBarList] | string[] | Unique string for each route
| [typeTitleMap] | map<string, string>  | The map to store pairs of types and titles |
| [selectedRoute] | string  | The default selected route |
| [showThemeButtonForSideBar] | boolean  | Show the theme buttons or not | 

### Usage

1. Define routeMap, TypeTitleMapand sideBarList in your component
```typescript
export enum RouteType {
  BREAKING_CHANGE = 'BREAKING_CHANGE',
  DOCUMENTS = 'DOCUMENTS',
  MIGRATIONS = 'MIGRATIONS',
}

export const RouteMap = new Map<string, RouteType>([
  ['/documents', RouteType.DOCUMENTS],
  ['/migrations', RouteType.MIGRATIONS],
  ['/breaking-changes', RouteType.BREAKING_CHANGE],
]);

export const sideBarList = [
  RouteType.DOCUMENTS,
  RouteType.MIGRATIONS,
  RouteType.BREAKING_CHANGE,
];

export const TypeTitleMap = new Map<RouteType, string>([
  [RouteType.DOCUMENTS, 'About This Website'],
  [RouteType.MIGRATIONS, 'Upgrade to Angular 13'],
  [RouteType.BREAKING_CHANGE, 'Breaking Changes'],
  ]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sideBarList = sideBarList;
  routeMap = RouteMap;
  typeTitleMap = TypeTitleMap;
}

``` 

2. Add the app-side-bar-container to the template

```html
<lib-doc-nav-container
  [routeMap]="routeMap"
  [sideBarList]="sideBarList"
  [typeTitleMap]="typeTitleMap"
  selectedRoute="DOCUMENTS">
  {{ customized content}}
</lib-doc-nav-container>
```

## 10. app-loading-indicator
* The following screnshot shows the demo of this component.
  * ![demo](https://raw.githubusercontent.com/JenHsuan/angular-13-feature/main/src/assets/image/spinner.png)

### Parameters

|  Name  | Type   |  Description |
|  ----  | ----  | ----  | 
| [detectNavigation] | boolean  | Detect the changes of navigation or not | 

### Usage
* Update the template

```html

<router-outlet></router-outlet>
<app-loading-indicator [detectNavigation]="true"></app-loading-indicator>

```