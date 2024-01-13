const Label = ({ htmlFor, className, children, props }) => {
	return (
		<label htmlFor={htmlFor} {...props} className={className}>
			{children}
		</label>
	);
};

export default Label;
