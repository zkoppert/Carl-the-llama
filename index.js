/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Application} app
 */
module.exports = app => {
  // Your code here
  app.log('Yay, the app was loaded!')

  // Spicy response when a new issue is opened.
  app.on('issues.opened', async context => {
    const issueComment = context.issue({ body: 'Thanks for opening this issue! I have alerted the office of complaints. :put_litter_in_its_place:' })
    return context.github.issues.createComment(issueComment)
  })

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
