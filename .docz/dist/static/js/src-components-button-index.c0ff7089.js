(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    './src/components/Button/index.mdx': function(e, n, t) {
      'use strict';
      t.r(n);
      var a = t('./node_modules/react/index.js'),
        o = t.n(a),
        r = t('./node_modules/@mdx-js/tag/dist/index.js'),
        s = t('./node_modules/docz/dist/index.m.js'),
        c = t('./src/components/Button/index.js');
      function p(e, n) {
        if (null == e) return {};
        var t,
          a,
          o = (function(e, n) {
            if (null == e) return {};
            var t,
              a,
              o = {},
              r = Object.keys(e);
            for (a = 0; a < r.length; a++)
              (t = r[a]), n.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (a = 0; a < r.length; a++)
            (t = r[a]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      n.default = function(e) {
        var n = e.components,
          t = p(e, ['components']);
        return o.a.createElement(
          r.MDXTag,
          { name: 'wrapper', components: n },
          o.a.createElement(
            r.MDXTag,
            { name: 'h1', components: n, props: { id: 'button' } },
            o.a.createElement(
              r.MDXTag,
              {
                name: 'a',
                components: n,
                parentName: 'h1',
                props: { 'aria-hidden': !0, href: '#button' },
              },
              o.a.createElement(
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
            'Button'
          ),
          o.a.createElement(s.PropsTable, { of: c.a }),
          o.a.createElement(
            r.MDXTag,
            { name: 'h2', components: n, props: { id: 'basic-usage' } },
            o.a.createElement(
              r.MDXTag,
              {
                name: 'a',
                components: n,
                parentName: 'h2',
                props: { 'aria-hidden': !0, href: '#basic-usage' },
              },
              o.a.createElement(
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
          o.a.createElement(
            s.Playground,
            {
              __position: 1,
              __code: '<Button>Click me</Button>',
              __scope: { props: t, Button: c.a },
            },
            o.a.createElement(c.a, null, 'Click me')
          )
        );
      };
    },
  },
]);
