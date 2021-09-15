import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
// @import scss
import './assets/scss/app.scss'
// @import component
import Loading from './components/Loading'
// @import layout
import MainLayout from './layout/MainLayout'
// @import page
const Home = React.lazy(() => import('./pages/Home'))
const Discover = React.lazy(() => import('./pages/Discover'))

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Suspense fallback={<Loading />}>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route
              path="/home"
              render={() => (
                <MainLayout>
                  <Home />
                </MainLayout>
              )}
            />
            <Route
              path="/discover"
              render={() => (
                <MainLayout>
                  <Discover />
                </MainLayout>
              )}
            />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

export default App
