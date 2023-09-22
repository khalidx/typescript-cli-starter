# typescript-cli-starter

A simple and zero-opinion typescript starter template for building cross-platform command line applications.

![GitHub package.json dynamic](https://img.shields.io/github/package-json/keywords/khalidx/typescript-cli-starter.svg?style=flat-square)

![GitHub](https://img.shields.io/github/license/khalidx/typescript-cli-starter.svg?style=flat-square)
![GitHub package.json version](https://img.shields.io/github/package-json/v/khalidx/typescript-cli-starter.svg?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/khalidx/typescript-cli-starter.svg?style=flat-square)

![GitHub last commit](https://img.shields.io/github/last-commit/khalidx/typescript-cli-starter.svg?style=flat-square)

Includes:

- [TypeScript](https://www.typescriptlang.org/), for writing good code
- [Ava](https://www.npmjs.com/package/ava), for writing good tests
- [Commander](https://www.npmjs.com/package/commander), for building CLI applications
- [Pkg](https://www.npmjs.com/package/pkg), for building cross-platform native executables

Your application will be installable from `npm` or by sharing your native executables.

## Usage

### Adjust the name of your library

Change the "my-library" string in the package.json
`"bin": {
    "my-library": "..."
  }`

### Generate, install (globally) and run
`npm i`

`npm run generate`

### **dev**

`npm run dev`

Runs the CLI application.

You can pass arguments to your application by running `npm run dev -- --your-argument`. The extra `--` is so that your arguments are passed to your CLI application, and not `npm`.

### **clean**

`npm run clean`

Removes any built code and any built executables.

### **build**

`npm run build`

Cleans, then builds the TypeScript code.

Your built code will be in the `./dist/` directory.

### **test**

`npm run test`

Cleans, then builds, and tests the built code.

### **bundle**

`npm run bundle`

Cleans, then builds, then bundles into native executables for Windows, Mac, and Linux.

Your shareable executables will be in the `./exec/` directory.
