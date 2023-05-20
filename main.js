//https://teachablemachine.withgoogle.com/models/h6tMPLkE6/
var prediction_1="";
var prediction_2="";

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:100
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_img' src='"+data_uri+"'/>";
    })
}

console.log("ml5 version: ",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/h6tMPLkE6/model.json",modelLoaded);

function modelLoaded() {
    console.log("modelLoaded");

}

function speak() {
    var synth=window.speechSynthesis
    speakData1="The first prediction is "+prediction_1;
    speakData2="and The second prediction is "+prediction_2;
    var utterThis=new SpeechSynthesisUtterance(speakData1+speakData2);
    synth.speak(utterThis);
}