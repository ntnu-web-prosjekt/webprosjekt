import "./generalinfo.scss";

import React from "react";

function GeneralInfo(props) {
    const startDate = `${props.request.startDate}`;
    const endDate = `${props.request.endDate}`;

    return (
        <div className="general">
            <div className="gen-info">
                <span className="gen-info__title">Subject</span>
                <span className="gen-info__desc">{props.request.subjectName}</span>
                <div className="gen-info__dates">
                    <div>
                        <span className="gen-info__title">Exam Date</span>
                        <span className="gen-info__desc">{startDate.split("T")[0].split("-")[2] + "." + startDate.split("T")[0].split("-")[1] + "." + startDate.split("T")[0].split("-")[0]}</span>
                    </div>
                    <div>
                        <span className="gen-info__title">Grading Deadline</span>
                        <span className="gen-info__desc">{endDate.split("T")[0].split("-")[2] + "." + endDate.split("T")[0].split("-")[1] + "." + endDate.split("T")[0].split("-")[0]}</span>
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