import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'
import { Home, Informations } from './screens'
import { configureStore } from './store.config'

const store = configureStore()

const container = document.getElementById('root') as Element
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="informations" element={<Informations />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)

reportWebVitals()
