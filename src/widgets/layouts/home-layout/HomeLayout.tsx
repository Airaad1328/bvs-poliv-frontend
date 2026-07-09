import { Outlet } from "react-router";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer"


export function HomeLayout () {
    return (
        <>
            <Header variant="home" />
            <Outlet />
            <Footer variant="default"/>
        </>
    );
}