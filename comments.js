$(document).ready(function(){
  $("#postComment").click(function(){
      var myobj = {Name:$("#name").val(),Comment:$("#comment").val(),Picture:$("#picture").val()};
      jobj = JSON.stringify(myobj);
      $("#json").text(jobj);
	var url = "comment";
	$.ajax({
	url:url,
	type: "POST",
	data: jobj,
	contentType: "application/json; charset=utf-8",
	success: function(data,textStatus) {
    $("#done").html(textStatus);
}
})
  });

 $("#getComments").click(function() {
    $.getJSON('comment', function(data) {
      console.log(data);
 var everything;    
 for(var comment in data) {
        com = data[comment];
        everything += "<p><input type='checkbox' id='checkBox'>"  + com.Name + " --Price: " + com.Comment + " Picture: <img src='" +com.Picture +"' width='100' alt='broken img ' style='vertical-align: middle' >" + "</p>";
      }
      $("#comments").html(everything);
    })
  });

 $("#getCart").click(function() {
    $.getJSON('comment', function(data) {
      console.log(data);
	var checkedBoxes = document.querySelectorAll('input[name=checkBox]:checked');
	console.log(checkedBoxes);
	var everything = checkedBoxes;
      $("#comments").html(everything);
    })
  });

 $("#deleteComments").click(function() {
    console.log("delete Function called");
	var url = "comment";   
 	$.ajax({
     	 url:url,
    	 type: "DELETE",
	 success: function(data,textStatus) {
		$("#done").html(textStatus);
}
})
});
})
