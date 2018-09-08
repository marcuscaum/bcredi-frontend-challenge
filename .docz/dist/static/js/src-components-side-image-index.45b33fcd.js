(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    './src/assets/signup_page_image.png': function(e, n, a) {
      e.exports = a.p + 'static/img/signup_page_image.5dea0627.png';
    },
    './src/components/SideImage/index.mdx': function(e, n, a) {
      'use strict';
      a.r(n);
      var t = a('./node_modules/react/index.js'),
        r = a.n(t),
        o = a('./node_modules/@mdx-js/tag/dist/index.js'),
        i = a('./node_modules/docz/dist/index.m.js'),
        s = a(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        c = a('./src/assets/signup_page_image.png'),
        m = a.n(c);
      function p() {
        var e = f([
          "\n  display: flex;\n  position: relative;\n  height: 100vh;\n  width: 550px;\n  background-size: cover;\n  background-position: center center;\n  background-image: url('",
          "');\n",
        ]);
        return (
          (p = function() {
            return e;
          }),
          e
        );
      }
      function l() {
        var e = f(['\n  font-size: 16px;\n  margin: 0;\n  margin-top: 8px;\n']);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = f(['\n  font-size: 20px;\n  margin: 0;\n']);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = f([
          '\n  display: flex;\n  align-self: flex-end;\n  flex-direction: column;\n  margin: 0 40px 40px 0;\n  width: 370px;\n  color: white;\n  text-align: right;\n  line-height: 1.5;\n',
        ]);
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = f([
          '\n  display: flex;\n  flex-flow: row-reverse;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(\n    to bottom,\n    rgba(0, 0, 0, 0.2),\n    rgba(0, 0, 0, 0) 17%,\n    rgba(0, 0, 0, 0) 44%,\n    rgba(0, 0, 0, 0.5) 72%,\n    rgba(0, 0, 0, 0.8)\n  );\n',
        ]);
        return (
          (g = function() {
            return e;
          }),
          e
        );
      }
      function f(e, n) {
        return (
          n || (n = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          )
        );
      }
      var b = s.b.div(g()),
        h = s.b.div(u()),
        v = s.b.p(d()),
        x = s.b.p(l()),
        E = s.b.div(p(), m.a),
        _ = function(e) {
          var n = e.message,
            a = e.messageAuthor;
          return r.a.createElement(
            E,
            null,
            r.a.createElement(
              b,
              null,
              r.a.createElement(
                h,
                null,
                r.a.createElement(v, null, n),
                r.a.createElement(x, null, a)
              )
            )
          );
        },
        w = _;
      function y(e, n) {
        if (null == e) return {};
        var a,
          t,
          r = (function(e, n) {
            if (null == e) return {};
            var a,
              t,
              r = {},
              o = Object.keys(e);
            for (t = 0; t < o.length; t++)
              (a = o[t]), n.indexOf(a) >= 0 || (r[a] = e[a]);
            return r;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (t = 0; t < o.length; t++)
            (a = o[t]),
              n.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (r[a] = e[a]));
        }
        return r;
      }
      _.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'SideImageComponent',
        props: {
          message: {
            type: {
              name: 'union',
              value: [{ name: 'string' }, { name: 'node' }],
            },
            required: !0,
            description: '',
          },
          messageAuthor: {
            type: {
              name: 'union',
              value: [{ name: 'string' }, { name: 'node' }],
            },
            required: !0,
            description: '',
          },
        },
      };
      n.default = function(e) {
        var n = e.components,
          a = y(e, ['components']);
        return r.a.createElement(
          o.MDXTag,
          { name: 'wrapper', components: n },
          r.a.createElement(
            o.MDXTag,
            { name: 'h1', components: n, props: { id: 'sideimage' } },
            r.a.createElement(
              o.MDXTag,
              {
                name: 'a',
                components: n,
                parentName: 'h1',
                props: { 'aria-hidden': !0, href: '#sideimage' },
              },
              r.a.createElement(
                o.MDXTag,
                {
                  name: 'span',
                  components: n,
                  parentName: 'a',
                  props: { className: 'icon-link' },
                },
                '#'
              )
            ),
            'SideImage'
          ),
          r.a.createElement(i.PropsTable, { of: w }),
          r.a.createElement(
            o.MDXTag,
            { name: 'h2', components: n, props: { id: 'basic-usage' } },
            r.a.createElement(
              o.MDXTag,
              {
                name: 'a',
                components: n,
                parentName: 'h2',
                props: { 'aria-hidden': !0, href: '#basic-usage' },
              },
              r.a.createElement(
                o.MDXTag,
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
          r.a.createElement(
            i.Playground,
            {
              __position: 1,
              __code:
                '<SideImage\n  messageAuthor={\n    <React.Fragment>\n      <strong>Camila Bragan\xe7a,</strong>\n      <br />\n      Sideral Tecnologia\n    </React.Fragment>\n  }\n  message="Obtive cr\xe9dito para capital de giro. O processo foi bem sucedido e tudo que foi abordado, foi cumprido."\n/>',
              __scope: { props: a, SideImage: w },
            },
            r.a.createElement(w, {
              messageAuthor: r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement('strong', null, 'Camila Bragan\xe7a,'),
                r.a.createElement('br', null),
                'Sideral Tecnologia'
              ),
              message:
                'Obtive cr\xe9dito para capital de giro. O processo foi bem sucedido e tudo que foi abordado, foi cumprido.',
            })
          )
        );
      };
    },
  },
]);
