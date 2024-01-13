import { MdEdit } from 'react-icons/md';

const Documents = () => {
	return (
		<div className="my-4">
			<div className="flex items-center justify-between">
				<h2 className="font-medium">Documents Data </h2>
				<MdEdit
					size={18}
					className="cursor-pointer"
					// onClick={handleEdit}
				/>
			</div>

			{/* inEditMode ? '' */}
		</div>
	);
};

export default Documents;
