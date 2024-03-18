
const circleChannel = new BroadcastChannel("circle_channel")
const circle = document.getElementById("circle")

function circleMovement(event) {
    const x = event.clientX, y = event.clientY
    circle.style.left = x + "px";
    circle.style.right = "";
    circle.style.top = y + "px";
    
    circleChannel.postMessage({ x, y })
}

circleChannel.onmessage = (event) => {
    const { x, y } = event.data
    circle.style.right = x + "px";
    circle.style.left = "";
    circle.style.top = y + "px";
}

addEventListener("mousemove", circleMovement)