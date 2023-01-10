System.register(["@beyond-js/kernel@0.1.7/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.7/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, BeyondSpinner, __beyond_pkg, hmr;
  _export("BeyondSpinner", void 0);
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsKernel017Styles) {
      dependency_2 = _beyondJsKernel017Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.5.4"], ["swiper", "8.4.5"], ["@bgroup/ui", "0.0.21"], ["@bgroup/ui", "0.0.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bgroup/ui@0.0.21/spinner"
        },
        "type": "code",
        "name": "spinner"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/styles', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/ui@0.0.21/spinner');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./spiner
      ************************/
      ims.set('./spiner', {
        hash: 2921182323,
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
              className,
              primary,
              secondary,
              size
            } = props;
            let stroke;
            if (primary) stroke = "var(--primary)";else if (secondary) stroke = "var(--secondary)";else if (color) stroke = color;else stroke = "var(--primary)";
            const cls = className ? `${className} beyond-element-spinner` : "beyond-element-spinner";
            const style = {
              style: {}
            };
            if (size) {
              style.style.height = size;
              style.style.width = size;
            }
            ;
            return _react.default.createElement("div", {
              className: cls,
              ref: ref,
              ...style
            }, _react.default.createElement("svg", {
              viewBox: "0 0 100 100"
            }, _react.default.createElement("circle", {
              cx: "50",
              cy: "50",
              r: "20",
              style: {
                stroke
              }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQWFPO1VBQ0wsTUFBTUEsYUFBYSxHQUVmLHFCQUFVLEVBQ1osQ0FBQ0MsS0FBaUIsRUFBRUMsR0FBOEIsS0FBaUI7WUFDakUsTUFBTTtjQUFFQyxLQUFLO2NBQUVDLFNBQVM7Y0FBRUMsT0FBTztjQUFFQyxTQUFTO2NBQUVDO1lBQUksQ0FBRSxHQUFHTixLQUFLO1lBQzVELElBQUlPLE1BQWM7WUFDbEIsSUFBSUgsT0FBTyxFQUFFRyxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsS0FDbEMsSUFBSUYsU0FBUyxFQUFFRSxNQUFNLEdBQUcsa0JBQWtCLENBQUMsS0FDM0MsSUFBSUwsS0FBSyxFQUFFSyxNQUFNLEdBQUdMLEtBQUssQ0FBQyxLQUMxQkssTUFBTSxHQUFHLGdCQUFnQjtZQUU5QixNQUFNQyxHQUFHLEdBQVdMLFNBQVMsR0FDekIsR0FBR0EsU0FBUyx5QkFBeUIsR0FDckMsd0JBQXdCO1lBQzVCLE1BQU1NLEtBQUssR0FBUTtjQUFFQSxLQUFLLEVBQUU7WUFBRSxDQUFFO1lBQ2hDLElBQUlILElBQUksRUFBRTtjQUNSRyxLQUFLLENBQUNBLEtBQUssQ0FBQ0MsTUFBTSxHQUFHSixJQUFJO2NBQ3pCRyxLQUFLLENBQUNBLEtBQUssQ0FBQ0UsS0FBSyxHQUFHTCxJQUFJOztZQUN6QjtZQUNELE9BQ0VNO2NBQUtULFNBQVMsRUFBRUssR0FBRztjQUFFUCxHQUFHLEVBQUVBLEdBQUc7Y0FBQSxHQUFNUTtZQUFLLEdBQ3RDRztjQUFLQyxPQUFPLEVBQUM7WUFBYSxHQUN4QkQ7Y0FBUUUsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsQ0FBQyxFQUFDLElBQUk7Y0FBQ1AsS0FBSyxFQUFFO2dCQUFFRjtjQUFNO1lBQUUsRUFBSSxDQUNoRCxDQUNGO1VBRVYsQ0FBQyxDQUNGO1VBQUNVIiwibmFtZXMiOlsiQmV5b25kU3Bpbm5lciIsInByb3BzIiwicmVmIiwiY29sb3IiLCJjbGFzc05hbWUiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5Iiwic2l6ZSIsInN0cm9rZSIsImNscyIsInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJSZWFjdCIsInZpZXdCb3giLCJjeCIsImN5IiwiciIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImNvZGUvdHMvc3BpbmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==