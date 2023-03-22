const polTitleContainer = document.querySelector('#poll__title');
const answerContainer = document.querySelector('#poll__answers');

let request = new XMLHttpRequest();
request.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
request.send();

request.onreadystatechange = function () {
    if (request.readyState === 4) {
        let JsonResponse = JSON.parse(request.responseText);
        const question = JsonResponse.data.title;
        const answers = JsonResponse.data.answers;
        
        polTitleContainer.innerHTML = `
            <div class="poll__title" id="poll__title">${question}</div>
        `;
        
        for (const key in answers){
            const answer = answers[key];
            const pollAnswer = `
                <button class="poll__answer">${answer}</button>
            `;
            answerContainer.innerHTML += pollAnswer;
        }

        answerContainer.addEventListener('click', function(event){
            if (event.target.classList.contains("poll__answer")) {
                event.preventDefault();
                alert('Спасибо, ваш голос засчитан!');
              }
        });
    }
}
