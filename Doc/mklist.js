function makePList() {
    playersStorage = JSON.parse(localStorage.getItem("players") || "[]");
    let playerList = playersStorage;
    ((filter.length !== 0)? playerList = filter : null);
    
    document.querySelector(".players > p").innerHTML = "";
    document.querySelector("table").innerHTML = "";//reset
    if (playerList.length !== 0) {//dont show th
        table.appendChild(thn);
        table.appendChild(ths);
    }
    for (i in playerList) {//i = 0; i < players.length; ++i
        tr = document.createElement("tr");//table row
        tdn = document.createElement("td");//table data nickName
        tds = document.createElement("td");//table data score

        tdn.innerHTML = playerList[i].nickName;
        table.appendChild(tr);
        tr.appendChild(tdn);
        tds.innerHTML = playerList[i].score;
        table.appendChild(tr);
        tr.appendChild(tds);
    }
    filter.length = 0;//set
}
