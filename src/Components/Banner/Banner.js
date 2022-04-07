import './Banner.css'
import bancardimg1 from '../../img/bancard1.jpg';
import bancardimg2 from '../../img/banimg2.jpg';
import bancardimg3 from '../../img/bancard3.jpg';
const Banner =()=>{
    return(
        <>
        <section className="bansection">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="card card-shadow card-one">
                            <img src={bancardimg1}/>
                            <figcaption>
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </figcaption>
                            <div className="card-body">
                                <p className="card-one .card-subtitle">Business Services</p>
                                <h6>Financial Sustainability</h6>                          
                            </div>
                        </div>                          
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <img src={bancardimg2} className="img-fluid"/>
                            <figcaption>
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </figcaption>
                            <div className="card-body">
                                <p className="card-one .card-subtitle">Business Services</p>
                                <h6>Financial Sustainability</h6>                          
                            </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <img src={bancardimg3} className="img-fluid"/>
                            <figcaption>
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </figcaption>
                            <div className="card-body">
                                <p className="card-one .card-subtitle">Business Services</p>
                                <h6>Financial Sustainability</h6>                          
                            </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3">
                            hii
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3">
                            hii
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3">
                            hii
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3">
                            hii
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Banner;
