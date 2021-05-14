img = "";

status="";

function preload()
    {
        img = loadImage("dog_cat.jpg");
    }

function setup()
    {
      canvas = createCanvas(640, 420);
      canvas.center();  
      objectDetector=ml5.objectDetector('cocossd', modelLoaded);
      document.getElementById("status").innerHTML="status: detecting objects";
    }

    function draw()
    {
        image(img, 0, 0 ,640, 420);
        fill("#f2270c");
        text("Dog" , 180, 75);
        textSize(22);
        noFill();
        stroke("#005cfa");
        rect(30 ,60, 300, 340);

        fill("#f2270c");
        text("Cat" , 360, 75 );
        textSize(22);
        noFill();
        stroke("#005cfa");
        rect(310,45,340,360);
        
    }

    function modelLoaded()
    {
        console.log("modelLoaded");
        status=true;
        objectDetector.detect(img, gotResult);

    }

    function gotResult(error, results)
    {
     if(error){
         console.error(error);

     }
     else{
         console.log(results);
     }
    }

   
    
