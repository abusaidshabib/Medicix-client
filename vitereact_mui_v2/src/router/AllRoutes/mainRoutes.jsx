import { Route } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import ErrorPage from "../../pages/ErrorPage";
import Home from "../../pages/main/Home";

const mainroutes = (
    <Route path="/" element={<MainLayout/>} errorElement={<ErrorPage/>}>
        <Route index element={<Home/>} />
    </Route>
)

export default mainroutes;