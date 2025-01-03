import "./assets/styles/index.scss";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import MainLayout from "./components/layout/mainLayout";
import Home from "./pages/home";
import About from "./pages/aboutUs";
import Features from "./pages/features";
import { Suspense } from "react";
import { DotLoader } from "./components/loading";
import College from "./pages/college";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<><DotLoader/></>}>
          <MainLayout />
        </Suspense>
      ),
      children: [
        {path: "/", element:<Navigate to="home"/>},
        {path : "home" , element: <Home/>},
        { path: "about", element: (<><About /></>),},
        {path: "features", element: (<><Features /></>),},
        {path: "college", element: (<><College /></>),
          children:[
            {path:"courses/:title" }
          ]
        },

        {path: "*",element: (<><h2>Page not found</h2></>),},
      ],
    },
  ]);
  return (
    <>
      <Suspense fallback={<><DotLoader/></>}>
        <RouterProvider router={routes} />
      </Suspense>
    </>
  );
}

export default App;
