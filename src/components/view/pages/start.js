import { setChildren, el } from "redom";
import Wrapper from "../components/wrapper";

export class StartPage {
  state = {
    activeForm: 'signUp',
  }

  render(){
    const email = el('input.form__email', {type: 'email', placeholder: 'type email'});
    const form = el('form.form', [email, el('input.form__password'), this.state.activeForm==='signUp' && el('input.form__repeat')]);
    return el('h1', ['Start page', form]);
  }
}