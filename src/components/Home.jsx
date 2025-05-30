import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import UniqueURL from "./UniqueURL";
import List from "./List";
import RequestDetails from "./RequestDetails";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Loading from "./Loading";

function Home({ handleLogs }) {
  const [link, setLink] = useState("");
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  const isMobile = useMediaQuery("(max-width:770px)"); //For Mobile Responsiveness

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
        .catch((error) => console.log("Error while fetching URL : ", error));
    }
  }, [link]);

  // Navigate to new screen in mobile
  function mobileLogs(log) {
    handleLogs(log);
    navigate("/request-details");
  }

  //Stay on the same screen in desktop
  function desktopLogs(log) {
    handleLogs(log);
  }

  return (
    <>
      {link !== "" ? (
        <>
          {isMobile ? (
            <>
              {/* Mobile View */}
              <header>
                <Header />
              </header>
              <main className="w-full mt-18">
                <div className="w-full">
                  <UniqueURL uniqueURL={link} />
                  <List uniqueURL={link} logs={mobileLogs} />
                </div>
              </main>
            </>
          ) : (
            <>
              {/* Desktop View */}
              <header>
                <Header />
              </header>
              <main className="pt-17 flex h-full">
                <div className="w-1/3 min-h-screen bg-gray-100">
                  <UniqueURL uniqueURL={link} />
                  <List uniqueURL={link} logs={desktopLogs} />
                </div>
                <div className={"w-2/3"}>
                  <RequestDetails />
                </div>
              </main>
            </>
          )}
          {/* Footer */}
          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Home;
