import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@cesar/header",
  app: () => System.import("@cesar/header"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@cesar/body",
  app: () => System.import("@cesar/body"),
  activeWhen: (location) => location.pathname === "/body" || location.pathname === "/body/",
});

start({
  urlRerouteOnly: true,
});
