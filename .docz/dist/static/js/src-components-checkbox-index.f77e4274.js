(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    './src/assets/check.svg': function(e, n, t) {
      e.exports = t.p + 'static/img/check.291dc2e3.svg';
    },
    './src/components/Checkbox/index.mdx': function(e, n, t) {
      'use strict';
      t.r(n);
      var o = t('./node_modules/react/index.js'),
        r = t.n(o),
        a = t('./node_modules/@mdx-js/tag/dist/index.js'),
        c = t('./node_modules/docz/dist/index.m.js'),
        i = t(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        s = t('./src/assets/check.svg'),
        p = t.n(s);
      function l() {
        var e = m([
          '\n  position: relative;\n  border: 1px solid ',
          ';\n  padding: 7px 12px;\n  border-radius: 3px;\n  height: 56px;\n  box-sizing: border-box;\n  display: block;\n',
        ]);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = m([
          '\n  display: none;\n\n  &:checked + ',
          "::before {\n    content: url('",
          "');\n    background-color: ",
          ';\n    border: none;\n    box-sizing: border-box;\n    padding: 2px 7px;\n  }\n',
        ]);
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = m([
          '\n  font-size: ',
          ';\n  color: ',
          ';\n  line-height: 1.67;\n  cursor: pointer;\n  overflow-wrap: normal;\n  float: left;\n  margin-left: 35px;\n  align-self: center;\n  display: flex;\n\n  a {\n    text-decoration: none;\n    color: ',
          ";\n  }\n\n  &::before {\n    box-sizing: border-box;\n    margin: 0 12px;\n    content: '';\n    font-size: 12px;\n    width: 24px;\n    height: 24px;\n    border-radius: 4px;\n    position: absolute;\n    background-color: white;\n    border: 1px solid #cccccc;\n    left: 0;\n    top: 16px;\n  }\n",
        ]);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      function m(e, n) {
        return (
          n || (n = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          )
        );
      }
      var f = i.b.label(
          d(),
          function(e) {
            return e.fontSize;
          },
          function(e) {
            return e.fontColor;
          },
          function(e) {
            return e.theme.primary;
          }
        ),
        b = i.b.input.attrs({ type: 'checkbox' })(u(), f, p.a, function(e) {
          return e.theme.primary;
        }),
        x = i.b.div(l(), function(e) {
          return e.theme.ultraLightGray;
        });
      function g(e, n) {
        if (null == e) return {};
        var t,
          o,
          r = (function(e, n) {
            if (null == e) return {};
            var t,
              o,
              r = {},
              a = Object.keys(e);
            for (o = 0; o < a.length; o++)
              (t = a[o]), n.indexOf(t) >= 0 || (r[t] = e[t]);
            return r;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (o = 0; o < a.length; o++)
            (t = a[o]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (r[t] = e[t]));
        }
        return r;
      }
      var h = function(e) {
        var n = e.label,
          t = e.name,
          o = e.fontSize,
          a = e.fontColor,
          c = g(e, ['label', 'name', 'fontSize', 'fontColor']);
        return r.a.createElement(
          x,
          null,
          r.a.createElement(
            b,
            Object.assign({ name: t, id: ''.concat(t, '-input-checkbox') }, c)
          ),
          r.a.createElement(
            f,
            {
              fontColor: a,
              fontSize: o,
              htmlFor: ''.concat(t, '-input-checkbox'),
            },
            n
          )
        );
      };
      h.defaultProps = { fontSize: '12px', fontColor: '#cccccc' };
      var y = h;
      function v(e, n) {
        if (null == e) return {};
        var t,
          o,
          r = (function(e, n) {
            if (null == e) return {};
            var t,
              o,
              r = {},
              a = Object.keys(e);
            for (o = 0; o < a.length; o++)
              (t = a[o]), n.indexOf(t) >= 0 || (r[t] = e[t]);
            return r;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (o = 0; o < a.length; o++)
            (t = a[o]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (r[t] = e[t]));
        }
        return r;
      }
      h.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'CheckBoxComponent',
        props: {
          fontSize: {
            defaultValue: { value: "'12px'", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: '',
          },
          fontColor: {
            defaultValue: { value: "'#cccccc'", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: '',
          },
          label: {
            type: {
              name: 'union',
              value: [{ name: 'string' }, { name: 'node' }],
            },
            required: !0,
            description: '',
          },
          name: { type: { name: 'string' }, required: !0, description: '' },
        },
      };
      n.default = function(e) {
        var n = e.components,
          t = v(e, ['components']);
        return r.a.createElement(
          a.MDXTag,
          { name: 'wrapper', components: n },
          r.a.createElement(
            a.MDXTag,
            { name: 'h1', components: n, props: { id: 'checkbox' } },
            r.a.createElement(
              a.MDXTag,
              {
                name: 'a',
                components: n,
                parentName: 'h1',
                props: { 'aria-hidden': !0, href: '#checkbox' },
              },
              r.a.createElement(
                a.MDXTag,
                {
                  name: 'span',
                  components: n,
                  parentName: 'a',
                  props: { className: 'icon-link' },
                },
                '#'
              )
            ),
            'Checkbox'
          ),
          r.a.createElement(c.PropsTable, { of: y }),
          r.a.createElement(
            a.MDXTag,
            { name: 'h2', components: n, props: { id: 'basic-usage' } },
            r.a.createElement(
              a.MDXTag,
              {
                name: 'a',
                components: n,
                parentName: 'h2',
                props: { 'aria-hidden': !0, href: '#basic-usage' },
              },
              r.a.createElement(
                a.MDXTag,
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
            c.Playground,
            {
              __position: 1,
              __code: '<Checkbox label="Aceito os termos" fontSize="22px" />',
              __scope: { props: t, Checkbox: y },
            },
            r.a.createElement(y, {
              label: 'Aceito os termos',
              fontSize: '22px',
            })
          )
        );
      };
    },
  },
]);
