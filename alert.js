System.register(["@beyond-js/kernel@0.1.7/bundle", "react@18.2.0", "@bgroup/ui@0.0.21/icon", "@beyond-js/kernel@0.1.7/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, BeyondAlert, __beyond_pkg, hmr;
  _export("BeyondAlert", void 0);
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_bgroupUi0021Icon) {
      dependency_2 = _bgroupUi0021Icon;
    }, function (_beyondJsKernel017Styles) {
      dependency_3 = _beyondJsKernel017Styles;
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
          "vspecifier": "@bgroup/ui@0.0.21/alert"
        },
        "type": "code",
        "name": "alert"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@bgroup/ui/icon', dependency_2], ['@beyond-js/kernel/styles', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/ui@0.0.21/alert');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./alert
      ***********************/
      ims.set('./alert', {
        hash: 2230480713,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondAlert = BeyondAlert;
          var _react = require("react");
          var _icon = require("@bgroup/ui/icon");
          /*bundle*/
          function BeyondAlert(props) {
            const {
              message,
              show,
              className,
              mode,
              title,
              isClose
            } = props;
            const [state, setState] = _react.default.useState({
              show: show ?? false,
              text: message ?? "texto de la alerta"
            });
            _react.default.useEffect(() => {
              setState({
                ...state,
                show: show
              });
            }, [show]);
            if (!state.show) return null;
            const close = () => setState({
              ...state,
              show: false,
              text: ""
            });
            const cls = className ? `${className} alert ${mode ?? "success"} fadeIn` : `alert ${mode ?? "success"} fadeIn`;
            return _react.default.createElement("div", {
              className: cls,
              onClick: close
            }, " ", title && _react.default.createElement("span", {
              dangerouslySetInnerHTML: {
                __html: title
              }
            }), message && _react.default.createElement("span", {
              dangerouslySetInnerHTML: {
                __html: message
              }
            }), isClose && _react.default.createElement(_icon.BeyondIconButton, {
              icon: "close",
              onClick: close
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./alert",
        "from": "BeyondAlert",
        "name": "BeyondAlert"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BeyondAlert') && _export("BeyondAlert", BeyondAlert = require ? require('./alert').BeyondAlert : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFXTztVQUFVLFNBQ0pBLFdBQVcsQ0FBQ0MsS0FBWTtZQUNqQyxNQUFNO2NBQUVDLE9BQU87Y0FBRUMsSUFBSTtjQUFFQyxTQUFTO2NBQUVDLElBQUk7Y0FBRUMsS0FBSztjQUFFQztZQUFPLENBQUUsR0FBR04sS0FBSztZQUNoRSxNQUFNLENBQUNPLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdDLGNBQUssQ0FBQ0MsUUFBUSxDQUFDO2NBQ3JDUixJQUFJLEVBQUVBLElBQUksSUFBSSxLQUFLO2NBQ25CUyxJQUFJLEVBQUVWLE9BQU8sSUFBSTthQUNwQixDQUFDO1lBQ0ZRLGNBQUssQ0FBQ0csU0FBUyxDQUFDLE1BQUs7Y0FDakJKLFFBQVEsQ0FBQztnQkFBRSxHQUFHRCxLQUFLO2dCQUFFTCxJQUFJLEVBQUVBO2NBQUksQ0FBRSxDQUFDO1lBQ3RDLENBQUMsRUFBRSxDQUFDQSxJQUFJLENBQUMsQ0FBQztZQUNWLElBQUksQ0FBQ0ssS0FBSyxDQUFDTCxJQUFJLEVBQUUsT0FBTyxJQUFJO1lBQzVCLE1BQU1XLEtBQUssR0FBRyxNQUFZTCxRQUFRLENBQUM7Y0FBRSxHQUFHRCxLQUFLO2NBQUVMLElBQUksRUFBRSxLQUFLO2NBQUVTLElBQUksRUFBRTtZQUFFLENBQUUsQ0FBQztZQUN2RSxNQUFNRyxHQUFHLEdBQVdYLFNBQVMsR0FDdkIsR0FBR0EsU0FBUyxVQUFVQyxJQUFJLElBQUksU0FBUyxTQUFTLEdBQ2hELFNBQVNBLElBQUksSUFBSSxTQUFTLFNBQVM7WUFDekMsT0FDSUs7Y0FBS04sU0FBUyxFQUFFVyxHQUFHO2NBQUVDLE9BQU8sRUFBRUY7WUFBSyxHQUM5QixHQUFHLEVBQ0hSLEtBQUssSUFBSUk7Y0FBTU8sdUJBQXVCLEVBQUU7Z0JBQUVDLE1BQU0sRUFBRVo7Y0FBSztZQUFFLEVBQUksRUFDN0RKLE9BQU8sSUFBSVE7Y0FBTU8sdUJBQXVCLEVBQUU7Z0JBQUVDLE1BQU0sRUFBRWhCO2NBQU87WUFBRSxFQUFTLEVBQ3RFSyxPQUFPLElBQUlHLDZCQUFDUyxzQkFBZ0I7Y0FBQ0MsSUFBSSxFQUFDLE9BQU87Y0FBQ0osT0FBTyxFQUFFRjtZQUFLLEVBQUksQ0FDM0Q7VUFFZCIsIm5hbWVzIjpbIkJleW9uZEFsZXJ0IiwicHJvcHMiLCJtZXNzYWdlIiwic2hvdyIsImNsYXNzTmFtZSIsIm1vZGUiLCJ0aXRsZSIsImlzQ2xvc2UiLCJzdGF0ZSIsInNldFN0YXRlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInRleHQiLCJ1c2VFZmZlY3QiLCJjbG9zZSIsImNscyIsIm9uQ2xpY2siLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIkJleW9uZEljb25CdXR0b24iLCJpY29uIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2FsZXJ0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==