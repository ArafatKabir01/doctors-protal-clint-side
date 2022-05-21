import React from 'react';
const Service = ({img , cartTitle, cartDetails}) => {
    return (
            <div class="col service-box ">
                <div class="card h-100 service-cart border-0">
                <img src={img} />
                <div class="card-body">
                    <h5 class="card-title">{cartTitle}</h5>
                    <p class="card-text">{cartDetails}</p>
                </div>
                </div>
            </div>
        

    );
};

export default Service;