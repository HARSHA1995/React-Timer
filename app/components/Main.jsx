var React = require("react");
var Navigation = require('Navigation');
var Timer = require('Timer');
var Countdown = require('Countdown');

// var main = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <Nav/>
//         <h1> Main Component </h1>
//         {this.props.children}
//         {/*  It renders weather component, about component and children component Here */}
//       </div>
//     );
//   }
// });

var Main = React.createClass({
  render: function(){
  return(
        <div>
          <div>
            <Navigation />
            <p> Main.jsx Rendered </p>
            {this.props.children}
            {/* {props.children} */}
            {/*  It renders weather component, about component and examples component Here */}
          </div>
        </div>
  );
}

});
module.exports = Main;
