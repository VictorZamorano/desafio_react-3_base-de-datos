import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";

const Header = ({ classN, classNh1, texth1, handleSearch, valueSearch }) => {
	return (
		<header className={classN}>
			<div>
				<h1 className={classNh1}>{texth1}</h1>
			</div>
			<Search
				type={"text"}
				classN={"border border-3 border-warning rounded"}
				placeholder={"¿Buscas a alguien?"}
				value={valueSearch}
				handleSearch={handleSearch}
			/>
		</header>
	);
};

export default Header;
