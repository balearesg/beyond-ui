System.register(["@beyond-js/widgets@0.1.2/render", "@beyond-js/kernel@0.1.7/bundle", "@beyond-js/react-widgets@18.21.1/page", "react@18.2.0", "@bgroup/ui@0.0.21/form", "@bgroup/ui@0.0.21/header", "@bgroup/ui@0.0.21/copyable-implementation", "@bgroup/ui@0.0.21/toast", "@bgroup/ui@0.0.21/implementation-result", "@beyond-js/kernel@0.1.7/styles"], function (_export, _context) {
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
    }, function (_bgroupUi0021Form) {
      dependency_4 = _bgroupUi0021Form;
    }, function (_bgroupUi0021Header) {
      dependency_5 = _bgroupUi0021Header;
    }, function (_bgroupUi0021CopyableImplementation) {
      dependency_6 = _bgroupUi0021CopyableImplementation;
    }, function (_bgroupUi0021Toast) {
      dependency_7 = _bgroupUi0021Toast;
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
          "vspecifier": "@bgroup/ui@0.0.21/beyond-button"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['react', dependency_3], ['@bgroup/ui/form', dependency_4], ['@bgroup/ui/header', dependency_5], ['@bgroup/ui/copyable-implementation', dependency_6], ['@bgroup/ui/toast', dependency_7], ['@bgroup/ui/implementation-result', dependency_8], ['@beyond-js/kernel/styles', dependency_9]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "beyond-widget",
        "vspecifier": "@bgroup/ui@0.0.21/beyond-button",
        "is": "page",
        "route": "/components/beyond-button"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/ui@0.0.21/beyond-button');
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

      /*************************************
      INTERNAL MODULE: ./views/button-border
      *************************************/

      ims.set('./views/button-border', {
        hash: 1695944781,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ResultsBorder = ResultsBorder;
          var _react = require("react");
          var _form = require("@bgroup/ui/form");
          function ResultsBorder() {
            return _react.default.createElement(_form.BeyondButton, {
              className: "btn btn-border"
            }, "Beyond Button border");
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/button-cancel
      *************************************/

      ims.set('./views/button-cancel', {
        hash: 3958965513,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ResultsCancel = ResultsCancel;
          var _react = require("react");
          var _form = require("@bgroup/ui/form");
          function ResultsCancel() {
            return _react.default.createElement(_form.BeyondButton, {
              className: "btn btn-cancel"
            }, "Beyond Button cancel");
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/button-secondary
      ****************************************/

      ims.set('./views/button-secondary', {
        hash: 2576662872,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ResultsSecondary = ResultsSecondary;
          var _react = require("react");
          var _form = require("@bgroup/ui/form");
          function ResultsSecondary() {
            return _react.default.createElement(_form.BeyondButton, {
              className: "btn btn-secondary"
            }, "Beyond Button secondary");
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/implementation
      **************************************/

      ims.set('./views/implementation', {
        hash: 2750882032,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.implementationSpinner = exports.implementationSecondary = exports.implementationIcon = exports.implementationCancel = exports.implementationBorder = exports.implementation = void 0;
          const implementation = `
export function ButtonImplementation() {

	function handleChange(event) {
		event.stopPropagation();
		// logic...
	};
	
	return (
		<BeyondButton className="btn btn-primary" onClick={handleChange}>Beyond Button</BeyondButton>
	);
}`;
          exports.implementation = implementation;
          const implementationSpinner = `
<BeyondButton
	className="btn btn-primary"
	loading={true}
	colorSpinner="#fff"
	>
	Beyond Button with spinner
</BeyondButton>
}`;
          exports.implementationSpinner = implementationSpinner;
          const implementationIcon = `
<BeyondButton
	className="btn btn-primary"
	icon="delete"
	>
	Button icon
</BeyondButton>
}`;
          exports.implementationIcon = implementationIcon;
          const implementationSecondary = `
<BeyondButton className="btn btn-secondary">
	Button secondary
</BeyondButton>
}`;
          exports.implementationSecondary = implementationSecondary;
          const implementationBorder = `
<BeyondButton className="btn btn-border">
	Button border
</BeyondButton>
}`;
          exports.implementationBorder = implementationBorder;
          const implementationCancel = `
<BeyondButton className="btn btn-cancel">
	Button cancel
</BeyondButton>
}`;
          exports.implementationCancel = implementationCancel;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3334378443,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _header = require("@bgroup/ui/header");
          var _copyableImplementation = require("@bgroup/ui/copyable-implementation");
          var _toast = require("@bgroup/ui/toast");
          var _results = require("./results");
          var _implementation = require("./implementation");
          var _implementationResult = require("@bgroup/ui/implementation-result");
          var _resultSipnner = require("./result-sipnner");
          var _resultIcon = require("./result-icon");
          var _buttonSecondary = require("./button-secondary");
          var _buttonBorder = require("./button-border");
          var _buttonCancel = require("./button-cancel");
          /*bundle*/
          function View() {
            return React.createElement(_toast.ToastContextProvider, null, React.createElement("div", {
              className: "view"
            }, React.createElement(_header.Header, {
              componentName: "Checkbox"
            }), React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Import: "), React.createElement(_copyableImplementation.CopyableImplementation, null, `import { BeyondButton } from "@bgroup/form";`)), React.createElement("div", {
              className: 'component-implementation'
            }, React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Implementation:"), React.createElement(_copyableImplementation.CopyableImplementation, null, _implementation.implementation)), React.createElement("div", {
              className: "component-result"
            }, React.createElement("h3", null, "Result button primary:"), React.createElement(_results.Results, null), React.createElement("h3", null, "Case button secondary:"), React.createElement(_implementationResult.ImplementationResult, {
              code: _implementation.implementationSecondary
            }, React.createElement(_buttonSecondary.ResultsSecondary, null)), React.createElement("h3", null, "Case button border:"), React.createElement(_implementationResult.ImplementationResult, {
              code: _implementation.implementationBorder
            }, React.createElement(_buttonBorder.ResultsBorder, null)), React.createElement("h3", null, "Case button cancel:"), React.createElement(_implementationResult.ImplementationResult, {
              code: _implementation.implementationCancel
            }, React.createElement(_buttonCancel.ResultsCancel, null)), React.createElement("h3", null, "Case button loading:"), React.createElement(_implementationResult.ImplementationResult, {
              code: _implementation.implementationSpinner
            }, React.createElement(_resultSipnner.ResultsSpinner, null)), React.createElement("h3", null, "Case button with icon:"), React.createElement(_implementationResult.ImplementationResult, {
              code: _implementation.implementationIcon
            }, React.createElement(_resultIcon.ResultIcon, null))))));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/result-icon
      ***********************************/

      ims.set('./views/result-icon', {
        hash: 2717346830,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ResultIcon = ResultIcon;
          var _react = require("react");
          var _form = require("@bgroup/ui/form");
          function ResultIcon() {
            function handleChange(event) {
              event.stopPropagation();
              // logic...
            }

            return _react.default.createElement(_form.BeyondButton, {
              className: "btn btn-primary",
              icon: "delete",
              onClick: handleChange
            }, "Button with icon");
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/result-sipnner
      **************************************/

      ims.set('./views/result-sipnner', {
        hash: 702096365,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ResultsSpinner = ResultsSpinner;
          var _react = require("react");
          var _form = require("@bgroup/ui/form");
          function ResultsSpinner() {
            function handleChange(event) {
              event.stopPropagation();
              // logic...
            }

            return _react.default.createElement(_form.BeyondButton, {
              className: "btn btn-primary spinner",
              loading: true,
              colorSpinner: "#fff",
              onClick: handleChange
            }, "Beyond Button with spinner");
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/results
      *******************************/

      ims.set('./views/results', {
        hash: 120515186,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Results = Results;
          var _react = require("react");
          var _form = require("@bgroup/ui/form");
          function Results() {
            function handleChange(event) {
              event.stopPropagation();
              // logic...
            }

            ;
            return _react.default.createElement(_form.BeyondButton, {
              className: "btn btn-primary",
              onClick: handleChange
            }, "Beyond Button");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsT0FDRXRCLDZCQUFDQyxrQkFBWTtjQUNYQyxTQUFTLEVBQUMsaUJBQWlCO2NBQzNCcUIsSUFBSSxFQUFDLFFBQVE7Y0FDYkMsT0FBTyxFQUFFSjtZQUFZLHNCQUdSO1VBRW5COzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pCQTtVQUNBO1VBRU0sU0FBVUYsY0FBYztZQUM1QixTQUFTRSxZQUFZLENBQUNDLEtBQUs7Y0FDekJBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCO1lBQ0Y7O1lBQ0EsT0FDRXRCLDZCQUFDQyxrQkFBWTtjQUNYQyxTQUFTLEVBQUMseUJBQXlCO2NBQ25DdUIsT0FBTyxFQUFFLElBQUk7Y0FDYkMsWUFBWSxFQUFDLE1BQU07Y0FDbkJGLE9BQU8sRUFBRUo7WUFBWSxnQ0FHUjtVQUVuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQkE7VUFDQTtVQUVNLFNBQVVMLE9BQU87WUFDdEIsU0FBU0ssWUFBWSxDQUFDQyxLQUFLO2NBQzFCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QjtZQUNEOztZQUFDO1lBQ0QsT0FDQ3RCLDZCQUFDQyxrQkFBWTtjQUFDQyxTQUFTLEVBQUMsaUJBQWlCO2NBQUNzQixPQUFPLEVBQUVKO1lBQVksbUJBQThCO1VBRS9GIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIlJlc3VsdHNCb3JkZXIiLCJSZWFjdCIsIkJleW9uZEJ1dHRvbiIsImNsYXNzTmFtZSIsIlJlc3VsdHNDYW5jZWwiLCJSZXN1bHRzU2Vjb25kYXJ5IiwiaW1wbGVtZW50YXRpb24iLCJpbXBsZW1lbnRhdGlvblNwaW5uZXIiLCJpbXBsZW1lbnRhdGlvbkljb24iLCJpbXBsZW1lbnRhdGlvblNlY29uZGFyeSIsImltcGxlbWVudGF0aW9uQm9yZGVyIiwiaW1wbGVtZW50YXRpb25DYW5jZWwiLCJUb2FzdENvbnRleHRQcm92aWRlciIsIkhlYWRlciIsImNvbXBvbmVudE5hbWUiLCJDb3B5YWJsZUltcGxlbWVudGF0aW9uIiwiUmVzdWx0cyIsIkltcGxlbWVudGF0aW9uUmVzdWx0IiwiY29kZSIsIlJlc3VsdHNTcGlubmVyIiwiUmVzdWx0SWNvbiIsImhhbmRsZUNoYW5nZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiaWNvbiIsIm9uQ2xpY2siLCJsb2FkaW5nIiwiY29sb3JTcGlubmVyIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ3aWRnZXQvdHMvY29udHJvbGxlci50cyIsIndpZGdldC90cy92aWV3cy9idXR0b24tYm9yZGVyLnRzeCIsIndpZGdldC90cy92aWV3cy9idXR0b24tY2FuY2VsLnRzeCIsIndpZGdldC90cy92aWV3cy9idXR0b24tc2Vjb25kYXJ5LnRzeCIsIndpZGdldC90cy92aWV3cy9pbXBsZW1lbnRhdGlvbi50cyIsIndpZGdldC90cy92aWV3cy9pbmRleC50c3giLCJ3aWRnZXQvdHMvdmlld3MvcmVzdWx0LWljb24udHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL3Jlc3VsdC1zaXBubmVyLnRzeCIsIndpZGdldC90cy92aWV3cy9yZXN1bHRzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=