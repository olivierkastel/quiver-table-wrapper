var React = require('react');
var ReactDOM = require('react-dom');
var TableWrapper = require('quiver-table-wrapper');

var App = React.createClass({
	render () {
		return (
			<div>
				<TableWrapper />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
