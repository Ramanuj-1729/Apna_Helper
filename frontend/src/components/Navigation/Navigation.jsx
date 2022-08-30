import React from 'react';
import style from './Navigation.module.css';
// import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        // <Navbar className={style.bg} expand="lg">
        //     <Container fluid>
        //         <Navbar.Brand href="#">Apna Helper</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="navbarScroll" />
        //         <Navbar.Collapse id="navbarScroll">
        //             <Nav
        //                 className="me-auto my-2 my-lg-0"
        //                 style={{ maxHeight: '100px' }}
        //                 navbarScroll
        //             >
        //                 <Nav.Link href="/">Home</Nav.Link>
        //                 <Nav.Link href="/about-us">About</Nav.Link>
        //                 <Nav.Link href="/contact-us">Contact</Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>

        <nav className={`${style.navbar} navbar-expand-xl navbar-dark bg-dark`}>
            <a href="#" className={style.navbar_brand}><i className="fa fa-cube"></i>Brand<b>Name</b></a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* Collection of nav links, forms, and other content for toggling */}
            <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
                <form className="navbar-form form-inline">
                    <div className={`input-group ${style.search_box}`}>
                        <input type="text" id="search" className="form-control" placeholder="Search here..." />
                            <span className={style.input_group_addon}><i className="material-icons">&#xE8B6;</i></span>
                    </div>
                </form>
                <div className="navbar-nav ml-auto">
                    <a href="#" className={`nav-item nav-link active`}><i className="fa fa-home"></i><span>Home</span></a>
                    <a href="#" className="nav-item nav-link"><i className="fa fa-gears"></i><span>Projects</span></a>
                    <a href="#" className="nav-item nav-link"><i className="fa fa-users"></i><span>Team</span></a>
                    <a href="#" className="nav-item nav-link"><i className="fa fa-pie-chart"></i><span>Reports</span></a>
                    <a href="#" className="nav-item nav-link"><i className="fa fa-briefcase"></i><span>Careers</span></a>
                    <a href="#" className="nav-item nav-link"><i className="fa fa-envelope"></i><span>Messages</span></a>
                    <a href="#" className="nav-item nav-link"><i className="fa fa-bell"></i><span>Notifications</span></a>
                    <div className="nav-item dropdown">
                        <a href="#" data-toggle="dropdown" className="nav-item nav-link dropdown-toggle user-action"><img src="https://www.tutorialrepublic.com/examples/images/avatar/3.jpg" className="avatar" alt="Avatar" /> Antonio Moreno <b className="caret"></b></a>
                        <div className="dropdown-menu">
                            <a href="#" className="dropdown-item"><i className="fa fa-user-o"></i> Profile</a>
                            <a href="#" className="dropdown-item"><i className="fa fa-calendar-o"></i> Calendar</a>
                            <a href="#" className="dropdown-item"><i className="fa fa-sliders"></i> Settings</a>
                            <div className="divider dropdown-divider"></div>
                            <a href="#" className="dropdown-item"><i className="material-icons">&#xE8AC;</i> Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;