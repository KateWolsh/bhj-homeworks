const itemsContainer = document.querySelector('#items');
const loader = document.getElementById('loader');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        let JsonResponse = JSON.parse(xhr.responseText);
        const valutes = JsonResponse.response.Valute;
        for (const key in valutes) {
            const valute = valutes[key];
            const item = document.createElement('div');
            item.classList.add('item');

            item.innerHTML = `
        <div class="item__code">${valute.CharCode}</div>
        <div class="item__value">${valute.Value}</div>
        <div class="item__currency"></div>
      `;
            itemsContainer.appendChild(item);
        }
        loader.classList.remove('loader_active');
    };
};



