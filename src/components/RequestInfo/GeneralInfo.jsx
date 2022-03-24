import "./generalinfo.scss";

function GeneralInfo() {
    return (
        <div className="general">
            <div className="gen-info">
                <span className="gen-info__title">Subject</span>
                <span className="gen-info__desc">Advanced CSS</span>
                <div className="gen-info__dates">
                    <div>
                        <span className="gen-info__title">Starts</span>
                        <span className="gen-info__desc">22.04.22</span>
                    </div>
                    <div>
                        <span className="gen-info__title">Ends</span>
                        <span className="gen-info__desc">22.05.22</span>
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
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>

            <div className="gen-desc">
                <h2>Descripton</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ipsum a, natus distinctio fugiat quas dolor sit officia perferendis totam. Eius ad libero corrupti omnis voluptatibus voluptatum laudantium velit necessitatibus!</p>
            </div>
        </div>
    );
}

export default GeneralInfo;