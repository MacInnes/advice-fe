$(document).ready(function(){

  $('#subject-submit').click(function(){
    var subject = $('#subject').val();
    fetch(`https://api.adviceslip.com/advice/search/${subject}`)
      .then(response => response.json())
      .then(json => {
        var advice = json.slips[Math.floor(Math.random() * json.slips.length)]
        console.log(advice.advice);
        $('#subject-results').text(`${advice.advice}`);
      })
  })



})
