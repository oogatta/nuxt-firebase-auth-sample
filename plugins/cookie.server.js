import cookie from "cookie";

export default ({ app }, inject) => {
  app.cookie = cookie;
}
