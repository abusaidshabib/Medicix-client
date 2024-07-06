import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import mainroutes from "./AllRoutes/mainRoutes";

const router = createBrowserRouter(
    createRoutesFromElements(
        mainroutes
    )
)
export default router;