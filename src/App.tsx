import List from "./components/List";
import SinglePage from "./components/SingleCharacter";
import { Route, Routes } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
    children: [
      {
        path: "/:id",
        element: <SinglePage />,
      },
    ],
  },
]);



function App() {
  return (
    <div className="App">

{/* <RouterProvider router={router} /> */}
<Routes>
  <Route  path="/" element= {<List /> }/>
  <Route path="/:id" element={<SinglePage/>}/>
</Routes>

    </div>
  );
}

export default App;



