module.exports = {
  title: "Pulsar TWAMM Protocol",
  tagline: "Documentation and Guides",
  url: "https://docs.pulsarswap.com/",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
  favicon: "img/logo_circle.png",
  organizationName: "PulsarSwap", // Usually your GitHub org/user name.
  projectName: "Pulsar-Docs", // Usually your repo name.
  themeConfig: {
    // hideableSidebar: true,
    prism: {
      additionalLanguages: ["solidity"],
    },
    googleAnalytics: {
      trackingID: "UA-128182339-7",
      // Optional fields.
      anonymizeIP: true,
    },
    algolia: {
      contextualSearch: true,
      apiKey: "32465e2ab6f7554ff014e64c0d92171c",
      indexName: "v1-docs",
      appId: "S0IDD0YGLZ",
      contextualSearch: true,
    },
    navbar: {
      title: "Pulsar Documentation",
      logo: {
        alt: "pulsar logo",
        src: "img/logo_circle.png",
      },
      items: [
        {
          href: "https://github.com/PulsarSwap/Pulsar-Docs",
          label: "GitHub",
          position: "right",
        },
        {
          label: "Whitepaper",
          to: "https://www.paradigm.xyz/2021/07/twamm",
          position: "right",
        },
        // {
        //   type: "docsVersionDropdown",
        //   position: "right",
        //   // Add additional dropdown items at the beginning/end of the dropdown.
        //   // dropdownItemsBefore: [],
        //   // dropdownItemsAfter: [{to: '/versions', label: 'v1'}],
        //   // Do not add the link active class when browsing docs.
        //   // dropdownActiveClassDisabled: false,
        //   docsPluginId: "default",
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Ecosystem",
          items: [
            {
              label: "Home",
              href: "https://pulsarswap.com/",
            },
            {
              label: "Dapp",
              href: "https://dapp.pulsarswap.com/",
            },
            {
              label: "Analytics",
              href: "https://info.pulsarswap.com/",
            },
          ],
        },
        {
          title: "Developers",
          items: [
            {
              label: "GitHub | Protocol",
              href: "https://github.com/PulsarSwap/TWAMM-Contracts",
            },
            {
              label: "GitHub | SDK",
              href: "https://github.com/PulsarSwap/TWAMM-SDK",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Telegram",
              href: "https://t.me/PulsarSwap",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/PulsarSwap",
            },
            {
              label: "Blog",
              href: "https://medium.com/@PulsarSwap/",
            },
          ],
        },
      ],
      // copyright: `unlicensed`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "versioned_docs/version-v1",
          routeBasePath: "/",
          sidebarPath: require.resolve("./v1sidebars.js"),
          includeCurrentVersion: false,
          editUrl: "https://github.com/PulsarSwap/pulsar-docs/tree/main/",
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
          customCss2: require.resolve("./src/css/colors.css"),
        },
      },
    ],
  ],
  plugins: [
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "SDK",
    //     path: "SDK",
    //     routeBasePath: "/",
    //     sidebarPath: require.resolve("./sdkSidebar.js"),
    //   },
    // ],
  ],
};
