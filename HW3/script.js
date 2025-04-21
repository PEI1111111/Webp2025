var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";
var allData = [];
var currentPage = 1;
var itemsPerPage = 10;
var filteredData = [];

var xhr = new XMLHttpRequest();
xhr.open('GET', openUrl, true);
xhr.send();

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    allData = JSON.parse(this.responseText);
    filteredData = allData;  // 預設全部資料
    renderTable();
  }
};

function renderTable() {
  var myTable = document.getElementById("csie");
  while (myTable.rows.length > 1) {
    myTable.deleteRow(1);
  }

  var start = (currentPage - 1) * itemsPerPage;
  var end = start + itemsPerPage;
  var pageData = filteredData.slice(start, end);

  pageData.forEach(function (data) {
    var row = myTable.insertRow(-1);
    row.insertCell(0).innerHTML = data.title || "無資料";
    row.insertCell(1).innerHTML = data.showInfo[0]?.location || "無資料";
    row.insertCell(2).innerHTML = data.showInfo[0]?.price || "無資料";
  });

  var totalPages = Math.ceil(filteredData.length / itemsPerPage);
  document.getElementById("pageInfo").innerText = `第 ${currentPage} 頁 / 共 ${totalPages} 頁`;
}

function nextPage() {
  var totalPages = Math.ceil(filteredData.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderTable();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderTable();
  }
}

function searchData() {
  var keyword = document.getElementById("searchInput").value.trim();
  if (keyword === "") {
    filteredData = allData;
  } else {
    filteredData = allData.filter(function (item) {
      return item.title.includes(keyword);
    });
  }
  currentPage = 1;
  renderTable();
}