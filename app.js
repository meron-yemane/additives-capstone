var eAdditivesEndPoint = "https://vx-e-additives.p.mashape.com/additives/";
var ep = "http://e-additives.vexelon.net/api/additives/search/"; // url from list of url's in console
var ep2 = "http://e-additives.vexelon.net/api"; //api endpoint for the eadditives website from progammableweb.com

var displaySearchData = function(data) {
  console.log("aklsdjf")
  var results = "";
  console.log(data);
};

var jsonCallback = function(json) {
  console.log("hi");
  console.log(json);
};

var getDatafromAPI = function(searchTerm, callback) {
  $.ajax({
    dataType: "jsonp",
    url: ep2,
    //jsonpCallback: jsonCallback,
    data: {
      q: searchTerm
    },
    beforeSend: function(req) {
      req.setRequestHeader("User-Agent", "abc");
      req.setRequestHeader("Access-Control-Allow-Origin", "*");
      req.setRequestHeader("X-Mashape-Key", "prQtUj9aZMmshk74S0jaHQgyiYyTp1QOtU6jsnke0pjORjGkr2"); // produciton key obtained from mashape.com(former string was the testing key)
      req.setRequestHeader("Accept", "application/json");
      req.setRequestHeader("X-Authorization", "EAD-TOKENS apiKey=prQtUj9aZMmshk74S0jaHQgyiYyTp1QOtU6jsnke0pjORjGkr2");  // produciton key obtained from mashape.com(former string was the testing key)
    },
    success: function(data) {
      console.log(data);
    }
  })
};


$("#js-answer").submit(function(event) {
  event.preventDefault();
  var searchTerm = $(this).find(".js-AdditivesSearch").val();
  console.log("hwllo");
  getDatafromAPI(searchTerm, jsonCallback);
}); 

