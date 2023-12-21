function dis(val) {
    // Treat a dollar sign as a place holder for where the already
    //    displayed expression should be put. Default is: in front 
    //    of the new value:
    if (!val.includes("$")) val = "$" + val;
    document.getElementById("result").value =
        val.replace("$", document.getElementById("result").value); 
}

function solve() { 
    // Prefix any name with `Math.`, assuming that this name is a property function
    //   of the `Math` object:
    let x = document.getElementById("result").value.replace(/[a-z]+/g, "Math.$&");
    let y = eval(x) 
    document.getElementById("result").value = y 
} 

function clr() {
    document.getElementById("result").value = ""
}

function back(val) {
    let value;
    value = val.toString().slice(0,-1);
    return value;
}