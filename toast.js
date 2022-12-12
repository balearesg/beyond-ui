System.register(["@beyond-js/kernel@0.1.2/bundle", "@beyond-js/kernel@0.1.2/styles", "react@18.2.0", "react-dom@18.2.0", "@beyond/ui@1.0.0/icon"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, ToastContextProvider, useToastContext, Toast, __beyond_pkg, hmr;
  _export({
    ToastContextProvider: void 0,
    useToastContext: void 0,
    Toast: void 0
  });
  return {
    setters: [function (_beyondJsKernel012Bundle) {
      dependency_0 = _beyondJsKernel012Bundle;
    }, function (_beyondJsKernel012Styles) {
      dependency_1 = _beyondJsKernel012Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_reactDom2) {
      dependency_3 = _reactDom2;
    }, function (_beyondUi100Icon) {
      dependency_4 = _beyondUi100Icon;
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
          "vspecifier": "@beyond/ui@1.0.0/toast"
        },
        "type": "code",
        "name": "toast"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['react-dom', dependency_3], ['@beyond/ui/icon', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/ui@1.0.0/toast');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./container
      ***************************/
      ims.set('./container', {
        hash: 2810391982,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Container = Container;
          var React = require("react");
          var _reactDom = require("react-dom");
          /**
           * It creates a div element, appends it to the body, and returns a ReactPortal.
           * @param props - {children: ReactNode}
           * @returns A ReactPortal
           */
          function Container(props) {
            const [state, setState] = (0, React.useState)({});
            (0, React.useEffect)(() => {
              const container = document.createElement('div');
              setState({
                container
              });
              const body = document.querySelector("body");
              body.appendChild(container);
              return () => {
                (() => body.removeChild(container))();
              };
            }, []);
            if (!state.container) return null;
            const cls = props.content ? `beyond-element-toast-container toast-content` : "beyond-element-toast-container";
            return _reactDom.default.createPortal(React.createElement("div", {
              className: cls
            }, props.children), state.container);
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 2072348594,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ToastContext = void 0;
          exports.ToastContextProvider = ToastContextProvider;
          exports.useToastContext = void 0;
          var React = require("react");
          var _container = require("./container");
          var _toast = require("./toast");
          const ToastContext = (0, React.createContext)(null);
          exports.ToastContext = ToastContext;
          /*bundle */
          function ToastContextProvider({
            children,
            message,
            content
          }) {
            const TOAST_DURATION = 3000;
            const [toasts, setToasts] = (0, React.useState)([]);
            (0, React.useEffect)(() => {
              if (toasts.length) {
                const timer = setTimeout(() => setToasts(toasts => toasts.slice(1)), TOAST_DURATION);
                return () => clearTimeout(timer);
              }
            }, [toasts]);
            const add = (0, React.useCallback)(toast => {
              setToasts(toasts => [...toasts, toast]);
            }, [setToasts]);
            const closeToast = () => setToasts(toasts => toasts.slice(1));
            const toastsOutput = toasts.map((toast, id) => {
              return React.createElement(_toast.Toast, {
                key: id.toString(),
                close: closeToast
              }, toast);
            });
            return React.createElement(ToastContext.Provider, {
              value: {
                add,
                message
              }
            }, children, React.createElement(_container.Container, {
              content: content
            }, toastsOutput));
          }
          /*bundle */
          const useToastContext = () => (0, React.useContext)(ToastContext);
          exports.useToastContext = useToastContext;
        }
      });

      /***********************
      INTERNAL MODULE: ./toast
      ***********************/

      ims.set('./toast', {
        hash: 925738096,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Toast = void 0;
          var React = require("react");
          var _icon = require("@beyond/ui/icon");
          /*bundle*/
          const Toast = ({
            children,
            close
          }) => {
            return React.createElement("div", {
              className: "toast__container"
            }, React.createElement("div", {
              className: `toast-content ${children.type ?? "success"}`
            }, React.createElement("div", {
              className: "toast__icon"
            }, React.createElement(_icon.BeyondIcon, {
              icon: children.type ?? "success",
              className: "toast__svg"
            })), React.createElement("div", {
              className: "toast__content"
            }, React.createElement("p", {
              className: "toast__message"
            }, children.message ?? "lorem ipsum dolor sit amet")), React.createElement("div", {
              onClick: close,
              className: "toast__close"
            }, React.createElement(_icon.BeyondIcon, {
              icon: "close"
            }))));
          };
          exports.Toast = Toast;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./context",
        "from": "ToastContextProvider",
        "name": "ToastContextProvider"
      }, {
        "im": "./context",
        "from": "useToastContext",
        "name": "useToastContext"
      }, {
        "im": "./toast",
        "from": "Toast",
        "name": "Toast"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ToastContextProvider') && _export("ToastContextProvider", ToastContextProvider = require ? require('./context').ToastContextProvider : value);
        (require || prop === 'useToastContext') && _export("useToastContext", useToastContext = require ? require('./context').useToastContext : value);
        (require || prop === 'Toast') && _export("Toast", Toast = require ? require('./toast').Toast : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDakM7VUFFNUI7VUFFTztVQUFZLE1BQU1TLGVBQWUsR0FBRyxNQUFNLG9CQUFVLEVBQUN4QixZQUFZLENBQUM7VUFBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkQxRTtVQUNBO1VBRU87VUFBVyxNQUFNaUIsS0FBSyxHQUFHLENBQUM7WUFBRW5CLFFBQVE7WUFBRXNCO1VBQUssQ0FBRSxLQUFpQjtZQUNuRSxPQUNFeEI7Y0FBS0MsU0FBUyxFQUFDO1lBQWtCLEdBQy9CRDtjQUFLQyxTQUFTLEVBQUUsaUJBQWlCQyxRQUFRLENBQUMwQixJQUFJLElBQUksU0FBUztZQUFFLEdBQzNENUI7Y0FBS0MsU0FBUyxFQUFDO1lBQWEsR0FDMUJELG9CQUFDNkIsZ0JBQVU7Y0FBQ0MsSUFBSSxFQUFFNUIsUUFBUSxDQUFDMEIsSUFBSSxJQUFJLFNBQVM7Y0FBRTNCLFNBQVMsRUFBQztZQUFZLEVBQUcsQ0FDbkUsRUFDTkQ7Y0FBS0MsU0FBUyxFQUFDO1lBQWdCLEdBRTdCRDtjQUFHQyxTQUFTLEVBQUM7WUFBZ0IsR0FDMUJDLFFBQVEsQ0FBQ0ksT0FBTyxJQUFJLDRCQUE0QixDQUMvQyxDQUNBLEVBQ05OO2NBQUsrQixPQUFPLEVBQUVQLEtBQUs7Y0FBRXZCLFNBQVMsRUFBQztZQUFjLEdBQUNELG9CQUFDNkIsZ0JBQVU7Y0FBQ0MsSUFBSSxFQUFDO1lBQU8sRUFBRyxDQUFNLENBQzNFLENBQ0Y7VUFFVixDQUFDO1VBQUMxQiIsIm5hbWVzIjpbIkNvbnRhaW5lciIsInByb3BzIiwic3RhdGUiLCJzZXRTdGF0ZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDaGlsZCIsImNscyIsImNvbnRlbnQiLCJSZWFjdERPTSIsImNyZWF0ZVBvcnRhbCIsIlJlYWN0IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJUb2FzdENvbnRleHQiLCJleHBvcnRzIiwiVG9hc3RDb250ZXh0UHJvdmlkZXIiLCJtZXNzYWdlIiwiVE9BU1RfRFVSQVRJT04iLCJ0b2FzdHMiLCJzZXRUb2FzdHMiLCJsZW5ndGgiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJzbGljZSIsImNsZWFyVGltZW91dCIsImFkZCIsInRvYXN0IiwiY2xvc2VUb2FzdCIsInRvYXN0c091dHB1dCIsIm1hcCIsImlkIiwiVG9hc3QiLCJrZXkiLCJ0b1N0cmluZyIsImNsb3NlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVRvYXN0Q29udGV4dCIsInR5cGUiLCJCZXlvbmRJY29uIiwiaWNvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInByb2plY3QvbW9kdWxlcy90b2FzdC9jb21wb25lbnQvY29kZS90cy9jb250YWluZXIudHN4IiwicHJvamVjdC9tb2R1bGVzL3RvYXN0L2NvbXBvbmVudC9jb2RlL3RzL2NvbnRleHQudHN4IiwicHJvamVjdC9tb2R1bGVzL3RvYXN0L2NvbXBvbmVudC9jb2RlL3RzL3RvYXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXX0=