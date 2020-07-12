import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "JPyhlZpGdLQeeUECbC"
    };
  }

  search(query) {
    //todo : api
    fetch()
      .then(reponse => response.json())
      .then(data => console.log(data))
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
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
