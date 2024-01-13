/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import { useContext, useState } from 'react';

import { UserContext } from '../App';
import adminRoute from '../routes/AdminRoutes';
import chattogramManagerRoute from '../routes/ChattogramManagerRoute';
import dhakaManagerRoute from '../routes/DhakaManagerRoutes';
import SidebarMenu from './SidebarMenu';

const Sidebar = () => {
	const [open, setOpen] = useState(true);

	const user = useContext(UserContext);

	let routes = [];

	if (user === 'dhaka') {
		routes = dhakaManagerRoute;
	} else if (user === 'chattogram') {
		routes = chattogramManagerRoute;
	} else if (user === 'admin') {
		routes = adminRoute;
	} else {
		routes = [];
	}

	return (
		<div className="bg-primary px-5 h-screen overflow-auto scrollbar-hide w-3/12  sticky top-0 pt-5">
			{routes.map((item) => (
				<SidebarMenu key={item.menu.name} menu={item.menu} subMenu={item.subMenu} isOpen={open} />
			))}
		</div>
	);
};

export default Sidebar;
