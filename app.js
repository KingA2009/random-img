let img_1 = "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg"
let img_2 = "https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/4:3/pass/gettyimages-1146431497.jpg"
let img_3 = "https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265299.jpg"
let img_4 = "https://img.freepik.com/premium-photo/mountains-during-flowers-blossom-sunrise-flowers-mountain-hills-beautiful-natural-landscape-summer-time-mountainimage_647656-1502.jpg?w=2000"

document.getElementById("btn").addEventListener("click", my)

function my() {
    let b = Math.floor(Math.random() * 4)
    switch (b) {
        case 0:
            document.getElementById("img").src = img_1
            break
        case 1:
            document.getElementById("img").src = img_2
            break
        case 2:
            document.getElementById("img").src = img_3
            break
        case 3:
            document.getElementById("img").src = img_4
            break
        case 4:
            document.getElementById("img").src = "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000"
    }
}