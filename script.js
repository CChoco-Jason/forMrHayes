const text = document.querySelector(".container-text")


function mouseMoveFunction(event) {
    let currentx = event.clientX; 
    let currenty = event.clientY; 

    let height = window.innerHeight; 
    let width = window.innerWidth;

    let percentageX = 100 - (currentx / width) * 100; 
    let percentageY = 100 - (currenty / height) * 100; 

    if (percentageX < 15) {
        percentageX = 15; 
    }

    if (percentageY < 15) {
        percentageY = 15; 
    }

    if (percentageX > 85) {
        percentageX = 85; 
    }

    if (percentageY > 85) {
        percentageY = 85; 
    }

    text.style.top = percentageY + "%"; 
    text.style.left = percentageX + "%"; 
}

window.addEventListener("mousemove", mouseMoveFunction);