import * as core from "@actions/core";
import * as github from "@actions/github";
import * as http from "@actions/http-client";
import * as fs from "fs";

try {
  const httpClient = new http.HttpClient("inga-action");
  const tokenRes = await httpClient.postJson(`${core.getInput('host')}/external/oauth2/token`, null, {
    'Authorization': `Bearer ${await core.getIDToken()}`
  });
  core.info(`res: ${JSON.stringify(tokenRes)}`);

  const buf = fs.readFileSync('.inga/report.json')
  const reportRes = await httpClient.post(`${core.getInput('host')}/external/report`, buf.toString(), {
    'Content-Type': 'application/octet-stream',
    'Content-Length': buf.length.toString(),
    'Authorization': `Bearer ${tokenRes.result.access_token}`
  });
  core.info(`res: ${reportRes.message.statusCode}`);
} catch (error) {
  core.setFailed(error.message);
}
