class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputQuery: '',
    };
  }

  handleInput(e) {
    this.props.handleSearch(e.target.value),
    this.setState({
      inputQuery: e.target.value,
    });
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input onChange={(e) => this.handleInput(e)} className="form-control" type="text" />
        <button className="btn hidden-sm-down">
          <span onClick={(e) => props.handleSearch(console.log(JSON.stringify(this)))} className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );

  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
