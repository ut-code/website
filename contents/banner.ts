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
  kind: "notify",
  long: "3/30 (日) 20:00 からオンライン新歓説明会を開催します",
  short: "3/30 (日) 新歓説明会を開催します",
  link: "/welcome-events",
  linkText: "詳細",
};

export default banner;
