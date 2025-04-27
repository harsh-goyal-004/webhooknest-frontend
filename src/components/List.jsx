import React, { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";

function List({ uniqueURL, handleLogs }) {
  const [requestList, setRequestList] = useState([]);

  // Set dayjs as Relative Time
  dayjs.extend(relativeTime);
  dayjs.extend(utc);

  // Check for new requests after every 1 second
  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
        .get(uniqueURL)
        .then((response) => {
          setRequestList(response.data);
        })
        .catch((error) => {
          console.log("Error while fetching list : " + error);
        });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [uniqueURL]);

  return (
    <>
      <div className="flex flex-col border-t-1 text-center hover:cursor-pointer  bg-gray-50 ">
        {Array.isArray(requestList) && requestList.length > 0
          ? requestList.map((request, index) => (
              <div
                className="py-2 border-b-1 w-full active:bg-gray-100 font-medium"
                onClick={() => handleLogs(request)}
                key={index}
              >
                {dayjs.utc(request.timestamp).local().fromNow()}
              </div>
            ))
          : null}
      </div>
    </>
  );
}

export default List;
