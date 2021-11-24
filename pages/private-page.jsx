import React, { useEffect, useState } from "react";
import axios from "axios";

const PrivatePage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const loadProtectedData = async () => {
      try {
        const response = await axios.get("/api/my/protected-data");
        const { data } = response.data;
        setData(data);
      } catch (e) {}
    };

    loadProtectedData();
  }, []);
  return (
    <>
      {!data ? (
        <div>Loading ...</div>
      ) : (
        <>
          <h3>Protected Data</h3>
          <pre>{JSON.stringify({ data }, null, 2)}</pre>
        </>
      )}
    </>
  );
};

export default PrivatePage;
