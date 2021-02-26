// import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import FileView from "./components/filesView/FilesView";
function App() {
	// Auth
	return (
		<div className="App">
			{/* Auth :
				Sidebar
				Files view
				icons */}
			<Header />
			<div className="app__main">
				<Sidebar />
				<FileView />
			</div>
			{/* Not Auth : log in */}
		</div>
	);
}

export default App;
