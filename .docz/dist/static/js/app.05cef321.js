(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    './.docz/app/db.json': function(e) {
      e.exports = {
        config: {
          title: 'Bcredi Frontend Challenge',
          description: 'My awesome app using docz',
          themeConfig: {},
          ordering: 'descending',
          version: '0.1.0',
          repository: null,
          wrapper: 'src/utils/theme-wrapper',
          plugins: [{}],
        },
        entries: {
          'src/components/Button/index.mdx': {
            name: 'Button',
            id: 'a08e664b64d63394cab05b2e5d624522',
            filepath: 'src/components/Button/index.mdx',
            link: null,
            slug: 'src-components-button-index',
            route: '/src-components-button-index',
            order: 0,
            menu: null,
            headings: [
              { depth: 1, slug: 'button', value: 'Button' },
              { depth: 2, slug: 'basic-usage', value: 'Basic usage' },
            ],
          },
          'src/components/Checkbox/index.mdx': {
            name: 'Checkbox',
            id: 'a77e3ef79241d4f3f5fc73fe9db862e8',
            filepath: 'src/components/Checkbox/index.mdx',
            link: null,
            slug: 'src-components-checkbox-index',
            route: '/src-components-checkbox-index',
            order: 0,
            menu: null,
            headings: [
              { depth: 1, slug: 'checkbox', value: 'Checkbox' },
              { depth: 2, slug: 'basic-usage', value: 'Basic usage' },
            ],
          },
          'src/components/FormField/index.mdx': {
            name: 'FormField',
            id: '2270286ae79e54a6370ceb14bbfc1f18',
            filepath: 'src/components/FormField/index.mdx',
            link: null,
            slug: 'src-components-form-field-index',
            route: '/src-components-form-field-index',
            order: 0,
            menu: null,
            headings: [
              { depth: 1, slug: 'formfield', value: 'FormField' },
              { depth: 2, slug: 'basic-usage', value: 'Basic usage' },
            ],
          },
          'src/components/NavBar/index.mdx': {
            name: 'NavBar',
            id: 'e3ff12cb3a9e3763039d1f3593d040e7',
            filepath: 'src/components/NavBar/index.mdx',
            link: null,
            slug: 'src-components-nav-bar-index',
            route: '/src-components-nav-bar-index',
            order: 0,
            menu: null,
            headings: [
              { depth: 1, slug: 'navbar', value: 'NavBar' },
              { depth: 2, slug: 'basic-usage', value: 'Basic usage' },
            ],
          },
          'src/components/SideImage/index.mdx': {
            name: 'SideImage',
            id: 'da3e853dccb4b71e38b3c2cb765b6c7a',
            filepath: 'src/components/SideImage/index.mdx',
            link: null,
            slug: 'src-components-side-image-index',
            route: '/src-components-side-image-index',
            order: 0,
            menu: null,
            headings: [
              { depth: 1, slug: 'sideimage', value: 'SideImage' },
              { depth: 2, slug: 'basic-usage', value: 'Basic usage' },
            ],
          },
          'src/components/Toaster/index.mdx': {
            name: 'Toaster',
            id: '2b2f759c25470b3220acb87d8cc03378',
            filepath: 'src/components/Toaster/index.mdx',
            link: null,
            slug: 'src-components-toaster-index',
            route: '/src-components-toaster-index',
            order: 0,
            menu: null,
            headings: [
              { depth: 1, slug: 'toaster', value: 'Toaster' },
              { depth: 2, slug: 'basic-usage', value: 'Basic usage' },
            ],
          },
        },
      };
    },
    './.docz/app/imports.js': function(e, n, o) {
      'use strict';
      o.d(n, 'a', function() {
        return s;
      });
      var s = {
        'src/components/Button/index.mdx': function() {
          return Promise.all([o.e(0), o.e(2)]).then(
            o.bind(null, './src/components/Button/index.mdx')
          );
        },
        'src/components/Checkbox/index.mdx': function() {
          return o
            .e(3)
            .then(o.bind(null, './src/components/Checkbox/index.mdx'));
        },
        'src/components/FormField/index.mdx': function() {
          return o
            .e(4)
            .then(o.bind(null, './src/components/FormField/index.mdx'));
        },
        'src/components/NavBar/index.mdx': function() {
          return o.e(5).then(o.bind(null, './src/components/NavBar/index.mdx'));
        },
        'src/components/SideImage/index.mdx': function() {
          return o
            .e(6)
            .then(o.bind(null, './src/components/SideImage/index.mdx'));
        },
        'src/components/Toaster/index.mdx': function() {
          return Promise.all([o.e(0), o.e(7)]).then(
            o.bind(null, './src/components/Toaster/index.mdx')
          );
        },
      };
    },
    './.docz/app/index.jsx': function(e, n, o) {
      'use strict';
      o.r(n);
      var s = o('./node_modules/react/index.js'),
        t = o.n(s),
        d = o('./node_modules/react-dom/index.js'),
        r = o.n(d),
        c = o('./.docz/app/root.jsx'),
        i = [],
        a = [],
        u = function() {
          return a.forEach(function(e) {
            return e && e();
          });
        },
        l = document.querySelector('#root');
      !(function() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.a;
        i.forEach(function(e) {
          return e && e();
        }),
          r.a.render(t.a.createElement(e, null), l, u);
      })(c.a);
    },
    './.docz/app/root.jsx': function(e, n, o) {
      'use strict';
      (function(e) {
        var s = o('./node_modules/react/index.js'),
          t = o.n(s),
          d = o('./node_modules/react-hot-loader/index.js'),
          r = o('./node_modules/docz-theme-default/dist/index.js'),
          c = o.n(r),
          i = o('./.docz/app/imports.js'),
          a = o('./.docz/app/db.json'),
          u = o('./src/utils/theme-wrapper.js'),
          l = function() {
            return t.a.createElement(c.a, {
              db: a,
              imports: i.a,
              hashRouter: !1,
              wrapper: u.a,
            });
          };
        (n.a = Object(d.hot)(e)(l)),
          (l.__docgenInfo = {
            description: '',
            methods: [],
            displayName: 'Root',
          });
      }.call(this, o('./node_modules/webpack/buildin/harmony-module.js')(e)));
    },
    './src/utils/theme-wrapper.js': function(e, n, o) {
      'use strict';
      var s = o('./node_modules/react/index.js'),
        t = o.n(s),
        d = o(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        r = {
          primary: '#4c8afe',
          lightGray: '#8f8f8f',
          ultraLightGray: '#e6e6e6',
          destructive: '#ff5863',
        },
        c = function(e) {
          var n = e.children;
          return t.a.createElement(d.a, { theme: r }, n);
        };
      n.a = c;
      c.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'ThemeWrapper',
        props: {
          children: {
            type: { name: 'element' },
            required: !0,
            description: '',
          },
        },
      };
    },
    0: function(e, n, o) {
      o('./node_modules/@babel/polyfill/lib/index.js'),
        (e.exports = o('./.docz/app/index.jsx'));
    },
  },
  [[0, 8, 0]],
  [0, 2, 7, 3, 5, 6, 4],
]);
