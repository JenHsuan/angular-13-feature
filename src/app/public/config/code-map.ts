import { Code, CodeLanguageType } from "../code-container/service/code.domain";

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
<!DOCTYPE html><html lang="en"><head>
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
<style>body{margin:0}</style><link rel="stylesheet" href="styles.3164f3600d2890e4.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles.3164f3600d2890e4.css"></noscript></head>
<body>
  <app-root></app-root>
  <script src="runtime.53d27497dc947bab.js" type="module"></script><script src="polyfills.79ba09efd856cfcd.js" type="module"></script><script src="main.047cf091c9c37ea8.js" type="module"></script>
  
  <!-- 
  <script src="fancyModernBundle.js" type="module"></script>
  <script src="legacyBundle.js" nomodule></script> 
  -->

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

//solution
try {
  executeSomeThirdPartyCode();
} catch (err: any) {
  console.error(err.message); // Works again!
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
//without static block
class Foo {
  static bytes = createRandomBytes(4 * 1024);
  static fileBody = new FileBody(Foo.bytes);
}

function createRandomBytes(length: number) {
  const bytes = new Uint8Array(length);
  bytes.set(pseudoRandomBytes(bytes.length));
  return bytes;
}

//with static block
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
<input name="firstName" ngModel [maxlength]="null">
      `,
    languages:[CodeLanguageType.html]
  }], ["urlSerializer", {
    code: `
//v12
export class DeprecationsContentChildrenComponent {
  constructor(private cd: ChangeDetectorRef){
    let dus = new DefaultUrlSerializer();
    //queryParams: q: "hello"
    console.log(dus.parse('/path?q=hello?&q2=2'));
  }
}

//v13
export class DeprecationsContentChildrenComponent {
  constructor(private cd: ChangeDetectorRef){
    let dus = new DefaultUrlSerializer();
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
  }], ["stepsESM", {
    code: `
//1. Add proxy.conf.mjs
  
export default {
  "/pdf": {
    "target": "http://localhost:3000",
    "secure": false
  }
}

//2. Update the angular.json file
"architect": {
  ...,
  "serve": {
    "builder": "@angular-devkit/build-angular:dev-server",
    "options": {
      "proxyConfig": "proxy.conf.mjs"
    }

//3. Setup the backend locally (http://localhost:3000)
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
//Tear down the environment with the TestBed.initTestEnvironment 
beforeEach(async () => {
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting(),
    {
      teardown: { destroyAfterEach: true }
    }
  );
});

//Tear down the module with the TestBed.configureTestingModule
beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [ TestingComponent ],
    teardown: { destroyAfterEach: true }
  })
  .compileComponents();
});    `,
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