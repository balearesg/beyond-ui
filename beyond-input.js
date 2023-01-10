System.register(["@beyond-js/widgets@0.1.2/render", "@beyond-js/kernel@0.1.7/bundle", "@beyond-js/react-widgets@18.21.1/page", "react@18.2.0", "@bgroup/ui@0.0.21/header", "@bgroup/ui@0.0.21/toast", "@bgroup/ui@0.0.21/copyable-implementation", "@bgroup/ui@0.0.21/implementation-result", "@bgroup/ui@0.0.21/form", "@beyond-js/kernel@0.1.7/styles"], function (_export, _context) {
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
    }, function (_react) {
      dependency_3 = _react;
    }, function (_bgroupUi0021Header) {
      dependency_4 = _bgroupUi0021Header;
    }, function (_bgroupUi0021Toast) {
      dependency_5 = _bgroupUi0021Toast;
    }, function (_bgroupUi0021CopyableImplementation) {
      dependency_6 = _bgroupUi0021CopyableImplementation;
    }, function (_bgroupUi0021ImplementationResult) {
      dependency_7 = _bgroupUi0021ImplementationResult;
    }, function (_bgroupUi0021Form) {
      dependency_8 = _bgroupUi0021Form;
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
          "vspecifier": "@bgroup/ui@0.0.21/beyond-input"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['react', dependency_3], ['@bgroup/ui/header', dependency_4], ['@bgroup/ui/toast', dependency_5], ['@bgroup/ui/copyable-implementation', dependency_6], ['@bgroup/ui/implementation-result', dependency_7], ['@bgroup/ui/form', dependency_8], ['@beyond-js/kernel/styles', dependency_9]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "beyond-input",
        "vspecifier": "@bgroup/ui@0.0.21/beyond-input",
        "is": "page",
        "route": "/components/beyond-input"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/ui@0.0.21/beyond-input');
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

      /***************************************
      INTERNAL MODULE: ./views/implementations
      ***************************************/

      ims.set('./views/implementations', {
        hash: 1216050490,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.implementationPassword = exports.implementationLoading = exports.implementationIcon = exports.implementationError = exports.implementationDisabled = exports.implementation = void 0;
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
          const implementationError = `
<BeyondInput
	type="text"
	label="Insert a text..."
	hasError={true}
	errorMessage="Error in input"
/>
`;
          exports.implementationError = implementationError;
          const implementationIcon = `
<BeyondInput
	type="text"
	label="Insert a text..."
	icon="user"
/>
`;
          exports.implementationIcon = implementationIcon;
          const implementationDisabled = `
<BeyondInput
	type="text"
	label="Insert a text..."
	disabled
/>
`;
          exports.implementationDisabled = implementationDisabled;
          const implementationPassword = `
<BeyondInput
	type="password"
	label="Insert a text..."
	password
/>
`;
          exports.implementationPassword = implementationPassword;
          const implementationLoading = `
<BeyondInput
	type="text"
	label="Insert a text..."
	loading
	colorSpinner="#fff"
/>
`;
          exports.implementationLoading = implementationLoading;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1707456637,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _header = require("@bgroup/ui/header");
          var _toast = require("@bgroup/ui/toast");
          var _copyableImplementation = require("@bgroup/ui/copyable-implementation");
          var _implementations = require("./implementations");
          var _results = require("./results");
          var _resultInputError = require("./result-input-error");
          var _resultInputWithIcon = require("./result-input-with-icon");
          var _resultInputDisabled = require("./result-input-disabled");
          var _resultInputPassword = require("./result-input-password");
          var _resultInputLoading = require("./result-input-loading");
          var _implementationResult = require("@bgroup/ui/implementation-result");
          /*bundle*/
          function View() {
            return React.createElement(_toast.ToastContextProvider, null, React.createElement("div", {
              className: "view"
            }, React.createElement(_header.Header, {
              componentName: "Input"
            }), React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Import:"), React.createElement(_copyableImplementation.CopyableImplementation, null, `import { BeyondInput } from '@bgroup/icon';`)), React.createElement("div", {
              className: "component-implementation"
            }, React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Implementation:"), React.createElement(_copyableImplementation.CopyableImplementation, null, _implementations.implementation)), React.createElement("div", {
              className: "component-result"
            }, React.createElement("h3", null, "Result:"), React.createElement(_results.Results, null), React.createElement("h3", null, "Case input error:"), React.createElement(_implementationResult.ImplementationResult, {
              code: _implementations.implementationError
            }, React.createElement(_resultInputError.ResultInputError, null)), React.createElement("h3", null, "Case input with icon:"), React.createElement(_implementationResult.ImplementationResult, {
              code: _implementations.implementationIcon
            }, React.createElement(_resultInputWithIcon.ResultInputWithIcon, null)), React.createElement("h3", null, "Case input disabled:"), React.createElement(_implementationResult.ImplementationResult, {
              code: _implementations.implementationDisabled
            }, React.createElement(_resultInputDisabled.ResultInputDisabled, null)), React.createElement("h3", null, "Case input password:"), React.createElement(_implementationResult.ImplementationResult, {
              code: _implementations.implementationPassword
            }, React.createElement(_resultInputPassword.ResultInputPassword, null)), React.createElement("h3", null, "Case input loading:"), React.createElement(_implementationResult.ImplementationResult, {
              code: _implementations.implementationLoading
            }, React.createElement(_resultInputLoading.ResultInputLoading, null))))));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/result-input-disabled
      *********************************************/

      ims.set('./views/result-input-disabled', {
        hash: 2616881785,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ResultInputDisabled = ResultInputDisabled;
          var React = require("react");
          var _form = require("@bgroup/ui/form");
          function ResultInputDisabled() {
            const [value, setValue] = React.useState("");
            function handleChange(event) {
              const {
                value: inputValue
              } = event.target;
              setValue(inputValue);
            }
            ;
            function handleSubmit(event) {
              event.preventDefault();
              // logic...
            }

            ;
            return React.createElement("form", {
              onSubmit: handleSubmit
            }, React.createElement(_form.BeyondInput, {
              type: "text",
              name: "name-disabled",
              label: "Insert a text...",
              onChange: handleChange,
              value: value,
              disabled: true
            }));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/result-input-error
      ******************************************/

      ims.set('./views/result-input-error', {
        hash: 2894186519,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ResultInputError = ResultInputError;
          var React = require("react");
          var _form = require("@bgroup/ui/form");
          function ResultInputError() {
            const [value, setValue] = React.useState("");
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
              name: "name-error",
              label: "Insert a text...",
              onChange: handleChange,
              value: value,
              hasError: true,
              errorMessage: "Error in input"
            }));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/result-input-loading
      ********************************************/

      ims.set('./views/result-input-loading', {
        hash: 1423872825,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ResultInputLoading = ResultInputLoading;
          var React = require("react");
          var _form = require("@bgroup/ui/form");
          function ResultInputLoading() {
            const [value, setValue] = React.useState("");
            function handleChange(event) {
              const {
                value: inputValue
              } = event.target;
              setValue(inputValue);
            }
            ;
            function handleSubmit(event) {
              event.preventDefault();
              // logic...
            }

            ;
            return React.createElement("form", {
              onSubmit: handleSubmit
            }, React.createElement(_form.BeyondInput, {
              type: "text",
              name: "name-loading",
              label: "Insert a text...",
              onChange: handleChange,
              value: value,
              loading: true,
              colorSpinner: "#fff"
            }));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/result-input-password
      *********************************************/

      ims.set('./views/result-input-password', {
        hash: 414249406,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ResultInputPassword = ResultInputPassword;
          var React = require("react");
          var _form = require("@bgroup/ui/form");
          function ResultInputPassword() {
            const [value, setValue] = React.useState("");
            function handleChange(event) {
              const {
                value: inputValue
              } = event.target;
              setValue(inputValue);
            }
            ;
            function handleSubmit(event) {
              event.preventDefault();
              // logic...
            }

            ;
            return React.createElement("form", {
              onSubmit: handleSubmit
            }, React.createElement(_form.BeyondInput, {
              type: "password",
              name: "name-password",
              label: "Insert a text...",
              onChange: handleChange,
              value: value,
              password: true
            }));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/result-input-with-icon
      **********************************************/

      ims.set('./views/result-input-with-icon', {
        hash: 3896870333,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ResultInputWithIcon = ResultInputWithIcon;
          var React = require("react");
          var _form = require("@bgroup/ui/form");
          function ResultInputWithIcon() {
            const [value, setValue] = React.useState("");
            function handleChange(event) {
              const {
                value: inputValue
              } = event.target;
              setValue(inputValue);
            }
            ;
            function handleSubmit(event) {
              event.preventDefault();
              // logic...
            }

            ;
            return React.createElement("form", {
              onSubmit: handleSubmit
            }, React.createElement(_form.BeyondInput, {
              type: "text",
              name: "name-icon",
              label: "Insert a text...",
              onChange: handleChange,
              value: value,
              icon: "user"
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/results
      *******************************/

      ims.set('./views/results', {
        hash: 2756230774,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Results = Results;
          var React = require("react");
          var _form = require("@bgroup/ui/form");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssRUFBRUE7WUFBSyxFQUFJLENBQ2hHO1VBRVQiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiaW1wbGVtZW50YXRpb24iLCJpbXBsZW1lbnRhdGlvbkVycm9yIiwiaW1wbGVtZW50YXRpb25JY29uIiwiaW1wbGVtZW50YXRpb25EaXNhYmxlZCIsImltcGxlbWVudGF0aW9uUGFzc3dvcmQiLCJpbXBsZW1lbnRhdGlvbkxvYWRpbmciLCJSZWFjdCIsIlRvYXN0Q29udGV4dFByb3ZpZGVyIiwiY2xhc3NOYW1lIiwiSGVhZGVyIiwiY29tcG9uZW50TmFtZSIsIkNvcHlhYmxlSW1wbGVtZW50YXRpb24iLCJSZXN1bHRzIiwiSW1wbGVtZW50YXRpb25SZXN1bHQiLCJjb2RlIiwiUmVzdWx0SW5wdXRFcnJvciIsIlJlc3VsdElucHV0V2l0aEljb24iLCJSZXN1bHRJbnB1dERpc2FibGVkIiwiUmVzdWx0SW5wdXRQYXNzd29yZCIsIlJlc3VsdElucHV0TG9hZGluZyIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiaW5wdXRWYWx1ZSIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwib25TdWJtaXQiLCJCZXlvbmRJbnB1dCIsInR5cGUiLCJuYW1lIiwibGFiZWwiLCJvbkNoYW5nZSIsImRpc2FibGVkIiwiaGFzRXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwiY29sb3JTcGlubmVyIiwicGFzc3dvcmQiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ3aWRnZXQvdHMvY29udHJvbGxlci50cyIsIndpZGdldC90cy92aWV3cy9pbXBsZW1lbnRhdGlvbnMudHMiLCJ3aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL3Jlc3VsdC1pbnB1dC1kaXNhYmxlZC50c3giLCJ3aWRnZXQvdHMvdmlld3MvcmVzdWx0LWlucHV0LWVycm9yLnRzeCIsIndpZGdldC90cy92aWV3cy9yZXN1bHQtaW5wdXQtbG9hZGluZy50c3giLCJ3aWRnZXQvdHMvdmlld3MvcmVzdWx0LWlucHV0LXBhc3N3b3JkLnRzeCIsIndpZGdldC90cy92aWV3cy9yZXN1bHQtaW5wdXQtd2l0aC1pY29uLnRzeCIsIndpZGdldC90cy92aWV3cy9yZXN1bHRzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=