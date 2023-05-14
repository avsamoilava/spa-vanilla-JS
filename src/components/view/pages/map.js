import { el } from "redom";
import Wrapper from "../components/wrapper";

export class MapPage {
  render(){
    return Wrapper.render(el('h1', 'Map page'));
  }
}