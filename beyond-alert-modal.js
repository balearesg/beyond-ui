System.register(["@beyond-js/widgets@0.1.1/render", "@beyond-js/kernel@0.1.2/bundle", "@beyond-js/react-widgets@18.20.3/page", "react@18.2.0", "@beyond/ui@1.0.0/header", "@beyond/ui@1.0.0/toast", "@beyond/ui@1.0.0/copyable-implementation", "@beyond/ui@1.0.0/modal"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondUi100Modal) {
      dependency_7 = _beyondUi100Modal;
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
          "vspecifier": "@beyond/ui@1.0.0/beyond-alert-modal"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['react', dependency_3], ['@beyond/ui/header', dependency_4], ['@beyond/ui/toast', dependency_5], ['@beyond/ui/copyable-implementation', dependency_6], ['@beyond/ui/modal', dependency_7]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "beyond-alert-modal",
        "vspecifier": "@beyond/ui@1.0.0/beyond-alert-modal",
        "is": "page",
        "route": "/components/beyond-alert-modal"
      }]);
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
        hash: 1420036018,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.implementation = void 0;
          const implementation = `
import * as React from 'react';
import { BeyondAlertModal } from '@beyond/ui/modal';

export function Results() {
	const [show, setShow] = React.useState(false);

	function handleModal() {
		setShow(!show);
	}

	return (
		<>
			<button className="action-button" onClick={handleModal}>
				Display Modal!
			</button>
			{show && <BeyondAlertModal onConfirm={handleModal} className="beauty-modal" onClose={handleModal}>
				<div>
					<p>This is a normal modal ❤</p>
				</div>
			</BeyondAlertModal>}
		</>
	);
}`;
          exports.implementation = implementation;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1899406578,
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
              componentName: "Alert Modal"
            }), React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Import:"), React.createElement(_copyableImplementation.CopyableImplementation, null, `import { BeyondConfirmModal } from '@beyond/ui/modal';`)), React.createElement("div", {
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
        hash: 2706298205,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Results = Results;
          var React = require("react");
          var _modal = require("@beyond/ui/modal");
          function Results() {
            const [show, setShow] = React.useState(false);
            function handleModal() {
              setShow(!show);
            }
            return React.createElement(React.Fragment, null, React.createElement("button", {
              className: "action-button",
              onClick: handleModal
            }, "Display Modal!"), show && React.createElement(_modal.BeyondAlertModal, {
              onConfirm: handleModal,
              className: "beauty-modal",
              onClose: handleModal
            }, React.createElement("div", null, React.createElement("p", null, "This is a normal modal \u2764"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFFTztVQUFVLE1BQ1hBLFVBQVcsU0FBUUMsK0JBQXlCO1lBQzlDLElBQUlDLE1BQU07Y0FDTixPQUFPQyxXQUFJO1lBQ2Y7O1VBQ0hDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JNLE1BQU1DLGNBQWMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF1QjVCO1VBQUNEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCSDtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFTztVQUFVLFNBQ1JELElBQUk7WUFDWixPQUNDRyxvQkFBQ0MsMkJBQW9CLFFBQ3BCRDtjQUFLRSxTQUFTLEVBQUM7WUFBTSxHQUNwQkYsb0JBQUNHLGNBQU07Y0FBQ0MsYUFBYSxFQUFDO1lBQWEsRUFBRyxFQUN0Q0o7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCRiwwQ0FBZ0IsRUFDaEJBLG9CQUFDSyw4Q0FBc0IsUUFBRSx3REFBd0QsQ0FBMEIsQ0FDdEcsRUFDTkw7Y0FBS0UsU0FBUyxFQUFDO1lBQTBCLEdBQ3hDRjtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJGLG1EQUF5QixFQUN6QkEsb0JBQUNLLDhDQUFzQixRQUFFTiw4QkFBYyxDQUEwQixDQUM1RCxFQUVOQztjQUFLRSxTQUFTLEVBQUM7WUFBa0IsR0FDaENGLDBDQUFnQixFQUNoQkEsb0JBQUNNLGdCQUFPLE9BQUcsQ0FDTixDQUNELENBQ0QsQ0FDZ0I7VUFFekI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JBO1VBQ0E7VUFFTSxTQUFVQSxPQUFPO1lBQ3RCLE1BQU0sQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR1IsS0FBSyxDQUFDUyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRTdDLFNBQVNDLFdBQVc7Y0FDbkJGLE9BQU8sQ0FBQyxDQUFDRCxJQUFJLENBQUM7WUFDZjtZQUVBLE9BQ0NQLDBDQUNDQTtjQUFRRSxTQUFTLEVBQUMsZUFBZTtjQUFDUyxPQUFPLEVBQUVEO1lBQVcsb0JBRTdDLEVBQ1JILElBQUksSUFBSVAsb0JBQUNZLHVCQUFnQjtjQUFDQyxTQUFTLEVBQUVILFdBQVc7Y0FBRVIsU0FBUyxFQUFDLGNBQWM7Y0FBQ1ksT0FBTyxFQUFFSjtZQUFXLEdBQy9GVixpQ0FDQ0EsK0RBQStCLENBQzFCLENBQ1ksQ0FDakI7VUFFTCIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJpbXBsZW1lbnRhdGlvbiIsIlJlYWN0IiwiVG9hc3RDb250ZXh0UHJvdmlkZXIiLCJjbGFzc05hbWUiLCJIZWFkZXIiLCJjb21wb25lbnROYW1lIiwiQ29weWFibGVJbXBsZW1lbnRhdGlvbiIsIlJlc3VsdHMiLCJzaG93Iiwic2V0U2hvdyIsInVzZVN0YXRlIiwiaGFuZGxlTW9kYWwiLCJvbkNsaWNrIiwiQmV5b25kQWxlcnRNb2RhbCIsIm9uQ29uZmlybSIsIm9uQ2xvc2UiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInByb2plY3QvbW9kdWxlcy9tb2RhbC92aWV3cy9hbGVydC93aWRnZXQvdHMvY29udHJvbGxlci50cyIsInByb2plY3QvbW9kdWxlcy9tb2RhbC92aWV3cy9hbGVydC93aWRnZXQvdHMvdmlld3MvaW1wbGVtZW50YXRpb24udHMiLCJwcm9qZWN0L21vZHVsZXMvbW9kYWwvdmlld3MvYWxlcnQvd2lkZ2V0L3RzL3ZpZXdzL2luZGV4LnRzeCIsInByb2plY3QvbW9kdWxlcy9tb2RhbC92aWV3cy9hbGVydC93aWRnZXQvdHMvdmlld3MvcmVzdWx0cy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXX0=