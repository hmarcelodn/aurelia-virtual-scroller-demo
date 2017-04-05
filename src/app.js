export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia Virtual Scroll';
    config.map([
      { route: ['', 'window'], name: 'window', moduleId: './window', nav: true, title: 'Window Scroll' },
      { route: ['contained'], name: 'contained', moduleId: './contained', nav: true, title: 'Contained Scroll' }
    ]);

    this.router = router;
  }
}
