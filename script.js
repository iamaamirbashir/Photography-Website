var images = [
    "./Images/theme_8_c5c72c66_XL.jpg",
    "./Images/theme_8_41dce162_XL.jpg",
    "./Images/theme_8_06371a5a_LG.jpg"   
];

var currentIndex = 1;

function next(){
    changeBackground(currentIndex);
    if (currentIndex >= images.length-1) {
        currentIndex = 0;
    }
    else{
        currentIndex++;
    }
}

function previous(){
    changeBackground(currentIndex);
    if (currentIndex <= 0) {
        currentIndex = images.length-1;
    }
    else{
        currentIndex--;
    }
}

function changeBackground(index) {
    var element = document.getElementById("myElement");
    var element1= document.getElementById("myElement1");
    
    // Create an image element
    var img = new Image();
    img.src = images[index];
    element.style.backgroundImage = "url('" + img.src + "')";

    var spans = element1.getElementsByTagName("span");
    
    // Update the text of each span
    spans[0].textContent = "0"+(index+1);
    // spans[1].textContent = "New Text 2";
    spans[2].textContent = "0"+images.length;
}


function scrollContainer(offset) {
    const container = document.querySelector('.middle-third-img');
    container.scrollLeft += offset; // Increment or decrement scrollLeft property
}
