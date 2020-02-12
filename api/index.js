const { toLambda } = require('probot-serverless-now')
const app = require('../')
module.exports = toLambda(app)
