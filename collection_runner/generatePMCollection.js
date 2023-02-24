// eslint-disable-next-line @typescript-eslint/no-var-requires
const { exec } = require('child_process');

/* converting the swagger json to post man collection file */
exec(
  'openapi2postmanv2 -s swagger.json -o postman-collections.json -p -O folderStrategy=Tags,requestParametersResolution=Example,optimizeConversion=false,stackLimit=50',
  (err, output) => {
    // once the command has completed, the callback function is called
    if (err) {
      // log and return if we encounter an error
      console.error('could not execute command: ', err);
      return;
    }
    // log the output received from the command
    console.log('Output: \n', output);
  },
);
