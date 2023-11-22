function Message() {
	const name = 'Felipe';
	if (name) return <h1>Hello {name}</h1>;
	return <h3>Hola</h3>;
}

export default Message;
