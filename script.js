var myGame = new WizardOrpheus('', `You're a teacher and you have to handle cases where students don't turn in their assignments on time. Sometimes it can be due to emergiences, but it can also be laziness. Therefore, take you decisions wisely and don't get convinced too easily!

`)

myGame.createUserAction({
  
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
  
})

document.getElementById('input').addEventListener('keyup', function(e) {
  if (e.code == 'Enter') { // if the user presses enter
    let userInput = document.getElementById('input').value
    
    myGame.message(userInput)

    document.getElementById('conversation').innerHTML += '<p>' + userInput + '</p>'

    document.getElementById('input').value = ''
  }
})

myGame.createUserAction({
  
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
  
})


myGame.variable('score', 'Current score. Changes (positive and negatively) as the user does things.', 0)

myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
 
document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'

document.getElementById('score').innerHTML = data.currentVariables.score.value
  
})

