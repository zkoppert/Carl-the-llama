# carl-the-llama
![Continuous Integration](https://github.com/zkoppert/Carl-the-llama/workflows/Continuous%20Integration/badge.svg)
![Deployment Status](https://github.com/zkoppert/Carl-the-llama/workflows/Node.js%20Package/badge.svg)
![Changelog](https://github.com/zkoppert/Carl-the-llama/workflows/Changelog/badge.svg)

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

## Deployment
**Changelog and versioning**
The version number of this application is controlled automatically via a [GitHub Action](https://github.com/zkoppert/Carl-the-llama/blob/839c75cc367e452414ca5974ff6d5db609679159/.github/workflows/deploy.yml#L20). No need to edit this manually.

The [CHANGELOG](CHANGELOG.md) file is also controlled automatically via a [GitHub Action](https://github.com/zkoppert/Carl-the-llama/blob/839c75cc367e452414ca5974ff6d5db609679159/.github/workflows/deploy.yml#L36). No need to edit this manually.

**NPM Package Delivery**

Each time that a push to master occurs, a package will be deployed to GitHub Packages with the new code. This is accomplished via GitHub Actions. Check out the [workflow](.github/workflows/deploy.yml) that makes the magic happen.

**AWS Production Deployment**

Deploying to production is currently a manual process. There is a [request](https://github.com/zkoppert/Carl-the-llama/issues/59) to automate it. It can be accomplished with the following command.

`serverless deploy`

## Contributing

If you have suggestions for how carl-the-llama could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

Be sure to run `npm test` before commiting.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2020 Zack Koppert <zkoppert@github.com>
