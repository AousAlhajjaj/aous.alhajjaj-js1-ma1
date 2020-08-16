// question 1

const cat = {
  complain: function () {
    console.log("Meow!");
  },
};



// question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";


// question 3


heading.style.fontSize = "2em";



// question 4

heading.classList.add("subheading");



// question 5


const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}



// question 6


const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New Paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";




// question 7


function OneFunction(list) {
    for(let i = 0; i < list.length; i++) {
        console.log(list[i].name)
    }
}
OneFunction(cats);




// question 8


function createCats(cats) {
    let finalHTML = "";

    for (let i = 0; i < cats.length; i++) {
        let catsAge = cats[i].age;
        if(!catsAge) {
            catsAge = "Age unknown";
        } 

        const finalHtml = "<div>" + listCats + "</div>";
    }
    return finalHTML;
};

createCats(cats);

catContainer.innerHTML = createCats(cats);