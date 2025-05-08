import React, { useState } from "react";
import Home from "./components/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RequestDetails from "./components/RequestDetails";
import { requestInfoContext } from "./context/context";
import LandingPage from "./components/LandingPage";

function App() {
  const [requestLogs, setRequestLogs] = useState();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home handleLogs={handleLogs} />} />
        <Route path="/request-details" element={<RequestDetails />} />
      </Route>
    )
  );

  function handleLogs(log) {
    setRequestLogs(log);
  }

  return (
    <requestInfoContext.Provider value={requestLogs}>
      <div>
        <RouterProvider router={router} />
      </div>
    </requestInfoContext.Provider>
  );
}

export default App;
