# Deploying the Docs

This page describes the deployment of the Eliza project documentation.

## Setting up Netlify

The Eliza project documentation is deployed in Netlify. Follow the next steps to deploy your VuePress documentation on Netlify:

1. Go to your Netlify dashboard and click the `New site from Git` button.
2. Click the `GitHub` button or the button corresponding to the tool you are using as your source respository.
3. Authorize access to the repository if required.
4. Select the repository you want to deploy.
5. Set the following settings:
`Build Command`: `yarn docs:build`
`Publish directory`: `docs/.vuepress/dist`
6. Click the `Deploy site` button!

Netlify starts the deploying. When finished, your site is deployed in the specified domain.

You can see the Eliza project documentation deployed [here](https://condescending-torvalds-6d3f83.netlify.com).

Read the complete documentation on how to deploy VueJS projects [here](https://vuepress.vuejs.org/guide/deploy.html#deploying).