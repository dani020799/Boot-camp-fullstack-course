
const posts = [
    {
        name: "Uncle Jerome",
        text: "Happy birthday kido!"
    },
    {
        name: "BFF Charlene",
        text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD"
    },
    {
        name: "Old High School Teacher",
        text: "Hey ace, have a good one."
    }
];


const render = function() {
    
    $("#posts-container").empty();
    
    
    for (let post of posts) {
        let postHTML = `
            <div class="post">
                <strong>${post.name}:</strong> ${post.text}
            </div>
        `;
        $("#posts-container").append(postHTML);
    }
};


$("#post-button").on("click", function() {
   
    const name = $("#name-input").val();
    const text = $("#text-input").val();
    
    posts.push({
        name: name,
        text: text
    });
      
    $("#name-input").val("");
     $("#text-input").val("");
    
     render();
});


render();