class GithubInteractor {
  constructor(token) {
    this.token = token;
  }
}

function createIssue(repo, assignee, title, body ) {
  var url = "https://api.github.com/repos/" + assignee + "/" + repo + "/" + "issues";
  var myData = {title: title, body: body};
  //console.log(myData);
  

  $.ajax({
    type: "POST",
    data: JSON.stringify(myData),
    url: url,
    contentType: "application/json"
  })

  //.done(handleResponse(response))
  .done(function(res) {
    handleResponse(res);
  })
  //.fail(handleError(xhr, textStatus, errorThrown));
  .fail(function(xhr, textStatus, errorThrown){
    handleError(xhr, textStatus, errorThrown);
  })
}

function handleResponse(response){
  console.log('response', response);
}

function handleError(xhr, status, error) {
  console.log(xhr.responseText);
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


