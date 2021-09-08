const adversario = "ironMan"

const LOKI_DISFRAZ = {
    ironMan: "thanos",
    Thor: "Odin",
    Hulk: "SpiderMan",
    Wolverine: "Magneto"
}

const LOKI_DEFAULT = "loki"



//HASH TABLE//

//const loki = LOKI_DISFRAZ [adversario] || LOKI_DEFAULT
//const loki = lokiDisfraz[adversario] ? lokiDisfraz[adversario] : lokiDefault



//FUCTION DE LOKI (con hash table)//

const lokiEnemis = (lokiDisfraz, enemigo) =>{

    //return lokiDisfraz [enemigo] || LOKI_DEFAULT 

    let loki = lokiDisfraz [enemigo] || LOKI_DEFAULT 
    return loki
}
console.log (lokiEnemis(LOKI_DISFRAZ, adversario))





//IF DE LOKI//

/*if (adversario == "ironMan") {
    loki = "Thanos"
}
else if(adversario == "Thor"){
    loki = "Odin"
}
else if (adversario == "Hulk"){
    loki = "SpiderMan"
}
else if (adversario == "Wolverine"){
    loki = "Magneto"
}*/



//SWITCH DE LOKI//

/*switch (adversario){
    case "ironMan":
        loki = "Thanos"
        break;

    case "Thor":
        loki = "Odin"
        break;

    case "Hulk":
        loki = "SpiderMan"
        break;

    case "Wolverine":
        loki = "Magnaeto"
        break;

    default:
        loki = loki
        break;
}*/



