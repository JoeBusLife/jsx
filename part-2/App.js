const App = () => {
	return (
		<div>
			<Tweet username="Georgio1337" name="Georgio" date={new Date().toLocaleString()} message="My name is Georgio, but..."/>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById("root"))