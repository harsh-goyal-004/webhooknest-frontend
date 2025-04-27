import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import axios from "axios";
import UniqueURL from "./components/UniqueURL";
import List from "./components/List";
import RequestDetails from "./components/RequestDetails";

function App() {
  const [link, setLink] = useState("");
  const [requestLogs, setRequestLogs] = useState();

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

  const handleLogs = (log) => {
    setRequestLogs(log);
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="pt-17 flex h-full">
        <div className="w-1/3 min-h-screen bg-gray-100">
          <UniqueURL uniqueURL={link} />
          <List uniqueURL={link} handleLogs={handleLogs} />
        </div>
        <div className="w-2/3">
          <RequestDetails requestLog={requestLogs} />
        </div>
      </main>
    </>
  );
}

export default App;
