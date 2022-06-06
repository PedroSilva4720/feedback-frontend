import React from 'react'
import { createRoot } from 'react-dom/client'

import router from './routes/router.jsx'

import './global.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(router())
