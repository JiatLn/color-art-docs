export default defineAppConfig({
  docus: {
    title: 'Color Art',
    description: 'Color Art documentation.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      github: 'JiatLn/color-art'
    },
    aside: {
      level: 0,
      exclude: []
    },
    header: {
      logo: true
    },
    footer: {
      iconLinks: [
        {
          href: 'https://crates.io/crates/color-art',
          icon: 'simple-icons:rust'
        }
      ]
    }
  }
})
