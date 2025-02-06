"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { dataMenu, menuPages, configMenuItems } from "/src/utils/dataMenu";

export default function Sidebar() {
  const currentPath = usePathname();

  const [mainMenu, setMenu] = useState(dataMenu);
  
  return (
    <div className="d-flex col-lg-2 p-3 flex-column ps-3 vh-100 position-fixed responsive-action" id="sidebar">
      {/* Sidebar Header */}
      <div className="d-flex align-items-center justify-content-between">
        <h4><img src="/assets/images/logo.png" alt="logo" width="20" height="20" /> Portfolio</h4>
        <i className="fa-solid fa-arrow-left fa-lg d-none"></i>
      </div>
      <div className="overflow-auto">
        <ul className="main-menu nav flex-column mt-3">
          <div id="menuAccordion">

            {mainMenu.map((menu) => {
              return (
                menu.hasSubMenu ? (
                  <li key={menu.name} className="menu-item">
                    <a className={`nav-link position-relative ${menu.icon}`} data-bs-toggle="collapse" href={`#${menu.name}SubMenu`} role="button" aria-expanded={menu.subMenu.some(subMenu => subMenu.page === currentPath) ? 'true' : ''} aria-controls={`${menu.name}SubMenu`}>{menu.name}</a>
                    <ul id={`${menu.name}SubMenu`} className={`sub-menu nav collapse ${menu.subMenu.some(subMenu => subMenu.page === currentPath) ? 'show' : ''}`} data-bs-parent="#menuAccordion">
                      {menu.subMenu.map((subMenu) => { 
                        return (
                          <li key={subMenu.page}>
                            <Link  href={subMenu.page} className={`nav-link ${currentPath === subMenu.page ? 'active' : ''}`}>
                              {subMenu.name}
                            </Link>
                          </li>
                        ) 
                      })}
                    </ul>
                  </li>
                ) : (
                  <li key={menu.name}>
                    <Link  href={menu.page} className={`nav-link ${menu.icon} ${currentPath === menu.page ? 'active' : ''}`}>
                      {menu.name}
                    </Link>
                  </li>
                )
              );
            })}
            

            {/* Apps & Pages Header */}
            <li className="menu-header mt-4 mb-2 position-relative">
              <span className="menu-header-text" data-i18n="Apps &amp; Pages">Apps &amp; Pages</span>
            </li>
            {/* Apps & Pages Links */}
            {menuPages.map((menu) => {
              return (
                menu.hasSubMenu ? (
                  <li key={menu.name} className="menu-item">
                    <a className={`nav-link position-relative ${menu.icon}`} data-bs-toggle="collapse" href={`#${menu.name}SubMenu`} role="button" aria-expanded={menu.subMenu.some(subMenu => subMenu.page === currentPath) ? 'true' : ''} aria-controls={`${menu.name}SubMenu`}>{menu.name}</a>
                    <ul id={`${menu.name}SubMenu`} className={`sub-menu nav collapse ${menu.subMenu.some(subMenu => subMenu.page === currentPath) ? 'show' : ''}`} data-bs-parent="#menuAccordion">
                      {menu.subMenu.map((subMenu) => { 
                        return (
                          <li key={subMenu.page}>
                            <Link  href={subMenu.page} className={`nav-link ${currentPath === subMenu.page ? 'active' : ''}`}>
                              {subMenu.name}
                            </Link>
                          </li>
                        ) 
                      })}
                    </ul>
                  </li>
                ) : (
                  <li key={menu.name}>
                    <Link  href={menu.page} className={`nav-link ${menu.icon} ${currentPath === menu.page ? 'active' : ''}`}>
                      {menu.name}
                    </Link>
                  </li>
                )
              );
            })}




            {/* Configs Header */}
            <li className="menu-header mt-4 mb-2 position-relative">
              <span className="menu-header-text" data-i18n="Apps &amp; Pages">Configs</span>
            </li>
            {/* Configs Links */}
            {configMenuItems.map((menu) => {
              return (
                menu.hasSubMenu ? (
                  <li key={menu.name} className="menu-item">
                    <a className={`nav-link position-relative ${menu.icon}`} data-bs-toggle="collapse" href={`#${menu.name}SubMenu`} role="button" aria-expanded={menu.subMenu.some(subMenu => subMenu.page === currentPath) ? 'true' : ''} aria-controls={`${menu.name}SubMenu`}>{menu.name}</a>
                    <ul id={`${menu.name}SubMenu`} className={`sub-menu nav collapse ${menu.subMenu.some(subMenu => subMenu.page === currentPath) ? 'show' : ''}`} data-bs-parent="#menuAccordion">
                      {menu.subMenu.map((subMenu) => { 
                        return (
                          <li key={subMenu.page}>
                            <Link  href={subMenu.page} className={`nav-link ${currentPath === subMenu.page ? 'active' : ''}`}>
                              {subMenu.name}
                            </Link>
                          </li>
                        ) 
                      })}
                    </ul>
                  </li>
                ) : (
                  <li key={menu.name}>
                    <Link  href={menu.page} className={`nav-link ${menu.icon} ${currentPath === menu.page ? 'active' : ''}`}>
                      {menu.name}
                    </Link>
                  </li>
                )
              );
            })}
          </div>
        </ul>
      </div>
    </div>
  );
}