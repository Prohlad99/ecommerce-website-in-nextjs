import { useState } from "react";
import { GoSearch } from "react-icons/go";

const SearchBar = () => {
	const [searchTxt, setSearchTxt] = useState("");

	const handleSearch = () => {
		console.log(searchTxt);
		setSearchTxt("");
	};
	return (
		<>
			{/* search bar  */}

			<span className="relative flex items-center p-1">
				<input
					className="px-2 py-1 rounded-l-md border-[1px] outline-none"
					type="text"
					placeholder="Search here..."
					onChange={(e) => setSearchTxt(e.target.value)}
					value={searchTxt}
				/>
				<button
					className="p-2 bg-black text-slate-50 rounded-r-md "
					onClick={handleSearch}
				>
					<GoSearch />
				</button>
			</span>
			{/* search bar end  */}
		</>
	);
};

export default SearchBar;
