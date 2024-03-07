import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/user/home";
import CreateMovieBooking from "./components/admin/create";
import Signup from "./components/auth/signup";
import Update from "./components/admin/update";
import List from "./components/admin/list";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'home', element: <Home/> },
    { path:'admin-create', element: <CreateMovieBooking/> },
    { path:'admin-list', element: <List/> },
    { path:'admin-update', element: <Update/>},
    { path:'signup', element: <Signup/>}
]);

export default router;