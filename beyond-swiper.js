System.register(["@beyond-js/widgets@0.1.2/render", "@beyond-js/kernel@0.1.7/bundle", "@beyond-js/react-widgets@18.21.1/page", "react@18.2.0", "@bgroup/ui@0.0.21/header", "@bgroup/ui@0.0.21/spinner", "@bgroup/ui@0.0.21/toast", "@bgroup/ui@0.0.21/copyable-implementation", "@bgroup/ui@0.0.21/swiper-component", "@bgroup/ui@0.0.21/image", "@beyond-js/kernel@0.1.7/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets012Render) {
      dependency_0 = _beyondJsWidgets012Render;
    }, function (_beyondJsKernel017Bundle) {
      dependency_1 = _beyondJsKernel017Bundle;
    }, function (_beyondJsReactWidgets18211Page) {
      dependency_2 = _beyondJsReactWidgets18211Page;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_bgroupUi0021Header) {
      dependency_4 = _bgroupUi0021Header;
    }, function (_bgroupUi0021Spinner) {
      dependency_5 = _bgroupUi0021Spinner;
    }, function (_bgroupUi0021Toast) {
      dependency_6 = _bgroupUi0021Toast;
    }, function (_bgroupUi0021CopyableImplementation) {
      dependency_7 = _bgroupUi0021CopyableImplementation;
    }, function (_bgroupUi0021SwiperComponent) {
      dependency_8 = _bgroupUi0021SwiperComponent;
    }, function (_bgroupUi0021Image) {
      dependency_9 = _bgroupUi0021Image;
    }, function (_beyondJsKernel017Styles) {
      dependency_10 = _beyondJsKernel017Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.5.4"], ["swiper", "8.4.5"], ["@bgroup/ui", "0.0.21"], ["@bgroup/ui", "0.0.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bgroup/ui@0.0.21/beyond-swiper"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['react', dependency_3], ['@bgroup/ui/header', dependency_4], ['@bgroup/ui/spinner', dependency_5], ['@bgroup/ui/toast', dependency_6], ['@bgroup/ui/copyable-implementation', dependency_7], ['@bgroup/ui/swiper-component', dependency_8], ['@bgroup/ui/image', dependency_9], ['@beyond-js/kernel/styles', dependency_10]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "beyond-swiper",
        "vspecifier": "@bgroup/ui@0.0.21/beyond-swiper",
        "is": "page",
        "route": "/components/beyond-swiper"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/ui@0.0.21/beyond-swiper');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3638196390,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-widgets/page");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _views.View;
            }
          }
          exports.Controller = Controller;
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/implementation
      **************************************/

      ims.set('./views/implementation', {
        hash: 1256036374,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.implementation = void 0;
          const implementation = `
export function SwiperImplementation(): JSX.Element {
	const items = Array.from(Array(10)).map((_, index) => (
	  <BeyondImage src="https://source.unsplash.com/random" alt=" " />
	));
	return (
	  <BeyondSwiperSlider
		loop={true}
		slidesPerView="auto"
		spaceBetween={0}
		pagination={true}
		navigation={true}
		grabCursor={true}
	  >
		{items}
	  </BeyondSwiperSlider>
	);
  }
`;
          exports.implementation = implementation;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1986529367,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _header = require("@bgroup/ui/header");
          var _toast = require("@bgroup/ui/toast");
          var _copyableImplementation = require("@bgroup/ui/copyable-implementation");
          var _result = require("./result");
          var _implementation = require("./implementation");
          /*bundle*/
          function View() {
            return React.createElement(_toast.ToastContextProvider, null, React.createElement("div", {
              className: "view"
            }, React.createElement(_header.Header, {
              componentName: "Swiper"
            }), React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Import:"), React.createElement(_copyableImplementation.CopyableImplementation, null, `import { BeyondSwiperSlider } from "@bgroup/swiper-component"`)), React.createElement("div", {
              className: 'component-implementation'
            }, React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Implementation:"), React.createElement(_copyableImplementation.CopyableImplementation, null, _implementation.implementation)), React.createElement("div", {
              className: "component-result"
            }, React.createElement("h3", null, "Result:"), React.createElement(_result.Result, null)))));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/result
      ******************************/

      ims.set('./views/result', {
        hash: 1582697715,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Result = Result;
          var _react = require("react");
          var _swiperComponent = require("@bgroup/ui/swiper-component");
          var _image = require("@bgroup/ui/image");
          function Result() {
            const items = Array.from(Array(10)).map((_, index) => {
              return _react.default.createElement(_image.BeyondImage, {
                key: index.toString(),
                src: `https://source.unsplash.com/random/?city,night`,
                alt: " "
              });
            });
            return _react.default.createElement(_swiperComponent.BeyondSwiperSlider
            //  loop={true}
            , {
              //  loop={true}
              slidesPerView: "auto",
              spaceBetween: 20,
              pagination: true,
              navigation: true,
              className: "swiper-implementation"
            }, items);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBO1VBRU87VUFBVSxNQUNYQSxVQUFXLFNBQVFDLCtCQUF5QjtZQUM5QyxJQUFJQyxNQUFNO2NBQ04sT0FBT0MsV0FBSTtZQUNmOztVQUNIQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSTSxNQUFNQyxjQUFjLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtCN0I7VUFBQUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEJEO1VBQ0E7VUFFQTtVQUNBO1VBRUE7VUFDQTtVQUNPO1VBQVUsU0FDUEQsSUFBSTtZQUNiLE9BQ0NHLG9CQUFDQywyQkFBb0IsUUFDcEJEO2NBQUtFLFNBQVMsRUFBQztZQUFNLEdBQ3BCRixvQkFBQ0csY0FBTTtjQUFDQyxhQUFhLEVBQUM7WUFBUSxFQUFHLEVBQ2pDSjtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJGLDBDQUFnQixFQUNoQkEsb0JBQUNLLDhDQUFzQixRQUFFLCtEQUErRCxDQUEwQixDQUM3RyxFQUNOTDtjQUFLRSxTQUFTLEVBQUM7WUFBMEIsR0FDeENGO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QkYsa0RBQXdCLEVBQ3hCQSxvQkFBQ0ssOENBQXNCLFFBQUVOLDhCQUFjLENBQTBCLENBQzVELEVBQ05DO2NBQUtFLFNBQVMsRUFBQztZQUFrQixHQUNoQ0YsMENBQWdCLEVBQ2hCQSxvQkFBQ00sY0FBTSxPQUFHLENBQ0wsQ0FDRCxDQUNELENBQ2dCO1VBRXpCOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9CQTtVQUNBO1VBQ0E7VUFFTSxTQUFVQSxNQUFNO1lBRXBCLE1BQU1DLEtBQUssR0FBbUJDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDRCxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQ0UsR0FBRyxDQUFDLENBQUNDLENBQUMsRUFBRUMsS0FBSyxLQUFrQjtjQUNqRixPQUNFWiw2QkFBQ2Esa0JBQVc7Z0JBQUNDLEdBQUcsRUFBRUYsS0FBSyxDQUFDRyxRQUFRLEVBQUU7Z0JBQUVDLEdBQUcsRUFBRSxnREFBZ0Q7Z0JBQUVDLEdBQUcsRUFBQztjQUFHLEVBQUc7WUFFekcsQ0FBQyxDQUFDO1lBQ0YsT0FDRWpCLDZCQUFDa0I7WUFDRDtZQUFBO2NBQUE7Y0FDRUMsYUFBYSxFQUFDLE1BQU07Y0FDcEJDLFlBQVksRUFBRSxFQUFFO2NBQ2hCQyxVQUFVLEVBQUUsSUFBSTtjQUNoQkMsVUFBVSxFQUFFLElBQUk7Y0FDaEJwQixTQUFTLEVBQUM7WUFBdUIsR0FFaENLLEtBQUssQ0FDYTtVQUd6QiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJpbXBsZW1lbnRhdGlvbiIsIlJlYWN0IiwiVG9hc3RDb250ZXh0UHJvdmlkZXIiLCJjbGFzc05hbWUiLCJIZWFkZXIiLCJjb21wb25lbnROYW1lIiwiQ29weWFibGVJbXBsZW1lbnRhdGlvbiIsIlJlc3VsdCIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwibWFwIiwiXyIsImluZGV4IiwiQmV5b25kSW1hZ2UiLCJrZXkiLCJ0b1N0cmluZyIsInNyYyIsImFsdCIsIkJleW9uZFN3aXBlclNsaWRlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJwYWdpbmF0aW9uIiwibmF2aWdhdGlvbiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsid2lkZ2V0L3RzL2NvbnRyb2xsZXIudHMiLCJ3aWRnZXQvdHMvdmlld3MvaW1wbGVtZW50YXRpb24udHMiLCJ3aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL3Jlc3VsdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXX0=