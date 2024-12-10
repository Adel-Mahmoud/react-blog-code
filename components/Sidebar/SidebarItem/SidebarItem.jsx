import { useState } from "react";
import { Link } from "react-router-dom";
import { toggleSidebar } from "../../../utils/sidebarUtils";

const SidebarItem = ({ icon, additionalIcon, label, link, active, subItems }) => {
    const hasSubItems = subItems && subItems.length > 0;
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen((prevState) => !prevState); 
      };

    return ( 
        <>
            <li 
              className={`menu-item ${active ? "active" : ""} ${isOpen ? "open" : ""}`}
              onClick={handleToggle}
              >
                {link ? (
                    <Link to={link} onClick={toggleSidebar} className={`menu-link ${hasSubItems ? "menu-toggle" : ""}`}>
                        <i className={`menu-icon tf-icons ${icon}`}></i>
                        {additionalIcon && <i className={`menu-icon tf-icons ${additionalIcon}`}></i>}
                        <div data-i18n="Layouts">{label}</div>
                    </Link>
                ) : (
                    <a href="#" className={`menu-link ${hasSubItems ? "menu-toggle" : ""}`}>
                    <i className={`menu-icon tf-icons ${icon}`}></i>
                    {additionalIcon && <i className={`menu-icon tf-icons ${additionalIcon}`}></i>}
                    <div data-i18n="Layouts">{label}</div>
                    </a>
                )}
                {hasSubItems && (
                    <ul className="menu-sub">
                    {subItems.map((subItem, index) => (
                        <li key={index} className="menu-item">
                        
                        
                        {subItems ? (
                            <Link to={subItem.link} onClick={toggleSidebar} className={`menu-link`}>
                                <div data-i18n="Without menu">{subItem.label}</div>
                            </Link>
                        ) : (
                            <a href="#" className="menu-link">
                                <div data-i18n="Without menu">{subItem.label}</div>
                            </a>
                        )}
                        
                        
                        
                        </li>
                    ))}
                    </ul>
                )}
                </li>
        </>
     );
}
 
export default SidebarItem;