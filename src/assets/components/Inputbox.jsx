import "bootstrap/dist/css/bootstrap.min.css";

const Input = ({
	labelText,
	type,
	placeholder,
	classN,
	classLabelN,
	name,
	value,
	onChange,
}) => {
	return (
		<>
			<label className={classLabelN}>{labelText}</label>
			<input
				type={type}
				placeholder={placeholder}
				className={classN}
				name={name}
				onChange={onChange}
				value={value}
			/>
		</>
	);
};

export default Input;
