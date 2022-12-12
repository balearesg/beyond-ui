System.register(["@beyond-js/widgets@0.1.1/render", "@beyond-js/kernel@0.1.2/bundle", "@beyond-js/react-widgets@18.20.3/page", "react@18.2.0", "@beyond/ui@1.0.0/header", "@beyond/ui@1.0.0/icon", "@beyond/ui@1.0.0/toast", "@beyond/ui@1.0.0/copyable-implementation", "@beyond-js/kernel@0.1.2/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets011Render) {
      dependency_0 = _beyondJsWidgets011Render;
    }, function (_beyondJsKernel012Bundle) {
      dependency_1 = _beyondJsKernel012Bundle;
    }, function (_beyondJsReactWidgets18203Page) {
      dependency_2 = _beyondJsReactWidgets18203Page;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_beyondUi100Header) {
      dependency_4 = _beyondUi100Header;
    }, function (_beyondUi100Icon) {
      dependency_5 = _beyondUi100Icon;
    }, function (_beyondUi100Toast) {
      dependency_6 = _beyondUi100Toast;
    }, function (_beyondUi100CopyableImplementation) {
      dependency_7 = _beyondUi100CopyableImplementation;
    }, function (_beyondJsKernel012Styles) {
      dependency_8 = _beyondJsKernel012Styles;
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
          "vspecifier": "@beyond/ui@1.0.0/beyond-icon"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['react', dependency_3], ['@beyond/ui/header', dependency_4], ['@beyond/ui/icon', dependency_5], ['@beyond/ui/toast', dependency_6], ['@beyond/ui/copyable-implementation', dependency_7], ['@beyond-js/kernel/styles', dependency_8]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "beyond-icon",
        "vspecifier": "@beyond/ui@1.0.0/beyond-icon",
        "is": "page",
        "route": "/components/beyond-icons"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/ui@1.0.0/beyond-icon');
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2740270245,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _header = require("@beyond/ui/header");
          var _icon = require("@beyond/ui/icon");
          var _toast = require("@beyond/ui/toast");
          var _copyableImplementation = require("@beyond/ui/copyable-implementation");
          var _item = require("./item");
          /*bundle*/
          function View() {
            const keyIcons = Object.keys(_icon.BEYOND_ICONS);
            const output = keyIcons.map(item => {
              return React.createElement(_item.Item, {
                key: item,
                icon: item
              });
            });
            return React.createElement(_toast.ToastContextProvider, null, React.createElement("div", {
              className: "view"
            }, React.createElement(_header.Header, {
              componentName: "Icons"
            }), React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Importaci\u00F3n:"), React.createElement(_copyableImplementation.CopyableImplementation, null, `import { BeyondIcon } from '@beyond/ui/icon';`), React.createElement(_copyableImplementation.CopyableImplementation, null, `import { BeyondIconButton } from '@beyond/ui/icon';`)), React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Implementaci\u00F3n:"), React.createElement(_copyableImplementation.CopyableImplementation, null, `<BeyondIcon icon="delete" />`), React.createElement(_copyableImplementation.CopyableImplementation, null, `<BeyondIconButton icon="search" />`)), React.createElement("div", {
              className: "component-result"
            }, React.createElement("h3", null, "Resultado:"), React.createElement(_icon.BeyondIcon, {
              icon: "delete"
            }), React.createElement(_icon.BeyondIconButton, {
              icon: "search"
            })), React.createElement("section", {
              className: "list-container"
            }, React.createElement("h4", null, "Listado de iconos:"), React.createElement("div", {
              className: "container-icons"
            }, output))));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/item
      ****************************/

      ims.set('./views/item', {
        hash: 3592188122,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _icon = require("@beyond/ui/icon");
          var _toast = require("@beyond/ui/toast");
          function Item(props) {
            const {
              icon
            } = props;
            const {
              add
            } = (0, _toast.useToastContext)();
            const handleClick = () => {
              navigator.clipboard.writeText(icon);
              add({
                type: 'info',
                message: 'Nombre copiado'
              });
            };
            return _react.default.createElement("button", {
              onClick: handleClick,
              className: "content-icon"
            }, _react.default.createElement(_icon.BeyondIcon, {
              icon: icon
            }), _react.default.createElement("span", null, icon));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFFTztVQUFVLE1BQ1hBLFVBQVcsU0FBUUMsK0JBQXlCO1lBQzlDLElBQUlDLE1BQU07Y0FDTixPQUFPQyxXQUFJO1lBQ2Y7O1VBQ0hDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JEO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFQTtVQUVPO1VBQVUsU0FDUkQsSUFBSTtZQUNaLE1BQU1FLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLGtCQUFZLENBQUM7WUFFMUMsTUFBTUMsTUFBTSxHQUFHSixRQUFRLENBQUNLLEdBQUcsQ0FBRUMsSUFBSSxJQUFJO2NBQ3BDLE9BQU9DLG9CQUFDQyxVQUFJO2dCQUFDQyxHQUFHLEVBQUVILElBQUk7Z0JBQUVJLElBQUksRUFBRUo7Y0FBSSxFQUFJO1lBQ3ZDLENBQUMsQ0FBQztZQUNGLE9BQ0NDLG9CQUFDSSwyQkFBb0IsUUFDcEJKO2NBQUtLLFNBQVMsRUFBQztZQUFNLEdBQ3BCTCxvQkFBQ00sY0FBTTtjQUFDQyxhQUFhLEVBQUM7WUFBTyxFQUFHLEVBQ2hDUDtjQUFLSyxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJMLG9EQUFxQixFQUNyQkEsb0JBQUNRLDhDQUFzQixRQUFFLCtDQUErQyxDQUEwQixFQUNsR1Isb0JBQUNRLDhDQUFzQixRQUFFLHFEQUFxRCxDQUEwQixDQUNuRyxFQUNOUjtjQUFLSyxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJMLHVEQUF3QixFQUN4QkEsb0JBQUNRLDhDQUFzQixRQUFFLDhCQUE4QixDQUEwQixFQUNqRlIsb0JBQUNRLDhDQUFzQixRQUFFLG9DQUFvQyxDQUEwQixDQUNsRixFQUNOUjtjQUFLSyxTQUFTLEVBQUM7WUFBa0IsR0FDaENMLDZDQUFtQixFQUNuQkEsb0JBQUNTLGdCQUFVO2NBQUNOLElBQUksRUFBQztZQUFRLEVBQUcsRUFDNUJILG9CQUFDVSxzQkFBZ0I7Y0FBQ1AsSUFBSSxFQUFDO1lBQVEsRUFBRyxDQUM3QixFQUNOSDtjQUFTSyxTQUFTLEVBQUM7WUFBZ0IsR0FDbENMLHFEQUEyQixFQUMzQkE7Y0FBS0ssU0FBUyxFQUFDO1lBQWlCLEdBQUVSLE1BQU0sQ0FBTyxDQUN0QyxDQUNMLENBQ2dCO1VBRXpCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDQTtVQUNBO1VBQ0E7VUFFTSxTQUFVSSxJQUFJLENBQUNVLEtBQUs7WUFDekIsTUFBTTtjQUFFUjtZQUFJLENBQUUsR0FBR1EsS0FBSztZQUN0QixNQUFNO2NBQUVDO1lBQUcsQ0FBRSxHQUFHLDBCQUFlLEdBQUU7WUFDakMsTUFBTUMsV0FBVyxHQUFHLE1BQUs7Y0FDeEJDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDQyxTQUFTLENBQUNiLElBQUksQ0FBQztjQUNuQ1MsR0FBRyxDQUFDO2dCQUNISyxJQUFJLEVBQUUsTUFBTTtnQkFDWkMsT0FBTyxFQUFFO2VBQ1QsQ0FBQztZQUNILENBQUM7WUFDRCxPQUNDbEI7Y0FBUW1CLE9BQU8sRUFBRU4sV0FBVztjQUFFUixTQUFTLEVBQUM7WUFBYyxHQUNyREwsNkJBQUNTLGdCQUFVO2NBQUNOLElBQUksRUFBRUE7WUFBSSxFQUFJLEVBQzFCSCwyQ0FBT0csSUFBSSxDQUFRLENBQ1g7VUFFWCIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJrZXlJY29ucyIsIk9iamVjdCIsImtleXMiLCJCRVlPTkRfSUNPTlMiLCJvdXRwdXQiLCJtYXAiLCJpdGVtIiwiUmVhY3QiLCJJdGVtIiwia2V5IiwiaWNvbiIsIlRvYXN0Q29udGV4dFByb3ZpZGVyIiwiY2xhc3NOYW1lIiwiSGVhZGVyIiwiY29tcG9uZW50TmFtZSIsIkNvcHlhYmxlSW1wbGVtZW50YXRpb24iLCJCZXlvbmRJY29uIiwiQmV5b25kSWNvbkJ1dHRvbiIsInByb3BzIiwiYWRkIiwiaGFuZGxlQ2xpY2siLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0eXBlIiwibWVzc2FnZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInByb2plY3QvbW9kdWxlcy9pY29ucy92aWV3L3dpZGdldC90cy9jb250cm9sbGVyLnRzIiwicHJvamVjdC9tb2R1bGVzL2ljb25zL3ZpZXcvd2lkZ2V0L3RzL3ZpZXdzL2luZGV4LnRzeCIsInByb2plY3QvbW9kdWxlcy9pY29ucy92aWV3L3dpZGdldC90cy92aWV3cy9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXX0=