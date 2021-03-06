(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    './src/components/FormField/index.mdx': function(e, n, r) {
      'use strict';
      r.r(n);
      var t = r('./node_modules/react/index.js'),
        a = r.n(t),
        o = r('./node_modules/@mdx-js/tag/dist/index.js'),
        l = r('./node_modules/docz/dist/index.m.js'),
        i = r(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        );
      function m() {
        var e = p([
          '\n  font-size: 14px;\n  margin-bottom: 7px;\n  color: ',
          ';\n',
        ]);
        return (
          (m = function() {
            return e;
          }),
          e
        );
      }
      function c() {
        var e = p([
          '\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 35px;\n  height: 70px;\n  min-width: 0;\n\n  input {\n    padding: 14px;\n    font-size: 16px;\n    border-radius: 3px;\n    border: 1px solid\n      ',
          ';\n\n    &::placeholder {\n      color: #cccccc;\n    }\n  }\n\n  span {\n    color: ',
          ';\n    line-height: 1.29;\n    font-size: 14px;\n    margin-top: 5px;\n  }\n',
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      function p(e, n) {
        return (
          n || (n = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          )
        );
      }
      var s = i.b.div(
          c(),
          function(e) {
            var n = e.error,
              r = e.theme,
              t = r.destructive,
              a = r.ultraLightGray;
            return n ? t : a;
          },
          function(e) {
            return e.theme.destructive;
          }
        ),
        d = i.b.label(m(), function(e) {
          return e.theme.lightGray;
        }),
        u = function(e) {
          var n = e.label,
            r = e.error,
            t = e.children;
          return a.a.createElement(
            s,
            { error: r },
            n && a.a.createElement(d, null, n),
            t,
            r && a.a.createElement('span', null, r)
          );
        };
      u.defaultProps = { error: null, label: null };
      var f = u;
      function b(e, n) {
        if (null == e) return {};
        var r,
          t,
          a = (function(e, n) {
            if (null == e) return {};
            var r,
              t,
              a = {},
              o = Object.keys(e);
            for (t = 0; t < o.length; t++)
              (r = o[t]), n.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (t = 0; t < o.length; t++)
            (r = o[t]),
              n.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      u.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'FormFieldComponent',
        props: {
          error: {
            defaultValue: { value: 'null', computed: !1 },
            type: {
              name: 'union',
              value: [{ name: 'string' }, { name: 'bool' }],
            },
            required: !1,
            description: '',
          },
          label: {
            defaultValue: { value: 'null', computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: '',
          },
          children: {
            type: {
              name: 'union',
              value: [{ name: 'array' }, { name: 'element' }, { name: 'node' }],
            },
            required: !0,
            description: '',
          },
        },
      };
      n.default = function(e) {
        var n = e.components,
          r = b(e, ['components']);
        return a.a.createElement(
          o.MDXTag,
          { name: 'wrapper', components: n },
          a.a.createElement(
            o.MDXTag,
            { name: 'h1', components: n, props: { id: 'formfield' } },
            a.a.createElement(
              o.MDXTag,
              {
                name: 'a',
                components: n,
                parentName: 'h1',
                props: { 'aria-hidden': !0, href: '#formfield' },
              },
              a.a.createElement(
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
            'FormField'
          ),
          a.a.createElement(l.PropsTable, { of: f }),
          a.a.createElement(
            o.MDXTag,
            { name: 'h2', components: n, props: { id: 'basic-usage' } },
            a.a.createElement(
              o.MDXTag,
              {
                name: 'a',
                components: n,
                parentName: 'h2',
                props: { 'aria-hidden': !0, href: '#basic-usage' },
              },
              a.a.createElement(
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
          a.a.createElement(
            l.Playground,
            {
              __position: 1,
              __code:
                '<FormField label="Exemplo de label" error="Digite um email v\xe1lido">\n  <input type="text" placeholder="Digite aqui seu email" />\n</FormField>',
              __scope: { props: r, FormField: f },
            },
            a.a.createElement(
              f,
              { label: 'Exemplo de label', error: 'Digite um email v\xe1lido' },
              a.a.createElement('input', {
                type: 'text',
                placeholder: 'Digite aqui seu email',
              })
            )
          )
        );
      };
    },
  },
]);
