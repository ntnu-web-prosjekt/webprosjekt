import "./UpcomingPendingReq.scss";

function PendingReq(props) {
    return (
        <div className="examinaton">
            <h2 className="examinaton__heading">Pending examinator requests</h2>
            <table>
            <tbody>
                {props.data ? props.data.map((item, index) => {
                    return (
                        <tr key={item.subjectName + index}>
                            <th>{item.startDate.split("T")[0].replace(/-/g, "/")}</th>
                            <td>{item.subjectName}</td>
                        </tr>
                    );
                }) 
                : 
                <tr>
                    <th>Loading</th>
                    <td>...</td>
                </tr>}
            </tbody>
            </table>
        </div>
);
}

export default PendingReq;