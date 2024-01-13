const TextInputField = ({ id, name, className, props }) => {
	return <input id={id} name={name} className={className} {...props} />;
};

export default TextInputField;
