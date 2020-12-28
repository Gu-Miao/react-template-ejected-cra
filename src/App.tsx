import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AsyncComponent from '@components/AsyncComponent'

import routers from '@/router'

const App = () => {
  return (
    <Router>
      <Switch>
        {routers.map(({ component, ...restProps }, key) => (
          <Route key={key} {...restProps} component={AsyncComponent(component)} />
        ))}
      </Switch>
    </Router>
  )
}

export default App
