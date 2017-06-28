var React = require("react");
var Navigation = require('Navigation');


var Main = React.createClass({
  render: function(){
  return(
        <div>
          <div>
            <Navigation />
            <p> Main.jsx Rendered </p>
          </div>
        </div>
  );
}

});
module.exports = Main;
