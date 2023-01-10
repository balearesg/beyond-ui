System.register(["@beyond-js/widgets@0.1.2/render", "@beyond-js/kernel@0.1.7/bundle", "@beyond-js/react-widgets@18.21.1/page", "react@18.2.0", "@bgroup/ui@0.0.21/header", "@bgroup/ui@0.0.21/copyable-implementation", "@bgroup/ui@0.0.21/toast", "@bgroup/ui@0.0.21/tabs", "@beyond-js/kernel@0.1.7/styles"], function (_export, _context) {
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
    }, function (_bgroupUi0021CopyableImplementation) {
      dependency_5 = _bgroupUi0021CopyableImplementation;
    }, function (_bgroupUi0021Toast) {
      dependency_6 = _bgroupUi0021Toast;
    }, function (_bgroupUi0021Tabs) {
      dependency_7 = _bgroupUi0021Tabs;
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
          "vspecifier": "@bgroup/ui@0.0.21/beyond-tabs"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['react', dependency_3], ['@bgroup/ui/header', dependency_4], ['@bgroup/ui/copyable-implementation', dependency_5], ['@bgroup/ui/toast', dependency_6], ['@bgroup/ui/tabs', dependency_7], ['@beyond-js/kernel/styles', dependency_8]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "beyond-tabs",
        "vspecifier": "@bgroup/ui@0.0.21/beyond-tabs",
        "is": "page",
        "route": "/components/beyond-tabs"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/ui@0.0.21/beyond-tabs');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 784911761,
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
          ;
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/implementation
      **************************************/

      ims.set('./views/implementation', {
        hash: 535159696,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.implementation = void 0;
          const implementation = `
export function ImplementationTabs() {
    const [tab, setTab] = React.useState<number>(0);

	return (
        <BeyondTabs selected={tab}>
        <Tabs selected={tab}>
            <button onClick={() => setTab(0)}>TAB 0</button>
            <button onClick={() => setTab(1)}>TAB 1</button>
            <button onClick={() => setTab(2)}>TAB 2</button>
            <button onClick={() => setTab(3)}>TAB 3</button>
        </Tabs>
        <TabsContent>
            <div><p>Tab Content 0</p></div>
            <div><p>Tab Content 1</p></div>
            <div><p>Tab Content 2</p></div>
            <div><p>Tab Content 3</p></div>
        </TabsContent>
    </BeyondTabs>
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
        hash: 1250817625,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _header = require("@bgroup/ui/header");
          var _copyableImplementation = require("@bgroup/ui/copyable-implementation");
          var _implementation = require("./implementation");
          var _results = require("./results");
          var _toast = require("@bgroup/ui/toast");
          /*bundle*/
          function View() {
            return React.createElement(_toast.ToastContextProvider, null, React.createElement("div", {
              className: "view"
            }, React.createElement(_header.Header, {
              componentName: "Tabs"
            }), React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Import:"), React.createElement(_copyableImplementation.CopyableImplementation, null, `import { TabsContent, BeyondTabs, Tabs } from "@bgroup/tabs";`)), React.createElement("div", {
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
        hash: 3121816613,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Results = Results;
          var React = require("react");
          var _tabs = require("@bgroup/ui/tabs");
          function Results() {
            const [tab, setTab] = React.useState(0);
            return React.createElement(_tabs.BeyondTabs, {
              selected: tab
            }, React.createElement(_tabs.Tabs, {
              selected: tab
            }, React.createElement("button", {
              onClick: () => setTab(0)
            }, "TAB 0"), React.createElement("button", {
              onClick: () => setTab(1)
            }, "TAB 1"), React.createElement("button", {
              onClick: () => setTab(2)
            }, "TAB 2"), React.createElement("button", {
              onClick: () => setTab(3)
            }, "TAB 3")), React.createElement(_tabs.TabsContent, null, React.createElement("div", null, React.createElement("p", null, "Tab Content 0")), React.createElement("div", null, React.createElement("p", null, "Tab Content 1")), React.createElement("div", null, React.createElement("p", null, "Tab Content 2")), React.createElement("div", null, React.createElement("p", null, "Tab Content 3"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFFTztVQUFVLE1BQ1hBLFVBQVcsU0FBUUMsK0JBQXlCO1lBQzlDLElBQUlDLE1BQU07Y0FDTixPQUFPQyxXQUFJO1lBQ2Y7O1VBQ0hDO1VBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUk0sTUFBTUMsY0FBYyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FxQjdCO1VBQUNEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCRjtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDTztVQUFVLFNBQ0pELElBQUk7WUFDYixPQUNJRyxvQkFBQ0MsMkJBQW9CLFFBQ2pCRDtjQUFLRSxTQUFTLEVBQUM7WUFBTSxHQUNqQkYsb0JBQUNHLGNBQU07Y0FBQ0MsYUFBYSxFQUFDO1lBQU0sRUFBRyxFQUMvQko7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzNCRiwwQ0FBZ0IsRUFDaEJBLG9CQUFDSyw4Q0FBc0IsUUFBRSwrREFBK0QsQ0FBMEIsQ0FDaEgsRUFDbEJMO2NBQUtFLFNBQVMsRUFBQztZQUEwQixHQUN4Q0Y7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCRixtREFBeUIsRUFDekJBLG9CQUFDSyw4Q0FBc0IsUUFBRU4sOEJBQWMsQ0FBMEIsQ0FDNUQsRUFDTkM7Y0FBS0UsU0FBUyxFQUFDO1lBQWtCLEdBQ2hDRiwwQ0FBZ0IsRUFDaEJBLG9CQUFDTSxnQkFBTyxPQUFHLENBQ04sQ0FDRCxDQUNRLENBQ2E7VUFFL0I7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0JBO1VBQ0E7VUFFTSxTQUFVQSxPQUFPO1lBRXRCLE1BQU0sQ0FBQ0MsR0FBRyxFQUFFQyxNQUFNLENBQUMsR0FBR1IsS0FBSyxDQUFDUyxRQUFRLENBQVMsQ0FBQyxDQUFDO1lBRS9DLE9BQ0NULG9CQUFDVSxnQkFBVTtjQUFDQyxRQUFRLEVBQUVKO1lBQUcsR0FDeEJQLG9CQUFDWSxVQUFJO2NBQUNELFFBQVEsRUFBRUo7WUFBRyxHQUNsQlA7Y0FBUWEsT0FBTyxFQUFFLE1BQU1MLE1BQU0sQ0FBQyxDQUFDO1lBQUMsV0FBZ0IsRUFDaERSO2NBQVFhLE9BQU8sRUFBRSxNQUFNTCxNQUFNLENBQUMsQ0FBQztZQUFDLFdBQWdCLEVBQ2hEUjtjQUFRYSxPQUFPLEVBQUUsTUFBTUwsTUFBTSxDQUFDLENBQUM7WUFBQyxXQUFnQixFQUNoRFI7Y0FBUWEsT0FBTyxFQUFFLE1BQU1MLE1BQU0sQ0FBQyxDQUFDO1lBQUMsV0FBZ0IsQ0FDMUMsRUFDUFIsb0JBQUNjLGlCQUFXLFFBQ1hkLGlDQUFLQSwrQ0FBb0IsQ0FBTSxFQUMvQkEsaUNBQUtBLCtDQUFvQixDQUFNLEVBQy9CQSxpQ0FBS0EsK0NBQW9CLENBQU0sRUFDL0JBLGlDQUFLQSwrQ0FBb0IsQ0FBTSxDQUNsQixDQUNGO1VBRWYiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiaW1wbGVtZW50YXRpb24iLCJSZWFjdCIsIlRvYXN0Q29udGV4dFByb3ZpZGVyIiwiY2xhc3NOYW1lIiwiSGVhZGVyIiwiY29tcG9uZW50TmFtZSIsIkNvcHlhYmxlSW1wbGVtZW50YXRpb24iLCJSZXN1bHRzIiwidGFiIiwic2V0VGFiIiwidXNlU3RhdGUiLCJCZXlvbmRUYWJzIiwic2VsZWN0ZWQiLCJUYWJzIiwib25DbGljayIsIlRhYnNDb250ZW50Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ3aWRnZXQvdHMvY29udHJvbGxlci50cyIsIndpZGdldC90cy92aWV3cy9pbXBsZW1lbnRhdGlvbi50cyIsIndpZGdldC90cy92aWV3cy9pbmRleC50c3giLCJ3aWRnZXQvdHMvdmlld3MvcmVzdWx0cy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXX0=