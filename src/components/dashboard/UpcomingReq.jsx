import "./UpcomingPendingReq.scss";

function UpcomingReq(props) {

  // Getting todays date in the format year/month/day (ex. 2022/04/21)
  const todaysDate = new Date().toISOString();

  return (
    <div className="examinaton">
      <h2 className="examinaton__heading">Your upcoming examinatons</h2>
      <table>
        <tbody>
          {props.data
            ? props.data.map((item, index) => {
              
              // If todays date is "smaller" than the examination startDate, the exam will be shown
              if(todaysDate <= item.startDate) {
                return (
                  <tr key={item.subjectName + index}>
                    <th>{item.startDate.split("T")[0].split("-")[2] + "." + item.startDate.split("T")[0].split("-")[1] + "." + item.startDate.split("T")[0].split("-")[0]}</th>
                    <td>{item.subjectName}</td>
                  </tr>
                );
              }
              })
            : null}
        </tbody>
      </table>
    </div>
  );
}

export default UpcomingReq;
