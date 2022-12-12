System.register(["@beyond-js/kernel@0.1.2/bundle", "@beyond-js/kernel@0.1.2/styles", "react@18.2.0"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, BeyondTabs, TabsContextProvider, useTabsContext, BeyondTab, TabsContent, Tabs, __beyond_pkg, hmr;
  _export({
    BeyondTabs: void 0,
    TabsContextProvider: void 0,
    useTabsContext: void 0,
    BeyondTab: void 0,
    TabsContent: void 0,
    Tabs: void 0
  });
  return {
    setters: [function (_beyondJsKernel012Bundle) {
      dependency_0 = _beyondJsKernel012Bundle;
    }, function (_beyondJsKernel012Styles) {
      dependency_1 = _beyondJsKernel012Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-widgets", "18.20.3"], ["@beyond-js/widgets", "0.1.1"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.5.4"], ["@beyond/ui", "1.0.0"], ["@beyond/ui", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond/ui@1.0.0/tabs"
        },
        "type": "code",
        "name": "tabs"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/ui@1.0.0/tabs');
      ims = new Map();
      /*****************************
      INTERNAL MODULE: ./beyond-tabs
      *****************************/
      ims.set('./beyond-tabs', {
        hash: 586229376,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondTabs = BeyondTabs;
          var _react = require("react");
          var _context = require("./context");
          console.log("🚀 ~ file: tabs.tsx:2 ~ React", _react.default);
          /*bundle*/
          function BeyondTabs(props) {
            return _react.default.createElement(_context.TabsContextProvider, {
              ...props
            }, props.children);
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 574764772,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TabsContextProvider = TabsContextProvider;
          exports.useTabsContext = void 0;
          var _react = require("react");
          const TabsContext = (0, _react.createContext)({});
          /*bundle*/
          function TabsContextProvider(props) {
            const {
              children,
              orientation,
              className,
              selected
            } = props;
            const [active, setSelected] = (0, _react.useState)(selected);
            (0, _react.useEffect)(() => {
              setSelected(selected);
            }, [selected]);
            const tabNavigate = index => setSelected(index);
            const data = {
              'children': children,
              'orientation': orientation,
              'tabNavigate': tabNavigate,
              'selected': active,
              'index': selected !== active ? selected : active
            };
            const orientationTab = orientation ? orientation : 'horizontal';
            let cls = 'beyond-tabs beyond-tabs-container ';
            cls += `${orientationTab === 'horizontal' ? 'beyond-tabs-horizontal' : 'beyond-tabs-vertical'}`;
            if (className) cls += ` ${className}`;
            return _react.default.createElement(TabsContext.Provider, {
              value: data
            }, _react.default.createElement("div", {
              className: cls
            }, children));
          }
          /*bundle*/
          const useTabsContext = () => (0, _react.useContext)(TabsContext);
          exports.useTabsContext = useTabsContext;
        }
      });

      /*********************
      INTERNAL MODULE: ./tab
      *********************/

      ims.set('./tab', {
        hash: 996420873,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondTab = void 0;
          var _react = require("react");
          /*bundle*/
          const BeyondTab = props => {
            const {
              index,
              isActive,
              selected,
              className,
              children
            } = props;
            let cls = isActive && parseInt(index) === parseInt(selected) ? "beyond-tab tab-active" : "beyond-tab";
            if (className) cls += ` ${className}`;
            const attrs = {
              ...props
            };
            delete attrs.children;
            delete attrs.onTab;
            delete attrs.isActive;
            delete attrs.nolink;
            delete attrs.className;
            return _react.default.createElement("div", {
              className: cls,
              ...attrs
            }, children);
          };
          exports.BeyondTab = BeyondTab;
        }
      });

      /******************************
      INTERNAL MODULE: ./tabs-content
      ******************************/

      ims.set('./tabs-content', {
        hash: 2599724274,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TabsContent = TabsContent;
          var _react = require("react");
          var _context = require("./context");
          /*bundle*/
          function TabsContent(props) {
            const context = (0, _context.useTabsContext)();
            const {
              children
            } = props;
            const content = children.find((content, index) => index === context.index);
            return _react.default.createElement("div", {
              className: "beyond-tabs-content"
            }, content);
          }
          ;
        }
      });

      /**********************
      INTERNAL MODULE: ./tabs
      **********************/

      ims.set('./tabs', {
        hash: 3707176455,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tabs = Tabs;
          var _react = require("react");
          var _context = require("./context");
          var _tab = require("./tab");
          /*bundle*/
          function Tabs(props) {
            const [state, setState] = (0, _react.useState)({
              active: true,
              valueSelected: 0
            });
            const {
              tabNavigate: tabNavigateGo,
              selected
            } = (0, _context.useTabsContext)();
            const tabNavigate = (event, callback) => {
              const target = event.currentTarget;
              const index = target.dataset.index;
              setState({
                'valueSelected': index,
                'active': index !== state.valueSelected ? true : !state.active
              });
              if (callback) callback(event);
              tabNavigateGo(parseInt(index));
            };
            const {
              children,
              nolink
            } = props;
            const {
              active,
              valueSelected
            } = state;
            const output = children.map((tab, index) => {
              const properties = {
                'key': index,
                'selected': selected,
                'isActive': active,
                'index': index,
                'data-index': index
              };
              if (!nolink) properties.onClick = tabNavigate;else properties.nolink = true;
              if (tab.props.onClick) properties.onClick = event => tabNavigate(event, tab.props.onClick);
              if (tab.type === _tab.BeyondTab) return _react.default.cloneElement(tab, properties);
              return _react.default.createElement(_tab.BeyondTab, {
                ...properties,
                key: index
              }, tab);
            });
            return _react.default.createElement("div", {
              className: 'beyond-tabs-items'
            }, _react.default.createElement("div", {
              className: "tabs-container"
            }, output));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./beyond-tabs",
        "from": "BeyondTabs",
        "name": "BeyondTabs"
      }, {
        "im": "./context",
        "from": "TabsContextProvider",
        "name": "TabsContextProvider"
      }, {
        "im": "./context",
        "from": "useTabsContext",
        "name": "useTabsContext"
      }, {
        "im": "./tab",
        "from": "BeyondTab",
        "name": "BeyondTab"
      }, {
        "im": "./tabs-content",
        "from": "TabsContent",
        "name": "TabsContent"
      }, {
        "im": "./tabs",
        "from": "Tabs",
        "name": "Tabs"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BeyondTabs') && _export("BeyondTabs", BeyondTabs = require ? require('./beyond-tabs').BeyondTabs : value);
        (require || prop === 'TabsContextProvider') && _export("TabsContextProvider", TabsContextProvider = require ? require('./context').TabsContextProvider : value);
        (require || prop === 'useTabsContext') && _export("useTabsContext", useTabsContext = require ? require('./context').useTabsContext : value);
        (require || prop === 'BeyondTab') && _export("BeyondTab", BeyondTab = require ? require('./tab').BeyondTab : value);
        (require || prop === 'TabsContent') && _export("TabsContent", TabsContent = require ? require('./tabs-content').TabsContent : value);
        (require || prop === 'Tabs') && _export("Tabs", Tabs = require ? require('./tabs').Tabs : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2NBQUVPLE1BQU07Y0FBRXdCO1lBQWEsQ0FBRSxHQUFHRixLQUFLO1lBRXZDLE1BQU1TLE1BQU0sR0FBR3BDLFFBQVEsQ0FBQ3FDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEVBQUU5QixLQUFLLEtBQUk7Y0FFdkMsTUFBTStCLFVBQVUsR0FBZTtnQkFDM0IsS0FBSyxFQUFFL0IsS0FBSztnQkFDWixVQUFVLEVBQUVKLFFBQVE7Z0JBQ3BCLFVBQVUsRUFBRUMsTUFBTTtnQkFDbEIsT0FBTyxFQUFFRyxLQUFLO2dCQUNkLFlBQVksRUFBRUE7ZUFDakI7Y0FFRCxJQUFJLENBQUNhLE1BQU0sRUFBRWtCLFVBQVUsQ0FBQ0MsT0FBTyxHQUFHakMsV0FBVyxDQUFDLEtBQ3pDZ0MsVUFBVSxDQUFDbEIsTUFBTSxHQUFHLElBQUk7Y0FFN0IsSUFBSWlCLEdBQUcsQ0FBQ3hDLEtBQUssQ0FBQzBDLE9BQU8sRUFBRUQsVUFBVSxDQUFDQyxPQUFPLEdBQUdULEtBQUssSUFBSXhCLFdBQVcsQ0FBQ3dCLEtBQUssRUFBRU8sR0FBRyxDQUFDeEMsS0FBSyxDQUFDMEMsT0FBTyxDQUFDO2NBRTFGLElBQUlGLEdBQUcsQ0FBQ0csSUFBSSxLQUFLekIsY0FBUyxFQUFFLE9BQU9wQixjQUFLLENBQUM4QyxZQUFZLENBQUNKLEdBQUcsRUFBRUMsVUFBVSxDQUFDO2NBRXRFLE9BQ0kzQyw2QkFBQ29CLGNBQVM7Z0JBQUEsR0FBS3VCLFVBQVU7Z0JBQUVJLEdBQUcsRUFBRW5DO2NBQUssR0FDaEM4QixHQUFHLENBQ0k7WUFFcEIsQ0FBQyxDQUFDO1lBRUYsT0FDSTFDO2NBQUtPLFNBQVMsRUFBQztZQUFtQixHQUM5QlA7Y0FBS08sU0FBUyxFQUFDO1lBQWdCLEdBQzFCaUMsTUFBTSxDQUNMLENBRUo7VUFFZCIsIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsIkJleW9uZFRhYnMiLCJwcm9wcyIsIlRhYnNDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsIlRhYnNDb250ZXh0Iiwib3JpZW50YXRpb24iLCJjbGFzc05hbWUiLCJzZWxlY3RlZCIsImFjdGl2ZSIsInNldFNlbGVjdGVkIiwidGFiTmF2aWdhdGUiLCJpbmRleCIsImRhdGEiLCJvcmllbnRhdGlvblRhYiIsImNscyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VUYWJzQ29udGV4dCIsImV4cG9ydHMiLCJCZXlvbmRUYWIiLCJpc0FjdGl2ZSIsInBhcnNlSW50IiwiYXR0cnMiLCJvblRhYiIsIm5vbGluayIsIlRhYnNDb250ZW50IiwiY29udGV4dCIsImNvbnRlbnQiLCJmaW5kIiwiVGFicyIsInN0YXRlIiwic2V0U3RhdGUiLCJ2YWx1ZVNlbGVjdGVkIiwidGFiTmF2aWdhdGVHbyIsImV2ZW50IiwiY2FsbGJhY2siLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm91dHB1dCIsIm1hcCIsInRhYiIsInByb3BlcnRpZXMiLCJvbkNsaWNrIiwidHlwZSIsImNsb25lRWxlbWVudCIsImtleSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsicHJvamVjdC9tb2R1bGVzL3RhYnMvY29tcG9uZW50L2NvZGUvdHMvYmV5b25kLXRhYnMudHN4IiwicHJvamVjdC9tb2R1bGVzL3RhYnMvY29tcG9uZW50L2NvZGUvdHMvY29udGV4dC50c3giLCJwcm9qZWN0L21vZHVsZXMvdGFicy9jb21wb25lbnQvY29kZS90cy90YWIudHN4IiwicHJvamVjdC9tb2R1bGVzL3RhYnMvY29tcG9uZW50L2NvZGUvdHMvdGFicy1jb250ZW50LnRzeCIsInByb2plY3QvbW9kdWxlcy90YWJzL2NvbXBvbmVudC9jb2RlL3RzL3RhYnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=