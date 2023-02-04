# Inga Action

GitHub Actions for [Inga](https://github.com/seachicken/inga).

## Inputs

| Name | Requirement | Description |
| ---- | ----------- | ----------- |
| `language` | required | Languages to be analyzed. ("java" or "typescript") |
| `root-path` | optional | Relative path of the project to be analyzed, so if you do not give this option, it defaults to the command execute path. |
| `exclude` | optional | Filenames of glob pattern matching to exclude from analysis. (e.g. "**/*.test.(ts\|tsx)") |
| `report-base` | optional | Set the base path for the HTML report. Set `<REPO>` if using GitHub Pages and the URL is `https://<USERNAME>.github.io/<REPO>/`. |

## Example

```sh
name: Inga Analysis

on:
  pull_request:

jobs:
  inga-analysis:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
      with:
        fetch-depth: 0
        # https://github.com/actions/checkout/issues/124
        ref: ${{ github.event.pull_request.head.ref }}
    - uses: seachicken/inga-action@main
      with:
        language: "java"
        exclude: "src/test/**"
```
