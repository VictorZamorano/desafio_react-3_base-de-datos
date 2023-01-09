const Search = ({ classN, type, placeholder, handleSearch, valueSearch }) => {
	return (
		<div>
			<input
				type={type}
				placeholder={placeholder}
				className={classN}
				onChange={handleSearch}
				value={valueSearch}
			/>
		</div>
	);
};
export default Search;
