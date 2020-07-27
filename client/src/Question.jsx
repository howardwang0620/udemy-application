import React from 'react';
import './styles/Question.css';

class Question extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			questionID: this.props.questionID,
			question: null,
			options: [],
			selected: -1,
			answer: null,
			answered: false,
		};
	}

	componentDidMount() {
		fetch(`/getQuestion/${this.state.questionID}`)
		.then(res => res.json())
		.then(res => {

			//convert options obj to options array
			let options = [];
			for(var optionNum in res.options) {
				options.push(res.options[optionNum]);
			}
			//update state
			this.setState({
				question: res.question,
				options: options,
				answer: parseInt(res.answer),
			});
		});
 	}

 	handleOnChange(e) {

 		let selected = this.state.selected;
 		if(selected === e.target.value) selected = -1;
 		else selected = e.target.value;

 		this.setState({
 			selected: selected
 		});
 	}

	handleOnClick(e) {
		this.props.onQuestionChange(this.state.selected == this.state.answer);
 	}

	render() {
		return (
			<div className="question-wrapper">
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
				<input className="next-button" type="button" value="Next" onClick={(e) => this.handleOnClick(e)}/>
			</div>
		)
	}
}

export default Question;