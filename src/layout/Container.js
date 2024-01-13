import { Outlet } from 'react-router-dom';

const Container = () => {
	return (
		<div className="w-9/12 h-full overflow-auto scrollbar-hide">
			<Outlet />
		</div>
	);
};

export default Container;
