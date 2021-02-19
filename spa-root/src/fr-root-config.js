import { registerApplication, start } from "single-spa";
import './App.css';


registerApplication(
    "@single-spa/welcome",
    () =>
     System.import("https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
     (location) => location.pathname.endsWith('/'),
  );

registerApplication({
 name: "@fc/spa-header",
   app: () => System.import("@fc/spa-header"),
   activeWhen: ["/"]
 });

 
registerApplication({
  name: "@fc/spa-app1",
    app: () => System.import("@fc/spa-app1"),
    activeWhen: ["/app1"]
  });

  
registerApplication({
  name: "@fc/spa-app2",
    app: () => System.import("@fc/spa-app2"),
    activeWhen: ["/app2"]
  });



start({
  urlRerouteOnly: true,
});
