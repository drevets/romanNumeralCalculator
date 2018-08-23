import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import './App.css';
import { parseUserInput, romanNumeralMath, operators, multiply, add, subtract, divide } from './calculator';

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: '',
      expression: '',
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    let [operand1, operand2, operator] = parseUserInput(this.state.expression);
    let calculatedExpression = romanNumeralMath(
      operand1,
      operand2,
      operator,
      operators
    );
    this.setState({ result: calculatedExpression });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Let's Add Some Roman Numerals</h1>
        </header>

        <Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <Form.Input
            name='expression'
            placeholder={`Please enter an expression in the following format: VI + VI (include spaces between the numerals)`}
          />
          <Form.Button>Submit</Form.Button>
        </Form>
        <h1>{this.state.result}</h1>
      </div>
    );
  }
}

export default App;
