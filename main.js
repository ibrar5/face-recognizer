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

my_model = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/model.json', model_my);

function model_my(){
    colsole.log("model is created");
}