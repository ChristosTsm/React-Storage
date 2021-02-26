import React from "react";
import "../../styles/sidebar.css";
import NewFile from "./NewFile";
import SidebarItem from "./SidebarItem";

import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import StorageIcon from "@material-ui/icons/Storage";

const index = () => {
	return (
		<div className="sidebar">
			<NewFile />
			<div className="sidebar__items__container">
				<SidebarItem
					arrow
					icon={<InsertDriveFileIcon />}
					label={"My Drive"}
				/>
				<SidebarItem
					arrow
					icon={<InsertDriveFileIcon />}
					label={"Computers"}
				/>
				<SidebarItem icon={<PeopleAltIcon />} label={"Shared"} />
				<SidebarItem icon={<QueryBuilderIcon />} label={"Recent"} />
				<SidebarItem icon={<StarBorderIcon />} label={"Starred"} />
				<SidebarItem icon={<DeleteOutlineIcon />} label={"Bin"} />

				<hr />

				{/* More Sidebar Items */}
				<SidebarItem icon={<StorageIcon />} label={"Storage"} />
			</div>
		</div>
	);
};

export default index;
