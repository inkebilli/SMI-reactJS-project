
/* this shows how to "code splitting" easily using "loadable-components"
more info here: https://github.com/gregberge/loadable-components
POV: BETTER than react.lazy in anyway.
*/

import * as React from "react";

import baseLoadable from "@loadable/component"

//this function return a loader that will be displayed whenever a component is loading
function SimpleBackdrop() {
	//const handleClose = () => {};

        
	return (
		<div>
			Chargement...
		</div>
	);
}

//wraping loadable inside this function to add the loader
function loadable(func: any) {
	return baseLoadable(func, {
		fallback: SimpleBackdrop(),
	});
}

//importing components
//const Login = loadable(() => import("./auth/login"));
const LogOut = loadable(() => import("./auth/logout"));
const Influencer = loadable(() => import("./influencer/index"));
const InfluencerList = loadable(() => import("./influencer/influencerList"));
const Statistics = loadable(() => import("./statistics/index"));
const Dashboard = loadable(() => import("./dashboard/index")); 
 
export { 
	//Login,
    LogOut,
    Influencer,
    InfluencerList,
    Statistics, 
	Dashboard, 
	SimpleBackdrop, 
};
