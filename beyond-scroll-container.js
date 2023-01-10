System.register(["@beyond-js/widgets@0.1.2/render", "@beyond-js/kernel@0.1.7/bundle", "@beyond-js/react-widgets@18.21.1/page", "react@18.2.0", "@bgroup/ui@0.0.21/header", "@bgroup/ui@0.0.21/toast", "@bgroup/ui@0.0.21/copyable-implementation", "@bgroup/ui@0.0.21/perfect-scrollbar", "@beyond-js/kernel@0.1.7/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_react) {
      dependency_3 = _react;
    }, function (_bgroupUi0021Header) {
      dependency_4 = _bgroupUi0021Header;
    }, function (_bgroupUi0021Toast) {
      dependency_5 = _bgroupUi0021Toast;
    }, function (_bgroupUi0021CopyableImplementation) {
      dependency_6 = _bgroupUi0021CopyableImplementation;
    }, function (_bgroupUi0021PerfectScrollbar) {
      dependency_7 = _bgroupUi0021PerfectScrollbar;
    }, function (_beyondJsKernel017Styles) {
      dependency_8 = _beyondJsKernel017Styles;
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
          "vspecifier": "@bgroup/ui@0.0.21/beyond-scroll-container"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['react', dependency_3], ['@bgroup/ui/header', dependency_4], ['@bgroup/ui/toast', dependency_5], ['@bgroup/ui/copyable-implementation', dependency_6], ['@bgroup/ui/perfect-scrollbar', dependency_7], ['@beyond-js/kernel/styles', dependency_8]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "beyond-scroll-container",
        "vspecifier": "@bgroup/ui@0.0.21/beyond-scroll-container",
        "is": "page",
        "route": "/components/beyond-scroll-container"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/ui@0.0.21/beyond-scroll-container');
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
        hash: 2062646560,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.implementation = void 0;
          const implementation = `
export function ImplementationPerfectScroll() {
  const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quis veniam.';
	const output = [];
	for (var i = 0; i < 300; i++) {
		output.push(text)
	  }
	return (
		<BeyondScrollContainer
			className="aside"
			data-perfect-scrollbar=""
			data-suppress-scroll-x="true"
		>
			<div>
				{output.join('')}
			</div>
			<div className="ps__rail-x">
				<div className="ps__thumb-x" tabIndex={0} />
			</div>
			<div className="ps__rail-y">
				<div className=" ps__thumb-y" tabIndex={0} />
			</div>
		</BeyondScrollContainer>
  }
`;
          exports.implementation = implementation;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1623462331,
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
          var _results = require("./results");
          var _implementation = require("./implementation");
          /*bundle*/
          function View() {
            return React.createElement(_toast.ToastContextProvider, null, React.createElement("div", {
              className: "view beyond-image-view"
            }, React.createElement(_header.Header, {
              componentName: "Perfect Scroll"
            }), React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Import: "), React.createElement(_copyableImplementation.CopyableImplementation, null, `import { BeyondScrollContainer } from "@bgroup/perfect-scrollbar";`)), React.createElement("div", {
              className: 'component-implementation'
            }, React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Implementation: "), React.createElement(_copyableImplementation.CopyableImplementation, null, _implementation.implementation)), React.createElement("div", {
              className: "component-result"
            }, React.createElement("h3", null, "Result:"), React.createElement(_results.Results, null)))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/results
      *******************************/

      ims.set('./views/results', {
        hash: 462025889,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Results = Results;
          var React = require("react");
          var _perfectScrollbar = require("@bgroup/ui/perfect-scrollbar");
          function Results() {
            const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quis veniam.';
            const output = [];
            for (var i = 0; i < 300; i++) {
              output.push(text);
            }
            return React.createElement(_perfectScrollbar.BeyondScrollContainer, {
              className: "aside",
              "data-perfect-scrollbar": "",
              "data-suppress-scroll-x": "true"
            }, React.createElement("div", null, output.join('')), React.createElement("div", {
              className: "ps__rail-x"
            }, React.createElement("div", {
              className: "ps__thumb-x",
              tabIndex: 0
            })), React.createElement("div", {
              className: "ps__rail-y"
            }, React.createElement("div", {
              className: " ps__thumb-y",
              tabIndex: 0
            })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFFTztVQUFVLE1BQ1hBLFVBQVcsU0FBUUMsK0JBQXlCO1lBQzlDLElBQUlDLE1BQU07Y0FDTixPQUFPQyxXQUFJO1lBQ2Y7O1VBQ0hDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JNLE1BQU1DLGNBQWMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBd0I3QjtVQUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkY7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBRU87VUFBVSxTQUNQRCxJQUFJO1lBQ2IsT0FDQ0csb0JBQUNDLDJCQUFvQixRQUNwQkQ7Y0FBS0UsU0FBUyxFQUFDO1lBQXdCLEdBQ3RDRixvQkFBQ0csY0FBTTtjQUFDQyxhQUFhLEVBQUM7WUFBZ0IsRUFBRyxFQUN6Q0o7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCRiwyQ0FBaUIsRUFDakJBLG9CQUFDSyw4Q0FBc0IsUUFBRSxvRUFBb0UsQ0FBMEIsQ0FDbEgsRUFDTkw7Y0FBS0UsU0FBUyxFQUFDO1lBQTBCLEdBQ3hDRjtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJGLG1EQUF5QixFQUN6QkEsb0JBQUNLLDhDQUFzQixRQUFFTiw4QkFBYyxDQUEwQixDQUM1RCxFQUVOQztjQUFLRSxTQUFTLEVBQUM7WUFBa0IsR0FDaENGLDBDQUFnQixFQUNoQkEsb0JBQUNNLGdCQUFPLE9BQUcsQ0FDTixDQUNELENBRUQsQ0FDZ0I7VUFFekI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaENBO1VBQ0E7VUFFTSxTQUFVQSxPQUFPO1lBQ3RCLE1BQU1DLElBQUksR0FBRyxtRkFBbUY7WUFDaEcsTUFBTUMsTUFBTSxHQUFHLEVBQUU7WUFDakIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsR0FBRyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtjQUM3QkQsTUFBTSxDQUFDRSxJQUFJLENBQUNILElBQUksQ0FBQzs7WUFFbEIsT0FDQ1Asb0JBQUNXLHVDQUFxQjtjQUNyQlQsU0FBUyxFQUFDLE9BQU87Y0FBQSwwQkFDTSxFQUFFO2NBQUEsMEJBQ0Y7WUFBTSxHQUU3QkYsaUNBQ0VRLE1BQU0sQ0FBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUNYLEVBQ05aO2NBQUtFLFNBQVMsRUFBQztZQUFZLEdBQzFCRjtjQUFLRSxTQUFTLEVBQUMsYUFBYTtjQUFDVyxRQUFRLEVBQUU7WUFBQyxFQUFJLENBQ3ZDLEVBQ05iO2NBQUtFLFNBQVMsRUFBQztZQUFZLEdBQzFCRjtjQUFLRSxTQUFTLEVBQUMsY0FBYztjQUFDVyxRQUFRLEVBQUU7WUFBQyxFQUFJLENBQ3hDLENBQ2lCO1VBRTFCIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsImltcGxlbWVudGF0aW9uIiwiUmVhY3QiLCJUb2FzdENvbnRleHRQcm92aWRlciIsImNsYXNzTmFtZSIsIkhlYWRlciIsImNvbXBvbmVudE5hbWUiLCJDb3B5YWJsZUltcGxlbWVudGF0aW9uIiwiUmVzdWx0cyIsInRleHQiLCJvdXRwdXQiLCJpIiwicHVzaCIsIkJleW9uZFNjcm9sbENvbnRhaW5lciIsImpvaW4iLCJ0YWJJbmRleCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsid2lkZ2V0L3RzL2NvbnRyb2xsZXIudHMiLCJ3aWRnZXQvdHMvdmlld3MvaW1wbGVtZW50YXRpb24udHMiLCJ3aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL3Jlc3VsdHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF19