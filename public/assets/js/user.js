/** user.js 
 *  client-side JavaScript that will run only on '/user' routes
 */

// alert('User.js!');
$(document).ready(function(){
  var regex = new RegExp(/^\/user/, 'gi');
  var proceed = regex.test(window.location.pathname);
  if (!proceed) {
    console.log("this js file won't run for this url pathname");
    return;
  } 

  // 0) testing request
  var url_origin = window.location.origin;
  var url = url_origin + '/user/test';
  console.log("making a request to: " + url);
  $.ajax({
    url: url,
    data: { url_origin: url_origin },
    method: 'POST',
  })
  .then(function(results) {
    console.log(results);
  })

  // 1) Get the user's info
  // var user_id = 6;
  // var url = window.location.origin + '/api/users/' + user_id;
  // console.log(url);
  // $.get(url, function(data){
  //   console.log(data);
  // })

  // 2) get user's categories they're following

  // 3) Get the quizess a user's taken

  // 4) List quizess a user's made!

});