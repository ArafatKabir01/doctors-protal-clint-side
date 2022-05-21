import React from 'react';
import treatmentImg from '../../img&icon/images/treatment.png'

const DentalCare = () => {
    return (
        <div><br/>
        <br/><br/><br/><br/><br/><br/>
            <div className="card mb-3 container border-0">
                    <div className="row g-0 align-content-center justify-content-center">
                        <div className="col-md-4">
                        <img src={treatmentImg} style={{width:"458px" , height:"576px" ,borderRadius:'8px'}} className="img-fluid rounded-start ps-4" alt="..."/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body mt-5 pt-5" style={{width:"497px" , height:"347px" ,marginLeft:"102px"}}>
                            <h5 className="card-title fs-1 fw-bold ">Exceptional Dental Care, on Your Terms</h5>
                            <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button className='banner-btn mt-5' >GET STARTED</button>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;