import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({showItems, itemDeleteHandle}) {

  const gList = showItems.map(item => <ListingCard key={item.id} card={item} itemDeleteHandle={itemDeleteHandle} />)

  return (
    <main>
      <ul className="cards">
        {gList}
      </ul>
    </main>
  );
}

export default ListingsContainer;
