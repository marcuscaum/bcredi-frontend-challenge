import React from 'react'
import { hot } from 'react-hot-loader'
import Theme from 'docz-theme-default'

import { imports } from './imports'
import db from './db.json'

import Wrapper from 'src/utils/theme-wrapper'

const Root = () => (
  <Theme db={db} imports={imports} hashRouter={false} wrapper={Wrapper} />
)

export default hot(module)(Root)
