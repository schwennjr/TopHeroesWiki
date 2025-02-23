import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'TopHeroes Wiki',
  tagline: 'Your big adventure awaits',
  favicon: 'img/logo.ico',

  // Set the production url of your site here
  url: 'https://topheroes.wiki',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'schwennjr', // Usually your GitHub org/user name.
  projectName: 'TopHeroesWiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/schwennjr/TopHeroesWiki/docs/',
        },
        //blog: {
        //  showReadingTime: true,
        //  feedOptions: {
        //    type: ['rss', 'atom'],
        //    xslt: true,
        //  },
        //  // Please change this to your repo.
        //  // Remove this to remove the "edit this page" links.
        //  editUrl:
        //    'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //  // Useful options to enforce blogging best practices
        //  onInlineTags: 'warn',
        //  onInlineAuthors: 'warn',
        //  onUntruncatedBlogPosts: 'warn',
        //},
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  //clientModules: [   
  //  require.resolve('./static/scripts/image.js')
  //],

  plugins: [
    'docusaurus-plugin-image-zoom'
  ],
  themeConfig: {
    // Replace with your project's social card
    //image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    zoom: {
      selector: '.th_container .th_image img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      }
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'TopHeroes Wiki',
      logo: {
        alt: 'TopHeroes Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Intro'
        },
        //{to: '/blog', label: 'Blog', position: 'left'},
        {to: '/docs/heroes/heroes-intro', label: 'Heroes', position: 'left'},
        {to: '/docs/buildings/castle', label: 'Buildings', position: 'left'},
        {to: '/docs/research/available-technologies', label: 'Research', position: 'left'},
        {to: '/docs/events/guild-boss', label: 'Events', position: 'left'},
        {to: '/docs/items-resources/resource-types', label: 'Items & Resources', position: 'left'},
        {to: '/docs/gameplay/adventure-mode', label: 'Gameplay', position: 'left'},        
        {to: '/docs/ui/vip', label: 'UI', position: 'left'},
        {
          href: 'https://github.com/schwennjr/TopHeroesWiki',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/TopHeroes/',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/topheroes',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/share/1AG8RajX1s/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'TopHeroes Gold Site',
              href: 'https://topheroes.store.kopglobal.com',
            },
            {
              label: 'PC Download',
              href: 'https://www.rivergame.net/topheroes/en/home.html'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/schwennjr/TopHeroesWiki',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
