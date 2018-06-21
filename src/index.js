import React from 'react'
import ReactDOM from 'react-dom'

import { configureStore } from './helpers/configureStore.js'
import { Root } from './components/root.jsx'

import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

const store = configureStore()

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
