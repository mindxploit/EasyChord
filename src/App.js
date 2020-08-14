import React from "react";
import Main from "./new_components/Main";

import "./assets/App.css";
import { GlobalContext } from "./new_components/Context";

function App() {
	return (
		<GlobalContext>
			<Main />
		</GlobalContext>
	);
}

export default App;
