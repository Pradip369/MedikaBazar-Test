import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import AddItem from './Component/AddItem';
import { MAIN_API_URL } from './Component/ApiUrl';
import MenuBar from './Component/MenuBar';
import Search from './Component/Search';
import TableData from './Component/TableData';

export const App = () => {

  const [tableItem, setTableItem] = useState([]);

  useEffect(() => {

    let getData = async () => {
      const res = await axios.get(MAIN_API_URL + `product/`);
      setTableItem(res.data);
    }
    getData()
    return () => {
      setTableItem([])
    };
  }, []);


  return (
    <Fragment>
      <MenuBar />
      <Search setTableItem={setTableItem} />
      <AddItem tableInfo={{ tableItem, setTableItem }} />
      <TableData tData={tableItem} />
    </Fragment>
  )
};