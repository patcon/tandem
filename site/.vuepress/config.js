module.exports = {
  title: 'Tandem',
  description: 'Tandem uses open-source tools like Drupal, Laravel, and Docker to transform your complex workflows and technical debt into elegant web applications.',
  head: [
    ['link', {rel: 'icon', href: '/favicon.png'}],
    ['link', {rel: 'stylesheet', href: '/styles/overrides.css'}],
  ],
  plugins: {
    '@vuepress/blog': {
      directories: [
        {
          title: 'Home',
          id: 'posts',
          dirname: 'posts',
          path: '/',
        },
      ],
      frontmatters: [
        {
          id: 'industry',
          keys: ['industry', 'industries'],
          path: '/industry/',
          frontmatter: {title: 'Industry'},
          pagination: {
            lengthPerPage: 25,
          },
        },
        {
          id: 'technology',
          keys: ['technology', 'technologies'],
          path: '/technology/',
          frontmatter: {title: 'Technology'},
          pagination: {
            lengthPerPage: 25,
          },
        },
        {
          id: 'service',
          keys: ['service', 'services'],
          path: '/service/',
          frontmatter: {title: 'Service'},
          pagination: {
            lengthPerPage: 25,
          },
        },
        {
          id: 'type',
          keys: ['type', 'types'],
          path: '/type/',
          frontmatter: {title: 'Type'},
          pagination: {
            lengthPerPage: 25,
          },
        },
      ],
      sitemap: {
        hostname: 'https://thinktandem.io',
      },
    },
    'vuepress-plugin-frontmatters-feed': {
      canonical_base: 'https://thinktandem.io',
      posts_directories: ['/blog/'],
      feed_options: {
        favicon: 'https://thinktandem.io/favicon.png',
        image: 'https://lando.dev/images/logo-pink-small.png',
      },
    },
    '@vuepress/google-analytics': {
      ga: 'UA-XXXXXXX',
    },
    'autometa': {
      site: {
        name: 'Tandem',
        twitter: 'ThinkTandem',
      },
      canonical_base: 'https://thinktandem.io',
    },
    'robots': {
      host: 'https://thinktandem.io',
      disallowAll: true,
      sitemap: '/sitemap.xml',
    },
  },
  theme: '@vuepress/theme-blog',
  themeConfig: {
    logo: '/images/logo-pink-small.png',
    docsDir: 'site',
    docsBranch: 'master',
    search: false,
    editLinks: false,
    nav: [
      {
        text: 'Industry Test',
        link: '/industry/healthcare/',
      },
      {
        text: 'Technology Test',
        link: '/technology/drupal/',
      },
    ],
  },
};