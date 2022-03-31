function setup() {
    c1 = createCanvas(500, 500)
    c1.position(760, 100)
    v1 = createCapture(VIDEO)
    pn = ml5.poseNet(v1, modelLoaded)
    pn.on('pose', gotPoses)


}

function modelLoaded() {
    console.log("posenet is on")
}
nosex = 0
nosey = 0
lwristy = 0
lwristx = 0
rwristx = 0
rwristy = 0
distance = 0

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        nosex = results[0].pose.nose.x
        nosey = results[0].pose.nose.y
        lwristy = results[0].pose.leftWrist.y
        lwristx = results[0].pose.leftWrist.x
        rwristx = results[0].pose.rightWrist.x
        rwristy = results[0].pose.rightWrist.y
        distance = floor(rwristx - lwristx)
        console.log("size of the text is", distance )
        console.log("leftwristy=" + lwristy, "leftwristx=" + lwristx)
        console.log("rightwristy=" + rwristy, "rightwristx=" + rwristx)
        console.log("nosex=" + nosex, "nosey=" + nosey)
    }

}

function draw() {
    background("gray")
    textSize(distance)
    text("SIDDHANT", nosex, nosey)
    
document.getElementById("size").innerHTML="size of the text is"+distance


}
