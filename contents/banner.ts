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
  long: "新歓イベントを行っています",
  short: "新歓イベントを行っています",
  link: "/welcome-events",
  linkText: "日程",
};

export default banner;
