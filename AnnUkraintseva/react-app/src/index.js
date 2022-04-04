import React from 'react'
import ReactDOM from 'react-dom'
import ThemeContextMUI from './contexts/ThemeContextMUI'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './index.css'
import Layout from './components/Layout'
import PageFormPages from './pages/PageFormPages'
import PageComment from './pages/PageComment'
import { PageProfile } from './pages/PageProgile'
import PageLogout from './pages/PageLogout'
import PageError from './pages/PageError'
import AuthProvider from './services/auth/AuthProvider'
import AuthRequir from './services/auth/AuthRequir'
import PagesAbout from './pages/PagesAbout'
import PagesTableContainers from './containers/PagesTableContainers'

import { Provider } from 'react-redux'
import { store } from './store'
import { PageLoggerUser } from './pages/PageLoggerUser'

ReactDOM.render(
  <Provider store={store}>
    <ThemeContextMUI>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<PagesAbout />} />
              <Route
                path="/pagesLink"
                element={
                  <AuthRequir redirectTo="/profile">
                    <PageFormPages />
                  </AuthRequir>
                }
              />
              <Route path="/commentLink" element={<PageComment />} />
              <Route path="/profile" element={<PageProfile />} />
              <Route path="/logout" element={<PageLogout />} />
              <Route path="/stats" element={
              <AuthRequir redirectTo="/profile">
                    <PageLoggerUser />
                  </AuthRequir>} />

              <Route path="*" element={<PageError />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeContextMUI>
   </Provider>,
  document.querySelector('#root'),
)
