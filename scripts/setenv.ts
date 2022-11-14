const { writeFile } = require('fs');
const { argv } = require('yargs');

// read environment variables from .env file
require('dotenv').config();

// read the command line arguments passed with yargs
const environment = argv['environment'];
const isProduction = environment === 'prod';
const targetPath = isProduction
  ? `./src/environments/environment.prod.ts`
  : `./src/environments/environment.ts`;

// dotenv gives up access to process.env
// Change these environment variables as needed
const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   GOOGLE_MAPS_URI: "${process.env.GOOGLE_MAPS_URI}",
   SPOTIFY_API_URI: "${process.env.SPOTIFY_API_URI}"
};
`;
// write the content to the respective file
writeFile(targetPath, environmentFileContent, (err: any) => {
  if (err) {
    console.log(err);
  }
  console.log(`Wrote variables to ${targetPath}`);
});
