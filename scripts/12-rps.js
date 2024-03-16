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
    update_score();
    update_result();
    update_overview(human_move, computer);
}
document.querySelector('.js-rock-eventlist-button')
.addEventListener('click',() => {
    check_result('rock',check_computer())
})

document.querySelector('.js-paper-eventlist-button')
.addEventListener('click',() => {
    check_result('paper',check_computer())
})

document.querySelector('.js-scissors-eventlist-button')
.addEventListener('click',() => {
    check_result('scissors',check_computer())
})
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

document.body.addEventListener('keydown', (event)=>{
    if (event.key === 'r'){
        check_result('rock',check_computer());
    }
    else if (event.key === 'p'){
        check_result('paper',check_computer());
    }
    else if(event.key === 's'){
        check_result('scissors',check_computer());
    }
})
document.querySelector('.js-eventlist-reset')
.addEventListener('click',() =>{
    reset_score()
})
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

document.querySelector('.js-eventlist-autoplay')
.addEventListener('click', ()=>{
    auto_play_button()
})
let is_auto_playing = false;
let intervalid;
function auto_play_button(){
    if (!is_auto_playing){
        intervalid = setInterval(()=>{
            const human_move_options = ['rock', 'paper', 'scissors'];
            const random_index = Math.floor(Math.random() * human_move_options.length);
            const human_move = human_move_options[random_index];
            const computer = check_computer();
            check_result(human_move, computer);
           },1000);
           console.log(intervalid)
           is_auto_playing = true;
    }
    else{
        clearInterval(intervalid);
        is_auto_playing = false;
    }
}