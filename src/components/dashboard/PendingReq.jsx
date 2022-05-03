import "./UpcomingPendingReq.scss";

function PendingReq(props) {
  return (
    <div className="examinaton">
      <h2 className="examinaton__heading">Your pending requests</h2>
      <table>
        <tbody>
          {props.data
            ? props.data.map((item, index) => {
                return (
                  <tr key={item.subjectName + index}>
                    <th>{item.startDate.split("T")[0].split("-")[2] + "." + item.startDate.split("T")[0].split("-")[1] + "." + item.startDate.split("T")[0].split("-")[0]}</th>
                    <td>{item.subjectName}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
}

export default PendingReq;
