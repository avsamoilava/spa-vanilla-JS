import { el } from "redom";
import Wrapper from "../components/wrapper";

export class TablePage {
  render(){
    return Wrapper.render(el('h1', 'Table page'));
  }
}