type Banner = {
  shown: boolean;
  kind: "notify" | "error";
  long: string;
  short: string;
  link: string;
  linkText?: string;
};
const banner: Banner = {
  shown: true,
  kind: "error",
  long: "開発中の Website V3 を見ています",
  short: "ハッカソンを開催します",
  link: "https://utcode.net",
  linkText: "リリース版に戻る",
};

export default banner;
