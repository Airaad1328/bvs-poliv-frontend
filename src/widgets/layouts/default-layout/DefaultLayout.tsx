import { Outlet } from "react-router";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

export function DefaultLayout() {
    return (
        <>
            <Header variant="default" />
            <Outlet/>
            <Footer variant="default"></Footer>
        </>
    );
}