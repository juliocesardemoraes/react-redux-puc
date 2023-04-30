import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./components/pages/Home.tsx";
import { Header } from "./components/organisms/Header.tsx";
import { MovieDetail } from "./components/organisms/MovieDetails.tsx";
import store from "./redux/store.ts";
import { Provider } from "react-redux";
import { Favorites } from "./components/organisms/Favorites.tsx";

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
