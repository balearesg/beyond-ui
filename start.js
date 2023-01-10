System.register(["@beyond-js/kernel@0.1.7/bundle", "@beyond-js/kernel@0.1.7/transversals", "@beyond-js/widgets@0.1.2/render"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, Transversal, __beyond_transversal, widgets, bundles;
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_beyondJsKernel017Transversals) {
      dependency_1 = _beyondJsKernel017Transversals;
    }, function (_beyondJsWidgets012Render) {
      dependency_2 = _beyondJsWidgets012Render;
    }],
    execute: function () {
      ({
        Transversal
      } = brequire('@beyond-js/kernel/transversals'));
      _export("__beyond_transversal", __beyond_transversal = new Transversal('start', ''));
      __beyond_transversal.dependencies.update([['@beyond-js/kernel/transversals', dependency_1], ['@beyond-js/widgets/render', dependency_2]]);

      /*************
      BUNDLE: WIDGET
      *************/
      ({
        widgets
      } = brequire('@beyond-js/widgets/render'));
      widgets.register([{
        "name": "beyond-alert",
        "vspecifier": "@bgroup/ui@0.0.21/beyond-alert",
        "is": "page",
        "route": "/components/beyond-alert"
      }, {
        "name": "coming-soon",
        "vspecifier": "@bgroup/ui@0.0.21/coming-soon",
        "is": "page",
        "route": "/components/coming-soon"
      }, {
        "name": "beyond-empty",
        "vspecifier": "@bgroup/ui@0.0.21/beyond-empty",
        "is": "page",
        "route": "/components/beyond-empty"
      }, {
        "name": "beyond-widget",
        "vspecifier": "@bgroup/ui@0.0.21/beyond-button",
        "is": "page",
        "route": "/components/beyond-button"
      }, {
        "name": "beyond-checkbox",
        "vspecifier": "@bgroup/ui@0.0.21/beyond-checkbox",
        "is": "page",
        "route": "/components/beyond-checkbox"
      }, {
        "name": "beyond-input",
        "vspecifier": "@bgroup/ui@0.0.21/beyond-input",
        "is": "page",
        "route": "/components/beyond-input"
      }, {
        "name": "beyond-switch",
        "vspecifier": "@bgroup/ui@0.0.21/beyond-switch",
        "is": "page",
        "route": "/components/beyond-switch"
      }, {
        "name": "beyond-textarea",
        "vspecifier": "@bgroup/ui@0.0.21/beyond-textarea",
        "is": "page",
        "route": "/components/beyond-textarea"
      }, {
        "name": "home-page",
        "vspecifier": "@bgroup/ui@0.0.21/home",
        "is": "page",
        "route": "/"
      }, {
        "name": "beyond-icon",
        "vspecifier": "@bgroup/ui@0.0.21/beyond-icon",
        "is": "page",
        "route": "/components/beyond-icons"
      }, {
        "name": "beyond-image",
        "vspecifier": "@bgroup/ui@0.0.21/beyond-image",
        "is": "page",
        "route": "/components/beyond-image"
      }, {
        "name": "beyond-input-controller",
        "vspecifier": "@bgroup/ui@0.0.21/beyond-input-controller",
        "is": "page",
        "route": "/components/beyond-input-controller"
      }, {
        "name": "main-layout",
        "vspecifier": "@bgroup/ui@0.0.21/layout/main",
        "is": "layout"
      }, {
        "name": "beyond-alert-modal",
        "vspecifier": "@bgroup/ui@0.0.21/beyond-alert-modal",
        "is": "page",
        "route": "/components/beyond-alert-modal"
      }, {
        "name": "beyond-confirm-modal",
        "vspecifier": "@bgroup/ui@0.0.21/beyond-confirm-modal",
        "is": "page",
        "route": "/components/beyond-confirm-modal"
      }, {
        "name": "beyond-regular-modal",
        "vspecifier": "@bgroup/ui@0.0.21/beyond-regular-modal",
        "is": "page",
        "route": "/components/beyond-regular-modal"
      }, {
        "name": "beyond-scroll-container",
        "vspecifier": "@bgroup/ui@0.0.21/beyond-scroll-container",
        "is": "page",
        "route": "/components/beyond-scroll-container"
      }, {
        "name": "beyond-spinner",
        "vspecifier": "@bgroup/ui@0.0.21/beyond-spinner",
        "is": "page",
        "route": "/components/beyond-spinner"
      }, {
        "name": "beyond-swiper",
        "vspecifier": "@bgroup/ui@0.0.21/beyond-swiper",
        "is": "page",
        "route": "/components/beyond-swiper"
      }, {
        "name": "beyond-tabs",
        "vspecifier": "@bgroup/ui@0.0.21/beyond-tabs",
        "is": "page",
        "route": "/components/beyond-tabs"
      }, {
        "name": "beyond-toast",
        "vspecifier": "@bgroup/ui@0.0.21/beyond-toast",
        "is": "page",
        "route": "/components/beyond-toast"
      }, {
        "name": "beyond-code-verification",
        "vspecifier": "@bgroup/ui@0.0.21/beyond-code-verification",
        "is": "page",
        "route": "/components/beyond-code-verification"
      }]);
      bundles = [];
      __beyond_transversal.initialise(bundles);
    }
  };
});