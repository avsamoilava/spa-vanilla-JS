import { el, setChildren } from "redom";

export default class View {
  render(){
    const root = document.querySelector('main');
    const title = el('h1', 'Hello');
    setChildren(root, title);
  }
}