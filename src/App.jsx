import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import axios from "axios";
import UniqueURL from "./components/UniqueURL";

function App() {
  const [link, setLink] = useState("");

  // Check if a unique URL already exist in localStorage or else generate one
  useEffect(() => {
    const checkLink = localStorage.getItem("uniqueURL");

    if (checkLink !== null) {
      setLink(checkLink);
    } else {
      axios
        .get("http://localhost:8080/api/bins")
        .then((response) => {
          setLink(response.data.endpoint);
          localStorage.setItem("uniqueURL", response.data.endpoint);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="pt-30">
        <UniqueURL uniqueURL={link} />
      </main>
    </>
  );
}

export default App;
