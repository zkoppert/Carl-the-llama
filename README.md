# carl-the-llama
<a href="https://opensource.org"><img height="150" align="right" src="https://opensource.org/files/OSIApprovedCropped.png" alt="Open Source Initiative Approved License logo"></a>

![Continuous Integration](https://github.com/zkoppert/Carl-the-llama/workflows/Continuous%20Integration/badge.svg)
![Lint Code Base](https://github.com/zkoppert/Carl-the-llama/workflows/Lint%20Code%20Base/badge.svg)
![Deployment Status](https://github.com/zkoppert/Carl-the-llama/workflows/Node.js%20Package/badge.svg)
![Changelog](https://github.com/zkoppert/Carl-the-llama/workflows/Changelog/badge.svg)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/zkoppert/Carl-the-llama.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/zkoppert/Carl-the-llama/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/zkoppert/Carl-the-llama.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/zkoppert/Carl-the-llama/context:javascript)

> A GitHub App built with [Probot](https://github.com/probot/probot) that is meant for enforcing rules on his own repository.

## Rules
A robot may not harm humanity, or through inaction allow humanity to come to harm.
A robot may not injure a human being or, through inaction, allow a human being to come to harm.
A robot must obey the orders given it by human beings except where such orders would conflict with the First Law.
A robot must protect its own existence as long as such protection does not conflict with the First or Second Laws.
[source](https://en.wikipedia.org/wiki/Three_Laws_of_Robotics)

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Features

Things Carl does:
- Leaves comments on new issues
- Leaves comments on new pull requests

## Operations
**Changelog and versioning**
The version number of this application is controlled automatically via a [GitHub Action](https://github.com/zkoppert/Carl-the-llama/blob/839c75cc367e452414ca5974ff6d5db609679159/.github/workflows/deploy.yml#L20). No need to edit this manually.

The [CHANGELOG](CHANGELOG.md) file is also controlled automatically via a [GitHub Action](.github/workflows/deploy.yml). No need to edit this manually.

## Delivery
**NPM Package Delivery**

Each time that a push to main branch occurs, a package will be deployed to GitHub Packages with the new code. This is accomplished via GitHub Actions. Check out the [workflow](.github/workflows/deploy.yml) that makes the magic happen.

## Deployment
**AWS Production Deployment**

Deploying to production is automated via a [GitHub Action](.github/workflows/deploy.yml) every time a new release (push to main branch) occurs.

## Contributing

If you have suggestions for how carl-the-llama could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

Be sure to run `npm test` before commiting.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2020 Zack Koppert <zkoppert@github.com>
