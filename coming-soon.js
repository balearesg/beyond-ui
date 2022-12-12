System.register(["@beyond-js/widgets@0.1.1/render", "@beyond-js/kernel@0.1.2/bundle", "@beyond-js/kernel@0.1.2/styles", "@beyond-js/react-widgets@18.20.3/page", "react@18.2.0", "@beyond/ui@1.0.0/image"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Controller, Page, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Page: void 0
  });
  return {
    setters: [function (_beyondJsWidgets011Render) {
      dependency_0 = _beyondJsWidgets011Render;
    }, function (_beyondJsKernel012Bundle) {
      dependency_1 = _beyondJsKernel012Bundle;
    }, function (_beyondJsKernel012Styles) {
      dependency_2 = _beyondJsKernel012Styles;
    }, function (_beyondJsReactWidgets18203Page) {
      dependency_3 = _beyondJsReactWidgets18203Page;
    }, function (_react) {
      dependency_4 = _react;
    }, function (_beyondUi100Image) {
      dependency_5 = _beyondUi100Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-widgets", "18.20.3"], ["@beyond-js/widgets", "0.1.1"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.5.4"], ["@beyond/ui", "1.0.0"], ["@beyond/ui", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond/ui@1.0.0/coming-soon"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-widgets/page', dependency_3], ['react', dependency_4], ['@beyond/ui/image', dependency_5]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "coming-soon",
        "vspecifier": "@beyond/ui@1.0.0/coming-soon",
        "is": "page",
        "route": "/components/coming-soon"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/ui@1.0.0/coming-soon');
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
        hash: 3567711946,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = Page;
          var React = require("react");
          var _image = require("@beyond/ui/image");
          /*bundle*/
          function Page() {
            return React.createElement("div", {
              className: "page__container"
            }, React.createElement("div", {
              className: 'build-container'
            }, React.createElement(_image.BeyondImage, {
              alt: "",
              src: `${globalThis.baseDir}assets/launch.png`
            }), React.createElement("h5", null, "This page is under construction "), React.createElement(_image.BeyondImage, {
              alt: " ",
              src: `${globalThis.baseDir}assets/animation_500_lb6y61aw.gif`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFFTztVQUFVLE1BQ1hBLFVBQVcsU0FBUUMsK0JBQXlCO1lBQ2pELElBQUlDLE1BQU07Y0FDVCxPQUFPQyxXQUFJO1lBQ1o7O1VBQ0FDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JEO1VBQ0E7VUFDTztVQUFVLFNBQ1BELElBQUk7WUFDYixPQUNDRTtjQUFLQyxTQUFTLEVBQUM7WUFBaUIsR0FDL0JEO2NBQUtDLFNBQVMsRUFBQztZQUFpQixHQUM5QkQsb0JBQUNFLGtCQUFXO2NBQUNDLEdBQUcsRUFBQyxFQUFFO2NBQUNDLEdBQUcsRUFBRSxHQUFHQyxVQUFVLENBQUNDLE9BQU87WUFBbUIsRUFBSSxFQUN0RU4sbUVBQXlDLEVBQ3pDQSxvQkFBQ0Usa0JBQVc7Y0FBQ0MsR0FBRyxFQUFDLEdBQUc7Y0FBQ0MsR0FBRyxFQUFFLEdBQUdDLFVBQVUsQ0FBQ0MsT0FBTztZQUFtQyxFQUFJLENBQ2pGLENBQ0Q7VUFFUiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiUGFnZSIsImV4cG9ydHMiLCJSZWFjdCIsImNsYXNzTmFtZSIsIkJleW9uZEltYWdlIiwiYWx0Iiwic3JjIiwiZ2xvYmFsVGhpcyIsImJhc2VEaXIiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInByb2plY3QvbW9kdWxlcy9jb21pbWctc29vbi90cy9jb250cm9sbGVyLnRzIiwicHJvamVjdC9tb2R1bGVzL2NvbWltZy1zb29uL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19