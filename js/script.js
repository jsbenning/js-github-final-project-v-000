class GithubInteractor {
  constructor(token) {
    this.token = token;
  }
}

function createIssue(repo, assignee, title, body ) {
  var url = "https://api.github.com/repos/" + assignee + "/" + repo + "/" + "issues";
  var myData = {title: title, body: body};
  //console.log(myData);
  var myLink = "<a href=" + url + ">" + title + "</a>";
  

  $.ajax({
    type: "POST",
    data: JSON.stringify(myData),
    url: url,
    contentType: "application/json"
  })

  //.done(handleResponse(response))
  .done(function(responseText) {
    handleResponse(responseText);
  })
  //.fail(handleError(xhr, textStatus, errorThrown));
  .fail(function(xhr, textStatus, errorThrown){
    handleError(xhr, textStatus, errorThrown);
  })
}

function handleResponse(text){
  $('#issue').append(text.title);//('response', response);
}

function handleError(xhr, status, error) {
  console.log("Post " + status + ": " + error);
}
 


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var assignee = $('#repoOwner').val();
    var repo = $('#repoName').val();
    var title = $('#title').val();
    var body = $('#body').val();

    createIssue(repo, assignee, title, body);
    
  });

});


