import React from "react";
import Search from "./Search";

function Header({onSearch}) {

  // const handleSearch = (search) => {
  //   const srch = showItems.filter(s => s.includes(search))
  //   const searchList =
  // }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={onSearch}/>
    </header>
  );
}

export default Header;
