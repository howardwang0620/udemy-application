import React from 'react';
import Question from './Question.jsx';
import './styles/index.css';

class App extends React.Component {

  //Class App will hold question answering data
  constructor() {
    super();

    //explanatory variables -> will hold only 5 questions
    this.state = {
      numQuestions: 5,
      questionsAnswered: 0,
      correctlyAnswered: 0,
      currentQuestion: 0,
    };
  }

  //callback function for submit answer button press
  onQuestionChange(bool) {
    //increment to the next question and rerender
    this.setState((state) => ({
      questionsAnswered: state.questionsAnswered + 1,
      correctlyAnswered: bool ? state.correctlyAnswered + 1 : state.correctlyAnswered,
      currentQuestion: state.currentQuestion + 1
    }));
  }


  //render a question or quiz results based on index of current question
  render() {
    return (
      <div className="App">
        { this.state.currentQuestion < this.state.numQuestions 
          ? <Question key={this.state.currentQuestion} questionID={this.state.currentQuestion} 
                  onQuestionChange={(bool) => this.onQuestionChange(bool)}/>
          : <div className="flex-wrapper"> 
              <h1>You scored: {this.state.correctlyAnswered}/{this.state.numQuestions} 🎉🎉</h1>
            </div>
        }
      </div>
    );
  }
}

export default App;