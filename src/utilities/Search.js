/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const handleSearch = (e) => {
	const searchText = e.target.value.toLowerCase();
	const matchedResult = products.filter((elem) => elem.name.toLowerCase().includes(searchText));
};

export default handleSearch;
