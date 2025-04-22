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
  long: "新歓を行っています",
  short: "新歓を行っています",
  link: "/join",
  linkText: "参加",
};

export default banner;
