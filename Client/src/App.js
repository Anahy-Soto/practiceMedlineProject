import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Toggle from './Components/scripts';
import SingleScorecard from './pages/SingleScorecard';
import Archives from './pages/Archives';
import Login from './Components/Login';
import Homepage from './pages/Homepage';
import Creation from './pages/creation';
import Scorecard from './pages/Scorecard';

const Layout = () => {
  return (
    <>
      <Toggle />
      <Outlet />
    </>
  )
}


const router = createBrowserRouter([
  {
    path: "/pages/",
    element: <Layout />,
    children: [
      {
        path: "/pages/homepage",
        element:<Homepage />
      },
      {
        path:"/pages/singleScorecard/:id",
        element:<SingleScorecard />
      },
      {
        path:"/pages/Archives",
        element:<Archives />
      },
      {
        path:"/pages/Create",
        element:<Creation />
      },
      {
        path:'/pages/scorecard',
        element:<Scorecard />
      }


    ]
  },
  {
    path:"/",
    element:<Login />
  },
])


function App() {
  return <div className='app'>
    <div className='container'>
    <RouterProvider router={router} />
    </div>
    </div>;
}



export default App;
