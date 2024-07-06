import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <>
            <Navbar/>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet/>
                </Suspense>
            <Footer/>
        </>
    );
};

export default MainLayout;