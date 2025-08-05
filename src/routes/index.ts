import { createBrowserRouter } from "react-router";

import React from "react";
import MainLayout from "@/components/layout/MainLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: React.createElement(MainLayout)
    }
])