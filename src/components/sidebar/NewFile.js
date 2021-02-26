import React from "react";
import AddIcon from "@material-ui/icons/Add";

function NewFile() {
	return (
		<div className="newfile">
			<div className="newfile__container">
				<AddIcon />
				<p>Add New</p>
			</div>
		</div>
	);
}

export default NewFile;
