export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'test'], name: 'test',      moduleId: './test',      nav: true, title: 'Test' }
    ]);

    this.router = router;
  }
}
