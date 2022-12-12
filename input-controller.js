System.register(["@beyond-js/kernel@0.1.2/bundle", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, Component, inputComponents, __beyond_pkg, hmr;
  _export({
    Component: void 0,
    inputComponents: void 0
  });
  return {
    setters: [function (_beyondJsKernel012Bundle) {
      dependency_0 = _beyondJsKernel012Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-widgets", "18.20.3"], ["@beyond-js/widgets", "0.1.1"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.5.4"], ["@beyond/ui", "1.0.0"], ["@beyond/ui", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond/ui@1.0.0/input-controller"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3919871860,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Component = Component;
          var React = require("react");
          var _inputComponents = require("./input-components");
          /*bundle*/
          function Component({
            template
          }) {
            const isTemplateAnArray = Array.isArray(template);
            const SingleInput = (!isTemplateAnArray && _inputComponents.inputComponents[template.type]) ?? _inputComponents.inputComponents.default;
            const inputs = isTemplateAnArray && template.map(input => {
              const Element = _inputComponents.inputComponents[input.type] ?? _inputComponents.inputComponents.default;
              return React.createElement(Element, {
                key: input.name,
                ...input,
                _components: _inputComponents.inputComponents
              });
            });
            const output = Array.isArray(template) ? inputs : React.createElement(SingleInput, {
              ...template
            });
            return React.createElement(React.Fragment, null, output);
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./input-components
      **********************************/

      ims.set('./input-components', {
        hash: 2354356184,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.inputComponents = void 0;
          var _default = require("./inputs/default");
          var _select = require("./inputs/select");
          var _textarea = require("./inputs/textarea");
          var _checkAndRadios = require("./inputs/check-and-radios");
          class InputComponents {
            select = _select.Select;
            textarea = _textarea.TextArea;
            radio = _checkAndRadios.CheckAndRadios;
            radioItem = _default.Input;
            checkbox = _checkAndRadios.CheckAndRadios;
            checkItem = _default.Input;
            default = _default.Input;
            setComponent(type, component) {
              this[type] = component;
            }
          }
          /*bundle*/
          const inputComponents = new InputComponents();
          exports.inputComponents = inputComponents;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./inputs/check-and-radios
      *****************************************/

      ims.set('./inputs/check-and-radios', {
        hash: 3403928382,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CheckAndRadios = CheckAndRadios;
          var React = require("react");
          function CheckAndRadios(props) {
            const {
              _components
            } = props;
            const output = props.options.map(option => {
              const Element = _components[option.type] ?? _components.default;
              const type = option.type === 'radioItem' ? 'radio' : 'checkbox';
              option = {
                ...option,
                type
              };
              return React.createElement(Element, {
                key: option.value,
                ...option
              });
            });
            return React.createElement(React.Fragment, null, output);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./inputs/default
      ********************************/

      ims.set('./inputs/default', {
        hash: 1333658770,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Input = Input;
          var React = require("react");
          function Input(props) {
            const {
              label,
              events,
              ...othersSelectProps
            } = props;
            const id = othersSelectProps?.id ?? othersSelectProps.name;
            return React.createElement("label", {
              htmlFor: id
            }, React.createElement("span", null, label), React.createElement("input", {
              ...othersSelectProps,
              ...events,
              id: id
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./inputs/select
      *******************************/

      ims.set('./inputs/select', {
        hash: 1243619150,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Select = Select;
          var React = require("react");
          function Select(props) {
            const {
              options,
              label,
              events,
              ...othersSelectProps
            } = props;
            const optionsElements = options.length > 0 && options.map(opt => React.createElement("option", {
              key: opt,
              value: opt
            }, opt));
            const id = othersSelectProps?.id ?? othersSelectProps.name;
            return React.createElement("label", {
              htmlFor: id
            }, React.createElement("span", null, label), React.createElement("select", {
              ...othersSelectProps,
              id: id,
              ...events
            }, optionsElements));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./inputs/textarea
      *********************************/

      ims.set('./inputs/textarea', {
        hash: 562440940,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TextArea = TextArea;
          var React = require("react");
          function TextArea(props) {
            const {
              label,
              events,
              ...othersSelectProps
            } = props;
            const id = othersSelectProps?.id ?? othersSelectProps.name;
            return React.createElement("label", {
              htmlFor: id
            }, React.createElement("span", null, label), React.createElement("textarea", {
              ...othersSelectProps,
              ...events,
              id: id
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Component",
        "name": "Component"
      }, {
        "im": "./input-components",
        "from": "inputComponents",
        "name": "inputComponents"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Component') && _export("Component", Component = require ? require('./index').Component : value);
        (require || prop === 'inputComponents') && _export("inputComponents", inputComponents = require ? require('./input-components').inputComponents : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bnQiLCJ0ZW1wbGF0ZSIsImlzVGVtcGxhdGVBbkFycmF5IiwiQXJyYXkiLCJpc0FycmF5IiwiU2luZ2xlSW5wdXQiLCJpbnB1dENvbXBvbmVudHMiLCJ0eXBlIiwiZGVmYXVsdCIsImlucHV0cyIsIm1hcCIsImlucHV0IiwiRWxlbWVudCIsIlJlYWN0Iiwia2V5IiwibmFtZSIsIl9jb21wb25lbnRzIiwib3V0cHV0IiwiSW5wdXRDb21wb25lbnRzIiwic2VsZWN0IiwiU2VsZWN0IiwidGV4dGFyZWEiLCJUZXh0QXJlYSIsInJhZGlvIiwiQ2hlY2tBbmRSYWRpb3MiLCJyYWRpb0l0ZW0iLCJJbnB1dCIsImNoZWNrYm94IiwiY2hlY2tJdGVtIiwic2V0Q29tcG9uZW50IiwiY29tcG9uZW50IiwiZXhwb3J0cyIsInByb3BzIiwib3B0aW9ucyIsIm9wdGlvbiIsInZhbHVlIiwibGFiZWwiLCJldmVudHMiLCJvdGhlcnNTZWxlY3RQcm9wcyIsImlkIiwiaHRtbEZvciIsIm9wdGlvbnNFbGVtZW50cyIsImxlbmd0aCIsIm9wdCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsicHJvamVjdC9tb2R1bGVzL2lucHV0LWNvbnRyb2xsZXIvY29tcG9uZW50L2NvZGUvdHMvaW5kZXgudHN4IiwicHJvamVjdC9tb2R1bGVzL2lucHV0LWNvbnRyb2xsZXIvY29tcG9uZW50L2NvZGUvdHMvaW5wdXQtY29tcG9uZW50cy50cyIsInByb2plY3QvbW9kdWxlcy9pbnB1dC1jb250cm9sbGVyL2NvbXBvbmVudC9jb2RlL3RzL2lucHV0cy9jaGVjay1hbmQtcmFkaW9zLnRzeCIsInByb2plY3QvbW9kdWxlcy9pbnB1dC1jb250cm9sbGVyL2NvbXBvbmVudC9jb2RlL3RzL2lucHV0cy9kZWZhdWx0LnRzeCIsInByb2plY3QvbW9kdWxlcy9pbnB1dC1jb250cm9sbGVyL2NvbXBvbmVudC9jb2RlL3RzL2lucHV0cy9zZWxlY3QudHN4IiwicHJvamVjdC9tb2R1bGVzL2lucHV0LWNvbnRyb2xsZXIvY29tcG9uZW50L2NvZGUvdHMvaW5wdXRzL3RleHRhcmVhLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=