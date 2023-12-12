let rounds = 0 ;
let score_user = 0;
let score_comp = 0; 

let cond1 = false;
let cond2 = false;
let cond3 = false;

function user_choice() {
    let user;

    if (cond1)
        user = 1;
    if (cond2)
        user = 2;
    if (cond3)
        user = 3;

    return user;
}

function comp_choice() {
    let comp = Math.floor((1 + (3) * Math.random()));
    console.log(comp);
    return comp;
}



function game_on(user, comp) {
    console.log('500');
    if (user == comp)
     {
       let alert1 =  alert("IT IS A TIE!");
        console.log("IT IS A TIE!");
        rounds +=1;
        console.log('the no of rounds played are : ' + rounds);
        score_comp = score_comp + 0;
console.log('the score of computer is : ' + score_comp);
        score_user = score_user + 0;
console.log('the score of user is : '+score_user);
    } 
    if ((user == 1 && comp == 2) || (user == 3 && comp == 2) || (user == 1 && comp == 3))
     {
        let alert2 = alert("USER WINS!");
        console.log("user wins!");
        rounds +=1;
        console.log('the no of rounds played are : ' + rounds);
        score_comp = score_comp;
console.log('the score of computer is : ' + score_comp);
        score_user = score_user + 10;
console.log('the score of user is : '+score_user);
    } 
    if ((comp == 1 && user == 2) || (comp == 3 && user == 2) || (comp == 1 && user == 3)) 
    {
        let alert3 = alert("COMPUTER WINS!");
        console.log("computer wins!");
        rounds +=1;
        console.log('the no of rounds played are : ' + rounds);
        score_comp = score_comp + 10;
console.log('the score of computer is : ' + score_comp);
        score_user = score_user;
        console.log('the score of user is : '+score_user);
    }
}



function choice1_click(click) {
    console.log('rock selected');
    cond1 = true;
    if (cond1) {
        let confirm1 = confirm('choice rock has been clicked');
        console.log('choice rock has been clicked');
    }
    let user = user_choice();
    let comp = comp_choice();
    game_on(user, comp);
}

function choice2_click(click) {
    console.log('paper selected');
    cond2 = true;
    if (cond2) {
        let confirm2 = confirm('choice paper has been clicked');
        console.log('choice paper has been clicked');
    }
    let user = user_choice();
    let comp = comp_choice();
    game_on(user, comp);
}

function choice3_click(click) {
    console.log('scissors selected');
    cond3 = true;
    if (cond3) {
        let confirm3 = confirm('choice scissors has been clicked');
        console.log('choice scissors has been clicked');
    }
    let user = user_choice();
    let comp = comp_choice();
    game_on(user, comp);
    
}

function total_rounds(){
  let alert4 = alert('THE TOTAL NO OF RUONDS PLAYED ARE : '+ rounds);
  console.log('THE TOTAL NO OF ROUNDS PLAYED BY THE USER ARE : ' +rounds);
}

function use_score(){
  let alert5 = alert('THE TOTAL SCORE OF THE USER IS :  '+score_user);
  console.log('THE TOTAL SCORE OF THE USER IS : '+ score_user);
}

function com_score(){
  let alert6 = alert('THE TOTAL SCORE OF THE COMPUTER IS :  '+score_comp);
  console.log('THE TOTAL SCORE OF THE COMPUTER IS : '+ score_comp);
}

function end(){
  let alert7 = alert('THANKS FOR PLAYING! ');
  console.log('THANKS FOR PLAYING!');

}


let choice1 = document.getElementById('choice1');
choice1.addEventListener('click', choice1_click);

let choice2 = document.getElementById('choice2');
choice2.addEventListener('click', choice2_click);

let choice3 = document.getElementById('choice3');
choice3.addEventListener('click', choice3_click);

let tot_rounds = document.getElementById('rounds');
tot_rounds.addEventListener('click', total_rounds);

let us_score = document.getElementById('user_score');
us_score.addEventListener('click', use_score);

let co_score = document.getElementById('comp_score');
co_score.addEventListener('click', com_score);

let exit = document.getElementById('stop');
exit.addEventListener('click', end);
