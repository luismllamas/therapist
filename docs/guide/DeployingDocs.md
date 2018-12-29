# Deploying the Docs

This page describes the deployment of the Eliza project documentation.

## Setting up Netlify

The Eliza project documentation is deployed in Netlify. Follow the next steps to deploy your VuePress documentation on Netlify:

1. Setup up a new project from GitHub with the following settings:
`Build Command`: `npm run docs:build or yarn docs:build`
`Publish directory`: `docs/.vuepress/dist`
2. Hit the deploy button!