System.register(["@beyond-js/widgets@0.1.1/render", "@beyond-js/kernel@0.1.2/bundle", "@beyond-js/react-widgets@18.20.3/page", "react@18.2.0", "@beyond/ui@1.0.0/header", "@beyond/ui@1.0.0/toast", "@beyond/ui@1.0.0/copyable-implementation", "@beyond/ui@1.0.0/perfect-scrollbar", "@beyond-js/kernel@0.1.2/styles"], function (_export, _context) {
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
    }, function (_react) {
      dependency_3 = _react;
    }, function (_beyondUi100Header) {
      dependency_4 = _beyondUi100Header;
    }, function (_beyondUi100Toast) {
      dependency_5 = _beyondUi100Toast;
    }, function (_beyondUi100CopyableImplementation) {
      dependency_6 = _beyondUi100CopyableImplementation;
    }, function (_beyondUi100PerfectScrollbar) {
      dependency_7 = _beyondUi100PerfectScrollbar;
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
          "vspecifier": "@beyond/ui@1.0.0/beyond-scroll-container"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['react', dependency_3], ['@beyond/ui/header', dependency_4], ['@beyond/ui/toast', dependency_5], ['@beyond/ui/copyable-implementation', dependency_6], ['@beyond/ui/perfect-scrollbar', dependency_7], ['@beyond-js/kernel/styles', dependency_8]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "beyond-scroll-container",
        "vspecifier": "@beyond/ui@1.0.0/beyond-scroll-container",
        "is": "page",
        "route": "/components/beyond-scroll-container"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/ui@1.0.0/beyond-scroll-container');
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
        hash: 2791807970,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.implementation = void 0;
          const implementation = `
export function ImplementationPerfectScroll() {
   
    return (
      <BeyondScrollContainer
        className="aside"
        data-perfect-scrollbar=""
        data-suppress-scroll-x="true"
      >
        <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quis veniam. Facere modi, quae reiciendis voluptatum vitae eveniet dolore soluta reprehenderit fugit consequuntur. Excepturi nesciunt tempore vero, totam culpa earum!
        Quae sint provident officiis impedit adipisci tempora dolorum, quod unde voluptas iste ut sunt, ipsa, voluptatibus dolor laboriosam perferendis aspernatur eaque? Id architecto delectus perspiciatis suscipit itaque alias dolores quas.
        Debitis, nesciunt temporibus eius amet dolorem quam consequatur quaerat accusamus! Rerum et voluptates, nulla vel similique, dolores dolore, corrupti reiciendis facilis hic esse laudantium illo. Dolor, doloremque praesentium? Provident, qui!
        Distinctio pariatur a sequi omnis soluta est earum dicta incidunt commodi, perspiciatis nostrum unde at quas corrupti aliquam cumque, beatae quidem, repellat libero iusto iure qui quod eum. Dolor, minus?
        Excepturi ut est modi laboriosam aperiam dolor maxime! Aperiam praesentium asperiores corporis mollitia ad a, eos dolor iusto repudiandae odit dolorem optio atque error in ducimus perspiciatis fugit cumque molestias.
        Expedita ab sapiente exercitationem fugiat distinctio suscipit similique velit tempore corporis repellat consectetur, ullam a molestiae voluptatum? Alias, molestias odit! Inventore reprehenderit architecto, atque repudiandae incidunt modi officia vitae nisi.
        Consectetur ut illum consequatur vero enim ad fugit ab omnis velit, minima voluptates. Nihil libero qui ducimus, accusantium optio eum temporibus quidem distinctio voluptas dolor modi alias provident minus repellat!
        Eligendi consequuntur maxime rerum. Aspernatur voluptatibus nulla illum debitis itaque eius placeat praesentium consectetur velit numquam. Nam fugit, qui excepturi quidem consectetur, reiciendis eos eius dicta facilis, doloribus totam laudantium!
        Reiciendis iusto porro ab quis amet! Eius velit a ut. Nihil fugit amet cumque a blanditiis, quas inventore tempore provident cupiditate ex consequatur! Reiciendis reprehenderit aut recusandae repudiandae sed provident?
        Voluptatem quaerat error nobis illo nostrum inventore saepe hic adipisci doloribus omnis quibusdam quia tenetur blanditiis sint pariatur repellendus nemo minus amet consequuntur natus, quasi, tempore placeat! Aut, maiores fuga.
        </div>
        <div className="ps__rail-x">
          <div className="ps__thumb-x" tabIndex={0} />
        </div>
        <div className="ps__rail-y">
          <div className=" ps__thumb-y" tabIndex={0} />
        </div>
      </BeyondScrollContainer>
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
        hash: 3623972991,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _header = require("@beyond/ui/header");
          var _toast = require("@beyond/ui/toast");
          var _copyableImplementation = require("@beyond/ui/copyable-implementation");
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
            }, React.createElement("h3", null, "Importacion: "), React.createElement(_copyableImplementation.CopyableImplementation, null, `import { BeyondScrollContainer } from "@beyond/ui/perfect-scrollbar";`)), React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Implementacion: "), React.createElement(_copyableImplementation.CopyableImplementation, null, _implementation.implementation)), React.createElement("div", {
              className: "component-result"
            }, React.createElement("h3", null, "Resultado:"), React.createElement(_results.Results, null))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/results
      *******************************/

      ims.set('./views/results', {
        hash: 3441795834,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Results = Results;
          var React = require("react");
          var _perfectScrollbar = require("@beyond/ui/perfect-scrollbar");
          function Results() {
            return React.createElement(_perfectScrollbar.BeyondScrollContainer, {
              className: "aside",
              "data-perfect-scrollbar": "",
              "data-suppress-scroll-x": "true"
            }, React.createElement("div", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quis veniam. Facere modi, quae reiciendis voluptatum vitae eveniet dolore soluta reprehenderit fugit consequuntur. Excepturi nesciunt tempore vero, totam culpa earum! Quae sint provident officiis impedit adipisci tempora dolorum, quod unde voluptas iste ut sunt, ipsa, voluptatibus dolor laboriosam perferendis aspernatur eaque? Id architecto delectus perspiciatis suscipit itaque alias dolores quas. Debitis, nesciunt temporibus eius amet dolorem quam consequatur quaerat accusamus! Rerum et voluptates, nulla vel similique, dolores dolore, corrupti reiciendis facilis hic esse laudantium illo. Dolor, doloremque praesentium? Provident, qui! Distinctio pariatur a sequi omnis soluta est earum dicta incidunt commodi, perspiciatis nostrum unde at quas corrupti aliquam cumque, beatae quidem, repellat libero iusto iure qui quod eum. Dolor, minus? Excepturi ut est modi laboriosam aperiam dolor maxime! Aperiam praesentium asperiores corporis mollitia ad a, eos dolor iusto repudiandae odit dolorem optio atque error in ducimus perspiciatis fugit cumque molestias. Expedita ab sapiente exercitationem fugiat distinctio suscipit similique velit tempore corporis repellat consectetur, ullam a molestiae voluptatum? Alias, molestias odit! Inventore reprehenderit architecto, atque repudiandae incidunt modi officia vitae nisi. Consectetur ut illum consequatur vero enim ad fugit ab omnis velit, minima voluptates. Nihil libero qui ducimus, accusantium optio eum temporibus quidem distinctio voluptas dolor modi alias provident minus repellat! Eligendi consequuntur maxime rerum. Aspernatur voluptatibus nulla illum debitis itaque eius placeat praesentium consectetur velit numquam. Nam fugit, qui excepturi quidem consectetur, reiciendis eos eius dicta facilis, doloribus totam laudantium! Reiciendis iusto porro ab quis amet! Eius velit a ut. Nihil fugit amet cumque a blanditiis, quas inventore tempore provident cupiditate ex consequatur! Reiciendis reprehenderit aut recusandae repudiandae sed provident? Voluptatem quaerat error nobis illo nostrum inventore saepe hic adipisci doloribus omnis quibusdam quia tenetur blanditiis sint pariatur repellendus nemo minus amet consequuntur natus, quasi, tempore placeat! Aut, maiores fuga."), React.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFFTztVQUFVLE1BQ1hBLFVBQVcsU0FBUUMsK0JBQXlCO1lBQzlDLElBQUlDLE1BQU07Y0FDTixPQUFPQyxXQUFJO1lBQ2Y7O1VBQ0hDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JNLE1BQU1DLGNBQWMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBOEI3QjtVQUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QkY7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBRU87VUFBVSxTQUNSRCxJQUFJO1lBQ1osT0FDQ0csb0JBQUNDLDJCQUFvQixRQUNwQkQ7Y0FBS0UsU0FBUyxFQUFDO1lBQXdCLEdBQ3RDRixvQkFBQ0csY0FBTTtjQUFDQyxhQUFhLEVBQUM7WUFBZ0IsRUFBRyxFQUN6Q0o7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCRixnREFBc0IsRUFDdEJBLG9CQUFDSyw4Q0FBc0IsUUFBRSx1RUFBdUUsQ0FBMEIsQ0FDckgsRUFDTkw7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCRixtREFBeUIsRUFDekJBLG9CQUFDSyw4Q0FBc0IsUUFBRU4sOEJBQWMsQ0FBMEIsQ0FDNUQsRUFFTkM7Y0FBS0UsU0FBUyxFQUFDO1lBQWtCLEdBQ2hDRiw2Q0FBbUIsRUFDbkJBLG9CQUFDTSxnQkFBTyxPQUFHLENBQ04sQ0FDRCxDQUNnQjtVQUV6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3QkE7VUFDQTtVQUVNLFNBQVVBLE9BQU87WUFDdEIsT0FDQ04sb0JBQUNPLHVDQUFxQjtjQUNyQkwsU0FBUyxFQUFDLE9BQU87Y0FBQSwwQkFDTSxFQUFFO2NBQUEsMEJBQ0Y7WUFBTSxHQUU3QkYsaXlFQVdNLEVBQ05BO2NBQUtFLFNBQVMsRUFBQztZQUFZLEdBQzFCRjtjQUFLRSxTQUFTLEVBQUMsYUFBYTtjQUFDTSxRQUFRLEVBQUU7WUFBQyxFQUFJLENBQ3ZDLEVBQ05SO2NBQUtFLFNBQVMsRUFBQztZQUFZLEdBQzFCRjtjQUFLRSxTQUFTLEVBQUMsY0FBYztjQUFDTSxRQUFRLEVBQUU7WUFBQyxFQUFJLENBQ3hDLENBQ2lCO1VBRTFCIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsImltcGxlbWVudGF0aW9uIiwiUmVhY3QiLCJUb2FzdENvbnRleHRQcm92aWRlciIsImNsYXNzTmFtZSIsIkhlYWRlciIsImNvbXBvbmVudE5hbWUiLCJDb3B5YWJsZUltcGxlbWVudGF0aW9uIiwiUmVzdWx0cyIsIkJleW9uZFNjcm9sbENvbnRhaW5lciIsInRhYkluZGV4Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJwcm9qZWN0L21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvdmlldy93aWRnZXQvdHMvY29udHJvbGxlci50cyIsInByb2plY3QvbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci92aWV3L3dpZGdldC90cy92aWV3cy9pbXBsZW1lbnRhdGlvbi50cyIsInByb2plY3QvbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci92aWV3L3dpZGdldC90cy92aWV3cy9pbmRleC50c3giLCJwcm9qZWN0L21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvdmlldy93aWRnZXQvdHMvdmlld3MvcmVzdWx0cy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXX0=