var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";
var xhr = new XMLHttpRequest();
xhr.open('GET', openUrl, true);
xhr.send();

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    var dataset = JSON.parse(this.responseText);
    addNewData(dataset);
  }
};

function addNewData(dataset) {
  var myTable = document.getElementById("csie");

  dataset.forEach(function (data) {
    var row = myTable.insertRow(-1);

    var nameCell = row.insertCell(0);
    var locationCell = row.insertCell(1);
    var priceCell = row.insertCell(2);

    nameCell.innerHTML = data.title || " ";
    locationCell.innerHTML = data.showInfo[0]?.location || " ";
    priceCell.innerHTML = data.showInfo[0]?.price || " ";
  });
}

function delOldData() {
  var myTable = document.getElementById("csie");
  while (myTable.rows.length > 1) {
    myTable.deleteRow(1);
  }
}