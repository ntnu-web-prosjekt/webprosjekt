import "./keyinfo.scss";

function KeyInfo() {
    return (
        <div className="keyinfo">
            <h2>Key information</h2>
            <ul className="keyinfo__list">
                <li className="keyinfo__list__el">
                    <img class="keyinfo__list__el__icon" src={process.env.PUBLIC_URL + 'img/request-icons/geo-alt-fill.svg'} /> 
                    Location: <span className="keyinfo__list__el__sub">UIO</span>
                </li>
                <li className="keyinfo__list__el">
                    <img class="keyinfo__list__el__icon" src={process.env.PUBLIC_URL + 'img/request-icons/translate.svg'} />
                    Language: <span className="keyinfo__list__el__sub">English</span>
                </li>
                <li className="keyinfo__list__el">
                    <img class="keyinfo__list__el__icon" src={process.env.PUBLIC_URL + 'img/request-icons/bank2.svg'} />
                    Subject level: <span className="keyinfo__list__el__sub">Bachelor</span>
                </li>
                <li className="keyinfo__list__el">
                    <img class="keyinfo__list__el__icon" src={process.env.PUBLIC_URL + 'img/request-icons/mortarboard-fill.svg'} />
                    Required level of examinator: <span className="keyinfo__list__el__sub">Master</span>
                </li>
                <li className="keyinfo__list__el">
                    <img class="keyinfo__list__el__icon" src={process.env.PUBLIC_URL + 'img/request-icons/link.svg'} />
                    URL: <span className="keyinfo__list__el__sub"><a href="#" target="_blank">www.uio.no/studier/program/advanced-css</a></span>
                </li>
            </ul>
        </div>
    );
}

export default KeyInfo;