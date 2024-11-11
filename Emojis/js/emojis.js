var stars = document.getElementsByClassName("fas");
var emoji = document.getElementById("emoji");

// Establecer emoji de "manos en cara" por defecto
var emojiImg = document.createElement("img");  
emojiImg.src = "https://raw.githubusercontent.com/twitter/twemoji/master/assets/72x72/1f926.png";  
emoji.appendChild(emojiImg);  // Insertar la imagen de "manos en cara" en el contenedor

stars[0].onclick = function() {
    
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#e4e4e4";
    stars[2].style.color = "#e4e4e4";
    stars[3].style.color = "#e4e4e4";
    stars[4].style.color = "#e4e4e4";

  
    emoji.innerHTML = '';  
    emojiImg.src = "https://raw.githubusercontent.com/twitter/twemoji/master/assets/72x72/1f622.png";  
    emoji.appendChild(emojiImg);  // Insertar la nueva imagen
};

stars[1].onclick = function() {
   
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#e4e4e4";
    stars[3].style.color = "#e4e4e4";
    stars[4].style.color = "#e4e4e4";
   
    emoji.innerHTML = '';  
    emojiImg.src = "https://raw.githubusercontent.com/twitter/twemoji/master/assets/72x72/1f61e.png"; 
    emoji.appendChild(emojiImg);  // Insertar la nueva imagen
};

stars[2].onclick = function() {
    
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#ffd93b";
    stars[3].style.color = "#e4e4e4";
    stars[4].style.color = "#e4e4e4";

    
    emoji.innerHTML = '';  
    emojiImg.src = "https://raw.githubusercontent.com/twitter/twemoji/master/assets/72x72/1f610.png";  
    emoji.appendChild(emojiImg);  // Insertar la nueva imagen
};

stars[3].onclick = function() {
    
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#ffd93b";
    stars[3].style.color = "#ffd93b";
    stars[4].style.color = "#e4e4e4";

   
    emoji.innerHTML = '';  
    emojiImg.src = "https://raw.githubusercontent.com/twitter/twemoji/master/assets/72x72/1f60a.png";  
    emoji.appendChild(emojiImg);  // Insertar la nueva imagen
};

stars[4].onclick = function() {
    
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#ffd93b";
    stars[3].style.color = "#ffd93b";
    stars[4].style.color = "#ffd93b";

   
    emoji.innerHTML = ''; 
    emojiImg.src = "https://raw.githubusercontent.com/twitter/twemoji/master/assets/72x72/1f60d.png";  
    emoji.appendChild(emojiImg);  // Insertar la nueva imagen
};
