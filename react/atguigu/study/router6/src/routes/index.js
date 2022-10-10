import { Navigate } from 'react-router-dom'

import About from '../pages/About'
import Home from '../pages/Home'
import New from '../pages/New'
import Msg from '../pages/Msg'
import Detail from '../pages/Detail'

export default [
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: 'new',
        element: <New />
      },
      {
        path: 'msg',
        element: <Msg />,
        children: [
          /* {
            path: 'detail/:id/:content', // params 参数 需要占位
            element: <Detail />
          } */
          {
            path: 'detail', // search 参数
            element: <Detail />
          }
        ]
      },
      {
        path: '',
        element: <Navigate to="new" />
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to="/about" />
  }
]
