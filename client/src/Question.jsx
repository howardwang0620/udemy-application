import React from 'react';
import './styles/styles.css';

//Basic component that contains a state and will hold information on each question
class Question extends React.Component {

	//questions will have a question id, question string, option array,
	//currently selected option (selected), answer index
	constructor(props) {
		super(props);

		this.state = {
			questionID: this.props.questionID,
			question: null,
			options: [],
			selected: -1,
			answer: null,
		};
	}

	//backend api call for populating question with necessary information
	componentDidMount() {
		fetch(`/getQuestion/${this.state.questionID}`)
		.then(res => res.json())
		.then(res => {

			//questions recieved as an obj,
			//will convert to array for easier handling
			let options = [];
			for(var optionNum in res.options) {
				options.push(res.options[optionNum]);
			}

			//update state based on fetch
			this.setState({
				question: res.question,
				options: options,
				answer: res.answer,
			});
		});
 	}

 	//handles on change for check button
 	//makes sure at most one button is selected at a time
 	handleOnChange(e) {

 		//use selected to determine what index of options to point towards
 		//point towards -1 if selected value is not changed (clicked on twice)
 		let selected = this.state.selected;
 		if(selected === e.target.value) selected = -1;
 		else selected = e.target.value;

 		this.setState({
 			selected: selected
 		});
 	}

 	//passes boolean (T if selected answer was correct, F if not) to callback function for handling
	handleOnClick(e) {
		var pass = this.state.selected == this.state.answer || this.state.answer == "PASS";
		this.props.onQuestionChange(pass);
 	}

 	//renders the question, array of options, and a next button
	render() {
		return (
			<div className="flex-wrapper">
				<div className="question">
					<h1>{this.state.question}</h1>
					<br/>
					<div className="options">
						{this.state.options.map((item, i) => {
							return <div key={i}>
									<input
										type="checkbox"
										id={"check:" + i}
										value={i}
										onChange={(e) => this.handleOnChange(e)}
										checked={this.state.selected == i}
									/>
									<label htmlFor={"check:" + i}>{item}</label>
									</div>
						})}
					</div>
				</div>
				<input className="next-button" type="button" value="Next" 
				onClick={(e) => this.handleOnClick(e)} disabled={this.state.selected == -1}/>
			</div>
		)
	}
}

export default Question;