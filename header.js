System.register(["@beyond-js/kernel@0.1.7/bundle", "@beyond-js/kernel@0.1.7/styles", "react@18.2.0", "@bgroup/ui@0.0.21/form", "@bgroup/ui@0.0.21/icon"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Header, __beyond_pkg, hmr;
  _export("Header", void 0);
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_beyondJsKernel017Styles) {
      dependency_1 = _beyondJsKernel017Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_bgroupUi0021Form) {
      dependency_3 = _bgroupUi0021Form;
    }, function (_bgroupUi0021Icon) {
      dependency_4 = _bgroupUi0021Icon;
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
          "vspecifier": "@bgroup/ui@0.0.21/header"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@bgroup/ui/form', dependency_3], ['@bgroup/ui/icon', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/ui@0.0.21/header');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1221114509,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var React = require("react");
          var _form = require("@bgroup/ui/form");
          var _icon = require("@bgroup/ui/icon");
          ;
          /*bundle*/
          function Header({
            componentName
          }) {
            const theme = globalThis?.matchMedia("(prefers-color-scheme: dark)").matches;
            const themeStorage = localStorage.getItem('theme');
            const defaultTheme = theme ? "dark" : "light";
            const userTheme = themeStorage ? themeStorage === "dark" : defaultTheme === "dark";
            const [isDark, setIsDark] = React.useState(userTheme);
            function handleChange({
              target
            }) {
              const container = document.querySelector("html");
              const theme = isDark ? "light" : "dark";
              container.setAttribute("data-beyond-mode", theme);
              localStorage.setItem("theme", theme);
              setIsDark(target.checked);
            }
            ;
            React.useEffect(() => {
              if (!themeStorage) return;
              const container = document.querySelector("html");
              container.setAttribute("data-beyond-mode", themeStorage);
            }, []);
            const icon = isDark ? "moon" : "sun";
            return React.createElement("header", {
              className: "header"
            }, React.createElement("h2", {
              className: "title"
            }, componentName), React.createElement("div", {
              className: "content-theme"
            }, React.createElement(_icon.BeyondIcon, {
              icon: icon
            }), React.createElement(_form.BeyondSwitch, {
              className: "checkbox",
              checked: isDark,
              onChange: handleChange
            })));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Header",
        "name": "Header"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Header') && _export("Header", Header = require ? require('./index').Header : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBO1VBQ0E7VUFHQztVQUVNO1VBQVUsU0FBVUEsTUFBTSxDQUFDO1lBQUVDO1VBQWEsQ0FBUztZQUN6RCxNQUFNQyxLQUFLLEdBQUdDLFVBQVUsRUFBRUMsVUFBVSxDQUFDLDhCQUE4QixDQUFDLENBQUNDLE9BQU87WUFDNUUsTUFBTUMsWUFBWSxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDbEQsTUFBTUMsWUFBWSxHQUFXUCxLQUFLLEdBQUcsTUFBTSxHQUFHLE9BQU87WUFDckQsTUFBTVEsU0FBUyxHQUFZSixZQUFZLEdBQUdBLFlBQVksS0FBSyxNQUFNLEdBQUdHLFlBQVksS0FBSyxNQUFNO1lBQzNGLE1BQU0sQ0FBQ0UsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR0MsS0FBSyxDQUFDQyxRQUFRLENBQVVKLFNBQVMsQ0FBQztZQUU5RCxTQUFTSyxZQUFZLENBQUM7Y0FBRUM7WUFBTSxDQUFFO2NBQy9CLE1BQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO2NBQ2hELE1BQU1qQixLQUFLLEdBQUdTLE1BQU0sR0FBRyxPQUFPLEdBQUcsTUFBTTtjQUN2Q00sU0FBUyxDQUFDRyxZQUFZLENBQUMsa0JBQWtCLEVBQUVsQixLQUFLLENBQUM7Y0FDakRLLFlBQVksQ0FBQ2MsT0FBTyxDQUFDLE9BQU8sRUFBRW5CLEtBQUssQ0FBQztjQUNwQ1UsU0FBUyxDQUFDSSxNQUFNLENBQUNNLE9BQU8sQ0FBQztZQUMxQjtZQUFDO1lBRURULEtBQUssQ0FBQ1UsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsSUFBSSxDQUFDakIsWUFBWSxFQUFFO2NBQ25CLE1BQU1XLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO2NBQ2hERixTQUFTLENBQUNHLFlBQVksQ0FBQyxrQkFBa0IsRUFBRWQsWUFBWSxDQUFDO1lBQ3pELENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixNQUFNa0IsSUFBSSxHQUFZYixNQUFNLEdBQUcsTUFBTSxHQUFHLEtBQUs7WUFDN0MsT0FDQ0U7Y0FBUVksU0FBUyxFQUFDO1lBQVEsR0FDekJaO2NBQUlZLFNBQVMsRUFBQztZQUFPLEdBQUV4QixhQUFhLENBQU0sRUFDMUNZO2NBQUtZLFNBQVMsRUFBQztZQUFlLEdBQzdCWixvQkFBQ2EsZ0JBQVU7Y0FBQ0YsSUFBSSxFQUFFQTtZQUFJLEVBQUksRUFDMUJYLG9CQUFDYyxrQkFBWTtjQUNaRixTQUFTLEVBQUMsVUFBVTtjQUNwQkgsT0FBTyxFQUFFWCxNQUFNO2NBQ2ZpQixRQUFRLEVBQUViO1lBQVksRUFDckIsQ0FDRyxDQUNFO1VBRVgiLCJuYW1lcyI6WyJIZWFkZXIiLCJjb21wb25lbnROYW1lIiwidGhlbWUiLCJnbG9iYWxUaGlzIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ0aGVtZVN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVmYXVsdFRoZW1lIiwidXNlclRoZW1lIiwiaXNEYXJrIiwic2V0SXNEYXJrIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsInNldEl0ZW0iLCJjaGVja2VkIiwidXNlRWZmZWN0IiwiaWNvbiIsImNsYXNzTmFtZSIsIkJleW9uZEljb24iLCJCZXlvbmRTd2l0Y2giLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiY29kZS90cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=