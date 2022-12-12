System.register(["@beyond-js/widgets@0.1.1/render", "@beyond-js/kernel@0.1.2/bundle", "@beyond-js/react-widgets@18.20.3/page", "react@18.2.0", "@beyond/ui@1.0.0/header", "@beyond/ui@1.0.0/copyable-implementation", "@beyond/ui@1.0.0/toast", "@beyond/ui@1.0.0/form", "@beyond-js/kernel@0.1.2/styles"], function (_export, _context) {
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
    }, function (_beyondUi100CopyableImplementation) {
      dependency_5 = _beyondUi100CopyableImplementation;
    }, function (_beyondUi100Toast) {
      dependency_6 = _beyondUi100Toast;
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
          "vspecifier": "@beyond/ui@1.0.0/beyond-checkbox"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['react', dependency_3], ['@beyond/ui/header', dependency_4], ['@beyond/ui/copyable-implementation', dependency_5], ['@beyond/ui/toast', dependency_6], ['@beyond/ui/form', dependency_7], ['@beyond-js/kernel/styles', dependency_8]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "beyond-widget",
        "vspecifier": "@beyond/ui@1.0.0/beyond-checkbox",
        "is": "page",
        "route": "/components/beyond-checkbox"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/ui@1.0.0/beyond-checkbox');
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
        hash: 267115317,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.implementation = void 0;
          const implementation = `
export function CheckboxImplementation() {
	const [selectedValue, setSelectedValue] = React.useState(false);

	function handleChange(event) {
		const { checked } = event.target;
		setSelectedValue(checked);
	};

	return (
		<form className="results-form">
			<BeyondCheckbox
				onChange={handleChange}
				checked={selectedValue}
				name='check'
			/>
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
        hash: 4031228490,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _header = require("@beyond/ui/header");
          var _copyableImplementation = require("@beyond/ui/copyable-implementation");
          var _toast = require("@beyond/ui/toast");
          var _results = require("./results");
          var _implementation = require("./implementation");
          /*bundle*/
          function View() {
            return React.createElement(_toast.ToastContextProvider, null, React.createElement("div", {
              className: "view"
            }, React.createElement(_header.Header, {
              componentName: "Checkbox"
            }), React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Importacion: "), React.createElement(_copyableImplementation.CopyableImplementation, null, `import {BeyondCheckbox} from '@beyond/ui/form';`)), React.createElement("div", {
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
        hash: 2052920865,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Results = Results;
          var React = require("react");
          var _form = require("@beyond/ui/form");
          function Results() {
            const [selectedValue, setSelectedValue] = React.useState(false);
            function handleChange(event) {
              const {
                checked
              } = event.target;
              setSelectedValue(checked);
            }
            ;
            return React.createElement("form", {
              className: "results-form"
            }, React.createElement(_form.BeyondCheckbox, {
              onChange: handleChange,
              checked: selectedValue,
              name: 'check'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFFTztVQUFVLE1BQ1hBLFVBQVcsU0FBUUMsK0JBQXlCO1lBQzlDLElBQUlDLE1BQU07Y0FDTixPQUFPQyxXQUFJO1lBQ2Y7O1VBQ0hDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JNLE1BQU1DLGNBQWMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0I1QjtVQUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQkg7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBRU87VUFBVSxTQUNSRCxJQUFJO1lBQ1osT0FDQ0csb0JBQUNDLDJCQUFvQixRQUNwQkQ7Y0FBS0UsU0FBUyxFQUFDO1lBQU0sR0FDcEJGLG9CQUFDRyxjQUFNO2NBQUNDLGFBQWEsRUFBQztZQUFVLEVBQUcsRUFDbkNKO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QkYsZ0RBQXNCLEVBQ3RCQSxvQkFBQ0ssOENBQXNCLFFBQUUsaURBQWlELENBQTBCLENBQy9GLEVBQ05MO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QkYsbURBQXlCLEVBQ3pCQSxvQkFBQ0ssOENBQXNCLFFBQUVOLDhCQUFjLENBQTBCLENBQzVELEVBRU5DO2NBQUtFLFNBQVMsRUFBQztZQUFrQixHQUNoQ0YsNkNBQW1CLEVBQ25CQSxvQkFBQ00sZ0JBQU8sT0FBRyxDQUNOLENBQ0QsQ0FDZ0I7VUFFekI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0JBO1VBQ0E7VUFFTSxTQUFVQSxPQUFPO1lBQ3RCLE1BQU0sQ0FBQ0MsYUFBYSxFQUFFQyxnQkFBZ0IsQ0FBQyxHQUFHUixLQUFLLENBQUNTLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFL0QsU0FBU0MsWUFBWSxDQUFDQyxLQUFLO2NBQzFCLE1BQU07Z0JBQUVDO2NBQU8sQ0FBRSxHQUFHRCxLQUFLLENBQUNFLE1BQU07Y0FDaENMLGdCQUFnQixDQUFDSSxPQUFPLENBQUM7WUFDMUI7WUFBQztZQUVELE9BQ0NaO2NBQU1FLFNBQVMsRUFBQztZQUFjLEdBQzdCRixvQkFBQ2Msb0JBQWM7Y0FDZEMsUUFBUSxFQUFFTCxZQUFZO2NBQ3RCRSxPQUFPLEVBQUVMLGFBQWE7Y0FDdEJTLElBQUksRUFBQztZQUFPLEVBQ1gsQ0FDSTtVQUVUIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsImltcGxlbWVudGF0aW9uIiwiUmVhY3QiLCJUb2FzdENvbnRleHRQcm92aWRlciIsImNsYXNzTmFtZSIsIkhlYWRlciIsImNvbXBvbmVudE5hbWUiLCJDb3B5YWJsZUltcGxlbWVudGF0aW9uIiwiUmVzdWx0cyIsInNlbGVjdGVkVmFsdWUiLCJzZXRTZWxlY3RlZFZhbHVlIiwidXNlU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsImNoZWNrZWQiLCJ0YXJnZXQiLCJCZXlvbmRDaGVja2JveCIsIm9uQ2hhbmdlIiwibmFtZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsicHJvamVjdC9tb2R1bGVzL2Zvcm0vdmlld3MvY2hlY2tib3gvd2lkZ2V0L3RzL2NvbnRyb2xsZXIudHMiLCJwcm9qZWN0L21vZHVsZXMvZm9ybS92aWV3cy9jaGVja2JveC93aWRnZXQvdHMvdmlld3MvaW1wbGVtZW50YXRpb24udHMiLCJwcm9qZWN0L21vZHVsZXMvZm9ybS92aWV3cy9jaGVja2JveC93aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4IiwicHJvamVjdC9tb2R1bGVzL2Zvcm0vdmlld3MvY2hlY2tib3gvd2lkZ2V0L3RzL3ZpZXdzL3Jlc3VsdHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF19