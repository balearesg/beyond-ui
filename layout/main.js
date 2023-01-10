System.register(["@beyond-js/widgets@0.1.2/render", "@beyond-js/kernel@0.1.7/bundle", "@beyond-js/kernel@0.1.7/styles", "react@18.2.0", "@bgroup/ui@0.0.21/icon", "@beyond-js/kernel@0.1.7/routing", "@bgroup/ui@0.0.21/perfect-scrollbar", "@beyond-js/react-widgets@18.21.1/base"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets012Render) {
      dependency_0 = _beyondJsWidgets012Render;
    }, function (_beyondJsKernel017Bundle) {
      dependency_1 = _beyondJsKernel017Bundle;
    }, function (_beyondJsKernel017Styles) {
      dependency_2 = _beyondJsKernel017Styles;
    }, function (_react) {
      dependency_3 = _react;
    }, function (_bgroupUi0021Icon) {
      dependency_4 = _bgroupUi0021Icon;
    }, function (_beyondJsKernel017Routing) {
      dependency_5 = _beyondJsKernel017Routing;
    }, function (_bgroupUi0021PerfectScrollbar) {
      dependency_6 = _bgroupUi0021PerfectScrollbar;
    }, function (_beyondJsReactWidgets18211Base) {
      dependency_7 = _beyondJsReactWidgets18211Base;
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
          "vspecifier": "@bgroup/ui@0.0.21/layout/main"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@bgroup/ui/icon', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['@bgroup/ui/perfect-scrollbar', dependency_6], ['@beyond-js/react-widgets/base', dependency_7]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "main-layout",
        "vspecifier": "@bgroup/ui@0.0.21/layout/main",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/ui@0.0.21/layout/main');
      ims = new Map();
      /*******************************
      INTERNAL MODULE: ./bg-components
      *******************************/
      ims.set('./bg-components', {
        hash: 693251023,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.components = void 0;
          const components = [{
            name: 'Beyond Empty',
            path: 'beyond-empty',
            subComponents: []
          }, {
            name: 'Beyond Form',
            path: 'beyond-form',
            subComponents: [{
              name: 'Checkbox',
              path: 'beyond-checkbox'
            }, {
              name: 'Input',
              path: 'beyond-input'
            }, {
              name: 'Switch',
              path: 'beyond-switch'
            }, {
              name: 'Textarea',
              path: 'beyond-textarea'
            }, {
              name: 'Button',
              path: 'beyond-button'
            }]
          }, {
            name: 'Beyond Modals',
            path: 'beyond-modals',
            subComponents: [{
              name: 'Alert',
              path: 'beyond-alert-modal'
            }, {
              name: 'Confirm',
              path: 'beyond-confirm-modal'
            }, {
              name: 'Regular',
              path: 'beyond-regular-modal'
            }]
          }, {
            name: 'Beyond Icon',
            path: 'beyond-icons',
            subComponents: []
          }, {
            name: 'Beyond Spinner',
            path: 'beyond-spinner',
            subComponents: []
          }, {
            name: 'Beyond Input Controller',
            path: 'beyond-input-controller',
            subComponents: []
          }, {
            name: 'Beyond Image',
            path: 'beyond-image',
            subComponents: []
          }, {
            name: 'Beyond Scroll',
            path: 'beyond-scroll-container',
            subComponents: []
          }, {
            name: 'Beyond Tabs',
            path: 'beyond-tabs',
            subComponents: []
          }, {
            name: 'Beyond Toast',
            path: 'beyond-toast',
            subComponents: []
          }, {
            name: 'Beyond Swiper',
            path: 'beyond-swiper',
            subComponents: []
          }, {
            name: 'Beyond Verification Code',
            path: 'beyond-code-verification',
            subComponents: []
          }, {
            name: 'Beyond Alert',
            path: 'beyond-alert',
            subComponents: []
          }];
          exports.components = components;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./components/sidebar-dropdown
      *********************************************/

      ims.set('./components/sidebar-dropdown', {
        hash: 4129009307,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SidebarDropdown = SidebarDropdown;
          var React = require("react");
          var _sidebarItem = require("./sidebar-item");
          var _icon = require("@bgroup/ui/icon");
          function SidebarDropdown({
            component
          }) {
            const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
            const subComponentsElements = component.subComponents.map(subComponent => React.createElement(_sidebarItem.SidebarItem, {
              key: subComponent.path,
              component: subComponent
            }));
            const iconDirection = isDropdownOpen ? 'down' : 'right';
            function toggleDropdown(event) {
              event.preventDefault();
              setIsDropdownOpen(!isDropdownOpen);
            }
            return React.createElement("li", {
              className: "sidebar-item"
            }, React.createElement("a", {
              onClick: toggleDropdown
            }, React.createElement(_icon.BeyondIcon, {
              icon: "arrowDropDown",
              className: iconDirection
            }), component.name), isDropdownOpen && React.createElement("ul", {
              className: "sub-list"
            }, subComponentsElements));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./components/sidebar-item
      *****************************************/

      ims.set('./components/sidebar-item', {
        hash: 1856212488,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SidebarItem = SidebarItem;
          var React = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          function SidebarItem({
            component
          }) {
            const location = `/components/${component.path}`;
            function redirect(event) {
              event.preventDefault();
              _routing.routing.pushState(location);
            }
            return React.createElement("li", {
              className: "sidebar-item"
            }, React.createElement("a", {
              onClick: redirect
            }, component.name));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./components/sidebar
      ************************************/

      ims.set('./components/sidebar', {
        hash: 1979810423,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Sidebar = Sidebar;
          var React = require("react");
          var _bgComponents = require("../bg-components");
          var _sidebarDropdown = require("./sidebar-dropdown");
          var _sidebarItem = require("./sidebar-item");
          var _routing = require("@beyond-js/kernel/routing");
          var _perfectScrollbar = require("@bgroup/ui/perfect-scrollbar");
          function Sidebar() {
            const componentsElements = _bgComponents.components.map(component => {
              if (component?.subComponents.length > 0) {
                return React.createElement(_sidebarDropdown.SidebarDropdown, {
                  key: component.path,
                  component: component
                });
              }
              return React.createElement(_sidebarItem.SidebarItem, {
                key: component.path,
                component: component
              });
            });
            function goHome(event) {
              event.preventDefault();
              _routing.routing.pushState("/");
            }
            return React.createElement(_perfectScrollbar.BeyondScrollContainer, {
              className: "aside",
              "data-perfect-scrollbar": "",
              "data-suppress-scroll-x": "true"
            }, React.createElement("aside", null, React.createElement("h1", {
              className: "logo"
            }, React.createElement("a", {
              onClick: goHome,
              href: "/"
            }, "Beyond ", React.createElement("span", null, "UI"))), React.createElement("div", {
              className: "nav-wrap"
            }, React.createElement("nav", {
              className: "main-nav",
              role: "navigation"
            }, React.createElement("ul", {
              className: "unstyled list-hover-slide"
            }, componentsElements)))), React.createElement("div", {
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

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 2684072206,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-widgets/base");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            get Widget() {
              return _views.Layout;
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4082215337,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Layout = Layout;
          var React = require("react");
          var _sidebar = require("../components/sidebar");
          function Layout() {
            return React.createElement("main", null, React.createElement(_sidebar.Sidebar, null), React.createElement("div", {
              className: "main-content"
            }, React.createElement("beyond-layout-children", null)));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFPLE1BQU1BLFVBQVUsR0FBRyxDQUN6QjtZQUNDQyxJQUFJLEVBQUUsY0FBYztZQUNwQkMsSUFBSSxFQUFFLGNBQWM7WUFDcEJDLGFBQWEsRUFBRTtXQUNmLEVBQ0Q7WUFDQ0YsSUFBSSxFQUFFLGFBQWE7WUFDbkJDLElBQUksRUFBRSxhQUFhO1lBQ25CQyxhQUFhLEVBQUUsQ0FDZDtjQUNDRixJQUFJLEVBQUUsVUFBVTtjQUNoQkMsSUFBSSxFQUFFO2FBQ04sRUFDRDtjQUNDRCxJQUFJLEVBQUUsT0FBTztjQUNiQyxJQUFJLEVBQUU7YUFDTixFQUNEO2NBQ0NELElBQUksRUFBRSxRQUFRO2NBQ2RDLElBQUksRUFBRTthQUNOLEVBQ0Q7Y0FDQ0QsSUFBSSxFQUFFLFVBQVU7Y0FDaEJDLElBQUksRUFBRTthQUNOLEVBQ0Q7Y0FDQ0QsSUFBSSxFQUFFLFFBQVE7Y0FDZEMsSUFBSSxFQUFFO2FBQ047V0FFRixFQUVEO1lBQ0NELElBQUksRUFBRSxlQUFlO1lBQ3JCQyxJQUFJLEVBQUUsZUFBZTtZQUNyQkMsYUFBYSxFQUFFLENBQ2Q7Y0FDQ0YsSUFBSSxFQUFFLE9BQU87Y0FDYkMsSUFBSSxFQUFFO2FBQ04sRUFDRDtjQUNDRCxJQUFJLEVBQUUsU0FBUztjQUNmQyxJQUFJLEVBQUU7YUFDTixFQUNEO2NBQ0NELElBQUksRUFBRSxTQUFTO2NBQ2ZDLElBQUksRUFBRTthQUNOO1dBRUYsRUFFRDtZQUNDRCxJQUFJLEVBQUUsYUFBYTtZQUNuQkMsSUFBSSxFQUFFLGNBQWM7WUFDcEJDLGFBQWEsRUFBRTtXQUNmLEVBQ0Q7WUFDQ0YsSUFBSSxFQUFFLGdCQUFnQjtZQUN0QkMsSUFBSSxFQUFFLGdCQUFnQjtZQUN0QkMsYUFBYSxFQUFFO1dBQ2YsRUFDRDtZQUNDRixJQUFJLEVBQUUseUJBQXlCO1lBQy9CQyxJQUFJLEVBQUUseUJBQXlCO1lBQy9CQyxhQUFhLEVBQUU7V0FDZixFQUNEO1lBQ0NGLElBQUksRUFBRSxjQUFjO1lBQ3BCQyxJQUFJLEVBQUUsY0FBYztZQUNwQkMsYUFBYSxFQUFFO1dBQ2YsRUFFRDtZQUNDRixJQUFJLEVBQUUsZUFBZTtZQUNyQkMsSUFBSSxFQUFFLHlCQUF5QjtZQUMvQkMsYUFBYSxFQUFFO1dBQ2YsRUFFRDtZQUNDRixJQUFJLEVBQUUsYUFBYTtZQUNuQkMsSUFBSSxFQUFFLGFBQWE7WUFDbkJDLGFBQWEsRUFBRTtXQUNmLEVBQ0Q7WUFDQ0YsSUFBSSxFQUFFLGNBQWM7WUFDcEJDLElBQUksRUFBRSxjQUFjO1lBQ3BCQyxhQUFhLEVBQUU7V0FDZixFQUNEO1lBQ0NGLElBQUksRUFBRSxlQUFlO1lBQ3JCQyxJQUFJLEVBQUUsZUFBZTtZQUNyQkMsYUFBYSxFQUFFO1dBQ2YsRUFDRDtZQUNDRixJQUFJLEVBQUUsMEJBQTBCO1lBQ2hDQyxJQUFJLEVBQUUsMEJBQTBCO1lBQ2hDQyxhQUFhLEVBQUU7V0FDZixFQUNEO1lBQ0NGLElBQUksRUFBRSxjQUFjO1lBQ3BCQyxJQUFJLEVBQUUsY0FBYztZQUNwQkMsYUFBYSxFQUFFO1dBQ2YsQ0FDRDtVQUFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4R0Y7VUFDQTtVQUNBO1VBRU0sU0FBVUMsZUFBZSxDQUFDO1lBQUVDO1VBQVMsQ0FBRTtZQUM1QyxNQUFNLENBQUNDLGNBQWMsRUFBRUMsaUJBQWlCLENBQUMsR0FBR0MsS0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pFLE1BQU1DLHFCQUFxQixHQUFHTCxTQUFTLENBQUNILGFBQWEsQ0FBQ1MsR0FBRyxDQUFFQyxZQUE0QyxJQUFLSixvQkFBQ0ssd0JBQVc7Y0FBQ0MsR0FBRyxFQUFFRixZQUFZLENBQUNYLElBQUk7Y0FBRUksU0FBUyxFQUFFTztZQUFZLEVBQUksQ0FBQztZQUM3SyxNQUFNRyxhQUFhLEdBQUdULGNBQWMsR0FBRyxNQUFNLEdBQUcsT0FBTztZQUV2RCxTQUFTVSxjQUFjLENBQUNDLEtBQUs7Y0FDNUJBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2NBQ3RCWCxpQkFBaUIsQ0FBQyxDQUFDRCxjQUFjLENBQUM7WUFDbkM7WUFFQSxPQUNDRTtjQUFJVyxTQUFTLEVBQUM7WUFBYyxHQUMzQlg7Y0FBR1ksT0FBTyxFQUFFSjtZQUFjLEdBQ3pCUixvQkFBQ2EsZ0JBQVU7Y0FBQ0MsSUFBSSxFQUFDLGVBQWU7Y0FBQ0gsU0FBUyxFQUFFSjtZQUFhLEVBQUksRUFDNURWLFNBQVMsQ0FBQ0wsSUFBSSxDQUNaLEVBQ0hNLGNBQWMsSUFBSUU7Y0FBSVcsU0FBUyxFQUFDO1lBQVUsR0FBRVQscUJBQXFCLENBQU0sQ0FDcEU7VUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkE7VUFDQTtVQU1NLFNBQVVHLFdBQVcsQ0FBQztZQUFFUjtVQUFTLENBQVM7WUFDL0MsTUFBTWtCLFFBQVEsR0FBRyxlQUFlbEIsU0FBUyxDQUFDSixJQUFJLEVBQUU7WUFFaEQsU0FBU3VCLFFBQVEsQ0FBQ1AsS0FBSztjQUN0QkEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7Y0FDdEJPLGdCQUFPLENBQUNDLFNBQVMsQ0FBQ0gsUUFBUSxDQUFDO1lBQzVCO1lBRUEsT0FDQ2Y7Y0FBSVcsU0FBUyxFQUFDO1lBQWMsR0FDM0JYO2NBQUdZLE9BQU8sRUFBRUk7WUFBUSxHQUFHbkIsU0FBUyxDQUFDTCxJQUFJLENBQUssQ0FDdEM7VUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQkE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBT00sU0FBVTJCLE9BQU87WUFDckIsTUFBTUMsa0JBQWtCLEdBQUc3Qix3QkFBVSxDQUFDWSxHQUFHLENBQUVOLFNBQXFCLElBQUk7Y0FDbEUsSUFBSUEsU0FBUyxFQUFFSCxhQUFhLENBQUMyQixNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QyxPQUFPckIsb0JBQUNKLGdDQUFlO2tCQUFDVSxHQUFHLEVBQUVULFNBQVMsQ0FBQ0osSUFBSTtrQkFBRUksU0FBUyxFQUFFQTtnQkFBUyxFQUFJOztjQUd2RSxPQUFPRyxvQkFBQ0ssd0JBQVc7Z0JBQUNDLEdBQUcsRUFBRVQsU0FBUyxDQUFDSixJQUFJO2dCQUFFSSxTQUFTLEVBQUVBO2NBQVMsRUFBSTtZQUNuRSxDQUFDLENBQUM7WUFFRixTQUFTeUIsTUFBTSxDQUFDYixLQUFLO2NBQ25CQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtjQUN0Qk8sZ0JBQU8sQ0FBQ0MsU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUN4QjtZQUVBLE9BQ0VsQixvQkFBQ3VCLHVDQUFxQjtjQUNwQlosU0FBUyxFQUFDLE9BQU87Y0FBQSwwQkFDTSxFQUFFO2NBQUEsMEJBQ0Y7WUFBTSxHQUU3QlgsbUNBQ0VBO2NBQUlXLFNBQVMsRUFBQztZQUFNLEdBQ2xCWDtjQUFHWSxPQUFPLEVBQUVVLE1BQU07Y0FBRUUsSUFBSSxFQUFDO1lBQUcsY0FDbkJ4Qix1Q0FBZSxDQUNwQixDQUNELEVBQ0xBO2NBQUtXLFNBQVMsRUFBQztZQUFVLEdBQ3ZCWDtjQUFLVyxTQUFTLEVBQUMsVUFBVTtjQUFDYyxJQUFJLEVBQUM7WUFBWSxHQUN6Q3pCO2NBQUlXLFNBQVMsRUFBQztZQUEyQixHQUFFUyxrQkFBa0IsQ0FBTSxDQUMvRCxDQUNGLENBQ0EsRUFFUnBCO2NBQUtXLFNBQVMsRUFBQztZQUFZLEdBQ3pCWDtjQUFLVyxTQUFTLEVBQUMsYUFBYTtjQUFDZSxRQUFRLEVBQUU7WUFBQyxFQUFJLENBQ3hDLEVBQ04xQjtjQUFLVyxTQUFTLEVBQUM7WUFBWSxHQUN6Qlg7Y0FBS1csU0FBUyxFQUFDLGNBQWM7Y0FBQ2UsUUFBUSxFQUFFO1lBQUMsRUFBSSxDQUN6QyxDQUNnQjtVQUU1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyREE7VUFDQTtVQUVPO1VBQVUsTUFDWEMsVUFBVyxTQUFRQywyQkFBcUI7WUFDMUMsSUFBSUMsTUFBTTtjQUNOLE9BQU9DLGFBQU07WUFDakI7O1VBQ0huQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSRDtVQUNBO1VBVU0sU0FBVW1DLE1BQU07WUFDckIsT0FDQzlCLGtDQUNDQSxvQkFBQ21CLGdCQUFPLE9BQUcsRUFDWG5CO2NBQUtXLFNBQVMsRUFBQztZQUFjLEdBQzVCWCxtREFBMEIsQ0FDckIsQ0FDQTtVQUVUIiwibmFtZXMiOlsiY29tcG9uZW50cyIsIm5hbWUiLCJwYXRoIiwic3ViQ29tcG9uZW50cyIsImV4cG9ydHMiLCJTaWRlYmFyRHJvcGRvd24iLCJjb21wb25lbnQiLCJpc0Ryb3Bkb3duT3BlbiIsInNldElzRHJvcGRvd25PcGVuIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInN1YkNvbXBvbmVudHNFbGVtZW50cyIsIm1hcCIsInN1YkNvbXBvbmVudCIsIlNpZGViYXJJdGVtIiwia2V5IiwiaWNvbkRpcmVjdGlvbiIsInRvZ2dsZURyb3Bkb3duIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJCZXlvbmRJY29uIiwiaWNvbiIsImxvY2F0aW9uIiwicmVkaXJlY3QiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiU2lkZWJhciIsImNvbXBvbmVudHNFbGVtZW50cyIsImxlbmd0aCIsImdvSG9tZSIsIkJleW9uZFNjcm9sbENvbnRhaW5lciIsImhyZWYiLCJyb2xlIiwidGFiSW5kZXgiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiTGF5b3V0Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9iZy1jb21wb25lbnRzLnRzIiwidHMvY29tcG9uZW50cy9zaWRlYmFyLWRyb3Bkb3duLnRzeCIsInRzL2NvbXBvbmVudHMvc2lkZWJhci1pdGVtLnRzeCIsInRzL2NvbXBvbmVudHMvc2lkZWJhci50c3giLCJ0cy9jb250cm9sbGVyLnRzIiwidHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==