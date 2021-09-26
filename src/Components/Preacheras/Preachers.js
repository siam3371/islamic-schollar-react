import React from 'react';
import './Preachers.css'
 const Preachers = (props) => {
    //  distructering in props.preacher
    const {name, img, age, placeOfBirth, nationality, facebookFollowers} =props.preacher
     return (
        <div className="col-lg-4 fw-bold">
        <div className="card mb-4 color" style={{width: "20rem"}}>
            <img src={img} className="card-img-top rounded-circle preacher-img" alt="..."/>
            <div className="card-body">
                <p className="info-text"><span className="info">Name</span> : {name}</p>
                <p className="info-text"><span className="info">Age</span> : {age}</p>
                <p className="info-text"><span className="info">Place Of Birth</span> : {placeOfBirth}</p> 
                <p className="info-text" >Nationality:{nationality}</p> 
                <p className="info-text" >Facebook Followers : {facebookFollowers}</p>
                <p className="text-center social-link-text"> <i class="fab fa-facebook"></i> Join With Facebook</p>
                <p className="text-center social-link-text "> <i class="fab fa-youtube"></i>  Join With Youtube</p>
                {/* button start */}
                <button onClick={() =>props.handleCart( props.preacher) }  
                className="regular-btn"> <i class="fas fa-shopping-cart"></i>  Add To Cart</button>
                {/* button end */}
                </div>
                </div>
                </div>
    );
};

export default Preachers;