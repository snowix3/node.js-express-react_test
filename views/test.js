var ReactBS = require('react-bootstrap');

var Content = React.createClass({displayName: "Content",
  getDefaultProps: function () {
    return {
      title: 'ReactSample',
      outputWord: 'Hello World!!'
    };
  },
  render: function () {
    return (
      React.createElement("html", {lang: "ja"}, 
      React.createElement("head", null, 
        React.createElement("meta", {charSet: "UTF-8"}), 
        React.createElement("title", null, this.props.title), 
        React.createElement("meta", {name: "author", content: "asma"}), 
        React.createElement("meta", {name: "viewport", content: "width=device-width, initial-scale=1.0, user-scalable=no"}), 

        /* styles */
        React.createElement("link", {type: "text/css", rel: "stylesheet", href: "http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"}), 
        React.createElement("link", {type: "text/css", rel: "stylesheet", href: "http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css"}), 
        React.createElement("link", {type: "text/css", rel: "stylesheet", href: "/css/demo.css"}), 
        /* /styles */

        /* scripts */
        React.createElement("script", {charSet: "UTF-8", src: "http://code.jquery.com/jquery-2.1.4.min.js"}), 
        React.createElement("script", {charSet: "UTF-8", src: "http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"})
        /* /scripts */
      ), 
      React.createElement("body", null, 
            /* header */
        React.createElement(ReactBS.ButtonGroup, {justified: true}, 
          React.createElement(ReactBS.Button, {href: "#"}, "ボタン01"), 
          React.createElement(ReactBS.Button, {href: "#"}, "ボタン02"), 
          React.createElement(ReactBS.DropdownButton, {title: "ドロップダウン", id: "bg-justified-dropdown", "data-toggle": "dropdown"}, 
            React.createElement(ReactBS.MenuItem, {eventKey: "1"}, "リンク01"), 
            React.createElement(ReactBS.MenuItem, {eventKey: "2"}, "リンク02")
          )
        ), 
        /* /header */
        /* container */
        React.createElement("div", {className: "container-fluid"}, 
          React.createElement("h1", {className: "helloWorld"}, this.props.outputWord)
        )
        /* /container */
      )
      )
    );
  }
});

module.exports = Content;