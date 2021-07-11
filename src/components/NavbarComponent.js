import { Navbar, NavbarBrand, Jumbotron} from 'reactstrap';

const NAVBAR = () => {
    return (
        <div>
            <Navbar color="dark" expand="md">
                <div className="container m-2">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 col-12">
                            <NavbarBrand className="mr-auto text-white" href="/">Souq Pakistan</NavbarBrand>
                        </div>
                        <div className="col-md-4"></div>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Souq Pakistan</h1>
                            <p>Whatever you want you will find it here!</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        </div>
    );
}

export default NAVBAR;