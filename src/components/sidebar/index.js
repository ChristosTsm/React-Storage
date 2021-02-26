import React from "react";
import NewFile from "./NewFile";
import SidebarItem from "./SidebarItem";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

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
				<SidebarItem arrow icon={<PeopleAltIcon />} label={"Shared"} />
				<SidebarItem
					arrow
					icon={<QueryBuilderIcon />}
					label={"Recent"}
				/>
				<SidebarItem
					arrow
					icon={<StarBorderIcon />}
					label={"Starred"}
				/>
				<SidebarItem arrow icon={<DeleteOutlineIcon />} label={"Bin"} />

				<hr />

				{/* More Sidebar Items */}
			</div>
		</div>
	);
};

export default index;
