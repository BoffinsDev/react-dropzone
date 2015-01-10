var React = require('react');

var Dropzone = React.createClass({

  getInitialState: function() {

    return {
      draggin: false
    };

  },

  render: function() {

    return (
      <div
      styles={this.props.styles}
      onDragLeave={this._handleDragLeave}
      onDragOver={this._handleDragOver}
      onDrop={this._handleDrop}>
    {this.props.children}
    </div>
  );

  },

  _handleDragLeave: function(e) {

    this.setState({
      draggin: false
    });

    if (this.props.onDragLeave) {
      this.props.onDragLeave(e)
    }

  },

  _handleDragOver: function(e) {

    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";

    this.setState({
      draggin: true
    });

    if (this.props.onDragOver) {
      this.props.onDragOver(e)
    }

  },

  _handleDrop: function(e) {

    e.preventDefault();

    this.setState({
      draggin: false
    });

    if (this.props.handler) {
      this.props.handler(e.dataTransfer && e.dataTransfer.files);
    } else {
      console.error('No handler specified to accept the dropped file.');
    }

  }

});

module.exports = Dropzone;
