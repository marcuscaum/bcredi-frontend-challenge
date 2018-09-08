export const imports = {
  'src/components/Button/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-button-index" */ 'src/components/Button/index.mdx'),
  'src/components/Checkbox/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-checkbox-index" */ 'src/components/Checkbox/index.mdx'),
  'src/components/FormField/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-form-field-index" */ 'src/components/FormField/index.mdx'),
  'src/components/NavBar/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-nav-bar-index" */ 'src/components/NavBar/index.mdx'),
  'src/components/SideImage/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-side-image-index" */ 'src/components/SideImage/index.mdx'),
  'src/components/Toaster/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-toaster-index" */ 'src/components/Toaster/index.mdx'),
}
