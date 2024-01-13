/* eslint-disable import/no-cycle */
import 'react-datepicker/dist/react-datepicker.css';

import { createContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';

import MainContainer from './layout/MainContainer';
import Login from './pages/login/Login';
import AddProduct from './pages/products/AddProduct';
import ViewProduct from './pages/products/ViewProduct';
import Registration from './pages/registration/Registration';
import AddSupplier from './pages/suppliers/AddSupplier';
import EditSupplier from './pages/suppliers/EditSupplier';
import ViewSupplier from './pages/suppliers/ViewSupplier';
import adminRoute from './routes/AdminRoutes';
import chattogramManagerRoute from './routes/ChattogramManagerRoute';
import dhakaManagerRoute from './routes/DhakaManagerRoutes';

export const UserContext = createContext();
const App = () => {
	// eslint-disable-next-line no-unused-vars
	const [user, setUser] = useState('admin');
	let routes = [];

	if (user === 'dhaka') {
		routes = dhakaManagerRoute;
	} else if (user === 'chattogram') {
		routes = chattogramManagerRoute;
	} else if (user === 'admin') {
		routes = adminRoute;
	}
	return (
		<UserContext.Provider value={user}>
			<Toaster />
			<Routes>
				<Route path="/" element={<MainContainer />}>
					{routes.map((item) =>
						item.subMenu.map((submenu) => (
							<Route key={submenu.path} path={submenu.path} element={<submenu.component />} />
						))
					)}

					<Route path="/product/add-product" element={<AddProduct />} />
					<Route path="/product/view-product/:productID" element={<ViewProduct />} />
					<Route path="/people/supplier/edit-supplier/:id" element={<EditSupplier />} />
					<Route path="/people/supplier/add-supplier" element={<AddSupplier />} />
					<Route path="/people/supplier/view-supplier/:id" element={<ViewSupplier />} />
				</Route>

				<Route path="/login" element={<Login />} />
				<Route path="/registration" element={<Registration />} />
			</Routes>
		</UserContext.Provider>
	);
};
export default App;
