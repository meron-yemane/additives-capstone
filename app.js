var eAdditivesEndPoint = "https://vx-e-additives.p.mashape.com/additives/search";
var ep = "http://e-additives.vexelon.net/api/additives/search"; // url from list of url's in console
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
    dataType: "json",
    url: eAdditivesEndPoint,
    //jsonpCallback: jsonCallback,
    data: {
      q: searchTerm
    },
    headers: {"X-Mashape-Key": "kfb2kuNb7GmshV5WqaO2PFeGdYzOp1klnZCjsnvbij8k2iko8Y",
              "Content-Type": "application/json"},
    success: function(data) {
      console.log(data);
    }
  })
};


$("#js-answer").submit(function(event) {
  event.preventDefault();
  var searchTerm = $(this).find(".js-AdditivesSearch").val();
  getDatafromAPI(searchTerm, jsonCallback);
}); 

