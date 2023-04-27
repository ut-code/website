import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "ut.code();",
    siteUrl: "https://utcode.net",
  },
  graphqlTypegen: { generateOnBuild: true },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: { maxWidth: 1200 },
          },
          "gatsby-remark-prismjs",
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-no-sourcemaps",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: { path: "./contents" },
    },
  ],
};

export default config;
