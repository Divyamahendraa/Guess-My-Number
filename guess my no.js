let secretNumber=Math.trunc(Math.random()*20+1);
    console.log(secretNumber);
    let score=20;
    let highscore=0;
    document.getElementById('checkbtn').addEventListener('click',()=>{
        const guessedNo=Number(document.getElementById('guess').value);
        console.log(typeof guessedNo);

        if(!guessedNo){
            document.querySelector(".message").textContent='No number...';
        }
        else if(guessedNo===secretNumber){
            document.querySelector('.message').textContent='correct number';
            document.querySelector('.number').textContent=secretNumber;
            document.getElementById('guess').disabled=true;
            document.querySelector('body').style.backgroundColor='green';

            if(score>highscore){
                highscore=score;
                document.querySelector('.highscore').textContent=highscore;
            }
            
        }
        else if(guessedNo>secretNumber){
            if(score>1){
                document.querySelector('.message').textContent='Too High';
                score=score-1;
                document.querySelector('.score').textContent=score;
            }
             else{
                document.querySelector('.message').textContent='You Lost The Game';
                document.querySelector('.score').textContent=0;
             }
            
        }
        else if(guessedNo<secretNumber){
            if(score>1){
                document.querySelector('.message').textContent='Too Low';
                score=score-1;
                document.querySelector('.score').textContent=score;

            }
            else{
                document.querySelector('.message').textContent='You Lost The Game';
                document.querySelector('.score').textContent=0;

            }
        }
    })
     
     document.querySelector('.again').addEventListener('click',()=>{
        secretNumber = Math.trunc(Math.random() * 20 + 1);
        console.log(secretNumber);
        
        score=20;
        document.getElementById('guess').disabled=false;
        document.querySelector('.message').textContent='start guessing...';
        document.querySelector('.score').textContent=score;
        document.querySelector('.number').textContent="?";
        document.getElementById('guess').value="";
        document.querySelector('body').style.backgroundColor='black';


     });
     