document.querySelectorAll('[id^=quiz]').forEach((quiz, index) => {
    let printval = document.getElementById('print' + (index + 1));
    quiz.querySelectorAll('.option').forEach((val) => {
        val.addEventListener('click', () => {
            let isCorrect = val.value === 'true';
            if (isCorrect) {
                val.classList.add('correct');
                printval.innerHTML = '<p>You have selected the correct answer</p>';
            } else {
                val.classList.add('incorrect');
                printval.innerHTML = '<p>You have selected the wrong answer</p>';
            }
            quiz.querySelectorAll('.option').forEach((btn) => {
                btn.disabled = true;
            });
        });
    });
});
