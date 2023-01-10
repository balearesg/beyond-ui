System.register(["@beyond-js/kernel@0.1.7/bundle", "@beyond-js/kernel@0.1.7/styles", "react@18.2.0"], function (_export, _context2) {
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
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_beyondJsKernel017Styles) {
      dependency_1 = _beyondJsKernel017Styles;
    }, function (_react) {
      dependency_2 = _react;
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
          "vspecifier": "@bgroup/ui@0.0.21/tabs"
        },
        "type": "code",
        "name": "tabs"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/ui@0.0.21/tabs');
      ims = new Map();
      /*****************************
      INTERNAL MODULE: ./beyond-tabs
      *****************************/
      ims.set('./beyond-tabs', {
        hash: 3249066163,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondTabs = BeyondTabs;
          var React = require("react");
          var _context = require("./context");
          /*bundle*/
          function BeyondTabs(props) {
            return React.createElement(_context.TabsContextProvider, {
              ...props
            }, props.children);
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 1648631947,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TabsContextProvider = TabsContextProvider;
          exports.useTabsContext = void 0;
          var React = require("react");
          const TabsContext = (0, React.createContext)({});
          /*bundle*/
          function TabsContextProvider(props) {
            const {
              children,
              orientation,
              className,
              selected
            } = props;
            const [active, setSelected] = (0, React.useState)(selected);
            (0, React.useEffect)(() => {
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
            return React.createElement(TabsContext.Provider, {
              value: data
            }, React.createElement("div", {
              className: cls
            }, children));
          }
          /*bundle*/
          const useTabsContext = () => (0, React.useContext)(TabsContext);
          exports.useTabsContext = useTabsContext;
        }
      });

      /*********************
      INTERNAL MODULE: ./tab
      *********************/

      ims.set('./tab', {
        hash: 1887496494,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondTab = void 0;
          var React = require("react");
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
            return React.createElement("div", {
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
        hash: 3319265128,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TabsContent = TabsContent;
          var React = require("react");
          var _context = require("./context");
          /*bundle*/
          function TabsContent(props) {
            const context = (0, _context.useTabsContext)();
            const {
              children
            } = props;
            const content = children.find((content, index) => index === context.index);
            return React.createElement("div", {
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
        hash: 3310507085,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tabs = Tabs;
          var React = require("react");
          var _context = require("./context");
          var _tab = require("./tab");
          /*bundle*/
          function Tabs(props) {
            const [state, setState] = (0, React.useState)({
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
              if (tab.type === _tab.BeyondTab) return React.cloneElement(tab, properties);
              return React.createElement(_tab.BeyondTab, {
                ...properties,
                key: index
              }, tab);
            });
            return React.createElement("div", {
              className: 'beyond-tabs-items'
            }, React.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sR0FBR3BDLFFBQVEsQ0FBQ3FDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEVBQUU5QixLQUFLLEtBQUk7Y0FFdkMsTUFBTStCLFVBQVUsR0FBZTtnQkFDM0IsS0FBSyxFQUFFL0IsS0FBSztnQkFDWixVQUFVLEVBQUVKLFFBQVE7Z0JBQ3BCLFVBQVUsRUFBRUMsTUFBTTtnQkFDbEIsT0FBTyxFQUFFRyxLQUFLO2dCQUNkLFlBQVksRUFBRUE7ZUFDakI7Y0FFRCxJQUFJLENBQUNhLE1BQU0sRUFBRWtCLFVBQVUsQ0FBQ0MsT0FBTyxHQUFHakMsV0FBVyxDQUFDLEtBQ3pDZ0MsVUFBVSxDQUFDbEIsTUFBTSxHQUFHLElBQUk7Y0FFN0IsSUFBSWlCLEdBQUcsQ0FBQ3pDLEtBQUssQ0FBQzJDLE9BQU8sRUFBRUQsVUFBVSxDQUFDQyxPQUFPLEdBQUdULEtBQUssSUFBSXhCLFdBQVcsQ0FBQ3dCLEtBQUssRUFBRU8sR0FBRyxDQUFDekMsS0FBSyxDQUFDMkMsT0FBTyxDQUFDO2NBRTFGLElBQUlGLEdBQUcsQ0FBQ0csSUFBSSxLQUFLekIsY0FBUyxFQUFFLE9BQU9sQixLQUFLLENBQUM0QyxZQUFZLENBQUNKLEdBQUcsRUFBRUMsVUFBVSxDQUFDO2NBRXRFLE9BQ0l6QyxvQkFBQ2tCLGNBQVM7Z0JBQUEsR0FBS3VCLFVBQVU7Z0JBQUVJLEdBQUcsRUFBRW5DO2NBQUssR0FDaEM4QixHQUFHLENBQ0k7WUFFcEIsQ0FBQyxDQUFDO1lBRUYsT0FDSXhDO2NBQUtLLFNBQVMsRUFBQztZQUFtQixHQUM5Qkw7Y0FBS0ssU0FBUyxFQUFDO1lBQWdCLEdBQzFCaUMsTUFBTSxDQUNMLENBRUo7VUFFZCIsIm5hbWVzIjpbIkJleW9uZFRhYnMiLCJwcm9wcyIsIlJlYWN0IiwiVGFic0NvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwiVGFic0NvbnRleHQiLCJvcmllbnRhdGlvbiIsImNsYXNzTmFtZSIsInNlbGVjdGVkIiwiYWN0aXZlIiwic2V0U2VsZWN0ZWQiLCJ0YWJOYXZpZ2F0ZSIsImluZGV4IiwiZGF0YSIsIm9yaWVudGF0aW9uVGFiIiwiY2xzIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVRhYnNDb250ZXh0IiwiZXhwb3J0cyIsIkJleW9uZFRhYiIsImlzQWN0aXZlIiwicGFyc2VJbnQiLCJhdHRycyIsIm9uVGFiIiwibm9saW5rIiwiVGFic0NvbnRlbnQiLCJjb250ZXh0IiwiY29udGVudCIsImZpbmQiLCJUYWJzIiwic3RhdGUiLCJzZXRTdGF0ZSIsInZhbHVlU2VsZWN0ZWQiLCJ0YWJOYXZpZ2F0ZUdvIiwiZXZlbnQiLCJjYWxsYmFjayIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwib3V0cHV0IiwibWFwIiwidGFiIiwicHJvcGVydGllcyIsIm9uQ2xpY2siLCJ0eXBlIiwiY2xvbmVFbGVtZW50Iiwia2V5Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2JleW9uZC10YWJzLnRzeCIsImNvZGUvdHMvY29udGV4dC50c3giLCJjb2RlL3RzL3RhYi50c3giLCJjb2RlL3RzL3RhYnMtY29udGVudC50c3giLCJjb2RlL3RzL3RhYnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=