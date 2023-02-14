const form = document.querySelector('#searchForm');
const resultImages = document.querySelector('#resultImages');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const userInput = form.elements.query.value;
    const myConfig = { params: { q: userInput } };
    const result = await axios.get('https://api.tvmaze.com/search/shows?', myConfig);
    const shows = result.data;
    resultImages.innerHTML = '';
    for (let title of shows) {
        if (title.show.image) {
            const newImg = document.createElement('img');
            newImg.src = title.show.image.medium;
            resultImages.append(newImg);
            newImg.style.padding = '1rem 0.7rem';
            newImg.style.width = '20rem';
            newImg.style.border = '0.5px dotted beige';
            newImg.style.marginBottom = '3rem';
            newImg.style.marginRight = '1.5rem';
        }
    }
    form.elements.query.value = '';
})


