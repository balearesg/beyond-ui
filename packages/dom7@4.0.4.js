System.register(["ssr-window@4.0.2"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["ssr-window","4.0.2"],["dom7","4.0.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('ssr-window@4.0.2', dep)],
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

// .beyond/uimport/temp/dom7.4.0.4.js
var dom7_4_0_4_exports = {};
__export(dom7_4_0_4_exports, {
  $: () => $,
  add: () => add,
  addClass: () => addClass,
  animate: () => animate,
  animationEnd: () => animationEnd,
  append: () => append,
  appendTo: () => appendTo,
  attr: () => attr,
  blur: () => blur,
  change: () => change,
  children: () => children,
  click: () => click,
  closest: () => closest,
  css: () => css,
  data: () => data,
  dataset: () => dataset,
  default: () => dom7_4_0_4_default,
  detach: () => detach,
  each: () => each,
  empty: () => empty,
  eq: () => eq,
  filter: () => filter,
  find: () => find,
  focus: () => focus,
  focusin: () => focusin,
  focusout: () => focusout,
  hasClass: () => hasClass,
  height: () => height,
  hide: () => hide,
  html: () => html,
  index: () => index,
  insertAfter: () => insertAfter,
  insertBefore: () => insertBefore,
  is: () => is,
  keydown: () => keydown,
  keypress: () => keypress,
  keyup: () => keyup,
  mousedown: () => mousedown,
  mouseenter: () => mouseenter,
  mouseleave: () => mouseleave,
  mousemove: () => mousemove,
  mouseout: () => mouseout,
  mouseover: () => mouseover,
  mouseup: () => mouseup,
  next: () => next,
  nextAll: () => nextAll,
  off: () => off,
  offset: () => offset,
  on: () => on,
  once: () => once,
  outerHeight: () => outerHeight,
  outerWidth: () => outerWidth,
  parent: () => parent,
  parents: () => parents,
  prepend: () => prepend,
  prependTo: () => prependTo,
  prev: () => prev,
  prevAll: () => prevAll,
  prop: () => prop,
  remove: () => remove,
  removeAttr: () => removeAttr,
  removeClass: () => removeClass,
  removeData: () => removeData,
  resize: () => resize,
  scroll: () => scroll,
  scrollLeft: () => scrollLeft,
  scrollTo: () => scrollTo,
  scrollTop: () => scrollTop,
  show: () => show,
  siblings: () => siblings,
  stop: () => stop,
  styles: () => styles,
  submit: () => submit,
  text: () => text,
  toggleClass: () => toggleClass,
  touchend: () => touchend,
  touchmove: () => touchmove,
  touchstart: () => touchstart,
  transform: () => transform,
  transition: () => transition,
  transitionEnd: () => transitionEnd,
  trigger: () => trigger,
  val: () => val,
  value: () => value,
  width: () => width
});

// node_modules/dom7/dom7.esm.js
var import_ssr_window = require("ssr-window@4.0.2");
function makeReactive(obj) {
  const proto = obj.__proto__;
  Object.defineProperty(obj, "__proto__", {
    get() {
      return proto;
    },
    set(value2) {
      proto.__proto__ = value2;
    }
  });
}
var Dom7 = class extends Array {
  constructor(items) {
    if (typeof items === "number") {
      super(items);
    } else {
      super(...(items || []));
      makeReactive(this);
    }
  }
};
function arrayFlat(arr = []) {
  const res = [];
  arr.forEach(el => {
    if (Array.isArray(el)) {
      res.push(...arrayFlat(el));
    } else {
      res.push(el);
    }
  });
  return res;
}
function arrayFilter(arr, callback) {
  return Array.prototype.filter.call(arr, callback);
}
function arrayUnique(arr) {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }
  return uniqueArray;
}
function toCamelCase(string) {
  return string.toLowerCase().replace(/-(.)/g, (match, group) => group.toUpperCase());
}
function qsa(selector, context) {
  if (typeof selector !== "string") {
    return [selector];
  }
  const a = [];
  const res = context.querySelectorAll(selector);
  for (let i = 0; i < res.length; i += 1) {
    a.push(res[i]);
  }
  return a;
}
function $(selector, context) {
  const window = (0, import_ssr_window.getWindow)();
  const document = (0, import_ssr_window.getDocument)();
  let arr = [];
  if (!context && selector instanceof Dom7) {
    return selector;
  }
  if (!selector) {
    return new Dom7(arr);
  }
  if (typeof selector === "string") {
    const html2 = selector.trim();
    if (html2.indexOf("<") >= 0 && html2.indexOf(">") >= 0) {
      let toCreate = "div";
      if (html2.indexOf("<li") === 0) toCreate = "ul";
      if (html2.indexOf("<tr") === 0) toCreate = "tbody";
      if (html2.indexOf("<td") === 0 || html2.indexOf("<th") === 0) toCreate = "tr";
      if (html2.indexOf("<tbody") === 0) toCreate = "table";
      if (html2.indexOf("<option") === 0) toCreate = "select";
      const tempParent = document.createElement(toCreate);
      tempParent.innerHTML = html2;
      for (let i = 0; i < tempParent.childNodes.length; i += 1) {
        arr.push(tempParent.childNodes[i]);
      }
    } else {
      arr = qsa(selector.trim(), context || document);
    }
  } else if (selector.nodeType || selector === window || selector === document) {
    arr.push(selector);
  } else if (Array.isArray(selector)) {
    if (selector instanceof Dom7) return selector;
    arr = selector;
  }
  return new Dom7(arrayUnique(arr));
}
$.fn = Dom7.prototype;
function addClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(" ")));
  this.forEach(el => {
    el.classList.add(...classNames);
  });
  return this;
}
function removeClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(" ")));
  this.forEach(el => {
    el.classList.remove(...classNames);
  });
  return this;
}
function toggleClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(" ")));
  this.forEach(el => {
    classNames.forEach(className => {
      el.classList.toggle(className);
    });
  });
}
function hasClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(" ")));
  return arrayFilter(this, el => {
    return classNames.filter(className => el.classList.contains(className)).length > 0;
  }).length > 0;
}
function attr(attrs, value2) {
  if (arguments.length === 1 && typeof attrs === "string") {
    if (this[0]) return this[0].getAttribute(attrs);
    return void 0;
  }
  for (let i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      this[i].setAttribute(attrs, value2);
    } else {
      for (const attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }
  return this;
}
function removeAttr(attr2) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr2);
  }
  return this;
}
function prop(props, value2) {
  if (arguments.length === 1 && typeof props === "string") {
    if (this[0]) return this[0][props];
  } else {
    for (let i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        this[i][props] = value2;
      } else {
        for (const propName in props) {
          this[i][propName] = props[propName];
        }
      }
    }
    return this;
  }
  return this;
}
function data(key, value2) {
  let el;
  if (typeof value2 === "undefined") {
    el = this[0];
    if (!el) return void 0;
    if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
      return el.dom7ElementDataStorage[key];
    }
    const dataKey = el.getAttribute(`data-${key}`);
    if (dataKey) {
      return dataKey;
    }
    return void 0;
  }
  for (let i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value2;
  }
  return this;
}
function removeData(key) {
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
      el.dom7ElementDataStorage[key] = null;
      delete el.dom7ElementDataStorage[key];
    }
  }
}
function dataset() {
  const el = this[0];
  if (!el) return void 0;
  const dataset2 = {};
  if (el.dataset) {
    for (const dataKey in el.dataset) {
      dataset2[dataKey] = el.dataset[dataKey];
    }
  } else {
    for (let i = 0; i < el.attributes.length; i += 1) {
      const attr2 = el.attributes[i];
      if (attr2.name.indexOf("data-") >= 0) {
        dataset2[toCamelCase(attr2.name.split("data-")[1])] = attr2.value;
      }
    }
  }
  for (const key in dataset2) {
    if (dataset2[key] === "false") dataset2[key] = false;else if (dataset2[key] === "true") dataset2[key] = true;else if (parseFloat(dataset2[key]) === dataset2[key] * 1) dataset2[key] *= 1;
  }
  return dataset2;
}
function val(value2) {
  if (typeof value2 === "undefined") {
    const el = this[0];
    if (!el) return void 0;
    if (el.multiple && el.nodeName.toLowerCase() === "select") {
      const values = [];
      for (let i = 0; i < el.selectedOptions.length; i += 1) {
        values.push(el.selectedOptions[i].value);
      }
      return values;
    }
    return el.value;
  }
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (Array.isArray(value2) && el.multiple && el.nodeName.toLowerCase() === "select") {
      for (let j = 0; j < el.options.length; j += 1) {
        el.options[j].selected = value2.indexOf(el.options[j].value) >= 0;
      }
    } else {
      el.value = value2;
    }
  }
  return this;
}
function value(value2) {
  return this.val(value2);
}
function transform(transform2) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.transform = transform2;
  }
  return this;
}
function transition(duration) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.transitionDuration = typeof duration !== "string" ? `${duration}ms` : duration;
  }
  return this;
}
function on(...args) {
  let [eventType, targetSelector, listener, capture] = args;
  if (typeof args[1] === "function") {
    [eventType, listener, capture] = args;
    targetSelector = void 0;
  }
  if (!capture) capture = false;
  function handleLiveEvent(e) {
    const target = e.target;
    if (!target) return;
    const eventData = e.target.dom7EventData || [];
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }
    if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
      const parents2 = $(target).parents();
      for (let k = 0; k < parents2.length; k += 1) {
        if ($(parents2[k]).is(targetSelector)) listener.apply(parents2[k], eventData);
      }
    }
  }
  function handleEvent(e) {
    const eventData = e && e.target ? e.target.dom7EventData || [] : [];
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }
    listener.apply(this, eventData);
  }
  const events = eventType.split(" ");
  let j;
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        const event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener,
          proxyListener: handleEvent
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      for (j = 0; j < events.length; j += 1) {
        const event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
        el.dom7LiveListeners[event].push({
          listener,
          proxyListener: handleLiveEvent
        });
        el.addEventListener(event, handleLiveEvent, capture);
      }
    }
  }
  return this;
}
function off(...args) {
  let [eventType, targetSelector, listener, capture] = args;
  if (typeof args[1] === "function") {
    [eventType, listener, capture] = args;
    targetSelector = void 0;
  }
  if (!capture) capture = false;
  const events = eventType.split(" ");
  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];
    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];
      let handlers;
      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }
      if (handlers && handlers.length) {
        for (let k = handlers.length - 1; k >= 0; k -= 1) {
          const handler = handlers[k];
          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }
  return this;
}
function once(...args) {
  const dom = this;
  let [eventName, targetSelector, listener, capture] = args;
  if (typeof args[1] === "function") {
    [eventName, listener, capture] = args;
    targetSelector = void 0;
  }
  function onceHandler(...eventArgs) {
    listener.apply(this, eventArgs);
    dom.off(eventName, targetSelector, onceHandler, capture);
    if (onceHandler.dom7proxy) {
      delete onceHandler.dom7proxy;
    }
  }
  onceHandler.dom7proxy = listener;
  return dom.on(eventName, targetSelector, onceHandler, capture);
}
function trigger(...args) {
  const window = (0, import_ssr_window.getWindow)();
  const events = args[0].split(" ");
  const eventData = args[1];
  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];
    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];
      if (window.CustomEvent) {
        const evt = new window.CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
        el.dom7EventData = args.filter((data2, dataIndex) => dataIndex > 0);
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
  }
  return this;
}
function transitionEnd(callback) {
  const dom = this;
  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off("transitionend", fireCallBack);
  }
  if (callback) {
    dom.on("transitionend", fireCallBack);
  }
  return this;
}
function animationEnd(callback) {
  const dom = this;
  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off("animationend", fireCallBack);
  }
  if (callback) {
    dom.on("animationend", fireCallBack);
  }
  return this;
}
function width() {
  const window = (0, import_ssr_window.getWindow)();
  if (this[0] === window) {
    return window.innerWidth;
  }
  if (this.length > 0) {
    return parseFloat(this.css("width"));
  }
  return null;
}
function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      const styles2 = this.styles();
      return this[0].offsetWidth + parseFloat(styles2.getPropertyValue("margin-right")) + parseFloat(styles2.getPropertyValue("margin-left"));
    }
    return this[0].offsetWidth;
  }
  return null;
}
function height() {
  const window = (0, import_ssr_window.getWindow)();
  if (this[0] === window) {
    return window.innerHeight;
  }
  if (this.length > 0) {
    return parseFloat(this.css("height"));
  }
  return null;
}
function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      const styles2 = this.styles();
      return this[0].offsetHeight + parseFloat(styles2.getPropertyValue("margin-top")) + parseFloat(styles2.getPropertyValue("margin-bottom"));
    }
    return this[0].offsetHeight;
  }
  return null;
}
function offset() {
  if (this.length > 0) {
    const window = (0, import_ssr_window.getWindow)();
    const document = (0, import_ssr_window.getDocument)();
    const el = this[0];
    const box = el.getBoundingClientRect();
    const body = document.body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop2 = el === window ? window.scrollY : el.scrollTop;
    const scrollLeft2 = el === window ? window.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop2 - clientTop,
      left: box.left + scrollLeft2 - clientLeft
    };
  }
  return null;
}
function hide() {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.display = "none";
  }
  return this;
}
function show() {
  const window = (0, import_ssr_window.getWindow)();
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (el.style.display === "none") {
      el.style.display = "";
    }
    if (window.getComputedStyle(el, null).getPropertyValue("display") === "none") {
      el.style.display = "block";
    }
  }
  return this;
}
function styles() {
  const window = (0, import_ssr_window.getWindow)();
  if (this[0]) return window.getComputedStyle(this[0], null);
  return {};
}
function css(props, value2) {
  const window = (0, import_ssr_window.getWindow)();
  let i;
  if (arguments.length === 1) {
    if (typeof props === "string") {
      if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      for (i = 0; i < this.length; i += 1) {
        for (const prop2 in props) {
          this[i].style[prop2] = props[prop2];
        }
      }
      return this;
    }
  }
  if (arguments.length === 2 && typeof props === "string") {
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value2;
    }
    return this;
  }
  return this;
}
function each(callback) {
  if (!callback) return this;
  this.forEach((el, index2) => {
    callback.apply(el, [el, index2]);
  });
  return this;
}
function filter(callback) {
  const result = arrayFilter(this, callback);
  return $(result);
}
function html(html2) {
  if (typeof html2 === "undefined") {
    return this[0] ? this[0].innerHTML : null;
  }
  for (let i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html2;
  }
  return this;
}
function text(text2) {
  if (typeof text2 === "undefined") {
    return this[0] ? this[0].textContent.trim() : null;
  }
  for (let i = 0; i < this.length; i += 1) {
    this[i].textContent = text2;
  }
  return this;
}
function is(selector) {
  const window = (0, import_ssr_window.getWindow)();
  const document = (0, import_ssr_window.getDocument)();
  const el = this[0];
  let compareWith;
  let i;
  if (!el || typeof selector === "undefined") return false;
  if (typeof selector === "string") {
    if (el.matches) return el.matches(selector);
    if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    if (el.msMatchesSelector) return el.msMatchesSelector(selector);
    compareWith = $(selector);
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }
    return false;
  }
  if (selector === document) {
    return el === document;
  }
  if (selector === window) {
    return el === window;
  }
  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }
    return false;
  }
  return false;
}
function index() {
  let child = this[0];
  let i;
  if (child) {
    i = 0;
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return void 0;
}
function eq(index2) {
  if (typeof index2 === "undefined") return this;
  const length = this.length;
  if (index2 > length - 1) {
    return $([]);
  }
  if (index2 < 0) {
    const returnIndex = length + index2;
    if (returnIndex < 0) return $([]);
    return $([this[returnIndex]]);
  }
  return $([this[index2]]);
}
function append(...els) {
  let newChild;
  const document = (0, import_ssr_window.getDocument)();
  for (let k = 0; k < els.length; k += 1) {
    newChild = els[k];
    for (let i = 0; i < this.length; i += 1) {
      if (typeof newChild === "string") {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = newChild;
        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (let j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }
  return this;
}
function appendTo(parent2) {
  $(parent2).append(this);
  return this;
}
function prepend(newChild) {
  const document = (0, import_ssr_window.getDocument)();
  let i;
  let j;
  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === "string") {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = newChild;
      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }
  return this;
}
function prependTo(parent2) {
  $(parent2).prepend(this);
  return this;
}
function insertBefore(selector) {
  const before = $(selector);
  for (let i = 0; i < this.length; i += 1) {
    if (before.length === 1) {
      before[0].parentNode.insertBefore(this[i], before[0]);
    } else if (before.length > 1) {
      for (let j = 0; j < before.length; j += 1) {
        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
      }
    }
  }
}
function insertAfter(selector) {
  const after = $(selector);
  for (let i = 0; i < this.length; i += 1) {
    if (after.length === 1) {
      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
    } else if (after.length > 1) {
      for (let j = 0; j < after.length; j += 1) {
        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
      }
    }
  }
}
function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return $([this[0].nextElementSibling]);
      }
      return $([]);
    }
    if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
    return $([]);
  }
  return $([]);
}
function nextAll(selector) {
  const nextEls = [];
  let el = this[0];
  if (!el) return $([]);
  while (el.nextElementSibling) {
    const next2 = el.nextElementSibling;
    if (selector) {
      if ($(next2).is(selector)) nextEls.push(next2);
    } else nextEls.push(next2);
    el = next2;
  }
  return $(nextEls);
}
function prev(selector) {
  if (this.length > 0) {
    const el = this[0];
    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return $([el.previousElementSibling]);
      }
      return $([]);
    }
    if (el.previousElementSibling) return $([el.previousElementSibling]);
    return $([]);
  }
  return $([]);
}
function prevAll(selector) {
  const prevEls = [];
  let el = this[0];
  if (!el) return $([]);
  while (el.previousElementSibling) {
    const prev2 = el.previousElementSibling;
    if (selector) {
      if ($(prev2).is(selector)) prevEls.push(prev2);
    } else prevEls.push(prev2);
    el = prev2;
  }
  return $(prevEls);
}
function siblings(selector) {
  return this.nextAll(selector).add(this.prevAll(selector));
}
function parent(selector) {
  const parents2 = [];
  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) parents2.push(this[i].parentNode);
      } else {
        parents2.push(this[i].parentNode);
      }
    }
  }
  return $(parents2);
}
function parents(selector) {
  const parents2 = [];
  for (let i = 0; i < this.length; i += 1) {
    let parent2 = this[i].parentNode;
    while (parent2) {
      if (selector) {
        if ($(parent2).is(selector)) parents2.push(parent2);
      } else {
        parents2.push(parent2);
      }
      parent2 = parent2.parentNode;
    }
  }
  return $(parents2);
}
function closest(selector) {
  let closest2 = this;
  if (typeof selector === "undefined") {
    return $([]);
  }
  if (!closest2.is(selector)) {
    closest2 = closest2.parents(selector).eq(0);
  }
  return closest2;
}
function find(selector) {
  const foundElements = [];
  for (let i = 0; i < this.length; i += 1) {
    const found = this[i].querySelectorAll(selector);
    for (let j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }
  return $(foundElements);
}
function children(selector) {
  const children2 = [];
  for (let i = 0; i < this.length; i += 1) {
    const childNodes = this[i].children;
    for (let j = 0; j < childNodes.length; j += 1) {
      if (!selector || $(childNodes[j]).is(selector)) {
        children2.push(childNodes[j]);
      }
    }
  }
  return $(children2);
}
function remove() {
  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }
  return this;
}
function detach() {
  return this.remove();
}
function add(...els) {
  const dom = this;
  let i;
  let j;
  for (i = 0; i < els.length; i += 1) {
    const toAdd = $(els[i]);
    for (j = 0; j < toAdd.length; j += 1) {
      dom.push(toAdd[j]);
    }
  }
  return dom;
}
function empty() {
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (el.nodeType === 1) {
      for (let j = 0; j < el.childNodes.length; j += 1) {
        if (el.childNodes[j].parentNode) {
          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
        }
      }
      el.textContent = "";
    }
  }
  return this;
}
function scrollTo(...args) {
  const window = (0, import_ssr_window.getWindow)();
  let [left, top, duration, easing, callback] = args;
  if (args.length === 4 && typeof easing === "function") {
    callback = easing;
    [left, top, duration, callback, easing] = args;
  }
  if (typeof easing === "undefined") easing = "swing";
  return this.each(function animate2() {
    const el = this;
    let currentTop;
    let currentLeft;
    let maxTop;
    let maxLeft;
    let newTop;
    let newLeft;
    let scrollTop2;
    let scrollLeft2;
    let animateTop = top > 0 || top === 0;
    let animateLeft = left > 0 || left === 0;
    if (typeof easing === "undefined") {
      easing = "swing";
    }
    if (animateTop) {
      currentTop = el.scrollTop;
      if (!duration) {
        el.scrollTop = top;
      }
    }
    if (animateLeft) {
      currentLeft = el.scrollLeft;
      if (!duration) {
        el.scrollLeft = left;
      }
    }
    if (!duration) return;
    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }
    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }
    let startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;
    function render(time = new Date().getTime()) {
      if (startTime === null) {
        startTime = time;
      }
      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = easing === "linear" ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
      let done;
      if (animateTop) scrollTop2 = currentTop + easeProgress * (newTop - currentTop);
      if (animateLeft) scrollLeft2 = currentLeft + easeProgress * (newLeft - currentLeft);
      if (animateTop && newTop > currentTop && scrollTop2 >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }
      if (animateTop && newTop < currentTop && scrollTop2 <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }
      if (animateLeft && newLeft > currentLeft && scrollLeft2 >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }
      if (animateLeft && newLeft < currentLeft && scrollLeft2 <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }
      if (done) {
        if (callback) callback();
        return;
      }
      if (animateTop) el.scrollTop = scrollTop2;
      if (animateLeft) el.scrollLeft = scrollLeft2;
      window.requestAnimationFrame(render);
    }
    window.requestAnimationFrame(render);
  });
}
function scrollTop(...args) {
  let [top, duration, easing, callback] = args;
  if (args.length === 3 && typeof easing === "function") {
    [top, duration, callback, easing] = args;
  }
  const dom = this;
  if (typeof top === "undefined") {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }
  return dom.scrollTo(void 0, top, duration, easing, callback);
}
function scrollLeft(...args) {
  let [left, duration, easing, callback] = args;
  if (args.length === 3 && typeof easing === "function") {
    [left, duration, callback, easing] = args;
  }
  const dom = this;
  if (typeof left === "undefined") {
    if (dom.length > 0) return dom[0].scrollLeft;
    return null;
  }
  return dom.scrollTo(left, void 0, duration, easing, callback);
}
function animate(initialProps, initialParams) {
  const window = (0, import_ssr_window.getWindow)();
  const els = this;
  const a = {
    props: Object.assign({}, initialProps),
    params: Object.assign({
      duration: 300,
      easing: "swing"
    }, initialParams),
    elements: els,
    animating: false,
    que: [],
    easingProgress(easing, progress) {
      if (easing === "swing") {
        return 0.5 - Math.cos(progress * Math.PI) / 2;
      }
      if (typeof easing === "function") {
        return easing(progress);
      }
      return progress;
    },
    stop() {
      if (a.frameId) {
        window.cancelAnimationFrame(a.frameId);
      }
      a.animating = false;
      a.elements.each(el => {
        const element = el;
        delete element.dom7AnimateInstance;
      });
      a.que = [];
    },
    done(complete) {
      a.animating = false;
      a.elements.each(el => {
        const element = el;
        delete element.dom7AnimateInstance;
      });
      if (complete) complete(els);
      if (a.que.length > 0) {
        const que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },
    animate(props, params) {
      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }
      const elements = [];
      a.elements.each((el, index2) => {
        let initialFullValue;
        let initialValue;
        let unit;
        let finalValue;
        let finalFullValue;
        if (!el.dom7AnimateInstance) a.elements[index2].dom7AnimateInstance = a;
        elements[index2] = {
          container: el
        };
        Object.keys(props).forEach(prop2 => {
          initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop2).replace(",", ".");
          initialValue = parseFloat(initialFullValue);
          unit = initialFullValue.replace(initialValue, "");
          finalValue = parseFloat(props[prop2]);
          finalFullValue = props[prop2] + unit;
          elements[index2][prop2] = {
            initialFullValue,
            initialValue,
            unit,
            finalValue,
            finalFullValue,
            currentValue: initialValue
          };
        });
      });
      let startTime = null;
      let time;
      let elementsDone = 0;
      let propsDone = 0;
      let done;
      let began = false;
      a.animating = true;
      function render() {
        time = new Date().getTime();
        let progress;
        let easeProgress;
        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }
        if (startTime === null) {
          startTime = time;
        }
        if (params.progress) {
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
        }
        elements.forEach(element => {
          const el = element;
          if (done || el.done) return;
          Object.keys(props).forEach(prop2 => {
            if (done || el.done) return;
            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
            easeProgress = a.easingProgress(params.easing, progress);
            const {
              initialValue,
              finalValue,
              unit
            } = el[prop2];
            el[prop2].currentValue = initialValue + easeProgress * (finalValue - initialValue);
            const currentValue = el[prop2].currentValue;
            if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
              el.container.style[prop2] = finalValue + unit;
              propsDone += 1;
              if (propsDone === Object.keys(props).length) {
                el.done = true;
                elementsDone += 1;
              }
              if (elementsDone === elements.length) {
                done = true;
              }
            }
            if (done) {
              a.done(params.complete);
              return;
            }
            el.container.style[prop2] = currentValue + unit;
          });
        });
        if (done) return;
        a.frameId = window.requestAnimationFrame(render);
      }
      a.frameId = window.requestAnimationFrame(render);
      return a;
    }
  };
  if (a.elements.length === 0) {
    return els;
  }
  let animateInstance;
  for (let i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }
  if (!animateInstance) {
    animateInstance = a;
  }
  if (initialProps === "stop") {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }
  return els;
}
function stop() {
  const els = this;
  for (let i = 0; i < els.length; i += 1) {
    if (els[i].dom7AnimateInstance) {
      els[i].dom7AnimateInstance.stop();
    }
  }
}
var noTrigger = "resize scroll".split(" ");
function shortcut(name) {
  function eventHandler(...args) {
    if (typeof args[0] === "undefined") {
      for (let i = 0; i < this.length; i += 1) {
        if (noTrigger.indexOf(name) < 0) {
          if (name in this[i]) this[i][name]();else {
            $(this[i]).trigger(name);
          }
        }
      }
      return this;
    }
    return this.on(name, ...args);
  }
  return eventHandler;
}
var click = shortcut("click");
var blur = shortcut("blur");
var focus = shortcut("focus");
var focusin = shortcut("focusin");
var focusout = shortcut("focusout");
var keyup = shortcut("keyup");
var keydown = shortcut("keydown");
var keypress = shortcut("keypress");
var submit = shortcut("submit");
var change = shortcut("change");
var mousedown = shortcut("mousedown");
var mousemove = shortcut("mousemove");
var mouseup = shortcut("mouseup");
var mouseenter = shortcut("mouseenter");
var mouseleave = shortcut("mouseleave");
var mouseout = shortcut("mouseout");
var mouseover = shortcut("mouseover");
var touchstart = shortcut("touchstart");
var touchend = shortcut("touchend");
var touchmove = shortcut("touchmove");
var resize = shortcut("resize");
var scroll = shortcut("scroll");
var dom7_esm_default = $;

