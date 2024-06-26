import React from 'react'
import { NavLink } from 'react-router-dom'
export default function SideBarAdmin() {
    return (
        <>
            
                {/* Sidebar Start */}
                <div className="sidebar pe-4 pb-3">
                    <nav className="navbar bg-light navbar-light">
                        <NavLink to="/admin" className="navbar-brand mx-4 mb-3">
                            <h3 className="text-primary">
                                <i className="fa fa-hashtag me-2" />
                                Admin Panel
                            </h3>
                        </NavLink>
                        <div className="d-flex align-items-center ms-4 mb-4">
                            <div className="position-relative">
                                <img
                                    className="rounded-circle"
                                    src="img/user.jpg"
                                    alt=""
                                    style={{ width: 40, height: 40 }}
                                />
                                <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
                            </div>
                            <div className="ms-3">
                                <h6 className="mb-0">Jhon Doe</h6>
                                <span>Admin</span>
                            </div>
                        </div>
                        <div className="navbar-nav w-100">
                            <NavLink to="/admin"  className="nav-item nav-link active">
                                <i className="fa fa-tachometer-alt me-2" />
                                Dashboard
                            </NavLink>
                            <div className="nav-item dropdown">
                                <a
                                    href="#"
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                >
                                    <i className="fa fa-laptop me-2" />
                                    Elements
                                </a>
                                <div className="dropdown-menu bg-transparent border-0">
                                    <NavLink to="/admin/itemslist" className="dropdown-item">
                                        Items
                                    </NavLink>
                                    <NavLink to="/admin/cheflist" className="dropdown-item">
                                        Chefs
                                    </NavLink>
                                    <a href="typography.html" className="dropdown-item">
                                        Typography
                                    </a>
                                    <a href="element.html" className="dropdown-item">
                                        Other Elements
                                    </a>
                                </div>
                            </div>
                            <a href="widget.html" className="nav-item nav-link">
                                <i className="fa fa-th me-2" />
                                Widgets
                            </a>
                            <a href="form.html" className="nav-item nav-link">
                                <i className="fa fa-keyboard me-2" />
                                Forms
                            </a>
                            <a href="table.html" className="nav-item nav-link">
                                <i className="fa fa-table me-2" />
                                Tables
                            </a>
                            <a href="chart.html" className="nav-item nav-link">
                                <i className="fa fa-chart-bar me-2" />
                                Charts
                            </a>
                            <div className="nav-item dropdown">
                                <a
                                    href="#"
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                >
                                    <i className="far fa-file-alt me-2" />
                                    Pages
                                </a>
                                <div className="dropdown-menu bg-transparent border-0">
                                    <a href="signin.html" className="dropdown-item">
                                        Sign In
                                    </a>
                                    <a href="signup.html" className="dropdown-item">
                                        Sign Up
                                    </a>
                                    <a href="404.html" className="dropdown-item">
                                        404 Error
                                    </a>
                                    <a href="blank.html" className="dropdown-item">
                                        Blank Page
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* Sidebar End */}


        </>
    )
}
