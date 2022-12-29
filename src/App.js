import React, { useState } from 'react';
import './App.css';

function App() {
	const [message, setMessage] = useState('');
	const [response, setResponse] = useState('');

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
			<h1>A Conversation With Pharrell Williams</h1>
			<div className='Conversation'>
				<form onSubmit={handleSubmit}>
					<textarea
						value={message}
						placeholder='Ask Pharrell anything'
						onChange={(e) => setMessage(e.target.value)}
					></textarea>
					<br />
					<button type='submit'>Submit</button>
				</form>
				{response && (
					<div className='Response'>
						<b>Pharrell:</b> {response}
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
