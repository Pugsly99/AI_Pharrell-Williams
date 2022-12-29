import React, { userState } from 'react';
import './App.css';

function App() {
	const [message, setMessage] = userState('');
	const [response, setResponse] = userState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch('http://localhost:3001/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ message }),
		})
			.then((res) => res.json())
			.then((data) => setResponse(data.message));
	};

	return (
		<div className='App'>
			<form onSubmit={handleSubmit}>
				<textarea
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				></textarea>
				<button type='submit'>Submit</button>
			</form>
			<div>{response}</div>
		</div>
	);
}

export default App;
