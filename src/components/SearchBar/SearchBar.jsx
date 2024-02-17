import { useId } from "react";
import { useDispatch } from "react-redux";

import css from "./SearchBar.module.css";

import { filterNumbers } from "../../redux/FilterContacts/filterSlice";

export const SearchBar = () => {
  const id = useId();
  const dispatch = useDispatch();
  const onChange = (e) => dispatch(filterNumbers(e.target.value.trim()));
  return (
    <div className={css.search}>
      <label htmlFor={id}>Find contact by name</label>
      <input
        type="text"
        id={id}
        className={css.input}
        onChange={onChange}
        placeholder="Search"
        name="search"
      />
    </div>
  );
};
