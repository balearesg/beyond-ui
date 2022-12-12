System.register(["@beyond-js/kernel@0.1.2/bundle", "@beyond-js/kernel@0.1.2/styles", "react@18.2.0", "@beyond/ui@1.0.0/form", "@beyond/ui@1.0.0/icon", "react-dom@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, BeyondAlertModal, BeyondConfirmModal, BeyondModal, __beyond_pkg, hmr;
  _export({
    BeyondAlertModal: void 0,
    BeyondConfirmModal: void 0,
    BeyondModal: void 0
  });
  return {
    setters: [function (_beyondJsKernel012Bundle) {
      dependency_0 = _beyondJsKernel012Bundle;
    }, function (_beyondJsKernel012Styles) {
      dependency_1 = _beyondJsKernel012Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_beyondUi100Form) {
      dependency_3 = _beyondUi100Form;
    }, function (_beyondUi100Icon) {
      dependency_4 = _beyondUi100Icon;
    }, function (_reactDom2) {
      dependency_5 = _reactDom2;
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
          "vspecifier": "@beyond/ui@1.0.0/modal"
        },
        "type": "code",
        "name": "modal"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond/ui/form', dependency_3], ['@beyond/ui/icon', dependency_4], ['react-dom', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/ui@1.0.0/modal');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./alert
      ***********************/
      ims.set('./alert', {
        hash: 1604235987,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondAlertModal = BeyondAlertModal;
          var _react = require("react");
          var _modal = require("./modal");
          var _form = require("@beyond/ui/form");
          /*bundle*/
          function BeyondAlertModal(props) {
            const [state, setState] = _react.default.useState({
              fetching: false
            });
            const close = event => {
              setState({
                fetching: true
              });
              if (props.onConfirm) props.onConfirm();
              setState({
                fetching: false
              });
              if (props.onClose) props.onClose();
            };
            const {
              text,
              title,
              btn,
              centered
            } = props;
            let btnLabel = typeof btn === "string" ? btn : "Confirmar";
            let cls = `beyond-alert-dialog${centered ? " beyond-alert-dialog-centered" : ""}`;
            if (props.className) cls += ` ${props.className}`;
            delete props.btn;
            delete props.text;
            delete props.title;
            delete props.centering;
            delete props.className;
            if (btn && typeof btn === "object") {
              btnLabel = btn.label ? btn.label : btn;
            }
            const disabled = {};
            if (state.fetching) disabled.disabled = true;
            return _react.default.createElement(_modal.BeyondModal, {
              show: true,
              className: cls
            }, _react.default.createElement("div", {
              className: "alert-dialog-content"
            }, title && _react.default.createElement("h3", {
              dangerouslySetInnerHTML: {
                __html: title
              }
            }), text && _react.default.createElement("div", {
              dangerouslySetInnerHTML: {
                __html: text
              }
            }), props.children ? props.children : null), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_form.BeyondButton, {
              label: btnLabel,
              onClick: close,
              ...disabled
            })));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./children
      **************************/

      ims.set('./children', {
        hash: 1271058050,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useBeyondModalContext = exports.Children = exports.BeyondModalContext = void 0;
          var React = require("react");
          var _icon = require("@beyond/ui/icon");
          const BeyondModalContext = (0, React.createContext)({});
          exports.BeyondModalContext = BeyondModalContext;
          const useBeyondModalContext = () => (0, React.useContext)(BeyondModalContext);
          exports.useBeyondModalContext = useBeyondModalContext;
          const Children = ({
            children,
            close,
            dismiss
          }) => {
            const output = [];
            if (dismiss !== false) {
              output.push(React.createElement(_icon.BeyondIconButton, {
                className: "close-icon",
                onClick: close,
                "data-dismiss": "modal",
                "aria-label": "Close",
                key: "dismiss-button",
                icon: "close"
              }));
            }
            const childrenWithProps = React.Children.map(children, child => {
              // checking isValidElement is the safe way and avoids a typescript error too
              if ((0, React.isValidElement)(child)) {
                const specs = {};
                //TODO: check a official way to check the children type
                return (0, React.cloneElement)(child, specs);
              }
              return child;
            });
            output.push(childrenWithProps);
            return React.createElement(BeyondModalContext.Provider, {
              value: {
                close,
                dismiss
              }
            }, output);
          };
          exports.Children = Children;
        }
      });

      /*************************
      INTERNAL MODULE: ./confirm
      *************************/

      ims.set('./confirm', {
        hash: 1315406741,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondConfirmModal = void 0;
          var React = require("react");
          var _form = require("@beyond/ui/form");
          var _modal = require("./modal");
          /*bundle*/
          const BeyondConfirmModal = properties => {
            const [state, setState] = React.useState({
              fetching: false
            });
            const process = async event => {
              event.stopPropagation();
              setState({
                fetching: true
              });
              const {
                onConfirm,
                onClose
              } = properties;
              if (!onConfirm) {
                console.warn("there is no confirm funciton defined");
                setState({
                  fetching: false
                });
                return;
              }
              await onConfirm();
              setState({
                fetching: false
              });
            };
            const {
              text,
              title,
              btn,
              onCancel,
              centered,
              onConfirm,
              btnConfirm,
              btnCancel
            } = properties;
            let cls = `beyond-confirm-dialog${centered ? " beyond-confirm-dialog-centered" : ""}`;
            if (properties.className) cls += ` ${properties.className}`;
            const props = Object.assign({}, properties);
            delete props.text;
            delete props.title;
            delete props.className;
            delete props.centering;
            delete props.btnCancel;
            delete props.btnConfirm;
            delete props.onCancel;
            let cancelLabel = "Cancelar";
            let confirmLabel = "Confirmar";
            let clsCancel = "btn btn-default btn-cancel";
            let clsConfirm = "btn btn-primary btn-confirm";
            if (btnConfirm && typeof btnConfirm === "object") {
              confirmLabel = btnConfirm.label ? btnConfirm.label : btn;
              clsConfirm = btnConfirm.className ? btnConfirm.className : clsConfirm;
            }
            if (btnCancel && typeof btnCancel === "object") {
              confirmLabel = btnCancel.label ? btnCancel.label : btn;
              clsCancel = btnCancel.className ? btnCancel.className : clsCancel;
            }
            const disabled = {};
            if (state.fetching) disabled.disabled = true;
            return React.createElement(_modal.BeyondModal, {
              show: true,
              className: cls,
              onClose: onCancel
            }, React.createElement("div", {
              className: "confirm-dialog-content"
            }, title && React.createElement("h3", null, title), text && React.createElement("div", null, text), properties.children), React.createElement("div", {
              className: "actions"
            }, React.createElement(_form.BeyondButton, {
              className: clsCancel,
              label: cancelLabel,
              ...disabled,
              onClick: onCancel
            }), React.createElement(_form.BeyondButton, {
              className: clsConfirm,
              label: confirmLabel,
              ...disabled,
              onClick: process
            })));
          };
          exports.BeyondConfirmModal = BeyondConfirmModal;
        }
      });

      /***********************
      INTERNAL MODULE: ./modal
      ***********************/

      ims.set('./modal', {
        hash: 3339364622,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondModal = BeyondModal;
          var React = require("react");
          var _reactDom = require("react-dom");
          var _children = require("./children");
          /*bundle*/
          function BeyondModal(props) {
            const [state, setState] = (0, React.useState)({
              show: props?.show,
              closeClicked: false,
              container: null
            });
            const modal = (0, React.useRef)(null);
            const close = async event => {
              if (event) event.stopPropagation();
              const {
                onClose
              } = props;
              const body = document.querySelector("body");
              modal.current.classList.add("modal-hidden");
              window.setTimeout(async () => {
                //  if (typeof onClose === "function") return;
                setState({
                  ...state,
                  show: false,
                  closeClicked: true
                });
                body.setAttribute("style", "");
                body.classList.remove("body-custom-modal-opened");
                onClose(event);
              }, 300);
            };
            const onClickBackdrop = event => {
              event.stopPropagation();
              close(event);
            };
            (0, React.useEffect)(() => {
              const container = document.createElement("div");
              setState({
                ...state,
                container
              });
              const body = document.querySelector("body");
              body.appendChild(container);
              return () => {
                body.removeChild(container);
              };
            }, []);
            const {
              container
            } = state;
            if (!container) return null;
            const show = state.show;
            let cls = "beyond-element-modal ";
            cls += props.className ? props.className : "";
            if (show) cls += " show-modal";
            const output = [];
            if (show) {
              output.push(React.createElement("div", {
                key: "modal-content-wrapper",
                className: "modal-wrapper"
              }, React.createElement("div", {
                className: "modal-content",
                onClick: event => {
                  event.stopPropagation();
                }
              }, React.createElement(_children.Children, {
                ...props,
                close: close,
                key: "children-content"
              }))));
            }
            return (0, _reactDom.createPortal)(React.createElement("div", {
              ref: modal,
              onClick: onClickBackdrop,
              className: cls
            }, output), container);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./alert",
        "from": "BeyondAlertModal",
        "name": "BeyondAlertModal"
      }, {
        "im": "./confirm",
        "from": "BeyondConfirmModal",
        "name": "BeyondConfirmModal"
      }, {
        "im": "./modal",
        "from": "BeyondModal",
        "name": "BeyondModal"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BeyondAlertModal') && _export("BeyondAlertModal", BeyondAlertModal = require ? require('./alert').BeyondAlertModal : value);
        (require || prop === 'BeyondConfirmModal') && _export("BeyondConfirmModal", BeyondConfirmModal = require ? require('./confirm').BeyondConfirmModal : value);
        (require || prop === 'BeyondModal') && _export("BeyondModal", BeyondModal = require ? require('./modal').BeyondModal : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTtVQUNBO1VBQ087VUFBVSxTQUNSQSxnQkFBZ0IsQ0FBQ0MsS0FBSztZQUM3QixNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdDLGNBQUssQ0FBQ0MsUUFBUSxDQUFDO2NBQUVDLFFBQVEsRUFBRTtZQUFLLENBQUUsQ0FBQztZQUU3RCxNQUFNQyxLQUFLLEdBQUlDLEtBQUssSUFBSTtjQUN0QkwsUUFBUSxDQUFDO2dCQUFFRyxRQUFRLEVBQUU7Y0FBSSxDQUFFLENBQUM7Y0FDNUIsSUFBSUwsS0FBSyxDQUFDUSxTQUFTLEVBQUVSLEtBQUssQ0FBQ1EsU0FBUyxFQUFFO2NBQ3RDTixRQUFRLENBQUM7Z0JBQUVHLFFBQVEsRUFBRTtjQUFLLENBQUUsQ0FBQztjQUM3QixJQUFJTCxLQUFLLENBQUNTLE9BQU8sRUFBRVQsS0FBSyxDQUFDUyxPQUFPLEVBQUU7WUFDcEMsQ0FBQztZQUNELE1BQU07Y0FBRUMsSUFBSTtjQUFFQyxLQUFLO2NBQUVDLEdBQUc7Y0FBRUM7WUFBUSxDQUFFLEdBQUdiLEtBQUs7WUFDNUMsSUFBSWMsUUFBUSxHQUFXLE9BQU9GLEdBQUcsS0FBSyxRQUFRLEdBQUdBLEdBQUcsR0FBRyxXQUFXO1lBRWxFLElBQUlHLEdBQUcsR0FBVyxzQkFDaEJGLFFBQVEsR0FBRywrQkFBK0IsR0FBRyxFQUMvQyxFQUFFO1lBQ0YsSUFBSWIsS0FBSyxDQUFDZ0IsU0FBUyxFQUFFRCxHQUFHLElBQUksSUFBSWYsS0FBSyxDQUFDZ0IsU0FBUyxFQUFFO1lBRWpELE9BQU9oQixLQUFLLENBQUNZLEdBQUc7WUFDaEIsT0FBT1osS0FBSyxDQUFDVSxJQUFJO1lBQ2pCLE9BQU9WLEtBQUssQ0FBQ1csS0FBSztZQUNsQixPQUFPWCxLQUFLLENBQUNpQixTQUFTO1lBQ3RCLE9BQU9qQixLQUFLLENBQUNnQixTQUFTO1lBRXRCLElBQUlKLEdBQUcsSUFBSSxPQUFPQSxHQUFHLEtBQUssUUFBUSxFQUFFO2NBQ2xDRSxRQUFRLEdBQUdGLEdBQUcsQ0FBQ00sS0FBSyxHQUFHTixHQUFHLENBQUNNLEtBQUssR0FBR04sR0FBRzs7WUFHeEMsTUFBTU8sUUFBUSxHQUEyQixFQUFFO1lBQzNDLElBQUlsQixLQUFLLENBQUNJLFFBQVEsRUFBRWMsUUFBUSxDQUFDQSxRQUFRLEdBQUcsSUFBSTtZQUU1QyxPQUNFaEIsNkJBQUNpQixrQkFBVztjQUFDQyxJQUFJO2NBQUNMLFNBQVMsRUFBRUQ7WUFBRyxHQUM5Qlo7Y0FBS2EsU0FBUyxFQUFDO1lBQXNCLEdBQ2xDTCxLQUFLLElBQUlSO2NBQUltQix1QkFBdUIsRUFBRTtnQkFBRUMsTUFBTSxFQUFFWjtjQUFLO1lBQUUsRUFBSSxFQUMzREQsSUFBSSxJQUFJUDtjQUFLbUIsdUJBQXVCLEVBQUU7Z0JBQUVDLE1BQU0sRUFBRWI7Y0FBSTtZQUFFLEVBQUksRUFDMURWLEtBQUssQ0FBQ3dCLFFBQVEsR0FBR3hCLEtBQUssQ0FBQ3dCLFFBQVEsR0FBRyxJQUFJLENBQ25DLEVBRU5yQjtjQUFLYSxTQUFTLEVBQUM7WUFBUyxHQUN0QmIsNkJBQUNzQixrQkFBWTtjQUFDUCxLQUFLLEVBQUVKLFFBQVE7Y0FBRVksT0FBTyxFQUFFcEIsS0FBSztjQUFBLEdBQU1hO1lBQVEsRUFBSSxDQUMzRCxDQUNNO1VBRWxCOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9DQTtVQVVBO1VBQ08sTUFBTVEsa0JBQWtCLEdBQWlCLHVCQUFhLEVBQUMsRUFBRSxDQUFDO1VBQUNDO1VBQzNELE1BQU1DLHFCQUFxQixHQUFHLE1BQU0sb0JBQVUsRUFBQ0Ysa0JBQWtCLENBQUM7VUFBQ0M7VUFPbkUsTUFBTUUsUUFBUSxHQUFHLENBQUM7WUFBRU4sUUFBUTtZQUFFbEIsS0FBSztZQUFFeUI7VUFBTyxDQUFTLEtBQWlCO1lBQzNFLE1BQU1DLE1BQU0sR0FBRyxFQUFFO1lBQ2pCLElBQUlELE9BQU8sS0FBSyxLQUFLLEVBQUU7Y0FDckJDLE1BQU0sQ0FBQ0MsSUFBSSxDQUNUOUIsb0JBQUMrQixzQkFBZ0I7Z0JBQ2ZsQixTQUFTLEVBQUMsWUFBWTtnQkFDdEJVLE9BQU8sRUFBRXBCLEtBQUs7Z0JBQUEsZ0JBQ0QsT0FBTztnQkFBQSxjQUNULE9BQU87Z0JBQ2xCNkIsR0FBRyxFQUFDLGdCQUFnQjtnQkFDcEJDLElBQUksRUFBQztjQUFPLEVBQ1osQ0FDSDs7WUFFSCxNQUFNQyxpQkFBaUIsR0FBR2xDLEtBQUssQ0FBQzJCLFFBQVEsQ0FBQ1EsR0FBRyxDQUFDZCxRQUFRLEVBQUdlLEtBQUssSUFBSTtjQUMvRDtjQUNBLElBQUksd0JBQWMsRUFBQ0EsS0FBSyxDQUFDLEVBQUU7Z0JBQ3pCLE1BQU1DLEtBQUssR0FBRyxFQUFFO2dCQUNoQjtnQkFDQSxPQUFPLHNCQUFZLEVBQUNELEtBQUssRUFBRUMsS0FBSyxDQUFDOztjQUVuQyxPQUFPRCxLQUFLO1lBQ2QsQ0FBQyxDQUFDO1lBQ0ZQLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDSSxpQkFBaUIsQ0FBQztZQUM5QixPQUNFbEMsb0JBQUN3QixrQkFBa0IsQ0FBQ2MsUUFBUTtjQUMxQkMsS0FBSyxFQUFFO2dCQUNMcEMsS0FBSztnQkFDTHlCOztZQUNELEdBRUFDLE1BQU0sQ0FDcUI7VUFFbEMsQ0FBQztVQUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyREY7VUFDQTtVQUNBO1VBQ087VUFBVyxNQUFNZSxrQkFBa0IsR0FBSUMsVUFBVSxJQUFpQjtZQUl2RSxNQUFNLENBQUMzQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHQyxLQUFLLENBQUNDLFFBQVEsQ0FBUTtjQUFFQyxRQUFRLEVBQUU7WUFBSyxDQUFFLENBQUM7WUFFcEUsTUFBTXdDLE9BQU8sR0FBRyxNQUFPdEMsS0FBSyxJQUFtQjtjQUM3Q0EsS0FBSyxDQUFDdUMsZUFBZSxFQUFFO2NBQ3ZCNUMsUUFBUSxDQUFDO2dCQUFFRyxRQUFRLEVBQUU7Y0FBSSxDQUFFLENBQUM7Y0FDNUIsTUFBTTtnQkFBRUcsU0FBUztnQkFBRUM7Y0FBTyxDQUFFLEdBQUdtQyxVQUFVO2NBQ3pDLElBQUksQ0FBQ3BDLFNBQVMsRUFBRTtnQkFDZHVDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLHNDQUFzQyxDQUFDO2dCQUNwRDlDLFFBQVEsQ0FBQztrQkFBRUcsUUFBUSxFQUFFO2dCQUFLLENBQUUsQ0FBQztnQkFDN0I7O2NBRUYsTUFBTUcsU0FBUyxFQUFFO2NBQ2pCTixRQUFRLENBQUM7Z0JBQUVHLFFBQVEsRUFBRTtjQUFLLENBQUUsQ0FBQztZQUMvQixDQUFDO1lBRUQsTUFBTTtjQUNKSyxJQUFJO2NBQ0pDLEtBQUs7Y0FDTEMsR0FBRztjQUNIcUMsUUFBUTtjQUNScEMsUUFBUTtjQUNSTCxTQUFTO2NBQ1QwQyxVQUFVO2NBQ1ZDO1lBQVMsQ0FDVixHQUFHUCxVQUFVO1lBRWQsSUFBSTdCLEdBQUcsR0FBVyx3QkFDaEJGLFFBQVEsR0FBRyxpQ0FBaUMsR0FBRyxFQUNqRCxFQUFFO1lBQ0YsSUFBSStCLFVBQVUsQ0FBQzVCLFNBQVMsRUFBRUQsR0FBRyxJQUFJLElBQUk2QixVQUFVLENBQUM1QixTQUFTLEVBQUU7WUFFM0QsTUFBTWhCLEtBQUssR0FBR29ELE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLEVBQUUsRUFBRVQsVUFBVSxDQUFDO1lBQzNDLE9BQU81QyxLQUFLLENBQUNVLElBQUk7WUFDakIsT0FBT1YsS0FBSyxDQUFDVyxLQUFLO1lBQ2xCLE9BQU9YLEtBQUssQ0FBQ2dCLFNBQVM7WUFDdEIsT0FBT2hCLEtBQUssQ0FBQ2lCLFNBQVM7WUFDdEIsT0FBT2pCLEtBQUssQ0FBQ21ELFNBQVM7WUFDdEIsT0FBT25ELEtBQUssQ0FBQ2tELFVBQVU7WUFDdkIsT0FBT2xELEtBQUssQ0FBQ2lELFFBQVE7WUFFckIsSUFBSUssV0FBVyxHQUFXLFVBQVU7WUFDcEMsSUFBSUMsWUFBWSxHQUFXLFdBQVc7WUFDdEMsSUFBSUMsU0FBUyxHQUFXLDRCQUE0QjtZQUNwRCxJQUFJQyxVQUFVLEdBQVcsNkJBQTZCO1lBRXRELElBQUlQLFVBQVUsSUFBSSxPQUFPQSxVQUFVLEtBQUssUUFBUSxFQUFFO2NBQ2hESyxZQUFZLEdBQUdMLFVBQVUsQ0FBQ2hDLEtBQUssR0FBR2dDLFVBQVUsQ0FBQ2hDLEtBQUssR0FBR04sR0FBRztjQUN4RDZDLFVBQVUsR0FBR1AsVUFBVSxDQUFDbEMsU0FBUyxHQUFHa0MsVUFBVSxDQUFDbEMsU0FBUyxHQUFHeUMsVUFBVTs7WUFHdkUsSUFBSU4sU0FBUyxJQUFJLE9BQU9BLFNBQVMsS0FBSyxRQUFRLEVBQUU7Y0FDOUNJLFlBQVksR0FBR0osU0FBUyxDQUFDakMsS0FBSyxHQUFHaUMsU0FBUyxDQUFDakMsS0FBSyxHQUFHTixHQUFHO2NBQ3RENEMsU0FBUyxHQUFHTCxTQUFTLENBQUNuQyxTQUFTLEdBQUdtQyxTQUFTLENBQUNuQyxTQUFTLEdBQUd3QyxTQUFTOztZQUduRSxNQUFNckMsUUFBUSxHQUEyQixFQUFFO1lBQzNDLElBQUlsQixLQUFLLENBQUNJLFFBQVEsRUFBRWMsUUFBUSxDQUFDQSxRQUFRLEdBQUcsSUFBSTtZQUU1QyxPQUNFaEIsb0JBQUNpQixrQkFBVztjQUFDQyxJQUFJO2NBQUNMLFNBQVMsRUFBRUQsR0FBRztjQUFFTixPQUFPLEVBQUV3QztZQUFRLEdBQ2pEOUM7Y0FBS2EsU0FBUyxFQUFDO1lBQXdCLEdBQ3BDTCxLQUFLLElBQUlSLGdDQUFLUSxLQUFLLENBQU0sRUFDekJELElBQUksSUFBSVAsaUNBQU1PLElBQUksQ0FBTyxFQUN6QmtDLFVBQVUsQ0FBQ3BCLFFBQVEsQ0FDaEIsRUFFTnJCO2NBQUthLFNBQVMsRUFBQztZQUFTLEdBQ3RCYixvQkFBQ3NCLGtCQUFZO2NBQ1hULFNBQVMsRUFBRXdDLFNBQVM7Y0FDcEJ0QyxLQUFLLEVBQUVvQyxXQUFXO2NBQUEsR0FDZG5DLFFBQVE7Y0FDWk8sT0FBTyxFQUFFdUI7WUFBUSxFQUNqQixFQUNGOUMsb0JBQUNzQixrQkFBWTtjQUNYVCxTQUFTLEVBQUV5QyxVQUFVO2NBQ3JCdkMsS0FBSyxFQUFFcUMsWUFBWTtjQUFBLEdBQ2ZwQyxRQUFRO2NBQ1pPLE9BQU8sRUFBRW1CO1lBQU8sRUFDaEIsQ0FDRSxDQUNNO1VBRWxCLENBQUM7VUFBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pGRjtVQVVBO1VBQ0E7VUFRTztVQUFVLFNBQ0pSLFdBQVcsQ0FBQ3BCLEtBQVk7WUFNakMsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHLGtCQUFRLEVBQVE7Y0FDdENtQixJQUFJLEVBQUVyQixLQUFLLEVBQUVxQixJQUFJO2NBQ2pCcUMsWUFBWSxFQUFFLEtBQUs7Y0FDbkJDLFNBQVMsRUFBRTthQUNkLENBQUM7WUFDRixNQUFNQyxLQUFLLEdBQXFDLGdCQUFNLEVBQWlCLElBQUksQ0FBQztZQUU1RSxNQUFNdEQsS0FBSyxHQUFHLE1BQ1ZDLEtBQXlDLElBQzFCO2NBQ2YsSUFBSUEsS0FBSyxFQUFFQSxLQUFLLENBQUN1QyxlQUFlLEVBQUU7Y0FDbEMsTUFBTTtnQkFBRXJDO2NBQU8sQ0FBRSxHQUFHVCxLQUFLO2NBQ3pCLE1BQU02RCxJQUFJLEdBQW9CQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7Y0FDNURILEtBQUssQ0FBQ0ksT0FBTyxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7Y0FDM0NDLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDLFlBQTBCO2dCQUMxQztnQkFDRWxFLFFBQVEsQ0FBQztrQkFBRSxHQUFHRCxLQUFLO2tCQUFFb0IsSUFBSSxFQUFFLEtBQUs7a0JBQUVxQyxZQUFZLEVBQUU7Z0JBQUksQ0FBRSxDQUFDO2dCQUN2REcsSUFBSSxDQUFDUSxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztnQkFDOUJSLElBQUksQ0FBQ0ksU0FBUyxDQUFDSyxNQUFNLENBQUMsMEJBQTBCLENBQUM7Z0JBQ2pEN0QsT0FBTyxDQUFDRixLQUFLLENBQUM7Y0FDbEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNYLENBQUM7WUFFRCxNQUFNZ0UsZUFBZSxHQUFJaEUsS0FBeUMsSUFBVTtjQUN4RUEsS0FBSyxDQUFDdUMsZUFBZSxFQUFFO2NBQ3ZCeEMsS0FBSyxDQUFDQyxLQUFLLENBQUM7WUFDaEIsQ0FBQztZQUNELG1CQUFTLEVBQUMsTUFBbUI7Y0FDekIsTUFBTW9ELFNBQVMsR0FBbUJHLFFBQVEsQ0FBQ1UsYUFBYSxDQUFDLEtBQUssQ0FBQztjQUMvRHRFLFFBQVEsQ0FBQztnQkFBRSxHQUFHRCxLQUFLO2dCQUFFMEQ7Y0FBUyxDQUFFLENBQUM7Y0FDakMsTUFBTUUsSUFBSSxHQUFvQkMsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO2NBQzVERixJQUFJLENBQUNZLFdBQVcsQ0FBQ2QsU0FBUyxDQUFDO2NBRTNCLE9BQU8sTUFBVztnQkFDZEUsSUFBSSxDQUFDYSxXQUFXLENBQUNmLFNBQVMsQ0FBQztjQUMvQixDQUFDO1lBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUVOLE1BQU07Y0FBRUE7WUFBUyxDQUFFLEdBQUcxRCxLQUFLO1lBRTNCLElBQUksQ0FBQzBELFNBQVMsRUFBRSxPQUFPLElBQUk7WUFDM0IsTUFBTXRDLElBQUksR0FBWXBCLEtBQUssQ0FBQ29CLElBQUk7WUFFaEMsSUFBSU4sR0FBRyxHQUFXLHVCQUF1QjtZQUN6Q0EsR0FBRyxJQUFJZixLQUFLLENBQUNnQixTQUFTLEdBQUdoQixLQUFLLENBQUNnQixTQUFTLEdBQUcsRUFBRTtZQUU3QyxJQUFJSyxJQUFJLEVBQUVOLEdBQUcsSUFBSSxhQUFhO1lBQzlCLE1BQU1pQixNQUFNLEdBQUcsRUFBRTtZQUVqQixJQUFJWCxJQUFJLEVBQUU7Y0FDTlcsTUFBTSxDQUFDQyxJQUFJLENBQ1A5QjtnQkFBS2dDLEdBQUcsRUFBQyx1QkFBdUI7Z0JBQUNuQixTQUFTLEVBQUM7Y0FBZSxHQUN0RGI7Z0JBQ0lhLFNBQVMsRUFBQyxlQUFlO2dCQUN6QlUsT0FBTyxFQUFHbkIsS0FBSyxJQUFJO2tCQUNmQSxLQUFLLENBQUN1QyxlQUFlLEVBQUU7Z0JBQzNCO2NBQUMsR0FFRDNDLG9CQUFDMkIsa0JBQVE7Z0JBQUEsR0FBSzlCLEtBQUs7Z0JBQUVNLEtBQUssRUFBRUEsS0FBSztnQkFBRTZCLEdBQUcsRUFBQztjQUFrQixFQUFHLENBQzFELENBQ0osQ0FDVDs7WUFHTCxPQUFPLDBCQUFZLEVBQ2ZoQztjQUFLd0UsR0FBRyxFQUFFZixLQUFLO2NBQUVsQyxPQUFPLEVBQUU2QyxlQUFlO2NBQUV2RCxTQUFTLEVBQUVEO1lBQUcsR0FDcERpQixNQUFNLENBQ0wsRUFDTjJCLFNBQVMsQ0FDWjtVQUNMIiwibmFtZXMiOlsiQmV5b25kQWxlcnRNb2RhbCIsInByb3BzIiwic3RhdGUiLCJzZXRTdGF0ZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJmZXRjaGluZyIsImNsb3NlIiwiZXZlbnQiLCJvbkNvbmZpcm0iLCJvbkNsb3NlIiwidGV4dCIsInRpdGxlIiwiYnRuIiwiY2VudGVyZWQiLCJidG5MYWJlbCIsImNscyIsImNsYXNzTmFtZSIsImNlbnRlcmluZyIsImxhYmVsIiwiZGlzYWJsZWQiLCJCZXlvbmRNb2RhbCIsInNob3ciLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNoaWxkcmVuIiwiQmV5b25kQnV0dG9uIiwib25DbGljayIsIkJleW9uZE1vZGFsQ29udGV4dCIsImV4cG9ydHMiLCJ1c2VCZXlvbmRNb2RhbENvbnRleHQiLCJDaGlsZHJlbiIsImRpc21pc3MiLCJvdXRwdXQiLCJwdXNoIiwiQmV5b25kSWNvbkJ1dHRvbiIsImtleSIsImljb24iLCJjaGlsZHJlbldpdGhQcm9wcyIsIm1hcCIsImNoaWxkIiwic3BlY3MiLCJQcm92aWRlciIsInZhbHVlIiwiQmV5b25kQ29uZmlybU1vZGFsIiwicHJvcGVydGllcyIsInByb2Nlc3MiLCJzdG9wUHJvcGFnYXRpb24iLCJjb25zb2xlIiwid2FybiIsIm9uQ2FuY2VsIiwiYnRuQ29uZmlybSIsImJ0bkNhbmNlbCIsIk9iamVjdCIsImFzc2lnbiIsImNhbmNlbExhYmVsIiwiY29uZmlybUxhYmVsIiwiY2xzQ2FuY2VsIiwiY2xzQ29uZmlybSIsImNsb3NlQ2xpY2tlZCIsImNvbnRhaW5lciIsIm1vZGFsIiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlIiwib25DbGlja0JhY2tkcm9wIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJyZWYiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInByb2plY3QvbW9kdWxlcy9tb2RhbC9jb21wb25lbnQvY29kZS90cy9hbGVydC50c3giLCJwcm9qZWN0L21vZHVsZXMvbW9kYWwvY29tcG9uZW50L2NvZGUvdHMvY2hpbGRyZW4udHN4IiwicHJvamVjdC9tb2R1bGVzL21vZGFsL2NvbXBvbmVudC9jb2RlL3RzL2NvbmZpcm0udHN4IiwicHJvamVjdC9tb2R1bGVzL21vZGFsL2NvbXBvbmVudC9jb2RlL3RzL21vZGFsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdfQ==