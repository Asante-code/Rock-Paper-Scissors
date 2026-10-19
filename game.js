let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('Scissors');

let scoring = document.getElementById("value");
let score = 0;

let game = ["rock","paper", "scissors"]


// Rock
rock.addEventListener( 'click', ()=>{
    let randomIndx = Math.floor(Math.random()*game.length)
    console.log(randomIndx)
if (game[randomIndx]== "rock"){
    
    alert("It is a tie");


}else if(game[randomIndx]== "paper"){
    alert("You Loose, Try Again");
    
}else if(game[randomIndx]== "scissors"){
    alert("You Win");
    score = score+1;
    scoring.innerHTML = score;
    

}
})


// Paper
paper.addEventListener( 'click', ()=>{
    let randomIndx = Math.floor(Math.random()*game.length)

    console.log(randomIndx)
    if (game[randomIndx]== "paper"){
        alert("It is a tie");

    }else if(game[randomIndx]== "scissors"){
        alert("You Loose, Try Again");
        
    }else if(game[randomIndx]== "rock"){
        alert("You Win");
        score = score+1;
        scoring.innerHTML = score;
    }

    })

// Scissors
scissors.addEventListener( 'click', ()=>{
    let randomIndx = Math.floor(Math.random()*game.length)
    console.log(randomIndx)
    if (game[randomIndx]== "scissors"){
        alert("It is a tie");

    }else if(game[randomIndx]== "rock"){
        alert("You Loose, Try Again");
        
    }else if(game[randomIndx]== "paper"){
        alert("You Win");
        score = score+1;
        scoring.innerHTML = score;
    }

    })





