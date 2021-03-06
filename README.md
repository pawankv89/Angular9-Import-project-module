# Angular9-Import-project-module

### Angular9-Import-@Path/module for Angular 9 with @pks/remote Custom Project Library

![](https://github.com/pawankv89/Angular9-Import-project-module/blob/main/images/screen_1.png)

## Version 1.0
This Sample for Learning @path Module.

```xml

```

## Requirements

### Visual Studio Code 1.58.2

Version: 1.58.2
Date: 2021-07-14T22:09:06.581Z
Electron: 12.0.13
Node.js: 14.16.0
V8: 8.9.255.25-electron.0
OS: Darwin x64 19.4.0

## setup

1) Add path @paths in dependencies inside tsconfig.json

```xml
 "compilerOptions": {
   "baseUrl": "./",
   "outDir": "./dist/out-tsc",
   "forceConsistentCasingInFileNames": true,
   "strict": true,
   "noImplicitReturns": true,
   "noFallthroughCasesInSwitch": true,
   "sourceMap": true,
   "declaration": false,
   "downlevelIteration": true,
   "experimentalDecorators": true,
   "moduleResolution": "node",
   "importHelpers": true,
   "target": "es2017",
   "module": "es2020",
   "lib": [
     "es2018",
     "dom"
   ],
   "paths": {
     "@pks/remote": ["src/remote/src/index.ts"]
   },
 }
  ```

2) Add remote folder in main root folder "angular9-pk-app/src/remote"

```xml

remote
  src
    lib
```

3) Add root tsconfig.json  as a base file extends in remote root folder  "src/remote/tsconfig.json"

```xml
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "types": ["node"]
  },
  "include": ["**/*.ts"]
}

```

4) Add @pks/remote in your Component or module file

```xml

import { RemoteService, MockDataService } from '@pks/remote';

@Injectable({
    providedIn: 'root'
})

export class DownloadService {
    constructor(
      private remoteService: RemoteService,
      private mockDataService: MockDataService
    ) {}
    
    exportFile() {
       const url = `${BASE_URL}/sample-address-list.csv`;
       return this.remoteService.get(url);
      }
     
      get(file: string) {
        return this.mockDataService.get(`${file}`);
      }
}

```

## Run Code your Machine

ng serve

## Git Commands

```xml

Update Password
Angular9-Import-project-module % git config --global user.name "Example_Name"
Angular9-Import-project-module % git config --global user.email "Example_EMAIL"
Angular9-Import-project-module % git config --global user.password "Example_PASSWORD"

Public Github Source % git clone https://github.com/pawankv89/Angular9-Import-project-module.git
Angular9-Import-project-module % git status
Angular9-Import-project-module % git add *
Angular9-Import-project-module % git commit -m "Initial commit"
Angular9-Import-project-module % git status
Angular9-Import-project-module % git push -u origin main
Angular9-Import-project-module % 
```

## License

This code is distributed under the terms and conditions of the [MIT license](LICENSE).

## Change-log

A brief summary of each this release can be found in the [CHANGELOG](CHANGELOG.mdown). 
