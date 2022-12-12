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
          "vspecifier": "@beyond/ui@1.0.0/beyond-input"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['react', dependency_3], ['@beyond/ui/header', dependency_4], ['@beyond/ui/toast', dependency_5], ['@beyond/ui/copyable-implementation', dependency_6], ['@beyond/ui/form', dependency_7], ['@beyond-js/kernel/styles', dependency_8]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "beyond-input",
        "vspecifier": "@beyond/ui@1.0.0/beyond-input",
        "is": "page",
        "route": "/components/beyond-input"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/ui@1.0.0/beyond-input');
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
        hash: 511997543,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.implementation = void 0;
          const implementation = `
export function Results() {
	const [value, setValue] = React.useState('');

	function handleChange(event) {
		const { value: inputValue } = event.target;
		setValue(inputValue);
	}

	function handleSubmit(event) {
		event.preventDefault();
		// logic...
	}

	return (
		<form onSubmit={handleSubmit}>
			<BeyondInput type="text" name="name" label="Insert a text..." onChange={handleChange} value={value} />
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
        hash: 104227163,
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
          var _implementation = require("./implementation");
          var _results = require("./results");
          /*bundle*/
          function View() {
            return React.createElement(_toast.ToastContextProvider, null, React.createElement("div", {
              className: "view"
            }, React.createElement(_header.Header, {
              componentName: "Input"
            }), React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Importaci\u00F3n:"), React.createElement(_copyableImplementation.CopyableImplementation, null, `import { BeyondInput } from '@beyond/ui/icon';`)), React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Implementaci\u00F3n:"), React.createElement(_copyableImplementation.CopyableImplementation, null, _implementation.implementation)), React.createElement("div", {
              className: "component-result"
            }, React.createElement("h3", null, "Resultado:"), React.createElement(_results.Results, null))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/results
      *******************************/

      ims.set('./views/results', {
        hash: 3060200481,
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
                value: inputValue
              } = event.target;
              setValue(inputValue);
            }
            function handleSubmit(event) {
              event.preventDefault();
              // logic...
            }

            return React.createElement("form", {
              onSubmit: handleSubmit
            }, React.createElement(_form.BeyondInput, {
              type: "text",
              name: "name",
              label: "Insert a text...",
              onChange: handleChange,
              value: value
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFFTztVQUFVLE1BQ1hBLFVBQVcsU0FBUUMsK0JBQXlCO1lBQzlDLElBQUlDLE1BQU07Y0FDTixPQUFPQyxXQUFJO1lBQ2Y7O1VBQ0hDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JNLE1BQU1DLGNBQWMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1CNUI7VUFBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJIO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUVPO1VBQVUsU0FDUkQsSUFBSTtZQUNaLE9BQ0NHLG9CQUFDQywyQkFBb0IsUUFDcEJEO2NBQUtFLFNBQVMsRUFBQztZQUFNLEdBQ3BCRixvQkFBQ0csY0FBTTtjQUFDQyxhQUFhLEVBQUM7WUFBTyxFQUFHLEVBQ2hDSjtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJGLG9EQUFxQixFQUNyQkEsb0JBQUNLLDhDQUFzQixRQUFFLGdEQUFnRCxDQUEwQixDQUM5RixFQUNOTDtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJGLHVEQUF3QixFQUN4QkEsb0JBQUNLLDhDQUFzQixRQUFFTiw4QkFBYyxDQUEwQixDQUM1RCxFQUNOQztjQUFLRSxTQUFTLEVBQUM7WUFBa0IsR0FDaENGLDZDQUFtQixFQUNuQkEsb0JBQUNNLGdCQUFPLE9BQUcsQ0FDTixDQUNELENBQ2dCO1VBRXpCOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVCQTtVQUNBO1VBRU0sU0FBVUEsT0FBTztZQUN0QixNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdSLEtBQUssQ0FBQ1MsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUU1QyxTQUFTQyxZQUFZLENBQUNDLEtBQUs7Y0FDMUIsTUFBTTtnQkFBRUosS0FBSyxFQUFFSztjQUFVLENBQUUsR0FBR0QsS0FBSyxDQUFDRSxNQUFNO2NBQzFDTCxRQUFRLENBQUNJLFVBQVUsQ0FBQztZQUNyQjtZQUVBLFNBQVNFLFlBQVksQ0FBQ0gsS0FBSztjQUMxQkEsS0FBSyxDQUFDSSxjQUFjLEVBQUU7Y0FDdEI7WUFDRDs7WUFFQSxPQUNDZjtjQUFNZ0IsUUFBUSxFQUFFRjtZQUFZLEdBQzNCZCxvQkFBQ2lCLGlCQUFXO2NBQUNDLElBQUksRUFBQyxNQUFNO2NBQUNDLElBQUksRUFBQyxNQUFNO2NBQUNDLEtBQUssRUFBQyxrQkFBa0I7Y0FBQ0MsUUFBUSxFQUFFWCxZQUFZO2NBQUVILEtBQUssRUFBRUE7WUFBSyxFQUFJLENBQ2hHO1VBRVQiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiaW1wbGVtZW50YXRpb24iLCJSZWFjdCIsIlRvYXN0Q29udGV4dFByb3ZpZGVyIiwiY2xhc3NOYW1lIiwiSGVhZGVyIiwiY29tcG9uZW50TmFtZSIsIkNvcHlhYmxlSW1wbGVtZW50YXRpb24iLCJSZXN1bHRzIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJpbnB1dFZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJvblN1Ym1pdCIsIkJleW9uZElucHV0IiwidHlwZSIsIm5hbWUiLCJsYWJlbCIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJwcm9qZWN0L21vZHVsZXMvZm9ybS92aWV3cy9pbnB1dC93aWRnZXQvdHMvY29udHJvbGxlci50cyIsInByb2plY3QvbW9kdWxlcy9mb3JtL3ZpZXdzL2lucHV0L3dpZGdldC90cy92aWV3cy9pbXBsZW1lbnRhdGlvbi50cyIsInByb2plY3QvbW9kdWxlcy9mb3JtL3ZpZXdzL2lucHV0L3dpZGdldC90cy92aWV3cy9pbmRleC50c3giLCJwcm9qZWN0L21vZHVsZXMvZm9ybS92aWV3cy9pbnB1dC93aWRnZXQvdHMvdmlld3MvcmVzdWx0cy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXX0=