$(document).ready(function(){

  const magicChoices = [
    'It is certain.',
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
  ]

  $('#subject-submit').click(() => getSubject());

  $('#subject').keypress((e) => {
    if (e.which == 13) {
      getSubject();
    }
  })

  $('#magic8ball-image').click(function(){
    var result = get8Ball();
    $('#magic8ball-response').text(`${result}`)
  });

  function get8Ball(){
    return magicChoices[Math.floor(Math.random() * magicChoices.length)]
  }

  function getSubject(){
    var subject = $('#subject').val();
    fetch(`https://api.adviceslip.com/advice/search/${subject}`)
      .then(response => response.json())
      .then(json => {
        if (json.slips){
          var advice = json.slips[Math.floor(Math.random() * json.slips.length)]
          $('#subject-results').text(`${advice.advice}`);
        } else {
          $('#subject-results').text("Unable to find any advice on that subject, please try again.")
        }
      }
    )
  }


})
