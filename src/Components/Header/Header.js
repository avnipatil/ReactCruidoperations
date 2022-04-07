import './Header.css';
import logo1 from '../../img/logo.png';
import Banner from '../Banner/Banner';

const Header=()=>{
    return(
        <>
        <section className="topnavsec top_bar top--bar2 d-flex align-items-center py-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4"> 
                    <i className="fa fa-envelope px-1" aria-hidden="true"></i><span>support@email.com</span>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                    <i className="fa fa-headphones px-1" aria-hidden="true"></i><span>800 567.890.576 </span>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                    <i className="fa fa-clock" aria-hidden="true"></i> <span>Mon-Sat 8.00 - 18.00</span>
                    </div>
                    {/* <div className="col-lg-3 col-md-3 col-sm-3" > 
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                    </div> */}

                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <div className="row">               
                    <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundcolor:'white'}}>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <img src={logo1}/>
                        <div className="col-lg-8 headlink">
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <div class="dropdown">
                                    <button class="dropbtn">Category</button>
                                    <div class="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#">Blogs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#">Subscription</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#">Contact</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
        <Banner/>
        </>
    )
}
export default Header;