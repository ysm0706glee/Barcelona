import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import useSWR from "swr";

import Match from "./components/Match";

const fetcher = (url) =>
  axios.get(url).then((res) => {
    return res.data[0];
  });

const App = () => {
  const [shouldFetch, setShouldFetch] = useState(false);
  const [date, setDate] = useState(null);

  const { data } = useSWR(shouldFetch ? `/match/${date}` : null, fetcher);

  useEffect(() => {
    if (date) {
      setShouldFetch(true);
    }
  }, [date]);

  return (
    <div className="min-h-screen bg-slate-900">
      <form className="mb-20">
        <input
          type="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </form>
      <Match data={data} />
    </div>
  );
};

export default App;
