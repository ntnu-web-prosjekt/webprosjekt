import "./keyinfo.scss";

function KeyInfo(props) {
    return (
        <div className="keyinfo">
            <h2>Key information</h2>
            <ul className="keyinfo__list">
                <li className="keyinfo__list__el">
                    <img className="keyinfo__list__el__icon" src={process.env.PUBLIC_URL + '../img/request-icons/geo-alt-fill.svg'} alt="icon"/> 
                    Location: <span className="keyinfo__list__el__sub">{props.request.location}</span>
                </li>
                <li className="keyinfo__list__el">
                    <img class="keyinfo__list__el__icon" src={process.env.PUBLIC_URL + '../img/request-icons/translate.svg'} alt="icon"/>
                    Language: <span className="keyinfo__list__el__sub">English</span>
                </li>
                <li className="keyinfo__list__el">
                    <img class="keyinfo__list__el__icon" src={process.env.PUBLIC_URL + '../img/request-icons/bank2.svg'} alt="icon"/>
                    Subject level: <span className="keyinfo__list__el__sub">{props.request.subjectLevel}</span>
                </li>
                <li className="keyinfo__list__el">
                    <img class="keyinfo__list__el__icon" src={process.env.PUBLIC_URL + '../img/request-icons/mortarboard-fill.svg'} alt="icon"/>
                    Required level of examinator: <span className="keyinfo__list__el__sub">{props.request.examinatorLevel}</span>
                </li>
                <li className="keyinfo__list__el">
                    <img class="keyinfo__list__el__icon" src={process.env.PUBLIC_URL + '../img/request-icons/link.svg'} alt="icon"/>
                    URL: <span className="keyinfo__list__el__sub"><a href={`${props.request.subjectUrl}`} target="_blank" rel="noreferrer">{props.request.url}</a></span>
                </li>
            </ul>
        </div>
    );
}

export default KeyInfo;