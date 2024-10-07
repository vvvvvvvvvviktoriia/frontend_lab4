let variantNumber = 4;
let firstElementIndex = (variantNumber % 10) + 1;
let secondElementIndex = firstElementIndex + 1;

let toggleColorFirst = true;
let toggleColorSecond = true;

document.querySelectorAll('h2, p, h3, ul li, ol li')[firstElementIndex - 2].addEventListener('click', function () {
    if (toggleColorFirst) {
        this.style.backgroundColor = '#FFCCCB';
        this.style.color = '#FF0500';
    } else {
        this.style.backgroundColor = '#FFFACD';
        this.style.color = '#FFD700';
    }
    toggleColorFirst = !toggleColorFirst;
});

document.querySelectorAll('h2, p, h3, ul li, ol li')[secondElementIndex - 2].addEventListener('click', function () {
    if (toggleColorSecond) {
        this.style.backgroundColor = '#FFFACD';
        this.style.color = '#FFD700';
    } else {
        this.style.backgroundColor = '#FFCCCB';
        this.style.color = '#FF0500';
    }
    toggleColorSecond = !toggleColorSecond;
});

let imgElement;

document.getElementById('add-img-btn').addEventListener('click', function () {
    if (!document.getElementById('city-image')) {
        let newImg = document.createElement('img');
        newImg.src = 'assets/barcelona.jpg';
        newImg.alt = 'Барселона';
        newImg.id = 'city-image';
        newImg.width = 450;
        let imageContainer = document.querySelector('a');
        imageContainer.appendChild(newImg);
        imgElement = newImg;
    }
});

document.getElementById('increase-img-btn').addEventListener('click', function () {
    imgElement = document.getElementById('city-image');
    if (imgElement) {
        imgElement.width += 50;
    }
});

document.getElementById('decrease-img-btn').addEventListener('click', function () {
    imgElement = document.getElementById('city-image');
    if (imgElement && imgElement.width > 50) {
        imgElement.width -= 50;
    }
});

document.getElementById('remove-img-btn').addEventListener('click', function () {
    imgElement = document.getElementById('city-image');
    if (imgElement) {
        imgElement.remove();
        imgElement = null;
    }
});

