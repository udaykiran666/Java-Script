// Initialize score variable
let score = JSON.parse(localStorage.getItem("score")) ?? {
    wins: 0,
    ties: 0,
    loses: 0
    };
let result = '';
update_score();

function check_result(human_move, computer){
    if (human_move === 'scissors'){
        if (computer === 'rock'){
            result = 'You Lose';
        }
        else if (computer === 'paper'){
            result = 'You Win';
        }
        else if (computer === 'scissors'){
            result = 'Its Tie';
        }
    }
    else if (human_move === 'paper'){
        if (computer === 'rock'){
            result = 'You Win';
        }
        else if (computer === 'paper'){
            result = 'Its Tie';
        }
        else if (computer === 'scissors'){
            result = 'You Lose';
        }
    }
    else if (human_move === 'rock'){
        if (computer === 'rock'){
            result = 'Its Tie';
        }
        else if (computer === 'paper'){
            result = 'You Lose';
        }
        else if (computer === 'scissors'){
            result = 'You Win';
        }
    }

    if (result === 'You Win'){
        score.wins += 1;
    }
    else if (result === 'You Lose'){
        score.loses += 1;
    }
    else if (result === 'Its Tie'){
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));
    update_score()
    update_result()
    update_overview(human_move, computer)
    alert(`You have picked ${human_move}, computer has picked ${computer}. ${result}
    Wins: ${score.wins}, Ties: ${score.ties}, Loses: ${score.loses}`);
}

function check_computer(){
    const randomnumber = Math.random();
    let computer = '';
    if (randomnumber >= 0 && randomnumber < 1/3){
        computer = 'rock';
    }
    else if (randomnumber >= 1/3 && randomnumber < 2/3){
        computer = 'paper';
    }
    else if (randomnumber >= 2/3 && randomnumber < 1){
        computer = 'scissors';
    }
    return computer;
}

function reset_score(){
    score = {
        wins: 0,
        ties: 0,
        loses: 0
    };
    localStorage.setItem('score', JSON.stringify(score));
    update_score()
    update_result_for_reset()
    alert(`Wins: ${score.wins}, Ties: ${score.ties}, Loses: ${score.loses}`);
}

function update_score(){
    document.querySelector('.display-score').innerHTML = `Wins: ${score.wins}, Ties: ${score.ties}, Loses: ${score.loses}`
}

function update_result(){
    document.querySelector('.display-result').innerHTML = `${result}`;
}

function update_result_for_reset(){
    document.querySelector('.display-result').innerHTML = ``
}

function update_overview(human_move, computer){
    document.querySelector('.display-human-computer-overview').innerHTML = `You <img src = "pictures/${human_move}-emoji.png" class="icon"> 
    Computer <img src="pictures/${computer}-emoji.png" class="icon">`}
