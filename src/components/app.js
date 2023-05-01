import Controller from "./controller";
import View from "./view";

export default class App {
  constructor(){
    this.controller = new Controller();
    this.view = new View();
  }
  start(){
    this.view.render();
  }
}

