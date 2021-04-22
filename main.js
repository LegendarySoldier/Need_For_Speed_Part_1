canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car_width = 100;
car_height = 90;
car_x = 10;
car_y = 10;

car_x2 = 80;
car_y2 = 80;
car2_width = 100;
car2_height = 90;



background_image = "racing track.jpg";
car_image_1 = "racing car 1.png";
car_image_2 = "racing car 2.png";


function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car_imgTag = new Image();

    car_imgTag.onload = uploadcar;

    car_imgTag.src = car_image_1;

    car_imgTag2 = new Image();

    car_imgTag2.onload = uploadcar2;

    car_imgTag2.src = car_image_2;


}

function uploadBackground() {

    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar() {
    console.log("ihdsfgusydfgsd")
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}

function uploadcar2() {
    ctx.drawImage(car_imgTag2, car_x2, car_y2, car2_width, car2_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    kerPressed = e.keyCode;
    console.log(kerPressed);
    if (kerPressed == "38") {
        up();
        console.log("up")
    }
    if (kerPressed == "40") {
        down();
        console.log("down")
    }
    if (kerPressed == "37") {
        left();
        console.log("left")
    }
    if (kerPressed == "39") {
        right();
        console.log("right")
    }
}


window.addEventListener("keydown2", my_keydown2);

function my_keydown2(e) {
    kerPressed = e.keyCode;
    console.log(kerPressed);
    if (kerPressed == "87") {
        up_w();
        console.log("w")
    }
    if (kerPressed == "83") {
        down_s();
        console.log("s")
    }
    if (kerPressed == "65") {
        left_a();
        console.log("a")
    }
    if (kerPressed == "68") {
        right_d();
        console.log("d")
    }
}










