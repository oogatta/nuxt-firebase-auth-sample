import * as download from "download";

export default ({ app }, inject) => {
  app.download = download;
}
