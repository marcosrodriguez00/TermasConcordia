const sliderContainer = document.querySelector(".imageContainer")
const innerSlider = document.querySelector(".imageSlider")
const images = ["/Resources/fotosBungalows/bungalows1.JPG", "/Resources/fotosBungalows/bungalows2.JPG", "/Resources/fotosBungalows/bungalows3.JPG", "/Resources/fotosBungalows/bungalows4.JPG", "/Resources/fotosBungalows/bungalows5.JPG", "/Resources/fotosBungalows/bungalows6.JPG"]

console.log(images)

const events = {
    mouse: {down: "mousedown", move: "mousemove", up: "mouseup"},
    touch: {down: "touchstart", move: "touchmove", up: "touchend"}
}

let deviceType = ''

function isTouchDevice(){
    try{
        document.createEvent("TouchEvent")
        deviceType = "touch"
        return true
    }catch(e){
        deviceType = "mouse"
        return false
    }
}

function slideGenerator(){
    images.forEach(image => {
        const slide = document.createElement("div")
        slide.classList.add("slide")
        slide.innerHTML = `<img src='${image}' class='bungalowImage'>`
        innerSlider.appendChild(slide)
    })
    innerSlider.style.gridTemplateColumns = `repeat(${images.length}, 1fr)`
}

function handleDown(e){
    active = true
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const containerRect = sliderContainer.getBoundingClientRect()
    const sliderRect = innerSlider.getBoundingClientRect()
    startX = clientX - (sliderRect.left - containerRect.left)
    sliderContainer.style.cursor = "grabbing"
}

function handleMove(e){
    if(!active) return
    e.preventDefault()

    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const currentX = clientX - startX

    const imageWidth = 800
    const gapWidth = 16
    const paddingWidth = 10*2
    const totalWidth = (imageWidth + gapWidth) * images.length - gapWidth * paddingWidth
    const maxOffset = totalWidth - sliderContainer.offsetWidth

    const constrainedX = Math.min(0, Math.max(-maxOffset, currentX))
    innerSlider.style.transform = `translateX(${constrainedX}px)`
}

function checkBoundary(){
    const innerWidth = innerSlider.offsetWidth
    const containerWidth = sliderContainer.offsetWidth
    const maxOffset = containerWidth - innerWidth
    const currentOffset = parseInt(innerSlider.style.transform.replace("px)", ""))

    if(currentOffset > 0) {
        innerSlider.style.transform = "translateX(0px)"
    }else if(currentOffset < -maxOffset) {
        innerSlider.style.transform = `translateX(${-maxOffset}px)`
    }
}

function handleUp(){
    sliderContainer.style.cursor = "grab"
    active = false
}

function initializeSlider(){
    isTouchDevice()
    slideGenerator()
    sliderContainer.addEventListener(events[deviceType].down, handleDown)
    document.addEventListener(events[deviceType].move, handleMove)
    document.addEventListener(events[deviceType].up, handleUp)
}

window.onload = initializeSlider