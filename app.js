let userScore = 0;
let computerScore = 0;
let userTotal = 0;
let computerTotal = 0;
let dernier_user_score = 0;
let dernier_computer_score = 0;
let highest_score_value = 0;
let highest_score_value2 = 0;

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const total_user_vic = document.getElementById('total-user-victory');
const total_computer_vic = document.getElementById('total-computer-victory');
const reset = document.getElementById('some-element');
const rajoute10pts = document.getElementById('cheat');

const pseudo = document.getElementById('change_name_button');
const pseudo_adv = document.getElementById('change_adv_button');
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

const title_change = document.getElementById('action-message');

const nameUser = document.getElementById('user-label');
const nameAdv = document.getElementById('computer-label');
const dernier_joueur_name = document.getElementById('joueur-name');
const dernier_user = document.getElementById('last-user-score');
const dernier_computer = document.getElementById('last-computer-score');

const Name_Highest_Score = document.getElementById('high-score-name');
const Highest_Score_user = document.getElementById('high-score-score');
const Highest_Score_ordi = document.getElementById('high-score-ordi');

  function name_score_board() {
    var name = prompt("Dis-moi ton nom : ")
    var adversaire = prompt("Choisi le nom de ton adversaire : ")
    nameUser.innerHTML = name;
    dernier_joueur_name.innerHTML = "Dernier Joueur : " + name;
    nameAdv.innerHTML = adversaire;
  }
 name_score_board();

  function cheat() {
    rajoute10pts.addEventListener("click", function() {
      dernier_user_score += 10;
      dernier_user.innerHTML = dernier_user_score + '&nbsp;';
    })
  }
  cheat();

  function changerPseudo() {
    pseudo.addEventListener("click", function() {
      var name = prompt("Change ton nom Carotte : ")
      nameUser.innerHTML = name;
    })
  }
  changerPseudo();

  function changerAdvPseudo() {
    pseudo_adv.addEventListener("click", function() {
      var adversaire = prompt("Change le nom de l'autre d'en face : ")
      nameAdv.innerHTML = adversaire;
    })
  }
  changerAdvPseudo();

  function highScore() {
    if (dernier_user_score - dernier_computer_score > highest_score_value - highest_score_value2) {
      Name_Highest_Score.innerHTML = name + "&nbsp;";
      highest_score_value = dernier_user_score;
      highest_score_value2 = dernier_computer_score;
      Highest_Score_user.innerHTML = dernier_user_score + "&nbsp;"
      Highest_Score_ordi.innerHTML = dernier_computer_score + "&nbsp";
    }
  }

  function resetScore() {
    reset.addEventListener("click", function() {
      var name = nameUser.innerHTML;
      dernier_joueur_name.innerHTML = "Dernier Joueur : " + name;
      dernier_user_score = userTotal;
      dernier_computer_score = computerTotal;
      dernier_user.innerHTML = userTotal + '&nbsp;';
      dernier_computer.innerHTML = '&nbsp;' + computerTotal;
      highScore();
      userTotal = 0;
      computerTotal = 0;
      total_user_vic.innerHTML = 0 + "&nbsp;";
      total_computer_vic.innerHTML = "&nbsp;" + 0;
    })
  }
  resetScore();

  function startOver() {
    if (userScore == computerScore + 3) {
      result_p.innerHTML = "T'as gagné la partie, 3 pts de plus que le faible d'en face";
      userScore -= userScore;
      computerScore -= computerScore;
      title_change.innerHTML = "Nouvelle Partie ? Tu vas lui mettre la pâté encore !";
      title_change.style.color = 'OrangeRed';
      userTotal++;
      total_user_vic.innerHTML = userTotal + "&nbsp;";
      clickToStartAgain();
    } else if (computerScore == userScore + 3) {
      result_p.innerHTML = "GAME OVER, L'ordi a 3pts de plus que toi Henri !";
      userScore -= userScore;
      computerScore -= computerScore;
      title_change.innerHTML = "Nouvelle Partie ? Te laisse pas faire allez !";
      title_change.style.color = 'OrangeRed';
      computerTotal++;
      total_computer_vic.innerHTML = "&nbsp;" + computerTotal;
      clickToStartAgain();
    }
  }

  function clickToStartAgain() {
    title_change.addEventListener("click",function() {
      title_change.innerHTML = "Faites vos jeux";
      title_change.style.color = 'deepskyblue';
      result_p.innerHTML = "Et c'est reparti pour un tour Fabrice";
      userScore_span.innerHTML = 0;
      computerScore_span.innerHTML = 0;
      userScore -= userScore;
      computerScore -= computerScore;
    })
  }

  function Recommencez() {
    if (userScore - computerScore < 3 || computerScore - userScore < 3 ) {
      title_change.innerHTML = "Recommencez ?";
      clickToStartAgain();
    }
  }

  function convertToWord(letter) {
    if (letter === "r") return "La Pierre"
    if (letter === "p") return "La Feuille"
    return "Le Ciseau"
  }


  function win(a, b) {
    const smallUserWord = name.fontsize(2).sup();
    const smallCompWord = " (ordi)".fontsize(2).sup();
    const userChoice_div = document.getElementById(a)
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(a)}${smallUserWord} bat ${convertToWord(b)}${smallCompWord}, Tu gagnes Jean-Pierre ! 🔥🔥`; //ES6 insteas of ES5
    userChoice_div.classList.add('greenglow');
    setTimeout(function() { userChoice_div.classList.remove('greenglow')}, 300);
    Recommencez();
    startOver();
  }


  function lose(a, b) {
    const smallUserWord = name.fontsize(2).sup();
    const smallCompWord = " (ordi)".fontsize(2).sup();
    const userChoice_div = document.getElementById(a)
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(a)}${smallUserWord} perd contre ${convertToWord(b)}${smallCompWord}, Rien ne va plus Francis 😢😭`;
    userChoice_div.classList.add('redglow');
    setTimeout(function() { userChoice_div.classList.remove('redglow')}, 300);
    Recommencez();
    startOver();
  }

  function draw(a, b) {
    const smallUserWord = name.fontsize(2).sup();
    const smallCompWord = " (ordi)".fontsize(2).sup();
    const userChoice_div = document.getElementById(a)
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `C'est une égalité, Jte croyais meilleur que ça Samuel ! 👿`;
    userChoice_div.classList.add('grayglow');
    setTimeout(function() { userChoice_div.classList.remove('grayglow')}, 300);
    Recommencez();
    startOver();
  }

  function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  }

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "pr":
    case "sp":
    case "rs":
    win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
    lose(userChoice, computerChoice);
      break;
    default:
    draw(userChoice, computerChoice);
  }
}


// Buttons
function main() {
  rock_div.addEventListener('click', function() {
    game("r");
  })
  paper_div.addEventListener('click', function() {
    game("p");
  })
  scissors_div.addEventListener('click', function() {
    game("s");
  })
}

main();
