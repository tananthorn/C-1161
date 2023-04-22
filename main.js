lipX=0;
lipY=0;

function preload() {
    mouth_lip =loadImage('https://i.postimg.cc/bNPMckGY/clown-nose.png');
}

function setup() {
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
if (results.length > 0)
{
console.log(results)
console.log('lip x =' + results[0].pose.lip.x);
console.log('lip y =' + results[0].pose.lip.y);
console.log("lip x =" + noseX)
console.log("lip y =" + noseY)
}
}
function modelLoaded() {
console.log('PoseNet is Initialized')
}
function draw() {
image(video, 0, 0, 300, 300)
image(clown_nose, lipX, lipY, 30, 30);
}
noseX=0;
noseY=0;

