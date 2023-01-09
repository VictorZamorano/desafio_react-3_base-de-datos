import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./Inputbox";

const Form = ({
	handleSubmit,
	valueName,
	valueEmail,
	changeName,
	changeEmail,
	errorMessage,
	classNdivForm,
}) => {
	return (
		<>
			<div className={classNdivForm}>
				<form className="m-5" onSubmit={handleSubmit}>
					<div>
						<span>{errorMessage}</span>
					</div>
					<div className="form-group mb-2">
						<Input
							labelText={"Nombre"}
							classLabelN={"form-label fw-bold"}
							name="newColaborador"
							classN={"form-control"}
							placeholder={"ingresa tu nombre"}
							value={valueName}
							onChange={changeName}
						></Input>
					</div>
					<div className="form-group">
						<Input
							labelText={"Email"}
							type={"email"}
							classLabelN={"form-label fw-bold"}
							name="newEmail"
							classN={"form-control"}
							placeholder={"ingresa tu email"}
							value={valueEmail}
							onChange={changeEmail}
						></Input>
					</div>
					<button className="btn btn-primary mt-3 fw-bold w-100" type="submit">
						Agregar
					</button>
				</form>
			</div>
		</>
	);
};

export default Form;
