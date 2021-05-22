var index = 0;
var elements = ["#temp", "#desciption", "#button"]
var elements2 = ["#temp2", "#desciption2", "#button2"]
var contents = ["#firstcontent", "#secondcontent"]
$(document).ready(function(){
    // hide all the contents that we don't want to display yet
    contents.slice(1).forEach(element => {
        document.getElementById(element.substring(1)).style.display = "none";
        //document.getElementById(element.substring(1)).style.opacity = "0%";
    });
});


function right(){
    index++;
    index = index >= contents.length ? 0 : index;
    if(index == 0){
        document.getElementById(contents[index].substring(1)).style.display = "block";
        document.getElementById(contents[index].substring(1)).style.opacity = "1";
        document.getElementById(contents[index-1].substring(1)).style.display = "none";
        document.getElementById(contents[index-1].substring(1)).style.opacity = "0";
        hide_show_elements(elements, true);
        hide_show_elements(elements2, false);
    }else if(index == 1){
        document.getElementById(contents[index].substring(1)).style.display = "block";
        //document.getElementById(contents[index-1].substring(1)).style.display = "none";
        hide_show_elements(elements, false, 0);
        hide_show_elements(elements2, true, 1);
    }
}

function hide_show_elements(elemen, hide, additionaldelay){
    if(!hide){
        elemen.forEach(element => {
            var container = $(element);
            document.getElementById(element.substring(1)).style.animationDelay = (elements.indexOf(element)/10+additionaldelay).toString() + "s";
            container.addClass("fadetoleft");
        });
    }else{
        elemen.forEach(element => {
            var container = $(element);
            document.getElementById(element.substring(1)).style.animationDelay = (elements.indexOf(element)/10+additionaldelay).toString() + "s";
            container.addClass("fadetoleftr");
        });
    }
}