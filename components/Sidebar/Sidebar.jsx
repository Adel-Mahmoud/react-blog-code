import React from "react";
import SidebarItem from './SidebarItem/SidebarItem';
import { toggleSidebar } from "../../utils/sidebarUtils";

const Sidebar = () => {
    return ( 
        <aside className="layout-menu menu-vertical menu bg-menu-theme">
            <div className="app-brand demo d-flex justify-content-center">
                <a href="" className="app-brand-link">
                <span className="app-brand-logo demo">
                    <img src="" width="50" alt="" />
                </span>
                </a>
                <span
                    onClick={toggleSidebar}
                    className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
                    >
                    <i className="bx bx-chevron-left bx-sm align-middle"></i>
                </span>
            </div>
            <div className="menu-inner-shadow"></div>
            <ul className="menu-inner py-1">
                <SidebarItem
                    icon="bx bx-home-circle"
                    label="Dashboard"
                    link="/"
                    active={true}
                />
                <SidebarItem
                    icon="bx bxs-category"
                    label="Category"
                    subItems={[
                        { label: "all categories", link: "/admin/categories" },
                        { label: "add new category", link: "/admin/categories/create" },
                    ]}
                />
                <SidebarItem
                    icon="bx bxs-news"
                    label="Posts"
                    subItems={[
                        { label: "all posts", link: "/admin/posts" },
                        { label: "add new post", link: "/admin/posts/create" },
                    ]}
                />
                <SidebarItem
                    icon="bx bxs-group"
                    label="Users"
                    subItems={[
                        { label: "all users", link: "/admin/users" },
                        { label: "add new user", link: "/admin/users/create" },
                    ]}
                />
            </ul>
        </aside>
     );
}
 
export default Sidebar;