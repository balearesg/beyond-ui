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
        hash: 1777159805,
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
            let btnLabel = typeof btn === 'string' ? btn : 'Confirmar';
            let cls = `beyond-alert-dialog${centered ? ' beyond-alert-dialog-centered' : ''}`;
            if (props.className) cls += ` ${props.className}`;
            let clsCancel = 'btn btn-default btn-cancel';
            delete props.btn;
            delete props.text;
            delete props.title;
            delete props.centering;
            if (btn && typeof btn === 'object') {
              btnLabel = btn.label ? btn.label : btn;
              clsCancel = btn.className ? btn.className : clsCancel;
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
              className: clsCancel,
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
        hash: 855323432,
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
                console.warn('there is no confirm funciton defined');
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
            let cls = `beyond-confirm-dialog${centered ? ' beyond-confirm-dialog-centered' : ''}`;
            if (properties.className) cls += ` ${properties.className}`;
            const props = Object.assign({}, properties);
            delete props.text;
            delete props.title;
            delete props.className;
            delete props.centering;
            delete props.btnCancel;
            delete props.btnConfirm;
            delete props.onCancel;
            let cancelLabel = 'Cancelar';
            let confirmLabel = 'Confirmar';
            let clsCancel = 'btn btn-default btn-cancel';
            let clsConfirm = 'btn btn-primary btn-confirm';
            if (btnConfirm && typeof btnConfirm === 'object') {
              confirmLabel = btnConfirm.label ? btnConfirm.label : btn;
              clsConfirm = btnConfirm.className ? btnConfirm.className : clsConfirm;
            }
            if (btnCancel && typeof btnCancel === 'object') {
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
        hash: 3324356653,
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
              const body = document.querySelector('body');
              modal.current.classList.add('modal-hidden');
              window.setTimeout(async () => {
                //  if (typeof onClose === "function") return;
                setState({
                  ...state,
                  show: false,
                  closeClicked: true
                });
                body.setAttribute('style', '');
                body.classList.remove('body-custom-modal-opened');
                onClose(event);
              }, 300);
            };
            const onClickBackdrop = event => {
              event.stopPropagation();
              close(event);
            };
            (0, React.useEffect)(() => {
              const container = document.createElement('div');
              setState({
                ...state,
                container
              });
              const body = document.querySelector('body');
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
            let cls = 'beyond-element-modal ';
            cls += props.className ? props.className : '';
            if (show) cls += ' show-modal';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN4QjtjQUFDLEdBQ0Q1QyxvQkFBQzRCLGtCQUFRO2dCQUFBLEdBQUsvQixLQUFLO2dCQUFFTSxLQUFLLEVBQUVBLEtBQUs7Z0JBQUU4QixHQUFHLEVBQUM7Y0FBa0IsRUFBRyxDQUN2RCxDQUNELENBQ047O1lBR0YsT0FBTywwQkFBWSxFQUNsQmpDO2NBQUt3RSxHQUFHLEVBQUVmLEtBQUs7Y0FBRWpDLE9BQU8sRUFBRTRDLGVBQWU7Y0FBRXZELFNBQVMsRUFBRUQ7WUFBRyxHQUN2RGtCLE1BQU0sQ0FDRixFQUNOMEIsU0FBUyxDQUNUO1VBQ0YiLCJuYW1lcyI6WyJCZXlvbmRBbGVydE1vZGFsIiwicHJvcHMiLCJzdGF0ZSIsInNldFN0YXRlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwiY2xvc2UiLCJldmVudCIsIm9uQ29uZmlybSIsIm9uQ2xvc2UiLCJ0ZXh0IiwidGl0bGUiLCJidG4iLCJjZW50ZXJlZCIsImJ0bkxhYmVsIiwiY2xzIiwiY2xhc3NOYW1lIiwiY2xzQ2FuY2VsIiwiY2VudGVyaW5nIiwibGFiZWwiLCJkaXNhYmxlZCIsIkJleW9uZE1vZGFsIiwic2hvdyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiY2hpbGRyZW4iLCJCZXlvbmRCdXR0b24iLCJvbkNsaWNrIiwiQmV5b25kTW9kYWxDb250ZXh0IiwiZXhwb3J0cyIsInVzZUJleW9uZE1vZGFsQ29udGV4dCIsIkNoaWxkcmVuIiwiZGlzbWlzcyIsIm91dHB1dCIsInB1c2giLCJCZXlvbmRJY29uQnV0dG9uIiwia2V5IiwiaWNvbiIsImNoaWxkcmVuV2l0aFByb3BzIiwibWFwIiwiY2hpbGQiLCJzcGVjcyIsIlByb3ZpZGVyIiwidmFsdWUiLCJCZXlvbmRDb25maXJtTW9kYWwiLCJwcm9wZXJ0aWVzIiwicHJvY2VzcyIsInN0b3BQcm9wYWdhdGlvbiIsImNvbnNvbGUiLCJ3YXJuIiwib25DYW5jZWwiLCJidG5Db25maXJtIiwiYnRuQ2FuY2VsIiwiT2JqZWN0IiwiYXNzaWduIiwiY2FuY2VsTGFiZWwiLCJjb25maXJtTGFiZWwiLCJjbHNDb25maXJtIiwiY2xvc2VDbGlja2VkIiwiY29udGFpbmVyIiwibW9kYWwiLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmUiLCJvbkNsaWNrQmFja2Ryb3AiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDaGlsZCIsInJlZiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsicHJvamVjdC9tb2R1bGVzL21vZGFsL2NvbXBvbmVudC9jb2RlL3RzL2FsZXJ0LnRzeCIsInByb2plY3QvbW9kdWxlcy9tb2RhbC9jb21wb25lbnQvY29kZS90cy9jaGlsZHJlbi50c3giLCJwcm9qZWN0L21vZHVsZXMvbW9kYWwvY29tcG9uZW50L2NvZGUvdHMvY29uZmlybS50c3giLCJwcm9qZWN0L21vZHVsZXMvbW9kYWwvY29tcG9uZW50L2NvZGUvdHMvbW9kYWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF19