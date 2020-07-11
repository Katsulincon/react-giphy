import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const gifs = [
      { id: "JPyhlZpGdLQeeUECbC" },
      { id: "JPyhlZpGdLQeeUECbC" },
    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="JPyhlZpGdLQeeUECbC" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
