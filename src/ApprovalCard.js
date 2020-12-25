import React from 'react';
// import logo from './logo192.png';
import './ApprovalCard.css';
const ApprovalCard = (props) => {
         return (
            <div className="cards">
            <div class="ui cards" >
                <div class="card">
                    <div class="content">
                        <img class="right floated mini ui image" src={props.avatar} alt="abd" />
                        <div class="header">
                            {props.author}
                        </div>
                        <div class="meta">
                            {props.date}
                        </div>
                        <div class="description">
                            {props.comment}
                        </div>
                    </div>
                    <div class="extra content">
                        <div class="ui two buttons">
                            <div class="ui basic green button">Approve</div>
                            <div class="ui basic red button">Decline</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};
export default ApprovalCard;

