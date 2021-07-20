import React from "react";

const Userform = ({ searchResult }) => {
  return (
    <div className="form-user">
      <label>USER</label>
      <form>
        <div className="form-input-container__user">
          <input className="form-input box" placeholder="Full Name" value={searchResult.fullName} />
        </div>
        <div className="form-input-container__user">
          <input className="form-input box" placeholder="Email Address" value={searchResult.email} />
        </div>
        <div className="form-input-container__user">
          <input className="form-input birthdate" placeholder="Birthdate" value={searchResult.birthdate} />
          <input className="form-input box" placeholder="Gender" value={searchResult.gender} />
        </div>

        <div className="form-input-container__user">
          <input className="form-input ext" placeholder="+65" value={searchResult.phoneNumberExt} />
          <input className="form-input box" placeholder="Phone Number" value={searchResult.phoneNumber} />
        </div>
      </form>
    </div>
  );
};

export default Userform;
