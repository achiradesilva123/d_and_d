
import * as React from "react";
import { useRoutes } from "react-router-dom";
import Onboarding from "../page/Onbording/onboarding";
import Chat from "../page/Chat/chat";

export default function Routes() {
    let element = useRoutes([
        {
            path: "/",
            element: <Onboarding />
        },
        {
            path: "/chat",
            element: <Chat/>
        }
    ]);

    return element;
}


