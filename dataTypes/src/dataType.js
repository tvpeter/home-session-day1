function dataTypes(da) {
    var da = da;
    if (typeof da === "string"){
        return da.length
    } else if(typeof da === "number"){
        if( da == 100){
            return "equal to 100"
        }else if(da <100){ return "less than 100"
    }else { return "more than 100" }

    } else if(typeof da === "boolean"){
        if (da == true){
            return true
        } else {return false}
    }else if (da instanceof Function){
        da = true;
        return "called callback"
    } else if (da instanceof Array){
        return da[2]
    }else { return "no value"}
}
