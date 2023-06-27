import "./App.css";

import About from "./pages/About";
import Home from "./pages/Home";

import {
  // createHashRouter,
  // RouterProvider,
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

// const router = createHashRouter([
//   {
//     path: "/",
//     element: <Home />,
//     children: [
//       {
//         path: "about",
//         element: <About />,
//       },
//     ],
//   },
// ]);

const App = () => {
  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      <HashRouter future={{ v7_startTransition: true }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
