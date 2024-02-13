This library provides a few UI components to help you to create a documentation website. (based on Angular 13)

# Installation
1. Install angular-documentation-ui@latest
```
//For npm 7+, you need to add --legacy-peer-deps

npm i angular-documentation-ui@latest
```

2. Install the @fortawesome/angular-fontawesome, ngx-highlightjs
```
//For npm 7+, you need to add --legacy-peer-deps

npm install @fortawesome/angular-fontawesome@0.9.0 @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons ngx-highlightjs@^6.1.3
```

### Compatibility table

|  angular-documentation-ui   | Angular  | @fortawesome/angular-fontawesome  | ngx-highlightjs |
|  ----  | ----  | ----  | ---- |
| 0.0.28  | 12.x | 0.9.x | ^6.1.3 |
| 0.0.28  | 13.x | 0.9.x | ^6.1.3 |
| 0.0.28  | 14.x | 0.10.x | ^7.0.1 |

# Usage
To get up and running using Angular documentation UI with Angular follow the below steps:

1. Import this module
```
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
```
@import "../node_modules/angular-documentation-ui/styles/theme/index";
@import "../node_modules/angular-documentation-ui/styles/pages/index";
@import "../node_modules/angular-documentation-ui/styles/code/index";

body {
  background: var(--background-default);
}
```

# Demo site
* [Note of Angular 13](https://profound-kangaroo-9db0c6.netlify.app/#/home)

# UI components
* app-doc-reviewer-container
* app-section-container
* app-theme and theme service
* app-navigation-button-container
* app-footer-container
* app-mobile-nav-container
* app-code-container
* app-side-bar-container
* lib-doc-nav-container

## 1. app-doc-reviewer-container
This component allows us to create the timeline to indicate the current section with the highlighted color.

* The following screnshot shows the demo of this component.
  * ![demo](https://raw.githubusercontent.com/JenHsuan/angular-13-feature/main/src/assets/image/doc-reviewer-demo.png)

### Usage

1. Retrieve section elements and define section titles in your component
```
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
```
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

### Usage
1. Update in your component
```
import { getIdFromTitle } from 'angular-documentation-ui';

export class MyComponent {
  getIdFromTitle = getIdFromTitle;
}

``` 

2. Update your template
```
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


### Usage

1. Inject the Thene service to the App component
```
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

```
<div class="theme-container">
  <app-theme></app-theme>
</div>
```

## 4. app-navigation-button-container
This component allows us to navigate to the next page or the last page of the self-defined orders.
* The following screnshot shows the demo of this component.
  * ![demo](https://raw.githubusercontent.com/JenHsuan/angular-13-feature/main/src/assets/image/button_demo.png)

### Usage

1. Define routeMap and sideBarList in your component
```
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

```
<app-navigation-button-container 
  [routeMap]="routeMap"
  [sideBarList]="sideBarList">
</app-navigation-button-container>
```

## 5. app-footer-container

* The following screnshot shows the demo of this component.
  * ![demo](https://raw.githubusercontent.com/JenHsuan/angular-13-feature/main/src/assets/image/footer_demo.png)

### Usage

1. Define routeMap and sideBarList in your component
```
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

2. Add the footer to the template

```
<app-footer-container 
  [routeMap]="routeMap"
  [sideBarList]="sideBarList">
  Curated by Jen-hsuan Hsieh (Sean) © 2024 - 2034
</app-footer-container>
```

## 6. app-mobile-nav-container

* The following screnshot shows the demo of this component.
  * ![demo](https://raw.githubusercontent.com/JenHsuan/angular-13-feature/main/src/assets/image/mobile_demo.png)

### Usage

1. Define routeMap typeTitleMap, and sideBarList in your component
```
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

```
<app-mobile-nav-container
  [routeMap]="routeMap"
  [sideBarList]="sideBarList"
  [typeTitleMap]="typeTitleMap">
</app-mobile-nav-container>
```

## 7. app-code-container
* The following screnshot shows the demo of this component.
  * ![demo](https://raw.githubusercontent.com/JenHsuan/angular-13-feature/main/src/assets/image/code-demo.png)

### Usage
1. Define the codeMap in your component
```
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

```
<app-code-container key="instruction" [codeMap]="codeMap">
</app-code-container>
```

### 8.app-side-bar-container
* The following screnshot shows the demo of this component.
  * ![demo](https://raw.githubusercontent.com/JenHsuan/angular-13-feature/main/src/assets/image/sidebar_demo.png)

### Usage

1. Define routeMap, TypeTitleMapand sideBarList in your component
```
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

```
<app-side-bar-container
  [routeMap]="routeMap"
  [sideBarList]="sideBarList"
  [typeTitleMap]="typeTitleMap"
  selectedRoute="DOCUMENTS">
  {{ customized content}}
</app-side-bar-container>
```

### 9. lib-doc-nav-container
* It's the componnt combined app-side-bar-container and the app-mobile-nav-container


### Usage

1. Define routeMap, TypeTitleMapand sideBarList in your component
```
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

```
<lib-doc-nav-container
  [routeMap]="routeMap"
  [sideBarList]="sideBarList"
  [typeTitleMap]="typeTitleMap"
  selectedRoute="DOCUMENTS">
  {{ customized content}}
</lib-doc-nav-container>
```