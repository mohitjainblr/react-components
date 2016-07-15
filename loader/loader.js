import React from "react";
import "./loader.css";

var Loader = React.createClass({
	render: function() {
		return (
			<div className="loader-overlay">
				<div className="loader">Loading...</div>
			</div>
		);
	}
});

module.exports = Loader;