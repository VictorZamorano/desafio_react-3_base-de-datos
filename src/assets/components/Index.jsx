import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BaseColaboradores } from "./BaseColaboradores";
import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import List from "./List";

const Index = () => {
	const [colaboradores, setColaboradores] = useState(BaseColaboradores);
	const [colaboradoresFilt, setColaboradoresFilt] = useState(BaseColaboradores);
	const [newColaborador, setNewColaborador] = useState("");
	const [newEmail, setNewEmail] = useState("");
	const [error, setError] = useState(false);
	const [search, setSearch] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (newColaborador.trim() == "" || newEmail.trim() == "") {
			setError(true);
			return;
		}
		setError(false);

		const newColab = {
			id: Date.now(),
			name: newColaborador,
			email: newEmail,
		};

		setColaboradores([...colaboradores, newColab]);
		setColaboradoresFilt([...colaboradores, newColab]);

		setNewColaborador("");
		setNewEmail("");
	};

	const handleSearch = (e) => {
		const searchValue = e.target.value;

		console.log(colaboradores);

		if (searchValue != "") {
			const filterItems = colaboradores.filter((colaborador) => {
				return (
					colaborador.name.toLowerCase().includes(searchValue.toLowerCase()) ||
					colaborador.email.toLowerCase().includes(searchValue.toLowerCase())
				);
			});

			setColaboradoresFilt(filterItems);
		} else {
			setColaboradoresFilt(colaboradores);
		}
	};

	return (
		<>
			<div>
				<Header
					classN={
						"bg-dark d-flex justify-content-between align-items-center p-3"
					}
					classNh1={"text-white"}
					texth1={"Buscador de colaboradores"}
					handleSearch={handleSearch}
				/>
			</div>
			<div className="d-flex justify-content-center">
				<Form
					classNdivForm={"border border-primary m-4 w-50 col-6 rounded"}
					handleSubmit={handleSubmit}
					valueName={newColaborador}
					changeName={(e) => setNewColaborador(e.target.value)}
					valueEmail={newEmail}
					changeEmail={(e) => setNewEmail(e.target.value)}
					errorMessage={
						error ? (
							<p className="bg-danger text-white text-center p-1 rounded fw-bold">
								Debes llenar todos los campos
							</p>
						) : (
							<h3 className="text-center fw-bold">
								Formulario de Colaboradores
							</h3>
						)
					}
				/>
				<List
					mapColab={colaboradoresFilt}
					filterColab={search}
					changeSearch={(e) => setSearch(e.target.value)}
					classN={"m-4 col-5 "}
					classNtittle={
						"text-center bg-success m-0 p-2 text-white fw-bold rounded-top"
					}
					tittle="Lista de colaboradores"
					classNul={"list-group text-center"}
				/>
			</div>
			<Footer
				classN={"bg-dark text-white text-center p-3"}
				text={"Colaboradores empresa Anonima"}
			></Footer>
		</>
	);
};

export default Index;
