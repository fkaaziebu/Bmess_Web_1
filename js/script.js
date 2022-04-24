let currentSlide = 1, playPauseBool = true, interval

const changeSlides = () => {
    const slideList = document.querySelectorAll('.slides')
    const slides = Array.from(slideList)
    const checkBoxList = document.querySelectorAll('.btn')
    const btn = Array.from(checkBoxList)

    if (currentSlide > slides.length){
        currentSlide = 1
    } else if (currentSlide === 0){
        currentSlide = slides.length
    }

    btn.forEach(btns => {
        if (btns.classList[1].split('-')[1]*1 === currentSlide){
            btns.classList.add('activate')
        } else {
            btns.classList.remove('activate')
        }
    })

    slides.forEach(slide => {
        if (slide.classList[1].split('-')[1]*1 === currentSlide){
            slide.classList.add('active')
        } else{
            slide.classList.remove('active')
        }
    })
}

const playPause = () => {
    if (playPauseBool){
       interval = setInterval(() => {
            currentSlide++
            changeSlides()
        }, 5000)
        playPauseBool = false
    } else {
        clearInterval(interval)
        playPauseBool = true
    }
    changePlayPause()
}

const changePlayPause = () => {
    const icon = document.querySelector('.play-pause i')
    const cls = icon.classList[1]

    if (cls === 'fa-play'){
        icon.classList.remove('fa-play')
        icon.classList.add('fa-pause')
    } else{
        icon.classList.add('fa-play')
        icon.classList.remove('fa-pause')
    }
}

document.querySelector('.left').addEventListener('click', () => {
    if (!playPauseBool){
        playPause()
    }
    currentSlide--
    changeSlides()
})
document.querySelector('.right').addEventListener('click', () => {
    if (!playPauseBool){
        playPause()
    }
    currentSlide++
    changeSlides()
})
document.querySelector('.btn-1').addEventListener('click', () => {
    if (!playPauseBool){
        playPause()
    }
    currentSlide = 1
    changeSlides()
})
document.querySelector('.btn-2').addEventListener('click', () => {
    if (!playPauseBool){
        playPause()
    }
    currentSlide = 2
    changeSlides()
})
document.querySelector('.btn-3').addEventListener('click', () => {
    if (!playPauseBool){
        playPause()
    }
    currentSlide = 3
    changeSlides()
})
document.querySelector('.play-pause').addEventListener('click', () => {
    playPause()
})

changeSlides()
playPause()