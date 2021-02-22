const LoginForm = ({
	username,
	password,
	setUsername,
	setPassword,
	handleLogin,
}) => {
	return (
		<div>
			<h2>log in to the app</h2>
			<form onSubmit={handleLogin}>
				<div>
					username:
					<input
						name='Username'
						type='text'
						value={username}
						onChange={e => {
							setUsername(e.target.value)
						}}
					/>
				</div>
				<div>
					password:
					<input
						name='Password'
						type='password'
						value={password}
						onChange={e => {
							setPassword(e.target.value)
						}}
					/>
				</div>
				<button type='submit'>login</button>
			</form>
		</div>
	)
}

export default LoginForm
