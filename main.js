
difference = 0;
leftWrist= 0;
rightWrist = 0;


function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas = createCanvas(500,400);
    canvas.position(430,130);

    poseNet = ml5.poseNet(video,modelDone);
    poseNet.on('pose',gotposes);
}

function draw(){
    background("#5196e3");
     textSize(difference)
      text("Kumar Sahitya" , 50 , 300)
      fill("crimson")
    }

function modelDone(){
    console.log("PoseNet Is Initialized And Loaded");
}

function gotposes(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

     leftWrist = results[0].pose.leftWrist.x
     rightWrist = results[0].pose.rightWrist.x

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x)
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x)
        
        difference = floor(leftWrist-rightWrist)
}
}
