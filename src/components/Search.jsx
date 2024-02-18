const Search = ({ setSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const city = e.target.name.value;
    setSearch(city);
    e.target.reset();
  };
  return (
    <div className="text-center">
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          name="name"
          placeholder="Enter city name"
          className="px-2 py-1 w-full text-gray-900"
        />
        <button className="bg-black px-3 py-1 text-white font-semibold">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
