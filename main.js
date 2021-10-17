var prediction ="";
Webcam.set({
width:350,
height:300,
image_format:"png",
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function Takesnapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="Capture_image" src="'+data_uri+'"/>';
 });

}
console.log("ml5version:",ml5.version);
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Nj3sMfFHy/model.json",modelloaded);
 function modelloaded(){
     console.log("model_ loaded");
  }
  function speak(){
      var synth= window.speechSynthesis;
      speak_data= "The  Prediction is "+prediction
      var Utter_this = new SpeechSynthesisUtterance(speak_data);
      synth.speak(Utter_this);
    }

    function Check(){
        img=document.getElementById("Capture_image");
         classifier.classify(img,gotResult);
    }
     
    function gotResult(error,results){
        if(error){
            console.error(error);
        }
        else{
            console.log(results);
            document.getElementById("result_emotion_name").innerHTML=results[0].label;
            prediction=results[0].label;
            speak();
            if(results[0].label=="amazing"){
               document.getElementById("update_emoji").innerHTML="&#128076;";
               console.log("amazing");
            }
            if(results[0].label=="victory"){
                document.getElementById("update_emoji").innerHTML="&#9997;";
                console.log("victory");
             }
             if(results[0].label=="best"){
                document.getElementById("update_emoji").innerHTML="&#128077;";
                console.log("best");
             }
             
              }
        }
