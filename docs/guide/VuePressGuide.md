# VuePress Guide

VuePress is a Vue-powered static site generator designed for writing technical documentation.

## Getting Started with VuePress

1. To install VuePress globally, run:

`yarn global add vuepress`
::: warning NOTE
To install VuePress as a local dependency inside your project, run:
`yarn add -D vuepress`
:::
2. Create a new directory called `docs` inside your project folder:

`mkdir docs`

3. Create a markdown file called `README.md`

::: warning NOTE
You can start writing your documentation in the README file using markdown syntax.
:::

4. Add the following scripts to the `package.json` file:

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

5. To start the documentation development environment, run:

`yarn docs:dev`

6. To generate the static assets, use:

`yarn docs:build`

Read the complete documentation on how to get started using VuePress [here](https://vuepress.vuejs.org/guide/getting-started.html).