System.register(["@beyond-js/kernel@0.1.7/bundle", "@beyond-js/kernel@0.1.7/styles", "react@18.2.0", "perfect-scrollbar@1.5.5"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, BeyondScrollContainer, __beyond_pkg, hmr;
  _export("BeyondScrollContainer", void 0);
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_beyondJsKernel017Styles) {
      dependency_1 = _beyondJsKernel017Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_perfectScrollbar2) {
      dependency_3 = _perfectScrollbar2;
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
          "vspecifier": "@bgroup/ui@0.0.21/perfect-scrollbar"
        },
        "type": "code",
        "name": "perfect-scrollbar"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['perfect-scrollbar', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/ui@0.0.21/perfect-scrollbar');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./container
      ***************************/
      ims.set('./container', {
        hash: 347674479,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondScrollContainer = BeyondScrollContainer;
          var _react = require("react");
          var _perfectScrollbar = require("perfect-scrollbar");
          /*bundle*/ /**
                      * It's a React component that uses the PerfectScrollbar library to create a scrollbar that can be
                      * customized with CSS.
                      * @param {props} props - props
                      * @returns A function that returns a JSX.Element
                      */
          function BeyondScrollContainer(props) {
            const ref = (0, _react.useRef)(null);
            (0, _react.useEffect)(() => {
              const control = ref.current;
              const scrollbar = new _perfectScrollbar.default(control, {
                wheelSpeed: 2,
                wheelPropagation: true,
                minScrollbarLength: 20
              });
              const handleOnScrollY = event => {
                props.onScrollY(event, control, scrollbar);
              };
              const handleOnScrollX = event => {
                props.onScrollY(event, control, scrollbar);
              };
              const {
                onScrollY,
                onScrollX
              } = props;
              if (onScrollY) control.addEventListener("ps-scroll-y", handleOnScrollY);
              if (onScrollX) control.addEventListener("ps-scroll-y", handleOnScrollX);
              return () => {
                scrollbar.destroy();
                if (onScrollY) ref.current.removeEventListener("ps-scroll-y", onScrollY);
                if (onScrollX) ref.current.removeEventListener("ps-scroll-y", handleOnScrollX);
              };
            }, []);
            let cls = props.className ? `beyond-perfect-scrollbar ${props.className}` : "beyond-perfect-scrollbar";
            return _react.default.createElement("div", {
              ref: ref,
              className: cls
            }, props.children);
          }
          ;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./container",
        "from": "BeyondScrollContainer",
        "name": "BeyondScrollContainer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BeyondScrollContainer') && _export("BeyondScrollContainer", BeyondScrollContainer = require ? require('./container').BeyondScrollContainer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFlTyxXQU5QOzs7Ozs7VUFNaUIsU0FDTkEscUJBQXFCLENBQUNDLEtBQVk7WUFDM0MsTUFBTUMsR0FBRyxHQUFxQyxpQkFBTSxFQUFDLElBQUksQ0FBQztZQUUxRCxvQkFBUyxFQUFDLE1BQW1CO2NBQzNCLE1BQU1DLE9BQU8sR0FBbUJELEdBQUcsQ0FBQ0UsT0FBTztjQUUzQyxNQUFNQyxTQUFTLEdBQXFCLElBQUlDLHlCQUFnQixDQUFDSCxPQUFPLEVBQUU7Z0JBQ2hFSSxVQUFVLEVBQUUsQ0FBQztnQkFDYkMsZ0JBQWdCLEVBQUUsSUFBSTtnQkFDdEJDLGtCQUFrQixFQUFFO2VBQ3JCLENBQUM7Y0FDRixNQUFNQyxlQUFlLEdBQUlDLEtBQUssSUFBVTtnQkFDdENWLEtBQUssQ0FBQ1csU0FBUyxDQUFDRCxLQUFLLEVBQUVSLE9BQU8sRUFBRUUsU0FBUyxDQUFDO2NBQzVDLENBQUM7Y0FFRCxNQUFNUSxlQUFlLEdBQUlGLEtBQUssSUFBVTtnQkFDdENWLEtBQUssQ0FBQ1csU0FBUyxDQUFDRCxLQUFLLEVBQUVSLE9BQU8sRUFBRUUsU0FBUyxDQUFDO2NBQzVDLENBQUM7Y0FDRCxNQUFNO2dCQUFFTyxTQUFTO2dCQUFFRTtjQUFTLENBQUUsR0FBR2IsS0FBSztjQUN0QyxJQUFJVyxTQUFTLEVBQUVULE9BQU8sQ0FBQ1ksZ0JBQWdCLENBQUMsYUFBYSxFQUFFTCxlQUFlLENBQUM7Y0FDdkUsSUFBSUksU0FBUyxFQUFFWCxPQUFPLENBQUNZLGdCQUFnQixDQUFDLGFBQWEsRUFBRUYsZUFBZSxDQUFDO2NBQ3ZFLE9BQU8sTUFBSztnQkFDVlIsU0FBUyxDQUFDVyxPQUFPLEVBQUU7Z0JBRW5CLElBQUlKLFNBQVMsRUFBRVYsR0FBRyxDQUFDRSxPQUFPLENBQUNhLG1CQUFtQixDQUFDLGFBQWEsRUFBRUwsU0FBUyxDQUFDO2dCQUN4RSxJQUFJRSxTQUFTLEVBQ1haLEdBQUcsQ0FBQ0UsT0FBTyxDQUFDYSxtQkFBbUIsQ0FBQyxhQUFhLEVBQUVKLGVBQWUsQ0FBQztjQUNuRSxDQUFDO1lBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUVOLElBQUlLLEdBQUcsR0FBV2pCLEtBQUssQ0FBQ2tCLFNBQVMsR0FDN0IsNEJBQTRCbEIsS0FBSyxDQUFDa0IsU0FBUyxFQUFFLEdBQzdDLDBCQUEwQjtZQUM5QixPQUNFQztjQUFLbEIsR0FBRyxFQUFFQSxHQUFHO2NBQUVpQixTQUFTLEVBQUVEO1lBQUcsR0FDMUJqQixLQUFLLENBQUNvQixRQUFRLENBQ1g7VUFFVjtVQUFDIiwibmFtZXMiOlsiQmV5b25kU2Nyb2xsQ29udGFpbmVyIiwicHJvcHMiLCJyZWYiLCJjb250cm9sIiwiY3VycmVudCIsInNjcm9sbGJhciIsIlBlcmZlY3RTY3JvbGxiYXIiLCJ3aGVlbFNwZWVkIiwid2hlZWxQcm9wYWdhdGlvbiIsIm1pblNjcm9sbGJhckxlbmd0aCIsImhhbmRsZU9uU2Nyb2xsWSIsImV2ZW50Iiwib25TY3JvbGxZIiwiaGFuZGxlT25TY3JvbGxYIiwib25TY3JvbGxYIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlc3Ryb3kiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xzIiwiY2xhc3NOYW1lIiwiUmVhY3QiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiY29kZS90cy9jb250YWluZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19