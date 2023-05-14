import { el, setChildren } from 'redom';
import { MapPage } from './pages/map';
import { TablePage } from './pages/table';
import { StartPage } from './pages/start';

export default class View {
  map = new MapPage();
  table = new TablePage();
  start = new StartPage();
  pages = {
    '/': this.start,
    '/table': this.table,
    '/map': this.map
  }

  render(path){ 
    const root = document.querySelector('#root');
    console.log(this.pages[path]);
    const elem = this.pages[path].render();
    console.log(elem);
    
    console.log(elem);
    setChildren(root, [elem]);
  }
}