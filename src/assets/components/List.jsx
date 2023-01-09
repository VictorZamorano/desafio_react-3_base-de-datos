const List = ({ tittle, mapColab, classN, classNtittle, classNul }) => {
	const listItem = mapColab.map(({ id, name, email }) => {
		return (
			<li className="list-group-item" key={id}>
				<b>{name}</b> - {email}
			</li>
		);
	});

	return (
		<>
			<div className={classN}>
				<h2 className={classNtittle}>{tittle}</h2>
				<ul className={classNul}>{listItem}</ul>
			</div>
		</>
	);
};

export default List;
