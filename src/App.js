import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

function App() {
	// Auth
	return (
		<div className="App">
			{/* Auth :
				Sidebar
				Files view
				icons */}
			<Header />
			<Sidebar />
			{/* Not Auth : log in */}
		</div>
	);
}

export default App;
