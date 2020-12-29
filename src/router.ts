interface IRouter {
  title?: string
  when?: string
  component?: string
  path?: string | string[]
  exact?: boolean
  sensitive?: boolean
  strict?: boolean
}

const routers: Array<IRouter> = [
  {
    path: '/',
    component: 'home',
    exact: true,
    title: 'react'
  },
  {
    component: 'error',
    title: '404 Not Found'
  }
]

export default routers
