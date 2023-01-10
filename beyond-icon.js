System.register(["@beyond-js/widgets@0.1.2/render", "@beyond-js/kernel@0.1.7/bundle", "@beyond-js/react-widgets@18.21.1/page", "react@18.2.0", "@bgroup/ui@0.0.21/header", "@bgroup/ui@0.0.21/icon", "@bgroup/ui@0.0.21/toast", "@bgroup/ui@0.0.21/copyable-implementation", "@bgroup/ui@0.0.21/implementation-result", "@beyond-js/kernel@0.1.7/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_bgroupUi0021Icon) {
      dependency_5 = _bgroupUi0021Icon;
    }, function (_bgroupUi0021Toast) {
      dependency_6 = _bgroupUi0021Toast;
    }, function (_bgroupUi0021CopyableImplementation) {
      dependency_7 = _bgroupUi0021CopyableImplementation;
    }, function (_bgroupUi0021ImplementationResult) {
      dependency_8 = _bgroupUi0021ImplementationResult;
    }, function (_beyondJsKernel017Styles) {
      dependency_9 = _beyondJsKernel017Styles;
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
          "vspecifier": "@bgroup/ui@0.0.21/beyond-icon"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['react', dependency_3], ['@bgroup/ui/header', dependency_4], ['@bgroup/ui/icon', dependency_5], ['@bgroup/ui/toast', dependency_6], ['@bgroup/ui/copyable-implementation', dependency_7], ['@bgroup/ui/implementation-result', dependency_8], ['@beyond-js/kernel/styles', dependency_9]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "beyond-icon",
        "vspecifier": "@bgroup/ui@0.0.21/beyond-icon",
        "is": "page",
        "route": "/components/beyond-icons"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/ui@0.0.21/beyond-icon');
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
        hash: 2215396494,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _header = require("@bgroup/ui/header");
          var _icon = require("@bgroup/ui/icon");
          var _toast = require("@bgroup/ui/toast");
          var _copyableImplementation = require("@bgroup/ui/copyable-implementation");
          var _implementationResult = require("@bgroup/ui/implementation-result");
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
            }, React.createElement("h3", null, "Import:"), React.createElement(_copyableImplementation.CopyableImplementation, null, `import { BeyondIcon } from '@bgroup/icon';`), React.createElement(_copyableImplementation.CopyableImplementation, null, `import { BeyondIconButton } from '@bgroup/icon';`)), React.createElement("div", {
              className: "component-implementation"
            }, React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Implementation:"), React.createElement(_copyableImplementation.CopyableImplementation, null, `<BeyondIcon icon="delete" />`), React.createElement(_copyableImplementation.CopyableImplementation, null, `<BeyondIconButton icon="search" />`)), React.createElement("div", {
              className: "component-result"
            }, React.createElement("h3", null, "Result:"), React.createElement("div", {
              className: "content-result"
            }, React.createElement(_icon.BeyondIcon, {
              icon: "delete"
            }), React.createElement(_icon.BeyondIconButton, {
              icon: "search"
            })), React.createElement("h3", null, "Icon size xs"), React.createElement(_implementationResult.ImplementationResult, {
              code: `<BeyondIcon className="xs" icon="delete" />`
            }, React.createElement(_icon.BeyondIcon, {
              className: "xs",
              icon: "delete"
            })), React.createElement("h3", null, "Icon size md"), React.createElement(_implementationResult.ImplementationResult, {
              code: `<BeyondIcon className="md" icon="delete" />`
            }, React.createElement(_icon.BeyondIcon, {
              className: "md",
              icon: "delete"
            })), React.createElement("h3", null, "Icon size lg"), React.createElement(_implementationResult.ImplementationResult, {
              code: `<BeyondIcon className="lg" icon="delete" />`
            }, React.createElement(_icon.BeyondIcon, {
              className: "lg",
              icon: "delete"
            })))), React.createElement("section", {
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
        hash: 4010279801,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _icon = require("@bgroup/ui/icon");
          var _toast = require("@bgroup/ui/toast");
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
        hash: 1879352088,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Search = Search;
          var _react = require("react");
          var _icon = require("@bgroup/ui/icon");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdCQUFVO2NBQUNiLElBQUksRUFBQztZQUFRLEVBQUcsRUFDNUJQO2NBQU8rQixJQUFJLEVBQUMsUUFBUTtjQUFDdEIsS0FBSyxFQUFFQSxLQUFLO2NBQUU2QixXQUFXLEVBQUMsV0FBVztjQUFDQyxRQUFRLEVBQUVKO1lBQVksRUFBSyxDQUNwRixDQUNKO1VBRVYiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwia2V5SWNvbnMiLCJPYmplY3QiLCJrZXlzIiwiQkVZT05EX0lDT05TIiwiaXRlbXMiLCJzZXRJdGVtcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJvdXRwdXQiLCJtYXAiLCJpdGVtIiwiSXRlbSIsImtleSIsImljb24iLCJvblNlYXJjaCIsInZhbHVlIiwiZmlsdGVySWNvbnMiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwidHJpbSIsIlRvYXN0Q29udGV4dFByb3ZpZGVyIiwiY2xhc3NOYW1lIiwiSGVhZGVyIiwiY29tcG9uZW50TmFtZSIsIkNvcHlhYmxlSW1wbGVtZW50YXRpb24iLCJCZXlvbmRJY29uIiwiQmV5b25kSWNvbkJ1dHRvbiIsIkltcGxlbWVudGF0aW9uUmVzdWx0IiwiY29kZSIsIlNlYXJjaCIsInByb3BzIiwiYWRkIiwiaGFuZGxlQ2xpY2siLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0eXBlIiwibWVzc2FnZSIsIm9uQ2xpY2siLCJzZXRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIndpZGdldC90cy9jb250cm9sbGVyLnRzIiwid2lkZ2V0L3RzL3ZpZXdzL2luZGV4LnRzeCIsIndpZGdldC90cy92aWV3cy9pdGVtLnRzeCIsIndpZGdldC90cy92aWV3cy9zZWFyY2gudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF19