
// $(document).ready(function() {
//   $("form").submit(function(event) {
      

//       var assignee = $('#repoOwner').val();
//       var repo = $('#repoName').val();
//       var title = $('#title').val();
//       var body = $('#body').val();
//       console.log(typeof(GithubInteractor.testMe()));//(repo);
//       event.preventDefault();
//   });

// });

class GithubInteractor {
  constructor(token) {
    this.token = token;
  }


//   createIssue(repo, assignee, title, body ) {
//     var url = "/repos/" + assignee + "/" + repo + "/" + "issues";
//     var myData = {title: title, body: body};
    

//     $.ajax({
//       type: "POST",
//       data: JSON.stringify(myData),
//       url: url,
//       contentType: "application/json"
//     })

//     .done(handleResponse(response))
//     .fail(handleError(xhr, textStatus, errorThrown));
//   }

  // handleResponse: function(response){
  //   console.log('response', response);
  // }

  // handleError: function(xhr, status, error) {
  //   console.log(xhr.responseText);
  // }

  testMe(repo) {
    console.log(repo);
    event.preventDefault();
  }  
} 

$(document).ready(function() {
  $("form").submit(function(event) {
      var testy = new GithubInteractor("43344");

      var assignee = $('#repoOwner').val();
      var repo = $('#repoName').val();
      var title = $('#title').val();
      var body = $('#body').val();
      console.log(typeof(testy));//(repo);
      event.preventDefault();
  });

});


