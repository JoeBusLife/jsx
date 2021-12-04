const App = () => {
	return (
		<div>
			<FirstComponent />
			<NamedComponent name="Georgio" />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById("root"))