export const kinds = [
  {
    frontmatter: "long-term",
    path: undefined,
    title: "長期プロジェクト",
    description:
      "ut.code(); で長期間にわたって開発を行っているプロジェクトです",
    tabTitle: "長期プロジェクト",
  },
  {
    frontmatter: "festival",
    path: "festival",
    title: "学園祭プロジェクト",
    description:
      "ut.code(); が毎年参加している、学園祭に展示するプロジェクトです",
    tabTitle: "学園祭",
  },
  {
    frontmatter: "hackathon",
    path: "hackathon",
    title: "ハッカソンプロジェクト",
    description: "ut.code(); で短期間で開発したハッカソンのプロジェクトです",
    tabTitle: "ハッカソン",
  },
] as const;
