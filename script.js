
const data = [
    { agent: 'Nitrous Oxide', values: [0.47, 1.4, 2.3, 38770, 104, 0.6, '', 0.004] },
    { agent: 'Desflurane', values: [0.45, 19, 27.2, 669, 6.6, '0.3-0.4', 1.3, 0.02] },
    { agent: 'Sevoflurane', values: [0.65, 47, 47.5, 157, 2, '0.3-0.4', 2.2, '2-5'] },
    { agent: 'Isoflurane', values: [1.46, 91, 45, 238, 1.1, '0.3-0.4', 1.3, 0.2] },
    { agent: 'Halothane', values: [2.54, 224, 51.1, 243, 0.75, 0.5, '', '15-20'] }
];

const categories = ["Blood-Gas", "Oil-Gas", "Fat-Blood", "VP", "MAC", "Awake (MAC)", "BAR (MAC)", "CYP450 METAB (%)"];

let currentAgent = '';
let currentAnswer = '';
let currentCategoryIndex = 0;

document.getElementById('generateBtn').addEventListener('click', generateQuestion);
document.getElementById('checkAnswerBtn').addEventListener('click', checkAnswer);
document.getElementById('showAnswerBtn').addEventListener('click', showAnswer);
document.getElementById('resetBtn').addEventListener('click', resetGame);

function generateQuestion() {
    const randomAgent = data[Math.floor(Math.random() * data.length)];
    currentAgent = randomAgent.agent;
    currentCategoryIndex = Math.floor(Math.random() * categories.length);
    currentAnswer = randomAgent.values[currentCategoryIndex];

    if (Math.random() > 0.5) {
        document.getElementById('agentInput').value = currentAgent;
        document.getElementById('agentInput').disabled = true;
        document.getElementById('answerInput').value = '';
        document.getElementById('answerInput').disabled = false;
        document.getElementById('answerInput').placeholder = 'Enter Value';
    } else {
        document.getElementById('agentInput').value = '';
        document.getElementById('agentInput').disabled = false;
        document.getElementById('answerInput').value = currentAnswer;
        document.getElementById('answerInput').disabled = true;
        document.getElementById('answerInput').placeholder = 'Value Shown';
    }

    document.getElementById('category').textContent = categories[currentCategoryIndex];

    document.getElementById('checkAnswerBtn').style.display = 'inline-block';
    document.getElementById('showAnswerBtn').style.display = 'none';
    document.getElementById('agentInput').classList.remove('correct', 'incorrect');
    document.getElementById('answerInput').classList.remove('correct', 'incorrect');
}

function checkAnswer() {
    const userAgentAnswer = document.getElementById('agentInput').value.trim().toLowerCase();
    const userValueAnswer = document.getElementById('answerInput').value.trim();

    const correctAgent = currentAgent.toLowerCase();
    const correctAnswer = currentAnswer.toString();

    if (!document.getElementById('agentInput').disabled && userAgentAnswer === correctAgent) {
        document.getElementById('agentInput').classList.add('correct');
    } else if (!document.getElementById('agentInput').disabled) {
        document.getElementById('agentInput').classList.add('incorrect');
    }

    if (!document.getElementById('answerInput').disabled && userValueAnswer === correctAnswer) {
        document.getElementById('answerInput').classList.add('correct');
    } else if (!document.getElementById('answerInput').disabled) {
        document.getElementById('answerInput').classList.add('incorrect');
    }

    document.getElementById('checkAnswerBtn').style.display = 'none';
    document.getElementById('showAnswerBtn').style.display = 'inline-block';
}

function showAnswer() {
    if (!document.getElementById('agentInput').disabled) {
        document.getElementById('agentInput').value = currentAgent;
    } else {
        document.getElementById('answerInput').value = currentAnswer;
    }
}

function resetGame() {
    document.getElementById('agentInput').value = '';
    document.getElementById('answerInput').value = '';
    document.getElementById('agentInput').disabled = true;
    document.getElementById('answerInput').disabled = true;
    document.getElementById('checkAnswerBtn').style.display = 'inline-block';
    document.getElementById('showAnswerBtn').style.display = 'none';
    document.getElementById('agentInput').classList.remove('correct', 'incorrect');
    document.getElementById('answerInput').classList.remove('correct', 'incorrect');
}
