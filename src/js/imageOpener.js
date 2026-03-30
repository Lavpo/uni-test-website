(function (){
    let key = "SessionKey";
    let count = 0;
    let img = document.getElementById("btnimg");

    if (sessionStorage.getItem(key) === "1") {
        img.src = "src/images/S3/smoke.gif";
    };

    document.getElementById("btn").addEventListener("click", () =>{

        count++; 

        if (count === 15){
            sessionStorage.setItem(key, "1");
            img.src = "src/images/S3/smoke.gif";
        }

        console.log("key = " + sessionStorage.getItem(key));
        if (sessionStorage.getItem(key) === "1") return;

        const images = [
            "src/images/books/book1.jpg",
            "src/images/books/book2.jpg",
            "src/images/books/book3.jpg",
            "src/images/books/book4.jpg",
            "src/images/books/book5.jpg",
            "src/images/books/book6.jpg",
        ];

        if (!img) return;
        let randomIndex = Math.floor(Math.random() * images.length);
        img.src = images[randomIndex];
    });
})();