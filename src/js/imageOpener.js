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
            "src/images/S3/hands1.jpg",
            "src/images/S3/handg2.jpg",
            "src/images/S3/hands3.jpg",
            "src/images/S3/hands4.jpg",
            "src/images/S3/hands5.jpg",
            "src/images/S3/jesus.jpg",
            "src/images/S3/buddha.jpg",
            "src/images/S3/free.jpg",
            "src/images/S3/Jesus2.jpg",
            "src/images/S3/happyBDay.jpg",
            "src/images/S3/smoke.jpg"
        ];

        if (!img) return;
        let randomIndex = Math.floor(Math.random() * images.length);
        img.src = images[randomIndex];
    });
})();