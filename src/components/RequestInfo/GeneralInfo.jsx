import "./generalinfo.scss";

import React from "react";

function GeneralInfo(props) {
    return (
        <div className="general">
            <div className="gen-info">
                <span className="gen-info__title">Subject</span>
                <span className="gen-info__desc">{props.request.subjectName}</span>
                <div className="gen-info__dates">
                    <div>
                        <span className="gen-info__title">Starts</span>
                        <span className="gen-info__desc">{props.request.startDate}</span>
                    </div>
                    <div>
                        <span className="gen-info__title">Ends</span>
                        <span className="gen-info__desc">{props.request.endDate}</span>
                    </div>
                    <div>
                        <span className="gen-info__title">Application deadline</span>
                        <span className="gen-info__desc">01.05.22</span>
                    </div>
                </div>
            </div>
            <div className="gen-tags">
            <span className="gen-info__title">Tags</span>
             <ul className="gen-tags__list">
                 {props.request.tags != null && props.request.tags.map((tag, index) => {
                        return <li key={index} className="gen-tags__item">{tag}</li>
                    })}
                </ul>
            </div>
            <div className="gen-desc">
                <h2>Descripton</h2>
                <p>{props.request.description}</p>
            </div>
        </div>
    );
}

export default GeneralInfo;