(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    './src/assets/logo.svg': function(e, n, a) {
      e.exports = a.p + 'static/img/logo.b680d8a5.svg';
    },
    './src/components/NavBar/index.mdx': function(e, n, a) {
      'use strict';
      a.r(n);
      var t = a('./node_modules/react/index.js'),
        o = a.n(t),
        r = a('./node_modules/@mdx-js/tag/dist/index.js'),
        s = a('./node_modules/docz/dist/index.m.js'),
        c = a('./src/assets/logo.svg'),
        i = a.n(c);
      function p() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          );
        })([
          '\n  padding: 16px 32px;\n  display: flex;\n  justify-content: flex-end; /* align horizontal */\n\n  > * {\n    display: flex;\n  }\n',
        ]);
        return (
          (p = function() {
            return e;
          }),
          e
        );
      }
      var l = a(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ).b.div(p()),
        m = function() {
          return o.a.createElement(
            l,
            null,
            o.a.createElement('img', { src: i.a, alt: '' })
          );
        },
        d = m;
      function u(e, n) {
        if (null == e) return {};
        var a,
          t,
          o = (function(e, n) {
            if (null == e) return {};
            var a,
              t,
              o = {},
              r = Object.keys(e);
            for (t = 0; t < r.length; t++)
              (a = r[t]), n.indexOf(a) >= 0 || (o[a] = e[a]);
            return o;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (t = 0; t < r.length; t++)
            (a = r[t]),
              n.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (o[a] = e[a]));
        }
        return o;
      }
      m.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'NavBarComponent',
      };
      n.default = function(e) {
        var n = e.components,
          a = u(e, ['components']);
        return o.a.createElement(
          r.MDXTag,
          { name: 'wrapper', components: n },
          o.a.createElement(
            r.MDXTag,
            { name: 'h1', components: n, props: { id: 'navbar' } },
            o.a.createElement(
              r.MDXTag,
              {
                name: 'a',
                components: n,
                parentName: 'h1',
                props: { 'aria-hidden': !0, href: '#navbar' },
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
            'NavBar'
          ),
          o.a.createElement(s.PropsTable, { of: d }),
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
              __code:
                '<NavBar>\n  <img src={MainLogo} alt="Logo" />\n</NavBar>',
              __scope: { props: a, NavBar: d, MainLogo: i.a },
            },
            o.a.createElement(
              d,
              null,
              o.a.createElement('img', { src: i.a, alt: 'Logo' })
            )
          )
        );
      };
    },
  },
]);
