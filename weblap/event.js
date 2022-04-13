$(document).ready(function () {
    let img=document.createElement("img");
    let ide=document.getElementById("ide");
    $(img).css("width","100%");
    $(ide).css("padding-top","45px");
    $(img).css("min-width","320px");
    $(img).css("min-height","155px");
    $(img).css("height","100%");
    $(img).css("border","2px solid");
    $(img).css("margin-bottom","10%");
    $(img).css("border-image","linear-gradient(45deg,rgb(55, 217, 168), rgb(25, 92, 89)) 10");
   
    ide.append(img);
   
    let random=Math.floor(Math.random()*8);
    img.src='images/astronauts.gif';
});
