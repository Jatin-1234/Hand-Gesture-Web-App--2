

prediction1 = "";
prediction2 = "";

Webcam.set({
    width :350 ,
    height :300,
    image_format : "png",
png_quality : 90 
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='capturedPic' src='"+data_uri+"'>'";
    });
}

console.log(ml5.version);

classifier = ml5.imageClassifier ("https://teachablemachine.withgoogle.com/models/K_hBMrVnx/model.json/",modelloaded);

function modelloaded(){
    console.log("modelloaded is loaded");
}

function speech(){
speaker = window.speechSynthesis;
speak_data_1 = " The first prediction is " + prediction1;
speak_data_2 = " The second prediction is " + prediction2;
utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
 speaker.speak(utterThis);
}