// .beyond/uimport/temp/dom7.4.0.4.js
var dom7_4_0_4_default = dom7_esm_default;
module.exports = __toCommonJS(dom7_4_0_4_exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2RvbTcuNC4wLjQuanMiLCIuLi9ub2RlX21vZHVsZXMvZG9tNy9kb203LmVzbS5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsIiQiLCJhZGQiLCJhZGRDbGFzcyIsImFuaW1hdGUiLCJhbmltYXRpb25FbmQiLCJhcHBlbmQiLCJhcHBlbmRUbyIsImF0dHIiLCJibHVyIiwiY2hhbmdlIiwiY2hpbGRyZW4iLCJjbGljayIsImNsb3Nlc3QiLCJjc3MiLCJkYXRhIiwiZGF0YXNldCIsImRlZmF1bHQiLCJkZXRhY2giLCJlYWNoIiwiZW1wdHkiLCJlcSIsImZpbHRlciIsImZpbmQiLCJmb2N1cyIsImZvY3VzaW4iLCJmb2N1c291dCIsImhhc0NsYXNzIiwiaGVpZ2h0IiwiaGlkZSIsImh0bWwiLCJpbmRleCIsImluc2VydEFmdGVyIiwiaW5zZXJ0QmVmb3JlIiwiaXMiLCJrZXlkb3duIiwia2V5cHJlc3MiLCJrZXl1cCIsIm1vdXNlZG93biIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwibW91c2Vtb3ZlIiwibW91c2VvdXQiLCJtb3VzZW92ZXIiLCJtb3VzZXVwIiwibmV4dCIsIm5leHRBbGwiLCJvZmYiLCJvZmZzZXQiLCJvbiIsIm9uY2UiLCJvdXRlckhlaWdodCIsIm91dGVyV2lkdGgiLCJwYXJlbnQiLCJwYXJlbnRzIiwicHJlcGVuZCIsInByZXBlbmRUbyIsInByZXYiLCJwcmV2QWxsIiwicHJvcCIsInJlbW92ZSIsInJlbW92ZUF0dHIiLCJyZW1vdmVDbGFzcyIsInJlbW92ZURhdGEiLCJyZXNpemUiLCJzY3JvbGwiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG8iLCJzY3JvbGxUb3AiLCJzaG93Iiwic2libGluZ3MiLCJzdG9wIiwic3R5bGVzIiwic3VibWl0IiwidGV4dCIsInRvZ2dsZUNsYXNzIiwidG91Y2hlbmQiLCJ0b3VjaG1vdmUiLCJ0b3VjaHN0YXJ0IiwidHJhbnNmb3JtIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25FbmQiLCJ0cmlnZ2VyIiwidmFsIiwidmFsdWUiLCJ3aWR0aCIsInJlcXVpcmUiLCJvYmoiLCJwcm90byIsIl9fcHJvdG9fXyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0Iiwic2V0IiwidmFsdWUyIiwiQXJyYXkiLCJjb25zdHJ1Y3RvciIsIml0ZW1zIiwibWFrZVJlYWN0aXZlIiwiYXJyIiwicmVzIiwiZm9yRWFjaCIsImVsIiwiaXNBcnJheSIsInB1c2giLCJhcnJheUZsYXQiLCJjYWxsYmFjayIsInByb3RvdHlwZSIsImNhbGwiLCJ1bmlxdWVBcnJheSIsImkiLCJsZW5ndGgiLCJpbmRleE9mIiwic3RyaW5nIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwibWF0Y2giLCJncm91cCIsInRvVXBwZXJDYXNlIiwic2VsZWN0b3IiLCJjb250ZXh0IiwiYSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ3aW5kb3ciLCJkb2N1bWVudCIsIkRvbTciLCJodG1sMiIsInRyaW0iLCJ0b0NyZWF0ZSIsInRlbXBQYXJlbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2hpbGROb2RlcyIsInFzYSIsIm5vZGVUeXBlIiwiYXJyYXlVbmlxdWUiLCJmbiIsImNsYXNzZXMiLCJjbGFzc05hbWVzIiwibWFwIiwiYyIsInNwbGl0IiwiY2xhc3NMaXN0IiwiY2xhc3NOYW1lIiwidG9nZ2xlIiwiYXJyYXlGaWx0ZXIiLCJjb250YWlucyIsImF0dHJzIiwiYXJndW1lbnRzIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiYXR0ck5hbWUiLCJhdHRyMiIsInJlbW92ZUF0dHJpYnV0ZSIsInByb3BzIiwicHJvcE5hbWUiLCJrZXkiLCJkb203RWxlbWVudERhdGFTdG9yYWdlIiwiZGF0YUtleSIsImRhdGFzZXQyIiwiYXR0cmlidXRlcyIsIm5hbWUiLCJ0b0NhbWVsQ2FzZSIsInBhcnNlRmxvYXQiLCJtdWx0aXBsZSIsIm5vZGVOYW1lIiwidmFsdWVzIiwic2VsZWN0ZWRPcHRpb25zIiwiaiIsIm9wdGlvbnMiLCJzZWxlY3RlZCIsInRyYW5zZm9ybTIiLCJzdHlsZSIsImR1cmF0aW9uIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiYXJncyIsImV2ZW50VHlwZSIsInRhcmdldFNlbGVjdG9yIiwibGlzdGVuZXIiLCJjYXB0dXJlIiwiZSIsInRhcmdldCIsImV2ZW50RGF0YSIsImRvbTdFdmVudERhdGEiLCJ1bnNoaWZ0IiwiYXBwbHkiLCJwYXJlbnRzMiIsImsiLCJldmVudHMiLCJldmVudCIsImRvbTdMaXN0ZW5lcnMiLCJwcm94eUxpc3RlbmVyIiwiaGFuZGxlRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZG9tN0xpdmVMaXN0ZW5lcnMiLCJoYW5kbGVMaXZlRXZlbnQiLCJoYW5kbGVycyIsImhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3BsaWNlIiwiZG9tN3Byb3h5IiwiZG9tIiwiZXZlbnROYW1lIiwiZXZlbnRBcmdzIiwib25jZUhhbmRsZXIiLCJDdXN0b21FdmVudCIsImV2dCIsImRldGFpbCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGF0YTIiLCJkYXRhSW5kZXgiLCJkaXNwYXRjaEV2ZW50IiwiZmlyZUNhbGxCYWNrIiwiaW5uZXJXaWR0aCIsImluY2x1ZGVNYXJnaW5zIiwic3R5bGVzMiIsIm9mZnNldFdpZHRoIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImlubmVySGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiYm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm9keSIsImNsaWVudFRvcCIsImNsaWVudExlZnQiLCJzY3JvbGxUb3AyIiwic2Nyb2xsWSIsInNjcm9sbExlZnQyIiwic2Nyb2xsWCIsInRvcCIsImxlZnQiLCJkaXNwbGF5IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInByb3AyIiwiaW5kZXgyIiwicmVzdWx0IiwidGV4dDIiLCJ0ZXh0Q29udGVudCIsImNvbXBhcmVXaXRoIiwibWF0Y2hlcyIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiY2hpbGQiLCJwcmV2aW91c1NpYmxpbmciLCJyZXR1cm5JbmRleCIsImVscyIsIm5ld0NoaWxkIiwidGVtcERpdiIsImZpcnN0Q2hpbGQiLCJhcHBlbmRDaGlsZCIsInBhcmVudDIiLCJiZWZvcmUiLCJwYXJlbnROb2RlIiwiY2xvbmVOb2RlIiwiYWZ0ZXIiLCJuZXh0U2libGluZyIsIm5leHRFbGVtZW50U2libGluZyIsIm5leHRFbHMiLCJuZXh0MiIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJwcmV2RWxzIiwicHJldjIiLCJjbG9zZXN0MiIsImZvdW5kRWxlbWVudHMiLCJmb3VuZCIsImNoaWxkcmVuMiIsInJlbW92ZUNoaWxkIiwidG9BZGQiLCJlYXNpbmciLCJjdXJyZW50VG9wIiwiY3VycmVudExlZnQiLCJtYXhUb3AiLCJtYXhMZWZ0IiwibmV3VG9wIiwibmV3TGVmdCIsImFuaW1hdGVUb3AiLCJhbmltYXRlTGVmdCIsInNjcm9sbEhlaWdodCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJzY3JvbGxXaWR0aCIsInN0YXJ0VGltZSIsInRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInByb2dyZXNzIiwiZWFzZVByb2dyZXNzIiwiY29zIiwiUEkiLCJkb25lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyIiwiaW5pdGlhbFByb3BzIiwiaW5pdGlhbFBhcmFtcyIsImFzc2lnbiIsInBhcmFtcyIsImVsZW1lbnRzIiwiYW5pbWF0aW5nIiwicXVlIiwiZWFzaW5nUHJvZ3Jlc3MiLCJmcmFtZUlkIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJlbGVtZW50IiwiZG9tN0FuaW1hdGVJbnN0YW5jZSIsImNvbXBsZXRlIiwic2hpZnQiLCJpbml0aWFsRnVsbFZhbHVlIiwiaW5pdGlhbFZhbHVlIiwidW5pdCIsImZpbmFsVmFsdWUiLCJmaW5hbEZ1bGxWYWx1ZSIsImNvbnRhaW5lciIsImtleXMiLCJjdXJyZW50VmFsdWUiLCJlbGVtZW50c0RvbmUiLCJwcm9wc0RvbmUiLCJiZWdhbiIsImJlZ2luIiwiYW5pbWF0ZUluc3RhbmNlIiwibm9UcmlnZ2VyIiwiZXZlbnRIYW5kbGVyIiwic2hvcnRjdXQiLCJkb203X2VzbV9kZWZhdWx0IiwiZG9tN180XzBfNF9kZWZhdWx0Il0sImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=