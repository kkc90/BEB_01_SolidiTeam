import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemList from './ItemList/ItemList';
import Items from './ItemList/Items';
const Browse = () => {
  const [data, setData] = useState([]);
  const [clickedData, setClickedData] = useState([]);
  useEffect(() => {
    const options = { method: 'GET' };

    const dataLoad = async () => {
      const dataList = await fetch(
        'https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=40',
        options
      )
        .then((response) => response.json())
        .catch((err) => console.error(err));
      setData(dataList.assets);
      console.log(dataList.assets);
    };
    dataLoad();
  }, []);

  const onClickedItem = (e) => {
    console.log(e);
    setClickedData(e);
    console.log(clickedData);
  };

  return (
    <div>
      <ItemList data={data} onClickedItem={onClickedItem}></ItemList>
    </div>
  );
};

export default Browse;
