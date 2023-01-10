System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["ssr-window","4.0.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = target => __defProp(target, "__esModule", {
  value: true
});
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2)) if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default")) __defProp(target, key, {
      get: () => module2[key],
      enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable
    });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */(cache => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0);

// .beyond/uimport/temp/ssr-window.4.0.2.js
var ssr_window_4_0_2_exports = {};
__export(ssr_window_4_0_2_exports, {
  extend: () => extend,
  getDocument: () => getDocument,
  getWindow: () => getWindow,
  ssrDocument: () => ssrDocument,
  ssrWindow: () => ssrWindow
});

// node_modules/ssr-window/ssr-window.esm.js
function isObject(obj) {
  return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
}
function extend(target = {}, src = {}) {
  Object.keys(src).forEach(key => {
    if (typeof target[key] === "undefined") target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      extend(target[key], src[key]);
    }
  });
}
var ssrDocument = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: {
    blur() {},
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {}
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function getDocument() {
  const doc = typeof document !== "undefined" ? document : {};
  extend(doc, ssrDocument);
  return doc;
}
var ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {}
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === "undefined") {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === "undefined") {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  const win = typeof window !== "undefined" ? window : {};
  extend(win, ssrWindow);
  return win;
}
module.exports = __toCommonJS(ssr_window_4_0_2_exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3Nzci13aW5kb3cuNC4wLjIuanMiLCIuLi9ub2RlX21vZHVsZXMvc3NyLXdpbmRvdy9zc3Itd2luZG93LmVzbS5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsImV4dGVuZCIsImdldERvY3VtZW50IiwiZ2V0V2luZG93Iiwic3NyRG9jdW1lbnQiLCJzc3JXaW5kb3ciLCJvYmoiLCJjb25zdHJ1Y3RvciIsIk9iamVjdCIsInRhcmdldCIsInNyYyIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiaXNPYmplY3QiLCJsZW5ndGgiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhY3RpdmVFbGVtZW50IiwiYmx1ciIsIm5vZGVOYW1lIiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRFbGVtZW50QnlJZCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiY3JlYXRlRWxlbWVudCIsImNoaWxkcmVuIiwiY2hpbGROb2RlcyIsInN0eWxlIiwic2V0QXR0cmlidXRlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjcmVhdGVFbGVtZW50TlMiLCJpbXBvcnROb2RlIiwibG9jYXRpb24iLCJoYXNoIiwiaG9zdCIsImhvc3RuYW1lIiwiaHJlZiIsIm9yaWdpbiIsInBhdGhuYW1lIiwicHJvdG9jb2wiLCJzZWFyY2giLCJkb2MiLCJkb2N1bWVudCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJwdXNoU3RhdGUiLCJnbyIsImJhY2siLCJDdXN0b21FdmVudCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiSW1hZ2UiLCJEYXRlIiwic2NyZWVuIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIm1hdGNoTWVkaWEiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaWQiLCJ3aW4iLCJ3aW5kb3ciXSwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==