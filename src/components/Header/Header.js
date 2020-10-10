import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import { HelpOutlineOutlined } from "@material-ui/icons";

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <h2>Header</h2>
                {/* Avatars for logged in user */}
                <Avatar 
                    className="header-avatar"
                    alt="Mazhar"
                    src="https://scontent.fdac11-1.fna.fbcdn.net/v/t31.0-8/20452010_10207403398602041_4972071367557522119_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=4_IfZKZshPsAX-uuYAh&_nc_ht=scontent.fdac11-1.fna&oh=c9e416963177633959293af88cd35484&oe=5FA8463C"
                />

                {/* Time icon */}
                <AccessTimeIcon />
            </div>
            <div className="header-search">
                {/* Search Icon */}
                <SearchIcon />

                {/* Input */}
                <input placeholder="Search channel name" />
            </div>
            <div className="header-right">
                {/* Help icon */}
                <HelpOutlineOutlined />
            </div>
        </div>
    );
}

export default Header;
