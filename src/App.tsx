import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// @import component
import Loading from "./components/Loading";
// @import layout
import MainLayout from './layout/MainLayout';
// @import page
// const Home = React.lazy(() => import('./pages/Home'));
// const Header = React.lazy(() => import('./layout/Header'));

// const Sidebar = React.lazy(() => import('./layout/Sidebar'));

// const Userbar = React.lazy(() => import('./layout/Userbar'));

const App: React.FC = () => {
  return (
    <BrowserRouter>  
      <div className='container'>
        <Suspense fallback={<Loading/>}>
          <Switch>     
            <Route path='/' component={MainLayout} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

export default App
