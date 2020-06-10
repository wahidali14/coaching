var i = 0;
var images = [];
var time = 3000;
// time between a switch
// time list

images[0] = 'img/front.jpg';
images[1] = 'img/banner.png';
images[2] = 'img/banner2.png';
images[3] = 'img/FINGURE ONE.JPG';
images[4] = 'img/second.jpg';
//change Image
function changeImg(){
    document.slide.src = images[i];
    //chaeck if  index is under max 
    if(i < images.length - 1){
        //add i to index
        i++;
    } else{
        //reset back to 0
        i = 0;

    }
    //run function every x seconds
    setTimeout("changeImg()", time);

}
//Run Function When Page Loads
window.onload=changeImg;




