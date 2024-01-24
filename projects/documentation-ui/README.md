This library provides a few UI components to help you to create a ddocumentation website. (based on Angular 13)

## 1. app-doc-reviewer-container
This component allows us to create the timeline to indicate the current section with the highlighted color.

* The following screnshot shows the demo of this component.
  * ![demo](https://raw.githubusercontent.com/JenHsuan/angular-13-feature/main/src/assets/image/doc-reviewer-demo.png)

### Usage
1. Install this package
```
npm i angular-documentation-ui
```

2. Import this module
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

3. Import the scss file to src/styles.scss
```
@import "../node_modules/angular-documentation-ui/styles/theme/index"

//or

@use "../node_modules/angular-documentation-ui/styles/theme/index"
```

4. Retrieve section elements and define section titles in your component
```
import { getIdFromTitle } from 'angular-documentation-ui';

export class MyComponent {
  getIdFromTitle = getIdFromTitle;
  
  sectionTitles = [
    "Introduction",
    "Differences between View Engine and Ivy",
    ...
  ];
  
  @ViewChildren("section", {read: ElementRef}) sections: QueryList<ElementRef> | undefined;
}

``` 

5. Update your template
```
<app-doc-reviewer-container
  [sections]="sections"
  [titles]="sectionTitles"
  [getIdFromTitle]="getIdFromTitle">
</app-doc-reviewer-container>

<div #section>
</div>

<div #section>
</div>
```