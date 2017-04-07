export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia Virtual Scroll';
    config.map([
      { route: ['', 'window'], name: 'window', moduleId: './window', nav: true, title: 'Window Scroll' },
      { route: ['contained'], name: 'contained', moduleId: './contained', nav: true, title: 'Contained Scroll' },
      { route: ['windowfetch'], name: 'windowfetch', moduleId: './windowfetch', nav: true, title: 'Window Fetch' },
      { route: ['containedfetch'], name: 'containedfetch', moduleId: './containedfetch', nav: true, title: 'Contained Fetch' },
      { route: ['changed'], name: 'changed', moduleId: './changed', nav: true, title: 'Changed' },
      { route: ['polling'], name: 'polling', moduleId: './polling', nav: true, title: 'Polling' }  
    ]);

    this.router = router;
  }
}
