export const imports = {
  'src/components/Button/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-button-index" */ 'src/components/Button/index.mdx'),
  'src/components/Checkbox/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-checkbox-index" */ 'src/components/Checkbox/index.mdx'),
  'src/components/FormField/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-form-field-index" */ 'src/components/FormField/index.mdx'),
}
