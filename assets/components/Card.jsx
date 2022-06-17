import React from 'react';

function Card(props){

    return (

        <div className="d-flex flex-column card-item-body">
            <time className="d-flex justify-content-end">{props.data.dateOfEvent}</time>
                <div className="cad-item-body-container">
                    <h4 className="text-start">{props.data.title}</h4>
                    <h5 className="text-start">{props.data.city}</h5>
                    <p className="text-start lh-1 p-3">{props.data.description}</p>
                </div>
        </div>
        
    
    )
}
export default Card;