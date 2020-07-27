var express = require('express');
var app = express();
const path = require('path');

const url = 'mongodb://udemy:123abc@ds131432.mlab.com:31432/heroku_h4l0gzr3';
var db = require('monk')(url);
var questions = db.get('questions');

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/getQuestion/:id', async (req, res) => {
	const id = req.params.id;
	console.log(id);
	try {
		const questionData = await questions.findOne({qId: id});
		res.send(JSON.stringify(questionData));
		// res.send(questionData);
	} catch(err) {
		throw new Error(err.message);
	}
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`You are now on Port: ${PORT}`);
});
