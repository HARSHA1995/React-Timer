var React = require("react");
var Navigation = require('Navigation');
var Timer = require('Timer');
var Countdown = require('Countdown');

var Main = React.createClass({
  render: function(){
  return(
        <div>
          <div>
            <Navigation />
            <p> Main.jsx Rendered </p>
            {this.props.children}
          </div>
        </div>
  );
}

});
module.exports = Main;
