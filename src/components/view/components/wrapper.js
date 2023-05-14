import { el, setChildren } from 'redom';
import { navigate } from '../../utils';

export default class Wrapper {
  static renderHeader(){
    const links = [
      ['main', '/'],
      ['table','/table'],
      ['map', '/map'],
    ];
    return el('header.header', [
      el('nav.header__menu', [
        el('ul.header__list', 
        links.map(([link, path]) => el('li.header__item', [el('a.header__link', link, { href: path,  onclick: (e) => navigate(path, e) })])))
      ])
    ])
  }
  static renderFooter(){
    return el('footer.footer', [
      el('h2', 'Footer')
    ]);
  }
  static render(children){
    const header = Wrapper.renderHeader();
    const footer = Wrapper.renderFooter();
    return el('.wrapper', [header, el('main.page', [children]), footer]);
  }
}