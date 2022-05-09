import React, { useState, useEffect } from "react";

const useApi = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const fetchApi = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setLoading(false);
        setData(json);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { loading, data };
};

export default useApi;

//call here in App.js

import React from 'react';
import './style.css';
import useApi from './useApi';
export default function App() {
  const { loading, data } = useApi(
    'https://jsonplaceholder.typicode.com/users'
  );
  if (loading) return <h1>Loading</h1>;
  return (
    <div>
      <h1>Data fetch successfully</h1>
      {JSON.stringify(data)}
    </div>
  );
}