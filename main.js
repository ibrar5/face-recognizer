Webcam.set({
    height: 300,
    width: 350,
    image_format: 'png',
    png_quality: 90
});

Webcam.attach( document.getElementById("camera"));

function capture(){
    Webcam.snap(
        function (data_uri){
            document.getElementById("result").innerHTML = '<img id="img_model" src="'+data_uri+'">';
        }
    );
}
console.log(ml5.version);

my_model = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0Z6NncAyT/mode.json', model_my)

function model_my(){
    console.log("model is created");
}
function check(){
    image = document.getElementById("img_model");
    my_model.classify(image, gotResult);
    function gotResult(error, results){
        if(error){
            console.log(error);
        }else{
            console.log(results);
            document.getElementById("object").innerHTML = results[0].label;
            document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
        }
    }
}