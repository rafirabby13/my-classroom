import { createBrowserRouter } from "react-router";

import React from "react";
import { Dashboard } from "../pages/Dahsboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: React.createElement(Dashboard)
    }
])