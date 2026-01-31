import * as core from "@actions/core";
import * as github from "@actions/github";
import * as http from "@actions/http-client";

try {
  const idToken = await core.getIDToken();
  const httpClient = new http.HttpClient("inga-action");
  const res = await httpClient.postJson(`${core.getInput('host')}/external/oauth2/token`, null, {
    Authorization: `Bearer ${idToken}`
  });
  console.log(`res: ${JSON.stringify(res)}`);

  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput("who-to-greet");
  core.info(`Hello ${nameToGreet}!`);

  // Get the current time and set it as an output variable
  const time = new Date().toTimeString();
  core.setOutput("time", time);

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  core.info(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
