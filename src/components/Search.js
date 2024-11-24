import React from "react";

function Search({filterCards}) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={filterCards}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
