System.register(["@beyond-js/kernel@0.1.2/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.2/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, BeyondSpinner, __beyond_pkg, hmr;
  _export("BeyondSpinner", void 0);
  return {
    setters: [function (_beyondJsKernel012Bundle) {
      dependency_0 = _beyondJsKernel012Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsKernel012Styles) {
      dependency_2 = _beyondJsKernel012Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-widgets", "18.20.3"], ["@beyond-js/widgets", "0.1.1"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.5.4"], ["@beyond/ui", "1.0.0"], ["@beyond/ui", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond/ui@1.0.0/spinner"
        },
        "type": "code",
        "name": "spinner"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/styles', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/ui@1.0.0/spinner');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./spiner
      ************************/
      ims.set('./spiner', {
        hash: 2775448688,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondSpinner = void 0;
          var _react = require("react");
          /*bundle*/
          const BeyondSpinner = (0, _react.forwardRef)((props, ref) => {
            const {
              color,
              className
            } = props;
            const output = _react.default.createElement("style", null, `
        @-webkit-keyframes color {
            100%, 0% {
                stroke: ${color ?? "#4285F4"};
            }
        }
        @keyframes color {
            100%, 0% {
                stroke: ${color ?? "#4285F4"};
            }
        }
        `);
            const cls = className ? `${className} beyond-element-spinner` : "beyond-element-spinner";
            return _react.default.createElement("div", {
              className: cls,
              ref: ref
            }, output, _react.default.createElement("svg", {
              viewBox: "0 0 100 100"
            }, _react.default.createElement("circle", {
              cx: "50",
              cy: "50",
              r: "20"
            })));
          });
          exports.BeyondSpinner = BeyondSpinner;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./spiner",
        "from": "BeyondSpinner",
        "name": "BeyondSpinner"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BeyondSpinner') && _export("BeyondSpinner", BeyondSpinner = require ? require('./spiner').BeyondSpinner : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQVVPO1VBQ1AsTUFBTUEsYUFBYSxHQUVmLHFCQUFVLEVBQ1osQ0FBQ0MsS0FBaUIsRUFBRUMsR0FBOEIsS0FBaUI7WUFDakUsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQVMsQ0FBRSxHQUFHSCxLQUFLO1lBQ2xDLE1BQU1JLE1BQU0sR0FDVkMsNENBQ0c7OzswQkFHaUJILEtBQUssSUFBSSxTQUFTOzs7OzswQkFLbEJBLEtBQUssSUFBSSxTQUFTOzs7U0FHbkMsQ0FFSjtZQUNELE1BQU1JLEdBQUcsR0FBV0gsU0FBUyxHQUN6QixHQUFHQSxTQUFTLHlCQUF5QixHQUNyQyx3QkFBd0I7WUFDNUIsT0FDRUU7Y0FBS0YsU0FBUyxFQUFFRyxHQUFHO2NBQUVMLEdBQUcsRUFBRUE7WUFBRyxHQUMxQkcsTUFBTSxFQUNQQztjQUFLRSxPQUFPLEVBQUM7WUFBYSxHQUN4QkY7Y0FBUUcsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsQ0FBQyxFQUFDO1lBQUksRUFBRyxDQUM3QixDQUNGO1VBRVYsQ0FBQyxDQUNGO1VBQUNDIiwibmFtZXMiOlsiQmV5b25kU3Bpbm5lciIsInByb3BzIiwicmVmIiwiY29sb3IiLCJjbGFzc05hbWUiLCJvdXRwdXQiLCJSZWFjdCIsImNscyIsInZpZXdCb3giLCJjeCIsImN5IiwiciIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInByb2plY3QvbW9kdWxlcy9zcGlubmVyL2NvbXBvbmVudC9jb2RlL3RzL3NwaW5lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=