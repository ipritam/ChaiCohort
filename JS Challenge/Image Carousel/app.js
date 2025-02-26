const images = [
    {   
        src : 'https://unsplash.com/photos/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-the-rays-of-the-setting-sun-on-the-bank-of-seine-river-with-cruise-tourist-ships-AofcIDFaraI',
        caption : "View of Paris"
    },
    {
        src : 'https://unsplash.com/photos/aerial-photography-of-london-skyline-during-daytime-Oja2ty_9ZLM',
        caption : "View of London"
    },
    {
        src : 'https://unsplash.com/photos/man-riding-on-boat-near-golden-mosque-dskdujAQU44',
        caption : "View of India"},
    {
        src : 'https://unsplash.com/photos/time-lapse-photography-of-vehicle-at-the-road-in-between-the-building-at-nighttime-aerial-photography-iPOZf3tQfHA',
        caption : "View of Germany"
    }
]

const carouselContainer = document.getElementById('carouselTrack');

images.forEach((image,index) => {
    const img = document.createElement('img');
    img.src = image.src;
    img.classList.add("carousel-image");
    if (index === 0) img.classList.add("active");
    carouselContainer.appendChild(img);
})

let currentIndex = 0;

function slideShow(index){
    // const totalSlide = images.length;

    currentIndex = index;

}