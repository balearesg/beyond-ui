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
        hash: 4257260380,
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
          var _search = require("./search");
          /*bundle*/
          function View() {
            const keyIcons = Object.keys(_icon.BEYOND_ICONS);
            const [items, setItems] = React.useState(keyIcons);
            const output = items.map(item => {
              return React.createElement(_item.Item, {
                key: item,
                icon: item
              });
            });
            const onSearch = value => {
              const filterIcons = keyIcons.filter(icon => icon.toLowerCase().includes(value.trim().toLowerCase()));
              setItems(filterIcons);
            };
            return React.createElement(_toast.ToastContextProvider, null, React.createElement("div", {
              className: "view"
            }, React.createElement(_header.Header, {
              componentName: "Icons"
            }), React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Import:"), React.createElement(_copyableImplementation.CopyableImplementation, null, `import { BeyondIcon } from '@beyond/ui/icon';`), React.createElement(_copyableImplementation.CopyableImplementation, null, `import { BeyondIconButton } from '@beyond/ui/icon';`)), React.createElement("div", {
              className: 'component-implementation'
            }, React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Implementation:"), React.createElement(_copyableImplementation.CopyableImplementation, null, `<BeyondIcon icon="delete" />`), React.createElement(_copyableImplementation.CopyableImplementation, null, `<BeyondIconButton icon="search" />`)), React.createElement("div", {
              className: "component-result"
            }, React.createElement("h3", null, "Result:"), React.createElement(_icon.BeyondIcon, {
              icon: "delete"
            }), React.createElement(_icon.BeyondIconButton, {
              icon: "search"
            }))), React.createElement("section", {
              className: "list-container"
            }, React.createElement("h4", null, "Icons list:"), React.createElement(_search.Search, {
              onSearch: onSearch
            }), React.createElement("div", {
              className: "container-icons"
            }, output))));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/item
      ****************************/

      ims.set('./views/item', {
        hash: 982955706,
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
                message: 'Name copied'
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

      /******************************
      INTERNAL MODULE: ./views/search
      ******************************/

      ims.set('./views/search', {
        hash: 3789765794,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Search = Search;
          var _react = require("react");
          var _icon = require("@beyond/ui/icon");
          function Search({
            onSearch
          }) {
            const [value, setValue] = _react.default.useState("");
            const handleChange = event => {
              const {
                value
              } = event.currentTarget;
              setValue(value);
              if (onSearch) onSearch(value);
            };
            return _react.default.createElement("div", null, _react.default.createElement("div", {
              className: 'container-search'
            }, _react.default.createElement(_icon.BeyondIcon, {
              icon: "search"
            }), _react.default.createElement("input", {
              type: "search",
              value: value,
              placeholder: "Find icon",
              onChange: handleChange
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBYyxHQUNyRGhCLDZCQUFDb0IsZ0JBQVU7Y0FBQ2IsSUFBSSxFQUFFQTtZQUFJLEVBQUksRUFDMUJQLDJDQUFPTyxJQUFJLENBQVEsQ0FDWDtVQUVYOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCQTtVQUNBO1VBQ00sU0FBVWUsTUFBTSxDQUFDO1lBQUVkO1VBQVEsQ0FBRTtZQUMvQixNQUFNLENBQUVDLEtBQUssRUFBRXVCLFFBQVEsQ0FBRSxHQUFHaEMsY0FBSyxDQUFDQyxRQUFRLENBQVMsRUFBRSxDQUFDO1lBQ3RELE1BQU1nQyxZQUFZLEdBQUlDLEtBQTBDLElBQVc7Y0FDdkUsTUFBTTtnQkFBRXpCO2NBQUssQ0FBRSxHQUFHeUIsS0FBSyxDQUFDQyxhQUFhO2NBQ3JDSCxRQUFRLENBQUN2QixLQUFLLENBQUM7Y0FDZixJQUFHRCxRQUFRLEVBQUVBLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDO1lBQ2hDLENBQUM7WUFDSCxPQUNFVCwwQ0FDSUE7Y0FBS2dCLFNBQVMsRUFBQztZQUFrQixHQUM3QmhCLDZCQUFDb0IsZ0JBQVU7Y0FBQ2IsSUFBSSxFQUFDO1lBQVEsRUFBRyxFQUM1QlA7Y0FBTzZCLElBQUksRUFBQyxRQUFRO2NBQUNwQixLQUFLLEVBQUVBLEtBQUs7Y0FBRTJCLFdBQVcsRUFBQyxXQUFXO2NBQUNDLFFBQVEsRUFBRUo7WUFBWSxFQUFLLENBQ3BGLENBQ0o7VUFFViIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJrZXlJY29ucyIsIk9iamVjdCIsImtleXMiLCJCRVlPTkRfSUNPTlMiLCJpdGVtcyIsInNldEl0ZW1zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm91dHB1dCIsIm1hcCIsIml0ZW0iLCJJdGVtIiwia2V5IiwiaWNvbiIsIm9uU2VhcmNoIiwidmFsdWUiLCJmaWx0ZXJJY29ucyIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ0cmltIiwiVG9hc3RDb250ZXh0UHJvdmlkZXIiLCJjbGFzc05hbWUiLCJIZWFkZXIiLCJjb21wb25lbnROYW1lIiwiQ29weWFibGVJbXBsZW1lbnRhdGlvbiIsIkJleW9uZEljb24iLCJCZXlvbmRJY29uQnV0dG9uIiwiU2VhcmNoIiwicHJvcHMiLCJhZGQiLCJoYW5kbGVDbGljayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInR5cGUiLCJtZXNzYWdlIiwib25DbGljayIsInNldFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsicHJvamVjdC9tb2R1bGVzL2ljb25zL3ZpZXcvd2lkZ2V0L3RzL2NvbnRyb2xsZXIudHMiLCJwcm9qZWN0L21vZHVsZXMvaWNvbnMvdmlldy93aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4IiwicHJvamVjdC9tb2R1bGVzL2ljb25zL3ZpZXcvd2lkZ2V0L3RzL3ZpZXdzL2l0ZW0udHN4IiwicHJvamVjdC9tb2R1bGVzL2ljb25zL3ZpZXcvd2lkZ2V0L3RzL3ZpZXdzL3NlYXJjaC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXX0=