import Controller from "./controller";
import View from "./view";
import { router } from './router';

export default class App {
  constructor(){
    this.controller = new Controller();
    this.view = new View();
  }
  start(){
    router
    .on('/', () => this.view.render('/'))
    .on('/table', () => this.view.render('/table'))
    .on('/map', () => this.view.render('/map'))
    .resolve();
  }
}

