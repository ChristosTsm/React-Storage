import React from "react";

import "../../styles/sidebar_item.css";

import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const SidebarItem = ({ arrow, icon, label }) => {
	return (
		<div className="sidebar__item">
			<div className="sidebar__item__arrow">
				{arrow && <ArrowRightIcon />}
			</div>

			<div className="sidebar__item__main">
				{icon}
				<p>{label}</p>
			</div>
		</div>
	);
};

export default SidebarItem;
