
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import NavMenu from './components/menu';
const API_KEY = 'AIzaSyCSWgA2OQZJoOhJKODwMFRylcpHB0cr7Wk';


// create a new component it should produce some html
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('puppet ministry calvary chapel');
  }


videoSearch(term) {
  //make a custom youtube search
  YTSearch( {key: API_KEY, term: term}, (videos) => {
    this.setState({ 
      videos: videos,
      selectedVideo: videos[0]
    });
  });
}

  render () {

    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
          <VideoDetail video={ this.state.selectedVideo } />
            <VideoList 
              onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
              videos={ this.state.videos }/>
          <NavMenu />
      </div>
    );
  }
}



//make react display the component in the DOM

ReactDOM.render(<App />, document.querySelector('.container') );


