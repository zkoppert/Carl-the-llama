# carl-the-llama
![CI Status](https://github.com/zkoppert/Carl-the-llama/workflows/Node.js%20CI/badge.svg)
![Deployment Status](https://github.com/zkoppert/Carl-the-llama/workflows/Node.js%20Package/badge.svg)

> A GitHub App built with [Probot](https://github.com/probot/probot) that is meant for enforcing rules on his own repository.

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
**Package Deployment**

Each time that a release is created, a package will be deployed to GitHub Packages. This is accomplished via GitHub Actions. Check out the [workflow](.github/workflows/deploy.yml) that makes the magic happen.

**Production Deployment**

The Zeit Now App automatically deploys the master branch each time a new commit occurs on that branch.

## Contributing

If you have suggestions for how carl-the-llama could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

Be sure to run `npm test` before commiting.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2020 Zack Koppert <zkoppert@github.com>
