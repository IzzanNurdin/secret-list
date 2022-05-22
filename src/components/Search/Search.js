import React from "react";
import "./style.css";
import { IoSearch } from "react-icons/io5";

const Search = ({ query, setQuery, sort, setSortBy }) => {
  return (
    <form className="form-wrapper">
      <div className="input-wrapper">
        <input
          placeholder="Cari nama atau bank"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <IoSearch />
      </div>
      <select value={sort} onChange={(e) => setSortBy(e.target.value)}>
        <option>Urutkan</option>
        <option value="asc-name">Nama A-Z</option>
        <option value="desc-name">Nama Z-A</option>
        {/* Optional */}
        <option value="asc-date">Tanggal terbaru</option>
        <option value="desc-date">Tanggal terlama</option>
      </select>
    </form>
  );
};

export default Search;
