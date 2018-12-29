module.exports = {
    title: 'Eliza Docs',
    description: 'A Sample Project to Get Started with VuePress',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        { text: 'About', link: '/about/' },
      ],
      sidebar: {
        '/guide/': [
          '',
          'VuePressGuide',
          'Deploying',
          'DeployingDocs'
        ]
      }
    }
  }