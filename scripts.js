document.addEventListener("DOMContentLoaded", function() {
    const quizzes = document.querySelectorAll('.quiz');
    quizzes.forEach(quiz => {
        const progress = quiz.getAttribute('data-progress');
        const progressBar = quiz.querySelector('.progress');
        progressBar.style.width = progress + '%';

        // Make quiz names clickable
        const quizName = quiz.querySelector('h3');
        quizName.addEventListener('click', function() {
            const quizNameText = quizName.textContent.toLowerCase();
            const quizUrl = getQuizUrl(quizNameText);
            window.location.href = quizUrl;
        });
    });

    const uploadImage = document.getElementById('upload-image');
    const profileImg = document.getElementById('profile-img');

    uploadImage.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profileImg.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    function getQuizUrl(quizName) {
        const quizUrls = {
            maths: 'https://example.com/quiz/maths',
            science: 'https://example.com/quiz/science',
            physics: 'https://example.com/quiz/physics',
            astronomy: 'https://example.com/quiz/astronomy',
            english: 'https://example.com/quiz/english'
        };
        return quizUrls[quizName] || '#';
    }
});
