System.register(["@beyond-js/kernel@0.1.2/bundle", "react@18.2.0", "@beyond/ui@1.0.0/icon", "@beyond-js/kernel@0.1.2/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, BeyondImage, __beyond_pkg, hmr;
  _export("BeyondImage", void 0);
  return {
    setters: [function (_beyondJsKernel012Bundle) {
      dependency_0 = _beyondJsKernel012Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondUi100Icon) {
      dependency_2 = _beyondUi100Icon;
    }, function (_beyondJsKernel012Styles) {
      dependency_3 = _beyondJsKernel012Styles;
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
          "vspecifier": "@beyond/ui@1.0.0/image"
        },
        "type": "code",
        "name": "image"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond/ui/icon', dependency_2], ['@beyond-js/kernel/styles', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/ui@1.0.0/image');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./image
      ***********************/
      ims.set('./image', {
        hash: 3098547673,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondImage = BeyondImage;
          var _react = require("react");
          var _icon = require("@beyond/ui/icon");
          /*bundle*/ /**
                      * A React component that loads an image from a URL.
                      * @param {props} props - props
                      */
          function BeyondImage(props) {
            const initialState = {
              size: "200x200",
              loaded: false
            };
            const {
              className,
              onClick,
              children,
              src,
              alt,
              onError
            } = props;
            const [image, setImage] = (0, _react.useState)();
            const [state, setState] = (0, _react.useState)(initialState);
            const onLoad = () => setState({
              ...state,
              error: false,
              htmlLoaded: true
            });
            const loadImage = (url, size) => {
              let finalSrc = url;
              const newImage = new Image();
              newImage.onload = () => setState({
                ...state,
                loaded: true,
                error: false
              });
              newImage.onerror = () => setState({
                ...state,
                error: true,
                loaded: false
              });
              newImage.src = finalSrc;
              setImage(newImage);
              setState({
                ...state,
                url: url,
                size: size,
                src: finalSrc,
                loaded: true
              });
            };
            (0, _react.useEffect)(() => {
              const currentSrc = src;
              if (state.url !== currentSrc) {
                let size = props.size ?? state.size;
                loadImage(currentSrc, size);
              }
              return () => setImage({
                ...state,
                onload: undefined,
                onerror: undefined
              });
              // eslint-disable-next-line
            }, [src]);
            const {
              error,
              loaded,
              htmlLoaded
            } = state;
            let output;
            const onClickError = event => {
              event.stopPropagation();
              if (onError && typeof onError === "function") onError(event);
            };
            let cls = `beyond-element-image ${className ? ` ${className}` : ""}`;
            if (!loaded && !htmlLoaded) cls += " beyond-element-image-preload";
            if (error) cls += " beyond-element-image-error";
            const Error = _react.default.createElement("div", {
              key: "error",
              "data-src": src,
              className: "content-error"
            }, onError && _react.default.createElement(_icon.BeyondIconButton, {
              onClick: onClickError,
              icon: "refresh"
            }));
            const Loaded = _react.default.createElement("img", {
              src: src,
              onLoad: onLoad,
              loading: props.loading ?? "eager",
              alt: alt
            });
            if (error) output = Error;
            if (loaded) output = Loaded;
            const properties = {
              ...props,
              className: cls,
              onClick
            };
            delete properties.src;
            delete properties.alt;
            delete properties.onError;
            delete properties.children;
            delete properties.size;
            delete properties.loading;
            delete properties.error;
            return _react.default.createElement("figure", {
              "data-src": src,
              ...properties
            }, output, children);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./image",
        "from": "BeyondImage",
        "name": "BeyondImage"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BeyondImage') && _export("BeyondImage", BeyondImage = require ? require('./image').BeyondImage : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBUUE7VUFrQk8sV0FKUDs7OztVQUlpQixTQUNSQSxXQUFXLENBQUNDLEtBQVk7WUFZL0IsTUFBTUMsWUFBWSxHQUFpQjtjQUFFQyxJQUFJLEVBQUUsU0FBUztjQUFFQyxNQUFNLEVBQUU7WUFBSyxDQUFFO1lBQ3JFLE1BQU07Y0FBRUMsU0FBUztjQUFFQyxPQUFPO2NBQUVDLFFBQVE7Y0FBRUMsR0FBRztjQUFFQyxHQUFHO2NBQUVDO1lBQU8sQ0FBRSxHQUFHVCxLQUFLO1lBQ2pFLE1BQU0sQ0FBQ1UsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBRyxtQkFBUSxHQUFtQztZQUNyRSxNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUcsbUJBQVEsRUFBZVosWUFBWSxDQUFDO1lBQzlELE1BQU1hLE1BQU0sR0FBZSxNQUN6QkQsUUFBUSxDQUFDO2NBQUUsR0FBR0QsS0FBSztjQUFFRyxLQUFLLEVBQUUsS0FBSztjQUFFQyxVQUFVLEVBQUU7WUFBSSxDQUFFLENBQUM7WUFDeEQsTUFBTUMsU0FBUyxHQUFHLENBQUNDLEdBQVcsRUFBRWhCLElBQVksS0FBVTtjQUNwRCxJQUFJaUIsUUFBUSxHQUFXRCxHQUFHO2NBRTFCLE1BQU1FLFFBQVEsR0FBcUIsSUFBSUMsS0FBSyxFQUFFO2NBQzlDRCxRQUFRLENBQUNFLE1BQU0sR0FBRyxNQUNoQlQsUUFBUSxDQUFDO2dCQUFFLEdBQUdELEtBQUs7Z0JBQUVULE1BQU0sRUFBRSxJQUFJO2dCQUFFWSxLQUFLLEVBQUU7Y0FBSyxDQUFFLENBQUM7Y0FDcERLLFFBQVEsQ0FBQ0csT0FBTyxHQUFHLE1BQ2pCVixRQUFRLENBQUM7Z0JBQUUsR0FBR0QsS0FBSztnQkFBRUcsS0FBSyxFQUFFLElBQUk7Z0JBQUVaLE1BQU0sRUFBRTtjQUFLLENBQUUsQ0FBQztjQUNwRGlCLFFBQVEsQ0FBQ2IsR0FBRyxHQUFHWSxRQUFRO2NBQ3ZCUixRQUFRLENBQUNTLFFBQVEsQ0FBQztjQUNsQlAsUUFBUSxDQUFDO2dCQUFFLEdBQUdELEtBQUs7Z0JBQUVNLEdBQUcsRUFBRUEsR0FBRztnQkFBRWhCLElBQUksRUFBRUEsSUFBSTtnQkFBRUssR0FBRyxFQUFFWSxRQUFRO2dCQUFFaEIsTUFBTSxFQUFFO2NBQUksQ0FBRSxDQUFDO1lBQzNFLENBQUM7WUFDRCxvQkFBUyxFQUFDLE1BQUs7Y0FDYixNQUFNcUIsVUFBVSxHQUFXakIsR0FBRztjQUM5QixJQUFJSyxLQUFLLENBQUNNLEdBQUcsS0FBS00sVUFBVSxFQUFFO2dCQUM1QixJQUFJdEIsSUFBSSxHQUFXRixLQUFLLENBQUNFLElBQUksSUFBSVUsS0FBSyxDQUFDVixJQUFJO2dCQUMzQ2UsU0FBUyxDQUFDTyxVQUFVLEVBQUV0QixJQUFJLENBQUM7O2NBRzdCLE9BQU8sTUFDTFMsUUFBUSxDQUFDO2dCQUFFLEdBQUdDLEtBQUs7Z0JBQUVVLE1BQU0sRUFBRUcsU0FBUztnQkFBRUYsT0FBTyxFQUFFRTtjQUFTLENBQUUsQ0FBQztjQUMvRDtZQUNGLENBQUMsRUFBRSxDQUFDbEIsR0FBRyxDQUFDLENBQUM7WUFFVCxNQUFNO2NBQUVRLEtBQUs7Y0FBRVosTUFBTTtjQUFFYTtZQUFVLENBQUUsR0FBR0osS0FBSztZQUMzQyxJQUFJYyxNQUFtQjtZQUN2QixNQUFNQyxZQUFZLEdBQUlDLEtBQXFDLElBQVU7Y0FDbkVBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCLElBQUlwQixPQUFPLElBQUksT0FBT0EsT0FBTyxLQUFLLFVBQVUsRUFBRUEsT0FBTyxDQUFDbUIsS0FBSyxDQUFDO1lBQzlELENBQUM7WUFFRCxJQUFJRSxHQUFHLEdBQVcsd0JBQXdCMUIsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUM1RSxJQUFJLENBQUNELE1BQU0sSUFBSSxDQUFDYSxVQUFVLEVBQUVjLEdBQUcsSUFBSSwrQkFBK0I7WUFDbEUsSUFBSWYsS0FBSyxFQUFFZSxHQUFHLElBQUksNkJBQTZCO1lBQy9DLE1BQU1DLEtBQUssR0FDVEM7Y0FBS0MsR0FBRyxFQUFDLE9BQU87Y0FBQSxZQUFXMUIsR0FBRztjQUFFSCxTQUFTLEVBQUM7WUFBZSxHQUN0REssT0FBTyxJQUFJdUIsNkJBQUNFLHNCQUFnQjtjQUFDN0IsT0FBTyxFQUFFc0IsWUFBWTtjQUFFUSxJQUFJLEVBQUM7WUFBUyxFQUFHLENBRXpFO1lBQ0QsTUFBTUMsTUFBTSxHQUNWSjtjQUNFekIsR0FBRyxFQUFFQSxHQUFHO2NBQ1JPLE1BQU0sRUFBRUEsTUFBTTtjQUNkdUIsT0FBTyxFQUFFckMsS0FBSyxDQUFDcUMsT0FBTyxJQUFJLE9BQU87Y0FDakM3QixHQUFHLEVBQUVBO1lBQUcsRUFFWDtZQUNELElBQUlPLEtBQUssRUFBRVcsTUFBTSxHQUFHSyxLQUFLO1lBQ3pCLElBQUk1QixNQUFNLEVBQUV1QixNQUFNLEdBQUdVLE1BQU07WUFFM0IsTUFBTUUsVUFBVSxHQUFVO2NBQUUsR0FBR3RDLEtBQUs7Y0FBRUksU0FBUyxFQUFFMEIsR0FBRztjQUFFekI7WUFBTyxDQUFFO1lBQy9ELE9BQU9pQyxVQUFVLENBQUMvQixHQUFHO1lBQ3JCLE9BQU8rQixVQUFVLENBQUM5QixHQUFHO1lBQ3JCLE9BQU84QixVQUFVLENBQUM3QixPQUFPO1lBQ3pCLE9BQU82QixVQUFVLENBQUNoQyxRQUFRO1lBQzFCLE9BQU9nQyxVQUFVLENBQUNwQyxJQUFJO1lBQ3RCLE9BQU9vQyxVQUFVLENBQUNELE9BQU87WUFDekIsT0FBT0MsVUFBVSxDQUFDdkIsS0FBSztZQUV2QixPQUNFaUI7Y0FBQSxZQUFrQnpCLEdBQUc7Y0FBQSxHQUFNK0I7WUFBVSxHQUNsQ1osTUFBTSxFQUNOcEIsUUFBUSxDQUNGO1VBRWIiLCJuYW1lcyI6WyJCZXlvbmRJbWFnZSIsInByb3BzIiwiaW5pdGlhbFN0YXRlIiwic2l6ZSIsImxvYWRlZCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJjaGlsZHJlbiIsInNyYyIsImFsdCIsIm9uRXJyb3IiLCJpbWFnZSIsInNldEltYWdlIiwic3RhdGUiLCJzZXRTdGF0ZSIsIm9uTG9hZCIsImVycm9yIiwiaHRtbExvYWRlZCIsImxvYWRJbWFnZSIsInVybCIsImZpbmFsU3JjIiwibmV3SW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJjdXJyZW50U3JjIiwidW5kZWZpbmVkIiwib3V0cHV0Iiwib25DbGlja0Vycm9yIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjbHMiLCJFcnJvciIsIlJlYWN0Iiwia2V5IiwiQmV5b25kSWNvbkJ1dHRvbiIsImljb24iLCJMb2FkZWQiLCJsb2FkaW5nIiwicHJvcGVydGllcyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsicHJvamVjdC9tb2R1bGVzL2ltYWdlL2NvbXBvbmVudC9jb2RlL3RzL2ltYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==