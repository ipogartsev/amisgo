import React from 'react';

function CommentCard(props){

    return (

        <div className="d-flex flex-column card-item-body">
                <div className="card-item-body-container">
                    <h4 className="text-start">{props.data.name}</h4>
                    <p className="text-start chat-conversation-text-wrapper d-flex lh-1 p-3">{props.data.text}</p>
                    {/* <p className="text-start lh-1 p-3">{props.data[date]}</p> */}
                    
                </div>
        </div>
        
    
    )
}
export default CommentCard;