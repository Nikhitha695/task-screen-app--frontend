import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import MyCalendar from './components/mycalendar/MyCalendar';
import Widgets from './components/widgets/Widgets';
import Home from './components/Home'
import Dashboard from './components/dashboard/Dashboard';
import Reports from './components/reports/Reports'
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/mycalendar",
        element:<MyCalendar/>
      },
      {
        path:"/widgets",
        element:<Widgets/>
      },
      {
        path:"/calendar",
        element:<MyCalendar/>
      },
      {
        path:"/dashboard",
        element:<Dashboard/>
      },
      {
        path:"/reports",
        element:<Reports/>
      }
    ]
    }
  ])


  return (
    <div className='container-fluid'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

