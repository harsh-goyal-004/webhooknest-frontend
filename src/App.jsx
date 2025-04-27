import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import axios from "axios";
import UniqueURL from "./components/UniqueURL";
import List from "./components/List";
import RequestDetails from "./components/RequestDetails";

function App() {
  const [link, setLink] = useState("");
  const [requestLogs, setRequestLogs] = useState();
  const apiUrl = import.meta.env.VITE_API_URL;

  // Check if a unique URL already exist in localStorage or else generate one
  useEffect(() => {
    const binId = localStorage.getItem("BinId");

    if (binId !== null) {
      setLink(`${apiUrl}/${binId}`);
    } else {
      axios
        .get(`${apiUrl}/bins`)
        .then((response) => {
          setLink(response.data.endpoint);
          localStorage.setItem("BinId", response.data.binId);
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
