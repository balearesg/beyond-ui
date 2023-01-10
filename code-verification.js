System.register(["@beyond-js/kernel@0.1.7/bundle", "@beyond-js/kernel@0.1.7/styles", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, InputCode, __beyond_pkg, hmr;
  _export("InputCode", void 0);
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_beyondJsKernel017Styles) {
      dependency_1 = _beyondJsKernel017Styles;
    }, function (_react2) {
      dependency_2 = _react2;
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
          "vspecifier": "@bgroup/ui@0.0.21/code-verification"
        },
        "type": "code",
        "name": "code-verification"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/ui@0.0.21/code-verification');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./code-input
      ****************************/
      ims.set('./code-input', {
        hash: 1916272752,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputCode = InputCode;
          var _react = require("react");
          var _input = require("./input");
          const defaultOnCodeFull = () => null;
          /**
           * It's a React component that takes a length prop and an onCodeFull prop. It renders an array of
           * inputs, each of which is limited to one character. When the user enters a character, the component
           * updates the state with the character and focuses the next input. When the user presses backspace,
           * the component removes the last character from the state and focuses the previous input. When the
           * user enters the last character, the component calls the onCodeFull prop with the code as a string.
           * @param {props}  - props
           */
          /*bundle*/
          function InputCode({
            length,
            onCodeFull,
            className,
            onlyNumber
          }) {
            const [code, setCode] = (0, _react.useState)([]);
            const refs = (0, _react.useRef)(Array(length));
            const onClean = event => {
              window.setTimeout(() => {
                if (event.which === 8 || event.key?.toLowerCase() === "backspace") {
                  if (code.length) setCode(code.slice(0, code.length - 1));
                  return;
                }
              }, 0);
            };
            const preventDefault = event => {
              const target = event.currentTarget;
              if (target.value.length > 1) {
                target.value = target.value[1];
                event.preventDefault();
                return;
              }
              if (!target.value.match(/\d/g) && onlyNumber) {
                target.value = target.value.replace(/[^0-9.]+/g, "");
                event.preventDefault();
                return;
              }
              setCode(currentCode => [...currentCode, target.value]);
            };
            const setFocus = () => refs.current[code.length]?.focus();
            const cls = className ? `${className} code-inputs` : "code-inputs";
            (0, _react.useEffect)(() => {
              if (refs.current[code.length]) refs.current[code.length].focus();
              onCodeFull(code.join(""));
            }, [code, length]);
            const output = [...Array(length)].map((_, i) => _react.default.createElement(_input.default, {
              value: code[i] ?? "",
              key: i.toString(),
              ref: el => {
                refs.current[i] = el;
              },
              onChange: preventDefault,
              onKeyDown: onClean,
              onFocus: setFocus
            }));
            return _react.default.createElement("div", {
              className: cls
            }, output);
          }
          InputCode.defaultPros = {
            onCodeFull: defaultOnCodeFull,
            length: 6
          };
        }
      });

      /***********************
      INTERNAL MODULE: ./input
      ***********************/

      ims.set('./input', {
        hash: 340004181,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var React = require("react");
          var _default = (0, React.forwardRef)(function Input(props, ref) {
            const className = (0, React.useMemo)(() => {
              const propsClassName = props.className ?? "";
              const filledClassName = Boolean(String(props.value ?? "").length) ? "filled" : "";
              return `box ${propsClassName} ${filledClassName}`;
            }, [props.value, props.className]);
            return React.createElement("input", {
              ...props,
              maxLength: 1,
              type: "text",
              inputMode: "numeric",
              className: className,
              ref: ref
            });
          });
          exports.default = _default;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./code-input",
        "from": "InputCode",
        "name": "InputCode"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'InputCode') && _export("InputCode", InputCode = require ? require('./code-input').InputCode : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQVFBO1VBT0EsTUFBTUEsaUJBQWlCLEdBQW1CLE1BQU0sSUFBSTtVQUVwRDs7Ozs7Ozs7VUFRTztVQUFVLFNBQVVDLFNBQVMsQ0FBQztZQUNuQ0MsTUFBTTtZQUNOQyxVQUFVO1lBQ1ZDLFNBQVM7WUFDVEM7VUFBVSxDQUNKO1lBRU4sTUFBTSxDQUFDQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHLG1CQUFRLEVBQU8sRUFBRSxDQUFDO1lBQzFDLE1BQU1DLElBQUksR0FBeUMsaUJBQU0sRUFDdkRDLEtBQUssQ0FBQ1AsTUFBTSxDQUFDLENBQ2Q7WUFFRCxNQUFNUSxPQUFPLEdBQUlDLEtBQXNDLElBQVU7Y0FDL0RDLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDLE1BQUs7Z0JBQ3JCLElBQUlGLEtBQUssQ0FBQ0csS0FBSyxLQUFLLENBQUMsSUFBSUgsS0FBSyxDQUFDSSxHQUFHLEVBQUVDLFdBQVcsRUFBRSxLQUFLLFdBQVcsRUFBRTtrQkFDakUsSUFBSVYsSUFBSSxDQUFDSixNQUFNLEVBQUVLLE9BQU8sQ0FBQ0QsSUFBSSxDQUFDVyxLQUFLLENBQUMsQ0FBQyxFQUFFWCxJQUFJLENBQUNKLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztrQkFDeEQ7O2NBRUosQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNQLENBQUM7WUFFRCxNQUFNZ0IsY0FBYyxHQUFJUCxLQUFvQyxJQUFVO2NBQ3BFLE1BQU1RLE1BQU0sR0FDVlIsS0FBSyxDQUFDUyxhQUFpQztjQUN6QyxJQUFJRCxNQUFNLENBQUNFLEtBQUssQ0FBQ25CLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzNCaUIsTUFBTSxDQUFDRSxLQUFLLEdBQUdGLE1BQU0sQ0FBQ0UsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDOUJWLEtBQUssQ0FBQ08sY0FBYyxFQUFFO2dCQUN0Qjs7Y0FFRixJQUFJLENBQUNDLE1BQU0sQ0FBQ0UsS0FBSyxDQUFDQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUlqQixVQUFVLEVBQUU7Z0JBQzVDYyxNQUFNLENBQUNFLEtBQUssR0FBR0YsTUFBTSxDQUFDRSxLQUFLLENBQUNFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO2dCQUNwRFosS0FBSyxDQUFDTyxjQUFjLEVBQUU7Z0JBQ3RCOztjQUVGWCxPQUFPLENBQ0ppQixXQUFpQixJQUFvQixDQUFDLEdBQUdBLFdBQVcsRUFBRUwsTUFBTSxDQUFDRSxLQUFLLENBQUMsQ0FDckU7WUFDSCxDQUFDO1lBRUQsTUFBTUksUUFBUSxHQUFHLE1BQVlqQixJQUFJLENBQUNrQixPQUFPLENBQUNwQixJQUFJLENBQUNKLE1BQU0sQ0FBQyxFQUFFeUIsS0FBSyxFQUFFO1lBQy9ELE1BQU1DLEdBQUcsR0FBV3hCLFNBQVMsR0FBRyxHQUFHQSxTQUFTLGNBQWMsR0FBRyxhQUFhO1lBQzFFLG9CQUFTLEVBQUMsTUFBVztjQUNuQixJQUFJSSxJQUFJLENBQUNrQixPQUFPLENBQUNwQixJQUFJLENBQUNKLE1BQU0sQ0FBQyxFQUFFTSxJQUFJLENBQUNrQixPQUFPLENBQUNwQixJQUFJLENBQUNKLE1BQU0sQ0FBQyxDQUFDeUIsS0FBSyxFQUFFO2NBQ2hFeEIsVUFBVSxDQUFDRyxJQUFJLENBQUN1QixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDM0IsQ0FBQyxFQUFFLENBQUN2QixJQUFJLEVBQUVKLE1BQU0sQ0FBQyxDQUFDO1lBQ2xCLE1BQU00QixNQUFNLEdBQXVCLENBQUMsR0FBR3JCLEtBQUssQ0FBQ1AsTUFBTSxDQUFDLENBQUMsQ0FBQzZCLEdBQUcsQ0FDdkQsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFTLEtBQ1hDLDZCQUFDQyxjQUFLO2NBQ0pkLEtBQUssRUFBRWYsSUFBSSxDQUFDMkIsQ0FBQyxDQUFDLElBQUksRUFBRTtjQUNwQmxCLEdBQUcsRUFBRWtCLENBQUMsQ0FBQ0csUUFBUSxFQUFFO2NBQ2pCQyxHQUFHLEVBQUdDLEVBQW9CLElBQVU7Z0JBQ2xDOUIsSUFBSSxDQUFDa0IsT0FBTyxDQUFDTyxDQUFDLENBQUMsR0FBR0ssRUFBRTtjQUN0QixDQUFDO2NBQ0RDLFFBQVEsRUFBRXJCLGNBQWM7Y0FDeEJzQixTQUFTLEVBQUU5QixPQUFPO2NBQ2xCK0IsT0FBTyxFQUFFaEI7WUFBUSxFQUVwQixDQUNGO1lBRUQsT0FBT1M7Y0FBSzlCLFNBQVMsRUFBRXdCO1lBQUcsR0FBR0UsTUFBTSxDQUFPO1VBQzVDO1VBQ0E3QixTQUFTLENBQUN5QyxXQUFXLEdBQUc7WUFDdEJ2QyxVQUFVLEVBQUVILGlCQUFpQjtZQUM3QkUsTUFBTSxFQUFFO1dBQ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUZEO1VBQStCLGVBa0JoQixvQkFBVSxFQUFDLFNBQVNpQyxLQUFLLENBQ3BDUSxLQUFZLEVBQ1pOLEdBQWdDO1lBRWhDLE1BQU1qQyxTQUFTLEdBQVcsaUJBQU8sRUFBQyxNQUFhO2NBQzNDLE1BQU13QyxjQUFjLEdBQVdELEtBQUssQ0FBQ3ZDLFNBQVMsSUFBSSxFQUFFO2NBQ3BELE1BQU15QyxlQUFlLEdBQWtCQyxPQUFPLENBQUNDLE1BQU0sQ0FBQ0osS0FBSyxDQUFDdEIsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDbkIsTUFBTSxDQUFDLEdBQzFFLFFBQVEsR0FDUixFQUFFO2NBQ1IsT0FBTyxPQUFPMEMsY0FBYyxJQUFJQyxlQUFlLEVBQUU7WUFDckQsQ0FBQyxFQUFFLENBQUNGLEtBQUssQ0FBQ3RCLEtBQUssRUFBRXNCLEtBQUssQ0FBQ3ZDLFNBQVMsQ0FBQyxDQUFDO1lBRWxDLE9BQ0k4QjtjQUFBLEdBQ1FTLEtBQUs7Y0FDVEssU0FBUyxFQUFFLENBQUM7Y0FDWkMsSUFBSSxFQUFDLE1BQU07Y0FDWEMsU0FBUyxFQUFDLFNBQVM7Y0FDbkI5QyxTQUFTLEVBQUVBLFNBQVM7Y0FDcEJpQyxHQUFHLEVBQUVBO1lBQUcsRUFDVjtVQUVWLENBQUMsQ0FBQztVQUFBYyIsIm5hbWVzIjpbImRlZmF1bHRPbkNvZGVGdWxsIiwiSW5wdXRDb2RlIiwibGVuZ3RoIiwib25Db2RlRnVsbCIsImNsYXNzTmFtZSIsIm9ubHlOdW1iZXIiLCJjb2RlIiwic2V0Q29kZSIsInJlZnMiLCJBcnJheSIsIm9uQ2xlYW4iLCJldmVudCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJ3aGljaCIsImtleSIsInRvTG93ZXJDYXNlIiwic2xpY2UiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsIm1hdGNoIiwicmVwbGFjZSIsImN1cnJlbnRDb2RlIiwic2V0Rm9jdXMiLCJjdXJyZW50IiwiZm9jdXMiLCJjbHMiLCJqb2luIiwib3V0cHV0IiwibWFwIiwiXyIsImkiLCJSZWFjdCIsIklucHV0IiwidG9TdHJpbmciLCJyZWYiLCJlbCIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwib25Gb2N1cyIsImRlZmF1bHRQcm9zIiwicHJvcHMiLCJwcm9wc0NsYXNzTmFtZSIsImZpbGxlZENsYXNzTmFtZSIsIkJvb2xlYW4iLCJTdHJpbmciLCJtYXhMZW5ndGgiLCJ0eXBlIiwiaW5wdXRNb2RlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiY29kZS90cy9jb2RlLWlucHV0LnRzeCIsImNvZGUvdHMvaW5wdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXX0=