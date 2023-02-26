
import * as React from "react";
import { useRoutes } from "react-router-dom";
import Onboarding from "../page/Onbording/onboarding";

export default function Routes() {
    let element = useRoutes([
        {
            path: "/",
            element: <Onboarding />,
            // children: [
            //     {
            //         path: "messages",
            //         element: <DashboardMessages />,
            //     },
            //     { path: "tasks", element: <DashboardTasks /> },
            // ],
        },

    ]);

    return element;
}


