/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */'use strict';

	var React = __webpack_require__(1);
	var Clock = __webpack_require__(2);

	setInterval(function(){
	  React.render(
	    React.createElement(Clock, {date: new Date()}),
	    document.getElementById('content'));
	  }, 500);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */'use strict';

	var React = __webpack_require__(1);
	var Header = __webpack_require__(3);
	var Footer = __webpack_require__(4);
	var ClockBitListPair = __webpack_require__(5);

	module.exports = React.createClass({displayName: "module.exports",

	  render: function() {
	    return (
	      React.createElement("div", null, 
	        React.createElement(Header, {date: this.props.date}), 

	      React.createElement("div", {className: "clock"}, 

	        React.createElement(ClockBitListPair, {
	          lowerCount: "4", 
	          upperCount: "2", 
	          value: this.props.date.getHours()}), 

	        React.createElement(ClockBitListPair, {
	          lowerCount: "4", 
	          upperCount: "3", 
	          value: this.props.date.getMinutes()}), 

	        React.createElement(ClockBitListPair, {
	          lowerCount: "4", 
	          upperCount: "3", 
	          value: this.props.date.getSeconds()})

	      ), 

	        React.createElement(Footer, null)

	      )
	    );
	  }
	});


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */'use strict';

	var React = __webpack_require__(1);

	module.exports = React.createClass({displayName: "module.exports",
	  render: function (){
	    return (
	      React.createElement("div", {className: "header"}, 
	        React.createElement("h1", null, "Digital Clock"), 
	        React.createElement("h4", null, "in react")
	      )
	    );
	  }
	});


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */'use strict';

	var React = __webpack_require__(1);

	module.exports = React.createClass({displayName: "module.exports",
	  render: function(){
	    return (
	      React.createElement("div", {className: "footer"}, 
	        React.createElement("a", {href: "http://twitter.com/mteinum"}, "@mteinum")
	      )
	    );
	  }
	});


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */'use strict';

	var React = __webpack_require__(1);
	var ClockBitList = __webpack_require__(6);

	module.exports = React.createClass({displayName: "module.exports",
	  render: function(){
	    var value = this.props.value,
	        upper = (value / 10) % 10,
	        lower = value % 10,
	        upperCount = this.props.upperCount,
	        lowerCount = this.props.lowerCount;

	    return (
	      React.createElement("div", {className: "bitListPair"}, 
	        React.createElement("div", {className: "bitList"}, 
	          React.createElement(ClockBitList, {count: upperCount, value: upper})
	        ), 
	        React.createElement("div", {className: "bitList"}, 
	          React.createElement(ClockBitList, {count: lowerCount, value: lower})
	          )
	      )
	    );
	  }
	});


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */'use strict';

	var React = __webpack_require__(1);
	var ClockBit = __webpack_require__(7);

	var bitset = [1, 2, 4, 8]

	module.exports = React.createClass({displayName: "module.exports",
	  render: function(){
	    var value = this.props.value,
	       bits = bitset.slice(0, this.props.count);

	       bits.reverse();

	    var bitNodes = bits.map(function (bit){
	      return (
	        React.createElement(ClockBit, {key: bit, value: value, bitmask: bit})
	      );
	    });

	    return (
	      React.createElement("div", null, 
	        bitNodes
	      )
	    );
	  }
	});


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */'use strict';

	var React = __webpack_require__(1);
	var classNames = __webpack_require__(8);

	module.exports = React.createClass({displayName: "module.exports",

	  render: function() {

	    var set = this.props.bitmask & this.props.value;

	    var classes = classNames({
	      clockBit: true,
	      on: set,
	      off: !set
	    });

	    return (
	      React.createElement("div", {className: classes})
	    );
	  }
	});


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	(function () {
		'use strict';

		function classNames () {

			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;

				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);

				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true){
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}

	}());


/***/ }
/******/ ]);