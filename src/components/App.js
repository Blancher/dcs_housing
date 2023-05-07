import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from './Root';
import HomePage from './HomePage';
import Education from './Education';
import Transportation from './Transportation';
import Pricing from './Pricing';
import Donate from './Donate';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      children: [
        {index: true, element: <HomePage/>},
        {path: '/education', element: <Education/>},
        {path: '/transportation', element: <Transportation/>},
        {path: '/pricing', element: <Pricing/>},
        {path: '/donate', element: <Donate/>}
      ]
    }
  ]);
  return <RouterProvider router={router}/>
}
