var LeftRight = 0
var moveUp = "10vh"
document.onkeydown = function(e){
    console.log("key", e.key)

    // console.log(val)
    if (e.key == "ArrowRight"){
        LeftRight = LeftRight +2;
        if(LeftRight)
        var moveRight = LeftRight+"vh"
        document.getElementById("person").style.left = moveRight
    }
    if (e.key == "ArrowLeft"){
        LeftRight = LeftRight-2;
        var moveLeft = LeftRight+"vh"
        document.getElementById("person").style.left = moveLeft
    }
    if (e.key == "ArrowUp"){
        document.getElementById("person").style.bottom = moveUp;
        setTimeout(() => {
            document.getElementById("person").style.bottom = "0vh";
        }, 260);
        console.log("09")
        // document.getElementById("person").style.bottom = "0px";

    }

    
}