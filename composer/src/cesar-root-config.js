import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@cesar/header",
  app: () => System.import("@cesar/header"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@cesar/body",
  app: () => System.import("@cesar/body"),
  activeWhen: ["/body"],
});

start({
  urlRerouteOnly: true,
});
