import React from "react";
import { useForm } from "react-hook-form";
import { search } from "../../services/userService";
import "./Searchbar.css";
const parseData = data => {
  console.log(data);
  return {
    fullName: data.name,
    email: data.email.address,
    birthdate: data.birthdate.slice(0, 10), // parse to date
    gender: data.gender,
    phoneNumber: data.phoneNumbers[0] ? data.phoneNumbers[0].number.toString() : "",
    phoneNumberExt: data.phoneNumbers[0].ext || ""
  };
};
const Searchbar = ({ loading, setLoading, setSearchResult }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async ({ searchterm }) => {
    setLoading(true);

    const res = await search(searchterm);

    if (res.status === 200) {
      const responseData = res.data.users[0];
      console.log(responseData);
      if (responseData === undefined) {
        setSearchResult({});
        console.log("no data");
      } else {
        setSearchResult(parseData(responseData));
      }
    }

    setLoading(false);
  };

  return (
    <div className="searchbar">
      <label>SEARCH EXISTING USER</label>
      <br />
      <div className="searchbar-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="searchbar-search"
            placeholder="Email or Phone or Full Name"
            name="searchterm"
            {...register("searchterm", { required: true })}
          />
          <input className="button" type="submit" value={loading ? "Loading.." : "Search"} />
        </form>
      </div>
    </div>
  );
};

export default Searchbar;
