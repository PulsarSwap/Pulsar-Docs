const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: "Pulsar Protocol",
  tagline: "Documentation and Guides",
  url: "https://docs.pulsarswap.com",
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
          href: "https://github.com/PulsarSwap",
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
              href: "https://pulsarswap.com",
            },
            {
              label: "App",
              href: "https://app.pulsarswap.com",
            },
            {
              label: "Analytics",
              href: "https://info.pulsarswap.com",
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
              label: "GitHub | Docs",
              href: "https://github.com/PulsarSwap/Pulsar-Docs",
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
              href: "https://mirror.xyz/pulsarswap.eth",
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
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve("./v1sidebars.js"),
          includeCurrentVersion: false,
          editUrl: "https://github.com/PulsarSwap/pulsar-docs/tree/main",
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
          customCss2: require.resolve("./src/css/colors.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
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
