import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import {useEffect, useState} from 'react'

function App() {

  const [showItems, setShowItems] = useState([])
  const [search, setSearch] = useState('')

  const itemDeleteHandle = (id) => {
    const newListing = showItems.filter(i => i.id !== id)
    setShowItems(newListing)
  }

  const searchResults = showItems.filter(shw => shw.description.toLowerCase().includes(search.toLowerCase()))

  useEffect(
    () => {
    fetch('http://localhost:6001/listings')
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
      setShowItems(data)
    })
  }, [])
  console.log(showItems)

  return (
    <div className="app">
      <Header onSearch={setSearch}/>
      <ListingsContainer showItems={searchResults} itemDeleteHandle={itemDeleteHandle} />
    </div>
  );
}

export default App;
