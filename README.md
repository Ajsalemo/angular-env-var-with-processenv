# angular-environment-variables-with-processenv

This repo shows how to utilize `process.env.YOUR_ENV_VARS` with Angular.

By default, Angular uses the `src/environments/environment.prod.ts` or `src/environments/environment.ts` folder for environment variables - and assumes you will be hardcoding property and values directly within. This differs from other SPAs where you can pass them in via `process.env.` and their respective prefix to expose them to the browser.

The main points to review are:
- `package.json`: 

```json
  "scripts": {
    "ng": "ng",
    "config": "ts-node ./scripts/setenv.ts",
    "dev": "npm run config -- --environment=dev && ng serve",
    "build": "npm run config -- --environment=prod && ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  }
```

Note the "config" script which is being ran in "build". We use `yargs` to set the environment here. Change this as needed (eg., dev, uat, prod, etc.)

- `scripts/setenv.ts`:

This file picks up the environment we specify (above) through `process.env.` and writes out whatever environment variable's we want to the `src/environments/` file. This picks up 