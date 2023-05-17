import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Color Art",
  description: "Color Art Documentation",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API', link: '/api/channels' }
    ],
    outline: [2, 3],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting started', link: '/guide/start' },
          { text: 'Supported color spaces', link: '/guide/usage' }
        ]
      },
      {
        text: 'Construct a color',
        items: [
          { text: 'From string', link: '/construct-a-color/from-string' },
          { text: 'From color spaces', link: '/construct-a-color/from-space' },
          { text: 'From name', link: '/construct-a-color/from-name' },
          { text: 'From number', link: '/construct-a-color/from-num' },
          { text: 'Macros use', link: '/construct-a-color/color-macros' },
        ]
      },
      {
        text: 'API',
        items: [
          { text: 'Color Channels', link: '/api/channels' },
          { text: 'Color Operations', link: '/api/operations' },
          { text: 'Color Blendings', link: '/api/blendings' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JiatLn/color-art' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present JiatLn'
    },

    editLink: {
      pattern: 'https://github.com/JiatLn/color-art-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
