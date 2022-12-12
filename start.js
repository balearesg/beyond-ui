System.register(["@beyond-js/kernel@0.1.2/bundle", "@beyond-js/kernel@0.1.2/transversals", "@beyond-js/widgets@0.1.1/render"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, Transversal, __beyond_transversal, widgets, bundles;
  return {
    setters: [function (_beyondJsKernel012Bundle) {
      dependency_0 = _beyondJsKernel012Bundle;
    }, function (_beyondJsKernel012Transversals) {
      dependency_1 = _beyondJsKernel012Transversals;
    }, function (_beyondJsWidgets011Render) {
      dependency_2 = _beyondJsWidgets011Render;
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
        "name": "coming-soon",
        "vspecifier": "@beyond/ui@1.0.0/coming-soon",
        "is": "page",
        "route": "/components/coming-soon"
      }, {
        "name": "beyond-empty",
        "vspecifier": "@beyond/ui@1.0.0/beyond-empty",
        "is": "page",
        "route": "/components/beyond-empty"
      }, {
        "name": "beyond-widget",
        "vspecifier": "@beyond/ui@1.0.0/beyond-button",
        "is": "page",
        "route": "/components/beyond-button"
      }, {
        "name": "beyond-widget",
        "vspecifier": "@beyond/ui@1.0.0/beyond-checkbox",
        "is": "page",
        "route": "/components/beyond-checkbox"
      }, {
        "name": "beyond-input",
        "vspecifier": "@beyond/ui@1.0.0/beyond-input",
        "is": "page",
        "route": "/components/beyond-input"
      }, {
        "name": "beyond-switch",
        "vspecifier": "@beyond/ui@1.0.0/beyond-switch",
        "is": "page",
        "route": "/components/beyond-switch"
      }, {
        "name": "beyond-textarea",
        "vspecifier": "@beyond/ui@1.0.0/beyond-textarea",
        "is": "page",
        "route": "/components/beyond-textarea"
      }, {
        "name": "home-page",
        "vspecifier": "@beyond/ui@1.0.0/home",
        "is": "page",
        "route": "/"
      }, {
        "name": "beyond-icon",
        "vspecifier": "@beyond/ui@1.0.0/beyond-icon",
        "is": "page",
        "route": "/components/beyond-icons"
      }, {
        "name": "beyond-image",
        "vspecifier": "@beyond/ui@1.0.0/beyond-image",
        "is": "page",
        "route": "/components/beyond-image"
      }, {
        "name": "beyond-input-controller",
        "vspecifier": "@beyond/ui@1.0.0/beyond-input-controller",
        "is": "page",
        "route": "/components/beyond-input-controller"
      }, {
        "name": "main-layout",
        "vspecifier": "@beyond/ui@1.0.0/layout/main",
        "is": "layout"
      }, {
        "name": "beyond-modal",
        "vspecifier": "@beyond/ui@1.0.0/beyond-modal",
        "is": "page",
        "route": "/components/beyond-modals"
      }, {
        "name": "beyond-scroll-container",
        "vspecifier": "@beyond/ui@1.0.0/beyond-scroll-container",
        "is": "page",
        "route": "/components/beyond-scroll-container"
      }, {
        "name": "beyond-spinner",
        "vspecifier": "@beyond/ui@1.0.0/beyond-spinner",
        "is": "page",
        "route": "/components/beyond-spinner"
      }, {
        "name": "beyond-tabs",
        "vspecifier": "@beyond/ui@1.0.0/beyond-tabs",
        "is": "page",
        "route": "/components/beyond-tabs"
      }, {
        "name": "beyond-toast",
        "vspecifier": "@beyond/ui@1.0.0/beyond-toast",
        "is": "page",
        "route": "/components/beyond-toast"
      }]);
      bundles = [];
      __beyond_transversal.initialise(bundles);
    }
  };
});