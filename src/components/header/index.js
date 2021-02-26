import React from "react";
import "../../styles/header.css";

import Logo from "../../assets/logo.svg";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AppsIcon from "@material-ui/icons/Apps";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";

const index = () => {
	return (
		<div className="header">
			<div className="header__logo">
				<img src={Logo} alt="Logo" />
				<span>Drive</span>
			</div>
			<div className="header__search__container">
				<div className="header__searchbar">
					<SearchIcon />
					<input
						type="text"
						name="search"
						id="search"
						placeholder="Search in drive"
					/>
					<ExpandMoreIcon />
				</div>
			</div>
			<div className="header__icons">
				<span>
					<HelpOutlineIcon />
					<SettingsIcon />
				</span>
				<AppsIcon />
				<img src="" alt="User Image" />
			</div>
		</div>
	);
};

export default index;
