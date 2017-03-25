class GithubInteractor {
  constructor(token) {
    this.token = token;
  }

  // $("form").on("submit", function(event) {
  //   event.preventDefault();

  //   var assignee = $('#repoOwner').val();
  //   var repo = $('#repoName').val();
  //   var title = $('#title').val();
  //   var body = $('#body').val();
  
  //   createIssue(repo, assignee, title, body);
  // });




  createIssue(repo, assignee, title, body ) {
    var url = "/repos/" + assignee + "/" + repo + "/" + "issues";
    var myData = {title: title, body: body};
    

    $.ajax({
      type: "POST",
      data: JSON.stringify(myData),
      url: url,
      contentType: "application/json"
    })

    .done(handleResponse(response));
    .fail(handleError(xhr, textStatus, errorThrown);
  }

  // handleResponse: function(response){
  //   console.log('response', response);
  // }

  // handleError: function(xhr, status, error) {
  //   console.log(xhr.responseText);
  // }

  
} 


