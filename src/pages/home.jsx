import React, { useState, useEffect } from "react";
import Searchbar from "../components/Searchbar/Searchbar";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState({});
  return <div className="home">
      <Searchbar/>
  </div>;
}
