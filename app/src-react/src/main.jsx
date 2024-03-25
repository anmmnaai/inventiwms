import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SinglePageBase from "./pages/SinglePageBase.jsx";
import { 
	createBrowserRouter,
	RouterProvider,
	Route
 } from "react-router-dom";
import CampaignManager from "./pages/CampaignManager.jsx";

 const router = createBrowserRouter([
	{
		path: "/",
		element: <App />
	},
	{
		path: "/campaignManager",
		element: <CampaignManager/>
	},
	{
		path: "/CreateCampaign",
		element: <SinglePageBase />
	}
 ])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
);
