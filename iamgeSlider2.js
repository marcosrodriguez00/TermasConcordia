const TOTAL_SLIDES = 4
let currentIndex1 = 0

const dots1 = document.querySelectorAll("#dots1 button")
const images1 = document.querySelectorAll("#imagesDisplay1 img")

function showSlide(index) {
    images1.forEach(image => image.style.display = "none")
    dots1.forEach(dot => dot.style.backgroundColor = "transparent")

    images1[index].style.display = "block"
    dots1[index].style.backgroundColor = "#000"
}

function goToSlide(index) {
    currentIndex1 = (TOTAL_SLIDES + index) % TOTAL_SLIDES
    showSlide(currentIndex1)
}

function next1() {
    goToSlide(currentIndex1 + 1)
}

function prev1() {
    goToSlide(currentIndex1 - 1)
}

function dotCliclked1(index) {
    goToSlide(index)
}

dots1.forEach((dot, index) => {
    dot.addEventListener("click", () => dotCliclked1(index))
})

const TOTAL_SLIDES_2 = 4
let currentIndex2 = 0

const dots2 = document.querySelectorAll("#dots2 button")
const images2 = document.querySelectorAll("#imagesDisplay2 img")

function showSlide2(index) {
    images2.forEach(image => image.style.display = "none")
    dots2.forEach(dot => dot.style.backgroundColor = "transparent")

    images2[index].style.display = "block"
    dots2[index].style.backgroundColor = "#000"
}

function goToSlide2(index) {
    currentIndex2 = (TOTAL_SLIDES_2 + index) % TOTAL_SLIDES_2
    showSlide2(currentIndex2)
}

function next2() {
    goToSlide2(currentIndex2 + 1)
}

function prev2() {
    goToSlide2(currentIndex2 - 1)
}

function dotCliclked2(index) {
    goToSlide2(index)
}

dots2.forEach((dot, index) => {
    dot.addEventListener("click", () => dotCliclked2(index))
})

showSlide(currentIndex1)
showSlide2(currentIndex2)