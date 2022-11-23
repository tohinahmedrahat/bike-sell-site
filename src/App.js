import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Router/Router';

function App() {

  return (
    <div className='md:w-11/12 mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
