import { registerApplication, start, LifeCycles } from "single-spa";



registerApplication({
  name: '@test/navbar',
  app: () => System.import<LifeCycles>('@test/navbar'),
  activeWhen: ['/']
});

registerApplication({
  name: '@test/product',
  app: () => System.import<LifeCycles>('@test/product'),
  activeWhen: ['/product'],
});

registerApplication({
  name: '@test/about',
  app: () => System.import<LifeCycles>('@test/about'),
  activeWhen: ['/about'],
});

registerApplication({
  name: '@test/login',
  app: () => System.import<LifeCycles>('@test/login'),
  activeWhen: ['/login'],
});

registerApplication({
  name: 'welcome',
  app: () => System.import<LifeCycles>('welcome'),
  activeWhen: ['/welcome'],
});

start({
  urlRerouteOnly: true,
});
