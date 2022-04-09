$(document).ready(function () {
    let img=document.createElement("img");
    $(img).css("width","108%");
    $(img).css("padding","10px");
    $(img).css("min-width","354px");
    $(img).css("min-height","199px");
    $(img).css("height","100%");
    $(img).css("border","2px solid");
    $(img).css("border-image","linear-gradient(45deg,rgb(55, 217, 168), rgb(25, 92, 89)) 10");
    let ide=document.getElementById("ide");
    ide.append(img);
    let images=['images/pictures/1.png','images/pictures/2.png','images/pictures/3.png','images/pictures/4.png','images/pictures/5.png','images/pictures/6.png','images/pictures/7.png','images/pictures/8.png'];
    setInterval(function(){
    let random=Math.floor(Math.random()*8);
    img.src=images[random];
},500);
});
