const requestURL = process.env.REACT_APP_API_URL + "/requests";

async function data() {
  var returnArray = await fetch(requestURL)
    .then((data) => data.json())
    .then((returnData) => {
      var returnJson = []; // Array of requests that have not yet filled its slot

      returnData.forEach((element) => {
        if (element["examinatorApproved"] !== null) return;
        var newEle = element;
        newEle.startDate = new Date(element.startDate);
        newEle.endDate = new Date(element.endDate);
        returnJson.push(newEle);
      });

      return returnJson;
    });
  return returnArray;
}

export default data;
