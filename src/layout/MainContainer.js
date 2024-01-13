/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import { useState } from 'react';

import Container from './Container';
import Sidebar from './Sidebar';

const MainContainer = () => {
	const [user, setUser] = useState('Dhaka');
	return (
		<main className="bg-gray-100">
			<div className="flex h-full">
				<Sidebar />
				<Container />
			</div>
		</main>
	);
};

export default MainContainer;
