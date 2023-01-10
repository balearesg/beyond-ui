System.register(["@beyond-js/kernel@0.1.7/bundle", "react@18.2.0", "swiper@8.4.5", "@beyond-js/kernel@0.1.7/core", "@bgroup/ui@0.0.21/icon", "@beyond-js/kernel@0.1.7/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, BeyondSwiperContext, useBeyondSwiperContext, ReactiveModel, BeyondSwiperSlider, __beyond_pkg, hmr;
  _export({
    BeyondSwiperContext: void 0,
    useBeyondSwiperContext: void 0,
    ReactiveModel: void 0,
    BeyondSwiperSlider: void 0
  });
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_swiper) {
      dependency_2 = _swiper;
    }, function (_beyondJsKernel017Core) {
      dependency_3 = _beyondJsKernel017Core;
    }, function (_bgroupUi0021Icon) {
      dependency_4 = _bgroupUi0021Icon;
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
          "vspecifier": "@bgroup/ui@0.0.21/swiper-component"
        },
        "type": "code",
        "name": "swiper-component"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['swiper', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['@bgroup/ui/icon', dependency_4], ['@beyond-js/kernel/styles', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/ui@0.0.21/swiper-component');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 856902038,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useBeyondSwiperContext = exports.BeyondSwiperContext = void 0;
          var React = require("react");
          const /*bundle*/BeyondSwiperContext = React.createContext({});
          exports.BeyondSwiperContext = BeyondSwiperContext;
          const /*bundle*/useBeyondSwiperContext = () => React.useContext(BeyondSwiperContext);
          exports.useBeyondSwiperContext = useBeyondSwiperContext;
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 3000713260,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var Swiper = require("swiper");
          var _reactiveModel = require("./reactive-model");
          const SwiperCasted = Swiper.Swiper;
          class Controller extends _reactiveModel.ReactiveModel {
            #swiper;
            get swiper() {
              return this.#swiper;
            }
            #onEnd;
            #props;
            setSwiper = (element, props, ref) => {
              this.#props = props;
              const specs = Object.assign({
                slidesPerView: props.slidesPerView ?? 1,
                modules: [Swiper.Navigation, Swiper.Pagination]
              }, props);
              if (!Swiper) {
                console.warn('Swiper keeps without been loaded');
                return;
              }
              if (props.pagination || props.footer) {
                specs.pagination = {
                  el: ref.pagination.current,
                  clickable: true,
                  type: props.typePagination ?? "bullets",
                  dynamicBullets: props.dynamicBullets ?? false
                };
              }
              if (props.navigation) {
                specs.navigation = {
                  nextEl: ref.next.current,
                  prevEl: ref.prev.current
                };
              }
              this.#swiper = new SwiperCasted(element, specs);
              if (props.activeSlide) this.#swiper.slideTo(parseInt(props.activeSlide));
              const nextSlide = () => {
                if (this.#swiper) this.#swiper.slideNext();
              };
              const prevSlide = () => {
                if (this.#swiper) this.#swiper.slidePrev();
              };
              const slideTo = index => {
                if (this.#swiper) this.#swiper.slideTo(parseInt(index));
              };
              if (props.nextSlide && typeof props.nextSlide === "function") props.nextSlide(nextSlide);
              if (props.prevSlide && typeof props.prevSlide === "function") props.prevSlide(prevSlide);
              if (props.slideTo && typeof props.slideTo === "function") props.slideTo(slideTo);
              this.#swiper.on("slideChange", () => {
                if (this.#swiper?.isEnd) {
                  this.#onEnd = true;
                  this.triggerEvent();
                } else {
                  this.#onEnd = false;
                  this.triggerEvent();
                }
              });
            };
            next = () => {
              if (!this.#swiper?.isEnd) {
                this.#swiper?.slideNext(500, false);
                return;
              }
              if (!this.#onEnd) return;
              this.#props.functionNext();
            };
          }
          exports.Controller = Controller;
        }
      });

      /********************************
      INTERNAL MODULE: ./reactive-model
      ********************************/

      ims.set('./reactive-model', {
        hash: 2422581598,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReactiveModel = void 0;
          var _core = require("@beyond-js/kernel/core");
          /*bundle*/
          class ReactiveModel extends _core.Events {
            _ready;
            get ready() {
              return this._ready;
            }
            _fetching;
            get fetching() {
              return this._fetching;
            }
            set fetching(value) {
              if (value === this._fetching) return;
              this._fetching = value;
              this.triggerEvent();
            }
            _fetched;
            get fetched() {
              return this._fetched;
            }
            _processing;
            get processing() {
              return this._processing;
            }
            _processed;
            get processed() {
              return this._processed;
            }
            _loaded;
            get loaded() {
              return this._loaded;
            }
            triggerEvent = (event = 'change') => this.trigger(event);
            /**
             * set value in a private property
             * @param property
             * @param value
             */
            _set(property, value) {
              let props = {};
              if (property && value !== 'undefined') props[property] = value;else props = property;
              let updated = false;
              for (const prop in props) {
                const key = `_${prop}`;
                if (!this.hasOwnProperty(key)) continue; //same value on store
                if (this[key] === props[prop]) continue;
                this[key] = props[prop];
                updated = true;
              }
              if (updated) this.triggerEvent();
            }
            getProperties() {
              const props = {};
              Object.keys(this).forEach(property => props[property.replace('_', '')] = this[property]);
              return props;
            }
          }
          exports.ReactiveModel = ReactiveModel;
        }
      });

      /***********************
      INTERNAL MODULE: ./slide
      ***********************/

      ims.set('./slide', {
        hash: 2634860187,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Slide = Slide;
          var React = require("react");
          function Slide(props) {
            return React.createElement("div", {
              className: "swiper-slide"
            }, props.children);
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./swiper-slider
      *******************************/

      ims.set('./swiper-slider', {
        hash: 2826156806,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondSwiperSlider = BeyondSwiperSlider;
          var React = require("react");
          var _slide = require("./slide");
          var _controller = require("./controller");
          var _icon = require("@bgroup/ui/icon");
          /*bundle*/
          function BeyondSwiperSlider(props) {
            const refs = {
              next: React.useRef(),
              container: React.useRef(),
              pagination: React.useRef(),
              prev: React.useRef()
            };
            const {
              slideTo
            } = props;
            const {
              next,
              container,
              prev
            } = refs;
            const slides = props.children.map((slide, index) => React.createElement(_slide.Slide, {
              key: index
            }, slide));
            const footer = props.footer === true;
            const [state, setState] = React.useState({});
            React.useEffect(() => {
              const controller = new _controller.Controller();
              const onChange = () => setState({
                ...state,
                ready: true,
                swiper: controller.swiper,
                controller,
                lastIndex: controller.lastIndex
              });
              controller.bind("change", onChange);
              console.log("controller", controller);
              if (!controller.destroyed) controller.setSwiper(container.current, props, refs);
              onChange();
              return () => controller.unbind("change", onChange);
            }, []);
            React.useEffect(() => {
              if (!state.swiper || !slideTo) return;
              state.swiper.slideTo(slideTo);
            }, [slideTo]);
            const {
              controller
            } = state;
            const cls = props.className ? `${props.className} beyond-element-swiper-slider` : "beyond-element-swiper-slider";
            return React.createElement("div", {
              className: cls
            }, React.createElement("div", {
              ref: container,
              className: "swiper-container"
            }, React.createElement("div", {
              className: "swiper-wrapper"
            }, slides), props.pagination && React.createElement("div", {
              ref: refs?.pagination,
              className: "swiper-pagination"
            }), footer && React.createElement(React.Fragment, null, !controller?.swiper.isEnd && React.createElement("button", {
              className: "swiper-button-prev",
              onClick: props.functionNext
            }, "SKIP"), React.createElement("div", {
              ref: refs.pagination,
              className: "swiper-pagination"
            }), React.createElement("button", {
              className: "swiper-button-next ",
              onClick: controller?.next
            }, "Next")), props.navigation && React.createElement(React.Fragment, null, React.createElement("div", {
              ref: prev,
              className: "swiper-button-prev"
            }, React.createElement(_icon.BeyondIcon, {
              icon: "left"
            })), React.createElement("div", {
              ref: next,
              className: "swiper-button-next"
            }, React.createElement(_icon.BeyondIcon, {
              icon: "right"
            })))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./context",
        "from": "BeyondSwiperContext",
        "name": "BeyondSwiperContext"
      }, {
        "im": "./context",
        "from": "useBeyondSwiperContext",
        "name": "useBeyondSwiperContext"
      }, {
        "im": "./reactive-model",
        "from": "ReactiveModel",
        "name": "ReactiveModel"
      }, {
        "im": "./swiper-slider",
        "from": "BeyondSwiperSlider",
        "name": "BeyondSwiperSlider"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BeyondSwiperContext') && _export("BeyondSwiperContext", BeyondSwiperContext = require ? require('./context').BeyondSwiperContext : value);
        (require || prop === 'useBeyondSwiperContext') && _export("useBeyondSwiperContext", useBeyondSwiperContext = require ? require('./context').useBeyondSwiperContext : value);
        (require || prop === 'ReactiveModel') && _export("ReactiveModel", ReactiveModel = require ? require('./reactive-model').ReactiveModel : value);
        (require || prop === 'BeyondSwiperSlider') && _export("BeyondSwiperSlider", BeyondSwiperSlider = require ? require('./swiper-slider').BeyondSwiperSlider : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c2VCZXlvbmRTd2lwZXJDb250ZXh0IiwidXNlQ29udGV4dCIsIlN3aXBlckNhc3RlZCIsIlN3aXBlciIsIkNvbnRyb2xsZXIiLCJSZWFjdGl2ZU1vZGVsIiwic3dpcGVyIiwic2V0U3dpcGVyIiwiZWxlbWVudCIsInByb3BzIiwicmVmIiwic3BlY3MiLCJPYmplY3QiLCJhc3NpZ24iLCJzbGlkZXNQZXJWaWV3IiwibW9kdWxlcyIsIk5hdmlnYXRpb24iLCJQYWdpbmF0aW9uIiwiY29uc29sZSIsIndhcm4iLCJwYWdpbmF0aW9uIiwiZm9vdGVyIiwiZWwiLCJjdXJyZW50IiwiY2xpY2thYmxlIiwidHlwZSIsInR5cGVQYWdpbmF0aW9uIiwiZHluYW1pY0J1bGxldHMiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwibmV4dCIsInByZXZFbCIsInByZXYiLCJhY3RpdmVTbGlkZSIsInNsaWRlVG8iLCJwYXJzZUludCIsIm5leHRTbGlkZSIsInNsaWRlTmV4dCIsInByZXZTbGlkZSIsInNsaWRlUHJldiIsImluZGV4Iiwib24iLCJpc0VuZCIsInRyaWdnZXJFdmVudCIsImZ1bmN0aW9uTmV4dCIsIkV2ZW50cyIsIl9yZWFkeSIsInJlYWR5IiwiX2ZldGNoaW5nIiwiZmV0Y2hpbmciLCJ2YWx1ZSIsIl9mZXRjaGVkIiwiZmV0Y2hlZCIsIl9wcm9jZXNzaW5nIiwicHJvY2Vzc2luZyIsIl9wcm9jZXNzZWQiLCJwcm9jZXNzZWQiLCJfbG9hZGVkIiwibG9hZGVkIiwiZXZlbnQiLCJ0cmlnZ2VyIiwiX3NldCIsInByb3BlcnR5IiwidXBkYXRlZCIsInByb3AiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImdldFByb3BlcnRpZXMiLCJrZXlzIiwiZm9yRWFjaCIsInJlcGxhY2UiLCJTbGlkZSIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiQmV5b25kU3dpcGVyU2xpZGVyIiwicmVmcyIsInVzZVJlZiIsImNvbnRhaW5lciIsInNsaWRlcyIsIm1hcCIsInNsaWRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY29udHJvbGxlciIsIm9uQ2hhbmdlIiwibGFzdEluZGV4IiwiYmluZCIsImxvZyIsImRlc3Ryb3llZCIsInVuYmluZCIsImNscyIsIm9uQ2xpY2siLCJCZXlvbmRJY29uIiwiaWNvbiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udGV4dC50c3giLCJ0cy9jb250cm9sbGVyLnRzIiwidHMvcmVhY3RpdmUtbW9kZWwudHMiLCJ0cy9zbGlkZS50c3giLCJ0cy9zd2lwZXItc2xpZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF19