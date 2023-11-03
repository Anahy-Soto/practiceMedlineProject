import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Toggle from './Components/scripts';
import SingleScorecard from './pages/SingleScorecard';
import Archives from './pages/Archives';
import Login from './Components/Login';
import Homepage from './pages/Homepage';
import Creation from './pages/creation';

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
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/homepage",
        element:<Homepage />
      },
      {
        path:"/singleScorecard/:id",
        element:<SingleScorecard />
      },
      {
        path:"/Archives",
        element:<Archives />
      },
      {
        path:"/Create",
        element:<Creation />
      },


    ]
  },
  {
    path:"/login",
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
