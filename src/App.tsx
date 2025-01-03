import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import MainLayout from "./components/layout/mainLayout";
import Home from "./pages/home";
import About from "./pages/aboutUs";
import Features from "./pages/features";
import { Suspense } from "react";
import { DotLoader } from "./components/loading";
import College from "./pages/college";
import CourseDetails from "./components/courseDetail";
import SwiperLayout from "./components/layout/swiperLayout";
import Courses from "./pages/courses";
function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: (
        <Suspense fallback={<><DotLoader/></>}>
          <MainLayout />
        </Suspense>
      ),      
      children:[
        {path:"/", element:<><SwiperLayout/></>,
          children: [
            {path: "/", element:<Navigate to="home"/>},
            {path : "home" , element: <Home/>},
            { path: "about", element: (<><About /></>),},
            {path: "features", element: (<><Features /></>),},
            {path: "college", element: (<><College /></>),},

          ],
        },
        {path: "courses", element: (<><Courses /></>),},
        {path:"course/:title" , element:<><CourseDetails/></>},
      ]
    },
    {path: "*",element: (<><h2>Page not found</h2></>),},    
  ]);
  return (
    <>
        <RouterProvider router={routes} />
    </>
  );
}

export default App;
