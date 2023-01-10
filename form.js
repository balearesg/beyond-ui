System.register(["@beyond-js/kernel@0.1.7/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.7/routing", "@bgroup/ui@0.0.21/icon", "@bgroup/ui@0.0.21/spinner", "@beyond-js/kernel@0.1.7/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, BeyondButton, BeyondCheckbox, BeyondInput, BeyondSwitch, BeyondTextarea, __beyond_pkg, hmr;
  _export({
    BeyondButton: void 0,
    BeyondCheckbox: void 0,
    BeyondInput: void 0,
    BeyondSwitch: void 0,
    BeyondTextarea: void 0
  });
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_beyondJsKernel017Routing) {
      dependency_2 = _beyondJsKernel017Routing;
    }, function (_bgroupUi0021Icon) {
      dependency_3 = _bgroupUi0021Icon;
    }, function (_bgroupUi0021Spinner) {
      dependency_4 = _bgroupUi0021Spinner;
    }, function (_beyondJsKernel017Styles) {
      dependency_5 = _beyondJsKernel017Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.5.4"], ["swiper", "8.4.5"], ["@bgroup/ui", "0.0.21"], ["@bgroup/ui", "0.0.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bgroup/ui@0.0.21/form"
        },
        "type": "code",
        "name": "form"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['@bgroup/ui/icon', dependency_3], ['@bgroup/ui/spinner', dependency_4], ['@beyond-js/kernel/styles', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/ui@0.0.21/form');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./button
      ************************/
      ims.set('./button', {
        hash: 950824787,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondButton = BeyondButton;
          var React = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _icon = require("@bgroup/ui/icon");
          var _spinner = require("@bgroup/ui/spinner");
          /*bundle*/
          function BeyondButton(props) {
            const {
              className,
              onClick,
              data,
              label,
              children,
              icon,
              loading,
              colorSpinner
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
              type: !!props.type ? props.type : 'button'
            };
            if (data) {
              let properties = Object.keys(data);
              properties.map(entry => props[`data-${entry}`] = data[entry]);
            }
            let cls = className ? `${className} beyond-button` : "beyond-button";
            cls += icon ? " has-icon" : "";
            delete properties.label;
            delete properties.icon;
            delete properties.children;
            delete properties.className;
            delete properties.loading;
            delete properties.colorSpinner;
            return React.createElement("button", {
              className: cls,
              ...properties,
              onClick: onClickButton
            }, icon && React.createElement(_icon.BeyondIcon, {
              icon: icon
            }), label, loading ? React.createElement(_spinner.BeyondSpinner, {
              color: colorSpinner ?? "var(--primary)"
            }) : children);
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
        hash: 263649459,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondInput = BeyondInput;
          var React = require("react");
          var _icon = require("@bgroup/ui/icon");
          var _spinner = require("@bgroup/ui/spinner");
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
            cls += props.icon || props.loading || props.password ? " has-icon" : "";
            cls += props.disabled ? " disabled" : "";
            cls += props.hasError ? " error" : "";
            delete properties.className;
            delete properties.hasError;
            delete properties.errorMessage;
            delete properties.children;
            delete properties.icon;
            delete properties.label;
            delete properties.password;
            delete properties.loading;
            delete properties.colorSpinner;
            return React.createElement("div", {
              className: cls
            }, React.createElement(React.Fragment, null, props.icon && React.createElement(_icon.BeyondIcon, {
              icon: props.icon
            }), React.createElement("input", {
              ref: input,
              ...properties,
              name: props.name,
              onChange: handleChange,
              type: state.type,
              value: typeof props.value !== "undefined" ? props.value : state.value,
              placeholder: props.placeholder ?? " ",
              id: props.id ?? props.name
            }), props.children, error, props.label && React.createElement("label", {
              htmlFor: props.id ?? props.name
            }, props.label), props.loading && React.createElement(_spinner.BeyondSpinner, {
              color: props.colorSpinner ?? "var(--primary)"
            }), props.password && (state.type === "password" ? React.createElement(_icon.BeyondIconButton, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcvQyxLQUFLLENBQUMrQyxLQUFLLEdBQUdmLEtBQUssQ0FBQ2UsS0FBSztjQUNyRWtCLFdBQVcsRUFBRWpFLEtBQUssQ0FBQ2lFLFdBQVcsSUFBSTtZQUFHLEVBQ3JDLEVBQ0RqRSxLQUFLLENBQUNLLFFBQVEsRUFDZDBELEtBQUssRUFDTC9ELEtBQUssQ0FBQ0ksS0FBSyxJQUFJa0I7Y0FBT2lCLE9BQU8sRUFBRXZDLEtBQUssQ0FBQ3NDO1lBQUUsR0FBR3RDLEtBQUssQ0FBQ0ksS0FBSyxDQUFTLEVBQzlESixLQUFLLENBQUNtRSxRQUFRLElBQ2I3QztjQUFNckIsU0FBUyxFQUFDO1lBQThCLFNBQy9DLENBQ0EsQ0FDQztVQUVWIiwibmFtZXMiOlsiQmV5b25kQnV0dG9uIiwicHJvcHMiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZGF0YSIsImxhYmVsIiwiY2hpbGRyZW4iLCJpY29uIiwibG9hZGluZyIsImNvbG9yU3Bpbm5lciIsIm9uQ2xpY2tCdXR0b24iLCJldmVudCIsIm5hdmlnYXRlIiwicm91dGluZyIsInB1c2hTdGF0ZSIsInRpdGxlIiwicHJvcGVydGllcyIsInR5cGUiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiZW50cnkiLCJjbHMiLCJSZWFjdCIsIkJleW9uZEljb24iLCJCZXlvbmRTcGlubmVyIiwiY29sb3IiLCJCZXlvbmRDaGVja2JveCIsInJlZiIsImNoZWNrZWQiLCJuYW1lIiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsInN0YXRlIiwic2V0U3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJhc3NpZ24iLCJzdHlsZSIsImRpc3BsYXkiLCJpZCIsImh0bWxGb3IiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJwb2ludHMiLCJleHBvcnRzIiwiQmV5b25kSW5wdXQiLCJpbnB1dCIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibGVuZ3RoTWVzc2FnZSIsImVtcHR5TWVzc2FnZSIsIl9oYXNFcnJvciIsInRhcmdldCIsImdldEVycm9yIiwiaGFzRXJyb3IiLCJjdXJyZW50IiwibWF4IiwicGFyc2VGbG9hdCIsInBhcnNlSW50IiwiY2hhbmdlVHlwZSIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZXJyb3IiLCJwYXNzd29yZCIsInBsYWNlaG9sZGVyIiwiQmV5b25kSWNvbkJ1dHRvbiIsInJlcXVpcmVkIiwiQmV5b25kU3dpdGNoIiwiaGFuZGxlQ2xpY2siLCJCZXlvbmRUZXh0YXJlYSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiY29kZS90cy9idXR0b24udHN4IiwiY29kZS90cy9jaGVja2JveC50c3giLCJjb2RlL3RzL2lucHV0LnRzeCIsImNvZGUvdHMvc3dpdGNoLnRzeCIsImNvZGUvdHMvdGV4dGFyZWEudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=