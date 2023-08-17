var humanScore = 0;
var aiScore = 0;

function calculateScore (humanChoice)
{
    // generating AI move:
    var max = 2;
    var min = 0;
    var aiMoveIndex = Math.floor(Math.random() * (max - min + 1)) + min;
        
    //alert ("Beyond random number point!");

    const moves = ["rock", "paper", "scissors"];
    var aiChoice = moves[aiMoveIndex];

    //alert ("human-choice: " + humanChoice + " :: ai-choice: " + aiChoice);

    // scoring:
    if (humanChoice == aiChoice)
    {
        return;
    }

    if (humanChoice == "rock" && aiChoice == "paper")
    {
        aiScore += 1;
    }
    else if (humanChoice == "rock" && aiChoice == "scissors")
    {
        humanScore += 1;
    }
    else if (humanChoice == "paper" && aiChoice == "rock")
    {
        humanScore += 1;
    }
    else if (humanChoice == "paper" && aiChoice == "scissors")
    {
        aiScore += 1;
    }
    else if (humanChoice == "scissors" && aiChoice == "rock")
    {
        aiScore += 1;
    }
    else if (humanChoice == "scissors" && aiChoice == "paper")
    {
        humanScore += 1;
    }
    else
    {
        alert ("ERROR: Unknown combination formed!");
    }

    // updating the score:
    var humanScoreDiv = document.getElementById("human-score");
    var aiScoreDiv = document.getElementById("ai-score");

    humanScoreDiv.innerHTML = "Score: " + humanScore;
    aiScoreDiv.innerHTML = "Score: " + aiScore;

    // deciding if the game is over yet:
    if (humanScore == 5 || aiScore == 5)
    {        
        if (humanScore == 5)
        {
            alert ("Human won!\n");
        }
        else if (aiScore == 5)
        {
            alert ("AI won!\n");
        }

        humanScore = 0;
        aiScore = 0;
        
        humanScoreDiv.innerHTML = humanScore;
        aiScoreDiv.innerHTML = aiScore;
    }
}