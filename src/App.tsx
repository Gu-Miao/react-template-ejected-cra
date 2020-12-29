import { BrowserRouter as Router, Route } from 'react-router-dom'
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'
import AsyncComponent from '@components/AsyncComponent'

import routers from '@/router'

const App = () => {
  return (
    <Router>
      <CacheSwitch>
        {routers.map(({ component, when, title, ...restProps }, key) => {
          const RouteComp = when ? CacheRoute : Route
          return <RouteComp key={key} {...restProps} component={AsyncComponent(component, title)} />
        })}
      </CacheSwitch>
    </Router>
  )
}

export default App
