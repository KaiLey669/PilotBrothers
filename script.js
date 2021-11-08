const btnRefresh = document.querySelector(".refresh_button");
const rings = document.querySelectorAll(".ring");
const label = document.querySelector(".label");

let firstArr = new Array();
for (let i = 0; i < 4; i++){
    firstArr[i] = rings[i];
}

let secondArr = new Array();
for (let i = 0; i < 4; i++){
    secondArr[i] = rings[i + 4];
}

let thirdArr = new Array();
for (let i = 0; i < 4; i++){
    thirdArr[i] = rings[i + 8];
}

let forthArr = new Array();
for (let i = 0; i < 4; i++){
    forthArr[i] = rings[i + 12];
}

let ringsArr = new Array(firstArr, secondArr, thirdArr, forthArr);

for (let i = 0; i < ringsArr.length; i++){
    for (let j = 0; j < ringsArr[i].length; j++){
        ringsArr[i][j].addEventListener("click", () => {
            for (let t = 0; t < ringsArr.length; t++){
                if (ringsArr[t][j].style.backgroundColor != "black"){
                    ringsArr[t][j].style.backgroundColor = "black";
                }
                else {
                    ringsArr[t][j].style.backgroundColor = "gainsboro";
                }
            }

            for(let t = 0; t < ringsArr[i].length; t++){
                if(j == t){
                    continue;
                }

                if (ringsArr[i][t].style.backgroundColor != "black"){
                    ringsArr[i][t].style.backgroundColor = "black";
                }
                else {
                    ringsArr[i][t].style.backgroundColor = "gainsboro";
                }
            }

            if (checkRings()){
                label.innerText = "Well done!";
                paint();
            }   
        })
    }
}

btnRefresh.addEventListener("click", () => { refresh(); })

function refresh(){
    for (let i = 0; i < ringsArr.length; i++){
        for (let j = 0; j < ringsArr[i].length; j++){
            if (ringsArr[i][j].style.backgroundColor != "gainsboro"){
                ringsArr[i][j].style.backgroundColor = "gainsboro";
            }
        }
    }

    label.innerText = "";
}

function checkRings(){

    for (let i = 0; i < ringsArr.length; i++){
        for (let j = 0; j < ringsArr[i].length; j++){
            if (ringsArr[i][j].style.backgroundColor != "black"){
                return false;
            }
        }
    }

    return true;
}

function paint(){
    for (let i = 0; i < ringsArr.length; i++){
        for (let j = 0; j < ringsArr[i].length; j++){
            if (ringsArr[i][j].style.backgroundColor === "black"){
                ringsArr[i][j].style.backgroundColor = "#330019";
            }
        }
    }
}