import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(setQuery(text));
    setText("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={submitHandler} className="flex gap-3">
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          required
          type="text"
          placeholder="Search Anything....."
          className="flex-1 px-4 py-3
                     border border-gray-300
                     rounded-lg
                     outline-none
                     text-gray-700
                     placeholder-gray-400
                     focus:border-blue-500
                     focus:ring-2
                     focus:ring-blue-100
                     transition duration-200"
        />

        <button
          type="submit"
          className="px-6 py-3
                     bg-blue-600
                     text-white
                     font-medium
                     rounded-lg
                     hover:bg-blue-700
                     active:scale-95
                     transition duration-200"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
