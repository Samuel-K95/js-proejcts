let score = JSON.parse(localStorage.getItem('score')) || 
                {
                    win :0,
                    loses : 0,
                    ties : 0,
                };
            
            resultUpdate();

            function playGame(playermove){
                let result = '';
                let image;
                if (playermove === 'Scissors'){
                    computerMove = pickCompmove();
                    console.log(computerMove);
                    image = document.querySelector('.moves').innerHTML =  '<img src="images/scissors-emoji.png" class = "move-img">'

                    if(computerMove == 'Rock')
                        result = 'Computer wins';
                    else if (computerMove == 'Paper')
                        result = 'You win';
                    else if(computerMove == 'Scissors')
                        result = 'Tie';

                    console.log('Your choice: Scissors');
                    console.log(`Computer Choice: ${computerMove}`);
                }
                else if (playermove === 'Paper'){
                    computerMove = pickCompmove();
                    console.log(computerMove);

                    image = document.querySelector('.moves').innerHTML='<img src="images/paper-emoji.png" class = "move-img">'

                    if(computerMove == 'Rock')
                        result = 'You win';
                    else if (computerMove == 'Paper')
                        result = 'Tie';
                    else if(computerMove == 'Scissors')
                        result = 'Computer wins';
                    
                    console.log('Your Choice: Paper');
                    console.log(`Computer Choice: ${computerMove}`);
                } 
                else if (playermove === 'Rock'){
                    image = document.querySelector('.moves').       innerHTML='<img src="images/rock-emoji.png" class = "move-img">'
                    computerMove = pickCompmove();
                    console.log(computerMove);

                    if(computerMove == 'Rock')
                        result = 'Tie';
                    else if (computerMove == 'Paper')
                        result = 'Computer wins';
                    else if(computerMove == 'Scissors')
                        result = 'You win';

                    console.log('Your choice: Rock');
                    console.log(`Computer Choice: ${computerMove}`);
                }

                if (result === "You win")
                    score.win += 1;
                else if (result === 'Computer wins')
                    score.loses += 1;
                else
                    score.ties += 1;

                let compim;
                if(computerMove == 'Rock')
                    compim = document.querySelector('.moves').       innerHTML='<img src="images/rock-emoji.png" class = "move-img">'
                else if (computerMove == 'Paper')
                    compim = document.querySelector('.moves').innerHTML='<img src="images/paper-emoji.png" class = "move-img">'
                else if(computerMove == 'Scissors')
                    compim = document.querySelector('.moves').innerHTML =  '<img src="images/scissors-emoji.png" class = "move-img">'
                document.querySelector('.status')
                    .innerHTML = result;
                document.querySelector('.moves')
                    .innerHTML = `You ${image}  ${compim} Computer`;
                localStorage.setItem('score', JSON.stringify(score));
                
                resultUpdate();
                
            }

            function resultUpdate(){
                document.querySelector('.js-score')
                    .innerHTML = `Wins: ${score.win} Ties: ${score.ties} Loses: ${score.loses}`;
            }
            function pickCompmove(){
                let computerMove = '';
                randomNumber = Math.random();
                console.log(randomNumber) 
                if (randomNumber >= 0 && randomNumber < 1/3){
                    computerMove = 'Rock';
                }
                else if (randomNumber >= 1/3 && randomNumber  < 2/3){
                    computerMove = 'Paper'; 
                }
                else{
                    computerMove = 'Scissors';
                }

                return computerMove;
            }