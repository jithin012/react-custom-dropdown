(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.bundle = factory());
}(this, function () { 'use strict';

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */

	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};

	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};

	var toConsumableArray = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	    return arr2;
	  } else {
	    return Array.from(arr);
	  }
	};

	var n = "function" === typeof Symbol && Symbol.for,
	    p = n ? Symbol.for("react.element") : 60103,
	    q = n ? Symbol.for("react.portal") : 60106,
	    r = n ? Symbol.for("react.fragment") : 60107,
	    t = n ? Symbol.for("react.strict_mode") : 60108,
	    u = n ? Symbol.for("react.profiler") : 60114,
	    v = n ? Symbol.for("react.provider") : 60109,
	    w = n ? Symbol.for("react.context") : 60110,
	    x = n ? Symbol.for("react.concurrent_mode") : 60111,
	    y = n ? Symbol.for("react.forward_ref") : 60112,
	    z = n ? Symbol.for("react.suspense") : 60113,
	    aa = n ? Symbol.for("react.memo") : 60115,
	    ba = n ? Symbol.for("react.lazy") : 60116,
	    A = "function" === typeof Symbol && Symbol.iterator;function ca(a, b, d, c, e, g, h, f) {
	  if (!a) {
	    a = void 0;if (void 0 === b) a = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
	      var l = [d, c, e, g, h, f],
	          m = 0;a = Error(b.replace(/%s/g, function () {
	        return l[m++];
	      }));a.name = "Invariant Violation";
	    }a.framesToPop = 1;throw a;
	  }
	}
	function B(a) {
	  for (var b = arguments.length - 1, d = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 0; c < b; c++) {
	    d += "&args[]=" + encodeURIComponent(arguments[c + 1]);
	  }ca(!1, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", d);
	}var C = { isMounted: function isMounted() {
	    return !1;
	  }, enqueueForceUpdate: function enqueueForceUpdate() {}, enqueueReplaceState: function enqueueReplaceState() {}, enqueueSetState: function enqueueSetState() {} },
	    D = {};
	function E(a, b, d) {
	  this.props = a;this.context = b;this.refs = D;this.updater = d || C;
	}E.prototype.isReactComponent = {};E.prototype.setState = function (a, b) {
	  "object" !== (typeof a === 'undefined' ? 'undefined' : _typeof(a)) && "function" !== typeof a && null != a ? B("85") : void 0;this.updater.enqueueSetState(this, a, b, "setState");
	};E.prototype.forceUpdate = function (a) {
	  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
	};function F() {}F.prototype = E.prototype;function G(a, b, d) {
	  this.props = a;this.context = b;this.refs = D;this.updater = d || C;
	}var H = G.prototype = new F();
	H.constructor = G;objectAssign(H, E.prototype);H.isPureReactComponent = !0;var I = { current: null },
	    J = { current: null },
	    K = Object.prototype.hasOwnProperty,
	    L = { key: !0, ref: !0, __self: !0, __source: !0 };
	function M(a, b, d) {
	  var c = void 0,
	      e = {},
	      g = null,
	      h = null;if (null != b) for (c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (g = "" + b.key), b) {
	    K.call(b, c) && !L.hasOwnProperty(c) && (e[c] = b[c]);
	  }var f = arguments.length - 2;if (1 === f) e.children = d;else if (1 < f) {
	    for (var l = Array(f), m = 0; m < f; m++) {
	      l[m] = arguments[m + 2];
	    }e.children = l;
	  }if (a && a.defaultProps) for (c in f = a.defaultProps, f) {
	    void 0 === e[c] && (e[c] = f[c]);
	  }return { $$typeof: p, type: a, key: g, ref: h, props: e, _owner: J.current };
	}
	function da(a, b) {
	  return { $$typeof: p, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
	}function N(a) {
	  return "object" === (typeof a === 'undefined' ? 'undefined' : _typeof(a)) && null !== a && a.$$typeof === p;
	}function escape(a) {
	  var b = { "=": "=0", ":": "=2" };return "$" + ("" + a).replace(/[=:]/g, function (a) {
	    return b[a];
	  });
	}var O = /\/+/g,
	    P = [];function Q(a, b, d, c) {
	  if (P.length) {
	    var e = P.pop();e.result = a;e.keyPrefix = b;e.func = d;e.context = c;e.count = 0;return e;
	  }return { result: a, keyPrefix: b, func: d, context: c, count: 0 };
	}
	function R(a) {
	  a.result = null;a.keyPrefix = null;a.func = null;a.context = null;a.count = 0;10 > P.length && P.push(a);
	}
	function S(a, b, d, c) {
	  var e = typeof a === 'undefined' ? 'undefined' : _typeof(a);if ("undefined" === e || "boolean" === e) a = null;var g = !1;if (null === a) g = !0;else switch (e) {case "string":case "number":
	      g = !0;break;case "object":
	      switch (a.$$typeof) {case p:case q:
	          g = !0;}}if (g) return d(c, a, "" === b ? "." + T(a, 0) : b), 1;g = 0;b = "" === b ? "." : b + ":";if (Array.isArray(a)) for (var h = 0; h < a.length; h++) {
	    e = a[h];var f = b + T(e, h);g += S(e, f, d, c);
	  } else if (null === a || "object" !== (typeof a === 'undefined' ? 'undefined' : _typeof(a)) ? f = null : (f = A && a[A] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), h = 0; !(e = a.next()).done;) {
	    e = e.value, f = b + T(e, h++), g += S(e, f, d, c);
	  } else "object" === e && (d = "" + a, B("31", "[object Object]" === d ? "object with keys {" + Object.keys(a).join(", ") + "}" : d, ""));return g;
	}function U(a, b, d) {
	  return null == a ? 0 : S(a, "", b, d);
	}function T(a, b) {
	  return "object" === (typeof a === 'undefined' ? 'undefined' : _typeof(a)) && null !== a && null != a.key ? escape(a.key) : b.toString(36);
	}function ea(a, b) {
	  a.func.call(a.context, b, a.count++);
	}
	function fa(a, b, d) {
	  var c = a.result,
	      e = a.keyPrefix;a = a.func.call(a.context, b, a.count++);Array.isArray(a) ? V(a, c, d, function (a) {
	    return a;
	  }) : null != a && (N(a) && (a = da(a, e + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(O, "$&/") + "/") + d)), c.push(a));
	}function V(a, b, d, c, e) {
	  var g = "";null != d && (g = ("" + d).replace(O, "$&/") + "/");b = Q(b, g, c, e);U(a, fa, b);R(b);
	}function W() {
	  var a = I.current;null === a ? B("307") : void 0;return a;
	}
	var X = { Children: { map: function map(a, b, d) {
	      if (null == a) return a;var c = [];V(a, c, null, b, d);return c;
	    }, forEach: function forEach(a, b, d) {
	      if (null == a) return a;b = Q(null, null, b, d);U(a, ea, b);R(b);
	    }, count: function count(a) {
	      return U(a, function () {
	        return null;
	      }, null);
	    }, toArray: function toArray(a) {
	      var b = [];V(a, b, null, function (a) {
	        return a;
	      });return b;
	    }, only: function only(a) {
	      N(a) ? void 0 : B("143");return a;
	    } }, createRef: function createRef() {
	    return { current: null };
	  }, Component: E, PureComponent: G, createContext: function createContext(a, b) {
	    void 0 === b && (b = null);a = { $$typeof: w, _calculateChangedBits: b,
	      _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null };a.Provider = { $$typeof: v, _context: a };return a.Consumer = a;
	  }, forwardRef: function forwardRef(a) {
	    return { $$typeof: y, render: a };
	  }, lazy: function lazy(a) {
	    return { $$typeof: ba, _ctor: a, _status: -1, _result: null };
	  }, memo: function memo(a, b) {
	    return { $$typeof: aa, type: a, compare: void 0 === b ? null : b };
	  }, useCallback: function useCallback(a, b) {
	    return W().useCallback(a, b);
	  }, useContext: function useContext(a, b) {
	    return W().useContext(a, b);
	  }, useEffect: function useEffect(a, b) {
	    return W().useEffect(a, b);
	  }, useImperativeHandle: function useImperativeHandle(a, b, d) {
	    return W().useImperativeHandle(a, b, d);
	  }, useDebugValue: function useDebugValue() {}, useLayoutEffect: function useLayoutEffect(a, b) {
	    return W().useLayoutEffect(a, b);
	  }, useMemo: function useMemo(a, b) {
	    return W().useMemo(a, b);
	  }, useReducer: function useReducer(a, b, d) {
	    return W().useReducer(a, b, d);
	  }, useRef: function useRef(a) {
	    return W().useRef(a);
	  }, useState: function useState(a) {
	    return W().useState(a);
	  }, Fragment: r, StrictMode: t, Suspense: z, createElement: M, cloneElement: function cloneElement(a, b, d) {
	    null === a || void 0 === a ? B("267", a) : void 0;var c = void 0,
	        e = objectAssign({}, a.props),
	        g = a.key,
	        h = a.ref,
	        f = a._owner;if (null != b) {
	      void 0 !== b.ref && (h = b.ref, f = J.current);void 0 !== b.key && (g = "" + b.key);var l = void 0;a.type && a.type.defaultProps && (l = a.type.defaultProps);for (c in b) {
	        K.call(b, c) && !L.hasOwnProperty(c) && (e[c] = void 0 === b[c] && void 0 !== l ? l[c] : b[c]);
	      }
	    }c = arguments.length - 2;if (1 === c) e.children = d;else if (1 < c) {
	      l = Array(c);for (var m = 0; m < c; m++) {
	        l[m] = arguments[m + 2];
	      }e.children = l;
	    }return { $$typeof: p, type: a.type, key: g, ref: h, props: e, _owner: f };
	  }, createFactory: function createFactory(a) {
	    var b = M.bind(null, a);b.type = a;return b;
	  }, isValidElement: N, version: "16.8.2",
	  unstable_ConcurrentMode: x, unstable_Profiler: u, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { ReactCurrentDispatcher: I, ReactCurrentOwner: J, assign: objectAssign } },
	    Y = { default: X },
	    Z = Y && X || Y;var react_production_min = Z.default || Z;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	var react_development = createCommonjsModule(function (module) {
	});

	var react = createCommonjsModule(function (module) {

	  {
	    module.exports = react_production_min;
	  }
	});
	var react_1 = react.Children;
	var react_2 = react.Component;
	var react_3 = react.PropTypes;
	var react_4 = react.createElement;
	var react_5 = react.PureComponent;
	var react_6 = react.Fragment;

	function emptyFunction() {}

	var factoryWithThrowingShims = function factoryWithThrowingShims() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret_1) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
	    err.name = 'Invariant Violation';
	    throw err;
	  }  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	var propTypes = createCommonjsModule(function (module) {
	  /**
	   * Copyright (c) 2013-present, Facebook, Inc.
	   *
	   * This source code is licensed under the MIT license found in the
	   * LICENSE file in the root directory of this source tree.
	   */

	  {
	    // By explicitly using `prop-types` you are opting into new production behavior.
	    // http://fb.me/prop-types-in-prod
	    module.exports = factoryWithThrowingShims();
	  }
	});

	/**
	 * A component for Cross(x) button
	 * @prop fill = color to fill component
	 * @prop width = width of the component
	 * @prop height = height of the component
	 * @prop onClick = function which return onClick on the conponent
	 * @prop stroke = stroke of the component
	 */

	function Arrow(props) {
		return react.createElement(
			'div',
			{
				className: 'tick align-items-center ' + props.class + ' ' + (typeof props.onClick == 'function' ? 'clickable' : 'not-clickable'),
				onClick: function onClick() {
					props.onClick && props.onClick();
				}
			},
			react.createElement(
				'svg',
				{
					width: props.width,
					height: props.height,
					viewBox: '0 0 9 4',
					version: '1.1',
					xmlns: 'http://www.w3.org/2000/svg'
				},
				react.createElement(
					'g',
					{ id: 'Symbols', stroke: props.fill, strokeWidth: '1', fill: props.fill, strokeLinejoin: 'round' },
					react.createElement(
						'g',
						{
							id: 'Header',
							transform: 'translate(-1120.000000, -19.000000)',
							stroke: props.fill,
							strokeWidth: '0.5'
						},
						react.createElement(
							'g',
							{ id: 'right' },
							react.createElement(
								'g',
								{ transform: 'translate(1041.000000, 9.000000)' },
								react.createElement('polyline', { id: 'Shape-Copy-2', points: '87 10 83.5 14 80 10' })
							)
						)
					)
				)
			)
		);
	}

	Arrow.defaultProps = {
		fill: 'gray',
		width: 12,
		height: 12,
		onClick: null,
		class: null
	};

	Arrow.propTypes = {
		fill: propTypes.string,
		width: propTypes.number,
		height: propTypes.number,
		onClick: propTypes.func,
		stroke: propTypes.string,
		class: propTypes.string
	};

	/**
	 * A component for Cross(x) button
	 * @prop fill = color to fill component
	 * @prop width = width of the component
	 * @prop height = height of the component
	 * @prop onClick = function which return onClick on the component
	 * @prop ref = function which return reference on the component
	 */

	function Cross(props) {
	    return react.createElement(
	        'div',
	        {
	            className: "cross " + (typeof props.onClick == 'function' ? 'clickable' : 'not-clickable'),
	            onClick: function onClick() {
	                props.onClick && props.onClick();
	            },
	            ref: function ref(refs) {
	                props.refs && props.refs(refs);
	            }
	        },
	        react.createElement(
	            'svg',
	            {
	                xmlns: 'http://www.w3.org/2000/svg',
	                width: props.width,
	                height: props.height,
	                viewBox: '0 0 16 16'
	            },
	            react.createElement('path', {
	                fill: props.fill,
	                fillRule: 'nonzero',
	                d: 'M9.6 8l6.057-6.057a1.105 1.105 0 0 0 0-1.6 1.105 1.105 0 0 0-1.6 0L8 6.4 1.943.343a1.105 1.105 0 0 0-1.6 0 1.105 1.105 0 0 0 0 1.6L6.4 8 .343 14.057a1.105 1.105 0 0 0 0 1.6c.228.229.457.343.8.343s.571-.114.8-.343L8 9.6l6.057 6.057c.229.229.572.343.8.343.229 0 .572-.114.8-.343a1.105 1.105 0 0 0 0-1.6L9.6 8z'
	            })
	        )
	    );
	}

	Cross.defaultProps = {
	    fill: "#135142",
	    width: 16,
	    height: 16,
	    onClick: null,
	    ref: null
	};

	Cross.propTypes = {
	    fill: propTypes.string,
	    width: propTypes.number,
	    height: propTypes.number,
	    onClick: propTypes.func,
	    ref: propTypes.func
	};

	/**
	 * make sure that input Data coming to Drop down is the format of
	 *  1. Array of Objects  like:
	 *    [{
	 *      label : <label> ,
	 *      value: <value>
	 *    },...]
	 *          for sub menu (Level 1 only)
	 *              [{
	 *               label : <label> ,
	 *               value: <value>,
	 *               subMenu : [{
	 *                 label : <label> ,
	 *                 value: <value>
	 *               ]},
	 *              ...]
	 *  2. Simple array like: [...]
	 *  3. Array of Object like:
	 *      [
	 *         {
	 *           title: <titleName>,
	 *           data: [{label : <label> , value: <value>,... }]
	 *         }, ...
	 *      ]
	 *
	 */

	var DataAnalyser = {
		analyseInput: function analyseInput(data, selectedVales) {
			if (!(data && DataAnalyser.isArray(data))) return;
			var returnObj = {
				data: [],
				isMixWithTitle: false
			};
			// for empty option array
			if (data.length === 0) {
				returnObj.data.push(DataAnalyser.getStructuredData('<No Options>', 'no_value', true));
				return returnObj;
			}
			// for type2
			if (DataAnalyser.isSimpleArray(data)) {
				returnObj.data = DataAnalyser.processSimpleArray(data);
			}
			if (DataAnalyser.arrayContainsObject(data)) {
				// For Type3
				if (DataAnalyser.containTitleField(data[0]) && DataAnalyser.containDataField(data[0])) {
					returnObj.isMixWithTitle = true;
					returnObj.data = DataAnalyser.processTitleAndObjects(data);
				} else {
					// For Type1
					returnObj.data = DataAnalyser.processObjects(data);
				}
			}
			return returnObj;
		},
		containTitleField: function containTitleField(dataObj) {
			return dataObj['title'] !== undefined;
		},
		containDataField: function containDataField(dataObj) {
			return dataObj['data'] !== undefined;
		},
		processSimpleArray: function processSimpleArray(arrayData) {
			var len = arrayData.length;
			var newArr = [];
			for (var i = 0; i < len; i++) {
				newArr.push(DataAnalyser.getStructuredData(arrayData[i], arrayData[i]));
			}
			return newArr;
		},
		processTitleAndObjects: function processTitleAndObjects(data) {
			var arrLength = data.length;
			var returnArray = [];
			var eachObj = null;
			var hasGroup = false;
			var groupName = '';

			for (var i = 0; i < arrLength; i++) {
				eachObj = data[i];
				if (eachObj['title'] !== undefined) {
					returnArray.push(DataAnalyser.getStructuredData(eachObj['title'], i, eachObj.disabled, false, [], true));
				}
				if (eachObj['data'] !== undefined) {
					hasGroup = true;
					groupName = eachObj['title'];
					returnArray.push.apply(returnArray, toConsumableArray(DataAnalyser.processObjects(eachObj['data'], hasGroup, groupName)));
				}
			}
			return returnArray;
		},
		/**
	  * Each object is the format of "{label : <label> , value : <value>}"
	  * @Note: grouping is only for level 1 data. For Inner JSON We don't have it right now
	  */
		processObjects: function processObjects(arrayData) {
			var hasGroup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			var groupName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

			var len = arrayData.length;
			var newArr = [];
			var temp = {};
			var label = '';
			var subMenu = [];
			var value = void 0;
			for (var i = 0; i < len; i++) {
				subMenu = [];
				temp = arrayData[i];
				label = temp['label'];
				value = temp['value'];
				if (DataAnalyser.hasSubmenu(temp)) {
					subMenu.push({ label: label, value: value, options: temp.subMenu });
					newArr.push(DataAnalyser.getStructuredData(label, value, temp.disabled, true, subMenu));
				} else {
					if (hasGroup) {
						newArr.push(DataAnalyser.getStructuredData(label, value, temp.disabled, false, [], false, hasGroup, groupName, arrayData));
					} else newArr.push(DataAnalyser.getStructuredData(label, value, temp.disabled));
				}
			}
			return newArr;
		},
		hasSubmenu: function hasSubmenu(eachObj) {
			return eachObj.subMenu !== undefined;
		},
		getStructuredData: function getStructuredData(label, value) {
			var isDisabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
			var isSubmenu = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
			var subMenu = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
			var isTitle = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
			var hasGroup = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
			var groupName = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : '';
			var groupEle = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : [];

			return {
				value: value,
				label: label,
				isDisabled: isDisabled,
				isSubmenu: isSubmenu,
				subMenu: subMenu,
				isTitle: isTitle,
				hasGroup: hasGroup,
				groupName: groupName,
				groupEle: groupEle
			};
		},
		arrayContainsArray: function arrayContainsArray(data) {
			return DataAnalyser.isArray(data[0]);
		},
		arrayContainsObject: function arrayContainsObject(data) {
			return DataAnalyser.isObject(data[0]);
		},
		isSimpleArray: function isSimpleArray(data) {
			return _typeof(data[0]) !== 'object';
		},
		isArray: function isArray(data) {
			return (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' && data.constructor === Array;
		},
		isObject: function isObject(data) {
			return data && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' && data.constructor === Object;
		}
	};
	/**
	 * Some Utility functions
	 */
	var Utils = {
		isEmptyString: function isEmptyString(str) {
			return !str || str === '';
		},
		isEmptyObject: function isEmptyObject(obj) {
			return Object.keys(obj).length === 0;
		}
	};
	var KeyGenerator = function () {
		var value = 1000;
		return {
			getNew: function getNew() {
				return ++value;
			}
		};
	}();

	/**
	 * Some reserved classname used in this component
	 */
	var reservedClassNames = {
		wrapper: 'rcd-wrapper',
		header: 'rcd-header',
		optionContainer: 'rcd-option-container',
		eachOptionWrapper: 'rcd-each-option-wrapper',
		option: 'rcd-option',
		submenu: 'rcd-submenu',
		isSubMenu: 'is-submenu',
		isTitle: 'is-title'
	};

	var Multiselect = function Multiselect(props) {
		return react.createElement(
			'div',
			null,
			renderHeader(props),
			props.mainMenuList,
			props.shouldUseMultiselectApplyBtn && renderApplyBtn(props)
		);
	};
	var renderHeader = function renderHeader(props) {
		if (typeof props.optionHeaderer === 'function') return props.optionHeaderer();
		if (props.shouldUseMultiselectOptionHeader) {
			return react.createElement(
				'div',
				{ className: 'rcd-option-header' },
				react.createElement(
					'div',
					{ className: 'rcd-option-header-label' },
					props.multiselectHeaderLabel
				),
				react.createElement(
					'div',
					{ className: 'rcd-option-header-clear-all', onClick: props.onClickClearAll },
					props.multiSelectHeaderClearAllLabel
				)
			);
		}
	};
	var renderApplyBtn = function renderApplyBtn(props) {
		var className = props.multiselectApplyBtnClass ? 'rcd-apply-btn ' + props.multiselectApplyBtnClass : 'rcd-apply-btn';
		return react.createElement(
			'div',
			{ className: className, onClick: props.onMultiSelectDone },
			props.multiselectApplyBtnLabel ? props.multiselectApplyBtnLabel : 'APPLY'
		);
	};

	function ToolTip(_ref) {
	  var position = _ref.position,
	      _ref$text = _ref.text,
	      text = _ref$text === undefined ? '' : _ref$text,
	      CSSClassname = _ref.CSSClassname,
	      children = _ref.children;

	  var str = typeof text === "string" ? text : text.toString();
	  return react.createElement(
	    "div",
	    { className: CSSClassname || "emtooltip-container" },
	    children,
	    str && str.length !== 0 ? react.createElement(
	      "span",
	      { className: "tooltip-text" },
	      str
	    ) : null
	  );
	}

	ToolTip.propTypes = {
	  position: propTypes.oneOf(["top", "right", "bottom", "left"]),
	  text: propTypes.string,
	  CSSClassname: propTypes.string
	};
	ToolTip.defaultProps = {
	  position: "bottom"
	};

	/**
	 * A component for Cross(x) button
	 * @prop fill = color to fill component
	 * @prop width = width of the component
	 * @prop height = height of the component
	 * @prop onClick = function which return onClick on the conponent
	 * @prop stroke = stroke of the component
	 */

	function Tick(props) {
		return react.createElement(
			'div',
			{
				className: 'tick align-items-center ' + props.class + ' ' + (typeof props.onClick == 'function' ? 'clickable' : 'not-clickable'),
				onClick: function onClick() {
					props.onClick && props.onClick();
				}
			},
			react.createElement(
				'svg',
				{ xmlns: 'http://www.w3.org/2000/svg', width: props.width, height: props.height, viewBox: '0 0 13 12' },
				react.createElement('path', {
					fill: props.stroke,
					fillRule: 'nonzero',
					stroke: props.stroke,
					strokeWidth: '1.2',
					d: 'M6.095 10.8L1.552 7.497a.836.836 0 0 1-.345-.785.857.857 0 0 1 .537-.679.92.92 0 0 1 .88.107l3.04 2.21 4.707-6.767a.9.9 0 0 1 .797-.381c.317.019.6.2.74.473a.821.821 0 0 1-.06.852L6.095 10.8z'
				})
			)
		);
	}

	Tick.defaultProps = {
		width: 12,
		height: 12,
		onClick: null,
		stroke: '#135142',
		class: null
	};

	Tick.propTypes = {
		fill: propTypes.string,
		width: propTypes.number,
		height: propTypes.number,
		onClick: propTypes.func,
		stroke: propTypes.string,
		class: propTypes.string
	};

	/**
	 * A component for Drop Down.
	 * @prop fill = color to fill component
	 * @prop width = width of the component
	 * @prop height = height of the component
	 * @prop onClick = function which return onClick on the conponent
	 * @prop stroke = stroke of the component
	 */

	function RadioUnselected(props) {
		return react.createElement(
			'div',
			{
				className: 'align-items-center ' + props.class + ' ' + (typeof props.onClick == 'function' ? 'clickable' : 'not-clickable'),
				onClick: function onClick() {
					props.onClick && props.onClick();
				},
				style: { cursor: 'pointer' }
			},
			react.createElement(
				'svg',
				{ height: props.height, viewBox: '0 0 13 13', width: props.width, xmlns: 'http://www.w3.org/2000/svg' },
				react.createElement(
					'g',
					{ fill: props.fill, fillRule: 'evenodd' },
					react.createElement(
						'g',
						{ stroke: props.stroke, strokeWidth: '.5' },
						react.createElement('circle', { cx: '6.5', cy: '6.5', r: '6.25' }),
						react.createElement('circle', { cx: '6.5', cy: '6.5', r: '3.25' })
					)
				)
			)
		);
	}

	RadioUnselected.defaultProps = {
		fill: 'none',
		width: 13,
		height: 13,
		onClick: null,
		stroke: '#77878e',
		class: null
	};

	RadioUnselected.propTypes = {
		fill: propTypes.string,
		width: propTypes.number,
		height: propTypes.number,
		onClick: propTypes.func,
		stroke: propTypes.string,
		class: propTypes.string
	};

	/**
	 * A component for Drop Down.
	 * @prop fill = color to fill component
	 * @prop width = width of the component
	 * @prop height = height of the component
	 * @prop onClick = function which return onClick on the conponent
	 * @prop stroke = stroke of the component
	 */

	function RadioSelected(props) {
		return react.createElement(
			'div',
			{
				className: 'align-items-center ' + props.class + ' ' + (typeof props.onClick == 'function' ? 'clickable' : 'not-clickable'),
				onClick: function onClick() {
					props.onClick && props.onClick();
				},
				style: { cursor: 'pointer' }
			},
			react.createElement(
				'svg',
				{ height: props.height, viewBox: '0 0 13 13', width: props.width, xmlns: 'http://www.w3.org/2000/svg' },
				react.createElement(
					'g',
					{ fill: props.fill, fillRule: 'evenodd' },
					react.createElement(
						'g',
						{ stroke: props.stroke, strokeWidth: '.5' },
						react.createElement('circle', { cx: '6.5', cy: '6.5', r: '6.25' }),
						react.createElement('circle', { cx: '6.5', cy: '6.5', fill: props.stroke, r: '3.25' })
					)
				)
			)
		);
	}

	RadioSelected.defaultProps = {
		fill: 'none',
		width: 13,
		height: 13,
		onClick: null,
		stroke: '#50b7e8',
		class: null
	};

	RadioSelected.propTypes = {
		fill: propTypes.string,
		width: propTypes.number,
		height: propTypes.number,
		onClick: propTypes.func,
		stroke: propTypes.string,
		class: propTypes.string
	};

	var Option = function Option(props) {
		var optionObj = props.optionObj,
		    classes = props.classes,
		    isMixWithTitle = props.isMixWithTitle,
		    index = props.index,
		    isSelectedOption = props.isSelectedOption,
		    isMultiSelect = props.isMultiSelect;

		if (optionObj.isTitle) {
			return renderTitleAsOptions(classes, optionObj, index);
		} else {
			var className = 'rcd-each-option-wrapper';
			if (isMultiSelect || props.tickRequiredForSingleSelect || props.shouldUseRadioBtn || isMixWithTitle) className = className + ' rcd-option-holder';
			if (props.removeOptionWhenSelected && props.isSelectedOption) className = className + ' no-display';
			if (optionObj.isDisabled) classes += ' rcd-option-disable';
			if (isSelectedOption) classes += ' font-bold ' + props.selectedOptionClass;
			return react.createElement(
				'div',
				{
					className: className,
					onMouseOver: function onMouseOver(e) {
						return props.onMouseOver(e, optionObj);
					},
					onMouseOut: function onMouseOut(e) {
						return props.onMouseOut(e, optionObj);
					},
					key: '' + index,
					onClick: function onClick(e) {
						if (!optionObj.isDisabled) props.onSelect(optionObj, e);
					}
				},
				props.isMultiSelect && renderTick(isSelectedOption, props.tick),
				!props.isMultiSelect && props.tickRequiredForSingleSelect && renderTick(isSelectedOption, props.tick),
				!props.isMultiSelect && props.shouldUseRadioBtn && renderRadioBtn(isSelectedOption, optionObj, props.radio),
				react.createElement(
					'div',
					{
						'data-key': optionObj.value,
						key: optionObj.value,
						className: props.defaultOptionClass + ' ' + classes
					},
					renderOptionLabel(optionObj.label, props.autoWidthAdjust)
				)
			);
		}
	};

	var renderTitleAsOptions = function renderTitleAsOptions(classes, optionObj, index) {
		return react.createElement(
			'div',
			{ key: '' + index, className: classes },
			optionObj.label
		);
	};

	var renderOptionLabel = function renderOptionLabel(labelName, autoWidthAdjust) {
		return labelName;
		if (labelName.length > 19 && autoWidthAdjust) {
			return react.createElement(
				ToolTip,
				{ text: labelName },
				labelName.substr(0, 16) + '... '
			);
		} else {
			return labelName;
		}
	};

	var renderTick = function renderTick(isSelectedOption, props) {
		return isSelectedOption ? react.createElement(Tick, { width: props.width, height: props.height, stroke: props.color }) : react.createElement('div', { style: { marginLeft: props.width + 'px' } });
	};
	var renderRadioBtn = function renderRadioBtn(isSelectedOption, currentObj, props) {
		if (isSelectedOption) return react.createElement(RadioSelected, { width: props.width, height: props.height, stroke: props.selectedFillColor });
		return react.createElement(RadioUnselected, { width: props.width, height: props.height, stroke: props.unSelectedFillColor });
	};

	var DropDown = function (_Component) {
		inherits(DropDown, _Component);

		function DropDown(props) {
			classCallCheck(this, DropDown);

			var _this = possibleConstructorReturn(this, (DropDown.__proto__ || Object.getPrototypeOf(DropDown)).call(this, props));

			_initialiseProps.call(_this);

			_this.state = {
				selectedOption: '', //this.props.defauleSelectTitle,
				selectedMultiSelectOptions: {},
				selectedMultiSelectLabel: '',
				width: 0,
				isCompletedMultiSelection: true,
				isOpen: false
			};
			_this.wrapperRef = react.createRef();
			return _this;
		}

		createClass(DropDown, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.listenClickoutsideEvent();
				this.setPreselectedValue();
				this.props.autoOpen && this.showOption();
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				document.removeEventListener('click', this.handleClickoutside);
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				nextProps.shouldResetState && this.resetState();
			}
			/**
	   * Make sure that "this.props.selectedValues" will be array of Objects
	   * title name present if it has "Grouping".
	   * Eg: [{
	   *      label: <label>,
	   *      value: <value>,
	   *      title: <titleName>,
	   *    },...]
	   */

			/*************************************
	   *          SUB MENU
	   *************************************/

			/*************************************
	   *          MUlTI SELECT
	   *************************************/
			/**
	   *  objects are store in selectedMultiSelectOptions of the state with format of
	   *      {
	   *          <selectedLabel> : <selectedObj>,
	   *          <selectedLabel> : <selectedObj>...
	   *      }
	   *  also manage selectedMultiSelectLabel in the state
	   */

			/*************************************
	   *          DROP DOWN
	   *************************************/

			/**
	   *  Here we have 'height' issue when return an empty string.
	   *  to Fix this issue
	   *      1. return a hidden component with longest string in options
	   */

			/**
	   * title to show in case of multi select; contain close btn
	   */

			/**
	   * caluculate longest String Data for "Auto Width conguration"
	   *
	   */

		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				var dataObj = DataAnalyser.analyseInput(this.props.option, this.props.selectedValues);
				var listObj = this.makeListAsOption(dataObj.data, dataObj.isMixWithTitle);
				var headerClass = reservedClassNames.header;
				headerClass += this.isMultiSelect() ? ' label-multi-table ' : ' label-single-center ';
				headerClass += this.props.headerClass ? this.props.headerClass : '';
				return react.createElement(
					'div',
					{
						ref: this.wrapperRef,
						className: reservedClassNames.wrapper + ' ' + this.props.wrapperClass,
						onMouseEnter: this.props.shouldOpenOptionsOnhover ? this.showOption : null,
						onMouseLeave: this.props.shouldOpenOptionsOnhover ? this.hideOption : null
					},
					react.createElement(
						'div',
						{
							className: headerClass,
							onClick: this.props.disabled ? null : this.toggleDropdown,
							onMouseOver: function onMouseOver(event) {
								_this2.onHeaderHover();
							},
							ref: function ref(refs) {
								_this2.headerRef = refs;
							}
						},
						this.renderHeader(),
						this.props.shouldUseArrow && this.renderArrow()
					),
					this.state.isOpen && typeof this.props.headerOptionDivider === 'function' && this.props.headerOptionDivider(),
					react.createElement(
						'div',
						{
							style: {
								visibility: this.state.isOpen ? 'visible' : 'hidden',
								transition: this.state.isOpen ? 'visibility 0ms linear 100ms' : 'visibility 0s linear 10ms'
							},
							className: reservedClassNames.optionContainer + ' ' + this.props.optionContainerClass
						},
						listObj.mainMenuList
					)
				);
			}
		}]);
		return DropDown;
	}(react_2);

	var _initialiseProps = function _initialiseProps() {
		var _this3 = this;

		this.longestOptionStrLength = -1;
		this.longestString = 'x';

		this.setPreselectedValue = function (nextProps, callBack) {
			var props = nextProps ? nextProps : _this3.props;
			if (props.multiSelect) {
				_this3.handlePreSelectedForMultiSelection(props, function () {
					return callBack && callBack();
				});
			} else {
				props.selectedValues && props.selectedValues.constructor === Object && _this3.setState({ selectedOption: props.selectedValues['label'] }, function () {
					return callBack && callBack();
				});
			}
		};

		this.handlePreSelectedForMultiSelection = function (props, callBack) {
			var tempObj = {};
			var dataToSetState = {};
			var labelToShow = '';
			if (props.selectedValues && props.selectedValues.length > 0) {
				for (var i = 0; i < props.selectedValues.length; i++) {
					tempObj = props.selectedValues[i];
					if (DataAnalyser.containTitleField(tempObj)) {
						// To Do :: if it has accept > 1 data
						labelToShow += tempObj['label'] + ', ';
						dataToSetState[tempObj.title] = {};
						dataToSetState[tempObj.title][tempObj.label] = DataAnalyser.getStructuredData(tempObj.label, tempObj.value, tempObj.disabled, false, [], tempObj.title, true);
					} else {
						labelToShow += tempObj['label'] + ', ';
						dataToSetState[tempObj.label] = DataAnalyser.getStructuredData(tempObj.label, tempObj.value, tempObj.disabled);
					}
				}
				labelToShow = labelToShow.substr(0, labelToShow.length - 2);
				_this3.setState({
					selectedMultiSelectLabel: labelToShow,
					selectedMultiSelectOptions: dataToSetState,
					isCompletedMultiSelection: true
				}, function () {
					return callBack && callBack();
				});
			} else {
				if (typeof props.selectedValues != 'undefined' && props.selectedValues != null && props.selectedValues.length === 0) {
					_this3.resetState(function () {
						return callBack && callBack();
					});
				} else callBack && callBack();
			}
		};

		this.getSubmenuList = function (selectedLabel, arrList, selectedObj) {
			var jsx = null;
			var tempObj = null;
			if (arrList && arrList.length > 0) {
				var len = arrList.length;
				for (var i = 0; i < len; i++) {
					tempObj = arrList[i];
					if (tempObj.label === selectedLabel) {
						jsx = tempObj.options.map(function (submenuObj, index, arr) {
							return react.createElement(
								'div',
								null,
								react.createElement(
									'div',
									{
										'data-key': index,
										key: index,
										className: _this3.props.optionClass,
										onClick: function onClick(e) {
											_this3.onSelect(submenuObj, e, selectedObj);
										}
									},
									submenuObj.label
								)
							);
						});
					}
				}
				return jsx;
			} else return [];
		};

		this.clearAllMultiSelect = function (cb) {
			_this3.setState({
				selectedMultiSelectOptions: {},
				selectedMultiSelectLabel: '',
				isCompletedMultiSelection: true
			}, function () {
				typeof cb === 'function' && cb();
			});
		};

		this.onClickClearAll = function () {
			_this3.setState({
				isCompletedMultiSelection: !_this3.props.shouldUseMultiselectApplyBtn,
				selectedMultiSelectOptions: {},
				selectedMultiSelectLabel: ''
			});
			_this3.emitOnselectIfMultiselect({});
			typeof _this3.props.onClearAll == 'function' && _this3.props.onClearAll();
		};

		this.onMultiSelect = function (selectedOptObj, e) {
			var tempObj = _this3.state.selectedMultiSelectOptions || {};
			var label = _this3.state.selectedMultiSelectLabel;
			var obj = {};
			if (_this3.shouldDeselect(selectedOptObj)) {
				obj = _this3.handleDeselect(label, tempObj, selectedOptObj.label);
			} else {
				obj = _this3.handleSelect(label, tempObj, selectedOptObj);
			}
			_this3.setState({
				selectedMultiSelectOptions: obj.tempObj,
				selectedMultiSelectLabel: obj.label,
				isCompletedMultiSelection: !_this3.props.shouldUseMultiselectApplyBtn
			});
			_this3.emitOnselectIfMultiselect(obj.tempObj, e);
		};

		this.handleDeselect = function (label, tempObj, selectedLabel) {
			delete tempObj[selectedLabel];
			label = _this3.getLabelFromMultiselected(tempObj);
			return {
				label: label,
				tempObj: tempObj
			};
		};

		this.handleSelect = function (label, tempObj, selectedObj) {
			if (_this3.props.shouldAcceptOneFromGroup && selectedObj.hasGroup) {
				for (var selectedLabel in tempObj) {
					if (tempObj[selectedLabel]['groupName'] === selectedObj.groupName) delete tempObj[selectedLabel];
				}
			}
			tempObj[selectedObj.label] = selectedObj;
			label = _this3.getLabelFromMultiselected(tempObj);
			return {
				label: label,
				tempObj: tempObj
			};
		};

		this.getLabelFromMultiselected = function (obj) {
			var label = '';
			for (var key in obj) {
				label += key + ', ';
			}
			return label.substr(0, label.length - 2);
		};

		this.shouldDeselect = function (selectedObj) {
			if (Utils.isEmptyObject(_this3.state.selectedMultiSelectOptions)) return false;
			return Object.keys(_this3.state.selectedMultiSelectOptions).indexOf(selectedObj.label) > -1;
		};

		this.hasInMultiSelected = function (selectedObj) {
			if (Utils.isEmptyObject(_this3.state.selectedMultiSelectOptions)) return false;
			return Object.keys(_this3.state.selectedMultiSelectOptions).indexOf(selectedObj.label) > -1;
		};

		this.onMultiSelectDone = function (e) {
			_this3.setState({
				isCompletedMultiSelection: true
			});
			_this3.hideOption();
			_this3.emitOnselectIfMultiselect(_this3.state.selectedMultiSelectOptions, e);
		};

		this.tempMultiselectedOptions = {};
		this.tempMultiselectedLabel = '';

		this.emitOnselectIfMultiselect = function (selectedObj, event) {
			typeof _this3.props.onSelect === 'function' && _this3.props.onSelect(selectedObj, event);
		};

		this.listenClickoutsideEvent = function () {
			return document.addEventListener('click', _this3.handleClickoutside);
		};

		this.handleClickoutside = function (event) {
			if (!_this3.hasTitleClass(event.target)) {
				if (!_this3.isClickWithinDropdownWrapper(event.target)) {
					if (_this3.props.multiSelect) {
						if (!_this3.state.isCompletedMultiSelection) {
							if (!Utils.isEmptyObject(_this3.tempMultiselectedOptions)) {
								_this3.setState({
									isCompletedMultiSelection: true,
									selectedMultiSelectOptions: _this3.tempMultiselectedOptions,
									selectedMultiSelectLabel: _this3.tempMultiselectedLabel
								});
							} else {
								_this3.clearAllMultiSelect();
							}
							_this3.props.shouldUseMultiselectApplyBtn && _this3.emitOnselectIfMultiselect(_this3.tempMultiselectedOptions);
							_this3.hideOption();
						} else {
							_this3.hideOption();
						}
					} else {
						_this3.hideOption();
					}
				}
			}
		};

		this.isClickWithinDropdownWrapper = function (target) {
			var maxLoopLimit = 15;
			var temp = target;
			if (temp) {
				if (_this3.isHtmlTag(temp)) return false;
				if (_this3.isDropdownOptionContainer(temp && temp.classList)) return true;
				for (var i = 0; i < maxLoopLimit; i++) {
					temp = temp && temp.parentElement;
					if (_this3.isHtmlTag(temp)) {
						return false;
					}
					if (_this3.isDropdownWrapper(temp && temp.classList)) {
						return true;
					}
				}
			}
			return false;
		};

		this.isHtmlTag = function (target) {
			return target && target.tagName === 'HTML';
		};

		this.hasTitleClass = function (targetObj) {
			return targetObj && targetObj.matches('.' + reservedClassNames.isTitle);
		};

		this.toggleDropdown = function (e) {
			return _this3.state.isOpen ? _this3.hideOption() : _this3.showOption(e);
		};

		this.isDropdownWrapper = function (arrayData) {
			if (arrayData && typeof arrayData === 'undefined' || arrayData === null) return 0;
			return arrayData.value.indexOf(reservedClassNames.wrapper) >= 0;
		};

		this.isDropdownOptionContainer = function (arrayData) {
			if (typeof arrayData === 'undefined') return 0;
			return arrayData.value.indexOf(reservedClassNames.optionContainer) > -1;
		};

		this.showOption = function (e) {
			if (!_this3.state.isOpen) {
				_this3.onOpenOption(e);
				_this3.setState({ isOpen: true });
			}
		};

		this.hideOption = function () {
			if (_this3.state.isOpen) {
				_this3.onCloseOption();
				_this3.setState({ isOpen: false });
			}
		};

		this.isFirstTimeOpen = true;
		this.WidthRequiredToshow = 0;

		this.onOpenOption = function (elem) {
			if (_this3.props.autoWidthAdjust && _this3.isFirstTimeOpen) {
				_this3.isFirstTimeOpen = false;
				_this3.WidthRequiredToshow = elem && elem.offsetWidth;
			}
			_this3.tempMultiselectedOptions = Object.assign({}, _this3.state.selectedMultiSelectOptions);
			_this3.tempMultiselectedLabel = _this3.state.selectedMultiSelectLabel;
			typeof _this3.props.onOpenOption === 'function' && _this3.props.onOpenOption();
		};

		this.onCloseOption = function () {
			return typeof _this3.props.onCloseOption === 'function' && _this3.props.onCloseOption();
		};

		this.onSelect = function (selectedOptObj, e, parentOptObj) {
			if (!selectedOptObj.isTitle) {
				if (_this3.props.multiSelect) {
					_this3.onMultiSelect(selectedOptObj, e);
				} else {
					var preSelectedOption = _this3.state.selectedOption;
					preSelectedOption !== selectedOptObj.label && _this3.onChange(selectedOptObj, e, parentOptObj);
					_this3.setState({ selectedOption: selectedOptObj.label });
					typeof _this3.props.onSelect === 'function' && _this3.props.onSelect(selectedOptObj, e, parentOptObj);
					_this3.hideOption();
				}
			}
		};

		this.onChange = function (selectedOptObj, e, parentOptObj) {
			return typeof _this3.props.onChange === 'function' && _this3.props.onChange(selectedOptObj, e, parentOptObj);
		};

		this.onHeaderHover = function (e) {
			typeof _this3.props.onHeaderHover === 'function' && _this3.props.onHeaderHover(_this3.state.selectedMultiSelectOptions, _this3.state.selectedOption);
		};

		this.onTagHover = function () {
			typeof _this3.props.onTagHover === 'function' && _this3.props.onTagHover(_this3.state.selectedMultiSelectOptions, _this3.state.selectedOption);
		};

		this.renderHeader = function () {
			if (typeof _this3.props.fixedTitle === 'function') return _this3.props.fixedTitle(_this3.props.multiSelect ? _this3.state.selectedMultiSelectLabel : _this3.state.selectedOption);
			if (_this3.props.multiSelect) return _this3.renderHeaderForMultiselect();else {
				if (Utils.isEmptyString(_this3.state.selectedOption)) return _this3.props.defauleSelectTitle && _this3.renderPlaceholder() || _this3.getHiddenComponent();else return _this3.state.selectedOption;
			}
		};

		this.renderPlaceholder = function () {
			return react.createElement(
				'span',
				{ className: 'rcd-placeholder' },
				_this3.props.defauleSelectTitle
			);
		};

		this.renderHeaderForMultiselect = function () {
			var selectedOptionsArray = Object.keys(_this3.state.selectedMultiSelectOptions);
			if (selectedOptionsArray.length > 0) {
				var titleToRender = [];
				selectedOptionsArray.map(function (selectedOption) {
					titleToRender.push(react.createElement(
						'span',
						{ key: selectedOption, className: 'rcd-multi-selected' },
						react.createElement(Cross, {
							height: _this3.props.cross.width,
							width: _this3.props.cross.height,
							fill: _this3.props.cross.color,
							onClick: function onClick() {
								var tempObj = _this3.state.selectedMultiSelectOptions || {};
								var label = _this3.state.selectedMultiSelectLabel;
								var obj = {};
								obj = _this3.handleDeselect(label, tempObj, selectedOption);
								_this3.setState({
									selectedMultiSelectOptions: obj.tempObj,
									selectedMultiSelectLabel: obj.label,
									isCompletedMultiSelection: true
								});
								_this3.emitOnselectIfMultiselect(obj.tempObj);
							}
						}),
						react.createElement(
							'span',
							{ style: { paddingLeft: '3px' } },
							selectedOption
						)
					));
				});
				return react.createElement(
					'div',
					{ style: { display: 'inline-block' } },
					titleToRender
				);
			} else {
				return _this3.renderPlaceholder();
			}
		};

		this.getHiddenComponent = function () {
			return react.createElement(
				'div',
				{ style: { opacity: '0', width: 'auto', fontWeight: '100' } },
				_this3.longestString
			);
		};

		this.resetState = function (callBack) {
			_this3.setState({ selectedOption: '' }, function () {
				_this3.clearAllMultiSelect(function () {
					callBack && callBack();
				});
			});
		};

		this.checkLongestString = function () {
			var optionLabel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

			if (optionLabel.length > _this3.longestOptionStrLength) {
				_this3.longestOptionStrLength = optionLabel.length;
				_this3.longestString = optionLabel;
			}
		};

		this.onOptionHover = function (e, selectedObj) {
			var node = _this3.getEachOptionWrapperNode(e.target);
			if (node) node.style.background = _this3.props.optionHoverColor;
			typeof _this3.props.onOptionHover === 'function' && _this3.props.onOptionHover(node, selectedObj);
		};

		this.onOptionOut = function (e) {
			var node = _this3.getEachOptionWrapperNode(e.target);
			if (node) node.style.removeProperty('background');
		};

		this.getEachOptionWrapperNode = function (target) {
			var maxLoopLimit = 5;
			if (_this3.isEachOptionWrapper(target && target.classList)) return target;
			var temp = target;
			if (temp) {
				for (var i = 0; i < maxLoopLimit; i++) {
					temp = temp && temp.parentElement;
					if (_this3.isEachOptionWrapper(temp && temp.classList)) {
						return temp;
					}
				}
			}
			return 0;
		};

		this.isEachOptionWrapper = function (arrayData) {
			if (typeof arrayData === 'undefined') return 0;
			return arrayData.value.indexOf(reservedClassNames.eachOptionWrapper) > -1;
		};

		this.onOptionMouseEnter = function (e, selectedObj) {};

		this.isMultiSelect = function () {
			return _this3.props.multiSelect;
		};

		this.getOptionToRender = function (currentObj, classes, isMixWithTitle, index, isSelectedOption, arrLength) {
			return react.createElement(
				react_6,
				{ key: index },
				react.createElement(Option, _extends({}, _this3.props, {
					classes: classes,
					optionObj: currentObj,
					isMixWithTitle: isMixWithTitle,
					index: index,
					isSelectedOption: isSelectedOption,
					isMultiSelect: _this3.isMultiSelect(),
					tickRequiredForSingleSelect: _this3.props.tickRequiredForSingleSelect,
					shouldUseRadioBtn: _this3.props.shouldUseRadioBtn,
					onMouseOver: _this3.onOptionHover,
					onMouseOut: _this3.onOptionOut,
					onSelect: _this3.onSelect,
					defaultOptionClass: reservedClassNames.option,
					autoWidthAdjust: _this3.props.autoWidthAdjust
				})),
				!currentObj.isTitle && index !== arrLength - 1 && typeof _this3.props.optionDivider === 'function' && _this3.props.optionDivider()
			);
		};

		this.isSelectedOption = function (currentObj) {
			return _this3.isMultiSelect() ? _this3.hasInMultiSelected(currentObj) : currentObj.label === _this3.state.selectedOption;
		};

		this.getDefaultGroupDivider = function () {
			return react.createElement('div', { key: KeyGenerator.getNew(), className: 'rcd-group-divider' });
		};

		this.makeListAsOption = function (arrayData, isMixWithTitle) {
			var customClasses = '';
			var mainMenuList = null;
			var subMenuList = {};
			var arrLength = arrayData.length;
			var groupDivider = null;
			var isSelectedOption = false;
			mainMenuList = arrayData.map(function (currentObj, index) {
				_this3.checkLongestString(currentObj.label);
				customClasses = '';
				isSelectedOption = _this3.isSelectedOption(currentObj);
				if (currentObj.isSubmenu) {
					customClasses = reservedClassNames.isSubMenu + ' ' + _this3.props.optionClass;
					subMenuList[currentObj.label] = _this3.getSubmenuList(currentObj.label, currentObj.subMenu, currentObj);
				} else if (currentObj.isTitle) {
					customClasses = reservedClassNames.isTitle;
				} else {
					customClasses = _this3.props.optionClass;
				}
				if (currentObj.isTitle && index !== 0 && index !== arrLength - 1) {
					groupDivider = typeof _this3.props.groupDivider === 'function' && _this3.props.groupDivider() || _this3.getDefaultGroupDivider();
					return [groupDivider, _this3.getOptionToRender(currentObj, customClasses, isMixWithTitle, index, isSelectedOption, arrLength)];
				}
				return _this3.getOptionToRender(currentObj, customClasses, isMixWithTitle, index, isSelectedOption, arrLength);
			});
			if (_this3.props.multiSelect) {
				mainMenuList = react.createElement(Multiselect, _extends({}, _this3.props, {
					mainMenuList: mainMenuList,
					onMultiSelectDone: _this3.onMultiSelectDone,
					onClickClearAll: _this3.onClickClearAll
				}));
			} else {
				mainMenuList = react.createElement(
					'div',
					null,
					typeof _this3.props.optionHeaderer === 'function' && _this3.props.optionHeaderer(),
					mainMenuList
				);
			}
			return { mainMenuList: mainMenuList, subMenuList: subMenuList };
		};

		this.renderArrow = function () {
			return react.createElement(
				'div',
				{
					className: 'arrow-zone',
					style: {
						width: _this3.props.arrow.width,
						transform: _this3.state.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
					}
				},
				react.createElement(Arrow, { fill: _this3.props.arrow.color, width: _this3.props.arrow.width, height: _this3.props.arrow.height })
			);
		};
	};


	DropDown.defaultProps = {
		defauleSelectTitle: 'Select...', // Default Title When component init
		option: [], // option show in the drop down
		onSelect: null, // fn: callback trigger when on select of each selection of the option
		onChange: null, // fn : callback trigger when on change
		onHeaderHover: null, // fn: callback for trigger when hover on header
		onOptionHover: null, // fn: callback for trigger when hover start on option
		onClearAll: null, // fn: callback for click on clear All, Only for multi select
		wrapperClass: '', // This is the parent div for the drop down
		headerClass: '', // This is the class to overriding the header part
		optionContainerClass: '', // This is the container class for all options
		optionClass: '', // for overriding default options class
		autoWidthAdjust: true, // auto width adjustment of this component
		shouldResetState: false, // Use when re render the component. shouldResetState set "true" for reset the selected option to empty.

		multiSelect: false, // multi select
		shouldUseMultiselectOptionHeader: true, // render Default header part and apply btn.  Only if multiselected is true
		multiselectHeaderLabel: 'Filter By Value', // Label show as header : Only if multiselected is true and "shouldUseMultiselectOptionHeader" is true
		multiSelectHeaderClearAllLabel: 'Clear All', // Label for Clear multiselection: Only if multiselected is true "shouldUseMultiselectOptionHeader" is true
		shouldUseMultiselectApplyBtn: false,
		multiselectApplyBtnClass: '', // class for custom apply btn
		multiselectApplyBtnLabel: 'Apply', // custom apply btn label
		shouldAcceptOneFromGroup: false,

		groupDivider: null, // fn: return jsx, on between each group in the option: render just b4 title except first and last element
		headerOptionDivider: null, // fn: return jsx, on between header and option container
		fixedTitle: null,
		onOpenOption: null,
		selectedValues: null, // It can be object or array. Use Object for single select and array of Object for multi select
		shouldUseRadioBtn: false, // Radio btn is required or not For Single Select
		isAlwaysOpen: false,
		autoOpen: false,
		shouldUseArrow: true,
		selectedOptionColor: '#39BB9C',

		tickRequiredForSingleSelect: false,
		tick: {
			width: 12,
			height: 12,
			color: '#50b7e8'
		},
		radio: {
			width: 12,
			height: 12,
			selectedFillColor: '#50b7e8',
			unSelectedFillColor: '#77878e'
		},
		cross: {
			width: 13,
			height: 13,
			color: '#50b7e8'
		},
		arrow: {
			color: 'gray',
			width: 12,
			height: 12
		},
		optionHeaderer: null,
		removeOptionWhenSelected: false,
		selectedOptionClass: '',
		disabled: false,
		shouldOpenOptionsOnhover: false,
		optionHoverColor: '#d8eff8',
		optionDivider: null
	};
	DropDown.propTypes = {
		defauleSelectTitle: propTypes.string,
		option: propTypes.array,
		onSelect: propTypes.func,
		onChange: propTypes.func,
		onHeaderHover: propTypes.func,
		onOptionHover: propTypes.func,
		onClearAll: propTypes.func,
		wrapperClass: propTypes.string,
		headerClass: propTypes.string,
		optionContainerClass: propTypes.string,
		optionClass: propTypes.string,
		width: propTypes.string,
		height: propTypes.string,
		shouldResetState: propTypes.bool,
		multiSelect: propTypes.bool,
		shouldUseMultiselectOptionHeader: propTypes.bool,
		multiselectApplyBtnClass: propTypes.string,
		multiselectHeaderLabel: propTypes.string,
		multiSelectHeaderClearAllLabel: propTypes.string,
		shouldAcceptOneFromGroup: propTypes.bool,
		groupDivider: propTypes.func,
		headerOptionDivider: propTypes.func,
		fixedTitle: propTypes.func,
		dropDownRef: propTypes.string,
		onOpenOption: propTypes.func,
		tickRequiredForSingleSelect: propTypes.bool,
		shouldUseRadioBtn: propTypes.bool,
		isAlwaysOpen: propTypes.bool,
		autoOpen: propTypes.bool,
		shouldUseArrow: propTypes.bool,
		selectedOptionColor: propTypes.string,
		shouldUseMultiselectApplyBtn: propTypes.bool,
		optionHeader: propTypes.func,
		removeOptionWhenSelected: propTypes.bool,
		selectedOptionClass: propTypes.string,
		tick: propTypes.object,
		disabled: propTypes.bool,
		shouldOpenOptionsOnhover: propTypes.bool,
		optionHoverColor: propTypes.string,
		optionDivider: propTypes.func
	};

	return DropDown;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIi4uL3NyYy9saWIvQXJyb3cvaW5kZXguanMiLCIuLi9zcmMvbGliL0Nyb3NzL2luZGV4LmpzIiwiLi4vc3JjL2xpYi91dGlscy5qcyIsIi4uL3NyYy9saWIvTXVsdGlzZWxlY3QuanMiLCIuLi9zcmMvbGliL1Rvb2xUaXAvaW5kZXguanMiLCIuLi9zcmMvbGliL1RpY2svaW5kZXguanMiLCIuLi9zcmMvbGliL1JhZGlvLVVuc2VsZWN0ZWQvaW5kZXguanMiLCIuLi9zcmMvbGliL1JhZGlvLVNlbGVjdGVkL2luZGV4LmpzIiwiLi4vc3JjL2xpYi9PcHRpb24uanMiLCIuLi9zcmMvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjguMlxuICogcmVhY3QucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7dmFyIGs9cmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIiksbj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yLHA9bj9TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKTo2MDEwMyxxPW4/U3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKTo2MDEwNixyPW4/U3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpOjYwMTA3LHQ9bj9TeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIik6NjAxMDgsdT1uP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKTo2MDExNCx2PW4/U3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpOjYwMTA5LHc9bj9TeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKTo2MDExMCx4PW4/U3ltYm9sLmZvcihcInJlYWN0LmNvbmN1cnJlbnRfbW9kZVwiKTo2MDExMSx5PW4/U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpOjYwMTEyLHo9bj9TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIik6NjAxMTMsYWE9bj9TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKTpcbjYwMTE1LGJhPW4/U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIik6NjAxMTYsQT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3I7ZnVuY3Rpb24gY2EoYSxiLGQsYyxlLGcsaCxmKXtpZighYSl7YT12b2lkIDA7aWYodm9pZCAwPT09YilhPUVycm9yKFwiTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy5cIik7ZWxzZXt2YXIgbD1bZCxjLGUsZyxoLGZdLG09MDthPUVycm9yKGIucmVwbGFjZSgvJXMvZyxmdW5jdGlvbigpe3JldHVybiBsW20rK119KSk7YS5uYW1lPVwiSW52YXJpYW50IFZpb2xhdGlvblwifWEuZnJhbWVzVG9Qb3A9MTt0aHJvdyBhO319XG5mdW5jdGlvbiBCKGEpe2Zvcih2YXIgYj1hcmd1bWVudHMubGVuZ3RoLTEsZD1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9lcnJvci1kZWNvZGVyLmh0bWw/aW52YXJpYW50PVwiK2EsYz0wO2M8YjtjKyspZCs9XCImYXJnc1tdPVwiK2VuY29kZVVSSUNvbXBvbmVudChhcmd1bWVudHNbYysxXSk7Y2EoITEsXCJNaW5pZmllZCBSZWFjdCBlcnJvciAjXCIrYStcIjsgdmlzaXQgJXMgZm9yIHRoZSBmdWxsIG1lc3NhZ2Ugb3IgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciBmdWxsIGVycm9ycyBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLiBcIixkKX12YXIgQz17aXNNb3VudGVkOmZ1bmN0aW9uKCl7cmV0dXJuITF9LGVucXVldWVGb3JjZVVwZGF0ZTpmdW5jdGlvbigpe30sZW5xdWV1ZVJlcGxhY2VTdGF0ZTpmdW5jdGlvbigpe30sZW5xdWV1ZVNldFN0YXRlOmZ1bmN0aW9uKCl7fX0sRD17fTtcbmZ1bmN0aW9uIEUoYSxiLGQpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9RDt0aGlzLnVwZGF0ZXI9ZHx8Q31FLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9O0UucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKGEsYil7XCJvYmplY3RcIiE9PXR5cGVvZiBhJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYSYmbnVsbCE9YT9CKFwiODVcIik6dm9pZCAwO3RoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcyxhLGIsXCJzZXRTdGF0ZVwiKX07RS5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24oYSl7dGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLGEsXCJmb3JjZVVwZGF0ZVwiKX07ZnVuY3Rpb24gRigpe31GLnByb3RvdHlwZT1FLnByb3RvdHlwZTtmdW5jdGlvbiBHKGEsYixkKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPUQ7dGhpcy51cGRhdGVyPWR8fEN9dmFyIEg9Ry5wcm90b3R5cGU9bmV3IEY7XG5ILmNvbnN0cnVjdG9yPUc7ayhILEUucHJvdG90eXBlKTtILmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwO3ZhciBJPXtjdXJyZW50Om51bGx9LEo9e2N1cnJlbnQ6bnVsbH0sSz1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LEw9e2tleTohMCxyZWY6ITAsX19zZWxmOiEwLF9fc291cmNlOiEwfTtcbmZ1bmN0aW9uIE0oYSxiLGQpe3ZhciBjPXZvaWQgMCxlPXt9LGc9bnVsbCxoPW51bGw7aWYobnVsbCE9Yilmb3IoYyBpbiB2b2lkIDAhPT1iLnJlZiYmKGg9Yi5yZWYpLHZvaWQgMCE9PWIua2V5JiYoZz1cIlwiK2Iua2V5KSxiKUsuY2FsbChiLGMpJiYhTC5oYXNPd25Qcm9wZXJ0eShjKSYmKGVbY109YltjXSk7dmFyIGY9YXJndW1lbnRzLmxlbmd0aC0yO2lmKDE9PT1mKWUuY2hpbGRyZW49ZDtlbHNlIGlmKDE8Zil7Zm9yKHZhciBsPUFycmF5KGYpLG09MDttPGY7bSsrKWxbbV09YXJndW1lbnRzW20rMl07ZS5jaGlsZHJlbj1sfWlmKGEmJmEuZGVmYXVsdFByb3BzKWZvcihjIGluIGY9YS5kZWZhdWx0UHJvcHMsZil2b2lkIDA9PT1lW2NdJiYoZVtjXT1mW2NdKTtyZXR1cm57JCR0eXBlb2Y6cCx0eXBlOmEsa2V5OmcscmVmOmgscHJvcHM6ZSxfb3duZXI6Si5jdXJyZW50fX1cbmZ1bmN0aW9uIGRhKGEsYil7cmV0dXJueyQkdHlwZW9mOnAsdHlwZTphLnR5cGUsa2V5OmIscmVmOmEucmVmLHByb3BzOmEucHJvcHMsX293bmVyOmEuX293bmVyfX1mdW5jdGlvbiBOKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1wfWZ1bmN0aW9uIGVzY2FwZShhKXt2YXIgYj17XCI9XCI6XCI9MFwiLFwiOlwiOlwiPTJcIn07cmV0dXJuXCIkXCIrKFwiXCIrYSkucmVwbGFjZSgvWz06XS9nLGZ1bmN0aW9uKGEpe3JldHVybiBiW2FdfSl9dmFyIE89L1xcLysvZyxQPVtdO2Z1bmN0aW9uIFEoYSxiLGQsYyl7aWYoUC5sZW5ndGgpe3ZhciBlPVAucG9wKCk7ZS5yZXN1bHQ9YTtlLmtleVByZWZpeD1iO2UuZnVuYz1kO2UuY29udGV4dD1jO2UuY291bnQ9MDtyZXR1cm4gZX1yZXR1cm57cmVzdWx0OmEsa2V5UHJlZml4OmIsZnVuYzpkLGNvbnRleHQ6Yyxjb3VudDowfX1cbmZ1bmN0aW9uIFIoYSl7YS5yZXN1bHQ9bnVsbDthLmtleVByZWZpeD1udWxsO2EuZnVuYz1udWxsO2EuY29udGV4dD1udWxsO2EuY291bnQ9MDsxMD5QLmxlbmd0aCYmUC5wdXNoKGEpfVxuZnVuY3Rpb24gUyhhLGIsZCxjKXt2YXIgZT10eXBlb2YgYTtpZihcInVuZGVmaW5lZFwiPT09ZXx8XCJib29sZWFuXCI9PT1lKWE9bnVsbDt2YXIgZz0hMTtpZihudWxsPT09YSlnPSEwO2Vsc2Ugc3dpdGNoKGUpe2Nhc2UgXCJzdHJpbmdcIjpjYXNlIFwibnVtYmVyXCI6Zz0hMDticmVhaztjYXNlIFwib2JqZWN0XCI6c3dpdGNoKGEuJCR0eXBlb2Ype2Nhc2UgcDpjYXNlIHE6Zz0hMH19aWYoZylyZXR1cm4gZChjLGEsXCJcIj09PWI/XCIuXCIrVChhLDApOmIpLDE7Zz0wO2I9XCJcIj09PWI/XCIuXCI6YitcIjpcIjtpZihBcnJheS5pc0FycmF5KGEpKWZvcih2YXIgaD0wO2g8YS5sZW5ndGg7aCsrKXtlPWFbaF07dmFyIGY9YitUKGUsaCk7Zys9UyhlLGYsZCxjKX1lbHNlIGlmKG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGE/Zj1udWxsOihmPUEmJmFbQV18fGFbXCJAQGl0ZXJhdG9yXCJdLGY9XCJmdW5jdGlvblwiPT09dHlwZW9mIGY/ZjpudWxsKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZilmb3IoYT1mLmNhbGwoYSksaD1cbjA7IShlPWEubmV4dCgpKS5kb25lOyllPWUudmFsdWUsZj1iK1QoZSxoKyspLGcrPVMoZSxmLGQsYyk7ZWxzZVwib2JqZWN0XCI9PT1lJiYoZD1cIlwiK2EsQihcIjMxXCIsXCJbb2JqZWN0IE9iamVjdF1cIj09PWQ/XCJvYmplY3Qgd2l0aCBrZXlzIHtcIitPYmplY3Qua2V5cyhhKS5qb2luKFwiLCBcIikrXCJ9XCI6ZCxcIlwiKSk7cmV0dXJuIGd9ZnVuY3Rpb24gVShhLGIsZCl7cmV0dXJuIG51bGw9PWE/MDpTKGEsXCJcIixiLGQpfWZ1bmN0aW9uIFQoYSxiKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZudWxsIT1hLmtleT9lc2NhcGUoYS5rZXkpOmIudG9TdHJpbmcoMzYpfWZ1bmN0aW9uIGVhKGEsYil7YS5mdW5jLmNhbGwoYS5jb250ZXh0LGIsYS5jb3VudCsrKX1cbmZ1bmN0aW9uIGZhKGEsYixkKXt2YXIgYz1hLnJlc3VsdCxlPWEua2V5UHJlZml4O2E9YS5mdW5jLmNhbGwoYS5jb250ZXh0LGIsYS5jb3VudCsrKTtBcnJheS5pc0FycmF5KGEpP1YoYSxjLGQsZnVuY3Rpb24oYSl7cmV0dXJuIGF9KTpudWxsIT1hJiYoTihhKSYmKGE9ZGEoYSxlKyghYS5rZXl8fGImJmIua2V5PT09YS5rZXk/XCJcIjooXCJcIithLmtleSkucmVwbGFjZShPLFwiJCYvXCIpK1wiL1wiKStkKSksYy5wdXNoKGEpKX1mdW5jdGlvbiBWKGEsYixkLGMsZSl7dmFyIGc9XCJcIjtudWxsIT1kJiYoZz0oXCJcIitkKS5yZXBsYWNlKE8sXCIkJi9cIikrXCIvXCIpO2I9UShiLGcsYyxlKTtVKGEsZmEsYik7UihiKX1mdW5jdGlvbiBXKCl7dmFyIGE9SS5jdXJyZW50O251bGw9PT1hP0IoXCIzMDdcIik6dm9pZCAwO3JldHVybiBhfVxudmFyIFg9e0NoaWxkcmVuOnttYXA6ZnVuY3Rpb24oYSxiLGQpe2lmKG51bGw9PWEpcmV0dXJuIGE7dmFyIGM9W107VihhLGMsbnVsbCxiLGQpO3JldHVybiBjfSxmb3JFYWNoOmZ1bmN0aW9uKGEsYixkKXtpZihudWxsPT1hKXJldHVybiBhO2I9UShudWxsLG51bGwsYixkKTtVKGEsZWEsYik7UihiKX0sY291bnQ6ZnVuY3Rpb24oYSl7cmV0dXJuIFUoYSxmdW5jdGlvbigpe3JldHVybiBudWxsfSxudWxsKX0sdG9BcnJheTpmdW5jdGlvbihhKXt2YXIgYj1bXTtWKGEsYixudWxsLGZ1bmN0aW9uKGEpe3JldHVybiBhfSk7cmV0dXJuIGJ9LG9ubHk6ZnVuY3Rpb24oYSl7TihhKT92b2lkIDA6QihcIjE0M1wiKTtyZXR1cm4gYX19LGNyZWF0ZVJlZjpmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om51bGx9fSxDb21wb25lbnQ6RSxQdXJlQ29tcG9uZW50OkcsY3JlYXRlQ29udGV4dDpmdW5jdGlvbihhLGIpe3ZvaWQgMD09PWImJihiPW51bGwpO2E9eyQkdHlwZW9mOncsX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOmIsXG5fY3VycmVudFZhbHVlOmEsX2N1cnJlbnRWYWx1ZTI6YSxfdGhyZWFkQ291bnQ6MCxQcm92aWRlcjpudWxsLENvbnN1bWVyOm51bGx9O2EuUHJvdmlkZXI9eyQkdHlwZW9mOnYsX2NvbnRleHQ6YX07cmV0dXJuIGEuQ29uc3VtZXI9YX0sZm9yd2FyZFJlZjpmdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6eSxyZW5kZXI6YX19LGxhenk6ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOmJhLF9jdG9yOmEsX3N0YXR1czotMSxfcmVzdWx0Om51bGx9fSxtZW1vOmZ1bmN0aW9uKGEsYil7cmV0dXJueyQkdHlwZW9mOmFhLHR5cGU6YSxjb21wYXJlOnZvaWQgMD09PWI/bnVsbDpifX0sdXNlQ2FsbGJhY2s6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVygpLnVzZUNhbGxiYWNrKGEsYil9LHVzZUNvbnRleHQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVygpLnVzZUNvbnRleHQoYSxiKX0sdXNlRWZmZWN0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIFcoKS51c2VFZmZlY3QoYSxiKX0sdXNlSW1wZXJhdGl2ZUhhbmRsZTpmdW5jdGlvbihhLFxuYixkKXtyZXR1cm4gVygpLnVzZUltcGVyYXRpdmVIYW5kbGUoYSxiLGQpfSx1c2VEZWJ1Z1ZhbHVlOmZ1bmN0aW9uKCl7fSx1c2VMYXlvdXRFZmZlY3Q6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVygpLnVzZUxheW91dEVmZmVjdChhLGIpfSx1c2VNZW1vOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFcoKS51c2VNZW1vKGEsYil9LHVzZVJlZHVjZXI6ZnVuY3Rpb24oYSxiLGQpe3JldHVybiBXKCkudXNlUmVkdWNlcihhLGIsZCl9LHVzZVJlZjpmdW5jdGlvbihhKXtyZXR1cm4gVygpLnVzZVJlZihhKX0sdXNlU3RhdGU6ZnVuY3Rpb24oYSl7cmV0dXJuIFcoKS51c2VTdGF0ZShhKX0sRnJhZ21lbnQ6cixTdHJpY3RNb2RlOnQsU3VzcGVuc2U6eixjcmVhdGVFbGVtZW50Ok0sY2xvbmVFbGVtZW50OmZ1bmN0aW9uKGEsYixkKXtudWxsPT09YXx8dm9pZCAwPT09YT9CKFwiMjY3XCIsYSk6dm9pZCAwO3ZhciBjPXZvaWQgMCxlPWsoe30sYS5wcm9wcyksZz1hLmtleSxoPWEucmVmLGY9YS5fb3duZXI7aWYobnVsbCE9XG5iKXt2b2lkIDAhPT1iLnJlZiYmKGg9Yi5yZWYsZj1KLmN1cnJlbnQpO3ZvaWQgMCE9PWIua2V5JiYoZz1cIlwiK2Iua2V5KTt2YXIgbD12b2lkIDA7YS50eXBlJiZhLnR5cGUuZGVmYXVsdFByb3BzJiYobD1hLnR5cGUuZGVmYXVsdFByb3BzKTtmb3IoYyBpbiBiKUsuY2FsbChiLGMpJiYhTC5oYXNPd25Qcm9wZXJ0eShjKSYmKGVbY109dm9pZCAwPT09YltjXSYmdm9pZCAwIT09bD9sW2NdOmJbY10pfWM9YXJndW1lbnRzLmxlbmd0aC0yO2lmKDE9PT1jKWUuY2hpbGRyZW49ZDtlbHNlIGlmKDE8Yyl7bD1BcnJheShjKTtmb3IodmFyIG09MDttPGM7bSsrKWxbbV09YXJndW1lbnRzW20rMl07ZS5jaGlsZHJlbj1sfXJldHVybnskJHR5cGVvZjpwLHR5cGU6YS50eXBlLGtleTpnLHJlZjpoLHByb3BzOmUsX293bmVyOmZ9fSxjcmVhdGVGYWN0b3J5OmZ1bmN0aW9uKGEpe3ZhciBiPU0uYmluZChudWxsLGEpO2IudHlwZT1hO3JldHVybiBifSxpc1ZhbGlkRWxlbWVudDpOLHZlcnNpb246XCIxNi44LjJcIixcbnVuc3RhYmxlX0NvbmN1cnJlbnRNb2RlOngsdW5zdGFibGVfUHJvZmlsZXI6dSxfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDp7UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjpJLFJlYWN0Q3VycmVudE93bmVyOkosYXNzaWduOmt9fSxZPXtkZWZhdWx0Olh9LFo9WSYmWHx8WTttb2R1bGUuZXhwb3J0cz1aLmRlZmF1bHR8fFo7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuOC4yXG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMnKTtcblxuLy8gVE9ETzogdGhpcyBpcyBzcGVjaWFsIGJlY2F1c2UgaXQgZ2V0cyBpbXBvcnRlZCBkdXJpbmcgYnVpbGQuXG5cbnZhciBSZWFjdFZlcnNpb24gPSAnMTYuOC4yJztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7XG5cbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcblxuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCk7XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3IgPSB2b2lkIDA7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbi8vIFJlbHlpbmcgb24gdGhlIGBpbnZhcmlhbnQoKWAgaW1wbGVtZW50YXRpb24gbGV0cyB1c1xuLy8gcHJlc2VydmUgdGhlIGZvcm1hdCBhbmQgcGFyYW1zIGluIHRoZSB3d3cgYnVpbGRzLlxuXG4vKipcbiAqIEZvcmtlZCBmcm9tIGZianMvd2FybmluZzpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvZTY2YmEyMGFkNWJlNDMzZWI1NDQyM2YyYjA5N2Q4MjkzMjRkOWRlNi9wYWNrYWdlcy9mYmpzL3NyYy9fX2ZvcmtzX18vd2FybmluZy5qc1xuICpcbiAqIE9ubHkgY2hhbmdlIGlzIHdlIHVzZSBjb25zb2xlLndhcm4gaW5zdGVhZCBvZiBjb25zb2xlLmVycm9yLFxuICogYW5kIGRvIG5vdGhpbmcgd2hlbiAnY29uc29sZScgaXMgbm90IHN1cHBvcnRlZC5cbiAqIFRoaXMgcmVhbGx5IHNpbXBsaWZpZXMgdGhlIGNvZGUuXG4gKiAtLS1cbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgbG93UHJpb3JpdHlXYXJuaW5nID0gZnVuY3Rpb24gKCkge307XG5cbntcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgbG93UHJpb3JpdHlXYXJuaW5nID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Bsb3dQcmlvcml0eVdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG52YXIgbG93UHJpb3JpdHlXYXJuaW5nJDEgPSBsb3dQcmlvcml0eVdhcm5pbmc7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nV2l0aG91dFN0YWNrID0gZnVuY3Rpb24gKCkge307XG5cbntcbiAgd2FybmluZ1dpdGhvdXRTdGFjayA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nV2l0aG91dFN0YWNrKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgICBpZiAoYXJncy5sZW5ndGggPiA4KSB7XG4gICAgICAvLyBDaGVjayBiZWZvcmUgdGhlIGNvbmRpdGlvbiB0byBjYXRjaCB2aW9sYXRpb25zIGVhcmx5LlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCd3YXJuaW5nV2l0aG91dFN0YWNrKCkgY3VycmVudGx5IHN1cHBvcnRzIGF0IG1vc3QgOCBhcmd1bWVudHMuJyk7XG4gICAgfVxuICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICAgIH0pO1xuICAgICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7XG5cbiAgICAgIC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlLmVycm9yLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbnZhciB3YXJuaW5nV2l0aG91dFN0YWNrJDEgPSB3YXJuaW5nV2l0aG91dFN0YWNrO1xuXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgKF9jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBfY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArICcuJyArIGNhbGxlck5hbWU7XG4gICAgaWYgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsIFwiQ2FuJ3QgY2FsbCAlcyBvbiBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB5ZXQgbW91bnRlZC4gXCIgKyAnVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgbWlnaHQgaW5kaWNhdGUgYSBidWcgaW4geW91ciBhcHBsaWNhdGlvbi4gJyArICdJbnN0ZWFkLCBhc3NpZ24gdG8gYHRoaXMuc3RhdGVgIGRpcmVjdGx5IG9yIGRlZmluZSBhIGBzdGF0ZSA9IHt9O2AgJyArICdjbGFzcyBwcm9wZXJ0eSB3aXRoIHRoZSBkZXNpcmVkIHN0YXRlIGluIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgaXMgdGhlIGFic3RyYWN0IEFQSSBmb3IgYW4gdXBkYXRlIHF1ZXVlLlxuICovXG52YXIgUmVhY3ROb29wVXBkYXRlUXVldWUgPSB7XG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHdlIHdhbnQgdG8gdGVzdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQGZpbmFsXG4gICAqL1xuICBpc01vdW50ZWQ6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICAgKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICAgKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAgICpcbiAgICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICAgKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZUZvcmNlVXBkYXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdmb3JjZVVwZGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhbGwgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgb3IgYHNldFN0YXRlYCB0byBtdXRhdGUgc3RhdGUuXG4gICAqIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAgICpcbiAgICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAgICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wbGV0ZVN0YXRlIE5leHQgc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY29tcGxldGVTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3JlcGxhY2VTdGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gVGhpcyBvbmx5IGV4aXN0cyBiZWNhdXNlIF9wZW5kaW5nU3RhdGUgaXNcbiAgICogaW50ZXJuYWwuIFRoaXMgcHJvdmlkZXMgYSBtZXJnaW5nIHN0cmF0ZWd5IHRoYXQgaXMgbm90IGF2YWlsYWJsZSB0byBkZWVwXG4gICAqIHByb3BlcnRpZXMgd2hpY2ggaXMgY29uZnVzaW5nLiBUT0RPOiBFeHBvc2UgcGVuZGluZ1N0YXRlIG9yIGRvbid0IHVzZSBpdFxuICAgKiBkdXJpbmcgdGhlIG1lcmdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gTmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnc2V0U3RhdGUnKTtcbiAgfVxufTtcblxudmFyIGVtcHR5T2JqZWN0ID0ge307XG57XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuXG4vKipcbiAqIEJhc2UgY2xhc3MgaGVscGVycyBmb3IgdGhlIHVwZGF0aW5nIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICovXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIC8vIFdlIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgdXBkYXRlciBidXQgdGhlIHJlYWwgb25lIGdldHMgaW5qZWN0ZWQgYnkgdGhlXG4gIC8vIHJlbmRlcmVyLlxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcblxuLyoqXG4gKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIHRvIG11dGF0ZVxuICogc3RhdGUuIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBjYWxscyB0byBgc2V0U3RhdGVgIHdpbGwgcnVuIHN5bmNocm9ub3VzbHksXG4gKiBhcyB0aGV5IG1heSBldmVudHVhbGx5IGJlIGJhdGNoZWQgdG9nZXRoZXIuICBZb3UgY2FuIHByb3ZpZGUgYW4gb3B0aW9uYWxcbiAqIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBjYWxsIHRvIHNldFN0YXRlIGlzIGFjdHVhbGx5XG4gKiBjb21wbGV0ZWQuXG4gKlxuICogV2hlbiBhIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHRvIHNldFN0YXRlLCBpdCB3aWxsIGJlIGNhbGxlZCBhdCBzb21lIHBvaW50IGluXG4gKiB0aGUgZnV0dXJlIChub3Qgc3luY2hyb25vdXNseSkuIEl0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIHVwIHRvIGRhdGVcbiAqIGNvbXBvbmVudCBhcmd1bWVudHMgKHN0YXRlLCBwcm9wcywgY29udGV4dCkuIFRoZXNlIHZhbHVlcyBjYW4gYmUgZGlmZmVyZW50XG4gKiBmcm9tIHRoaXMuKiBiZWNhdXNlIHlvdXIgZnVuY3Rpb24gbWF5IGJlIGNhbGxlZCBhZnRlciByZWNlaXZlUHJvcHMgYnV0IGJlZm9yZVxuICogc2hvdWxkQ29tcG9uZW50VXBkYXRlLCBhbmQgdGhpcyBuZXcgc3RhdGUsIHByb3BzLCBhbmQgY29udGV4dCB3aWxsIG5vdCB5ZXQgYmVcbiAqIGFzc2lnbmVkIHRvIHRoaXMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgb3IgZnVuY3Rpb24gdG9cbiAqICAgICAgICBwcm9kdWNlIG5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBjdXJyZW50IHN0YXRlLlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBzdGF0ZSBpcyB1cGRhdGVkLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICAhKHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdmdW5jdGlvbicgfHwgcGFydGlhbFN0YXRlID09IG51bGwpID8gaW52YXJpYW50KGZhbHNlLCAnc2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuJykgOiB2b2lkIDA7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuXG4vKipcbiAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICpcbiAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICpcbiAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gKlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciB1cGRhdGUgaXMgY29tcGxldGUuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsIGNhbGxiYWNrLCAnZm9yY2VVcGRhdGUnKTtcbn07XG5cbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG57XG4gIHZhciBkZXByZWNhdGVkQVBJcyA9IHtcbiAgICBpc01vdW50ZWQ6IFsnaXNNb3VudGVkJywgJ0luc3RlYWQsIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBwZW5kaW5nIHJlcXVlc3RzIGluICcgKyAnY29tcG9uZW50V2lsbFVubW91bnQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuJ10sXG4gICAgcmVwbGFjZVN0YXRlOiBbJ3JlcGxhY2VTdGF0ZScsICdSZWZhY3RvciB5b3VyIGNvZGUgdG8gdXNlIHNldFN0YXRlIGluc3RlYWQgKHNlZSAnICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIzNikuJ11cbiAgfTtcbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICBsb3dQcmlvcml0eVdhcm5pbmckMShmYWxzZSwgJyVzKC4uLikgaXMgZGVwcmVjYXRlZCBpbiBwbGFpbiBKYXZhU2NyaXB0IFJlYWN0IGNsYXNzZXMuICVzJywgaW5mb1swXSwgaW5mb1sxXSk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGZvciAodmFyIGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcykge1xuICAgIGlmIChkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpKSB7XG4gICAgICBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcoZm5OYW1lLCBkZXByZWNhdGVkQVBJc1tmbk5hbWVdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gQ29tcG9uZW50RHVtbXkoKSB7fVxuQ29tcG9uZW50RHVtbXkucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDb252ZW5pZW5jZSBjb21wb25lbnQgd2l0aCBkZWZhdWx0IHNoYWxsb3cgZXF1YWxpdHkgY2hlY2sgZm9yIHNDVS5cbiAqL1xuZnVuY3Rpb24gUHVyZUNvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7XG4vLyBBdm9pZCBhbiBleHRyYSBwcm90b3R5cGUganVtcCBmb3IgdGhlc2UgbWV0aG9kcy5cbl9hc3NpZ24ocHVyZUNvbXBvbmVudFByb3RvdHlwZSwgQ29tcG9uZW50LnByb3RvdHlwZSk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG4gIHtcbiAgICBPYmplY3Quc2VhbChyZWZPYmplY3QpO1xuICB9XG4gIHJldHVybiByZWZPYmplY3Q7XG59XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgZGlzcGF0Y2hlci5cbiAqL1xudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBvd25lci5cbiAqXG4gKiBUaGUgY3VycmVudCBvd25lciBpcyB0aGUgY29tcG9uZW50IHdobyBzaG91bGQgb3duIGFueSBjb21wb25lbnRzIHRoYXQgYXJlXG4gKiBjdXJyZW50bHkgYmVpbmcgY29uc3RydWN0ZWQuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG52YXIgQkVGT1JFX1NMQVNIX1JFID0gL14oLiopW1xcXFxcXC9dLztcblxudmFyIGRlc2NyaWJlQ29tcG9uZW50RnJhbWUgPSBmdW5jdGlvbiAobmFtZSwgc291cmNlLCBvd25lck5hbWUpIHtcbiAgdmFyIHNvdXJjZUluZm8gPSAnJztcbiAgaWYgKHNvdXJjZSkge1xuICAgIHZhciBwYXRoID0gc291cmNlLmZpbGVOYW1lO1xuICAgIHZhciBmaWxlTmFtZSA9IHBhdGgucmVwbGFjZShCRUZPUkVfU0xBU0hfUkUsICcnKTtcbiAgICB7XG4gICAgICAvLyBJbiBERVYsIGluY2x1ZGUgY29kZSBmb3IgYSBjb21tb24gc3BlY2lhbCBjYXNlOlxuICAgICAgLy8gcHJlZmVyIFwiZm9sZGVyL2luZGV4LmpzXCIgaW5zdGVhZCBvZiBqdXN0IFwiaW5kZXguanNcIi5cbiAgICAgIGlmICgvXmluZGV4XFwuLy50ZXN0KGZpbGVOYW1lKSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBwYXRoLm1hdGNoKEJFRk9SRV9TTEFTSF9SRSk7XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgIHZhciBwYXRoQmVmb3JlU2xhc2ggPSBtYXRjaFsxXTtcbiAgICAgICAgICBpZiAocGF0aEJlZm9yZVNsYXNoKSB7XG4gICAgICAgICAgICB2YXIgZm9sZGVyTmFtZSA9IHBhdGhCZWZvcmVTbGFzaC5yZXBsYWNlKEJFRk9SRV9TTEFTSF9SRSwgJycpO1xuICAgICAgICAgICAgZmlsZU5hbWUgPSBmb2xkZXJOYW1lICsgJy8nICsgZmlsZU5hbWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHNvdXJjZUluZm8gPSAnIChhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBzb3VyY2UubGluZU51bWJlciArICcpJztcbiAgfSBlbHNlIGlmIChvd25lck5hbWUpIHtcbiAgICBzb3VyY2VJbmZvID0gJyAoY3JlYXRlZCBieSAnICsgb3duZXJOYW1lICsgJyknO1xuICB9XG4gIHJldHVybiAnXFxuICAgIGluICcgKyAobmFtZSB8fCAnVW5rbm93bicpICsgc291cmNlSW5mbztcbn07XG5cbnZhciBSZXNvbHZlZCA9IDE7XG5cblxuZnVuY3Rpb24gcmVmaW5lUmVzb2x2ZWRMYXp5Q29tcG9uZW50KGxhenlDb21wb25lbnQpIHtcbiAgcmV0dXJuIGxhenlDb21wb25lbnQuX3N0YXR1cyA9PT0gUmVzb2x2ZWQgPyBsYXp5Q29tcG9uZW50Ll9yZXN1bHQgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgJygnICsgZnVuY3Rpb25OYW1lICsgJyknIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ0NvbmN1cnJlbnRNb2RlJztcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG4gIH1cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHJldHVybiAnQ29udGV4dC5Db25zdW1lcic7XG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHJldHVybiAnQ29udGV4dC5Qcm92aWRlcic7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgdGhlbmFibGUgPSB0eXBlO1xuICAgICAgICAgIHZhciByZXNvbHZlZFRoZW5hYmxlID0gcmVmaW5lUmVzb2x2ZWRMYXp5Q29tcG9uZW50KHRoZW5hYmxlKTtcbiAgICAgICAgICBpZiAocmVzb2x2ZWRUaGVuYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUocmVzb2x2ZWRUaGVuYWJsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xuXG52YXIgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBudWxsO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cbn1cblxue1xuICAvLyBTdGFjayBpbXBsZW1lbnRhdGlvbiBpbmplY3RlZCBieSB0aGUgY3VycmVudCByZW5kZXJlci5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2sgPSBudWxsO1xuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhY2sgPSAnJztcblxuICAgIC8vIEFkZCBhbiBleHRyYSB0b3AgZnJhbWUgd2hpbGUgYW4gZWxlbWVudCBpcyBiZWluZyB2YWxpZGF0ZWRcbiAgICBpZiAoY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC50eXBlKTtcbiAgICAgIHZhciBvd25lciA9IGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50Ll9vd25lcjtcbiAgICAgIHN0YWNrICs9IGRlc2NyaWJlQ29tcG9uZW50RnJhbWUobmFtZSwgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQuX3NvdXJjZSwgb3duZXIgJiYgZ2V0Q29tcG9uZW50TmFtZShvd25lci50eXBlKSk7XG4gICAgfVxuXG4gICAgLy8gRGVsZWdhdGUgdG8gdGhlIGluamVjdGVkIHJlbmRlcmVyLXNwZWNpZmljIGltcGxlbWVudGF0aW9uXG4gICAgdmFyIGltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjaztcbiAgICBpZiAoaW1wbCkge1xuICAgICAgc3RhY2sgKz0gaW1wbCgpIHx8ICcnO1xuICAgIH1cblxuICAgIHJldHVybiBzdGFjaztcbiAgfTtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0ge1xuICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyOiBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLFxuICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXIsXG4gIC8vIFVzZWQgYnkgcmVuZGVyZXJzIHRvIGF2b2lkIGJ1bmRsaW5nIG9iamVjdC1hc3NpZ24gdHdpY2UgaW4gVU1EIGJ1bmRsZXM6XG4gIGFzc2lnbjogX2Fzc2lnblxufTtcblxue1xuICBfYXNzaWduKFJlYWN0U2hhcmVkSW50ZXJuYWxzLCB7XG4gICAgLy8gVGhlc2Ugc2hvdWxkIG5vdCBiZSBpbmNsdWRlZCBpbiBwcm9kdWN0aW9uLlxuICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWU6IFJlYWN0RGVidWdDdXJyZW50RnJhbWUsXG4gICAgLy8gU2hpbSBmb3IgUmVhY3QgRE9NIDE2LjAuMCB3aGljaCBzdGlsbCBkZXN0cnVjdHVyZWQgKGJ1dCBub3QgdXNlZCkgdGhpcy5cbiAgICAvLyBUT0RPOiByZW1vdmUgaW4gUmVhY3QgMTcuMC5cbiAgICBSZWFjdENvbXBvbmVudFRyZWVIb29rOiB7fVxuICB9KTtcbn1cblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSB3YXJuaW5nV2l0aG91dFN0YWNrJDE7XG5cbntcbiAgd2FybmluZyA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC93YXJuaW5nLWFuZC1pbnZhcmlhbnQtYXJnc1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEuYXBwbHkodW5kZWZpbmVkLCBbZmFsc2UsIGZvcm1hdCArICclcyddLmNvbmNhdChhcmdzLCBbc3RhY2tdKSk7XG4gIH07XG59XG5cbnZhciB3YXJuaW5nJDEgPSB3YXJuaW5nO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xuXG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB2b2lkIDA7XG52YXIgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG4gICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vZmIubWUvcmVhY3Qtc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgfVxuICB9O1xuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG4gICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vZmIubWUvcmVhY3Qtc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgfVxuICB9O1xuICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgbm8gaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBpbnRlcm5hbFxuICovXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9O1xuXG4gICAgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7XG4gICAgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pO1xuICAgIC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IG9mIHRoZSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWUgPSB2b2lkIDA7XG5cbiAgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuICB2YXIgcHJvcHMgPSB7fTtcblxuICB2YXIga2V5ID0gbnVsbDtcbiAgdmFyIHJlZiA9IG51bGw7XG4gIHZhciBzZWxmID0gbnVsbDtcbiAgdmFyIHNvdXJjZSA9IG51bGw7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgfVxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTtcbiAgICAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cbiAgICB7XG4gICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgfVxuICAgIH1cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB7XG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG59XG5cbi8qKlxuICogUmV0dXJuIGEgZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBSZWFjdEVsZW1lbnRzIG9mIGEgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZmFjdG9yeVxuICovXG5cblxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuXG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG4vKipcbiAqIENsb25lIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IHVzaW5nIGVsZW1lbnQgYXMgdGhlIHN0YXJ0aW5nIHBvaW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjbG9uZWVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gY2xvbmVFbGVtZW50KGVsZW1lbnQsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgISEoZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB1bmRlZmluZWQpID8gaW52YXJpYW50KGZhbHNlLCAnUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgJXMuJywgZWxlbWVudCkgOiB2b2lkIDA7XG5cbiAgdmFyIHByb3BOYW1lID0gdm9pZCAwO1xuXG4gIC8vIE9yaWdpbmFsIHByb3BzIGFyZSBjb3BpZWRcbiAgdmFyIHByb3BzID0gX2Fzc2lnbih7fSwgZWxlbWVudC5wcm9wcyk7XG5cbiAgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuICB2YXIga2V5ID0gZWxlbWVudC5rZXk7XG4gIHZhciByZWYgPSBlbGVtZW50LnJlZjtcbiAgLy8gU2VsZiBpcyBwcmVzZXJ2ZWQgc2luY2UgdGhlIG93bmVyIGlzIHByZXNlcnZlZC5cbiAgdmFyIHNlbGYgPSBlbGVtZW50Ll9zZWxmO1xuICAvLyBTb3VyY2UgaXMgcHJlc2VydmVkIHNpbmNlIGNsb25lRWxlbWVudCBpcyB1bmxpa2VseSB0byBiZSB0YXJnZXRlZCBieSBhXG4gIC8vIHRyYW5zcGlsZXIsIGFuZCB0aGUgb3JpZ2luYWwgc291cmNlIGlzIHByb2JhYmx5IGEgYmV0dGVyIGluZGljYXRvciBvZiB0aGVcbiAgLy8gdHJ1ZSBvd25lci5cbiAgdmFyIHNvdXJjZSA9IGVsZW1lbnQuX3NvdXJjZTtcblxuICAvLyBPd25lciB3aWxsIGJlIHByZXNlcnZlZCwgdW5sZXNzIHJlZiBpcyBvdmVycmlkZGVuXG4gIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICAvLyBTaWxlbnRseSBzdGVhbCB0aGUgcmVmIGZyb20gdGhlIHBhcmVudC5cbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICBvd25lciA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQ7XG4gICAgfVxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgb3ZlcnJpZGUgZXhpc3RpbmcgcHJvcHNcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdm9pZCAwO1xuICAgIGlmIChlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgZGVmYXVsdFByb3BzID0gZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcztcbiAgICB9XG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgaWYgKGNvbmZpZ1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQoZWxlbWVudC50eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpO1xufVxuXG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cblxudmFyIFNFUEFSQVRPUiA9ICcuJztcbnZhciBTVUJTRVBBUkFUT1IgPSAnOic7XG5cbi8qKlxuICogRXNjYXBlIGFuZCB3cmFwIGtleSBzbyBpdCBpcyBzYWZlIHRvIHVzZSBhcyBhIHJlYWN0aWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIGJlIGVzY2FwZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBlc2NhcGVkIGtleS5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICB2YXIgZXNjYXBlUmVnZXggPSAvWz06XS9nO1xuICB2YXIgZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPSc6ICc9MCcsXG4gICAgJzonOiAnPTInXG4gIH07XG4gIHZhciBlc2NhcGVkU3RyaW5nID0gKCcnICsga2V5KS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuXG4gIHJldHVybiAnJCcgKyBlc2NhcGVkU3RyaW5nO1xufVxuXG4vKipcbiAqIFRPRE86IFRlc3QgdGhhdCBhIHNpbmdsZSBjaGlsZCBhbmQgYW4gYXJyYXkgd2l0aCBvbmUgaXRlbSBoYXZlIHRoZSBzYW1lIGtleVxuICogcGF0dGVybi5cbiAqL1xuXG52YXIgZGlkV2FybkFib3V0TWFwcyA9IGZhbHNlO1xuXG52YXIgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXggPSAvXFwvKy9nO1xuZnVuY3Rpb24gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHRleHQpIHtcbiAgcmV0dXJuICgnJyArIHRleHQpLnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cblxudmFyIFBPT0xfU0laRSA9IDEwO1xudmFyIHRyYXZlcnNlQ29udGV4dFBvb2wgPSBbXTtcbmZ1bmN0aW9uIGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChtYXBSZXN1bHQsIGtleVByZWZpeCwgbWFwRnVuY3Rpb24sIG1hcENvbnRleHQpIHtcbiAgaWYgKHRyYXZlcnNlQ29udGV4dFBvb2wubGVuZ3RoKSB7XG4gICAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IHRyYXZlcnNlQ29udGV4dFBvb2wucG9wKCk7XG4gICAgdHJhdmVyc2VDb250ZXh0LnJlc3VsdCA9IG1hcFJlc3VsdDtcbiAgICB0cmF2ZXJzZUNvbnRleHQua2V5UHJlZml4ID0ga2V5UHJlZml4O1xuICAgIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbWFwRnVuY3Rpb247XG4gICAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBtYXBDb250ZXh0O1xuICAgIHRyYXZlcnNlQ29udGV4dC5jb3VudCA9IDA7XG4gICAgcmV0dXJuIHRyYXZlcnNlQ29udGV4dDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0OiBtYXBSZXN1bHQsXG4gICAgICBrZXlQcmVmaXg6IGtleVByZWZpeCxcbiAgICAgIGZ1bmM6IG1hcEZ1bmN0aW9uLFxuICAgICAgY29udGV4dDogbWFwQ29udGV4dCxcbiAgICAgIGNvdW50OiAwXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCkge1xuICB0cmF2ZXJzZUNvbnRleHQucmVzdWx0ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmtleVByZWZpeCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuY291bnQgPSAwO1xuICBpZiAodHJhdmVyc2VDb250ZXh0UG9vbC5sZW5ndGggPCBQT09MX1NJWkUpIHtcbiAgICB0cmF2ZXJzZUNvbnRleHRQb29sLnB1c2godHJhdmVyc2VDb250ZXh0KTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHshc3RyaW5nfSBuYW1lU29GYXIgTmFtZSBvZiB0aGUga2V5IHBhdGggc28gZmFyLlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIHRvIGludm9rZSB3aXRoIGVhY2ggY2hpbGQgZm91bmQuXG4gKiBAcGFyYW0gez8qfSB0cmF2ZXJzZUNvbnRleHQgVXNlZCB0byBwYXNzIGluZm9ybWF0aW9uIHRocm91Z2hvdXQgdGhlIHRyYXZlcnNhbFxuICogcHJvY2Vzcy5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5mdW5jdGlvbiB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZHJlbiwgbmFtZVNvRmFyLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGNoaWxkcmVuO1xuXG4gIGlmICh0eXBlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAvLyBBbGwgb2YgdGhlIGFib3ZlIGFyZSBwZXJjZWl2ZWQgYXMgbnVsbC5cbiAgICBjaGlsZHJlbiA9IG51bGw7XG4gIH1cblxuICB2YXIgaW52b2tlQ2FsbGJhY2sgPSBmYWxzZTtcblxuICBpZiAoY2hpbGRyZW4gPT09IG51bGwpIHtcbiAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGludm9rZUNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sodHJhdmVyc2VDb250ZXh0LCBjaGlsZHJlbixcbiAgICAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3MuXG4gICAgbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldENvbXBvbmVudEtleShjaGlsZHJlbiwgMCkgOiBuYW1lU29GYXIpO1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkID0gdm9pZCAwO1xuICB2YXIgbmV4dE5hbWUgPSB2b2lkIDA7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuICB2YXIgbmV4dE5hbWVQcmVmaXggPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SIDogbmFtZVNvRmFyICsgU1VCU0VQQVJBVE9SO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkLCBpKTtcbiAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAge1xuICAgICAgICAvLyBXYXJuIGFib3V0IHVzaW5nIE1hcHMgYXMgY2hpbGRyZW5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gPT09IGNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICAhZGlkV2FybkFib3V0TWFwcyA/IHdhcm5pbmckMShmYWxzZSwgJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgdW5zdXBwb3J0ZWQgYW5kIHdpbGwgbGlrZWx5IHlpZWxkICcgKyAndW5leHBlY3RlZCByZXN1bHRzLiBDb252ZXJ0IGl0IHRvIGEgc2VxdWVuY2UvaXRlcmFibGUgb2Yga2V5ZWQgJyArICdSZWFjdEVsZW1lbnRzIGluc3RlYWQuJykgOiB2b2lkIDA7XG4gICAgICAgICAgZGlkV2FybkFib3V0TWFwcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKGNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwID0gdm9pZCAwO1xuICAgICAgdmFyIGlpID0gMDtcbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgY2hpbGQgPSBzdGVwLnZhbHVlO1xuICAgICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkLCBuZXh0TmFtZSwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGFkZGVuZHVtID0gJyc7XG4gICAgICB7XG4gICAgICAgIGFkZGVuZHVtID0gJyBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgKyAnaW5zdGVhZC4nICsgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG4gICAgICB9XG4gICAgICB2YXIgY2hpbGRyZW5TdHJpbmcgPSAnJyArIGNoaWxkcmVuO1xuICAgICAgaW52YXJpYW50KGZhbHNlLCAnT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiAlcykuJXMnLCBjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcsIGFkZGVuZHVtKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuXG4vKipcbiAqIFRyYXZlcnNlcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAsIGJ1dFxuICogbWlnaHQgYWxzbyBiZSBzcGVjaWZpZWQgdGhyb3VnaCBhdHRyaWJ1dGVzOlxuICpcbiAqIC0gYHRyYXZlcnNlQWxsQ2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbiwgLi4uKWBcbiAqIC0gYHRyYXZlcnNlQWxsQ2hpbGRyZW4odGhpcy5wcm9wcy5sZWZ0UGFuZWxDaGlsZHJlbiwgLi4uKWBcbiAqXG4gKiBUaGUgYHRyYXZlcnNlQ29udGV4dGAgaXMgYW4gb3B0aW9uYWwgYXJndW1lbnQgdGhhdCBpcyBwYXNzZWQgdGhyb3VnaCB0aGVcbiAqIGVudGlyZSB0cmF2ZXJzYWwuIEl0IGNhbiBiZSB1c2VkIHRvIHN0b3JlIGFjY3VtdWxhdGlvbnMgb3IgYW55dGhpbmcgZWxzZSB0aGF0XG4gKiB0aGUgY2FsbGJhY2sgbWlnaHQgZmluZCByZWxldmFudC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIG9iamVjdC5cbiAqIEBwYXJhbSB7IWZ1bmN0aW9ufSBjYWxsYmFjayBUbyBpbnZva2UgdXBvbiB0cmF2ZXJzaW5nIGVhY2ggY2hpbGQuXG4gKiBAcGFyYW0gez8qfSB0cmF2ZXJzZUNvbnRleHQgQ29udGV4dCBmb3IgdHJhdmVyc2FsLlxuICogQHJldHVybiB7IW51bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbiBpbiB0aGlzIHN1YnRyZWUuXG4gKi9cbmZ1bmN0aW9uIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHJldHVybiB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZHJlbiwgJycsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBjb21wb25lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gY29tcG9uZW50IEEgY29tcG9uZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldENvbXBvbmVudEtleShjb21wb25lbnQsIGluZGV4KSB7XG4gIC8vIERvIHNvbWUgdHlwZWNoZWNraW5nIGhlcmUgc2luY2Ugd2UgY2FsbCB0aGlzIGJsaW5kbHkuIFdlIHdhbnQgdG8gZW5zdXJlXG4gIC8vIHRoYXQgd2UgZG9uJ3QgYmxvY2sgcG90ZW50aWFsIGZ1dHVyZSBFUyBBUElzLlxuICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ29iamVjdCcgJiYgY29tcG9uZW50ICE9PSBudWxsICYmIGNvbXBvbmVudC5rZXkgIT0gbnVsbCkge1xuICAgIC8vIEV4cGxpY2l0IGtleVxuICAgIHJldHVybiBlc2NhcGUoY29tcG9uZW50LmtleSk7XG4gIH1cbiAgLy8gSW1wbGljaXQga2V5IGRldGVybWluZWQgYnkgdGhlIGluZGV4IGluIHRoZSBzZXRcbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaFNpbmdsZUNoaWxkKGJvb2tLZWVwaW5nLCBjaGlsZCwgbmFtZSkge1xuICB2YXIgZnVuYyA9IGJvb2tLZWVwaW5nLmZ1bmMsXG4gICAgICBjb250ZXh0ID0gYm9va0tlZXBpbmcuY29udGV4dDtcblxuICBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xufVxuXG4vKipcbiAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmZvcmVhY2hcbiAqXG4gKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZm9yRWFjaEZ1bmNcbiAqIEBwYXJhbSB7Kn0gZm9yRWFjaENvbnRleHQgQ29udGV4dCBmb3IgZm9yRWFjaENvbnRleHQuXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG4gIHZhciB0cmF2ZXJzZUNvbnRleHQgPSBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQobnVsbCwgbnVsbCwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KTtcbiAgdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaFNpbmdsZUNoaWxkLCB0cmF2ZXJzZUNvbnRleHQpO1xuICByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQoYm9va0tlZXBpbmcsIGNoaWxkLCBjaGlsZEtleSkge1xuICB2YXIgcmVzdWx0ID0gYm9va0tlZXBpbmcucmVzdWx0LFxuICAgICAga2V5UHJlZml4ID0gYm9va0tlZXBpbmcua2V5UHJlZml4LFxuICAgICAgZnVuYyA9IGJvb2tLZWVwaW5nLmZ1bmMsXG4gICAgICBjb250ZXh0ID0gYm9va0tlZXBpbmcuY29udGV4dDtcblxuXG4gIHZhciBtYXBwZWRDaGlsZCA9IGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgYm9va0tlZXBpbmcuY291bnQrKyk7XG4gIGlmIChBcnJheS5pc0FycmF5KG1hcHBlZENoaWxkKSkge1xuICAgIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwobWFwcGVkQ2hpbGQsIHJlc3VsdCwgY2hpbGRLZXksIGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gYztcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChtYXBwZWRDaGlsZCAhPSBudWxsKSB7XG4gICAgaWYgKGlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgbWFwcGVkQ2hpbGQgPSBjbG9uZUFuZFJlcGxhY2VLZXkobWFwcGVkQ2hpbGQsXG4gICAgICAvLyBLZWVwIGJvdGggdGhlIChtYXBwZWQpIGFuZCBvbGQga2V5cyBpZiB0aGV5IGRpZmZlciwganVzdCBhc1xuICAgICAgLy8gdHJhdmVyc2VBbGxDaGlsZHJlbiB1c2VkIHRvIGRvIGZvciBvYmplY3RzIGFzIGNoaWxkcmVuXG4gICAgICBrZXlQcmVmaXggKyAobWFwcGVkQ2hpbGQua2V5ICYmICghY2hpbGQgfHwgY2hpbGQua2V5ICE9PSBtYXBwZWRDaGlsZC5rZXkpID8gZXNjYXBlVXNlclByb3ZpZGVkS2V5KG1hcHBlZENoaWxkLmtleSkgKyAnLycgOiAnJykgKyBjaGlsZEtleSk7XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKG1hcHBlZENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCBhcnJheSwgcHJlZml4LCBmdW5jLCBjb250ZXh0KSB7XG4gIHZhciBlc2NhcGVkUHJlZml4ID0gJyc7XG4gIGlmIChwcmVmaXggIT0gbnVsbCkge1xuICAgIGVzY2FwZWRQcmVmaXggPSBlc2NhcGVVc2VyUHJvdmlkZWRLZXkocHJlZml4KSArICcvJztcbiAgfVxuICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KGFycmF5LCBlc2NhcGVkUHJlZml4LCBmdW5jLCBjb250ZXh0KTtcbiAgdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgbWFwU2luZ2xlQ2hpbGRJbnRvQ29udGV4dCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG4vKipcbiAqIE1hcHMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm1hcFxuICpcbiAqIFRoZSBwcm92aWRlZCBtYXBGdW5jdGlvbihjaGlsZCwga2V5LCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMgVGhlIG1hcCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgcmVzdWx0LCBudWxsLCBmdW5jLCBjb250ZXh0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuZnVuY3Rpb24gY291bnRDaGlsZHJlbihjaGlsZHJlbikge1xuICByZXR1cm4gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9LCBudWxsKTtcbn1cblxuLyoqXG4gKiBGbGF0dGVuIGEgY2hpbGRyZW4gb2JqZWN0ICh0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmApIGFuZFxuICogcmV0dXJuIGFuIGFycmF5IHdpdGggYXBwcm9wcmlhdGVseSByZS1rZXllZCBjaGlsZHJlbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW50b2FycmF5XG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgY2hpbGQgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuIGFuZCB2ZXJpZmllcyB0aGF0IHRoZXJlXG4gKiBpcyBvbmx5IG9uZSBjaGlsZCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5vbmx5XG4gKlxuICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYSBzaW5nbGUgY2hpbGQgZ2V0c1xuICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cbiAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICAhaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pID8gaW52YXJpYW50KGZhbHNlLCAnUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuJykgOiB2b2lkIDA7XG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKSB7XG4gIGlmIChjYWxjdWxhdGVDaGFuZ2VkQml0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPSBudWxsO1xuICB9IGVsc2Uge1xuICAgIHtcbiAgICAgICEoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09IG51bGwgfHwgdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSAnZnVuY3Rpb24nKSA/IHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ2NyZWF0ZUNvbnRleHQ6IEV4cGVjdGVkIHRoZSBvcHRpb25hbCBzZWNvbmQgYXJndW1lbnQgdG8gYmUgYSAnICsgJ2Z1bmN0aW9uLiBJbnN0ZWFkIHJlY2VpdmVkOiAlcycsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKSA6IHZvaWQgMDtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udGV4dCA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY2FsY3VsYXRlQ2hhbmdlZEJpdHMsXG4gICAgLy8gQXMgYSB3b3JrYXJvdW5kIHRvIHN1cHBvcnQgbXVsdGlwbGUgY29uY3VycmVudCByZW5kZXJlcnMsIHdlIGNhdGVnb3JpemVcbiAgICAvLyBzb21lIHJlbmRlcmVycyBhcyBwcmltYXJ5IGFuZCBvdGhlcnMgYXMgc2Vjb25kYXJ5LiBXZSBvbmx5IGV4cGVjdFxuICAgIC8vIHRoZXJlIHRvIGJlIHR3byBjb25jdXJyZW50IHJlbmRlcmVycyBhdCBtb3N0OiBSZWFjdCBOYXRpdmUgKHByaW1hcnkpIGFuZFxuICAgIC8vIEZhYnJpYyAoc2Vjb25kYXJ5KTsgUmVhY3QgRE9NIChwcmltYXJ5KSBhbmQgUmVhY3QgQVJUIChzZWNvbmRhcnkpLlxuICAgIC8vIFNlY29uZGFyeSByZW5kZXJlcnMgc3RvcmUgdGhlaXIgY29udGV4dCB2YWx1ZXMgb24gc2VwYXJhdGUgZmllbGRzLlxuICAgIF9jdXJyZW50VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICBfY3VycmVudFZhbHVlMjogZGVmYXVsdFZhbHVlLFxuICAgIC8vIFVzZWQgdG8gdHJhY2sgaG93IG1hbnkgY29uY3VycmVudCByZW5kZXJlcnMgdGhpcyBjb250ZXh0IGN1cnJlbnRseVxuICAgIC8vIHN1cHBvcnRzIHdpdGhpbiBpbiBhIHNpbmdsZSByZW5kZXJlci4gU3VjaCBhcyBwYXJhbGxlbCBzZXJ2ZXIgcmVuZGVyaW5nLlxuICAgIF90aHJlYWRDb3VudDogMCxcbiAgICAvLyBUaGVzZSBhcmUgY2lyY3VsYXJcbiAgICBQcm92aWRlcjogbnVsbCxcbiAgICBDb25zdW1lcjogbnVsbFxuICB9O1xuXG4gIGNvbnRleHQuUHJvdmlkZXIgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX1BST1ZJREVSX1RZUEUsXG4gICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgfTtcblxuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gZmFsc2U7XG5cbiAge1xuICAgIC8vIEEgc2VwYXJhdGUgb2JqZWN0LCBidXQgcHJveGllcyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0IG9iamVjdCBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gSXQgaGFzIGEgZGlmZmVyZW50ICQkdHlwZW9mLCBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAvLyB3YXJuIGZvciB0aGUgaW5jb3JyZWN0IHVzYWdlIG9mIENvbnRleHQgYXMgYSBDb25zdW1lci5cbiAgICB2YXIgQ29uc3VtZXIgPSB7XG4gICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgX2NvbnRleHQ6IGNvbnRleHQsXG4gICAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNvbnRleHQuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzXG4gICAgfTtcbiAgICAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBub3Qgc2V0dGluZyBhIHZhbHVlLCB3aGljaCBpcyBpbnRlbnRpb25hbCBoZXJlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29uc3VtZXIsIHtcbiAgICAgIFByb3ZpZGVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Qcm92aWRlcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Qcm92aWRlcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9Qcm92aWRlcikge1xuICAgICAgICAgIGNvbnRleHQuUHJvdmlkZXIgPSBfUHJvdmlkZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUgPSBfY3VycmVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZTI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUyKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlMiA9IF9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX3RocmVhZENvdW50OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll90aHJlYWRDb3VudDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX3RocmVhZENvdW50KSB7XG4gICAgICAgICAgY29udGV4dC5fdGhyZWFkQ291bnQgPSBfdGhyZWFkQ291bnQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBDb25zdW1lcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IHRydWU7XG4gICAgICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuQ29uc3VtZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuQ29uc3VtZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjb250ZXh0LkNvbnN1bWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbWlzc2luZyBwcm9wZXJ0aWVzIGJlY2F1c2UgaXQgZG9lc24ndCB1bmRlcnN0YW5kIGRlZmluZVByb3BlcnR5XG4gICAgY29udGV4dC5Db25zdW1lciA9IENvbnN1bWVyO1xuICB9XG5cbiAge1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlciA9IG51bGw7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyMiA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxuZnVuY3Rpb24gbGF6eShjdG9yKSB7XG4gIHZhciBsYXp5VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTEFaWV9UWVBFLFxuICAgIF9jdG9yOiBjdG9yLFxuICAgIC8vIFJlYWN0IHVzZXMgdGhlc2UgZmllbGRzIHRvIHN0b3JlIHRoZSByZXN1bHQuXG4gICAgX3N0YXR1czogLTEsXG4gICAgX3Jlc3VsdDogbnVsbFxuICB9O1xuXG4gIHtcbiAgICAvLyBJbiBwcm9kdWN0aW9uLCB0aGlzIHdvdWxkIGp1c3Qgc2V0IGl0IG9uIHRoZSBvYmplY3QuXG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHZvaWQgMDtcbiAgICB2YXIgcHJvcFR5cGVzID0gdm9pZCAwO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxhenlUeXBlLCB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZGVmYXVsdFByb3BzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdEZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBkZWZhdWx0UHJvcHNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG4gICAgICAgICAgZGVmYXVsdFByb3BzID0gbmV3RGVmYXVsdFByb3BzO1xuICAgICAgICAgIC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ2RlZmF1bHRQcm9wcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByb3BUeXBlczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBwcm9wVHlwZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld1Byb3BUeXBlcykge1xuICAgICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYHByb3BUeXBlc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcbiAgICAgICAgICBwcm9wVHlwZXMgPSBuZXdQcm9wVHlwZXM7XG4gICAgICAgICAgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAncHJvcFR5cGVzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbGF6eVR5cGU7XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRSZWYocmVuZGVyKSB7XG4gIHtcbiAgICBpZiAocmVuZGVyICE9IG51bGwgJiYgcmVuZGVyLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpIHtcbiAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHJlY2VpdmVkIGEgYG1lbW9gICcgKyAnY29tcG9uZW50LiBJbnN0ZWFkIG9mIGZvcndhcmRSZWYobWVtbyguLi4pKSwgdXNlICcgKyAnbWVtbyhmb3J3YXJkUmVmKC4uLikpLicpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAhKFxuICAgICAgLy8gRG8gbm90IHdhcm4gZm9yIDAgYXJndW1lbnRzIGJlY2F1c2UgaXQgY291bGQgYmUgZHVlIHRvIHVzYWdlIG9mIHRoZSAnYXJndW1lbnRzJyBvYmplY3RcbiAgICAgIHJlbmRlci5sZW5ndGggPT09IDAgfHwgcmVuZGVyLmxlbmd0aCA9PT0gMikgPyB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzJywgcmVuZGVyLmxlbmd0aCA9PT0gMSA/ICdEaWQgeW91IGZvcmdldCB0byB1c2UgdGhlIHJlZiBwYXJhbWV0ZXI/JyA6ICdBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuJykgOiB2b2lkIDA7XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XG4gICAgICAhKHJlbmRlci5kZWZhdWx0UHJvcHMgPT0gbnVsbCAmJiByZW5kZXIucHJvcFR5cGVzID09IG51bGwpID8gd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IHByb3BUeXBlcyBvciBkZWZhdWx0UHJvcHMuICcgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD8nKSA6IHZvaWQgMDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHxcbiAgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFKTtcbn1cblxuZnVuY3Rpb24gbWVtbyh0eXBlLCBjb21wYXJlKSB7XG4gIHtcbiAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSkge1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnbWVtbzogVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBjb21wb25lbnQuIEluc3RlYWQgJyArICdyZWNlaXZlZDogJXMnLCB0eXBlID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHR5cGUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9NRU1PX1RZUEUsXG4gICAgdHlwZTogdHlwZSxcbiAgICBjb21wYXJlOiBjb21wYXJlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29tcGFyZVxuICB9O1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRGlzcGF0Y2hlcigpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7XG4gICEoZGlzcGF0Y2hlciAhPT0gbnVsbCkgPyBpbnZhcmlhbnQoZmFsc2UsICdIb29rcyBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIHRoZSBib2R5IG9mIGEgZnVuY3Rpb24gY29tcG9uZW50LiAoaHR0cHM6Ly9mYi5tZS9yZWFjdC1pbnZhbGlkLWhvb2stY2FsbCknKSA6IHZvaWQgMDtcbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAge1xuICAgICEodW5zdGFibGVfb2JzZXJ2ZWRCaXRzID09PSB1bmRlZmluZWQpID8gd2FybmluZyQxKGZhbHNlLCAndXNlQ29udGV4dCgpIHNlY29uZCBhcmd1bWVudCBpcyByZXNlcnZlZCBmb3IgZnV0dXJlICcgKyAndXNlIGluIFJlYWN0LiBQYXNzaW5nIGl0IGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnWW91IHBhc3NlZDogJXMuJXMnLCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMsIHR5cGVvZiB1bnN0YWJsZV9vYnNlcnZlZEJpdHMgPT09ICdudW1iZXInICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzJdKSA/ICdcXG5cXG5EaWQgeW91IGNhbGwgYXJyYXkubWFwKHVzZUNvbnRleHQpPyAnICsgJ0NhbGxpbmcgSG9va3MgaW5zaWRlIGEgbG9vcCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0xlYXJuIG1vcmUgYXQgaHR0cHM6Ly9mYi5tZS9ydWxlcy1vZi1ob29rcycgOiAnJykgOiB2b2lkIDA7XG5cbiAgICAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG4gICAgaWYgKENvbnRleHQuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlYWxDb250ZXh0ID0gQ29udGV4dC5fY29udGV4dDtcbiAgICAgIC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cbiAgICAgIGlmIChyZWFsQ29udGV4dC5Db25zdW1lciA9PT0gQ29udGV4dCkge1xuICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LlByb3ZpZGVyKSBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0RpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpO1xufVxuXG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xufVxuXG5mdW5jdGlvbiB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpO1xufVxuXG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHVzZUVmZmVjdChjcmVhdGUsIGlucHV0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUVmZmVjdChjcmVhdGUsIGlucHV0cyk7XG59XG5cbmZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjcmVhdGUsIGlucHV0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUxheW91dEVmZmVjdChjcmVhdGUsIGlucHV0cyk7XG59XG5cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBpbnB1dHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDYWxsYmFjayhjYWxsYmFjaywgaW5wdXRzKTtcbn1cblxuZnVuY3Rpb24gdXNlTWVtbyhjcmVhdGUsIGlucHV0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZU1lbW8oY3JlYXRlLCBpbnB1dHMpO1xufVxuXG5mdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBpbnB1dHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBpbnB1dHMpO1xufVxuXG5mdW5jdGlvbiB1c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbikge1xuICB7XG4gICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlYWN0RWxlbWVudFZhbGlkYXRvciBwcm92aWRlcyBhIHdyYXBwZXIgYXJvdW5kIGEgZWxlbWVudCBmYWN0b3J5XG4gKiB3aGljaCB2YWxpZGF0ZXMgdGhlIHByb3BzIHBhc3NlZCB0byB0aGUgZWxlbWVudC4gVGhpcyBpcyBpbnRlbmRlZCB0byBiZVxuICogdXNlZCBvbmx5IGluIERFViBhbmQgY291bGQgYmUgcmVwbGFjZWQgYnkgYSBzdGF0aWMgdHlwZSBjaGVja2VyIGZvciBsYW5ndWFnZXNcbiAqIHRoYXQgc3VwcG9ydCBpdC5cbiAqL1xuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB2b2lkIDA7XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQgJiYgZWxlbWVudFByb3BzLl9fc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgc291cmNlID0gZWxlbWVudFByb3BzLl9fc291cmNlO1xuICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICB9XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgaWYgKCFpbmZvKSB7XG4gICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG4gICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIGluZm8gPSAnXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8JyArIHBhcmVudE5hbWUgKyAnPi4nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaW5mbztcbn1cblxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcblxuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG4gIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTtcblxuICAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cbiAgdmFyIGNoaWxkT3duZXIgPSAnJztcbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gJyBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSAnICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArICcuJztcbiAgfVxuXG4gIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuICB7XG4gICAgd2FybmluZyQxKGZhbHNlLCAnRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG4gIH1cbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG59XG5cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXAgPSB2b2lkIDA7XG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG4gIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICB2YXIgcHJvcFR5cGVzID0gdm9pZCAwO1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHxcbiAgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocHJvcFR5cGVzKSB7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG4gICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSk7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7XG4gICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgbmFtZSB8fCAnVW5rbm93bicpO1xuICB9XG4gIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQgPyB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJykgOiB2b2lkIDA7XG4gIH1cbn1cblxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZnJhZ21lbnQpO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgIHdhcm5pbmckMShmYWxzZSwgJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgIHdhcm5pbmckMShmYWxzZSwgJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG4gIH1cblxuICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpO1xuXG4gIC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG4gIGlmICghdmFsaWRUeXBlKSB7XG4gICAgdmFyIGluZm8gPSAnJztcbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHByb3BzKTtcbiAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgIH1cblxuICAgIHZhciB0eXBlU3RyaW5nID0gdm9pZCAwO1xuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJzwnICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgJyAvPic7XG4gICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICB9XG5cbiAgICB3YXJuaW5nJDEoZmFsc2UsICdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcbiAgLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuICB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbGlkYXRlZEZhY3RvcnksICd0eXBlJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG93UHJpb3JpdHlXYXJuaW5nJDEoZmFsc2UsICdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcbiAgICAgICAgICB2YWx1ZTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVkRmFjdG9yeTtcbn1cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCBuZXdFbGVtZW50LnR5cGUpO1xuICB9XG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuLy8gSGVscHMgaWRlbnRpZnkgc2lkZSBlZmZlY3RzIGluIGJlZ2luLXBoYXNlIGxpZmVjeWNsZSBob29rcyBhbmQgc2V0U3RhdGUgcmVkdWNlcnM6XG5cblxuLy8gSW4gc29tZSBjYXNlcywgU3RyaWN0TW9kZSBzaG91bGQgYWxzbyBkb3VibGUtcmVuZGVyIGxpZmVjeWNsZXMuXG4vLyBUaGlzIGNhbiBiZSBjb25mdXNpbmcgZm9yIHRlc3RzIHRob3VnaCxcbi8vIEFuZCBpdCBjYW4gYmUgYmFkIGZvciBwZXJmb3JtYW5jZSBpbiBwcm9kdWN0aW9uLlxuLy8gVGhpcyBmZWF0dXJlIGZsYWcgY2FuIGJlIHVzZWQgdG8gY29udHJvbCB0aGUgYmVoYXZpb3I6XG5cblxuLy8gVG8gcHJlc2VydmUgdGhlIFwiUGF1c2Ugb24gY2F1Z2h0IGV4Y2VwdGlvbnNcIiBiZWhhdmlvciBvZiB0aGUgZGVidWdnZXIsIHdlXG4vLyByZXBsYXkgdGhlIGJlZ2luIHBoYXNlIG9mIGEgZmFpbGVkIGNvbXBvbmVudCBpbnNpZGUgaW52b2tlR3VhcmRlZENhbGxiYWNrLlxuXG5cbi8vIFdhcm4gYWJvdXQgZGVwcmVjYXRlZCwgYXN5bmMtdW5zYWZlIGxpZmVjeWNsZXM7IHJlbGF0ZXMgdG8gUkZDICM2OlxuXG5cbi8vIEdhdGhlciBhZHZhbmNlZCB0aW1pbmcgbWV0cmljcyBmb3IgUHJvZmlsZXIgc3VidHJlZXMuXG5cblxuLy8gVHJhY2Ugd2hpY2ggaW50ZXJhY3Rpb25zIHRyaWdnZXIgZWFjaCBjb21taXQuXG5cblxuLy8gT25seSB1c2VkIGluIHd3dyBidWlsZHMuXG4gLy8gVE9ETzogdHJ1ZT8gSGVyZSBpdCBtaWdodCBqdXN0IGJlIGZhbHNlLlxuXG4vLyBPbmx5IHVzZWQgaW4gd3d3IGJ1aWxkcy5cblxuXG4vLyBPbmx5IHVzZWQgaW4gd3d3IGJ1aWxkcy5cblxuXG4vLyBSZWFjdCBGaXJlOiBwcmV2ZW50IHRoZSB2YWx1ZSBhbmQgY2hlY2tlZCBhdHRyaWJ1dGVzIGZyb20gc3luY2luZ1xuLy8gd2l0aCB0aGVpciByZWxhdGVkIERPTSBwcm9wZXJ0aWVzXG5cblxuLy8gVGhlc2UgQVBJcyB3aWxsIG5vIGxvbmdlciBiZSBcInVuc3RhYmxlXCIgaW4gdGhlIHVwY29taW5nIDE2LjcgcmVsZWFzZSxcbi8vIENvbnRyb2wgdGhpcyBiZWhhdmlvciB3aXRoIGEgZmxhZyB0byBzdXBwb3J0IDE2LjYgbWlub3IgcmVsZWFzZXMgaW4gdGhlIG1lYW53aGlsZS5cbnZhciBlbmFibGVTdGFibGVDb25jdXJyZW50TW9kZUFQSXMgPSBmYWxzZTtcblxudmFyIFJlYWN0ID0ge1xuICBDaGlsZHJlbjoge1xuICAgIG1hcDogbWFwQ2hpbGRyZW4sXG4gICAgZm9yRWFjaDogZm9yRWFjaENoaWxkcmVuLFxuICAgIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICAgIHRvQXJyYXk6IHRvQXJyYXksXG4gICAgb25seTogb25seUNoaWxkXG4gIH0sXG5cbiAgY3JlYXRlUmVmOiBjcmVhdGVSZWYsXG4gIENvbXBvbmVudDogQ29tcG9uZW50LFxuICBQdXJlQ29tcG9uZW50OiBQdXJlQ29tcG9uZW50LFxuXG4gIGNyZWF0ZUNvbnRleHQ6IGNyZWF0ZUNvbnRleHQsXG4gIGZvcndhcmRSZWY6IGZvcndhcmRSZWYsXG4gIGxhenk6IGxhenksXG4gIG1lbW86IG1lbW8sXG5cbiAgdXNlQ2FsbGJhY2s6IHVzZUNhbGxiYWNrLFxuICB1c2VDb250ZXh0OiB1c2VDb250ZXh0LFxuICB1c2VFZmZlY3Q6IHVzZUVmZmVjdCxcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZTogdXNlSW1wZXJhdGl2ZUhhbmRsZSxcbiAgdXNlRGVidWdWYWx1ZTogdXNlRGVidWdWYWx1ZSxcbiAgdXNlTGF5b3V0RWZmZWN0OiB1c2VMYXlvdXRFZmZlY3QsXG4gIHVzZU1lbW86IHVzZU1lbW8sXG4gIHVzZVJlZHVjZXI6IHVzZVJlZHVjZXIsXG4gIHVzZVJlZjogdXNlUmVmLFxuICB1c2VTdGF0ZTogdXNlU3RhdGUsXG5cbiAgRnJhZ21lbnQ6IFJFQUNUX0ZSQUdNRU5UX1RZUEUsXG4gIFN0cmljdE1vZGU6IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUsXG4gIFN1c3BlbnNlOiBSRUFDVF9TVVNQRU5TRV9UWVBFLFxuXG4gIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbixcbiAgY2xvbmVFbGVtZW50OiBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbixcbiAgY3JlYXRlRmFjdG9yeTogY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uLFxuICBpc1ZhbGlkRWxlbWVudDogaXNWYWxpZEVsZW1lbnQsXG5cbiAgdmVyc2lvbjogUmVhY3RWZXJzaW9uLFxuXG4gIHVuc3RhYmxlX0NvbmN1cnJlbnRNb2RlOiBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSxcbiAgdW5zdGFibGVfUHJvZmlsZXI6IFJFQUNUX1BST0ZJTEVSX1RZUEUsXG5cbiAgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6IFJlYWN0U2hhcmVkSW50ZXJuYWxzXG59O1xuXG4vLyBOb3RlOiBzb21lIEFQSXMgYXJlIGFkZGVkIHdpdGggZmVhdHVyZSBmbGFncy5cbi8vIE1ha2Ugc3VyZSB0aGF0IHN0YWJsZSBidWlsZHMgZm9yIG9wZW4gc291cmNlXG4vLyBkb24ndCBtb2RpZnkgdGhlIFJlYWN0IG9iamVjdCB0byBhdm9pZCBkZW9wdHMuXG4vLyBBbHNvIGxldCdzIG5vdCBleHBvc2UgdGhlaXIgbmFtZXMgaW4gc3RhYmxlIGJ1aWxkcy5cblxuaWYgKGVuYWJsZVN0YWJsZUNvbmN1cnJlbnRNb2RlQVBJcykge1xuICBSZWFjdC5Db25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xuICBSZWFjdC5Qcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG4gIFJlYWN0LnVuc3RhYmxlX0NvbmN1cnJlbnRNb2RlID0gdW5kZWZpbmVkO1xuICBSZWFjdC51bnN0YWJsZV9Qcm9maWxlciA9IHVuZGVmaW5lZDtcbn1cblxuXG5cbnZhciBSZWFjdCQyID0gT2JqZWN0LmZyZWV6ZSh7XG5cdGRlZmF1bHQ6IFJlYWN0XG59KTtcblxudmFyIFJlYWN0JDMgPSAoIFJlYWN0JDIgJiYgUmVhY3QgKSB8fCBSZWFjdCQyO1xuXG4vLyBUT0RPOiBkZWNpZGUgb24gdGhlIHRvcC1sZXZlbCBleHBvcnQgZm9ybS5cbi8vIFRoaXMgaXMgaGFja3kgYnV0IG1ha2VzIGl0IHdvcmsgd2l0aCBib3RoIFJvbGx1cCBhbmQgSmVzdC5cbnZhciByZWFjdCA9IFJlYWN0JDMuZGVmYXVsdCB8fCBSZWFjdCQzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlYWN0O1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB0aHJvdyBlcnI7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBlbXB0eUZ1bmN0aW9uO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICBTeW1ib2wuZm9yICYmXG4gICAgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuICAgIDB4ZWFjNztcblxuICB2YXIgaXNWYWxpZEVsZW1lbnQgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIG9iamVjdCAhPT0gbnVsbCAmJlxuICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH07XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbi8qKlxuICogQSBjb21wb25lbnQgZm9yIENyb3NzKHgpIGJ1dHRvblxuICogQHByb3AgZmlsbCA9IGNvbG9yIHRvIGZpbGwgY29tcG9uZW50XG4gKiBAcHJvcCB3aWR0aCA9IHdpZHRoIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwcm9wIGhlaWdodCA9IGhlaWdodCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcHJvcCBvbkNsaWNrID0gZnVuY3Rpb24gd2hpY2ggcmV0dXJuIG9uQ2xpY2sgb24gdGhlIGNvbnBvbmVudFxuICogQHByb3Agc3Ryb2tlID0gc3Ryb2tlIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnJvdyhwcm9wcykge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT17XG5cdFx0XHRcdGB0aWNrIGFsaWduLWl0ZW1zLWNlbnRlciAke3Byb3BzLmNsYXNzfSBgICtcblx0XHRcdFx0KHR5cGVvZiBwcm9wcy5vbkNsaWNrID09ICdmdW5jdGlvbicgPyAnY2xpY2thYmxlJyA6ICdub3QtY2xpY2thYmxlJylcblx0XHRcdH1cblx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0cHJvcHMub25DbGljayAmJiBwcm9wcy5vbkNsaWNrKCk7XG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdDxzdmdcblx0XHRcdFx0d2lkdGg9e3Byb3BzLndpZHRofVxuXHRcdFx0XHRoZWlnaHQ9e3Byb3BzLmhlaWdodH1cblx0XHRcdFx0dmlld0JveD0nMCAwIDkgNCdcblx0XHRcdFx0dmVyc2lvbj0nMS4xJ1xuXHRcdFx0XHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG5cdFx0XHQ+XG5cdFx0XHRcdDxnIGlkPSdTeW1ib2xzJyBzdHJva2U9e3Byb3BzLmZpbGx9IHN0cm9rZVdpZHRoPScxJyBmaWxsPXtwcm9wcy5maWxsfSBzdHJva2VMaW5lam9pbj0ncm91bmQnPlxuXHRcdFx0XHRcdDxnXG5cdFx0XHRcdFx0XHRpZD0nSGVhZGVyJ1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtPSd0cmFuc2xhdGUoLTExMjAuMDAwMDAwLCAtMTkuMDAwMDAwKSdcblx0XHRcdFx0XHRcdHN0cm9rZT17cHJvcHMuZmlsbH1cblx0XHRcdFx0XHRcdHN0cm9rZVdpZHRoPScwLjUnXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGcgaWQ9J3JpZ2h0Jz5cblx0XHRcdFx0XHRcdFx0PGcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTA0MS4wMDAwMDAsIDkuMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdFx0PHBvbHlsaW5lIGlkPSdTaGFwZS1Db3B5LTInIHBvaW50cz0nODcgMTAgODMuNSAxNCA4MCAxMCcgLz5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbkFycm93LmRlZmF1bHRQcm9wcyA9IHtcblx0ZmlsbDogJ2dyYXknLFxuXHR3aWR0aDogMTIsXG5cdGhlaWdodDogMTIsXG5cdG9uQ2xpY2s6IG51bGwsXG5cdGNsYXNzOiBudWxsXG59O1xuXG5BcnJvdy5wcm9wVHlwZXMgPSB7XG5cdGZpbGw6IFByb3BUeXBlcy5zdHJpbmcsXG5cdHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuXHRoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cdG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuXHRzdHJva2U6IFByb3BUeXBlcy5zdHJpbmcsXG5cdGNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbi8qKlxuICogQSBjb21wb25lbnQgZm9yIENyb3NzKHgpIGJ1dHRvblxuICogQHByb3AgZmlsbCA9IGNvbG9yIHRvIGZpbGwgY29tcG9uZW50XG4gKiBAcHJvcCB3aWR0aCA9IHdpZHRoIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwcm9wIGhlaWdodCA9IGhlaWdodCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcHJvcCBvbkNsaWNrID0gZnVuY3Rpb24gd2hpY2ggcmV0dXJuIG9uQ2xpY2sgb24gdGhlIGNvbXBvbmVudFxuICogQHByb3AgcmVmID0gZnVuY3Rpb24gd2hpY2ggcmV0dXJuIHJlZmVyZW5jZSBvbiB0aGUgY29tcG9uZW50XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3Jvc3MocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImNyb3NzIFwiICsgKHR5cGVvZiBwcm9wcy5vbkNsaWNrID09ICdmdW5jdGlvbicgPyAnY2xpY2thYmxlJyA6ICdub3QtY2xpY2thYmxlJyl9IFxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBwcm9wcy5vbkNsaWNrICYmIHByb3BzLm9uQ2xpY2soKX0gfVxuICAgICAgICAgICAgcmVmID0geyhyZWZzKT0+e3Byb3BzLnJlZnMgJiYgcHJvcHMucmVmcyhyZWZzKX19XG4gICAgICAgID5cbiAgICAgICAgICAgIDxzdmcgXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIFxuICAgICAgICAgICAgICAgIHdpZHRoPXtwcm9wcy53aWR0aH0gXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtwcm9wcy5oZWlnaHR9IFxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoIFxuICAgICAgICAgICAgICAgICAgICBmaWxsPXtwcm9wcy5maWxsfSBcbiAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJub256ZXJvXCIgXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNOS42IDhsNi4wNTctNi4wNTdhMS4xMDUgMS4xMDUgMCAwIDAgMC0xLjYgMS4xMDUgMS4xMDUgMCAwIDAtMS42IDBMOCA2LjQgMS45NDMuMzQzYTEuMTA1IDEuMTA1IDAgMCAwLTEuNiAwIDEuMTA1IDEuMTA1IDAgMCAwIDAgMS42TDYuNCA4IC4zNDMgMTQuMDU3YTEuMTA1IDEuMTA1IDAgMCAwIDAgMS42Yy4yMjguMjI5LjQ1Ny4zNDMuOC4zNDNzLjU3MS0uMTE0LjgtLjM0M0w4IDkuNmw2LjA1NyA2LjA1N2MuMjI5LjIyOS41NzIuMzQzLjguMzQzLjIyOSAwIC41NzItLjExNC44LS4zNDNhMS4xMDUgMS4xMDUgMCAwIDAgMC0xLjZMOS42IDh6XCIgXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbkNyb3NzLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBmaWxsOiBcIiMxMzUxNDJcIixcbiAgICB3aWR0aCA6IDE2LFxuICAgIGhlaWdodCA6IDE2LFxuICAgIG9uQ2xpY2sgOiBudWxsLFxuICAgIHJlZiA6IG51bGxcbn07XG5cbkNyb3NzLnByb3BUeXBlcyA9IHtcbiAgICBmaWxsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBvbkNsaWNrIDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcmVmIDogUHJvcFR5cGVzLmZ1bmMsXG59XG5cblxuIiwiLyoqXG4gKiBtYWtlIHN1cmUgdGhhdCBpbnB1dCBEYXRhIGNvbWluZyB0byBEcm9wIGRvd24gaXMgdGhlIGZvcm1hdCBvZlxuICogIDEuIEFycmF5IG9mIE9iamVjdHMgIGxpa2U6XG4gKiAgICBbe1xuICogICAgICBsYWJlbCA6IDxsYWJlbD4gLFxuICogICAgICB2YWx1ZTogPHZhbHVlPlxuICogICAgfSwuLi5dXG4gKiAgICAgICAgICBmb3Igc3ViIG1lbnUgKExldmVsIDEgb25seSlcbiAqICAgICAgICAgICAgICBbe1xuICogICAgICAgICAgICAgICBsYWJlbCA6IDxsYWJlbD4gLFxuICogICAgICAgICAgICAgICB2YWx1ZTogPHZhbHVlPixcbiAqICAgICAgICAgICAgICAgc3ViTWVudSA6IFt7XG4gKiAgICAgICAgICAgICAgICAgbGFiZWwgOiA8bGFiZWw+ICxcbiAqICAgICAgICAgICAgICAgICB2YWx1ZTogPHZhbHVlPlxuICogICAgICAgICAgICAgICBdfSxcbiAqICAgICAgICAgICAgICAuLi5dXG4gKiAgMi4gU2ltcGxlIGFycmF5IGxpa2U6IFsuLi5dXG4gKiAgMy4gQXJyYXkgb2YgT2JqZWN0IGxpa2U6XG4gKiAgICAgIFtcbiAqICAgICAgICAge1xuICogICAgICAgICAgIHRpdGxlOiA8dGl0bGVOYW1lPixcbiAqICAgICAgICAgICBkYXRhOiBbe2xhYmVsIDogPGxhYmVsPiAsIHZhbHVlOiA8dmFsdWU+LC4uLiB9XVxuICogICAgICAgICB9LCAuLi5cbiAqICAgICAgXVxuICpcbiAqL1xuXG5leHBvcnQgY29uc3QgRGF0YUFuYWx5c2VyID0ge1xuXHRhbmFseXNlSW5wdXQ6IChkYXRhLCBzZWxlY3RlZFZhbGVzKSA9PiB7XG5cdFx0aWYgKCEoZGF0YSAmJiBEYXRhQW5hbHlzZXIuaXNBcnJheShkYXRhKSkpIHJldHVybjtcblx0XHRsZXQgcmV0dXJuT2JqID0ge1xuXHRcdFx0ZGF0YTogW10sXG5cdFx0XHRpc01peFdpdGhUaXRsZTogZmFsc2Vcblx0XHR9O1xuXHRcdC8vIGZvciBlbXB0eSBvcHRpb24gYXJyYXlcblx0XHRpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybk9iai5kYXRhLnB1c2goRGF0YUFuYWx5c2VyLmdldFN0cnVjdHVyZWREYXRhKCc8Tm8gT3B0aW9ucz4nLCAnbm9fdmFsdWUnLCB0cnVlKSk7XG5cdFx0XHRyZXR1cm4gcmV0dXJuT2JqO1xuXHRcdH1cblx0XHQvLyBmb3IgdHlwZTJcblx0XHRpZiAoRGF0YUFuYWx5c2VyLmlzU2ltcGxlQXJyYXkoZGF0YSkpIHtcblx0XHRcdHJldHVybk9iai5kYXRhID0gRGF0YUFuYWx5c2VyLnByb2Nlc3NTaW1wbGVBcnJheShkYXRhKTtcblx0XHR9XG5cdFx0aWYgKERhdGFBbmFseXNlci5hcnJheUNvbnRhaW5zT2JqZWN0KGRhdGEpKSB7XG5cdFx0XHQvLyBGb3IgVHlwZTNcblx0XHRcdGlmIChEYXRhQW5hbHlzZXIuY29udGFpblRpdGxlRmllbGQoZGF0YVswXSkgJiYgRGF0YUFuYWx5c2VyLmNvbnRhaW5EYXRhRmllbGQoZGF0YVswXSkpIHtcblx0XHRcdFx0cmV0dXJuT2JqLmlzTWl4V2l0aFRpdGxlID0gdHJ1ZTtcblx0XHRcdFx0cmV0dXJuT2JqLmRhdGEgPSBEYXRhQW5hbHlzZXIucHJvY2Vzc1RpdGxlQW5kT2JqZWN0cyhkYXRhKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEZvciBUeXBlMVxuXHRcdFx0XHRyZXR1cm5PYmouZGF0YSA9IERhdGFBbmFseXNlci5wcm9jZXNzT2JqZWN0cyhkYXRhKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJldHVybk9iajtcblx0fSxcblx0Y29udGFpblRpdGxlRmllbGQ6IGRhdGFPYmogPT4gZGF0YU9ialsndGl0bGUnXSAhPT0gdW5kZWZpbmVkLFxuXHRjb250YWluRGF0YUZpZWxkOiBkYXRhT2JqID0+IGRhdGFPYmpbJ2RhdGEnXSAhPT0gdW5kZWZpbmVkLFxuXHRwcm9jZXNzU2ltcGxlQXJyYXk6IGFycmF5RGF0YSA9PiB7XG5cdFx0bGV0IGxlbiA9IGFycmF5RGF0YS5sZW5ndGg7XG5cdFx0bGV0IG5ld0FyciA9IFtdO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdG5ld0Fyci5wdXNoKERhdGFBbmFseXNlci5nZXRTdHJ1Y3R1cmVkRGF0YShhcnJheURhdGFbaV0sIGFycmF5RGF0YVtpXSkpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3QXJyO1xuXHR9LFxuXHRwcm9jZXNzVGl0bGVBbmRPYmplY3RzOiBkYXRhID0+IHtcblx0XHRsZXQgYXJyTGVuZ3RoID0gZGF0YS5sZW5ndGg7XG5cdFx0bGV0IHJldHVybkFycmF5ID0gW107XG5cdFx0bGV0IGVhY2hPYmogPSBudWxsO1xuXHRcdGxldCBoYXNHcm91cCA9IGZhbHNlO1xuXHRcdGxldCBncm91cE5hbWUgPSAnJztcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcblx0XHRcdGVhY2hPYmogPSBkYXRhW2ldO1xuXHRcdFx0aWYgKGVhY2hPYmpbJ3RpdGxlJ10gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRyZXR1cm5BcnJheS5wdXNoKFxuXHRcdFx0XHRcdERhdGFBbmFseXNlci5nZXRTdHJ1Y3R1cmVkRGF0YShlYWNoT2JqWyd0aXRsZSddLCBpLCBlYWNoT2JqLmRpc2FibGVkLCBmYWxzZSwgW10sIHRydWUpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZWFjaE9ialsnZGF0YSddICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0aGFzR3JvdXAgPSB0cnVlO1xuXHRcdFx0XHRncm91cE5hbWUgPSBlYWNoT2JqWyd0aXRsZSddO1xuXHRcdFx0XHRyZXR1cm5BcnJheS5wdXNoKC4uLkRhdGFBbmFseXNlci5wcm9jZXNzT2JqZWN0cyhlYWNoT2JqWydkYXRhJ10sIGhhc0dyb3VwLCBncm91cE5hbWUpKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJldHVybkFycmF5O1xuXHR9LFxuXHQvKipcblx0ICogRWFjaCBvYmplY3QgaXMgdGhlIGZvcm1hdCBvZiBcIntsYWJlbCA6IDxsYWJlbD4gLCB2YWx1ZSA6IDx2YWx1ZT59XCJcblx0ICogQE5vdGU6IGdyb3VwaW5nIGlzIG9ubHkgZm9yIGxldmVsIDEgZGF0YS4gRm9yIElubmVyIEpTT04gV2UgZG9uJ3QgaGF2ZSBpdCByaWdodCBub3dcblx0ICovXG5cdHByb2Nlc3NPYmplY3RzOiAoYXJyYXlEYXRhLCBoYXNHcm91cCA9IGZhbHNlLCBncm91cE5hbWUgPSAnJykgPT4ge1xuXHRcdGxldCBsZW4gPSBhcnJheURhdGEubGVuZ3RoO1xuXHRcdGxldCBuZXdBcnIgPSBbXTtcblx0XHRsZXQgdGVtcCA9IHt9O1xuXHRcdGxldCBsYWJlbCA9ICcnO1xuXHRcdGxldCBzdWJNZW51ID0gW107XG5cdFx0bGV0IHZhbHVlO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdHN1Yk1lbnUgPSBbXTtcblx0XHRcdHRlbXAgPSBhcnJheURhdGFbaV07XG5cdFx0XHRsYWJlbCA9IHRlbXBbJ2xhYmVsJ107XG5cdFx0XHR2YWx1ZSA9IHRlbXBbJ3ZhbHVlJ107XG5cdFx0XHRpZiAoRGF0YUFuYWx5c2VyLmhhc1N1Ym1lbnUodGVtcCkpIHtcblx0XHRcdFx0c3ViTWVudS5wdXNoKHsgbGFiZWw6IGxhYmVsLCB2YWx1ZTogdmFsdWUsIG9wdGlvbnM6IHRlbXAuc3ViTWVudSB9KTtcblx0XHRcdFx0bmV3QXJyLnB1c2goRGF0YUFuYWx5c2VyLmdldFN0cnVjdHVyZWREYXRhKGxhYmVsLCB2YWx1ZSwgdGVtcC5kaXNhYmxlZCwgdHJ1ZSwgc3ViTWVudSkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKGhhc0dyb3VwKSB7XG5cdFx0XHRcdFx0bmV3QXJyLnB1c2goXG5cdFx0XHRcdFx0XHREYXRhQW5hbHlzZXIuZ2V0U3RydWN0dXJlZERhdGEoXG5cdFx0XHRcdFx0XHRcdGxhYmVsLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0XHRcdFx0dGVtcC5kaXNhYmxlZCxcblx0XHRcdFx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdFx0XHRcdFtdLFxuXHRcdFx0XHRcdFx0XHRmYWxzZSxcblx0XHRcdFx0XHRcdFx0aGFzR3JvdXAsXG5cdFx0XHRcdFx0XHRcdGdyb3VwTmFtZSxcblx0XHRcdFx0XHRcdFx0YXJyYXlEYXRhXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIG5ld0Fyci5wdXNoKERhdGFBbmFseXNlci5nZXRTdHJ1Y3R1cmVkRGF0YShsYWJlbCwgdmFsdWUsIHRlbXAuZGlzYWJsZWQpKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG5ld0Fycjtcblx0fSxcblx0aGFzU3VibWVudTogZWFjaE9iaiA9PiBlYWNoT2JqLnN1Yk1lbnUgIT09IHVuZGVmaW5lZCxcblx0Z2V0U3RydWN0dXJlZERhdGE6IChcblx0XHRsYWJlbCxcblx0XHR2YWx1ZSxcblx0XHRpc0Rpc2FibGVkID0gZmFsc2UsXG5cdFx0aXNTdWJtZW51ID0gZmFsc2UsXG5cdFx0c3ViTWVudSA9IFtdLFxuXHRcdGlzVGl0bGUgPSBmYWxzZSxcblx0XHRoYXNHcm91cCA9IGZhbHNlLFxuXHRcdGdyb3VwTmFtZSA9ICcnLFxuXHRcdGdyb3VwRWxlID0gW11cblx0KSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdGxhYmVsOiBsYWJlbCxcblx0XHRcdGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG5cdFx0XHRpc1N1Ym1lbnU6IGlzU3VibWVudSxcblx0XHRcdHN1Yk1lbnU6IHN1Yk1lbnUsXG5cdFx0XHRpc1RpdGxlOiBpc1RpdGxlLFxuXHRcdFx0aGFzR3JvdXA6IGhhc0dyb3VwLFxuXHRcdFx0Z3JvdXBOYW1lOiBncm91cE5hbWUsXG5cdFx0XHRncm91cEVsZTogZ3JvdXBFbGVcblx0XHR9O1xuXHR9LFxuXHRhcnJheUNvbnRhaW5zQXJyYXk6IGRhdGEgPT4gRGF0YUFuYWx5c2VyLmlzQXJyYXkoZGF0YVswXSksXG5cdGFycmF5Q29udGFpbnNPYmplY3Q6IGRhdGEgPT4gRGF0YUFuYWx5c2VyLmlzT2JqZWN0KGRhdGFbMF0pLFxuXHRpc1NpbXBsZUFycmF5OiBkYXRhID0+IHR5cGVvZiBkYXRhWzBdICE9PSAnb2JqZWN0Jyxcblx0aXNBcnJheTogZGF0YSA9PiB0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgJiYgZGF0YS5jb25zdHJ1Y3RvciA9PT0gQXJyYXksXG5cdGlzT2JqZWN0OiBkYXRhID0+IGRhdGEgJiYgdHlwZW9mIGRhdGEgPT09ICdvYmplY3QnICYmIGRhdGEuY29uc3RydWN0b3IgPT09IE9iamVjdFxufTtcbi8qKlxuICogU29tZSBVdGlsaXR5IGZ1bmN0aW9uc1xuICovXG5leHBvcnQgY29uc3QgVXRpbHMgPSB7XG5cdGlzRW1wdHlTdHJpbmc6IHN0ciA9PiAhc3RyIHx8IHN0ciA9PT0gJycsXG5cdGlzRW1wdHlPYmplY3Q6IG9iaiA9PiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMFxufTtcbmV4cG9ydCBjb25zdCBLZXlHZW5lcmF0b3IgPSAoZnVuY3Rpb24oKSB7XG5cdGxldCB2YWx1ZSA9IDEwMDA7XG5cdHJldHVybiB7XG5cdFx0Z2V0TmV3OiAoKSA9PiArK3ZhbHVlXG5cdH07XG59KSgpO1xuXG4vKipcbiAqIFNvbWUgcmVzZXJ2ZWQgY2xhc3NuYW1lIHVzZWQgaW4gdGhpcyBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNvbnN0IHJlc2VydmVkQ2xhc3NOYW1lcyA9IHtcblx0d3JhcHBlcjogJ3JjZC13cmFwcGVyJyxcblx0aGVhZGVyOiAncmNkLWhlYWRlcicsXG5cdG9wdGlvbkNvbnRhaW5lcjogJ3JjZC1vcHRpb24tY29udGFpbmVyJyxcblx0ZWFjaE9wdGlvbldyYXBwZXI6ICdyY2QtZWFjaC1vcHRpb24td3JhcHBlcicsXG5cdG9wdGlvbjogJ3JjZC1vcHRpb24nLFxuXHRzdWJtZW51OiAncmNkLXN1Ym1lbnUnLFxuXHRpc1N1Yk1lbnU6ICdpcy1zdWJtZW51Jyxcblx0aXNUaXRsZTogJ2lzLXRpdGxlJ1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IE11bHRpc2VsZWN0ID0gcHJvcHMgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHR7cmVuZGVySGVhZGVyKHByb3BzKX1cblx0XHRcdHtwcm9wcy5tYWluTWVudUxpc3R9XG5cdFx0XHR7cHJvcHMuc2hvdWxkVXNlTXVsdGlzZWxlY3RBcHBseUJ0biAmJiByZW5kZXJBcHBseUJ0bihwcm9wcyl9XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuY29uc3QgcmVuZGVySGVhZGVyID0gcHJvcHMgPT4ge1xuXHRpZiAodHlwZW9mIHByb3BzLm9wdGlvbkhlYWRlcmVyID09PSAnZnVuY3Rpb24nKSByZXR1cm4gcHJvcHMub3B0aW9uSGVhZGVyZXIoKTtcblx0aWYgKHByb3BzLnNob3VsZFVzZU11bHRpc2VsZWN0T3B0aW9uSGVhZGVyKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyY2Qtb3B0aW9uLWhlYWRlcic+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyY2Qtb3B0aW9uLWhlYWRlci1sYWJlbCc+e3Byb3BzLm11bHRpc2VsZWN0SGVhZGVyTGFiZWx9PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyY2Qtb3B0aW9uLWhlYWRlci1jbGVhci1hbGwnIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2tDbGVhckFsbH0+XG5cdFx0XHRcdFx0e3Byb3BzLm11bHRpU2VsZWN0SGVhZGVyQ2xlYXJBbGxMYWJlbH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59O1xuY29uc3QgcmVuZGVyQXBwbHlCdG4gPSBwcm9wcyA9PiB7XG5cdGxldCBjbGFzc05hbWUgPSBwcm9wcy5tdWx0aXNlbGVjdEFwcGx5QnRuQ2xhc3Ncblx0XHQ/IGByY2QtYXBwbHktYnRuICR7cHJvcHMubXVsdGlzZWxlY3RBcHBseUJ0bkNsYXNzfWBcblx0XHQ6ICdyY2QtYXBwbHktYnRuJztcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbkNsaWNrPXtwcm9wcy5vbk11bHRpU2VsZWN0RG9uZX0+XG5cdFx0XHR7cHJvcHMubXVsdGlzZWxlY3RBcHBseUJ0bkxhYmVsID8gcHJvcHMubXVsdGlzZWxlY3RBcHBseUJ0bkxhYmVsIDogJ0FQUExZJ31cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5leHBvcnQgZGVmYXVsdCBNdWx0aXNlbGVjdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb29sVGlwKHsgcG9zaXRpb24sIHRleHQgPSAnJywgQ1NTQ2xhc3NuYW1lLCBjaGlsZHJlbiB9KSB7XG4gIGxldCBzdHIgPSB0eXBlb2YodGV4dCkgPT09IFwic3RyaW5nXCIgPyB0ZXh0IDogdGV4dC50b1N0cmluZygpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e0NTU0NsYXNzbmFtZSB8fCBcImVtdG9vbHRpcC1jb250YWluZXJcIn0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICB7IHN0ciAmJiBzdHIubGVuZ3RoICE9PSAwID9cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcC10ZXh0XCI+e3N0cn08L3NwYW4+XG4gICAgICA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblRvb2xUaXAucHJvcFR5cGVzID0ge1xuICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcInRvcFwiLCBcInJpZ2h0XCIsIFwiYm90dG9tXCIsIFwibGVmdFwiXSksXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIENTU0NsYXNzbmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblRvb2xUaXAuZGVmYXVsdFByb3BzID0ge1xuICBwb3NpdGlvbjogXCJib3R0b21cIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG4vKipcbiAqIEEgY29tcG9uZW50IGZvciBDcm9zcyh4KSBidXR0b25cbiAqIEBwcm9wIGZpbGwgPSBjb2xvciB0byBmaWxsIGNvbXBvbmVudFxuICogQHByb3Agd2lkdGggPSB3aWR0aCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcHJvcCBoZWlnaHQgPSBoZWlnaHQgb2YgdGhlIGNvbXBvbmVudFxuICogQHByb3Agb25DbGljayA9IGZ1bmN0aW9uIHdoaWNoIHJldHVybiBvbkNsaWNrIG9uIHRoZSBjb25wb25lbnRcbiAqIEBwcm9wIHN0cm9rZSA9IHN0cm9rZSBvZiB0aGUgY29tcG9uZW50XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGljayhwcm9wcykge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT17XG5cdFx0XHRcdGB0aWNrIGFsaWduLWl0ZW1zLWNlbnRlciAke3Byb3BzLmNsYXNzfSBgICtcblx0XHRcdFx0KHR5cGVvZiBwcm9wcy5vbkNsaWNrID09ICdmdW5jdGlvbicgPyAnY2xpY2thYmxlJyA6ICdub3QtY2xpY2thYmxlJylcblx0XHRcdH1cblx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0cHJvcHMub25DbGljayAmJiBwcm9wcy5vbkNsaWNrKCk7XG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD17cHJvcHMud2lkdGh9IGhlaWdodD17cHJvcHMuaGVpZ2h0fSB2aWV3Qm94PScwIDAgMTMgMTInPlxuXHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdGZpbGw9e3Byb3BzLnN0cm9rZX1cblx0XHRcdFx0XHRmaWxsUnVsZT0nbm9uemVybydcblx0XHRcdFx0XHRzdHJva2U9e3Byb3BzLnN0cm9rZX1cblx0XHRcdFx0XHRzdHJva2VXaWR0aD0nMS4yJ1xuXHRcdFx0XHRcdGQ9J002LjA5NSAxMC44TDEuNTUyIDcuNDk3YS44MzYuODM2IDAgMCAxLS4zNDUtLjc4NS44NTcuODU3IDAgMCAxIC41MzctLjY3OS45Mi45MiAwIDAgMSAuODguMTA3bDMuMDQgMi4yMSA0LjcwNy02Ljc2N2EuOS45IDAgMCAxIC43OTctLjM4MWMuMzE3LjAxOS42LjIuNzQuNDczYS44MjEuODIxIDAgMCAxLS4wNi44NTJMNi4wOTUgMTAuOHonXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L3N2Zz5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuVGljay5kZWZhdWx0UHJvcHMgPSB7XG5cdHdpZHRoOiAxMixcblx0aGVpZ2h0OiAxMixcblx0b25DbGljazogbnVsbCxcblx0c3Ryb2tlOiAnIzEzNTE0MicsXG5cdGNsYXNzOiBudWxsXG59O1xuXG5UaWNrLnByb3BUeXBlcyA9IHtcblx0ZmlsbDogUHJvcFR5cGVzLnN0cmluZyxcblx0d2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG5cdGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblx0b25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG5cdHN0cm9rZTogUHJvcFR5cGVzLnN0cmluZyxcblx0Y2xhc3M6IFByb3BUeXBlcy5zdHJpbmdcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBBIGNvbXBvbmVudCBmb3IgRHJvcCBEb3duLlxuICogQHByb3AgZmlsbCA9IGNvbG9yIHRvIGZpbGwgY29tcG9uZW50XG4gKiBAcHJvcCB3aWR0aCA9IHdpZHRoIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwcm9wIGhlaWdodCA9IGhlaWdodCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcHJvcCBvbkNsaWNrID0gZnVuY3Rpb24gd2hpY2ggcmV0dXJuIG9uQ2xpY2sgb24gdGhlIGNvbnBvbmVudFxuICogQHByb3Agc3Ryb2tlID0gc3Ryb2tlIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYWRpb1Vuc2VsZWN0ZWQocHJvcHMpIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHRgYWxpZ24taXRlbXMtY2VudGVyICR7cHJvcHMuY2xhc3N9IGAgK1xuXHRcdFx0XHQodHlwZW9mIHByb3BzLm9uQ2xpY2sgPT0gJ2Z1bmN0aW9uJyA/ICdjbGlja2FibGUnIDogJ25vdC1jbGlja2FibGUnKVxuXHRcdFx0fVxuXHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRwcm9wcy5vbkNsaWNrICYmIHByb3BzLm9uQ2xpY2soKTtcblx0XHRcdH19XG5cdFx0XHRzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxuXHRcdD5cblx0XHRcdDxzdmcgaGVpZ2h0PXtwcm9wcy5oZWlnaHR9IHZpZXdCb3g9JzAgMCAxMyAxMycgd2lkdGg9e3Byb3BzLndpZHRofSB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPlxuXHRcdFx0XHQ8ZyBmaWxsPXtwcm9wcy5maWxsfSBmaWxsUnVsZT0nZXZlbm9kZCc+XG5cdFx0XHRcdFx0PGcgc3Ryb2tlPXtwcm9wcy5zdHJva2V9IHN0cm9rZVdpZHRoPScuNSc+XG5cdFx0XHRcdFx0XHQ8Y2lyY2xlIGN4PSc2LjUnIGN5PSc2LjUnIHI9JzYuMjUnIC8+XG5cdFx0XHRcdFx0XHQ8Y2lyY2xlIGN4PSc2LjUnIGN5PSc2LjUnIHI9JzMuMjUnIC8+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuUmFkaW9VbnNlbGVjdGVkLmRlZmF1bHRQcm9wcyA9IHtcblx0ZmlsbDogJ25vbmUnLFxuXHR3aWR0aDogMTMsXG5cdGhlaWdodDogMTMsXG5cdG9uQ2xpY2s6IG51bGwsXG5cdHN0cm9rZTogJyM3Nzg3OGUnLFxuXHRjbGFzczogbnVsbFxufTtcblxuUmFkaW9VbnNlbGVjdGVkLnByb3BUeXBlcyA9IHtcblx0ZmlsbDogUHJvcFR5cGVzLnN0cmluZyxcblx0d2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG5cdGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblx0b25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG5cdHN0cm9rZTogUHJvcFR5cGVzLnN0cmluZyxcblx0Y2xhc3M6IFByb3BUeXBlcy5zdHJpbmdcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBBIGNvbXBvbmVudCBmb3IgRHJvcCBEb3duLlxuICogQHByb3AgZmlsbCA9IGNvbG9yIHRvIGZpbGwgY29tcG9uZW50XG4gKiBAcHJvcCB3aWR0aCA9IHdpZHRoIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwcm9wIGhlaWdodCA9IGhlaWdodCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcHJvcCBvbkNsaWNrID0gZnVuY3Rpb24gd2hpY2ggcmV0dXJuIG9uQ2xpY2sgb24gdGhlIGNvbnBvbmVudFxuICogQHByb3Agc3Ryb2tlID0gc3Ryb2tlIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYWRpb1NlbGVjdGVkKHByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0YGFsaWduLWl0ZW1zLWNlbnRlciAke3Byb3BzLmNsYXNzfSBgICtcblx0XHRcdFx0KHR5cGVvZiBwcm9wcy5vbkNsaWNrID09ICdmdW5jdGlvbicgPyAnY2xpY2thYmxlJyA6ICdub3QtY2xpY2thYmxlJylcblx0XHRcdH1cblx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0cHJvcHMub25DbGljayAmJiBwcm9wcy5vbkNsaWNrKCk7XG5cdFx0XHR9fVxuXHRcdFx0c3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cblx0XHQ+XG5cdFx0XHQ8c3ZnIGhlaWdodD17cHJvcHMuaGVpZ2h0fSB2aWV3Qm94PScwIDAgMTMgMTMnIHdpZHRoPXtwcm9wcy53aWR0aH0geG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz5cblx0XHRcdFx0PGcgZmlsbD17cHJvcHMuZmlsbH0gZmlsbFJ1bGU9J2V2ZW5vZGQnPlxuXHRcdFx0XHRcdDxnIHN0cm9rZT17cHJvcHMuc3Ryb2tlfSBzdHJva2VXaWR0aD0nLjUnPlxuXHRcdFx0XHRcdFx0PGNpcmNsZSBjeD0nNi41JyBjeT0nNi41JyByPSc2LjI1JyAvPlxuXHRcdFx0XHRcdFx0PGNpcmNsZSBjeD0nNi41JyBjeT0nNi41JyBmaWxsPXtwcm9wcy5zdHJva2V9IHI9JzMuMjUnIC8+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuUmFkaW9TZWxlY3RlZC5kZWZhdWx0UHJvcHMgPSB7XG5cdGZpbGw6ICdub25lJyxcblx0d2lkdGg6IDEzLFxuXHRoZWlnaHQ6IDEzLFxuXHRvbkNsaWNrOiBudWxsLFxuXHRzdHJva2U6ICcjNTBiN2U4Jyxcblx0Y2xhc3M6IG51bGxcbn07XG5cblJhZGlvU2VsZWN0ZWQucHJvcFR5cGVzID0ge1xuXHRmaWxsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHR3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcblx0aGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXHRvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblx0c3Ryb2tlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRjbGFzczogUHJvcFR5cGVzLnN0cmluZ1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVG9vbFRpcCBmcm9tICcuL1Rvb2xUaXAnO1xuaW1wb3J0IFRpY2sgZnJvbSAnLi9UaWNrJztcbmltcG9ydCBSYWRpb1Vuc2VsZWN0ZWQgZnJvbSAnLi9SYWRpby1VbnNlbGVjdGVkJztcbmltcG9ydCBSYWRpb1NlbGVjdGVkIGZyb20gJy4vUmFkaW8tU2VsZWN0ZWQnO1xuXG5jb25zdCBPcHRpb24gPSBwcm9wcyA9PiB7XG5cdGxldCB7IG9wdGlvbk9iaiwgY2xhc3NlcywgaXNNaXhXaXRoVGl0bGUsIGluZGV4LCBpc1NlbGVjdGVkT3B0aW9uLCBpc011bHRpU2VsZWN0IH0gPSBwcm9wcztcblx0aWYgKG9wdGlvbk9iai5pc1RpdGxlKSB7XG5cdFx0cmV0dXJuIHJlbmRlclRpdGxlQXNPcHRpb25zKGNsYXNzZXMsIG9wdGlvbk9iaiwgaW5kZXgpO1xuXHR9IGVsc2Uge1xuXHRcdGxldCBjbGFzc05hbWUgPSAncmNkLWVhY2gtb3B0aW9uLXdyYXBwZXInO1xuXHRcdGlmIChpc011bHRpU2VsZWN0IHx8IHByb3BzLnRpY2tSZXF1aXJlZEZvclNpbmdsZVNlbGVjdCB8fCBwcm9wcy5zaG91bGRVc2VSYWRpb0J0biB8fCBpc01peFdpdGhUaXRsZSlcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZSArICcgcmNkLW9wdGlvbi1ob2xkZXInO1xuXHRcdGlmIChwcm9wcy5yZW1vdmVPcHRpb25XaGVuU2VsZWN0ZWQgJiYgcHJvcHMuaXNTZWxlY3RlZE9wdGlvbikgY2xhc3NOYW1lID0gY2xhc3NOYW1lICsgJyBuby1kaXNwbGF5Jztcblx0XHRpZiAob3B0aW9uT2JqLmlzRGlzYWJsZWQpIGNsYXNzZXMgKz0gJyByY2Qtb3B0aW9uLWRpc2FibGUnO1xuXHRcdGlmIChpc1NlbGVjdGVkT3B0aW9uKSBjbGFzc2VzICs9ICcgZm9udC1ib2xkICcgKyBwcm9wcy5zZWxlY3RlZE9wdGlvbkNsYXNzO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuXHRcdFx0XHRvbk1vdXNlT3Zlcj17ZSA9PiBwcm9wcy5vbk1vdXNlT3ZlcihlLCBvcHRpb25PYmopfVxuXHRcdFx0XHRvbk1vdXNlT3V0PXtlID0+IHByb3BzLm9uTW91c2VPdXQoZSwgb3B0aW9uT2JqKX1cblx0XHRcdFx0a2V5PXtgJHtpbmRleH1gfVxuXHRcdFx0XHRvbkNsaWNrPXtlID0+IHtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbk9iai5pc0Rpc2FibGVkKSBwcm9wcy5vblNlbGVjdChvcHRpb25PYmosIGUpO1xuXHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHR7cHJvcHMuaXNNdWx0aVNlbGVjdCAmJiByZW5kZXJUaWNrKGlzU2VsZWN0ZWRPcHRpb24sIHByb3BzLnRpY2spfVxuXHRcdFx0XHR7IXByb3BzLmlzTXVsdGlTZWxlY3QgJiYgcHJvcHMudGlja1JlcXVpcmVkRm9yU2luZ2xlU2VsZWN0ICYmIHJlbmRlclRpY2soaXNTZWxlY3RlZE9wdGlvbiwgcHJvcHMudGljayl9XG5cdFx0XHRcdHshcHJvcHMuaXNNdWx0aVNlbGVjdCAmJlxuXHRcdFx0XHRcdHByb3BzLnNob3VsZFVzZVJhZGlvQnRuICYmXG5cdFx0XHRcdFx0cmVuZGVyUmFkaW9CdG4oaXNTZWxlY3RlZE9wdGlvbiwgb3B0aW9uT2JqLCBwcm9wcy5yYWRpbyl9XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRkYXRhLWtleT17b3B0aW9uT2JqLnZhbHVlfVxuXHRcdFx0XHRcdGtleT17b3B0aW9uT2JqLnZhbHVlfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17cHJvcHMuZGVmYXVsdE9wdGlvbkNsYXNzICsgJyAnICsgY2xhc3Nlc31cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHtyZW5kZXJPcHRpb25MYWJlbChvcHRpb25PYmoubGFiZWwsIHByb3BzLmF1dG9XaWR0aEFkanVzdCl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufTtcblxuY29uc3QgcmVuZGVyVGl0bGVBc09wdGlvbnMgPSAoY2xhc3Nlcywgb3B0aW9uT2JqLCBpbmRleCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYga2V5PXtgJHtpbmRleH1gfSBjbGFzc05hbWU9e2NsYXNzZXN9PlxuXHRcdFx0e29wdGlvbk9iai5sYWJlbH1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmNvbnN0IHJlbmRlck9wdGlvbkxhYmVsID0gKGxhYmVsTmFtZSwgYXV0b1dpZHRoQWRqdXN0KSA9PiB7XG5cdHJldHVybiBsYWJlbE5hbWU7XG5cdGlmIChsYWJlbE5hbWUubGVuZ3RoID4gMTkgJiYgYXV0b1dpZHRoQWRqdXN0KSB7XG5cdFx0cmV0dXJuIDxUb29sVGlwIHRleHQ9e2xhYmVsTmFtZX0+e2xhYmVsTmFtZS5zdWJzdHIoMCwgMTYpICsgJy4uLiAnfTwvVG9vbFRpcD47XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGxhYmVsTmFtZTtcblx0fVxufTtcblxuY29uc3QgcmVuZGVyVGljayA9IChpc1NlbGVjdGVkT3B0aW9uLCBwcm9wcykgPT4ge1xuXHRyZXR1cm4gaXNTZWxlY3RlZE9wdGlvbiA/IChcblx0XHQ8VGljayB3aWR0aD17cHJvcHMud2lkdGh9IGhlaWdodD17cHJvcHMuaGVpZ2h0fSBzdHJva2U9e3Byb3BzLmNvbG9yfSAvPlxuXHQpIDogKFxuXHRcdDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogcHJvcHMud2lkdGggKyAncHgnIH19IC8+XG5cdCk7XG59O1xuY29uc3QgcmVuZGVyUmFkaW9CdG4gPSAoaXNTZWxlY3RlZE9wdGlvbiwgY3VycmVudE9iaiwgcHJvcHMpID0+IHtcblx0aWYgKGlzU2VsZWN0ZWRPcHRpb24pXG5cdFx0cmV0dXJuIDxSYWRpb1NlbGVjdGVkIHdpZHRoPXtwcm9wcy53aWR0aH0gaGVpZ2h0PXtwcm9wcy5oZWlnaHR9IHN0cm9rZT17cHJvcHMuc2VsZWN0ZWRGaWxsQ29sb3J9IC8+O1xuXHRyZXR1cm4gPFJhZGlvVW5zZWxlY3RlZCB3aWR0aD17cHJvcHMud2lkdGh9IGhlaWdodD17cHJvcHMuaGVpZ2h0fSBzdHJva2U9e3Byb3BzLnVuU2VsZWN0ZWRGaWxsQ29sb3J9IC8+O1xufTtcbmV4cG9ydCBkZWZhdWx0IE9wdGlvbjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAnLi9pbmRleC5zY3NzJztcbmltcG9ydCBBcnJvdyBmcm9tICcuL0Fycm93JztcbmltcG9ydCBDcm9zcyBmcm9tICcuL0Nyb3NzJztcbmltcG9ydCB7IERhdGFBbmFseXNlciwgVXRpbHMsIEtleUdlbmVyYXRvciwgcmVzZXJ2ZWRDbGFzc05hbWVzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgTXVsdGlTZWxlY3QgZnJvbSAnLi9NdWx0aXNlbGVjdCc7XG5pbXBvcnQgT3B0aW9uIGZyb20gJy4vT3B0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcERvd24gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2VsZWN0ZWRPcHRpb246ICcnLCAvL3RoaXMucHJvcHMuZGVmYXVsZVNlbGVjdFRpdGxlLFxuXHRcdFx0c2VsZWN0ZWRNdWx0aVNlbGVjdE9wdGlvbnM6IHt9LFxuXHRcdFx0c2VsZWN0ZWRNdWx0aVNlbGVjdExhYmVsOiAnJyxcblx0XHRcdHdpZHRoOiAwLFxuXHRcdFx0aXNDb21wbGV0ZWRNdWx0aVNlbGVjdGlvbjogdHJ1ZSxcblx0XHRcdGlzT3BlbjogZmFsc2Vcblx0XHR9O1xuXHRcdHRoaXMud3JhcHBlclJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXHR9XG5cdGxvbmdlc3RPcHRpb25TdHJMZW5ndGggPSAtMTtcblx0bG9uZ2VzdFN0cmluZyA9ICd4Jztcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5saXN0ZW5DbGlja291dHNpZGVFdmVudCgpO1xuXHRcdHRoaXMuc2V0UHJlc2VsZWN0ZWRWYWx1ZSgpO1xuXHRcdHRoaXMucHJvcHMuYXV0b09wZW4gJiYgdGhpcy5zaG93T3B0aW9uKCk7XG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrb3V0c2lkZSk7XG5cdH1cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcblx0XHRuZXh0UHJvcHMuc2hvdWxkUmVzZXRTdGF0ZSAmJiB0aGlzLnJlc2V0U3RhdGUoKTtcblx0fVxuXHRzZXRQcmVzZWxlY3RlZFZhbHVlID0gKG5leHRQcm9wcywgY2FsbEJhY2spID0+IHtcblx0XHRsZXQgcHJvcHMgPSBuZXh0UHJvcHMgPyBuZXh0UHJvcHMgOiB0aGlzLnByb3BzO1xuXHRcdGlmIChwcm9wcy5tdWx0aVNlbGVjdCkge1xuXHRcdFx0dGhpcy5oYW5kbGVQcmVTZWxlY3RlZEZvck11bHRpU2VsZWN0aW9uKHByb3BzLCAoKSA9PiBjYWxsQmFjayAmJiBjYWxsQmFjaygpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cHJvcHMuc2VsZWN0ZWRWYWx1ZXMgJiZcblx0XHRcdFx0cHJvcHMuc2VsZWN0ZWRWYWx1ZXMuY29uc3RydWN0b3IgPT09IE9iamVjdCAmJlxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRPcHRpb246IHByb3BzLnNlbGVjdGVkVmFsdWVzWydsYWJlbCddIH0sICgpID0+IGNhbGxCYWNrICYmIGNhbGxCYWNrKCkpO1xuXHRcdH1cblx0fTtcblx0LyoqXG5cdCAqIE1ha2Ugc3VyZSB0aGF0IFwidGhpcy5wcm9wcy5zZWxlY3RlZFZhbHVlc1wiIHdpbGwgYmUgYXJyYXkgb2YgT2JqZWN0c1xuXHQgKiB0aXRsZSBuYW1lIHByZXNlbnQgaWYgaXQgaGFzIFwiR3JvdXBpbmdcIi5cblx0ICogRWc6IFt7XG5cdCAqICAgICAgbGFiZWw6IDxsYWJlbD4sXG5cdCAqICAgICAgdmFsdWU6IDx2YWx1ZT4sXG5cdCAqICAgICAgdGl0bGU6IDx0aXRsZU5hbWU+LFxuXHQgKiAgICB9LC4uLl1cblx0ICovXG5cdGhhbmRsZVByZVNlbGVjdGVkRm9yTXVsdGlTZWxlY3Rpb24gPSAocHJvcHMsIGNhbGxCYWNrKSA9PiB7XG5cdFx0bGV0IHRlbXBPYmogPSB7fTtcblx0XHRsZXQgZGF0YVRvU2V0U3RhdGUgPSB7fTtcblx0XHRsZXQgbGFiZWxUb1Nob3cgPSAnJztcblx0XHRpZiAocHJvcHMuc2VsZWN0ZWRWYWx1ZXMgJiYgcHJvcHMuc2VsZWN0ZWRWYWx1ZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5zZWxlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR0ZW1wT2JqID0gcHJvcHMuc2VsZWN0ZWRWYWx1ZXNbaV07XG5cdFx0XHRcdGlmIChEYXRhQW5hbHlzZXIuY29udGFpblRpdGxlRmllbGQodGVtcE9iaikpIHtcblx0XHRcdFx0XHQvLyBUbyBEbyA6OiBpZiBpdCBoYXMgYWNjZXB0ID4gMSBkYXRhXG5cdFx0XHRcdFx0bGFiZWxUb1Nob3cgKz0gdGVtcE9ialsnbGFiZWwnXSArICcsICc7XG5cdFx0XHRcdFx0ZGF0YVRvU2V0U3RhdGVbdGVtcE9iai50aXRsZV0gPSB7fTtcblx0XHRcdFx0XHRkYXRhVG9TZXRTdGF0ZVt0ZW1wT2JqLnRpdGxlXVt0ZW1wT2JqLmxhYmVsXSA9IERhdGFBbmFseXNlci5nZXRTdHJ1Y3R1cmVkRGF0YShcblx0XHRcdFx0XHRcdHRlbXBPYmoubGFiZWwsXG5cdFx0XHRcdFx0XHR0ZW1wT2JqLnZhbHVlLFxuXHRcdFx0XHRcdFx0dGVtcE9iai5kaXNhYmxlZCxcblx0XHRcdFx0XHRcdGZhbHNlLFxuXHRcdFx0XHRcdFx0W10sXG5cdFx0XHRcdFx0XHR0ZW1wT2JqLnRpdGxlLFxuXHRcdFx0XHRcdFx0dHJ1ZVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGFiZWxUb1Nob3cgKz0gdGVtcE9ialsnbGFiZWwnXSArICcsICc7XG5cdFx0XHRcdFx0ZGF0YVRvU2V0U3RhdGVbdGVtcE9iai5sYWJlbF0gPSBEYXRhQW5hbHlzZXIuZ2V0U3RydWN0dXJlZERhdGEoXG5cdFx0XHRcdFx0XHR0ZW1wT2JqLmxhYmVsLFxuXHRcdFx0XHRcdFx0dGVtcE9iai52YWx1ZSxcblx0XHRcdFx0XHRcdHRlbXBPYmouZGlzYWJsZWRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRsYWJlbFRvU2hvdyA9IGxhYmVsVG9TaG93LnN1YnN0cigwLCBsYWJlbFRvU2hvdy5sZW5ndGggLSAyKTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzZWxlY3RlZE11bHRpU2VsZWN0TGFiZWw6IGxhYmVsVG9TaG93LFxuXHRcdFx0XHRcdHNlbGVjdGVkTXVsdGlTZWxlY3RPcHRpb25zOiBkYXRhVG9TZXRTdGF0ZSxcblx0XHRcdFx0XHRpc0NvbXBsZXRlZE11bHRpU2VsZWN0aW9uOiB0cnVlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCgpID0+IGNhbGxCYWNrICYmIGNhbGxCYWNrKClcblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChcblx0XHRcdFx0dHlwZW9mIHByb3BzLnNlbGVjdGVkVmFsdWVzICE9ICd1bmRlZmluZWQnICYmXG5cdFx0XHRcdHByb3BzLnNlbGVjdGVkVmFsdWVzICE9IG51bGwgJiZcblx0XHRcdFx0cHJvcHMuc2VsZWN0ZWRWYWx1ZXMubGVuZ3RoID09PSAwXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5yZXNldFN0YXRlKCgpID0+IGNhbGxCYWNrICYmIGNhbGxCYWNrKCkpO1xuXHRcdFx0fSBlbHNlIGNhbGxCYWNrICYmIGNhbGxCYWNrKCk7XG5cdFx0fVxuXHR9O1xuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHQgKiAgICAgICAgICBTVUIgTUVOVVxuXHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblx0Z2V0U3VibWVudUxpc3QgPSAoc2VsZWN0ZWRMYWJlbCwgYXJyTGlzdCwgc2VsZWN0ZWRPYmopID0+IHtcblx0XHRsZXQganN4ID0gbnVsbDtcblx0XHRsZXQgdGVtcE9iaiA9IG51bGw7XG5cdFx0aWYgKGFyckxpc3QgJiYgYXJyTGlzdC5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCBsZW4gPSBhcnJMaXN0Lmxlbmd0aDtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0dGVtcE9iaiA9IGFyckxpc3RbaV07XG5cdFx0XHRcdGlmICh0ZW1wT2JqLmxhYmVsID09PSBzZWxlY3RlZExhYmVsKSB7XG5cdFx0XHRcdFx0anN4ID0gdGVtcE9iai5vcHRpb25zLm1hcCgoc3VibWVudU9iaiwgaW5kZXgsIGFycikgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLWtleT17aW5kZXh9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2luZGV4fVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXt0aGlzLnByb3BzLm9wdGlvbkNsYXNzfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMub25TZWxlY3Qoc3VibWVudU9iaiwgZSwgc2VsZWN0ZWRPYmopO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7c3VibWVudU9iai5sYWJlbH1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ganN4O1xuXHRcdH0gZWxzZSByZXR1cm4gW107XG5cdH07XG5cdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdCAqICAgICAgICAgIE1VbFRJIFNFTEVDVFxuXHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblx0LyoqXG5cdCAqICBvYmplY3RzIGFyZSBzdG9yZSBpbiBzZWxlY3RlZE11bHRpU2VsZWN0T3B0aW9ucyBvZiB0aGUgc3RhdGUgd2l0aCBmb3JtYXQgb2Zcblx0ICogICAgICB7XG5cdCAqICAgICAgICAgIDxzZWxlY3RlZExhYmVsPiA6IDxzZWxlY3RlZE9iaj4sXG5cdCAqICAgICAgICAgIDxzZWxlY3RlZExhYmVsPiA6IDxzZWxlY3RlZE9iaj4uLi5cblx0ICogICAgICB9XG5cdCAqICBhbHNvIG1hbmFnZSBzZWxlY3RlZE11bHRpU2VsZWN0TGFiZWwgaW4gdGhlIHN0YXRlXG5cdCAqL1xuXHRjbGVhckFsbE11bHRpU2VsZWN0ID0gY2IgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoXG5cdFx0XHR7XG5cdFx0XHRcdHNlbGVjdGVkTXVsdGlTZWxlY3RPcHRpb25zOiB7fSxcblx0XHRcdFx0c2VsZWN0ZWRNdWx0aVNlbGVjdExhYmVsOiAnJyxcblx0XHRcdFx0aXNDb21wbGV0ZWRNdWx0aVNlbGVjdGlvbjogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0dHlwZW9mIGNiID09PSAnZnVuY3Rpb24nICYmIGNiKCk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fTtcblx0b25DbGlja0NsZWFyQWxsID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0aXNDb21wbGV0ZWRNdWx0aVNlbGVjdGlvbjogIXRoaXMucHJvcHMuc2hvdWxkVXNlTXVsdGlzZWxlY3RBcHBseUJ0bixcblx0XHRcdHNlbGVjdGVkTXVsdGlTZWxlY3RPcHRpb25zOiB7fSxcblx0XHRcdHNlbGVjdGVkTXVsdGlTZWxlY3RMYWJlbDogJydcblx0XHR9KTtcblx0XHR0aGlzLmVtaXRPbnNlbGVjdElmTXVsdGlzZWxlY3Qoe30pO1xuXHRcdHR5cGVvZiB0aGlzLnByb3BzLm9uQ2xlYXJBbGwgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLnByb3BzLm9uQ2xlYXJBbGwoKTtcblx0fTtcblx0b25NdWx0aVNlbGVjdCA9IChzZWxlY3RlZE9wdE9iaiwgZSkgPT4ge1xuXHRcdGxldCB0ZW1wT2JqID0gdGhpcy5zdGF0ZS5zZWxlY3RlZE11bHRpU2VsZWN0T3B0aW9ucyB8fCB7fTtcblx0XHRsZXQgbGFiZWwgPSB0aGlzLnN0YXRlLnNlbGVjdGVkTXVsdGlTZWxlY3RMYWJlbDtcblx0XHRsZXQgb2JqID0ge307XG5cdFx0aWYgKHRoaXMuc2hvdWxkRGVzZWxlY3Qoc2VsZWN0ZWRPcHRPYmopKSB7XG5cdFx0XHRvYmogPSB0aGlzLmhhbmRsZURlc2VsZWN0KGxhYmVsLCB0ZW1wT2JqLCBzZWxlY3RlZE9wdE9iai5sYWJlbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG9iaiA9IHRoaXMuaGFuZGxlU2VsZWN0KGxhYmVsLCB0ZW1wT2JqLCBzZWxlY3RlZE9wdE9iaik7XG5cdFx0fVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c2VsZWN0ZWRNdWx0aVNlbGVjdE9wdGlvbnM6IG9iai50ZW1wT2JqLFxuXHRcdFx0c2VsZWN0ZWRNdWx0aVNlbGVjdExhYmVsOiBvYmoubGFiZWwsXG5cdFx0XHRpc0NvbXBsZXRlZE11bHRpU2VsZWN0aW9uOiAhdGhpcy5wcm9wcy5zaG91bGRVc2VNdWx0aXNlbGVjdEFwcGx5QnRuXG5cdFx0fSk7XG5cdFx0dGhpcy5lbWl0T25zZWxlY3RJZk11bHRpc2VsZWN0KG9iai50ZW1wT2JqLCBlKTtcblx0fTtcblx0aGFuZGxlRGVzZWxlY3QgPSAobGFiZWwsIHRlbXBPYmosIHNlbGVjdGVkTGFiZWwpID0+IHtcblx0XHRkZWxldGUgdGVtcE9ialtzZWxlY3RlZExhYmVsXTtcblx0XHRsYWJlbCA9IHRoaXMuZ2V0TGFiZWxGcm9tTXVsdGlzZWxlY3RlZCh0ZW1wT2JqKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bGFiZWwsXG5cdFx0XHR0ZW1wT2JqXG5cdFx0fTtcblx0fTtcblx0aGFuZGxlU2VsZWN0ID0gKGxhYmVsLCB0ZW1wT2JqLCBzZWxlY3RlZE9iaikgPT4ge1xuXHRcdGlmICh0aGlzLnByb3BzLnNob3VsZEFjY2VwdE9uZUZyb21Hcm91cCAmJiBzZWxlY3RlZE9iai5oYXNHcm91cCkge1xuXHRcdFx0Zm9yIChsZXQgc2VsZWN0ZWRMYWJlbCBpbiB0ZW1wT2JqKSB7XG5cdFx0XHRcdGlmICh0ZW1wT2JqW3NlbGVjdGVkTGFiZWxdWydncm91cE5hbWUnXSA9PT0gc2VsZWN0ZWRPYmouZ3JvdXBOYW1lKSBkZWxldGUgdGVtcE9ialtzZWxlY3RlZExhYmVsXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0dGVtcE9ialtzZWxlY3RlZE9iai5sYWJlbF0gPSBzZWxlY3RlZE9iajtcblx0XHRsYWJlbCA9IHRoaXMuZ2V0TGFiZWxGcm9tTXVsdGlzZWxlY3RlZCh0ZW1wT2JqKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bGFiZWwsXG5cdFx0XHR0ZW1wT2JqXG5cdFx0fTtcblx0fTtcblx0Z2V0TGFiZWxGcm9tTXVsdGlzZWxlY3RlZCA9IG9iaiA9PiB7XG5cdFx0bGV0IGxhYmVsID0gJyc7XG5cdFx0Zm9yIChsZXQga2V5IGluIG9iaikge1xuXHRcdFx0bGFiZWwgKz0ga2V5ICsgJywgJztcblx0XHR9XG5cdFx0cmV0dXJuIGxhYmVsLnN1YnN0cigwLCBsYWJlbC5sZW5ndGggLSAyKTtcblx0fTtcblx0c2hvdWxkRGVzZWxlY3QgPSBzZWxlY3RlZE9iaiA9PiB7XG5cdFx0aWYgKFV0aWxzLmlzRW1wdHlPYmplY3QodGhpcy5zdGF0ZS5zZWxlY3RlZE11bHRpU2VsZWN0T3B0aW9ucykpIHJldHVybiBmYWxzZTtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy5zdGF0ZS5zZWxlY3RlZE11bHRpU2VsZWN0T3B0aW9ucykuaW5kZXhPZihzZWxlY3RlZE9iai5sYWJlbCkgPiAtMTtcblx0fTtcblx0aGFzSW5NdWx0aVNlbGVjdGVkID0gc2VsZWN0ZWRPYmogPT4ge1xuXHRcdGlmIChVdGlscy5pc0VtcHR5T2JqZWN0KHRoaXMuc3RhdGUuc2VsZWN0ZWRNdWx0aVNlbGVjdE9wdGlvbnMpKSByZXR1cm4gZmFsc2U7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuc2VsZWN0ZWRNdWx0aVNlbGVjdE9wdGlvbnMpLmluZGV4T2Yoc2VsZWN0ZWRPYmoubGFiZWwpID4gLTE7XG5cdH07XG5cdG9uTXVsdGlTZWxlY3REb25lID0gZSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRpc0NvbXBsZXRlZE11bHRpU2VsZWN0aW9uOiB0cnVlXG5cdFx0fSk7XG5cdFx0dGhpcy5oaWRlT3B0aW9uKCk7XG5cdFx0dGhpcy5lbWl0T25zZWxlY3RJZk11bHRpc2VsZWN0KHRoaXMuc3RhdGUuc2VsZWN0ZWRNdWx0aVNlbGVjdE9wdGlvbnMsIGUpO1xuXHR9O1xuXHR0ZW1wTXVsdGlzZWxlY3RlZE9wdGlvbnMgPSB7fTtcblx0dGVtcE11bHRpc2VsZWN0ZWRMYWJlbCA9ICcnO1xuXHRlbWl0T25zZWxlY3RJZk11bHRpc2VsZWN0ID0gKHNlbGVjdGVkT2JqLCBldmVudCkgPT4ge1xuXHRcdHR5cGVvZiB0aGlzLnByb3BzLm9uU2VsZWN0ID09PSAnZnVuY3Rpb24nICYmIHRoaXMucHJvcHMub25TZWxlY3Qoc2VsZWN0ZWRPYmosIGV2ZW50KTtcblx0fTtcblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0ICogICAgICAgICAgRFJPUCBET1dOXG5cdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXHRsaXN0ZW5DbGlja291dHNpZGVFdmVudCA9ICgpID0+IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGlja291dHNpZGUpO1xuXHRoYW5kbGVDbGlja291dHNpZGUgPSBldmVudCA9PiB7XG5cdFx0aWYgKCF0aGlzLmhhc1RpdGxlQ2xhc3MoZXZlbnQudGFyZ2V0KSkge1xuXHRcdFx0aWYgKCF0aGlzLmlzQ2xpY2tXaXRoaW5Ecm9wZG93bldyYXBwZXIoZXZlbnQudGFyZ2V0KSkge1xuXHRcdFx0XHRpZiAodGhpcy5wcm9wcy5tdWx0aVNlbGVjdCkge1xuXHRcdFx0XHRcdGlmICghdGhpcy5zdGF0ZS5pc0NvbXBsZXRlZE11bHRpU2VsZWN0aW9uKSB7XG5cdFx0XHRcdFx0XHRpZiAoIVV0aWxzLmlzRW1wdHlPYmplY3QodGhpcy50ZW1wTXVsdGlzZWxlY3RlZE9wdGlvbnMpKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0XHRcdGlzQ29tcGxldGVkTXVsdGlTZWxlY3Rpb246IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0ZWRNdWx0aVNlbGVjdE9wdGlvbnM6IHRoaXMudGVtcE11bHRpc2VsZWN0ZWRPcHRpb25zLFxuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdGVkTXVsdGlTZWxlY3RMYWJlbDogdGhpcy50ZW1wTXVsdGlzZWxlY3RlZExhYmVsXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5jbGVhckFsbE11bHRpU2VsZWN0KCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLnNob3VsZFVzZU11bHRpc2VsZWN0QXBwbHlCdG4gJiZcblx0XHRcdFx0XHRcdFx0dGhpcy5lbWl0T25zZWxlY3RJZk11bHRpc2VsZWN0KHRoaXMudGVtcE11bHRpc2VsZWN0ZWRPcHRpb25zKTtcblx0XHRcdFx0XHRcdHRoaXMuaGlkZU9wdGlvbigpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLmhpZGVPcHRpb24oKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5oaWRlT3B0aW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGlzQ2xpY2tXaXRoaW5Ecm9wZG93bldyYXBwZXIgPSB0YXJnZXQgPT4ge1xuXHRcdGNvbnN0IG1heExvb3BMaW1pdCA9IDE1O1xuXHRcdGxldCB0ZW1wID0gdGFyZ2V0O1xuXHRcdGlmICh0ZW1wKSB7XG5cdFx0XHRpZiAodGhpcy5pc0h0bWxUYWcodGVtcCkpIHJldHVybiBmYWxzZTtcblx0XHRcdGlmICh0aGlzLmlzRHJvcGRvd25PcHRpb25Db250YWluZXIodGVtcCAmJiB0ZW1wLmNsYXNzTGlzdCkpIHJldHVybiB0cnVlO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBtYXhMb29wTGltaXQ7IGkrKykge1xuXHRcdFx0XHR0ZW1wID0gdGVtcCAmJiB0ZW1wLnBhcmVudEVsZW1lbnQ7XG5cdFx0XHRcdGlmICh0aGlzLmlzSHRtbFRhZyh0ZW1wKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5pc0Ryb3Bkb3duV3JhcHBlcih0ZW1wICYmIHRlbXAuY2xhc3NMaXN0KSkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblx0aXNIdG1sVGFnID0gdGFyZ2V0ID0+IHRhcmdldCAmJiB0YXJnZXQudGFnTmFtZSA9PT0gJ0hUTUwnO1xuXHRoYXNUaXRsZUNsYXNzID0gdGFyZ2V0T2JqID0+IHRhcmdldE9iaiAmJiB0YXJnZXRPYmoubWF0Y2hlcygnLicgKyByZXNlcnZlZENsYXNzTmFtZXMuaXNUaXRsZSk7XG5cdHRvZ2dsZURyb3Bkb3duID0gZSA9PiAodGhpcy5zdGF0ZS5pc09wZW4gPyB0aGlzLmhpZGVPcHRpb24oKSA6IHRoaXMuc2hvd09wdGlvbihlKSk7XG5cdGlzRHJvcGRvd25XcmFwcGVyID0gYXJyYXlEYXRhID0+IHtcblx0XHRpZiAoKGFycmF5RGF0YSAmJiB0eXBlb2YgYXJyYXlEYXRhID09PSAndW5kZWZpbmVkJykgfHwgYXJyYXlEYXRhID09PSBudWxsKSByZXR1cm4gMDtcblx0XHRyZXR1cm4gYXJyYXlEYXRhLnZhbHVlLmluZGV4T2YocmVzZXJ2ZWRDbGFzc05hbWVzLndyYXBwZXIpID49IDA7XG5cdH07XG5cdGlzRHJvcGRvd25PcHRpb25Db250YWluZXIgPSBhcnJheURhdGEgPT4ge1xuXHRcdGlmICh0eXBlb2YgYXJyYXlEYXRhID09PSAndW5kZWZpbmVkJykgcmV0dXJuIDA7XG5cdFx0cmV0dXJuIGFycmF5RGF0YS52YWx1ZS5pbmRleE9mKHJlc2VydmVkQ2xhc3NOYW1lcy5vcHRpb25Db250YWluZXIpID4gLTE7XG5cdH07XG5cdHNob3dPcHRpb24gPSBlID0+IHtcblx0XHRpZiAoIXRoaXMuc3RhdGUuaXNPcGVuKSB7XG5cdFx0XHR0aGlzLm9uT3Blbk9wdGlvbihlKTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBpc09wZW46IHRydWUgfSk7XG5cdFx0fVxuXHR9O1xuXHRoaWRlT3B0aW9uID0gKCkgPT4ge1xuXHRcdGlmICh0aGlzLnN0YXRlLmlzT3Blbikge1xuXHRcdFx0dGhpcy5vbkNsb3NlT3B0aW9uKCk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgaXNPcGVuOiBmYWxzZSB9KTtcblx0XHR9XG5cdH07XG5cdGlzRmlyc3RUaW1lT3BlbiA9IHRydWU7XG5cdFdpZHRoUmVxdWlyZWRUb3Nob3cgPSAwO1xuXHRvbk9wZW5PcHRpb24gPSBlbGVtID0+IHtcblx0XHRpZiAodGhpcy5wcm9wcy5hdXRvV2lkdGhBZGp1c3QgJiYgdGhpcy5pc0ZpcnN0VGltZU9wZW4pIHtcblx0XHRcdHRoaXMuaXNGaXJzdFRpbWVPcGVuID0gZmFsc2U7XG5cdFx0XHR0aGlzLldpZHRoUmVxdWlyZWRUb3Nob3cgPSBlbGVtICYmIGVsZW0ub2Zmc2V0V2lkdGg7XG5cdFx0fVxuXHRcdHRoaXMudGVtcE11bHRpc2VsZWN0ZWRPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5zZWxlY3RlZE11bHRpU2VsZWN0T3B0aW9ucyk7XG5cdFx0dGhpcy50ZW1wTXVsdGlzZWxlY3RlZExhYmVsID0gdGhpcy5zdGF0ZS5zZWxlY3RlZE11bHRpU2VsZWN0TGFiZWw7XG5cdFx0dHlwZW9mIHRoaXMucHJvcHMub25PcGVuT3B0aW9uID09PSAnZnVuY3Rpb24nICYmIHRoaXMucHJvcHMub25PcGVuT3B0aW9uKCk7XG5cdH07XG5cdG9uQ2xvc2VPcHRpb24gPSAoKSA9PiB0eXBlb2YgdGhpcy5wcm9wcy5vbkNsb3NlT3B0aW9uID09PSAnZnVuY3Rpb24nICYmIHRoaXMucHJvcHMub25DbG9zZU9wdGlvbigpO1xuXHRvblNlbGVjdCA9IChzZWxlY3RlZE9wdE9iaiwgZSwgcGFyZW50T3B0T2JqKSA9PiB7XG5cdFx0aWYgKCFzZWxlY3RlZE9wdE9iai5pc1RpdGxlKSB7XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5tdWx0aVNlbGVjdCkge1xuXHRcdFx0XHR0aGlzLm9uTXVsdGlTZWxlY3Qoc2VsZWN0ZWRPcHRPYmosIGUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcHJlU2VsZWN0ZWRPcHRpb24gPSB0aGlzLnN0YXRlLnNlbGVjdGVkT3B0aW9uO1xuXHRcdFx0XHRwcmVTZWxlY3RlZE9wdGlvbiAhPT0gc2VsZWN0ZWRPcHRPYmoubGFiZWwgJiYgdGhpcy5vbkNoYW5nZShzZWxlY3RlZE9wdE9iaiwgZSwgcGFyZW50T3B0T2JqKTtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkT3B0aW9uOiBzZWxlY3RlZE9wdE9iai5sYWJlbCB9KTtcblx0XHRcdFx0dHlwZW9mIHRoaXMucHJvcHMub25TZWxlY3QgPT09ICdmdW5jdGlvbicgJiYgdGhpcy5wcm9wcy5vblNlbGVjdChzZWxlY3RlZE9wdE9iaiwgZSwgcGFyZW50T3B0T2JqKTtcblx0XHRcdFx0dGhpcy5oaWRlT3B0aW9uKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRvbkNoYW5nZSA9IChzZWxlY3RlZE9wdE9iaiwgZSwgcGFyZW50T3B0T2JqKSA9PlxuXHRcdHR5cGVvZiB0aGlzLnByb3BzLm9uQ2hhbmdlID09PSAnZnVuY3Rpb24nICYmIHRoaXMucHJvcHMub25DaGFuZ2Uoc2VsZWN0ZWRPcHRPYmosIGUsIHBhcmVudE9wdE9iaik7XG5cdG9uSGVhZGVySG92ZXIgPSBlID0+IHtcblx0XHR0eXBlb2YgdGhpcy5wcm9wcy5vbkhlYWRlckhvdmVyID09PSAnZnVuY3Rpb24nICYmXG5cdFx0XHR0aGlzLnByb3BzLm9uSGVhZGVySG92ZXIodGhpcy5zdGF0ZS5zZWxlY3RlZE11bHRpU2VsZWN0T3B0aW9ucywgdGhpcy5zdGF0ZS5zZWxlY3RlZE9wdGlvbik7XG5cdH07XG5cdG9uVGFnSG92ZXIgPSAoKSA9PiB7XG5cdFx0dHlwZW9mIHRoaXMucHJvcHMub25UYWdIb3ZlciA9PT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdFx0dGhpcy5wcm9wcy5vblRhZ0hvdmVyKHRoaXMuc3RhdGUuc2VsZWN0ZWRNdWx0aVNlbGVjdE9wdGlvbnMsIHRoaXMuc3RhdGUuc2VsZWN0ZWRPcHRpb24pO1xuXHR9O1xuXHQvKipcblx0ICogIEhlcmUgd2UgaGF2ZSAnaGVpZ2h0JyBpc3N1ZSB3aGVuIHJldHVybiBhbiBlbXB0eSBzdHJpbmcuXG5cdCAqICB0byBGaXggdGhpcyBpc3N1ZVxuXHQgKiAgICAgIDEuIHJldHVybiBhIGhpZGRlbiBjb21wb25lbnQgd2l0aCBsb25nZXN0IHN0cmluZyBpbiBvcHRpb25zXG5cdCAqL1xuXHRyZW5kZXJIZWFkZXIgPSAoKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLnByb3BzLmZpeGVkVGl0bGUgPT09ICdmdW5jdGlvbicpXG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5maXhlZFRpdGxlKFxuXHRcdFx0XHR0aGlzLnByb3BzLm11bHRpU2VsZWN0ID8gdGhpcy5zdGF0ZS5zZWxlY3RlZE11bHRpU2VsZWN0TGFiZWwgOiB0aGlzLnN0YXRlLnNlbGVjdGVkT3B0aW9uXG5cdFx0XHQpO1xuXHRcdGlmICh0aGlzLnByb3BzLm11bHRpU2VsZWN0KSByZXR1cm4gdGhpcy5yZW5kZXJIZWFkZXJGb3JNdWx0aXNlbGVjdCgpO1xuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKFV0aWxzLmlzRW1wdHlTdHJpbmcodGhpcy5zdGF0ZS5zZWxlY3RlZE9wdGlvbikpXG5cdFx0XHRcdHJldHVybiAodGhpcy5wcm9wcy5kZWZhdWxlU2VsZWN0VGl0bGUgJiYgdGhpcy5yZW5kZXJQbGFjZWhvbGRlcigpKSB8fCB0aGlzLmdldEhpZGRlbkNvbXBvbmVudCgpO1xuXHRcdFx0ZWxzZSByZXR1cm4gdGhpcy5zdGF0ZS5zZWxlY3RlZE9wdGlvbjtcblx0XHR9XG5cdH07XG5cdHJlbmRlclBsYWNlaG9sZGVyID0gKCkgPT4gPHNwYW4gY2xhc3NOYW1lPSdyY2QtcGxhY2Vob2xkZXInPnt0aGlzLnByb3BzLmRlZmF1bGVTZWxlY3RUaXRsZX08L3NwYW4+O1xuXHQvKipcblx0ICogdGl0bGUgdG8gc2hvdyBpbiBjYXNlIG9mIG11bHRpIHNlbGVjdDsgY29udGFpbiBjbG9zZSBidG5cblx0ICovXG5cdHJlbmRlckhlYWRlckZvck11bHRpc2VsZWN0ID0gKCkgPT4ge1xuXHRcdGNvbnN0IHNlbGVjdGVkT3B0aW9uc0FycmF5ID0gT2JqZWN0LmtleXModGhpcy5zdGF0ZS5zZWxlY3RlZE11bHRpU2VsZWN0T3B0aW9ucyk7XG5cdFx0aWYgKHNlbGVjdGVkT3B0aW9uc0FycmF5Lmxlbmd0aCA+IDApIHtcblx0XHRcdGxldCB0aXRsZVRvUmVuZGVyID0gW107XG5cdFx0XHRzZWxlY3RlZE9wdGlvbnNBcnJheS5tYXAoc2VsZWN0ZWRPcHRpb24gPT4ge1xuXHRcdFx0XHR0aXRsZVRvUmVuZGVyLnB1c2goXG5cdFx0XHRcdFx0PHNwYW4ga2V5PXtzZWxlY3RlZE9wdGlvbn0gY2xhc3NOYW1lPSdyY2QtbXVsdGktc2VsZWN0ZWQnPlxuXHRcdFx0XHRcdFx0PENyb3NzXG5cdFx0XHRcdFx0XHRcdGhlaWdodD17dGhpcy5wcm9wcy5jcm9zcy53aWR0aH1cblx0XHRcdFx0XHRcdFx0d2lkdGg9e3RoaXMucHJvcHMuY3Jvc3MuaGVpZ2h0fVxuXHRcdFx0XHRcdFx0XHRmaWxsPXt0aGlzLnByb3BzLmNyb3NzLmNvbG9yfVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0bGV0IHRlbXBPYmogPSB0aGlzLnN0YXRlLnNlbGVjdGVkTXVsdGlTZWxlY3RPcHRpb25zIHx8IHt9O1xuXHRcdFx0XHRcdFx0XHRcdGxldCBsYWJlbCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRNdWx0aVNlbGVjdExhYmVsO1xuXHRcdFx0XHRcdFx0XHRcdGxldCBvYmogPSB7fTtcblx0XHRcdFx0XHRcdFx0XHRvYmogPSB0aGlzLmhhbmRsZURlc2VsZWN0KGxhYmVsLCB0ZW1wT2JqLCBzZWxlY3RlZE9wdGlvbik7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RlZE11bHRpU2VsZWN0T3B0aW9uczogb2JqLnRlbXBPYmosXG5cdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RlZE11bHRpU2VsZWN0TGFiZWw6IG9iai5sYWJlbCxcblx0XHRcdFx0XHRcdFx0XHRcdGlzQ29tcGxldGVkTXVsdGlTZWxlY3Rpb246IHRydWVcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmVtaXRPbnNlbGVjdElmTXVsdGlzZWxlY3Qob2JqLnRlbXBPYmopO1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnM3B4JyB9fT57c2VsZWN0ZWRPcHRpb259PC9zcGFuPlxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0+e3RpdGxlVG9SZW5kZXJ9PC9kaXY+O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yZW5kZXJQbGFjZWhvbGRlcigpO1xuXHRcdH1cblx0fTtcblx0Z2V0SGlkZGVuQ29tcG9uZW50ID0gKCkgPT4gKFxuXHRcdDxkaXYgc3R5bGU9e3sgb3BhY2l0eTogJzAnLCB3aWR0aDogJ2F1dG8nLCBmb250V2VpZ2h0OiAnMTAwJyB9fT57dGhpcy5sb25nZXN0U3RyaW5nfTwvZGl2PlxuXHQpO1xuXHRyZXNldFN0YXRlID0gY2FsbEJhY2sgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZE9wdGlvbjogJycgfSwgKCkgPT4ge1xuXHRcdFx0dGhpcy5jbGVhckFsbE11bHRpU2VsZWN0KCgpID0+IHtcblx0XHRcdFx0Y2FsbEJhY2sgJiYgY2FsbEJhY2soKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9O1xuXHQvKipcblx0ICogY2FsdWN1bGF0ZSBsb25nZXN0IFN0cmluZyBEYXRhIGZvciBcIkF1dG8gV2lkdGggY29uZ3VyYXRpb25cIlxuXHQgKlxuXHQgKi9cblx0Y2hlY2tMb25nZXN0U3RyaW5nID0gKG9wdGlvbkxhYmVsID0gJycpID0+IHtcblx0XHRpZiAob3B0aW9uTGFiZWwubGVuZ3RoID4gdGhpcy5sb25nZXN0T3B0aW9uU3RyTGVuZ3RoKSB7XG5cdFx0XHR0aGlzLmxvbmdlc3RPcHRpb25TdHJMZW5ndGggPSBvcHRpb25MYWJlbC5sZW5ndGg7XG5cdFx0XHR0aGlzLmxvbmdlc3RTdHJpbmcgPSBvcHRpb25MYWJlbDtcblx0XHR9XG5cdH07XG5cdG9uT3B0aW9uSG92ZXIgPSAoZSwgc2VsZWN0ZWRPYmopID0+IHtcblx0XHRsZXQgbm9kZSA9IHRoaXMuZ2V0RWFjaE9wdGlvbldyYXBwZXJOb2RlKGUudGFyZ2V0KTtcblx0XHRpZiAobm9kZSkgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kID0gdGhpcy5wcm9wcy5vcHRpb25Ib3ZlckNvbG9yO1xuXHRcdHR5cGVvZiB0aGlzLnByb3BzLm9uT3B0aW9uSG92ZXIgPT09ICdmdW5jdGlvbicgJiYgdGhpcy5wcm9wcy5vbk9wdGlvbkhvdmVyKG5vZGUsIHNlbGVjdGVkT2JqKTtcblx0fTtcblx0b25PcHRpb25PdXQgPSBlID0+IHtcblx0XHRsZXQgbm9kZSA9IHRoaXMuZ2V0RWFjaE9wdGlvbldyYXBwZXJOb2RlKGUudGFyZ2V0KTtcblx0XHRpZiAobm9kZSkgbm9kZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnYmFja2dyb3VuZCcpO1xuXHR9O1xuXHRnZXRFYWNoT3B0aW9uV3JhcHBlck5vZGUgPSB0YXJnZXQgPT4ge1xuXHRcdGNvbnN0IG1heExvb3BMaW1pdCA9IDU7XG5cdFx0aWYgKHRoaXMuaXNFYWNoT3B0aW9uV3JhcHBlcih0YXJnZXQgJiYgdGFyZ2V0LmNsYXNzTGlzdCkpIHJldHVybiB0YXJnZXQ7XG5cdFx0bGV0IHRlbXAgPSB0YXJnZXQ7XG5cdFx0aWYgKHRlbXApIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbWF4TG9vcExpbWl0OyBpKyspIHtcblx0XHRcdFx0dGVtcCA9IHRlbXAgJiYgdGVtcC5wYXJlbnRFbGVtZW50O1xuXHRcdFx0XHRpZiAodGhpcy5pc0VhY2hPcHRpb25XcmFwcGVyKHRlbXAgJiYgdGVtcC5jbGFzc0xpc3QpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRlbXA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIDA7XG5cdH07XG5cdGlzRWFjaE9wdGlvbldyYXBwZXIgPSBhcnJheURhdGEgPT4ge1xuXHRcdGlmICh0eXBlb2YgYXJyYXlEYXRhID09PSAndW5kZWZpbmVkJykgcmV0dXJuIDA7XG5cdFx0cmV0dXJuIGFycmF5RGF0YS52YWx1ZS5pbmRleE9mKHJlc2VydmVkQ2xhc3NOYW1lcy5lYWNoT3B0aW9uV3JhcHBlcikgPiAtMTtcblx0fTtcblx0b25PcHRpb25Nb3VzZUVudGVyID0gKGUsIHNlbGVjdGVkT2JqKSA9PiB7fTtcblx0aXNNdWx0aVNlbGVjdCA9ICgpID0+IHRoaXMucHJvcHMubXVsdGlTZWxlY3Q7XG5cdGdldE9wdGlvblRvUmVuZGVyID0gKGN1cnJlbnRPYmosIGNsYXNzZXMsIGlzTWl4V2l0aFRpdGxlLCBpbmRleCwgaXNTZWxlY3RlZE9wdGlvbiwgYXJyTGVuZ3RoKSA9PiB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudCBrZXk9e2luZGV4fT5cblx0XHRcdFx0PE9wdGlvblxuXHRcdFx0XHRcdHsuLi50aGlzLnByb3BzfVxuXHRcdFx0XHRcdGNsYXNzZXM9e2NsYXNzZXN9XG5cdFx0XHRcdFx0b3B0aW9uT2JqPXtjdXJyZW50T2JqfVxuXHRcdFx0XHRcdGlzTWl4V2l0aFRpdGxlPXtpc01peFdpdGhUaXRsZX1cblx0XHRcdFx0XHRpbmRleD17aW5kZXh9XG5cdFx0XHRcdFx0aXNTZWxlY3RlZE9wdGlvbj17aXNTZWxlY3RlZE9wdGlvbn1cblx0XHRcdFx0XHRpc011bHRpU2VsZWN0PXt0aGlzLmlzTXVsdGlTZWxlY3QoKX1cblx0XHRcdFx0XHR0aWNrUmVxdWlyZWRGb3JTaW5nbGVTZWxlY3Q9e3RoaXMucHJvcHMudGlja1JlcXVpcmVkRm9yU2luZ2xlU2VsZWN0fVxuXHRcdFx0XHRcdHNob3VsZFVzZVJhZGlvQnRuPXt0aGlzLnByb3BzLnNob3VsZFVzZVJhZGlvQnRufVxuXHRcdFx0XHRcdG9uTW91c2VPdmVyPXt0aGlzLm9uT3B0aW9uSG92ZXJ9XG5cdFx0XHRcdFx0b25Nb3VzZU91dD17dGhpcy5vbk9wdGlvbk91dH1cblx0XHRcdFx0XHRvblNlbGVjdD17dGhpcy5vblNlbGVjdH1cblx0XHRcdFx0XHRkZWZhdWx0T3B0aW9uQ2xhc3M9e3Jlc2VydmVkQ2xhc3NOYW1lcy5vcHRpb259XG5cdFx0XHRcdFx0YXV0b1dpZHRoQWRqdXN0PXt0aGlzLnByb3BzLmF1dG9XaWR0aEFkanVzdH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0eyFjdXJyZW50T2JqLmlzVGl0bGUgJiZcblx0XHRcdFx0XHRpbmRleCAhPT0gYXJyTGVuZ3RoIC0gMSAmJlxuXHRcdFx0XHRcdHR5cGVvZiB0aGlzLnByb3BzLm9wdGlvbkRpdmlkZXIgPT09ICdmdW5jdGlvbicgJiZcblx0XHRcdFx0XHR0aGlzLnByb3BzLm9wdGlvbkRpdmlkZXIoKX1cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KTtcblx0fTtcblx0aXNTZWxlY3RlZE9wdGlvbiA9IGN1cnJlbnRPYmogPT4ge1xuXHRcdHJldHVybiB0aGlzLmlzTXVsdGlTZWxlY3QoKVxuXHRcdFx0PyB0aGlzLmhhc0luTXVsdGlTZWxlY3RlZChjdXJyZW50T2JqKVxuXHRcdFx0OiBjdXJyZW50T2JqLmxhYmVsID09PSB0aGlzLnN0YXRlLnNlbGVjdGVkT3B0aW9uO1xuXHR9O1xuXHRnZXREZWZhdWx0R3JvdXBEaXZpZGVyID0gKCkgPT4gPGRpdiBrZXk9e0tleUdlbmVyYXRvci5nZXROZXcoKX0gY2xhc3NOYW1lPSdyY2QtZ3JvdXAtZGl2aWRlcicgLz47XG5cdG1ha2VMaXN0QXNPcHRpb24gPSAoYXJyYXlEYXRhLCBpc01peFdpdGhUaXRsZSkgPT4ge1xuXHRcdGxldCBjdXN0b21DbGFzc2VzID0gJyc7XG5cdFx0bGV0IG1haW5NZW51TGlzdCA9IG51bGw7XG5cdFx0bGV0IHN1Yk1lbnVMaXN0ID0ge307XG5cdFx0Y29uc3QgYXJyTGVuZ3RoID0gYXJyYXlEYXRhLmxlbmd0aDtcblx0XHRsZXQgZ3JvdXBEaXZpZGVyID0gbnVsbDtcblx0XHRsZXQgaXNTZWxlY3RlZE9wdGlvbiA9IGZhbHNlO1xuXHRcdG1haW5NZW51TGlzdCA9IGFycmF5RGF0YS5tYXAoKGN1cnJlbnRPYmosIGluZGV4KSA9PiB7XG5cdFx0XHR0aGlzLmNoZWNrTG9uZ2VzdFN0cmluZyhjdXJyZW50T2JqLmxhYmVsKTtcblx0XHRcdGN1c3RvbUNsYXNzZXMgPSAnJztcblx0XHRcdGlzU2VsZWN0ZWRPcHRpb24gPSB0aGlzLmlzU2VsZWN0ZWRPcHRpb24oY3VycmVudE9iaik7XG5cdFx0XHRpZiAoY3VycmVudE9iai5pc1N1Ym1lbnUpIHtcblx0XHRcdFx0Y3VzdG9tQ2xhc3NlcyA9IHJlc2VydmVkQ2xhc3NOYW1lcy5pc1N1Yk1lbnUgKyAnICcgKyB0aGlzLnByb3BzLm9wdGlvbkNsYXNzO1xuXHRcdFx0XHRzdWJNZW51TGlzdFtjdXJyZW50T2JqLmxhYmVsXSA9IHRoaXMuZ2V0U3VibWVudUxpc3QoY3VycmVudE9iai5sYWJlbCwgY3VycmVudE9iai5zdWJNZW51LCBjdXJyZW50T2JqKTtcblx0XHRcdH0gZWxzZSBpZiAoY3VycmVudE9iai5pc1RpdGxlKSB7XG5cdFx0XHRcdGN1c3RvbUNsYXNzZXMgPSByZXNlcnZlZENsYXNzTmFtZXMuaXNUaXRsZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN1c3RvbUNsYXNzZXMgPSB0aGlzLnByb3BzLm9wdGlvbkNsYXNzO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN1cnJlbnRPYmouaXNUaXRsZSAmJiBpbmRleCAhPT0gMCAmJiBpbmRleCAhPT0gYXJyTGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRncm91cERpdmlkZXIgPVxuXHRcdFx0XHRcdCh0eXBlb2YgdGhpcy5wcm9wcy5ncm91cERpdmlkZXIgPT09ICdmdW5jdGlvbicgJiYgdGhpcy5wcm9wcy5ncm91cERpdmlkZXIoKSkgfHxcblx0XHRcdFx0XHR0aGlzLmdldERlZmF1bHRHcm91cERpdmlkZXIoKTtcblx0XHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0XHRncm91cERpdmlkZXIsXG5cdFx0XHRcdFx0dGhpcy5nZXRPcHRpb25Ub1JlbmRlcihcblx0XHRcdFx0XHRcdGN1cnJlbnRPYmosXG5cdFx0XHRcdFx0XHRjdXN0b21DbGFzc2VzLFxuXHRcdFx0XHRcdFx0aXNNaXhXaXRoVGl0bGUsXG5cdFx0XHRcdFx0XHRpbmRleCxcblx0XHRcdFx0XHRcdGlzU2VsZWN0ZWRPcHRpb24sXG5cdFx0XHRcdFx0XHRhcnJMZW5ndGhcblx0XHRcdFx0XHQpXG5cdFx0XHRcdF07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRPcHRpb25Ub1JlbmRlcihcblx0XHRcdFx0Y3VycmVudE9iaixcblx0XHRcdFx0Y3VzdG9tQ2xhc3Nlcyxcblx0XHRcdFx0aXNNaXhXaXRoVGl0bGUsXG5cdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRpc1NlbGVjdGVkT3B0aW9uLFxuXHRcdFx0XHRhcnJMZW5ndGhcblx0XHRcdCk7XG5cdFx0fSk7XG5cdFx0aWYgKHRoaXMucHJvcHMubXVsdGlTZWxlY3QpIHtcblx0XHRcdG1haW5NZW51TGlzdCA9IChcblx0XHRcdFx0PE11bHRpU2VsZWN0XG5cdFx0XHRcdFx0ey4uLnRoaXMucHJvcHN9XG5cdFx0XHRcdFx0bWFpbk1lbnVMaXN0PXttYWluTWVudUxpc3R9XG5cdFx0XHRcdFx0b25NdWx0aVNlbGVjdERvbmU9e3RoaXMub25NdWx0aVNlbGVjdERvbmV9XG5cdFx0XHRcdFx0b25DbGlja0NsZWFyQWxsPXt0aGlzLm9uQ2xpY2tDbGVhckFsbH1cblx0XHRcdFx0Lz5cblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1haW5NZW51TGlzdCA9IChcblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHR7dHlwZW9mIHRoaXMucHJvcHMub3B0aW9uSGVhZGVyZXIgPT09ICdmdW5jdGlvbicgJiYgdGhpcy5wcm9wcy5vcHRpb25IZWFkZXJlcigpfVxuXHRcdFx0XHRcdHttYWluTWVudUxpc3R9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIHsgbWFpbk1lbnVMaXN0LCBzdWJNZW51TGlzdCB9O1xuXHR9O1xuXHRyZW5kZXJBcnJvdyA9ICgpID0+IHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzc05hbWU9J2Fycm93LXpvbmUnXG5cdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0d2lkdGg6IHRoaXMucHJvcHMuYXJyb3cud2lkdGgsXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiB0aGlzLnN0YXRlLmlzT3BlbiA/ICdyb3RhdGUoMTgwZGVnKScgOiAncm90YXRlKDBkZWcpJ1xuXHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHQ8QXJyb3cgZmlsbD17dGhpcy5wcm9wcy5hcnJvdy5jb2xvcn0gd2lkdGg9e3RoaXMucHJvcHMuYXJyb3cud2lkdGh9IGhlaWdodD17dGhpcy5wcm9wcy5hcnJvdy5oZWlnaHR9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9O1xuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgZGF0YU9iaiA9IERhdGFBbmFseXNlci5hbmFseXNlSW5wdXQodGhpcy5wcm9wcy5vcHRpb24sIHRoaXMucHJvcHMuc2VsZWN0ZWRWYWx1ZXMpO1xuXHRcdGNvbnN0IGxpc3RPYmogPSB0aGlzLm1ha2VMaXN0QXNPcHRpb24oZGF0YU9iai5kYXRhLCBkYXRhT2JqLmlzTWl4V2l0aFRpdGxlKTtcblx0XHRsZXQgaGVhZGVyQ2xhc3MgPSByZXNlcnZlZENsYXNzTmFtZXMuaGVhZGVyO1xuXHRcdGhlYWRlckNsYXNzICs9IHRoaXMuaXNNdWx0aVNlbGVjdCgpID8gJyBsYWJlbC1tdWx0aS10YWJsZSAnIDogJyBsYWJlbC1zaW5nbGUtY2VudGVyICc7XG5cdFx0aGVhZGVyQ2xhc3MgKz0gdGhpcy5wcm9wcy5oZWFkZXJDbGFzcyA/IHRoaXMucHJvcHMuaGVhZGVyQ2xhc3MgOiAnJztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdlxuXHRcdFx0XHRyZWY9e3RoaXMud3JhcHBlclJlZn1cblx0XHRcdFx0Y2xhc3NOYW1lPXtyZXNlcnZlZENsYXNzTmFtZXMud3JhcHBlciArICcgJyArIHRoaXMucHJvcHMud3JhcHBlckNsYXNzfVxuXHRcdFx0XHRvbk1vdXNlRW50ZXI9e3RoaXMucHJvcHMuc2hvdWxkT3Blbk9wdGlvbnNPbmhvdmVyID8gdGhpcy5zaG93T3B0aW9uIDogbnVsbH1cblx0XHRcdFx0b25Nb3VzZUxlYXZlPXt0aGlzLnByb3BzLnNob3VsZE9wZW5PcHRpb25zT25ob3ZlciA/IHRoaXMuaGlkZU9wdGlvbiA6IG51bGx9XG5cdFx0XHQ+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9e2hlYWRlckNsYXNzfVxuXHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMucHJvcHMuZGlzYWJsZWQgPyBudWxsIDogdGhpcy50b2dnbGVEcm9wZG93bn1cblx0XHRcdFx0XHRvbk1vdXNlT3Zlcj17ZXZlbnQgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5vbkhlYWRlckhvdmVyKCk7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRyZWY9e3JlZnMgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5oZWFkZXJSZWYgPSByZWZzO1xuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7dGhpcy5yZW5kZXJIZWFkZXIoKX1cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5zaG91bGRVc2VBcnJvdyAmJiB0aGlzLnJlbmRlckFycm93KCl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5pc09wZW4gJiZcblx0XHRcdFx0XHR0eXBlb2YgdGhpcy5wcm9wcy5oZWFkZXJPcHRpb25EaXZpZGVyID09PSAnZnVuY3Rpb24nICYmXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5oZWFkZXJPcHRpb25EaXZpZGVyKCl9XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0dmlzaWJpbGl0eTogdGhpcy5zdGF0ZS5pc09wZW4gPyAndmlzaWJsZScgOiAnaGlkZGVuJyxcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IHRoaXMuc3RhdGUuaXNPcGVuID8gJ3Zpc2liaWxpdHkgMG1zIGxpbmVhciAxMDBtcycgOiAndmlzaWJpbGl0eSAwcyBsaW5lYXIgMTBtcydcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17cmVzZXJ2ZWRDbGFzc05hbWVzLm9wdGlvbkNvbnRhaW5lciArICcgJyArIHRoaXMucHJvcHMub3B0aW9uQ29udGFpbmVyQ2xhc3N9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7bGlzdE9iai5tYWluTWVudUxpc3R9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5Ecm9wRG93bi5kZWZhdWx0UHJvcHMgPSB7XG5cdGRlZmF1bGVTZWxlY3RUaXRsZTogJ1NlbGVjdC4uLicsIC8vIERlZmF1bHQgVGl0bGUgV2hlbiBjb21wb25lbnQgaW5pdFxuXHRvcHRpb246IFtdLCAvLyBvcHRpb24gc2hvdyBpbiB0aGUgZHJvcCBkb3duXG5cdG9uU2VsZWN0OiBudWxsLCAvLyBmbjogY2FsbGJhY2sgdHJpZ2dlciB3aGVuIG9uIHNlbGVjdCBvZiBlYWNoIHNlbGVjdGlvbiBvZiB0aGUgb3B0aW9uXG5cdG9uQ2hhbmdlOiBudWxsLCAvLyBmbiA6IGNhbGxiYWNrIHRyaWdnZXIgd2hlbiBvbiBjaGFuZ2Vcblx0b25IZWFkZXJIb3ZlcjogbnVsbCwgLy8gZm46IGNhbGxiYWNrIGZvciB0cmlnZ2VyIHdoZW4gaG92ZXIgb24gaGVhZGVyXG5cdG9uT3B0aW9uSG92ZXI6IG51bGwsIC8vIGZuOiBjYWxsYmFjayBmb3IgdHJpZ2dlciB3aGVuIGhvdmVyIHN0YXJ0IG9uIG9wdGlvblxuXHRvbkNsZWFyQWxsOiBudWxsLCAvLyBmbjogY2FsbGJhY2sgZm9yIGNsaWNrIG9uIGNsZWFyIEFsbCwgT25seSBmb3IgbXVsdGkgc2VsZWN0XG5cdHdyYXBwZXJDbGFzczogJycsIC8vIFRoaXMgaXMgdGhlIHBhcmVudCBkaXYgZm9yIHRoZSBkcm9wIGRvd25cblx0aGVhZGVyQ2xhc3M6ICcnLCAvLyBUaGlzIGlzIHRoZSBjbGFzcyB0byBvdmVycmlkaW5nIHRoZSBoZWFkZXIgcGFydFxuXHRvcHRpb25Db250YWluZXJDbGFzczogJycsIC8vIFRoaXMgaXMgdGhlIGNvbnRhaW5lciBjbGFzcyBmb3IgYWxsIG9wdGlvbnNcblx0b3B0aW9uQ2xhc3M6ICcnLCAvLyBmb3Igb3ZlcnJpZGluZyBkZWZhdWx0IG9wdGlvbnMgY2xhc3Ncblx0YXV0b1dpZHRoQWRqdXN0OiB0cnVlLCAvLyBhdXRvIHdpZHRoIGFkanVzdG1lbnQgb2YgdGhpcyBjb21wb25lbnRcblx0c2hvdWxkUmVzZXRTdGF0ZTogZmFsc2UsIC8vIFVzZSB3aGVuIHJlIHJlbmRlciB0aGUgY29tcG9uZW50LiBzaG91bGRSZXNldFN0YXRlIHNldCBcInRydWVcIiBmb3IgcmVzZXQgdGhlIHNlbGVjdGVkIG9wdGlvbiB0byBlbXB0eS5cblxuXHRtdWx0aVNlbGVjdDogZmFsc2UsIC8vIG11bHRpIHNlbGVjdFxuXHRzaG91bGRVc2VNdWx0aXNlbGVjdE9wdGlvbkhlYWRlcjogdHJ1ZSwgLy8gcmVuZGVyIERlZmF1bHQgaGVhZGVyIHBhcnQgYW5kIGFwcGx5IGJ0bi4gIE9ubHkgaWYgbXVsdGlzZWxlY3RlZCBpcyB0cnVlXG5cdG11bHRpc2VsZWN0SGVhZGVyTGFiZWw6ICdGaWx0ZXIgQnkgVmFsdWUnLCAvLyBMYWJlbCBzaG93IGFzIGhlYWRlciA6IE9ubHkgaWYgbXVsdGlzZWxlY3RlZCBpcyB0cnVlIGFuZCBcInNob3VsZFVzZU11bHRpc2VsZWN0T3B0aW9uSGVhZGVyXCIgaXMgdHJ1ZVxuXHRtdWx0aVNlbGVjdEhlYWRlckNsZWFyQWxsTGFiZWw6ICdDbGVhciBBbGwnLCAvLyBMYWJlbCBmb3IgQ2xlYXIgbXVsdGlzZWxlY3Rpb246IE9ubHkgaWYgbXVsdGlzZWxlY3RlZCBpcyB0cnVlIFwic2hvdWxkVXNlTXVsdGlzZWxlY3RPcHRpb25IZWFkZXJcIiBpcyB0cnVlXG5cdHNob3VsZFVzZU11bHRpc2VsZWN0QXBwbHlCdG46IGZhbHNlLFxuXHRtdWx0aXNlbGVjdEFwcGx5QnRuQ2xhc3M6ICcnLCAvLyBjbGFzcyBmb3IgY3VzdG9tIGFwcGx5IGJ0blxuXHRtdWx0aXNlbGVjdEFwcGx5QnRuTGFiZWw6ICdBcHBseScsIC8vIGN1c3RvbSBhcHBseSBidG4gbGFiZWxcblx0c2hvdWxkQWNjZXB0T25lRnJvbUdyb3VwOiBmYWxzZSxcblxuXHRncm91cERpdmlkZXI6IG51bGwsIC8vIGZuOiByZXR1cm4ganN4LCBvbiBiZXR3ZWVuIGVhY2ggZ3JvdXAgaW4gdGhlIG9wdGlvbjogcmVuZGVyIGp1c3QgYjQgdGl0bGUgZXhjZXB0IGZpcnN0IGFuZCBsYXN0IGVsZW1lbnRcblx0aGVhZGVyT3B0aW9uRGl2aWRlcjogbnVsbCwgLy8gZm46IHJldHVybiBqc3gsIG9uIGJldHdlZW4gaGVhZGVyIGFuZCBvcHRpb24gY29udGFpbmVyXG5cdGZpeGVkVGl0bGU6IG51bGwsXG5cdG9uT3Blbk9wdGlvbjogbnVsbCxcblx0c2VsZWN0ZWRWYWx1ZXM6IG51bGwsIC8vIEl0IGNhbiBiZSBvYmplY3Qgb3IgYXJyYXkuIFVzZSBPYmplY3QgZm9yIHNpbmdsZSBzZWxlY3QgYW5kIGFycmF5IG9mIE9iamVjdCBmb3IgbXVsdGkgc2VsZWN0XG5cdHNob3VsZFVzZVJhZGlvQnRuOiBmYWxzZSwgLy8gUmFkaW8gYnRuIGlzIHJlcXVpcmVkIG9yIG5vdCBGb3IgU2luZ2xlIFNlbGVjdFxuXHRpc0Fsd2F5c09wZW46IGZhbHNlLFxuXHRhdXRvT3BlbjogZmFsc2UsXG5cdHNob3VsZFVzZUFycm93OiB0cnVlLFxuXHRzZWxlY3RlZE9wdGlvbkNvbG9yOiAnIzM5QkI5QycsXG5cblx0dGlja1JlcXVpcmVkRm9yU2luZ2xlU2VsZWN0OiBmYWxzZSxcblx0dGljazoge1xuXHRcdHdpZHRoOiAxMixcblx0XHRoZWlnaHQ6IDEyLFxuXHRcdGNvbG9yOiAnIzUwYjdlOCdcblx0fSxcblx0cmFkaW86IHtcblx0XHR3aWR0aDogMTIsXG5cdFx0aGVpZ2h0OiAxMixcblx0XHRzZWxlY3RlZEZpbGxDb2xvcjogJyM1MGI3ZTgnLFxuXHRcdHVuU2VsZWN0ZWRGaWxsQ29sb3I6ICcjNzc4NzhlJ1xuXHR9LFxuXHRjcm9zczoge1xuXHRcdHdpZHRoOiAxMyxcblx0XHRoZWlnaHQ6IDEzLFxuXHRcdGNvbG9yOiAnIzUwYjdlOCdcblx0fSxcblx0YXJyb3c6IHtcblx0XHRjb2xvcjogJ2dyYXknLFxuXHRcdHdpZHRoOiAxMixcblx0XHRoZWlnaHQ6IDEyXG5cdH0sXG5cdG9wdGlvbkhlYWRlcmVyOiBudWxsLFxuXHRyZW1vdmVPcHRpb25XaGVuU2VsZWN0ZWQ6IGZhbHNlLFxuXHRzZWxlY3RlZE9wdGlvbkNsYXNzOiAnJyxcblx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRzaG91bGRPcGVuT3B0aW9uc09uaG92ZXI6IGZhbHNlLFxuXHRvcHRpb25Ib3ZlckNvbG9yOiAnI2Q4ZWZmOCcsXG5cdG9wdGlvbkRpdmlkZXI6IG51bGxcbn07XG5Ecm9wRG93bi5wcm9wVHlwZXMgPSB7XG5cdGRlZmF1bGVTZWxlY3RUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcblx0b3B0aW9uOiBQcm9wVHlwZXMuYXJyYXksXG5cdG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcblx0b25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXHRvbkhlYWRlckhvdmVyOiBQcm9wVHlwZXMuZnVuYyxcblx0b25PcHRpb25Ib3ZlcjogUHJvcFR5cGVzLmZ1bmMsXG5cdG9uQ2xlYXJBbGw6IFByb3BUeXBlcy5mdW5jLFxuXHR3cmFwcGVyQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG5cdGhlYWRlckNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRvcHRpb25Db250YWluZXJDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcblx0b3B0aW9uQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG5cdHdpZHRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRoZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cdHNob3VsZFJlc2V0U3RhdGU6IFByb3BUeXBlcy5ib29sLFxuXHRtdWx0aVNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG5cdHNob3VsZFVzZU11bHRpc2VsZWN0T3B0aW9uSGVhZGVyOiBQcm9wVHlwZXMuYm9vbCxcblx0bXVsdGlzZWxlY3RBcHBseUJ0bkNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRtdWx0aXNlbGVjdEhlYWRlckxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRtdWx0aVNlbGVjdEhlYWRlckNsZWFyQWxsTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG5cdHNob3VsZEFjY2VwdE9uZUZyb21Hcm91cDogUHJvcFR5cGVzLmJvb2wsXG5cdGdyb3VwRGl2aWRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cdGhlYWRlck9wdGlvbkRpdmlkZXI6IFByb3BUeXBlcy5mdW5jLFxuXHRmaXhlZFRpdGxlOiBQcm9wVHlwZXMuZnVuYyxcblx0ZHJvcERvd25SZWY6IFByb3BUeXBlcy5zdHJpbmcsXG5cdG9uT3Blbk9wdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG5cdHRpY2tSZXF1aXJlZEZvclNpbmdsZVNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG5cdHNob3VsZFVzZVJhZGlvQnRuOiBQcm9wVHlwZXMuYm9vbCxcblx0aXNBbHdheXNPcGVuOiBQcm9wVHlwZXMuYm9vbCxcblx0YXV0b09wZW46IFByb3BUeXBlcy5ib29sLFxuXHRzaG91bGRVc2VBcnJvdzogUHJvcFR5cGVzLmJvb2wsXG5cdHNlbGVjdGVkT3B0aW9uQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cdHNob3VsZFVzZU11bHRpc2VsZWN0QXBwbHlCdG46IFByb3BUeXBlcy5ib29sLFxuXHRvcHRpb25IZWFkZXI6IFByb3BUeXBlcy5mdW5jLFxuXHRyZW1vdmVPcHRpb25XaGVuU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuXHRzZWxlY3RlZE9wdGlvbkNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHR0aWNrOiBQcm9wVHlwZXMub2JqZWN0LFxuXHRkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cdHNob3VsZE9wZW5PcHRpb25zT25ob3ZlcjogUHJvcFR5cGVzLmJvb2wsXG5cdG9wdGlvbkhvdmVyQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cdG9wdGlvbkRpdmlkZXI6IFByb3BUeXBlcy5mdW5jXG59O1xuIl0sIm5hbWVzIjpbImdldE93blByb3BlcnR5U3ltYm9scyIsIk9iamVjdCIsImhhc093blByb3BlcnR5IiwicHJvdG90eXBlIiwicHJvcElzRW51bWVyYWJsZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidG9PYmplY3QiLCJ2YWwiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJzaG91bGRVc2VOYXRpdmUiLCJhc3NpZ24iLCJ0ZXN0MSIsIlN0cmluZyIsImdldE93blByb3BlcnR5TmFtZXMiLCJ0ZXN0MiIsImkiLCJmcm9tQ2hhckNvZGUiLCJvcmRlcjIiLCJtYXAiLCJuIiwiam9pbiIsInRlc3QzIiwic3BsaXQiLCJmb3JFYWNoIiwibGV0dGVyIiwia2V5cyIsImVyciIsInRhcmdldCIsInNvdXJjZSIsImZyb20iLCJ0byIsInN5bWJvbHMiLCJzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwia2V5IiwiY2FsbCIsIlN5bWJvbCIsImZvciIsInAiLCJxIiwiciIsInQiLCJ1IiwidiIsInciLCJ4IiwieSIsInoiLCJhYSIsImJhIiwiQSIsIml0ZXJhdG9yIiwiY2EiLCJhIiwiYiIsImQiLCJjIiwiZSIsImciLCJoIiwiZiIsIkVycm9yIiwibCIsIm0iLCJyZXBsYWNlIiwibmFtZSIsImZyYW1lc1RvUG9wIiwiQiIsImVuY29kZVVSSUNvbXBvbmVudCIsIkMiLCJpc01vdW50ZWQiLCJlbnF1ZXVlRm9yY2VVcGRhdGUiLCJlbnF1ZXVlUmVwbGFjZVN0YXRlIiwiZW5xdWV1ZVNldFN0YXRlIiwiRCIsIkUiLCJwcm9wcyIsImNvbnRleHQiLCJyZWZzIiwidXBkYXRlciIsImlzUmVhY3RDb21wb25lbnQiLCJzZXRTdGF0ZSIsImZvcmNlVXBkYXRlIiwiRiIsIkciLCJIIiwiY29uc3RydWN0b3IiLCJrIiwiaXNQdXJlUmVhY3RDb21wb25lbnQiLCJJIiwiY3VycmVudCIsIkoiLCJLIiwiTCIsInJlZiIsIl9fc2VsZiIsIl9fc291cmNlIiwiTSIsImNoaWxkcmVuIiwiQXJyYXkiLCJkZWZhdWx0UHJvcHMiLCIkJHR5cGVvZiIsInR5cGUiLCJfb3duZXIiLCJkYSIsIk4iLCJlc2NhcGUiLCJPIiwiUCIsIlEiLCJwb3AiLCJyZXN1bHQiLCJrZXlQcmVmaXgiLCJmdW5jIiwiY291bnQiLCJSIiwicHVzaCIsIlMiLCJUIiwiaXNBcnJheSIsIm5leHQiLCJkb25lIiwidmFsdWUiLCJVIiwidG9TdHJpbmciLCJlYSIsImZhIiwiViIsIlciLCJYIiwiQ2hpbGRyZW4iLCJ0b0FycmF5Iiwib25seSIsImNyZWF0ZVJlZiIsIkNvbXBvbmVudCIsIlB1cmVDb21wb25lbnQiLCJjcmVhdGVDb250ZXh0IiwiX2NhbGN1bGF0ZUNoYW5nZWRCaXRzIiwiX2N1cnJlbnRWYWx1ZSIsIl9jdXJyZW50VmFsdWUyIiwiX3RocmVhZENvdW50IiwiUHJvdmlkZXIiLCJDb25zdW1lciIsIl9jb250ZXh0IiwiZm9yd2FyZFJlZiIsInJlbmRlciIsImxhenkiLCJfY3RvciIsIl9zdGF0dXMiLCJfcmVzdWx0IiwibWVtbyIsImNvbXBhcmUiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwidXNlRGVidWdWYWx1ZSIsInVzZUxheW91dEVmZmVjdCIsInVzZU1lbW8iLCJ1c2VSZWR1Y2VyIiwidXNlUmVmIiwidXNlU3RhdGUiLCJGcmFnbWVudCIsIlN0cmljdE1vZGUiLCJTdXNwZW5zZSIsImNyZWF0ZUVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJjcmVhdGVGYWN0b3J5IiwiYmluZCIsImlzVmFsaWRFbGVtZW50IiwidmVyc2lvbiIsInVuc3RhYmxlX0NvbmN1cnJlbnRNb2RlIiwidW5zdGFibGVfUHJvZmlsZXIiLCJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsIlJlYWN0Q3VycmVudERpc3BhdGNoZXIiLCJSZWFjdEN1cnJlbnRPd25lciIsIlkiLCJkZWZhdWx0IiwiWiIsIlJlYWN0UHJvcFR5cGVzU2VjcmV0IiwibW9kdWxlIiwicmVxdWlyZSQkMCIsImVtcHR5RnVuY3Rpb24iLCJzaGltIiwicHJvcE5hbWUiLCJjb21wb25lbnROYW1lIiwibG9jYXRpb24iLCJwcm9wRnVsbE5hbWUiLCJzZWNyZXQiLCJpc1JlcXVpcmVkIiwiZ2V0U2hpbSIsIlJlYWN0UHJvcFR5cGVzIiwiYXJyYXkiLCJib29sIiwibnVtYmVyIiwib2JqZWN0Iiwic3RyaW5nIiwic3ltYm9sIiwiYW55IiwiYXJyYXlPZiIsImVsZW1lbnQiLCJpbnN0YW5jZU9mIiwibm9kZSIsIm9iamVjdE9mIiwib25lT2YiLCJvbmVPZlR5cGUiLCJzaGFwZSIsImV4YWN0IiwiY2hlY2tQcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJyZXF1aXJlJCQxIiwiQXJyb3ciLCJSZWFjdCIsImNsYXNzIiwib25DbGljayIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsbCIsInByb3BUeXBlcyIsInN0cm9rZSIsIkNyb3NzIiwiRGF0YUFuYWx5c2VyIiwiYW5hbHlzZUlucHV0IiwiZGF0YSIsInNlbGVjdGVkVmFsZXMiLCJyZXR1cm5PYmoiLCJpc01peFdpdGhUaXRsZSIsImdldFN0cnVjdHVyZWREYXRhIiwiaXNTaW1wbGVBcnJheSIsInByb2Nlc3NTaW1wbGVBcnJheSIsImFycmF5Q29udGFpbnNPYmplY3QiLCJjb250YWluVGl0bGVGaWVsZCIsImNvbnRhaW5EYXRhRmllbGQiLCJwcm9jZXNzVGl0bGVBbmRPYmplY3RzIiwicHJvY2Vzc09iamVjdHMiLCJkYXRhT2JqIiwibGVuIiwiYXJyYXlEYXRhIiwibmV3QXJyIiwiYXJyTGVuZ3RoIiwicmV0dXJuQXJyYXkiLCJlYWNoT2JqIiwiaGFzR3JvdXAiLCJncm91cE5hbWUiLCJkaXNhYmxlZCIsInRlbXAiLCJsYWJlbCIsInN1Yk1lbnUiLCJoYXNTdWJtZW51Iiwib3B0aW9ucyIsImlzRGlzYWJsZWQiLCJpc1N1Ym1lbnUiLCJpc1RpdGxlIiwiZ3JvdXBFbGUiLCJhcnJheUNvbnRhaW5zQXJyYXkiLCJpc09iamVjdCIsImJhYmVsSGVscGVycy50eXBlb2YiLCJVdGlscyIsImlzRW1wdHlTdHJpbmciLCJzdHIiLCJpc0VtcHR5T2JqZWN0Iiwib2JqIiwiS2V5R2VuZXJhdG9yIiwiZ2V0TmV3IiwicmVzZXJ2ZWRDbGFzc05hbWVzIiwid3JhcHBlciIsImhlYWRlciIsIm9wdGlvbkNvbnRhaW5lciIsImVhY2hPcHRpb25XcmFwcGVyIiwib3B0aW9uIiwic3VibWVudSIsImlzU3ViTWVudSIsIk11bHRpc2VsZWN0IiwicmVuZGVySGVhZGVyIiwibWFpbk1lbnVMaXN0Iiwic2hvdWxkVXNlTXVsdGlzZWxlY3RBcHBseUJ0biIsInJlbmRlckFwcGx5QnRuIiwib3B0aW9uSGVhZGVyZXIiLCJzaG91bGRVc2VNdWx0aXNlbGVjdE9wdGlvbkhlYWRlciIsIm11bHRpc2VsZWN0SGVhZGVyTGFiZWwiLCJvbkNsaWNrQ2xlYXJBbGwiLCJtdWx0aVNlbGVjdEhlYWRlckNsZWFyQWxsTGFiZWwiLCJjbGFzc05hbWUiLCJtdWx0aXNlbGVjdEFwcGx5QnRuQ2xhc3MiLCJvbk11bHRpU2VsZWN0RG9uZSIsIm11bHRpc2VsZWN0QXBwbHlCdG5MYWJlbCIsIlRvb2xUaXAiLCJwb3NpdGlvbiIsInRleHQiLCJDU1NDbGFzc25hbWUiLCJUaWNrIiwiUmFkaW9VbnNlbGVjdGVkIiwiY3Vyc29yIiwiUmFkaW9TZWxlY3RlZCIsIk9wdGlvbiIsIm9wdGlvbk9iaiIsImNsYXNzZXMiLCJpbmRleCIsImlzU2VsZWN0ZWRPcHRpb24iLCJpc011bHRpU2VsZWN0IiwicmVuZGVyVGl0bGVBc09wdGlvbnMiLCJ0aWNrUmVxdWlyZWRGb3JTaW5nbGVTZWxlY3QiLCJzaG91bGRVc2VSYWRpb0J0biIsInJlbW92ZU9wdGlvbldoZW5TZWxlY3RlZCIsInNlbGVjdGVkT3B0aW9uQ2xhc3MiLCJvbk1vdXNlT3ZlciIsIm9uTW91c2VPdXQiLCJvblNlbGVjdCIsInJlbmRlclRpY2siLCJ0aWNrIiwicmVuZGVyUmFkaW9CdG4iLCJyYWRpbyIsImRlZmF1bHRPcHRpb25DbGFzcyIsInJlbmRlck9wdGlvbkxhYmVsIiwiYXV0b1dpZHRoQWRqdXN0IiwibGFiZWxOYW1lIiwic3Vic3RyIiwiY29sb3IiLCJtYXJnaW5MZWZ0IiwiY3VycmVudE9iaiIsInNlbGVjdGVkRmlsbENvbG9yIiwidW5TZWxlY3RlZEZpbGxDb2xvciIsIkRyb3BEb3duIiwic3RhdGUiLCJzZWxlY3RlZE9wdGlvbiIsInNlbGVjdGVkTXVsdGlTZWxlY3RPcHRpb25zIiwic2VsZWN0ZWRNdWx0aVNlbGVjdExhYmVsIiwiaXNDb21wbGV0ZWRNdWx0aVNlbGVjdGlvbiIsImlzT3BlbiIsIndyYXBwZXJSZWYiLCJsaXN0ZW5DbGlja291dHNpZGVFdmVudCIsInNldFByZXNlbGVjdGVkVmFsdWUiLCJhdXRvT3BlbiIsInNob3dPcHRpb24iLCJkb2N1bWVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbGlja291dHNpZGUiLCJuZXh0UHJvcHMiLCJzaG91bGRSZXNldFN0YXRlIiwicmVzZXRTdGF0ZSIsInNlbGVjdGVkVmFsdWVzIiwibGlzdE9iaiIsIm1ha2VMaXN0QXNPcHRpb24iLCJoZWFkZXJDbGFzcyIsIndyYXBwZXJDbGFzcyIsInNob3VsZE9wZW5PcHRpb25zT25ob3ZlciIsImhpZGVPcHRpb24iLCJ0b2dnbGVEcm9wZG93biIsIm9uSGVhZGVySG92ZXIiLCJoZWFkZXJSZWYiLCJzaG91bGRVc2VBcnJvdyIsInJlbmRlckFycm93IiwiaGVhZGVyT3B0aW9uRGl2aWRlciIsInZpc2liaWxpdHkiLCJ0cmFuc2l0aW9uIiwib3B0aW9uQ29udGFpbmVyQ2xhc3MiLCJsb25nZXN0T3B0aW9uU3RyTGVuZ3RoIiwibG9uZ2VzdFN0cmluZyIsImNhbGxCYWNrIiwibXVsdGlTZWxlY3QiLCJoYW5kbGVQcmVTZWxlY3RlZEZvck11bHRpU2VsZWN0aW9uIiwidGVtcE9iaiIsImRhdGFUb1NldFN0YXRlIiwibGFiZWxUb1Nob3ciLCJ0aXRsZSIsImdldFN1Ym1lbnVMaXN0Iiwic2VsZWN0ZWRMYWJlbCIsImFyckxpc3QiLCJzZWxlY3RlZE9iaiIsImpzeCIsInN1Ym1lbnVPYmoiLCJhcnIiLCJvcHRpb25DbGFzcyIsImNsZWFyQWxsTXVsdGlTZWxlY3QiLCJjYiIsImVtaXRPbnNlbGVjdElmTXVsdGlzZWxlY3QiLCJvbkNsZWFyQWxsIiwib25NdWx0aVNlbGVjdCIsInNlbGVjdGVkT3B0T2JqIiwic2hvdWxkRGVzZWxlY3QiLCJoYW5kbGVEZXNlbGVjdCIsImhhbmRsZVNlbGVjdCIsImdldExhYmVsRnJvbU11bHRpc2VsZWN0ZWQiLCJzaG91bGRBY2NlcHRPbmVGcm9tR3JvdXAiLCJpbmRleE9mIiwiaGFzSW5NdWx0aVNlbGVjdGVkIiwidGVtcE11bHRpc2VsZWN0ZWRPcHRpb25zIiwidGVtcE11bHRpc2VsZWN0ZWRMYWJlbCIsImV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhc1RpdGxlQ2xhc3MiLCJpc0NsaWNrV2l0aGluRHJvcGRvd25XcmFwcGVyIiwibWF4TG9vcExpbWl0IiwiaXNIdG1sVGFnIiwiaXNEcm9wZG93bk9wdGlvbkNvbnRhaW5lciIsImNsYXNzTGlzdCIsInBhcmVudEVsZW1lbnQiLCJpc0Ryb3Bkb3duV3JhcHBlciIsInRhZ05hbWUiLCJ0YXJnZXRPYmoiLCJtYXRjaGVzIiwib25PcGVuT3B0aW9uIiwib25DbG9zZU9wdGlvbiIsImlzRmlyc3RUaW1lT3BlbiIsIldpZHRoUmVxdWlyZWRUb3Nob3ciLCJlbGVtIiwib2Zmc2V0V2lkdGgiLCJwYXJlbnRPcHRPYmoiLCJwcmVTZWxlY3RlZE9wdGlvbiIsIm9uQ2hhbmdlIiwib25UYWdIb3ZlciIsImZpeGVkVGl0bGUiLCJyZW5kZXJIZWFkZXJGb3JNdWx0aXNlbGVjdCIsImRlZmF1bGVTZWxlY3RUaXRsZSIsInJlbmRlclBsYWNlaG9sZGVyIiwiZ2V0SGlkZGVuQ29tcG9uZW50Iiwic2VsZWN0ZWRPcHRpb25zQXJyYXkiLCJ0aXRsZVRvUmVuZGVyIiwiY3Jvc3MiLCJwYWRkaW5nTGVmdCIsImRpc3BsYXkiLCJvcGFjaXR5IiwiZm9udFdlaWdodCIsImNoZWNrTG9uZ2VzdFN0cmluZyIsIm9wdGlvbkxhYmVsIiwib25PcHRpb25Ib3ZlciIsImdldEVhY2hPcHRpb25XcmFwcGVyTm9kZSIsInN0eWxlIiwiYmFja2dyb3VuZCIsIm9wdGlvbkhvdmVyQ29sb3IiLCJvbk9wdGlvbk91dCIsInJlbW92ZVByb3BlcnR5IiwiaXNFYWNoT3B0aW9uV3JhcHBlciIsIm9uT3B0aW9uTW91c2VFbnRlciIsImdldE9wdGlvblRvUmVuZGVyIiwib3B0aW9uRGl2aWRlciIsImdldERlZmF1bHRHcm91cERpdmlkZXIiLCJjdXN0b21DbGFzc2VzIiwic3ViTWVudUxpc3QiLCJncm91cERpdmlkZXIiLCJNdWx0aVNlbGVjdCIsImFycm93IiwidHJhbnNmb3JtIiwiaXNBbHdheXNPcGVuIiwic2VsZWN0ZWRPcHRpb25Db2xvciIsImRyb3BEb3duUmVmIiwib3B0aW9uSGVhZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0NBQUE7Ozs7Ozs7Q0FRQSxJQUFJQSx3QkFBd0JDLE9BQU9ELHFCQUFuQztDQUNBLElBQUlFLGlCQUFpQkQsT0FBT0UsU0FBUCxDQUFpQkQsY0FBdEM7Q0FDQSxJQUFJRSxtQkFBbUJILE9BQU9FLFNBQVAsQ0FBaUJFLG9CQUF4Qzs7Q0FFQSxTQUFTQyxRQUFULENBQWtCQyxHQUFsQixFQUF1QjtDQUN0QixLQUFJQSxRQUFRLElBQVIsSUFBZ0JBLFFBQVFDLFNBQTVCLEVBQXVDO0NBQ3RDLFFBQU0sSUFBSUMsU0FBSixDQUFjLHVEQUFkLENBQU47Q0FDQTs7Q0FFRCxRQUFPUixPQUFPTSxHQUFQLENBQVA7Q0FDQTs7Q0FFRCxTQUFTRyxlQUFULEdBQTJCO0NBQzFCLEtBQUk7Q0FDSCxNQUFJLENBQUNULE9BQU9VLE1BQVosRUFBb0I7Q0FDbkIsVUFBTyxLQUFQO0NBQ0E7Ozs7O0NBS0QsTUFBSUMsUUFBUSxJQUFJQyxNQUFKLENBQVcsS0FBWCxDQUFaLENBUkc7Q0FTSEQsUUFBTSxDQUFOLElBQVcsSUFBWDtDQUNBLE1BQUlYLE9BQU9hLG1CQUFQLENBQTJCRixLQUEzQixFQUFrQyxDQUFsQyxNQUF5QyxHQUE3QyxFQUFrRDtDQUNqRCxVQUFPLEtBQVA7Q0FDQTs7O0NBR0QsTUFBSUcsUUFBUSxFQUFaO0NBQ0EsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksRUFBcEIsRUFBd0JBLEdBQXhCLEVBQTZCO0NBQzVCRCxTQUFNLE1BQU1GLE9BQU9JLFlBQVAsQ0FBb0JELENBQXBCLENBQVosSUFBc0NBLENBQXRDO0NBQ0E7Q0FD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
