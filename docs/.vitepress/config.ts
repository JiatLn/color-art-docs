import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Color Art",
  description: "Color Art Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API', link: '/api/channels' }
    ],

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
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JiatLn/color-art' }
    ]
  }
})
