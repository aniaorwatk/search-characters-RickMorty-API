import List from "./components/List";
import SinglePage from "./components/SingleCharacter";
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

const App =()=> {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
