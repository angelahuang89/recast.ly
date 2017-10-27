class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      video: exampleVideoData[0],
      videos: exampleVideoData
    };
  }

  componentDidMount() {
    this.handleSearch('rickroll');
  }

  handleClick(key) {
    this.setState({
      video: key
    });
  }

  handleSearch(q) {
    this.props.searchYouTube({key: YOUTUBE_API_KEY, query: q, max: 5}, (data) => {
      console.log('data', data);
      this.setState({
        video: data[0],
        videos: data,
      });
    });
  }

  render() {
  
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearch={this.handleSearch}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.video}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} handleClick={this.handleClick} />
          </div>
        </div>
      </div>
    );

  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
