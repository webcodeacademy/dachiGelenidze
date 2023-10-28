const nav = ["Home", "Gallery", "About", "Contact"] ;

const link = ["index.html", "gallery.html", "about.html", "contact.html" ]

let navtext = '<ul class="flex">'

for (i=0; i <nav.length; i++ ) {
    navtext +='<li><a href="'+ link[i] +'">' + nav[i] + "</a></li>";

console.log(navtext);
}
navtext+= "</ul>";


document.getElementById("nav").innerHTML = navtext;

document.addEventListener("click", function(e) {
    if (e.target.tagName == "A" &&
            !e.target.hasAttribute("target"))
    {
        e.target.setAttribute("target", "_blank");
    }
}); 