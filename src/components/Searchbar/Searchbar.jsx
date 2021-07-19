import React from "react";
import { useForm } from "react-hook-form";
import { search } from "../../services/userService";
const Searchbar = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async ({ searchterm }) => {
    console.log(searchterm);
    const res = await search(searchterm);
    console.log(res);
  };
  
  return (
    <div className="searchbar">
      <label>SEARCH EXISTING USER</label>
      <div className="searchbar-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Email or Phone or Full Name"
            name="searchterm"
            {...register("searchterm", { required: true })}
          />
          <input className="button" type="submit" value="search" />
        </form>
      </div>
    </div>
  );
};

export default Searchbar;
