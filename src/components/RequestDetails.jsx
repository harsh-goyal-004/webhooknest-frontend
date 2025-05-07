import React, { useContext } from "react";
import { requestInfoContext } from "../context/context";

function RequestDetails() {
  const requestLog = useContext(requestInfoContext);
  let requestHeader;
  let requestBody;
  if (requestLog != null) {
    requestHeader = requestLog.requestHeader;
    requestBody = requestLog.requestBody;
  }
  return (
    <div className="mb-10">
      {/* Request Header Details */}
      {requestLog && (
        <div className="pt-4 mx-4">
          <div className="text-lg font-medium">Request Header</div>
          <div className="border-1 p-4 rounded-lg  mx-2 mt-1 overflow-x-auto text-sm">
            {Object.entries(requestHeader).map(([key, value], index) => (
              <div key={index} className="flex">
                <div className="w-full">
                  <span className="text-blue-400 ">{key}</span> :&nbsp;{" "}
                  <span className="text-gray-500">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Request Body Details */}
      {requestLog && (
        <div className="pt-4 mx-4">
          <div className="text-lg font-medium">Request Body</div>
          <div className="border-1 p-4 rounded-lg  mx-2 mt-1 overflow-x-auto text-sm">
            {Object.entries(requestBody).map(([key, value], index) => (
              <div key={index} className="flex">
                <div className="w-full">
                  <span className="text-blue-400">{key}</span> :&nbsp;{" "}
                  <span className="text-gray-500">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default RequestDetails;
