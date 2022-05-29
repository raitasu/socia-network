import React from "react";
import classes from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className={classes.sidebar}>
            <nav className={classes.navigation}>
                <NavLink
                    className={(classActive) =>
                        classActive.isActive ? classes.active : classes.item
                    }
                    to="/Profile/1"
                >
                    Profile
                </NavLink>
                <NavLink
                    className={(classActive) =>
                        classActive.isActive ? classes.active : classes.item
                    }
                    to="/Users"
                >
                    Users
                </NavLink>
                <NavLink
                    className={(classActive) =>
                        classActive.isActive ? classes.active : classes.item
                    }
                    to="/Dialogs"
                >
                    Messages
                </NavLink>
                <NavLink
                    className={(classActive) =>
                        classActive.isActive ? classes.active : classes.item
                    }
                    to="/News"
                >
                    News
                </NavLink>
                <NavLink
                    className={(classActive) =>
                        classActive.isActive ? classes.active : classes.item
                    }
                    to="/Music"
                >
                    Music
                </NavLink>
                <NavLink
                    className={(classActive) =>
                        classActive.isActive ? classes.active : classes.item
                    }
                    to="/Settings"
                >
                    Settings
                </NavLink>
            </nav>
            <div className={classes.friends}>
                <img
                    className={classes.logo}
                    src="https://www.harley-davidson.com/content/dam/h-d/images/content-images/hero-cards/3-up/bar-and-shield-1x1.jpg"
                    alt="logo_friend"
                />
                <img
                    className={classes.logo}
                    src="https://www.harley-davidson.com/content/dam/h-d/images/content-images/hero-cards/3-up/bar-and-shield-1x1.jpg"
                    alt="logo_friend"
                />
                <img
                    className={classes.logo}
                    src="https://www.harley-davidson.com/content/dam/h-d/images/content-images/hero-cards/3-up/bar-and-shield-1x1.jpg"
                    alt="logo_friend"
                />
            </div>
        </aside>
    );
};

export default Sidebar;
