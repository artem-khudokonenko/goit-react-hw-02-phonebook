import { Component } from 'react';
import { nanoid } from 'nanoid'



export class FormPhonebook extends Component {
    state = {
      name: '',
      number: '',
    };
  
    // Генерация уникальных идентификаторов для полей формы
    nameInputId = nanoid();
    numberInputId = nanoid();
  
    // Обработка отправки формы
    handleSubmit = event => {
      event.preventDefault();
  
      // Вызов функции onSubmit из родительского компонента с передачей объекта контакта
      this.props.onSubmit({ name: this.state.name, number: this.state.number });
  
      // Сброс состояния формы
      this.reset();
    };
  
    // Обработка изменения значений полей формы
    handleChange = event => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    };
  
    // Сброс состояния формы
    reset = () => {
      this.setState({ number: '', name: '' });
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
  
          <label htmlFor={this.numberInputId}>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
  
          <button type="submit">Add contact </button>
        </form>
      );
    }
  }