const App = () => {
	return (
		<div>
			<Person name="Georgio" age={18} hobbies={["creeping", "killing", "frizbee"]}/>
			<Person name="Hilldelga" age={77} hobbies={["Stomping", "Running", "Baking"]}/>
			<Person name="Lamp" age={3} hobbies={["Brightening spaces up", "Standing around", "Energy"]}/>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById("root"))