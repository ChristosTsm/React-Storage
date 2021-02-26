import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import FileItem from "./FileItem";
import "../../styles/file_view.css";

export const FilesView = () => {
	const [files, setFiles] = useState([]);

	useEffect(() => {
		db.collection("myfiles").onSnapshot((snapshot) => {
			setFiles(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					item: doc.data(),
				}))
			);
		});
	}, []);

	return (
		<div className="fileview">
			<div className="fileView__row">{/* File cards */}</div>
			<div className="filesView__titles">
				<div className="fileView_titles--left">
					<p>Name</p>
				</div>
				<div className="fileView__titles--right">
					<p>Last modified</p>
					<p>Files Size</p>
				</div>
			</div>
			{files.map(({ id, item }) => (
				<FileItem
					id={id}
					caption={item.caption}
					timestamp={item.timestamp}
					fileUrl={item.fileUrl}
					size={item.size}
				/>
			))}
		</div>
	);
};

export default FilesView;
