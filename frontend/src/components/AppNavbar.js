import React, { Component, Fragment } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';

class AppNavbar extends Component {
    state = {
        collapsed: false
    }

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

  render() {
    return (
    <Fragment>
        <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
                <NavbarBrand href="/">WordToUppercase</NavbarBrand>
                <NavbarToggler onClick={ this.toggleNavbar } className="mr-2" />
                <Collapse isOpen={ !this.state.collapsed } navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="https://github.com/danxmc/HeliconTestApp">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    </Fragment>
    )
  }
}

export default AppNavbar;