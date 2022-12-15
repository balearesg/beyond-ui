System.register(["@beyond-js/widgets@0.1.1/render", "@beyond-js/kernel@0.1.2/bundle", "@beyond-js/react-widgets@18.20.3/page", "react@18.2.0", "@beyond/ui@1.0.0/header", "@beyond/ui@1.0.0/toast", "@beyond/ui@1.0.0/copyable-implementation", "@beyond/ui@1.0.0/form", "@beyond-js/kernel@0.1.2/styles"], function (_export, _context) {
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
    }, function (_beyondUi100Form) {
      dependency_7 = _beyondUi100Form;
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
          "vspecifier": "@beyond/ui@1.0.0/beyond-textarea"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['react', dependency_3], ['@beyond/ui/header', dependency_4], ['@beyond/ui/toast', dependency_5], ['@beyond/ui/copyable-implementation', dependency_6], ['@beyond/ui/form', dependency_7], ['@beyond-js/kernel/styles', dependency_8]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "beyond-textarea",
        "vspecifier": "@beyond/ui@1.0.0/beyond-textarea",
        "is": "page",
        "route": "/components/beyond-textarea"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/ui@1.0.0/beyond-textarea');
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
        hash: 792081462,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.implementation = void 0;
          const implementation = `
export function TextareaImplementation() {
	const [value, setValue] = React.useState('');

	function handleChange(event) {
		const { value: textAreaValue } = event.target;
		setValue(textAreaValue);
	}

	function handleSubmit(event) {
		event.preventDefault();
        // Logic...
	}

	return (
		<form onSubmit={handleSubmit}>
			<BeyondTextarea value={value} placeholder="Insert text..." onChange={handleChange} />
		</form>
	);
}`;
          exports.implementation = implementation;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3653753593,
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
              className: "view"
            }, React.createElement(_header.Header, {
              componentName: "Textarea"
            }), React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Import:"), React.createElement(_copyableImplementation.CopyableImplementation, null, `import { BeyondTextarea } from '@beyond/ui/form';`)), React.createElement("div", {
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
        hash: 509335578,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Results = Results;
          var React = require("react");
          var _form = require("@beyond/ui/form");
          function Results() {
            const [value, setValue] = React.useState('');
            function handleChange(event) {
              const {
                value: textAreaValue
              } = event.target;
              setValue(textAreaValue);
            }
            function handleSubmit(event) {
              event.preventDefault();
              // Logic...
            }

            return React.createElement("form", {
              onSubmit: handleSubmit
            }, React.createElement(_form.BeyondTextarea, {
              value: value,
              placeholder: "Insert text...",
              onChange: handleChange
            }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFFTztVQUFVLE1BQ1hBLFVBQVcsU0FBUUMsK0JBQXlCO1lBQzlDLElBQUlDLE1BQU07Y0FDTixPQUFPQyxXQUFJO1lBQ2Y7O1VBQ0hDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JNLE1BQU1DLGNBQWMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1CNUI7VUFBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJIO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUVPO1VBQVUsU0FDUkQsSUFBSTtZQUNaLE9BQ0NHLG9CQUFDQywyQkFBb0IsUUFDcEJEO2NBQUtFLFNBQVMsRUFBQztZQUFNLEdBQ3BCRixvQkFBQ0csY0FBTTtjQUFDQyxhQUFhLEVBQUM7WUFBVSxFQUFHLEVBQ25DSjtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJGLDBDQUFnQixFQUNoQkEsb0JBQUNLLDhDQUFzQixRQUFFLG1EQUFtRCxDQUEwQixDQUNqRyxFQUNOTDtjQUFLRSxTQUFTLEVBQUM7WUFBMEIsR0FDeENGO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QkYsbURBQXlCLEVBQ3pCQSxvQkFBQ0ssOENBQXNCLFFBQUVOLDhCQUFjLENBQTBCLENBQzVELEVBRU5DO2NBQUtFLFNBQVMsRUFBQztZQUFrQixHQUNoQ0YsMENBQWdCLEVBQ2hCQSxvQkFBQ00sZ0JBQU8sT0FBRyxDQUNOLENBQ0QsQ0FDRCxDQUNnQjtVQUV6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQkE7VUFDQTtVQUVNLFNBQVVBLE9BQU87WUFDdEIsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHUixLQUFLLENBQUNTLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFFNUMsU0FBU0MsWUFBWSxDQUFDQyxLQUFLO2NBQzFCLE1BQU07Z0JBQUVKLEtBQUssRUFBRUs7Y0FBYSxDQUFFLEdBQUdELEtBQUssQ0FBQ0UsTUFBTTtjQUM3Q0wsUUFBUSxDQUFDSSxhQUFhLENBQUM7WUFDeEI7WUFFQSxTQUFTRSxZQUFZLENBQUNILEtBQUs7Y0FDMUJBLEtBQUssQ0FBQ0ksY0FBYyxFQUFFO2NBQ3RCO1lBQ0Q7O1lBRUEsT0FDQ2Y7Y0FBTWdCLFFBQVEsRUFBRUY7WUFBWSxHQUMzQmQsb0JBQUNpQixvQkFBYztjQUFDVixLQUFLLEVBQUVBLEtBQUs7Y0FBRVcsV0FBVyxFQUFDLGdCQUFnQjtjQUFDQyxRQUFRLEVBQUVUO1lBQVksRUFBSSxDQUMvRTtVQUVUIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsImltcGxlbWVudGF0aW9uIiwiUmVhY3QiLCJUb2FzdENvbnRleHRQcm92aWRlciIsImNsYXNzTmFtZSIsIkhlYWRlciIsImNvbXBvbmVudE5hbWUiLCJDb3B5YWJsZUltcGxlbWVudGF0aW9uIiwiUmVzdWx0cyIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGV4dEFyZWFWYWx1ZSIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwib25TdWJtaXQiLCJCZXlvbmRUZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInByb2plY3QvbW9kdWxlcy9mb3JtL3ZpZXdzL3RleHRhcmVhL3dpZGdldC90cy9jb250cm9sbGVyLnRzIiwicHJvamVjdC9tb2R1bGVzL2Zvcm0vdmlld3MvdGV4dGFyZWEvd2lkZ2V0L3RzL3ZpZXdzL2ltcGxlbWVudGF0aW9uLnRzIiwicHJvamVjdC9tb2R1bGVzL2Zvcm0vdmlld3MvdGV4dGFyZWEvd2lkZ2V0L3RzL3ZpZXdzL2luZGV4LnRzeCIsInByb2plY3QvbW9kdWxlcy9mb3JtL3ZpZXdzL3RleHRhcmVhL3dpZGdldC90cy92aWV3cy9yZXN1bHRzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdfQ==