System.register(["@beyond-js/widgets@0.1.1/render", "@beyond-js/kernel@0.1.2/bundle", "@beyond-js/react-widgets@18.20.3/base", "react@18.2.0", "@beyond/ui@1.0.0/header", "@beyond/ui@1.0.0/toast", "@beyond/ui@1.0.0/copyable-implementation", "@beyond/ui@1.0.0/input-controller", "@beyond-js/kernel@0.1.2/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Controller, Widget, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Widget: void 0
  });
  return {
    setters: [function (_beyondJsWidgets011Render) {
      dependency_0 = _beyondJsWidgets011Render;
    }, function (_beyondJsKernel012Bundle) {
      dependency_1 = _beyondJsKernel012Bundle;
    }, function (_beyondJsReactWidgets18203Base) {
      dependency_2 = _beyondJsReactWidgets18203Base;
    }, function (_react) {
      dependency_3 = _react;
    }, function (_beyondUi100Header) {
      dependency_4 = _beyondUi100Header;
    }, function (_beyondUi100Toast) {
      dependency_5 = _beyondUi100Toast;
    }, function (_beyondUi100CopyableImplementation) {
      dependency_6 = _beyondUi100CopyableImplementation;
    }, function (_beyondUi100InputController) {
      dependency_7 = _beyondUi100InputController;
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
          "vspecifier": "@beyond/ui@1.0.0/beyond-input-controller"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/base', dependency_2], ['react', dependency_3], ['@beyond/ui/header', dependency_4], ['@beyond/ui/toast', dependency_5], ['@beyond/ui/copyable-implementation', dependency_6], ['@beyond/ui/input-controller', dependency_7], ['@beyond-js/kernel/styles', dependency_8]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "beyond-input-controller",
        "vspecifier": "@beyond/ui@1.0.0/beyond-input-controller",
        "is": "page",
        "route": "/components/beyond-input-controller"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/ui@1.0.0/beyond-input-controller');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 8577895,
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
              return _views.Widget;
            }
          }
          exports.Controller = Controller;
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/basic-template
      **************************************/

      ims.set('./views/basic-template', {
        hash: 1730820643,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.basicTemplate = void 0;
          const basicTemplate = [{
            label: 'Input radio',
            name: 'radio',
            events: {},
            options: [{
              type: 'radioItem',
              label: 'Male',
              value: '2'
            }, {
              type: 'radioItem',
              label: 'Woman',
              value: '1'
            }],
            placeholder: 'radio',
            className: 'input-control',
            data: null,
            type: 'radio'
          }, {
            label: 'Input checkbox',
            name: 'checkbox',
            events: {},
            options: [{
              type: 'checkItem',
              label: 'Argentina',
              value: '2'
            }, {
              type: 'checkItem',
              label: 'Brasil',
              value: '1'
            }],
            placeholder: 'checkbox',
            className: 'input-control',
            data: null,
            type: 'checkbox'
          }, {
            label: 'Input text',
            name: 'text',
            events: {},
            options: '',
            placeholder: 'text',
            className: 'input-control',
            data: null,
            type: 'text'
          }, {
            label: 'Input email',
            name: 'email',
            events: {},
            placeholder: 'email',
            className: 'input-control',
            data: null,
            type: 'email'
          }, {
            label: 'Input number',
            name: 'number',
            events: {},
            placeholder: 'number',
            className: 'input-control',
            data: null,
            type: 'number'
          }, {
            label: 'Input tel',
            name: 'tel',
            events: {},
            placeholder: 'tel',
            className: 'input-control',
            data: null,
            type: 'tel'
          }, {
            label: 'Input password',
            name: 'password',
            events: {},
            placeholder: 'password',
            className: 'input-control',
            data: null,
            type: 'password'
          }];
          exports.basicTemplate = basicTemplate;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/implementations
      ***************************************/

      ims.set('./views/implementations', {
        hash: 2462016764,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.template = exports.component = void 0;
          const component = `
<Component template={template} />
`;
          exports.component = component;
          const template = `
[
	{
		label: 'Input radio',
		name: 'radio',
		events: {},
		options: [
			{ type: 'radioItem', label: 'Male', value: '2' },
			{ type: 'radioItem', label: 'Woman', value: '1' },
		],
		placeholder: 'radio',
		className: 'input-control',
		data: null,
		type: 'radio',
	},

	{
		label: 'Input checkbox',
		name: 'checkbox',
		events: {},
		options: [
			{ type: 'checkItem', label: 'Argentina', value: '2' },
			{ type: 'checkItem', label: 'Brasil', value: '1' },
		],
		placeholder: 'checkbox',
		className: 'input-control',
		data: null,
		type: 'checkbox',
	},

	{
		label: 'Input text',
		name: 'text',
		events: {},
		options: '',
		placeholder: 'text',
		className: 'input-control',
		data: null,
		type: 'text',
	},
	{
		label: 'Input email',
		name: 'email',
		events: {},
		placeholder: 'email',
		className: 'input-control',
		data: null,
		type: 'email',
	},
	{
		label: 'Input number',
		name: 'number',
		events: {},
		placeholder: 'number',
		className: 'input-control',
		data: null,
		type: 'number',
	},
	{
		label: 'Input tel',
		name: 'tel',
		events: {},
		placeholder: 'tel',
		className: 'input-control',
		data: null,
		type: 'tel',
	},
	{
		label: 'Input password',
		name: 'password',
		events: {},
		placeholder: 'password',
		className: 'input-control',
		data: null,
		type: 'password',
	},
];`;
          exports.template = template;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1386610487,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Widget = Widget;
          var React = require("react");
          var _header = require("@beyond/ui/header");
          var _toast = require("@beyond/ui/toast");
          var _copyableImplementation = require("@beyond/ui/copyable-implementation");
          var _implementations = require("./implementations");
          var _results = require("./results");
          /*bundle*/
          function Widget() {
            return React.createElement(_toast.ToastContextProvider, null, React.createElement("div", {
              className: "view input-controller-view"
            }, React.createElement(_header.Header, {
              componentName: "Checkbox"
            }), React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Import: "), React.createElement(_copyableImplementation.CopyableImplementation, null, `import {InputController} from '@beyond/ui/input-controller';`)), React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Implementation"), React.createElement(_copyableImplementation.CopyableImplementation, null, _implementations.component)), React.createElement("div", {
              className: 'component-implementation'
            }, React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "template.json"), React.createElement(_copyableImplementation.CopyableImplementation, null, _implementations.template)), React.createElement("div", {
              className: "component-result"
            }, React.createElement("h3", null, "Result:"), React.createElement(_results.Results, null)))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/results
      *******************************/

      ims.set('./views/results', {
        hash: 3196607380,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Results = Results;
          var React = require("react");
          var _inputController = require("@beyond/ui/input-controller");
          var _basicTemplate = require("./basic-template");
          function Results() {
            return React.createElement(_inputController.Component, {
              template: _basicTemplate.basicTemplate
            });
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "Widget",
        "name": "Widget"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Widget') && _export("Widget", Widget = require ? require('./views/index').Widget : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNEVyQjtVQUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoRko7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBRU87VUFBVSxTQUNQRCxNQUFNO1lBQ2YsT0FDQ2Msb0JBQUNDLDJCQUFvQixRQUNwQkQ7Y0FBS0osU0FBUyxFQUFDO1lBQTRCLEdBQzFDSSxvQkFBQ0UsY0FBTTtjQUFDQyxhQUFhLEVBQUM7WUFBVSxFQUFHLEVBQ25DSDtjQUFLSixTQUFTLEVBQUM7WUFBZ0IsR0FDOUJJLDJDQUFpQixFQUNqQkEsb0JBQUNJLDhDQUFzQixRQUFFLDhEQUE4RCxDQUEwQixDQUM1RyxFQUNOSjtjQUFLSixTQUFTLEVBQUM7WUFBZ0IsR0FDOUJJLGlEQUF1QixFQUN2QkEsb0JBQUNJLDhDQUFzQixRQUFFTiwwQkFBUyxDQUEwQixDQUN2RCxFQUNORTtjQUFLSixTQUFTLEVBQUM7WUFBMEIsR0FDeENJO2NBQUtKLFNBQVMsRUFBQztZQUFnQixHQUM5QkksZ0RBQXNCLEVBQ3RCQSxvQkFBQ0ksOENBQXNCLFFBQUVMLHlCQUFRLENBQTBCLENBQ3RELEVBQ05DO2NBQUtKLFNBQVMsRUFBQztZQUFrQixHQUNoQ0ksMENBQWdCLEVBQ2hCQSxvQkFBQ0ssZ0JBQU8sT0FBRyxDQUNOLENBQ0QsQ0FFRCxDQUNnQjtVQUV6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0E7VUFDQTtVQUNBO1VBRU0sU0FBVUEsT0FBTztZQUN0QixPQUFPTCxvQkFBQ00sMEJBQVM7Y0FBQ1AsUUFBUSxFQUFFWDtZQUFhLEVBQUk7VUFDOUMiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiZXhwb3J0cyIsImJhc2ljVGVtcGxhdGUiLCJsYWJlbCIsIm5hbWUiLCJldmVudHMiLCJvcHRpb25zIiwidHlwZSIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJjbGFzc05hbWUiLCJkYXRhIiwiY29tcG9uZW50IiwidGVtcGxhdGUiLCJSZWFjdCIsIlRvYXN0Q29udGV4dFByb3ZpZGVyIiwiSGVhZGVyIiwiY29tcG9uZW50TmFtZSIsIkNvcHlhYmxlSW1wbGVtZW50YXRpb24iLCJSZXN1bHRzIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJwcm9qZWN0L21vZHVsZXMvaW5wdXQtY29udHJvbGxlci92aWV3L3dpZGdldC90cy9jb250cm9sbGVyLnRzIiwicHJvamVjdC9tb2R1bGVzL2lucHV0LWNvbnRyb2xsZXIvdmlldy93aWRnZXQvdHMvdmlld3MvYmFzaWMtdGVtcGxhdGUudHMiLCJwcm9qZWN0L21vZHVsZXMvaW5wdXQtY29udHJvbGxlci92aWV3L3dpZGdldC90cy92aWV3cy9pbXBsZW1lbnRhdGlvbnMudHMiLCJwcm9qZWN0L21vZHVsZXMvaW5wdXQtY29udHJvbGxlci92aWV3L3dpZGdldC90cy92aWV3cy9pbmRleC50c3giLCJwcm9qZWN0L21vZHVsZXMvaW5wdXQtY29udHJvbGxlci92aWV3L3dpZGdldC90cy92aWV3cy9yZXN1bHRzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF19