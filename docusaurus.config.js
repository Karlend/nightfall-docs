// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("./core/PrismTheme");
const darkCodeTheme = require("./core/PrismTheme");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Nightfall",
  tagline: "Nightfall wiki",
  url: "https://nightfall.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "karlend", // Usually your GitHub org/user name.
  projectName: "nightfall-docs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
        disableSwitch: false,
      },
      navbar: {
        title: "Nightfall",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "https://nightfall.menu/",
            position: "left",
            label: "Site",
          },
          {
            href: "https://nightfall.menu/login/",
            position: "left",
            label: "Login",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // Application ID provided by Algolia
        appId: "MW3QFB27F1",
        // Public API key
        apiKey: "e9daf610e748516bcfa5300b93510648",
        indexName: "nightfall",
      },
    }),
};

module.exports = config;