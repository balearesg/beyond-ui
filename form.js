System.register(["@beyond-js/kernel@0.1.2/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.2/routing", "@beyond/ui@1.0.0/icon", "@beyond-js/kernel@0.1.2/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, BeyondButton, BeyondCheckbox, BeyondInput, BeyondSwitch, BeyondTextarea, __beyond_pkg, hmr;
  _export({
    BeyondButton: void 0,
    BeyondCheckbox: void 0,
    BeyondInput: void 0,
    BeyondSwitch: void 0,
    BeyondTextarea: void 0
  });
  return {
    setters: [function (_beyondJsKernel012Bundle) {
      dependency_0 = _beyondJsKernel012Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_beyondJsKernel012Routing) {
      dependency_2 = _beyondJsKernel012Routing;
    }, function (_beyondUi100Icon) {
      dependency_3 = _beyondUi100Icon;
    }, function (_beyondJsKernel012Styles) {
      dependency_4 = _beyondJsKernel012Styles;
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
          "vspecifier": "@beyond/ui@1.0.0/form"
        },
        "type": "code",
        "name": "form"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['@beyond/ui/icon', dependency_3], ['@beyond-js/kernel/styles', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/ui@1.0.0/form');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./button
      ************************/
      ims.set('./button', {
        hash: 2649849007,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondButton = BeyondButton;
          var React = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _icon = require("@beyond/ui/icon");
          /*bundle*/
          function BeyondButton(props) {
            const {
              className,
              onClick,
              data,
              label,
              children,
              icon
            } = props;
            const onClickButton = event => {
              if (onClick && typeof onClick === 'function') {
                onClick(event);
                return;
              }
              if (props.navigate) _routing.routing.pushState(`${props.navigate}`);
            };
            props.title ? props['data-tippy-content'] = props.title : null;
            const properties = {
              ...props,
              className: !!className ? `${className} beyond-button` : 'beyond-button',
              type: !!props.type ? props.type : 'button'
            };
            if (data) {
              let properties = Object.keys(data);
              properties.map(entry => props[`data-${entry}`] = data[entry]);
            }
            delete properties.label;
            delete properties.icon;
            delete properties.children;
            return React.createElement("button", {
              className: className,
              ...properties,
              onClick: onClickButton
            }, icon && React.createElement(_icon.BeyondIcon, {
              icon: icon
            }), label, children);
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./checkbox
      **************************/

      ims.set('./checkbox', {
        hash: 379310085,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondCheckbox = void 0;
          var React = require("react");
          /*bundle*/
          const BeyondCheckbox = (0, React.forwardRef)((props, ref) => {
            const {
              checked,
              name,
              disabled,
              className,
              onChange,
              label
            } = props;
            const [state, setState] = (0, React.useState)({
              checked: !!checked
            });
            const handleChange = event => {
              setState({
                checked: !checked
              });
              onChange && onChange(event);
            };
            let cls = `beyond-checkbox ${className ? className : ""}`;
            cls += disabled ? " disabled" : "";
            const properties = Object.assign({}, props);
            delete properties.className;
            delete properties.checked;
            delete properties.name;
            delete properties.onChange;
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: cls
            }, React.createElement("input", {
              style: {
                display: "none"
              },
              ref: ref,
              type: "checkbox",
              className: "inp-cbx",
              id: name,
              name: name,
              checked: checked ?? state.checked,
              onChange: handleChange,
              ...properties
            }), React.createElement("label", {
              className: "cbx",
              htmlFor: name
            }, React.createElement("span", null, React.createElement("svg", {
              width: "12px",
              height: "9px",
              viewBox: "0 0 12 9"
            }, React.createElement("polyline", {
              points: "1 5 4 8 11 1"
            }))), React.createElement("span", null, label))));
          });
          exports.BeyondCheckbox = BeyondCheckbox;
        }
      });

      /***********************
      INTERNAL MODULE: ./input
      ***********************/

      ims.set('./input', {
        hash: 924452420,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondInput = BeyondInput;
          var React = require("react");
          var _icon = require("@beyond/ui/icon");
          /*bundle*/
          function BeyondInput(props) {
            const input = (0, React.useRef)(null);
            const [state, setState] = (0, React.useState)({
              value: props.value ?? "",
              errorMessage: props.errorMessage ? props.errorMessage : "Formato incorrecto",
              lengthMessage: "Cantidad máxima: ",
              emptyMessage: "Este campo es requerido",
              type: props.type ?? "text"
            });
            const handleChange = event => {
              if (!!props.onChange && typeof props.onChange === "function") props.onChange(event);
              setState({
                ...state,
                _hasError: false,
                value: event.target.value
              });
            };
            const getError = hasError => {
              if (!state._hasError && !hasError) return;
              let errorMessage = state.emptyMessage;
              if (hasError || input.current.value !== "") errorMessage = props.errorMessage ? props.errorMessage : state.errorMessage;
              if (props.max && parseFloat(input.current.value) > parseInt(props.max)) {
                errorMessage = props.lengthMessage ? props.lengthMessage : state.lengthMessage + ` (max ${props.max})`;
              }
              return React.createElement("span", {
                className: "beyond-element-input-error"
              }, errorMessage);
            };
            const changeType = event => {
              event.stopPropagation();
              const target = event.currentTarget;
              setState({
                ...state,
                type: target.dataset.type
              });
            };
            const error = getError(props.hasError);
            let properties = {
              ...props
            };
            let cls = props.className ? `${props.className} beyond-element-input` : "beyond-element-input";
            cls += props.icon ? " has-icon" : "";
            cls += props.disabled ? " disabled" : "";
            cls += props.hasError ? " error" : "";
            delete properties.className;
            delete properties.hasError;
            delete properties.errorMessage;
            delete properties.children;
            delete properties.icon;
            delete properties.label;
            delete properties.password;
            return React.createElement("div", {
              className: cls
            }, React.createElement(React.Fragment, null, React.createElement("input", {
              ref: input,
              ...properties,
              name: props.name,
              onChange: handleChange,
              type: state.type,
              value: typeof props.value !== "undefined" ? props.value : state.value,
              placeholder: props.placeholder ?? " ",
              id: props.id ?? props.name
            }), props.children, props.icon && React.createElement(_icon.BeyondIcon, {
              icon: props.icon
            }), error, props.label && React.createElement("label", {
              htmlFor: props.id ?? props.name
            }, props.label), props.password && (state.type === "password" ? React.createElement(_icon.BeyondIconButton, {
              onClick: changeType,
              "data-type": "text",
              className: "eye",
              icon: "eye"
            }) : React.createElement(_icon.BeyondIconButton, {
              onClick: changeType,
              className: "eye",
              "data-type": "password",
              icon: "eye-slash"
            })), props.required && React.createElement("span", {
              className: "beyond-input__required-label"
            }, "(*)")));
          }
        }
      });

      /************************
      INTERNAL MODULE: ./switch
      ************************/

      ims.set('./switch', {
        hash: 2229200371,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondSwitch = void 0;
          var React = require("react");
          /*bundle*/
          const BeyondSwitch = (0, React.forwardRef)((props, ref) => {
            const {
              value,
              checked,
              required,
              name,
              disabled,
              className,
              onChange,
              onClick
            } = props;
            const [state, setState] = (0, React.useState)({
              checked: !!checked
            });
            const handleChange = event => {
              setState({
                checked: !checked
              });
              onChange && onChange(event);
            };
            const handleClick = event => {
              onClick && onClick(event);
            };
            let cls = `beyond-element-switch ${className ? className : ""}`;
            cls += disabled ? " disabled" : "";
            const properties = Object.assign({}, props);
            delete properties.className;
            delete properties.disabled;
            delete properties.checked;
            delete properties.name;
            delete properties.required;
            delete properties.onChange;
            delete properties.onClick;
            delete properties.value;
            return React.createElement("div", {
              className: cls,
              onClick: handleClick,
              ...properties
            }, React.createElement("label", {
              className: "switch"
            }, React.createElement("input", {
              ref: ref,
              type: "checkbox",
              required: required,
              name: name,
              value: value,
              checked: checked ?? state.checked,
              disabled: disabled,
              onChange: handleChange,
              placeholder: name
            }), React.createElement("span", {
              className: "slider"
            })));
          });
          exports.BeyondSwitch = BeyondSwitch;
        }
      });

      /**************************
      INTERNAL MODULE: ./textarea
      **************************/

      ims.set('./textarea', {
        hash: 3279900771,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondTextarea = BeyondTextarea;
          var React = require("react");
          /*bundle*/
          function BeyondTextarea(props) {
            const input = props.ref ?? (0, React.useRef)();
            const [state, setState] = (0, React.useState)({
              value: props.value ?? "",
              errorMessage: props.errorMessage ? props.errorMessage : "Formato incorrecto",
              lengthMessage: "Cantidad máxima: ",
              emptyMessage: "Este campo es requerido"
            });
            const handleChange = event => {
              if (!!props.onChange && typeof props.onChange === "function") props.onChange(event);
              setState({
                ...state,
                _hasError: false,
                value: event.target.value
              });
            };
            const getError = hasError => {
              if (!state._hasError && !hasError) return;
              let errorMessage = state.emptyMessage;
              if (hasError || input.value !== "") errorMessage = props.errorMessage ? props.errorMessage : state.errorMessage;
              if (props.max && parseFloat(input.value) > parseInt(props.max)) {
                errorMessage = props.lengthMessage ? props.lengthMessage : state.lengthMessage + ` (max ${props.max})`;
              }
              return React.createElement("span", {
                className: "beyond-element-input-error"
              }, errorMessage);
            };
            const error = getError(props.hasError);
            let properties = {
              ...props
            };
            let cls = props.className ? `${props.className} beyond-element-textarea` : "beyond-element-textarea";
            cls += props.disabled ? " disabled" : "";
            cls += props.hasError ? " error" : "";
            delete properties.className;
            delete properties.hasError;
            delete properties.errorMessage;
            delete properties.children;
            delete properties.label;
            return React.createElement("div", {
              className: cls
            }, React.createElement(React.Fragment, null, React.createElement("textarea", {
              ref: input,
              ...properties,
              name: props.name,
              onChange: handleChange,
              value: typeof props.value !== "undefined" ? props.value : state.value,
              placeholder: props.placeholder ?? " "
            }), props.children, error, props.label && React.createElement("label", {
              htmlFor: props.id
            }, props.label), props.required && React.createElement("span", {
              className: "beyond-input__required-label"
            }, "(*)")));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./button",
        "from": "BeyondButton",
        "name": "BeyondButton"
      }, {
        "im": "./checkbox",
        "from": "BeyondCheckbox",
        "name": "BeyondCheckbox"
      }, {
        "im": "./input",
        "from": "BeyondInput",
        "name": "BeyondInput"
      }, {
        "im": "./switch",
        "from": "BeyondSwitch",
        "name": "BeyondSwitch"
      }, {
        "im": "./textarea",
        "from": "BeyondTextarea",
        "name": "BeyondTextarea"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BeyondButton') && _export("BeyondButton", BeyondButton = require ? require('./button').BeyondButton : value);
        (require || prop === 'BeyondCheckbox') && _export("BeyondCheckbox", BeyondCheckbox = require ? require('./checkbox').BeyondCheckbox : value);
        (require || prop === 'BeyondInput') && _export("BeyondInput", BeyondInput = require ? require('./input').BeyondInput : value);
        (require || prop === 'BeyondSwitch') && _export("BeyondSwitch", BeyondSwitch = require ? require('./switch').BeyondSwitch : value);
        (require || prop === 'BeyondTextarea') && _export("BeyondTextarea", BeyondTextarea = require ? require('./textarea').BeyondTextarea : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTtVQUVBO1VBZ0JPO1VBQVUsU0FDUkEsWUFBWSxDQUFDQyxLQUFZO1lBQ2pDLE1BQU07Y0FBRUMsU0FBUztjQUFFQyxPQUFPO2NBQUVDLElBQUk7Y0FBRUMsS0FBSztjQUFFQyxRQUFRO2NBQUVDO1lBQUksQ0FBRSxHQUFHTixLQUFLO1lBRWpFLE1BQU1PLGFBQWEsR0FBSUMsS0FBK0MsSUFBVTtjQUMvRSxJQUFJTixPQUFPLElBQUksT0FBT0EsT0FBTyxLQUFLLFVBQVUsRUFBRTtnQkFDN0NBLE9BQU8sQ0FBQ00sS0FBSyxDQUFDO2dCQUNkOztjQUVELElBQUlSLEtBQUssQ0FBQ1MsUUFBUSxFQUFFQyxnQkFBTyxDQUFDQyxTQUFTLENBQUMsR0FBR1gsS0FBSyxDQUFDUyxRQUFRLEVBQUUsQ0FBQztZQUMzRCxDQUFDO1lBRURULEtBQUssQ0FBQ1ksS0FBSyxHQUFJWixLQUFLLENBQUMsb0JBQW9CLENBQUMsR0FBR0EsS0FBSyxDQUFDWSxLQUFLLEdBQUksSUFBSTtZQUVoRSxNQUFNQyxVQUFVLEdBQVU7Y0FDekIsR0FBR2IsS0FBSztjQUNSQyxTQUFTLEVBQUUsQ0FBQyxDQUFDQSxTQUFTLEdBQUcsR0FBR0EsU0FBUyxnQkFBZ0IsR0FBRyxlQUFlO2NBQ3ZFYSxJQUFJLEVBQUUsQ0FBQyxDQUFDZCxLQUFLLENBQUNjLElBQUksR0FBR2QsS0FBSyxDQUFDYyxJQUFJLEdBQUc7YUFDbEM7WUFFRCxJQUFJWCxJQUFJLEVBQUU7Y0FDVCxJQUFJVSxVQUFVLEdBQWFFLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDYixJQUFJLENBQUM7Y0FDNUNVLFVBQVUsQ0FBQ0ksR0FBRyxDQUFFQyxLQUFhLElBQU1sQixLQUFLLENBQUMsUUFBUWtCLEtBQUssRUFBRSxDQUFDLEdBQUdmLElBQUksQ0FBQ2UsS0FBSyxDQUFFLENBQUM7O1lBRzFFLE9BQU9MLFVBQVUsQ0FBQ1QsS0FBSztZQUN2QixPQUFPUyxVQUFVLENBQUNQLElBQUk7WUFDdEIsT0FBT08sVUFBVSxDQUFDUixRQUFRO1lBQzFCLE9BQ0NjO2NBQVFsQixTQUFTLEVBQUVBLFNBQVM7Y0FBQSxHQUFNWSxVQUFVO2NBQUVYLE9BQU8sRUFBRUs7WUFBYSxHQUNsRUQsSUFBSSxJQUFJYSxvQkFBQ0MsZ0JBQVU7Y0FBQ2QsSUFBSSxFQUFFQTtZQUFJLEVBQUksRUFDbENGLEtBQUssRUFDTEMsUUFBUSxDQUNEO1VBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdERBO1VBdUJPO1VBQVcsTUFBTWdCLGNBQWMsR0FFbEMsb0JBQVUsRUFDWixDQUFDckIsS0FBWSxFQUFFc0IsR0FBZ0MsS0FBaUI7WUFDOUQsTUFBTTtjQUFFQyxPQUFPO2NBQUVDLElBQUk7Y0FBRUMsUUFBUTtjQUFFeEIsU0FBUztjQUFFeUIsUUFBUTtjQUFFdEI7WUFBSyxDQUFFLEdBQUdKLEtBQUs7WUFDckUsTUFBTSxDQUFDMkIsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBRyxrQkFBUSxFQUFDO2NBQUVMLE9BQU8sRUFBRSxDQUFDLENBQUNBO1lBQU8sQ0FBRSxDQUFDO1lBQzFELE1BQU1NLFlBQVksR0FBSXJCLEtBQW9DLElBQVU7Y0FDbEVvQixRQUFRLENBQUM7Z0JBQUVMLE9BQU8sRUFBRSxDQUFDQTtjQUFPLENBQUUsQ0FBQztjQUMvQkcsUUFBUSxJQUFJQSxRQUFRLENBQUNsQixLQUFLLENBQUM7WUFDN0IsQ0FBQztZQUNELElBQUlzQixHQUFHLEdBQVcsbUJBQW1CN0IsU0FBUyxHQUFHQSxTQUFTLEdBQUcsRUFBRSxFQUFFO1lBQ2pFNkIsR0FBRyxJQUFJTCxRQUFRLEdBQUcsV0FBVyxHQUFHLEVBQUU7WUFDbEMsTUFBTVosVUFBVSxHQUFHRSxNQUFNLENBQUNnQixNQUFNLENBQUMsRUFBRSxFQUFFL0IsS0FBSyxDQUFDO1lBQzNDLE9BQU9hLFVBQVUsQ0FBQ1osU0FBUztZQUMzQixPQUFPWSxVQUFVLENBQUNVLE9BQU87WUFDekIsT0FBT1YsVUFBVSxDQUFDVyxJQUFJO1lBQ3RCLE9BQU9YLFVBQVUsQ0FBQ2EsUUFBUTtZQUMxQixPQUNFUCwwQ0FDRUE7Y0FBS2xCLFNBQVMsRUFBRTZCO1lBQUcsR0FDakJYO2NBQ0VhLEtBQUssRUFBRTtnQkFBRUMsT0FBTyxFQUFFO2NBQU0sQ0FBRTtjQUMxQlgsR0FBRyxFQUFFQSxHQUFHO2NBQ1JSLElBQUksRUFBQyxVQUFVO2NBQ2ZiLFNBQVMsRUFBQyxTQUFTO2NBQ25CaUMsRUFBRSxFQUFFVixJQUFJO2NBQ1JBLElBQUksRUFBRUEsSUFBSTtjQUNWRCxPQUFPLEVBQUVBLE9BQU8sSUFBSUksS0FBSyxDQUFDSixPQUFPO2NBQ2pDRyxRQUFRLEVBQUVHLFlBQVk7Y0FBQSxHQUNsQmhCO1lBQVUsRUFDZCxFQUNGTTtjQUFPbEIsU0FBUyxFQUFDLEtBQUs7Y0FBQ2tDLE9BQU8sRUFBRVg7WUFBSSxHQUNsQ0wsa0NBQ0VBO2NBQUtpQixLQUFLLEVBQUMsTUFBTTtjQUFDQyxNQUFNLEVBQUMsS0FBSztjQUFDQyxPQUFPLEVBQUM7WUFBVSxHQUMvQ25CO2NBQVVvQixNQUFNLEVBQUM7WUFBYyxFQUFZLENBQ3ZDLENBQ0QsRUFDUHBCLGtDQUFPZixLQUFLLENBQVEsQ0FDZCxDQUNKLENBQ0w7VUFFUCxDQUFDLENBQ0Y7VUFBQ29DOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xFRjtVQVdBO1VBMEJPO1VBQVUsU0FDTkMsV0FBVyxDQUFDekMsS0FBWTtZQUNqQyxNQUFNMEMsS0FBSyxHQUF1QyxnQkFBTSxFQUFDLElBQUksQ0FBQztZQVc5RCxNQUFNLENBQUNmLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUcsa0JBQVEsRUFBUTtjQUN4Q2UsS0FBSyxFQUFFM0MsS0FBSyxDQUFDMkMsS0FBSyxJQUFJLEVBQUU7Y0FDeEJDLFlBQVksRUFBRTVDLEtBQUssQ0FBQzRDLFlBQVksR0FDNUI1QyxLQUFLLENBQUM0QyxZQUFZLEdBQ2xCLG9CQUFvQjtjQUN4QkMsYUFBYSxFQUFFLG1CQUFtQjtjQUNsQ0MsWUFBWSxFQUFFLHlCQUF5QjtjQUN2Q2hDLElBQUksRUFBRWQsS0FBSyxDQUFDYyxJQUFJLElBQUk7YUFDckIsQ0FBQztZQUVGLE1BQU1lLFlBQVksR0FBSXJCLEtBQW9DLElBQVU7Y0FDbEUsSUFBSSxDQUFDLENBQUNSLEtBQUssQ0FBQzBCLFFBQVEsSUFBSSxPQUFPMUIsS0FBSyxDQUFDMEIsUUFBUSxLQUFLLFVBQVUsRUFDMUQxQixLQUFLLENBQUMwQixRQUFRLENBQUNsQixLQUFLLENBQUM7Y0FDdkJvQixRQUFRLENBQUM7Z0JBQ1AsR0FBR0QsS0FBSztnQkFDUm9CLFNBQVMsRUFBRSxLQUFLO2dCQUNoQkosS0FBSyxFQUFFbkMsS0FBSyxDQUFDd0MsTUFBTSxDQUFDTDtlQUNyQixDQUFDO1lBQ0osQ0FBQztZQUVELE1BQU1NLFFBQVEsR0FDWkMsUUFBaUIsSUFDZ0I7Y0FDakMsSUFBSSxDQUFDdkIsS0FBSyxDQUFDb0IsU0FBUyxJQUFJLENBQUNHLFFBQVEsRUFBRTtjQUVuQyxJQUFJTixZQUFZLEdBQVdqQixLQUFLLENBQUNtQixZQUFZO2NBRTdDLElBQUlJLFFBQVEsSUFBSVIsS0FBSyxDQUFDUyxPQUFPLENBQUNSLEtBQUssS0FBSyxFQUFFLEVBQ3hDQyxZQUFZLEdBQUc1QyxLQUFLLENBQUM0QyxZQUFZLEdBQzdCNUMsS0FBSyxDQUFDNEMsWUFBWSxHQUNsQmpCLEtBQUssQ0FBQ2lCLFlBQVk7Y0FFeEIsSUFBSTVDLEtBQUssQ0FBQ29ELEdBQUcsSUFBSUMsVUFBVSxDQUFDWCxLQUFLLENBQUNTLE9BQU8sQ0FBQ1IsS0FBSyxDQUFDLEdBQUdXLFFBQVEsQ0FBQ3RELEtBQUssQ0FBQ29ELEdBQUcsQ0FBQyxFQUFFO2dCQUN0RVIsWUFBWSxHQUFHNUMsS0FBSyxDQUFDNkMsYUFBYSxHQUM5QjdDLEtBQUssQ0FBQzZDLGFBQWEsR0FDbkJsQixLQUFLLENBQUNrQixhQUFhLEdBQUcsU0FBUzdDLEtBQUssQ0FBQ29ELEdBQUcsR0FBRzs7Y0FHakQsT0FBT2pDO2dCQUFNbEIsU0FBUyxFQUFDO2NBQTRCLEdBQUUyQyxZQUFZLENBQVE7WUFDM0UsQ0FBQztZQUNELE1BQU1XLFVBQVUsR0FDZC9DLEtBQStDLElBQ3ZDO2NBQ1JBLEtBQUssQ0FBQ2dELGVBQWUsRUFBRTtjQUN2QixNQUFNUixNQUFNLEdBQW9DeEMsS0FBSyxDQUFDaUQsYUFBa0M7Y0FDeEY3QixRQUFRLENBQUM7Z0JBQUUsR0FBR0QsS0FBSztnQkFBRWIsSUFBSSxFQUFFa0MsTUFBTSxDQUFDVSxPQUFPLENBQUM1QztjQUFJLENBQUUsQ0FBQztZQUNuRCxDQUFDO1lBRUQsTUFBTTZDLEtBQUssR0FBa0NWLFFBQVEsQ0FBQ2pELEtBQUssQ0FBQ2tELFFBQVEsQ0FBQztZQUNyRSxJQUFJckMsVUFBVSxHQUFVO2NBQUUsR0FBR2I7WUFBSyxDQUFFO1lBQ3BDLElBQUk4QixHQUFHLEdBQVc5QixLQUFLLENBQUNDLFNBQVMsR0FDN0IsR0FBR0QsS0FBSyxDQUFDQyxTQUFTLHVCQUF1QixHQUN6QyxzQkFBc0I7WUFDMUI2QixHQUFHLElBQUk5QixLQUFLLENBQUNNLElBQUksR0FBRyxXQUFXLEdBQUcsRUFBRTtZQUNwQ3dCLEdBQUcsSUFBSTlCLEtBQUssQ0FBQ3lCLFFBQVEsR0FBRyxXQUFXLEdBQUcsRUFBRTtZQUN4Q0ssR0FBRyxJQUFJOUIsS0FBSyxDQUFDa0QsUUFBUSxHQUFHLFFBQVEsR0FBRyxFQUFFO1lBQ3JDLE9BQU9yQyxVQUFVLENBQUNaLFNBQVM7WUFDM0IsT0FBT1ksVUFBVSxDQUFDcUMsUUFBUTtZQUMxQixPQUFPckMsVUFBVSxDQUFDK0IsWUFBWTtZQUM5QixPQUFPL0IsVUFBVSxDQUFDUixRQUFRO1lBQzFCLE9BQU9RLFVBQVUsQ0FBQ1AsSUFBSTtZQUN0QixPQUFPTyxVQUFVLENBQUNULEtBQUs7WUFDdkIsT0FBT1MsVUFBVSxDQUFDK0MsUUFBUTtZQUUxQixPQUNFekM7Y0FBS2xCLFNBQVMsRUFBRTZCO1lBQUcsR0FDakJYLDBDQUNFQTtjQUNFRyxHQUFHLEVBQUVvQixLQUFLO2NBQUEsR0FDTjdCLFVBQVU7Y0FDZFcsSUFBSSxFQUFFeEIsS0FBSyxDQUFDd0IsSUFBSTtjQUNoQkUsUUFBUSxFQUFFRyxZQUFZO2NBQ3RCZixJQUFJLEVBQUVhLEtBQUssQ0FBQ2IsSUFBSTtjQUNoQjZCLEtBQUssRUFBRSxPQUFPM0MsS0FBSyxDQUFDMkMsS0FBSyxLQUFLLFdBQVcsR0FBRzNDLEtBQUssQ0FBQzJDLEtBQUssR0FBR2hCLEtBQUssQ0FBQ2dCLEtBQUs7Y0FDckVrQixXQUFXLEVBQUU3RCxLQUFLLENBQUM2RCxXQUFXLElBQUksR0FBRztjQUNyQzNCLEVBQUUsRUFBRWxDLEtBQUssQ0FBQ2tDLEVBQUUsSUFBSWxDLEtBQUssQ0FBQ3dCO1lBQUksRUFDMUIsRUFDRHhCLEtBQUssQ0FBQ0ssUUFBUSxFQUNkTCxLQUFLLENBQUNNLElBQUksSUFBSWEsb0JBQUNDLGdCQUFVO2NBQUNkLElBQUksRUFBRU4sS0FBSyxDQUFDTTtZQUFJLEVBQUksRUFDOUNxRCxLQUFLLEVBQ0wzRCxLQUFLLENBQUNJLEtBQUssSUFBSWU7Y0FBT2dCLE9BQU8sRUFBRW5DLEtBQUssQ0FBQ2tDLEVBQUUsSUFBSWxDLEtBQUssQ0FBQ3dCO1lBQUksR0FBR3hCLEtBQUssQ0FBQ0ksS0FBSyxDQUFTLEVBQzVFSixLQUFLLENBQUM0RCxRQUFRLEtBQ1pqQyxLQUFLLENBQUNiLElBQUksS0FBSyxVQUFVLEdBQ3hCSyxvQkFBQzJDLHNCQUFnQjtjQUNmNUQsT0FBTyxFQUFFcUQsVUFBVTtjQUFBLGFBQ1QsTUFBTTtjQUNoQnRELFNBQVMsRUFBQyxLQUFLO2NBQ2ZLLElBQUksRUFBQztZQUFLLEVBQ1YsR0FFRmEsb0JBQUMyQyxzQkFBZ0I7Y0FDZjVELE9BQU8sRUFBRXFELFVBQVU7Y0FDbkJ0RCxTQUFTLEVBQUMsS0FBSztjQUFBLGFBQ0wsVUFBVTtjQUNwQkssSUFBSSxFQUFDO1lBQVcsRUFFbkIsQ0FBQyxFQUNITixLQUFLLENBQUMrRCxRQUFRLElBQ2I1QztjQUFNbEIsU0FBUyxFQUFDO1lBQThCLFNBQy9DLENBQ0EsQ0FFQztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFKQTtVQXNCTztVQUFXLE1BQU0rRCxZQUFZLEdBRWhDLG9CQUFVLEVBQ1osQ0FBQ2hFLEtBQVksRUFBRXNCLEdBQWdDLEtBQWlCO1lBQzlELE1BQU07Y0FDSnFCLEtBQUs7Y0FDTHBCLE9BQU87Y0FDUHdDLFFBQVE7Y0FDUnZDLElBQUk7Y0FDSkMsUUFBUTtjQUNSeEIsU0FBUztjQUNUeUIsUUFBUTtjQUNSeEI7WUFBTyxDQUNSLEdBQUdGLEtBQUs7WUFDVCxNQUFNLENBQUMyQixLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHLGtCQUFRLEVBQUM7Y0FBRUwsT0FBTyxFQUFFLENBQUMsQ0FBQ0E7WUFBTyxDQUFFLENBQUM7WUFDMUQsTUFBTU0sWUFBWSxHQUFJckIsS0FBb0MsSUFBVTtjQUNsRW9CLFFBQVEsQ0FBQztnQkFBRUwsT0FBTyxFQUFFLENBQUNBO2NBQU8sQ0FBRSxDQUFDO2NBQy9CRyxRQUFRLElBQUlBLFFBQVEsQ0FBQ2xCLEtBQUssQ0FBQztZQUM3QixDQUFDO1lBQ0QsTUFBTXlELFdBQVcsR0FBSXpELEtBQUssSUFBSTtjQUM1Qk4sT0FBTyxJQUFJQSxPQUFPLENBQUNNLEtBQUssQ0FBQztZQUMzQixDQUFDO1lBQ0QsSUFBSXNCLEdBQUcsR0FBVyx5QkFBeUI3QixTQUFTLEdBQUdBLFNBQVMsR0FBRyxFQUFFLEVBQUU7WUFDdkU2QixHQUFHLElBQUlMLFFBQVEsR0FBRyxXQUFXLEdBQUcsRUFBRTtZQUNsQyxNQUFNWixVQUFVLEdBQUdFLE1BQU0sQ0FBQ2dCLE1BQU0sQ0FBQyxFQUFFLEVBQUUvQixLQUFLLENBQUM7WUFDM0MsT0FBT2EsVUFBVSxDQUFDWixTQUFTO1lBQzNCLE9BQU9ZLFVBQVUsQ0FBQ1ksUUFBUTtZQUMxQixPQUFPWixVQUFVLENBQUNVLE9BQU87WUFDekIsT0FBT1YsVUFBVSxDQUFDVyxJQUFJO1lBQ3RCLE9BQU9YLFVBQVUsQ0FBQ2tELFFBQVE7WUFDMUIsT0FBT2xELFVBQVUsQ0FBQ2EsUUFBUTtZQUMxQixPQUFPYixVQUFVLENBQUNYLE9BQU87WUFDekIsT0FBT1csVUFBVSxDQUFDOEIsS0FBSztZQUN2QixPQUNFeEI7Y0FBS2xCLFNBQVMsRUFBRTZCLEdBQUc7Y0FBRTVCLE9BQU8sRUFBRStELFdBQVc7Y0FBQSxHQUFNcEQ7WUFBVSxHQUN2RE07Y0FBT2xCLFNBQVMsRUFBQztZQUFRLEdBQ3ZCa0I7Y0FDRUcsR0FBRyxFQUFFQSxHQUFHO2NBQ1JSLElBQUksRUFBQyxVQUFVO2NBQ2ZpRCxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJ2QyxJQUFJLEVBQUVBLElBQUk7Y0FDVm1CLEtBQUssRUFBRUEsS0FBSztjQUNacEIsT0FBTyxFQUFFQSxPQUFPLElBQUlJLEtBQUssQ0FBQ0osT0FBTztjQUNqQ0UsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCQyxRQUFRLEVBQUVHLFlBQVk7Y0FDL0JnQyxXQUFXLEVBQUVyQztZQUFJLEVBQ1IsRUFDRkw7Y0FBTWxCLFNBQVMsRUFBQztZQUFRLEVBQUcsQ0FDckIsQ0FDSjtVQUVWLENBQUMsQ0FDRjtVQUFDdUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUVGO1VBMkJPO1VBQVUsU0FBVTBCLGNBQWMsQ0FBQ2xFLEtBQVk7WUFDcEQsTUFBTTBDLEtBQUssR0FBRzFDLEtBQUssQ0FBQ3NCLEdBQUcsSUFBSSxnQkFBTSxHQUFFO1lBVW5DLE1BQU0sQ0FBQ0ssS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBRyxrQkFBUSxFQUFRO2NBQ3hDZSxLQUFLLEVBQUUzQyxLQUFLLENBQUMyQyxLQUFLLElBQUksRUFBRTtjQUN4QkMsWUFBWSxFQUFFNUMsS0FBSyxDQUFDNEMsWUFBWSxHQUM1QjVDLEtBQUssQ0FBQzRDLFlBQVksR0FDbEIsb0JBQW9CO2NBQ3hCQyxhQUFhLEVBQUUsbUJBQW1CO2NBQ2xDQyxZQUFZLEVBQUU7YUFDZixDQUFDO1lBRUYsTUFBTWpCLFlBQVksR0FBSXJCLEtBQXVDLElBQVU7Y0FDckUsSUFBSSxDQUFDLENBQUNSLEtBQUssQ0FBQzBCLFFBQVEsSUFBSSxPQUFPMUIsS0FBSyxDQUFDMEIsUUFBUSxLQUFLLFVBQVUsRUFDMUQxQixLQUFLLENBQUMwQixRQUFRLENBQUNsQixLQUFLLENBQUM7Y0FDdkJvQixRQUFRLENBQUM7Z0JBQ1AsR0FBR0QsS0FBSztnQkFDUm9CLFNBQVMsRUFBRSxLQUFLO2dCQUNoQkosS0FBSyxFQUFFbkMsS0FBSyxDQUFDd0MsTUFBTSxDQUFDTDtlQUNyQixDQUFDO1lBQ0osQ0FBQztZQUVELE1BQU1NLFFBQVEsR0FDWkMsUUFBaUIsSUFDZ0I7Y0FDakMsSUFBSSxDQUFDdkIsS0FBSyxDQUFDb0IsU0FBUyxJQUFJLENBQUNHLFFBQVEsRUFBRTtjQUVuQyxJQUFJTixZQUFZLEdBQVdqQixLQUFLLENBQUNtQixZQUFZO2NBRTdDLElBQUlJLFFBQVEsSUFBSVIsS0FBSyxDQUFDQyxLQUFLLEtBQUssRUFBRSxFQUNoQ0MsWUFBWSxHQUFHNUMsS0FBSyxDQUFDNEMsWUFBWSxHQUM3QjVDLEtBQUssQ0FBQzRDLFlBQVksR0FDbEJqQixLQUFLLENBQUNpQixZQUFZO2NBRXhCLElBQUk1QyxLQUFLLENBQUNvRCxHQUFHLElBQUlDLFVBQVUsQ0FBQ1gsS0FBSyxDQUFDQyxLQUFLLENBQUMsR0FBR1csUUFBUSxDQUFDdEQsS0FBSyxDQUFDb0QsR0FBRyxDQUFDLEVBQUU7Z0JBQzlEUixZQUFZLEdBQUc1QyxLQUFLLENBQUM2QyxhQUFhLEdBQzlCN0MsS0FBSyxDQUFDNkMsYUFBYSxHQUNuQmxCLEtBQUssQ0FBQ2tCLGFBQWEsR0FBRyxTQUFTN0MsS0FBSyxDQUFDb0QsR0FBRyxHQUFHOztjQUdqRCxPQUFPakM7Z0JBQU1sQixTQUFTLEVBQUM7Y0FBNEIsR0FBRTJDLFlBQVksQ0FBUTtZQUMzRSxDQUFDO1lBRUQsTUFBTWUsS0FBSyxHQUFrQ1YsUUFBUSxDQUFDakQsS0FBSyxDQUFDa0QsUUFBUSxDQUFDO1lBQ3JFLElBQUlyQyxVQUFVLEdBQVU7Y0FBRSxHQUFHYjtZQUFLLENBQUU7WUFDcEMsSUFBSThCLEdBQUcsR0FBVzlCLEtBQUssQ0FBQ0MsU0FBUyxHQUM3QixHQUFHRCxLQUFLLENBQUNDLFNBQVMsMEJBQTBCLEdBQzVDLHlCQUF5QjtZQUM3QjZCLEdBQUcsSUFBSTlCLEtBQUssQ0FBQ3lCLFFBQVEsR0FBRyxXQUFXLEdBQUcsRUFBRTtZQUN4Q0ssR0FBRyxJQUFJOUIsS0FBSyxDQUFDa0QsUUFBUSxHQUFHLFFBQVEsR0FBRyxFQUFFO1lBRXJDLE9BQU9yQyxVQUFVLENBQUNaLFNBQVM7WUFDM0IsT0FBT1ksVUFBVSxDQUFDcUMsUUFBUTtZQUMxQixPQUFPckMsVUFBVSxDQUFDK0IsWUFBWTtZQUM5QixPQUFPL0IsVUFBVSxDQUFDUixRQUFRO1lBQzFCLE9BQU9RLFVBQVUsQ0FBQ1QsS0FBSztZQUV2QixPQUNFZTtjQUFLbEIsU0FBUyxFQUFFNkI7WUFBRyxHQUNqQlgsMENBQ0VBO2NBQ0VHLEdBQUcsRUFBRW9CLEtBQUs7Y0FBQSxHQUNON0IsVUFBVTtjQUNkVyxJQUFJLEVBQUV4QixLQUFLLENBQUN3QixJQUFJO2NBQ2hCRSxRQUFRLEVBQUVHLFlBQVk7Y0FDdEJjLEtBQUssRUFBRSxPQUFPM0MsS0FBSyxDQUFDMkMsS0FBSyxLQUFLLFdBQVcsR0FBRzNDLEtBQUssQ0FBQzJDLEtBQUssR0FBR2hCLEtBQUssQ0FBQ2dCLEtBQUs7Y0FDckVrQixXQUFXLEVBQUU3RCxLQUFLLENBQUM2RCxXQUFXLElBQUk7WUFBRyxFQUNyQyxFQUNEN0QsS0FBSyxDQUFDSyxRQUFRLEVBQ2RzRCxLQUFLLEVBQ0wzRCxLQUFLLENBQUNJLEtBQUssSUFBSWU7Y0FBT2dCLE9BQU8sRUFBRW5DLEtBQUssQ0FBQ2tDO1lBQUUsR0FBR2xDLEtBQUssQ0FBQ0ksS0FBSyxDQUFTLEVBQzlESixLQUFLLENBQUMrRCxRQUFRLElBQ2I1QztjQUFNbEIsU0FBUyxFQUFDO1lBQThCLFNBQy9DLENBQ0EsQ0FDQztVQUVWIiwibmFtZXMiOlsiQmV5b25kQnV0dG9uIiwicHJvcHMiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZGF0YSIsImxhYmVsIiwiY2hpbGRyZW4iLCJpY29uIiwib25DbGlja0J1dHRvbiIsImV2ZW50IiwibmF2aWdhdGUiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwidGl0bGUiLCJwcm9wZXJ0aWVzIiwidHlwZSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJlbnRyeSIsIlJlYWN0IiwiQmV5b25kSWNvbiIsIkJleW9uZENoZWNrYm94IiwicmVmIiwiY2hlY2tlZCIsIm5hbWUiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImhhbmRsZUNoYW5nZSIsImNscyIsImFzc2lnbiIsInN0eWxlIiwiZGlzcGxheSIsImlkIiwiaHRtbEZvciIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsInBvaW50cyIsImV4cG9ydHMiLCJCZXlvbmRJbnB1dCIsImlucHV0IiwidmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJsZW5ndGhNZXNzYWdlIiwiZW1wdHlNZXNzYWdlIiwiX2hhc0Vycm9yIiwidGFyZ2V0IiwiZ2V0RXJyb3IiLCJoYXNFcnJvciIsImN1cnJlbnQiLCJtYXgiLCJwYXJzZUZsb2F0IiwicGFyc2VJbnQiLCJjaGFuZ2VUeXBlIiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJlcnJvciIsInBhc3N3b3JkIiwicGxhY2Vob2xkZXIiLCJCZXlvbmRJY29uQnV0dG9uIiwicmVxdWlyZWQiLCJCZXlvbmRTd2l0Y2giLCJoYW5kbGVDbGljayIsIkJleW9uZFRleHRhcmVhIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJwcm9qZWN0L21vZHVsZXMvZm9ybS9jb21wb25lbnQvY29kZS90cy9idXR0b24udHN4IiwicHJvamVjdC9tb2R1bGVzL2Zvcm0vY29tcG9uZW50L2NvZGUvdHMvY2hlY2tib3gudHN4IiwicHJvamVjdC9tb2R1bGVzL2Zvcm0vY29tcG9uZW50L2NvZGUvdHMvaW5wdXQudHN4IiwicHJvamVjdC9tb2R1bGVzL2Zvcm0vY29tcG9uZW50L2NvZGUvdHMvc3dpdGNoLnRzeCIsInByb2plY3QvbW9kdWxlcy9mb3JtL2NvbXBvbmVudC9jb2RlL3RzL3RleHRhcmVhLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF19