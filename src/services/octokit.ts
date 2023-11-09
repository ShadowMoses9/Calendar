import { Octokit } from "@octokit/core";
const octokit = new Octokit({
  auth: "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",
});
export const { data } = await octokit.request(
  "GET /repos/{owner}/{repo}/commits",
  {
    owner: "ShadowMoses9",
    repo: "forkify-app",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  }
);
