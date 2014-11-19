var data = [
  {name: "Ivan Milyutkin", subject: "Bla bla bla", avatar:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQrmD5lfBINhjJJw_iPJGm5JCQc9EWAZGLt96GnpsGWxqdqbXOjXe_1f64", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  {name: "Ivan Milyutkin", subject: "Bla bla bla", avatar:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQrmD5lfBINhjJJw_iPJGm5JCQc9EWAZGLt96GnpsGWxqdqbXOjXe_1f64", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  {name: "Ivan Milyutkin", subject: "Bla bla bla", avatar:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQrmD5lfBINhjJJw_iPJGm5JCQc9EWAZGLt96GnpsGWxqdqbXOjXe_1f64", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  {name: "Ivan Milyutkin", subject: "Bla bla bla", avatar:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQrmD5lfBINhjJJw_iPJGm5JCQc9EWAZGLt96GnpsGWxqdqbXOjXe_1f64", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  {name: "Ivan Milyutkin", subject: "Bla bla bla", avatar:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQrmD5lfBINhjJJw_iPJGm5JCQc9EWAZGLt96GnpsGWxqdqbXOjXe_1f64", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  {name: "Ivan Milyutkin", subject: "Bla bla bla", avatar:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQrmD5lfBINhjJJw_iPJGm5JCQc9EWAZGLt96GnpsGWxqdqbXOjXe_1f64", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  {name: "Ivan Milyutkin", subject: "Bla bla bla", avatar:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQrmD5lfBINhjJJw_iPJGm5JCQc9EWAZGLt96GnpsGWxqdqbXOjXe_1f64", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
];

var MovieItem = React.createClass({
  render: function() {
    return (
         <div className="movie-item movie-item-selected pure-g">
                <div className="pure-u-2-5 center">
                    <img className="movie-avatar" height="138" width="92" src={"http://image.tmdb.org/t/p/w92/" + this.props.avatar}/>
                </div>

                <div className="pure-u-3-5">
                    <h5 className="movie-name">{this.props.name}</h5>
                    <h4 className="movie-subject">{this.props.subject}</h4>
                    <p className="movie-desc">
                    {this.props.text}
                    </p>
                </div>
            </div>
    );
  }
});

var MovieList = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function(){
    this.loadMoviesFromServer();
    // setInterval(this.loadMoviesFromServer, this.props.pollInterval);
  },
  loadMoviesFromServer: function() {
    var self = this;
    $.getJSON("https://api.themoviedb.org/3/movie/upcoming?api_key=c2c73ebd1e25cbc29cf61158c04ad78a",
        function(data){
          console.log(data.results)
          self.setState({data: data.results});
        });
  },
  render: function() {
    var renderNodes = this.state.data.map(function(movie) {
      return ( <MovieItem name={movie.title} subject={movie.subject} avatar={movie.poster_path} text={movie.text} /> );
    });
    return  (<div id="res">{renderNodes}</div>);
  }
});

React.render(
  <MovieList data={data} pollInterval={2000}/>,
  document.getElementById('list')
);