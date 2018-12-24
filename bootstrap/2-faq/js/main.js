$(document)
let napis = document.getElementsByClassName("orange");
let przypisanie = document.getElementsByClassName("proba")[0];
let przypisanie1 = document.getElementsByClassName("proba")[1];
let przypisanie2 = document.getElementsByClassName("proba")[2];
napis = Array.from(napis);
napis.forEach((element, index) => {
    element.addEventListener("click", (e) => {
        let paragraf = document.createElement("p");
        let tekstParagrafu = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, qui assumenda repellendus ad distinctio praesentium nihil, maiores eaque adipisci minus beatae repudiandae quo nesciunt. Sunt repellendus hic architecto corrupti iure, illo, ut eos expedita quisquam ullam quasi. Voluptates illum quasi aliquam quisquam? Libero deleniti nobis illo quae quo officia animi.");
        paragraf.style.backgroundColor="white";
        paragraf.style.borderBottom="1px solid #b8b894";
        paragraf.style.marginBottom="0px";
        paragraf.setAttribute("class", "szary");
        paragraf.appendChild(tekstParagrafu);
        if (index === 0){
            przypisanie.after(paragraf);

        }
        if (index === 1) {
            przypisanie1.after(paragraf);
        }
        if (index === 2) {
            przypisanie2.after(paragraf);
        }
    });

});
