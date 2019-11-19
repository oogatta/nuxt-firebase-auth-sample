import * as jwt from "jsonwebtoken";

export default ({ app }, inject) => {
  app.jwt = jwt;
}
