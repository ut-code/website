type Banner = {
  shown: boolean;
  kind: "notify" | "error";
  long: string;
  short: string;
  link: string;
  linkText?: string;
};
const banner: Banner = {
  shown: false,
  kind: "error",
  long: "開発中の Website V3 を見ています",
  short: "開発中の Website です",
  link: "https://utcode.net",
  linkText: "リリース版に戻る",
};

export default banner;
