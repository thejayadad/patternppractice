
for (let i = 0; i < 7; i++){
    for (let j = 0; j < 3; j++){
        if (j==0 || j == i + 1 || i + j ==4){
            document.write(" X")
        } else {
            document.write(" &nbsp ")
        }
    }
    document.write("<br/>")
}