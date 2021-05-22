var index = 0;
var elements = ["#temp", "#desciption", "#button"]
var elements2 = ["#temp2", "#desciption2", "#button2"]
var elementsslist = [elements, elements2]
var contents = ["#firstcontent", "#secondcontent"]
$(document).ready(function(){
    // hide all the contents that we don't want to display yet
    contents.slice(1).forEach(element => {
        //document.getElementById(element.substring(1)).style.display = "block";
        //document.getElementById(element.substring(1)).style.opacity = "0%";
    });
});

function hide(id){
    var container = $(id);
    container.removeClass("animationIN");
    container.addClass("animationOUT");
}
function show(id){
    var container = $(id);
    container.removeClass("animationOUT");
    container.addClass("animationIN");
}

function left(){
    hide(contents[index]);
    index++;
    if(index >= elementsslist.length)
        index = 0;
    show(contents[index]);
}

function right(){
    hide(contents[index]);
    index--;
    if (index < 0)
        index = elementsslist.length - 1;
    show(contents[index]);
}