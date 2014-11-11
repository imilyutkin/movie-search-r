var data = [

];

var MovieItem = React.createClass({
  render: function() {
    return (
         <div className="movie-item movie-item-selected pure-g">
                <div class="pure-u">
                    <img className="movie-avatar" height="64" width="64" src={this.props.avatar}/>
                </div>

                <div className="pure-u-3-4">
                    <h5 className="movie-name">{this.props.name}</h5>
                    <h4 className="movie-subject">{this.props.subject}</h4>
                    <p className="movie-desc">
                    {this.props.children}
                    </p>
                </div>
            </div>
    );
  }
});

var MovieList = React.createClass({
    render: function(){

    }
});

React.render(
  <MovieItem name="Ivan Milyutkin" subject="Bla bla bla" avatar="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQrmD5lfBINhjJJw_iPJGm5JCQc9EWAZGLt96GnpsGWxqdqbXOjXe_1f64">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  </MovieItem>,
  document.getElementById('list')
);