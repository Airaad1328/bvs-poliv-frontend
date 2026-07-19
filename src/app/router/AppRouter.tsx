import { BrowserRouter,  Route, Routes } from "react-router";

import { HomePage } from "@/pages/home";
import { AutoPolivPage } from "@/pages/auto-poliv";
import { EquipmentPage } from "@/pages/equipment";
import { ServicesPage } from "@/pages/services";
import { PricePage } from "@/pages/price";
import { CompletedWorksPage } from "@/pages/completed-works";
import { ContactsPage } from "@/pages/contacts";
import { CatalogPage } from '@/pages/catalog';
import { ProductPage } from '@/pages/product';

import { ScrollToTop } from './ScrollToTop';
import { SearchTarget } from '@/features/site-search/SearchTarget';

import { DefaultLayout } from "@/widgets/layouts/default-layout";
import { HomeLayout } from "@/widgets/layouts/home-layout";

export function AppRouter() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <SearchTarget />
            <Routes>
                <Route element={ <HomeLayout/> } > 
                    <Route path="/home" element={ <HomePage /> }/>
                    <Route path="/about" element={ <HomePage/>}/>
                </Route>

                <Route element={<DefaultLayout/>}>
                    <Route path="/auto-poliv" element={ <AutoPolivPage/> }/>
                    <Route path="/tools" element={<EquipmentPage/>}/>
                    <Route path="/services" element={<ServicesPage/>}/>
                    <Route path="/price" element={<PricePage/>} />
                    <Route path="/complete-jobs" element = {<CompletedWorksPage/>} />
                    <Route path="/contacts" element = {<ContactsPage/>} />
                    <Route path="/catalog" element = {<CatalogPage/>}/>
                    <Route path="/catalog/:slug" element = {<ProductPage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
