import React from 'react';
import Question from './Question.jsx'

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      numQuestions: 5,
      questionsAnswered: 0,
      correctlyAnswered: 0,
      currentQuestion: 0,
    };
  }


  onQuestionChange(bool) {
    console.log(bool);
    this.setState((state) => ({
      questionsAnswered: state.questionsAnswered + 1,
      correctlyAnswered: bool ? state.correctlyAnswered + 1 : state.correctlyAnswered,
      currentQuestion: state.currentQuestion + 1
    }), () => console.log(this.state));
    // console.log(this.state);
  }


  render() {
    return (
      <div className="App">
        <Question key={this.state.currentQuestion} questionID={this.state.currentQuestion} onQuestionChange={(bool) => this.onQuestionChange(bool)}/>
      </div>
    );
  }
}

export default App;