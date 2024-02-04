import { Code, CodeLanguageType } from "angular-documentation-ui";

export const codeMap = new Map<string, Code>([
  ["instruction", {
    code: `
npx @angular/cli@13 new Angular13Project
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["upgardeRx", {
    code: `
//We can upgrade rxjs with the following command

npm install rxjs@7.4
    `,
    languages:[CodeLanguageType.html]
  }], ["distIndex", {
    code: `
<!-- /dist/angular13-project/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Angular 13</title>
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <meta property="og:title" content="New features in Angular 13">
    <meta property="og:url" content="https://profound-kangaroo-9db0c6.netlify.app/">
    <meta property="og:image" content="https://raw.githubusercontent.com/JenHsuan/angular-13-feature/main/demo/screenshot.png">
    <meta property="og:description" content="Learn and test new features in Angular 13">
    <meta name="keywords" content="angular,javascript,feature,dynamic component,testing,cache">
    <meta name="author" content="Jen-Hsuan Hsieh (Sean Hsieh)">
    <style>body{margin:0}</style>
    <link rel="stylesheet" href="styles.3164f3600d2890e4.css" media="print" onload="this.media='all'">
    <noscript><link rel="stylesheet" href="styles.3164f3600d2890e4.css"></noscript>
  </head>
  <body>
    <app-root></app-root>
    <script src="runtime.53d27497dc947bab.js" type="module"></script>
    <script src="polyfills.79ba09efd856cfcd.js" type="module"></script>
    <script src="main.047cf091c9c37ea8.js" type="module"></script>
  </body>
</html>
    `,
    languages:[CodeLanguageType.html]
  }], ["distIndexNg8", {
    code: `
<!-- /dist/angular8-project/index.html -->
<!doctype html>
<html lang="en">
  <head>
      <meta charset="utf-8">
      <title>Angular8Project</title>
      <base href="/">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="icon" type="image/x-icon" href="favicon.ico">
  </head>
  <body>
    <app-root></app-root>
    <script src="runtime-es2015.js" type="module"></script>
    <script src="runtime-es5.js" nomodule defer></script>
    <script src="polyfills-es5.js" nomodule defer></script>
    <script src="polyfills-es2015.js" type="module"></script>
    <script src="styles-es2015.js" type="module"></script>
    <script src="styles-es5.js" nomodule defer></script>
    <script src="vendor-es2015.js" type="module"></script>
    <script src="vendor-es5.js" nomodule defer></script>
    <script src="main-es2015.js" type="module"></script>
    <script src="main-es5.js" nomodule defer></script>
  </body>
</html>    
    `,
    languages:[CodeLanguageType.html]
  }], ["typeguard", {
    code: `
//In previous versions of TypeScript, this would be an error - even though argIsString was assigned the value of a type guard, TypeScript simply lost that information. 
function foo(arg: unknown) {
  const argIsString = typeof arg === "string";
  if (argIsString) {
    console.log(arg.toUpperCase());
    //              ~~~~~~~~~~~
    // Error! Property 'toUpperCase' does not exist on type 'unknown'.
  }
}    
`,
    languages:[CodeLanguageType.typescript]
  }], ["tsUnknown", {
    code: `
//The type of err will be unknown if we enable useUnknownInCatchVariables
try {
  executeSomeThirdPartyCode();
} catch (err) {
  // err: unknown
   
  // Error! Property 'message' does not exist on type 'unknown'.
  console.error(err.message);
   
  // Works! We can narrow 'err' from 'unknown' to 'Error'.
  if (err instanceof Error) {
    console.error(err.message);
  }
}    
`,
    languages:[CodeLanguageType.typescript]
  }], ["tsSymbol", {
    code: `
interface Colors {
  [sym: symbol]: number;
}
   
const red = Symbol("red");
const green = Symbol("green");
const blue = Symbol("blue");
   
let colors: Colors = {};
   
// Assignment of a number is allowed
colors[red] = 255;
let redVal = colors[red];    
`,
    languages:[CodeLanguageType.typescript]
  }], ["tsTemplateString", {
    code: `
interface OptionsWithDataProps extends Options {
  // Permit any property starting with 'data-'.
  [optName: \`data-\${string}\`]: unknown;
}

let b: OptionsWithDataProps = {
  width: 100,
  height: 100,
  // Works!
  "data-blah": true,       

  // Error! 'unknown-property' wasn't declared in 'OptionsWithDataProps'.
  "unknown-property": true,  
}; 
`,
    languages:[CodeLanguageType.typescript]
  }], ["tsStaticBlock", {
    code: `
class Foo {
  static bytes: Uint8Array = [];

  static {
    Foo.bytes.set(pseudoRandomBytes(Foo.bytes.length));
  }

  static fileBody = new FileBody(Foo.bytes);
}

function createRandomBytes(length: number) {
  const bytes = new Uint8Array(length);
  bytes.set(pseudoRandomBytes(bytes.length));
  return bytes;
}    
`,
    languages:[CodeLanguageType.typescript]
  }], ["routeLinkCancel", {
    code: `
<a [routerLink]="linkEnabled ? 'path' : null">Link</a>
      `,
    languages:[CodeLanguageType.html]
  }], ["nullValidator", {
    code: `
<input name="firstName" ngModel [maxlength]="shouldCancelMaxLengthValidator ? null : maxLength">
      `,
    languages:[CodeLanguageType.html]
  }], ["nullValidatorComponent", {
    code: `
export class MinorChangesComponent {
  maxLength = 10;
  shouldCancelMaxLengthValidator: boolean = false;
}
      `,
    languages:[CodeLanguageType.typescript]
  }], ["urlSerializer", {
    code: `
export class DeprecationsContentChildrenComponent {
  constructor(private cd: ChangeDetectorRef){
    let dus = new DefaultUrlSerializer();
    //It will print the following messages 
    //queryParams: q: "hello"
    console.log(dus.parse('/path?q=hello?&q2=2'));
  }
}
   `,
    languages:[CodeLanguageType.typescript]
  }], ["urlSerializerV13", {
    code: `
export class DeprecationsContentChildrenComponent {
  constructor(private cd: ChangeDetectorRef){
    let dus = new DefaultUrlSerializer();
    //It will print the following messages 
    //queryParams: q: "hello?", q2: "2"
    console.log(dus.parse('/path?q=hello?&q2=2'));
  }
} 
   `,
    languages:[CodeLanguageType.typescript]
  }], ["loadChildren", {
    code: `
//Previous
{ path: 'products', loadchildren: 'app/products/products.module#ProductsModule' }

//In v13
{ path: 'products', loadChildren: () => import('./products/products.module').then(m => m.productsModule) }
      `,
    languages:[CodeLanguageType.typescript]
  }], ["installSSRpackages", {
    code: `
npm install express @angular/platform-server@^13 ts-loader@@^4.4.2
      `,
    languages:[CodeLanguageType.html]
  }], ["installUniversal", {
    code: `
ng generate universal
      `,
    languages:[CodeLanguageType.html]
  }], ["ngBuildNoHash", {
    code: `
ng build --prod --output-hashing "none"
      `,
    languages:[CodeLanguageType.html]
  }], ["webpackConfigSSR", {
    code: `
const path = require('path');
const webpack = require('webpack');
 
module.exports = {
    entry: { server: './server.ts' },
    resolve: { extensions: ['.ts', '.js'] },
    target: 'node',
    // this makes sure we include node_modules and other 3rd party libraries
    externals: [/(node_modules|main\..*\.js)/],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
};
      `,
    languages:[CodeLanguageType.typescript]
  }], ["compileServerTs", {
    code: `
webpack --config webpack.server.config.js
      `,
    languages:[CodeLanguageType.html]
  }], ["executeServerTs", {
    code: `
node dist/server.js 
      `,
    languages:[CodeLanguageType.html]
  }], ["renderModule", {
    code: `
// These are important and needed before anything else
//import 'zone.js';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';
import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';

enableProdMode();

// Express server
const app = express();
const PORT = 4201;
const DIST_FOLDER = join(process.cwd(), 'dist', 'Angular13ProjectSSR', 'browser');
const template = readFileSync(join(DIST_FOLDER, 'index.html')).toString();
const { AppServerModule, renderModule } = require('./dist/Angular13ProjectSSR/browser/main');

app.engine('html', (_, options, callback) => {
  renderModule(AppServerModule, {
    document: template,
    url: (options as any).req.url,
    }).then((html: any) => {
    callback(null, html);
  });
});

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

// Server static files from dist folder
app.get('*.*', express.static(DIST_FOLDER));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(\`Node server listening on http://localhost:\${PORT}\`);
});
      `,
    languages:[CodeLanguageType.typescript]
  }], ["angularjsonCache", {
    code: `
//angular.json

{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "cli": {
    "analytics": "a7da08fe-30d4-42ce-a659-5296089127b8",
    "cache": {
      "enabled": true,
      "environment": "all",
      "path": ".angular-cache"
    }
    ...
}    `,
    languages:[CodeLanguageType.typescript]
  }], ["angularcli", {
    code: `
//angular-cli
  
ng config cli.cache.enabled false/true
ng config cli.cache.environment all/ci/local
ng config cli.cache.path ".angular-cache"
      `,
    languages:[CodeLanguageType.html]
  }], ["step1ESM", {
    code: `
export default {
  "/pdf": {
    "target": "http://localhost:3000",
    "secure": false
  }
}
    `,
    languages:[CodeLanguageType.typescript]
  }], ["step2ESM", {
    code: `
"architect": {
  ...,
  "serve": {
    "builder": "@angular-devkit/build-angular:dev-server",
    "options": {
      "proxyConfig": "proxy.conf.mjs"
    }
    `,
    languages:[CodeLanguageType.typescript]
  }], ["step4ESM", {
    code: `
ng serve
    `,
    languages:[CodeLanguageType.typescript]
  }], ["stepsStyle", {
    code: `
//1. Update angular.json (build -> configuration -> production)

"optimization": {
  "fonts": {
    "inline": true
  },
  "styles": {
    "inlineCritical": true
  }
}

//2. Search the favorite font on https://fonts.adobe.com/fonts
      `,
    languages:[CodeLanguageType.typescript]
  }], ["cssVariable", {
    code: `
<!-- styles.scss -->
:root {
  --blue: #1e90ff;
  --white: #ffffff; 
}
  
<!-- component level scss -->
.css-variable-demo-btn {
  background-color: var(--white);
  color: var(--blue);
  border: 1px solid var(--blue);
  padding: 5px;
}

<!-- component level HTML -->
<div>
  <button class="css-variable-demo-btn">Demo</button>
</div>    `,
    languages:[CodeLanguageType.html]
  }], ["legacyCodeDynamic", {
    code: `
import { DynamicComponent } from './dynamic/dynamic.component';

export class StandardComponent {
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  
  constructor(private cfr: ComponentFactoryResolver ) { }
  
  ngAfterViewInit(): void {
    const factory: ComponentFactory<DynamicComponent> = this.cfr.resolveComponentFactory(DynamicComponent);
    const componentRef = this.container.createComponent(factory);
  }
}
      `,
    languages:[CodeLanguageType.typescript]
  }], ["newCodeDynamic", {
    code: `
import { DynamicComponent } from './dynamic/dynamic.component';
  
export class StandardComponent {
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  
  ngAfterViewInit(): void {
    const componentRef = this.container.createComponent(DynamicComponent);
  }
}    `,
    languages:[CodeLanguageType.typescript]
  }], ["testComponentBefore", {
    code: `
beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [ TestingComponent ]
  })
  .compileComponents();
});    `,
    languages:[CodeLanguageType.typescript]
  }], ["testComponent", {
    code: `
beforeAll(() => {
  //beforeAll only run once
  //Tear down the environment with the TestBed.initTestEnvironment 
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting(),
    {
      teardown: { destroyAfterEach: true }
    }
  );
});
`,
    languages:[CodeLanguageType.typescript]
  }], ["testComponent2", {
    code: `
//set up the test module
beforeEach(async () => {
  //beforEach run before every test
  //Tear down the module with the TestBed.configureTestingModule
  await TestBed.configureTestingModule({
    declarations: [ TestingComponent ],
    teardown: { destroyAfterEach: true }
  })
  .compileComponents();
});
`,
    languages:[CodeLanguageType.typescript]
  }], ["cancelRoute", {
    code: `
@NgModule({
  imports: [RouterModule.forRoot(
    routes, 
    { canceledNavigationResolution: 'computed' },
  )],
  exports: [RouterModule]
})    `,
    languages:[CodeLanguageType.typescript]
  }], ["webAnimationComponent", {
    code: `
/*
* Keyframe format 1: an array of objects (keyframes) consisting of properties and values to iterate over
*
* Take 1% time to go from 0% to 10%
* Take 99% time to go from 10% to 100%
* If there is no specific offset, the comsued time will be equally distributed
*/
const createCircleAnimation = () => [
  {
    maxWidth: '100%',
    clipPath: 'circle(0%)'
  },
  {
    clipPath: 'circle(10%)',
    offset: 0.01
  },
  {
    clipPath: 'circle(100%)',
    offset: 0.98
  },
  {
    maxWidth: '100%',
    clipPath: 'circle(0%)',
  }
];

/*
* Keyframe format 2: an object containing key-value pairs consisting of the property to animate and an array of values to iterate over
*
* Take 99% time to rotate 1800deg
*/
const rotatationAnimation = {
  transform: [
    'rotate(1800deg)',
  ],
  offset: [0.99],
  easing: [ 'ease-in', 'ease-out' ],
}

@Component({
  selector: 'app-inline-font-web-animation',
  templateUrl: './inline-font-web-animation.component.html',
  styleUrls: ['./inline-font-web-animation.component.scss']
})
export class InlineFontWebAnimationComponent {
  @ViewChild("revertedLogo", {read: ElementRef}) revertedLogo: ElementRef | undefined; 

  switchImage() {
    //animation is asynchronous
    this.revertedLogo?.nativeElement.animate(createCircleAnimation(), {
      duration: 3000,
      easing: 'ease-in-out',
      delay: 100,
    });
    console.log('the animation is triggered');

    this.revertedLogo?.nativeElement.animate(rotatationAnimation, {
      duration: 500,
      iterations: 1,
      delay: 1000,
    });
  }
}
    `,
    languages:[CodeLanguageType.typescript]
  }], ["webAnimationTemplate", {
    code: `
<div class="image-container">
  <img src="../../../assets/image/angular-logo.png" (click)="switchImage()" class="original-logo" #originalLogo alt="">
  <img src="../../../assets/image/angular-logo.png" class="reverted-logo" #revertedLogo alt="">
</div>
    `,
    languages:[CodeLanguageType.html]
  }], ["webAnimationStyle", {
    code: `
.image-container {
  height: 25em;
  .original-logo {
    position: absolute;
    height: 25em;
    filter: grayscale(90%);
  }
  
  .revert-logo {
    position: absolute;
    max-width: 0%;
    left: 1em;
    height: 25em;
  }
}
    `,
    languages:[CodeLanguageType.html]
  }], ["moduleSyntax", {
    code: `
<script src="fancyModernBundle.js" type="module">
    `,
    languages:[CodeLanguageType.html]
  }], ["moduleAsyncSyntax", {
    code: `
<script src="fancyModernBundle.js" type="module" async>
    `,
    languages:[CodeLanguageType.html]
  }], ["installNgPackagr", {
    code: `
// Upgrade ng-packagr

npm install -D ng-packagr@^13
    `,
    languages:[CodeLanguageType.html]
  }], ["dynamicChildComponent", {
    code: `
export class DynamicComponent {
}
    `,
    languages:[CodeLanguageType.typescript]
  }], ["dynamicChildTemplate", {
    code: `
<div class="container">dynamic works!</div>
    `,
    languages:[CodeLanguageType.html]
  }], ["dynamicParentTemplate", {
    code: `
<ng-container #container>
</ng-container>
    `,
    languages:[CodeLanguageType.html]
  }], ["ngUpdate", {
    code: `
ng update
    `,
    languages:[CodeLanguageType.html]
  }], ["formControlStatus12", {
    code: `
export declare abstract class AbstractControl {
  /**
   * The validation status of the control. There are four possible
   * validation status values:
   *
   * * **VALID**: This control has passed all validation checks.
   * * **INVALID**: This control has failed at least one validation check.
   * * **PENDING**: This control is in the midst of conducting a validation check.
   * * **DISABLED**: This control is exempt from validation checks.
   *
   * These status values are mutually exclusive, so a control cannot be
   * both valid AND invalid or invalid AND disabled.
   */
   readonly status: string;

   ...
}

export declare class FormControl extends AbstractControl {
  ...
}
    `,
    languages:[CodeLanguageType.typescript]
  }], ["formControlStatus13", {
    code: `
export declare type FormControlStatus = 'VALID' | 'INVALID' | 'PENDING' | 'DISABLED';

export declare abstract class AbstractControl {
  /**
   * The validation status of the control.
   *
   * @see \`FormControlStatus\`
   *
   * These status values are mutually exclusive, so a control cannot be
   * both valid AND invalid or invalid AND disabled.
   */
  readonly status: FormControlStatus;

   ...
}

export declare class FormControl extends AbstractControl {
  ...
}
    `,
    languages:[CodeLanguageType.typescript]
  }], ["tsUnknownSolution", {
    code: `
try {
  executeSomeThirdPartyCode();
} catch (err: any) {
  console.error(err.message); // Works again!
}    
`,
    languages:[CodeLanguageType.typescript]
  }], ["withoutTsStaticBlock", {
    code: `
class Foo {
  static bytes = createRandomBytes(4 * 1024);
  static fileBody = new FileBody(Foo.bytes);
}

function createRandomBytes(length: number) {
  const bytes = new Uint8Array(length);
  bytes.set(pseudoRandomBytes(bytes.length));
  return bytes;
}    
`,
    languages:[CodeLanguageType.typescript]
  }], ["apfStep1", {
    code: `
ng generate library documentation-ui
    `,
    languages:[CodeLanguageType.html]
  }], ["apfStep2", {
    code: `
scripts": {
    ...,
    "build-library": "ng build \"documentation-ui\"",
    "pack-library": "cd dist/documentation-ui && npm pack",
    "install-library": "npm install ./dist/documentation-ui/documentation-ui-0.0.1.tgz",
    ...
    `,
    languages:[CodeLanguageType.typescript]
  }], ["apfStep3", {
    code: `
cd projects/documentation-ui.src/lib
ng g m documentation-ui
    `,
    languages:[CodeLanguageType.html]
  }], ["apfStep4", {
    code: `
@NgModule({
  declarations: [
    DocReviewerContainerComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    DocReviewerContainerComponent
  ]
})
export class DocumentationUiModule { }
    `,
    languages:[CodeLanguageType.typescript]
  }], ["apfStep5", {
    code: `
export * from './lib/documentation-ui/documentation-ui.module';
export * from './lib/documentation-ui/doc-reviewer-container/doc-reviewer-container.component';
    `,
    languages:[CodeLanguageType.typescript]
  }], ["apfStep6", {
    code: `
npm run build-library
npm run pack-library
npm run install-library
    `,
    languages:[CodeLanguageType.html]
  }], ["apfStep7", {
    code: `
import { DocumentationUiModule } from 'documentation-UI';

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

    `,
    languages:[CodeLanguageType.typescript]
  }], ["apfStep8", {
    code: `
<app-doc-reviewer-container
  [sections]="sections"
  [titles]="sectionTitles"
  [getIdFromTitle]="getIdFromTitle">
</app-doc-reviewer-container>

<div #section>
</div>

<div #section>
</div>
    `,
    languages:[CodeLanguageType.html]
  }], ["apfStep8-2", {
    code: `
import { getIdFromTitle } from 'documentation-UI';

export class MyComponent {
  getIdFromTitle = getIdFromTitle;
  
  sectionTitles = [
    "Introduction",
    "Differences between View Engine and Ivy",
    ...
  ];
  
  @ViewChildren("section", {read: ElementRef}) sections: QueryList<ElementRef> | undefined;
}
    `,
    languages:[CodeLanguageType.typescript]
  }], ["apfStep9", {
    code: `
npm login
    `,
    languages:[CodeLanguageType.html]
  }], ["apfStep10", {
    code: `
npm publish dist/documentation-ui/documentation-ui-0.0.1.tgz --access public
    `,
    languages:[CodeLanguageType.html]
  }], ["testingComponent", {
    code: `
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakingChangesComponent } from './breaking-changes.component';

describe('BreakingChangesComponent', () => {
  let component: BreakingChangesComponent;
  let fixture: ComponentFixture<BreakingChangesComponent>;

  //set up the test module
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakingChangesComponent ]
    })
    .compileComponents();
  });

  //initialize the test component and the change detection
  beforeEach(() => {
    fixture = TestBed.createComponent(BreakingChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
    `,
    languages:[CodeLanguageType.typescript]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }], ["updateInstruction", {
    code: `
npx @angular/cli@13 update @angular/core@13 @angular/cli@13
    `,
    languages:[CodeLanguageType.html]
  }]
]);