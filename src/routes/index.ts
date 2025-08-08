import { createBrowserRouter } from "react-router";

import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import ClassInterface from "@/components/classroom/ClassInterface";
import ClassList from "@/components/classroom/ClassList";
import PrivateRoutes from "@/components/layout/PrivateRoutes";
import Login from "@/pages/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: React.createElement(PrivateRoutes, null, React.createElement(MainLayout)),
        children: [
            {
                path: "/",
                element: React.createElement(ClassList),
                loader: () => fetch("http://localhost:5000/all-classes")
            },
            {
                path: "class/:id",
                element: React.createElement(ClassInterface),
                loader: ({ params }) => fetch(`http://localhost:5000/class/${params.id}`)
            }
        ]
    },
    {
        path: "/login",
        element: React.createElement(Login),
    }
])