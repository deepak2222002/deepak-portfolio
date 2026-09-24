import { Container, Nav, Navbar as BootstrapNavbar, Button } from "react-bootstrap";

function Navbar() {
    return (
        <BootstrapNavbar
            expand="lg"
            bg="transparent"
            variant="dark"
            sticky="top"
            className="shadow-sm w-100"
        >
            <Container>

                {/* Logo / Name */}
                <BootstrapNavbar.Brand href="#home">
                    <strong>Deepak Verma</strong>
                </BootstrapNavbar.Brand>


                {/* Mobile Toggle */}
                <BootstrapNavbar.Toggle aria-controls="portfolio-navbar" />


                {/* Navigation */}
                <BootstrapNavbar.Collapse id="portfolio-navbar">

                    <Nav className="mx-auto">

                        <Nav.Link href="#home">
                            Home
                        </Nav.Link>

                        <Nav.Link href="#journey">
                            Journey
                        </Nav.Link>

                        <Nav.Link href="#projects">
                            Projects
                        </Nav.Link>

                        <Nav.Link href="#skills">
                            Skills
                        </Nav.Link>

                        <Nav.Link href="#experience">
                            Experience
                        </Nav.Link>

                        <Nav.Link href="#achievements">
                            Achievements
                        </Nav.Link>

                        <Nav.Link href="#contact">
                            Contact
                        </Nav.Link>

                    </Nav>


                    {/* Resume */}
                    <Button
                        variant="outline-light"
                        href="/resume.pdf"
                        target="_blank"
                    >
                        Resume
                    </Button>

                </BootstrapNavbar.Collapse>

            </Container>
        </BootstrapNavbar>
    );
}

export default Navbar;