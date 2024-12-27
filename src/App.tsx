import "./assets/styles/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/layout/mainLayout";
import Home from "./pages/home";
import About from "./pages/aboutUs";
import Features from "./pages/features";
import { Suspense } from "react";
import { DotLoader } from "./components/loading";
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
       
        {path : "home" , element: <Home/>},
        { path: "about", element: (<><About /></>),},
        {path: "features", element: (<><Features /></>),},
        {path: "*",element: (<><h2>Page not found</h2></>),},
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
