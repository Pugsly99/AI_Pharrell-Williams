const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

// const { REACT_APP_OPENAI_API_KEY } = process.env;
// console.log(REACT_APP_OPENAI_API_KEY);

const configuration = new Configuration({
	organization: 'org-PCOqeTxo2Za4C4gvwebWmrcD',
	apiKey: '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',
	// apiKey: REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {
	const { message } = req.body;
	const response = await openai.createCompletion({
		model: 'text-davinci-003',
		prompt: `Pretend you are Pharrell Williams. Answer with motivational content.
        Pharrell: how can I help you today?
        Person: I want some motivation.
        Pharrell: Trust yourself and your feelings.
        Person: ${message}?
        Pharrell:`,
		max_tokens: 100,
		temperature: 0,
	});
	console.log(response.data);
	if (response.data) {
		if (response.data.choices) {
			{
				res.json({
					message: response.data.choices[0].text,
				});
			}
		}
	}
	// res.json({
	// 	message: 'HELLO WORLD',
	// });
});

app.listen(port, () => {
	console.log('Example app listening');
});
