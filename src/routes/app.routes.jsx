import { Routes, Route } from "react-router-dom";
import { New } from "../pages/New";
import { Home } from "../pages/Home";
import { App } from "../pages/Details";
import { Profile } from "../pages/Profile";

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/app/:id" element={<App />} />
            <Route path="/new" element={<New />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}