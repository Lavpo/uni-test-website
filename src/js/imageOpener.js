function toggleImage(){
    let img = document.getElementById("btnimg");
    
    const images = [
        "src/images/S3/hands1.jpg",
        "src/images/S3/handg2.jpg",
        "src/images/S3/hands3.jpg",
        "src/images/S3/hands4.jpg",
        "src/images/S3/hands5.jpg",
        "src/images/S3/jesus.jpg",
        "src/images/S3/buddha.jpg",
        "src/images/S3/free.jpg"
    ];

    console.log("test1");
    if (!img) return;
    let randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
    console.log("test2");
}