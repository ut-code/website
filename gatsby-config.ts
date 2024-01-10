import type { GatsbyConfig } from "gatsby";
import path from "path";

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
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": path.resolve(__dirname, "src"),
          "@components": path.resolve(__dirname, "src/components"),
          "@images": path.resolve(__dirname, "src/images"),
          "@pages": path.resolve(__dirname, "src/pages"),
          "@templates": path.resolve(__dirname, "src/templates"),
        },
        extensions: [],
      },
    },
  ],
};

export default config;
