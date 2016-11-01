import $ from 'jquery'
import Backbone from 'backbone'
import React, { Component, PropTypes } from 'react'
import ReactDom from 'react-dom'

/**
* Sunlight Foundation API: https://sunlightfoundation.com/api/
*/

/**
* React App ES6 class style
*/

class AppClass extends Component {
  render() {
    return (
      <div>
        <h6>Wowzers this is a ES6 Component!</h6>
      </div>
    )
  }
}
ReactDom.render(<AppClass />, document.getElementById('appOne'))


/**
* React App constructor function style
*/

var AppConstructor = React.createClass({
  render: function() {
    return (
      <div>
        <h6>Insane, this is a React Constructor Component </h6>
      </div>
    )
  }
})
ReactDom.render(<AppConstructor />, document.getElementById('appTwo'))
