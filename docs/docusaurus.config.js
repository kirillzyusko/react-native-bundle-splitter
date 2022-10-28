// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React Native Bundle Splitter',
  tagline: 'Split up your js-bundle easily and in elegant way',
  url: 'https://kirillzyusko.github.io',
  baseUrl: '/react-native-bundle-splitter/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kirillzyusko',
  projectName: 'react-native-bundle-splitter',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kirillzyusko/react-native-bundle-splitter/tree/main/docs/',
          versions: {
            '1.x': {
              label: '1.x',
            },
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kirillzyusko/react-native-bundle-splitter/tree/main/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-GYRYL56XPL',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'React Native Bundle Splitter',
        logo: {
          alt: 'React Native Bundle Splitter Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            to: '/docs/fundamentals/getting-started',
            position: 'left',
            label: 'Docs',
          },
          {to: '/docs/category/api-reference', label: 'API', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting started',
                to: '/docs/fundamentals/getting-started',
              },
              {
                label: 'Guides',
                to: '/docs/guides/navigation',
              },
              {
                label: 'Recipes',
                to: '/docs/recipes/bundle-analysis',
              },
              {
                label: 'API reference',
                to: '/docs/category/api-reference',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'RAM bundles',
                href: 'https://reactnative.dev/docs/ram-bundles-inline-requires',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/kirillzyusko/react-native-bundle-splitter',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kirill Zyusko. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
