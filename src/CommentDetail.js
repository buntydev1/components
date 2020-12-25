import React from 'react';



const CommentDetail = props => {
    return (
        <div className="comments">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatar} />
            </a>
            <div className="contents">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metdata">
                    <span className="date">{props.date}</span>
                </div>
                <div className="text">{props.comment}</div>
            </div>
        </div>
    );
};

export default CommentDetail;