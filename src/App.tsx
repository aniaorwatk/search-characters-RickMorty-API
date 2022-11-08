import { createBrowserRouter, RouterProvider } from "react-router-dom";
import List from "./components/List";
import SinglePage from "./components/SingleCharacter";
import "./style.css"
const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
    children: [
      {
        path: "/:id",
        element: <SinglePage  />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="wrapper">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
