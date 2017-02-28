var eAdditivesEndPoint = "https://vx-e-additives.p.mashape.com/additives?callback";

var displaySearchData = function(data) {
  console.log("aklsdjf")
  var results = "";
  console.log(data);
};

var jsonCallback = function(json) {
  console.log("hi");
  console.log(json);
};

var getDatafromAPI = function (searchTerm, callback) {
  $.ajax({
    dataType: "jsonp",
    url: eAdditivesEndPoint,
    //jsonpCallback: "jsonCallback",
    data: {
      q: searchTerm
    },
    beforeSend: function(req) {
      req.setRequestHeader("User-Agent", "abc");
      req.setRequestHeader("Access-Control-Allow-Origin", "*");
      req.setRequestHeader("X-Mashape-Key", "kfb2kuNb7GmshV5WqaO2PFeGdYzOp1klnZCjsnvbij8k2iko8Y");
      req.setRequestHeader("Accept", "application/json");
      req.setRequestHeader("X-Authorization", "EAD-TOKENS apiKey=kfb2kuNb7GmshV5WqaO2PFeGdYzOp1klnZCjsnvbij8k2iko8Y");
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

