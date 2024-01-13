import Header from '../../components/breadCrumbs/Header';
import AddProfile from '../../components/common/AddProfile';

const AddSupplier = () => {
	const routes = [
		{
			path: '/',
			title: 'Home',
		},
		{
			path: '/people/suppliers',
			title: 'Supplier List',
		},
		{
			path: '',
			title: 'View Supplier',
		},
	];

	return (
		<div className="">
			<Header routes={routes} />
			<AddProfile />
		</div>
	);
};

export default AddSupplier;
