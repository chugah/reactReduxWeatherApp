import React from 'react';
import { Component } from 'react';
import WeatherList from 'weather_list';

import SearchBar from 'search_bar';

export default class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar/>
      	<WeatherList/>
      </div>
    );
  }
}