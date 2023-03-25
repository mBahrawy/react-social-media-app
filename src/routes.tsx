import { useRoutes } from 'react-router-dom'
import { lazy } from 'react'

const Home = lazy(() => import('@/modules/Home/Home.component'))
const Post = lazy(() => import('@/modules/SinglePost/SinglePost.component'))

const Routes = () => {
  const routes = useRoutes([
    {
      path: '',
      element: <Home />,
    },
    {
      path: '/:id',
      element: <Post />,
    },
    {
      path: '*',
      element: <h1>404</h1>,
    },
  ])

  return routes
}

export default Routes
