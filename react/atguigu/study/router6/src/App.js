import { NavLink, useRoutes } from 'react-router-dom'

import Routes from './routes'
import Header from './components/Header'
import './App.css'

export default function App() {
  // NavLink 高亮 自定义className
  const computedClassName = ({ isActive }) =>
    isActive ? 'list-group-item selected ' : 'list-group-item'

  const ele = useRoutes(Routes)

  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            <NavLink className={computedClassName} to="/about">
              About
            </NavLink>
            {/* end 父组件失去高亮 */}
            <NavLink className={computedClassName} end to="/home">
              Home
            </NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* <Routes> */}
              {/* caseSensitive 区分大小写 */}
              {/* <Route path="/about" caseSensitive element={<About />} />
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Navigate to="/about" />} /> */}
              {/* </Routes> */}

              {ele}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
