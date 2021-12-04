const Tweet = (props) => {
	return (
	<p>
		<h3>{props.name} @{props.username} · {props.date}</h3>
		{props.message}
	</p>
	)
}