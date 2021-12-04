const Person = (props) => {
	let name = props.name.length > 8 ? props.name.substring(0, 6) : props.name;
	let vote = props.age < 18 ? "you must be 18": "please go vote!";
	
	return (
	<div>
		<p>Learn some information about this person</p>
		name: {name} age: {props.age}

		<ul>
			Hobbies
			{props.hobbies.map(h => <li>{h}</li>)}
		</ul>

		<h3>{vote}</h3>
	</div>
	)
}