# Deploying

This page describes the deployment of the Eliza project.

We use [Netlify](https://www.netlify.com/) for deploying and [GitHub](http://github.com) as the source repository.

## Setting up Netlify

1. If you haven't yet, create a new [Netlify](https://app.netlify.com/signup) account.
::: warning NOTE
You can sign up direclty using your GitHub account or using your email.
:::
2. In your Netlify dashboard, click the `New site from Git` button.
3. Click the `GitHub` button or the button corresponding to the tool you are using as your source respository.
4. Authorize access to the repositories if required.
5. Select the repository you want to deploy.
5. Set the following settings:
    1. In `Branch to deploy` select `master`.
    2. In `Build command` type: `yarn build`.
    3. In `Publish directory` type `dist`.
6. Click the `Deploy site` button.

Netlify starts the deploying. When finished, your site is deployed in the specified domain.

You can see the Eliza project deployed [here](https://gifted-engelbart-428b55.netlify.com).

Read the complete documentation on how to deploy VueJS projects [here](https://cli.vuejs.org/guide/deployment.html#deployment).