import * as core from "@actions/core";
import * as github from "@actions/github";
import * as http from "@actions/http-client";

try {
  const idToken = await core.getIDToken();
  const httpClient = new http.HttpClient("inga-action");
  core.info(`url: ${core.getInput('host')}/external/oauth2/token`);
  const res = await httpClient.postJson(`${core.getInput('host')}/external/oauth2/token`, null, {
    Authorization: `Bearer ${idToken}`
  });
  core.info(`res: ${JSON.stringify(res)}`);
} catch (error) {
  core.setFailed(error.message);
}
