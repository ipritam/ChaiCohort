const images = [
    {   
        src : 'https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption : "View of Paris"
    },
    {
        src : 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption : "View of London"
    },
    {
        src : 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption : "View of India"},
    {
        src : 'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption : "View of Germany"
    }
]


const carouselContainer = document.getElementById('carouselTrack');
const caption = document.getElementById('caption');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const carouselNav = document.getElementById('carouselNav');
const autoPlayButton = document.getElementById('autoPlayButton');
const timerDisplay = document.getElementById('timerDisplay');

let currentIndex = 0;
let intervalTime = null;
let img = document.createElement('img');
function displayImage(){
    carouselContainer.innerHTML = '';
    img.src = images[currentIndex].src;
    img.style.width = '100%';
    carouselContainer.appendChild(img);

    caption.innerText = images[currentIndex].caption

    carouselIndicator()

}

function carouselIndicator(){
    carouselNav.innerHTML = '';
    images.forEach((index) => {
        const indicator = document.createElement('button');
        indicator.classList.add('carousel-indicator');
        if(index == currentIndex){
            indicator.classList.add("active");
        }
        indicator.addEventListener('click' , () => {
            currentIndex = index;
            displayImage();
        })
        carouselNav.appendChild(indicator)
    })
}

function nextSlide(){
    currentIndex = (currentIndex + 1) % images.length;
    displayImage();
}
function prevSlide(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    displayImage();
}

function autoPlay(){
    intervalTime = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        displayImage();
    },2 * 1000)
}

function stopAutoPlay(){
    clearInterval(intervalTime);
    intervalTime = null;
}
nextButton.addEventListener("click", () => {
    nextSlide();
  });
  
  prevButton.addEventListener("click", () => {
    prevSlide();
  });

  autoPlayButton.addEventListener(('click') , () => {
    if (autoPlayButton.innerText === 'Start Auto Play') {
        autoPlayButton.innerText = 'Stop Auto Play'
        autoPlay();
    }else{
        autoPlayButton.innerText = 'Start Auto Play'
        stopAutoPlay()
        timerDisplay.innerText = ''
    }
  })

displayImage();
