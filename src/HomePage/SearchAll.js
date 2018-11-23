import React, { Component } from 'react';
import './SearchAll.css'



class SearchAll extends React.Component {
  render() {

    return (

      <form>
        <input className="search" type="text"

          placeholder="Search Dinosaur" />

        <input className="button" type="button" value="Search"/>

       
      </form>

    );

  }

}

export default SearchAll;