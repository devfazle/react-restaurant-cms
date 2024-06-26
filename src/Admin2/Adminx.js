import React from 'react'

export default function Adminx() {

    import("./style.css");

    return (
        <>
            <div className="container">
                <aside className="left-section">
                    <div className="logo">
                        <button className="menu-btn" id="menu-close">
                            <i className="bx bx-log-out-circle" />
                        </button>
                        <img src="assets/logo.png" />
                        <a href="#">AsmrProg</a>
                    </div>
                    <div className="sidebar">
                        <div className="item" id="active">
                            <i className="bx bx-home-alt-2" />
                            <a href="#">Overview</a>
                        </div>
                        <div className="item">
                            <i className="bx bx-grid-alt" />
                            <a href="#">Course</a>
                        </div>
                        <div className="item">
                            <i className="bx bx-folder" />
                            <a href="#">Resources</a>
                        </div>
                        <div className="item">
                            <i className="bx bx-message-square-dots" />
                            <a href="#">Message</a>
                        </div>
                        <div className="item">
                            <i className="bx bx-cog" />
                            <a href="#">Setting</a>
                        </div>
                    </div>
                    <div className="pic">
                        <img src="assets/pro.png" />
                    </div>
                    <div className="upgrade">
                        <h5>Upgrade Your Plan</h5>
                        <div className="link">
                            <a href="#">
                                Go to <b>PRO</b>
                            </a>
                            <i className="bx bxs-chevron-right" />
                        </div>
                    </div>
                </aside>
                <main>
                    <header>
                        <button className="menu-btn" id="menu-open">
                            <i className="bx bx-menu" />
                        </button>
                        <h5>
                            Hello <b>REZA</b>, welcome back!
                        </h5>
                    </header>
                    <div className="separator">
                        <div className="info">
                            <h3>My Courses</h3>
                            <a href="#">View All</a>
                        </div>
                        <div className="search">
                            <i className="bx bx-search" />
                            <input type="text" placeholder="Search..." />
                        </div>
                    </div>
                    <div className="analytics">
                        <div className="item">
                            <div className="progress">
                                <div className="info">
                                    <h5>Locations</h5>
                                    <p>35 Lessons</p>
                                </div>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow={75}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                            </div>
                            <i className="bx bx-map-pin" />
                        </div>
                        <div className="item">
                            <div className="progress">
                                <div className="info">
                                    <h5>People</h5>
                                    <p>30 Lessons</p>
                                </div>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow={75}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                            </div>
                            <i className="bx bx-user-voice" />
                        </div>
                        <div className="item">
                            <div className="progress">
                                <div className="info">
                                    <h5>Airport</h5>
                                    <p>45 Lessons</p>
                                </div>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow={75}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                            </div>
                            <i className="bx bxs-plane-land" />
                        </div>
                        <div className="item">
                            <div className="progress">
                                <div className="info">
                                    <h5>Places</h5>
                                    <p>20 Lessons</p>
                                </div>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow={75}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                            </div>
                            <i className="bx bxs-castle" />
                        </div>
                    </div>
                    <div className="separator">
                        <div className="info">
                            <h3>Planning</h3>
                            <a href="#">View All</a>
                        </div>
                        <input type="date" defaultValue="2023-10-15" />
                    </div>
                    <div className="planning">
                        <div className="item">
                            <div className="left">
                                <div className="icon">
                                    <i className="bx bx-book-alt" />
                                </div>
                                <div className="details">
                                    <h5>Reading - Topic 1</h5>
                                    <p>8:00 - 10:00</p>
                                </div>
                            </div>
                            <i className="bx bx-dots-vertical-rounded" />
                        </div>
                        <div className="item">
                            <div className="left">
                                <div className="icon">
                                    <i className="bx bx-edit-alt" />
                                </div>
                                <div className="details">
                                    <h5>Writing - Topic 2</h5>
                                    <p>13:00 - 14:00</p>
                                </div>
                            </div>
                            <i className="bx bx-dots-vertical-rounded" />
                        </div>
                        <div className="item">
                            <div className="left">
                                <div className="icon">
                                    <i className="bx bx-headphone" />
                                </div>
                                <div className="details">
                                    <h5>Listening - Topic 1</h5>
                                    <p>15:00 - 16:00</p>
                                </div>
                            </div>
                            <i className="bx bx-dots-vertical-rounded" />
                        </div>
                        <div className="item">
                            <div className="left">
                                <div className="icon">
                                    <i className="bx bx-volume-low" />
                                </div>
                                <div className="details">
                                    <h5>Listening - Topic 2</h5>
                                    <p>19:00 - 20:00</p>
                                </div>
                            </div>
                            <i className="bx bx-dots-vertical-rounded" />
                        </div>
                    </div>
                </main>
                <aside className="right-section">
                    <div className="top">
                        <i className="bx bx-bell" />
                        <div className="profile">
                            <div className="left">
                                <img src="assets/profile.jpg" />
                                <div className="user">
                                    <h5>Reza Mehdikhanlou</h5>
                                    <a href="#">Basic Plan</a>
                                </div>
                            </div>
                            <i className="bx bxs-chevron-right" />
                        </div>
                    </div>
                    <div className="separator" id="first">
                        <h4>Statistics</h4>
                    </div>
                    <div className="stats">
                        <div className="item">
                            <div className="top">
                                <p>Courses</p>
                                <p>Completed</p>
                            </div>
                            <div className="bottom">
                                <div className="line" />
                                <h3>02</h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="top">
                                <p>Total Points</p>
                                <p>Gained</p>
                            </div>
                            <div className="bottom">
                                <div className="line" />
                                <h3>250</h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="top">
                                <p>Courses</p>
                                <p>In Progress</p>
                            </div>
                            <div className="bottom">
                                <div className="line" />
                                <h3>03</h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="top">
                                <p>Tasks</p>
                                <p>Finished</p>
                            </div>
                            <div className="bottom">
                                <div className="line" />
                                <h3>250</h3>
                            </div>
                        </div>
                    </div>
                    <div className="separator">
                        <h4>Weekly Work</h4>
                    </div>
                    <div className="weekly">
                        <div className="title">
                            <div className="line" />
                            <h5>Tasks This Week</h5>
                        </div>
                        <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        ></div>
                    </div>
                </aside>
            </div>

        </>
    )
}
