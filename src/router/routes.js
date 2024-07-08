import LoginPage from "../pages/authentication/LoginPage";
import Overview from "../pages/dashboard/Overview";
import Members from "../pages/dashboard/Members";
import Zones from "../pages/dashboard/Zones";
import Reports from "../pages/dashboard/Reports";
import Financials from "../pages/dashboard/Financials";
import UserGroup from "../pages/dashboard/UserGroup";
import UserActivities from "../pages/dashboard/UserActivities";

const ROUTES = [
    {
        path: "/",
        key: "Login",
        exact: true,
        element: <LoginPage />,
    },
    {
        path: "/overview",
        key: "Overview",
        exact: true,
        element: <Overview />,
    },
    {
        path: "/members",
        key: "Members",
        exact: true,
        element: <Members />,
    },
    {
        path: "/branches",
        key: "Branches",
        exact: true,
        element: <Zones />,
    },
    {
        path: "/reports",
        key: "Reports",
        exact: true,
        element: <Reports />,
    },
    {
        path: "/financial",
        key: "Financial",
        exact: true,
        element: <Financials />,
    },
    {
        path: "/user",
        key: "Users",
        exact: true,
        element: <UserGroup />,
    },
    {
        path: "/activities",
        key: "Activities",
        exact: true,
        element: <UserActivities />,
    },
]

export default ROUTES;