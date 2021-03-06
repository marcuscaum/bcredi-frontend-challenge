(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    './src/components/Toaster/index.mdx': function(e, n, t) {
      'use strict';
      t.r(n);
      var o = t('./node_modules/react/index.js'),
        a = t.n(o),
        r = t('./node_modules/@mdx-js/tag/dist/index.js'),
        s = t('./node_modules/docz/dist/index.m.js'),
        i = t('./node_modules/react-toastify/lib/index.js'),
        c = t('./node_modules/recompose/dist/Recompose.esm.js'),
        l = (t('./node_modules/react-toastify/dist/ReactToastify.css'),
        t(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ));
      function m() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          );
        })([
          '\n    div.toast-container {\n      align-items: center;\n      bottom: 16px;\n      display: flex;\n      flex-direction: column;\n      padding: 0;\n      width: 100%;\n      top: 0;\n      left: 0;\n      position: absolute;\n      margin-left: 0;\n    }\n    .toast-container .toast-container__body {\n      margin: 0;\n      flex: unset;\n      text-align: center;\n      font-size: 16px;\n      color: white;\n      width: 100%;\n    }\n    .toast-container .toast-container__toast {\n      background: #2ecc71;\n      display: flex;\n      align-items: center;\n      color: unset;\n      width: 100%;\n      height: 64px;\n      position: absolute;\n      min-height: unset;\n      box-sizing: unset;\n      margin-bottom: 1rem;\n      padding: 0;\n      border-radius: 0;\n      box-shadow: unset;\n      justify-content: center\n      max-height: unset;\n      overflow: unset;\n      font-family: unset;\n      cursor: pointer;\n      direction: ltr;\n    }\n  ',
        ]);
        return (
          (m = function() {
            return e;
          }),
          e
        );
      }
      var d = function() {
          return Object(l.c)(m());
        },
        p = function(e) {
          return a.a.createElement(
            i.ToastContainer,
            Object.assign(
              {
                className: 'toast-container',
                toastClassName: 'toast-container__toast',
                bodyClassName: 'toast-container__body',
                hideProgressBar: !0,
              },
              e
            )
          );
        },
        u = Object(c.a)({
          componentWillMount: function() {
            d();
          },
        })(p);
      p.__docgenInfo = { description: '', methods: [], displayName: 'Toaster' };
      var f = t('./src/components/Button/index.js');
      function b(e, n) {
        if (null == e) return {};
        var t,
          o,
          a = (function(e, n) {
            if (null == e) return {};
            var t,
              o,
              a = {},
              r = Object.keys(e);
            for (o = 0; o < r.length; o++)
              (t = r[o]), n.indexOf(t) >= 0 || (a[t] = e[t]);
            return a;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (o = 0; o < r.length; o++)
            (t = r[o]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (a[t] = e[t]));
        }
        return a;
      }
      n.default = function(e) {
        var n = e.components,
          t = b(e, ['components']);
        return a.a.createElement(
          r.MDXTag,
          { name: 'wrapper', components: n },
          a.a.createElement(
            r.MDXTag,
            { name: 'h1', components: n, props: { id: 'toaster' } },
            a.a.createElement(
              r.MDXTag,
              {
                name: 'a',
                components: n,
                parentName: 'h1',
                props: { 'aria-hidden': !0, href: '#toaster' },
              },
              a.a.createElement(
                r.MDXTag,
                {
                  name: 'span',
                  components: n,
                  parentName: 'a',
                  props: { className: 'icon-link' },
                },
                '#'
              )
            ),
            'Toaster'
          ),
          a.a.createElement(s.PropsTable, { of: u }),
          a.a.createElement(
            r.MDXTag,
            { name: 'h2', components: n, props: { id: 'basic-usage' } },
            a.a.createElement(
              r.MDXTag,
              {
                name: 'a',
                components: n,
                parentName: 'h2',
                props: { 'aria-hidden': !0, href: '#basic-usage' },
              },
              a.a.createElement(
                r.MDXTag,
                {
                  name: 'span',
                  components: n,
                  parentName: 'a',
                  props: { className: 'icon-link' },
                },
                '#'
              )
            ),
            'Basic usage'
          ),
          a.a.createElement(
            s.Playground,
            {
              __position: 1,
              __code:
                "<Toaster />\n<br />\n<br />\n<br />\n<br />\n<br />\n<Button onClick={() => toast('Example of notification!')}>Notify!</Button>",
              __scope: { props: t, toast: i.toast, Toaster: u, Button: f.a },
            },
            a.a.createElement(u, null),
            a.a.createElement('br', null),
            a.a.createElement('br', null),
            a.a.createElement('br', null),
            a.a.createElement('br', null),
            a.a.createElement('br', null),
            a.a.createElement(
              f.a,
              {
                onClick: function() {
                  return Object(i.toast)('Example of notification!');
                },
              },
              'Notify!'
            )
          )
        );
      };
    },
  },
]);
