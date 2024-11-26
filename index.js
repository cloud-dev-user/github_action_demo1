 const core = require('@actions/core');
 const github = require('@actions/github');
 
  async function run() {
   try {
     const myInput = core.getInput('myInput');
     const result = `The input was: ${myInput}`;
     core.setOutput('result', result);
   } catch (error) {
     core.setFailed(error.message);
   }
  }

run()
