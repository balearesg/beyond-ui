System.register(["@beyond-js/widgets@0.1.2/render", "@beyond-js/kernel@0.1.7/bundle", "@beyond-js/kernel@0.1.7/styles", "@beyond-js/react-widgets@18.21.1/page", "react@18.2.0", "@bgroup/ui@0.0.21/header"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Controller, Page, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Page: void 0
  });
  return {
    setters: [function (_beyondJsWidgets012Render) {
      dependency_0 = _beyondJsWidgets012Render;
    }, function (_beyondJsKernel017Bundle) {
      dependency_1 = _beyondJsKernel017Bundle;
    }, function (_beyondJsKernel017Styles) {
      dependency_2 = _beyondJsKernel017Styles;
    }, function (_beyondJsReactWidgets18211Page) {
      dependency_3 = _beyondJsReactWidgets18211Page;
    }, function (_react) {
      dependency_4 = _react;
    }, function (_bgroupUi0021Header) {
      dependency_5 = _bgroupUi0021Header;
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
          "vspecifier": "@bgroup/ui@0.0.21/home"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-widgets/page', dependency_3], ['react', dependency_4], ['@bgroup/ui/header', dependency_5]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "home-page",
        "vspecifier": "@bgroup/ui@0.0.21/home",
        "is": "page",
        "route": "/"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/ui@0.0.21/home');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3327242745,
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
              return _views.Page;
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4091356562,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = Page;
          var React = require("react");
          var _header = require("@bgroup/ui/header");
          /*bundle*/
          function Page() {
            return React.createElement("div", {
              className: "view"
            }, React.createElement(_header.Header, {
              componentName: "Getting started"
            }), React.createElement("div", {
              className: "information"
            }, React.createElement("div", {
              className: "title"
            }, React.createElement("h3", null, "BEYOND ", React.createElement("span", {
              className: "ui"
            }, "UI"), " | Useful and reusable components")), React.createElement("p", null, "Beyond UI is a collection of reusable components here you can see what they are and how to import and implement them. "), React.createElement("p", null, "It provides a set of useful and highly customizable components to be used in your projects! ")));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "Page",
        "name": "Page"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Page') && _export("Page", Page = require ? require('./views/index').Page : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFFTztVQUFVLE1BQ1hBLFVBQVcsU0FBUUMsK0JBQXlCO1lBQ2pELElBQUlDLE1BQU07Y0FDVCxPQUFPQyxXQUFJO1lBQ1o7O1VBQ0FDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JEO1VBQ0E7VUFFTztVQUFVLFNBQ1JELElBQUk7WUFDWixPQUNDRTtjQUFLQyxTQUFTLEVBQUM7WUFBTSxHQUNwQkQsb0JBQUNFLGNBQU07Y0FBQ0MsYUFBYSxFQUFDO1lBQWlCLEVBQUcsRUFDMUNIO2NBQUtDLFNBQVMsRUFBQztZQUFhLEdBQzNCRDtjQUFLQyxTQUFTLEVBQUM7WUFBTyxHQUNyQkQsMkNBQ1FBO2NBQU1DLFNBQVMsRUFBQztZQUFJLFFBQVUsc0NBQ2pDLENBQ0EsRUFDTkQsd0pBQTZILEVBQzdIQSw4SEFBbUcsQ0FDOUYsQ0FDRDtVQUVSIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJQYWdlIiwiZXhwb3J0cyIsIlJlYWN0IiwiY2xhc3NOYW1lIiwiSGVhZGVyIiwiY29tcG9uZW50TmFtZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19