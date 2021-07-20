import React, { useState, useEffect } from "react";
import Searchbar from "../components/Searchbar/Searchbar";
import Userform from "../components/Form/Userform";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState({});

  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]);

  return (
    <div className="main">
      <Searchbar loading={loading} setLoading={setLoading} setSearchResult={setSearchResult} />
      <br/>
      <Userform searchResult={searchResult} />
    </div>
  );
}
