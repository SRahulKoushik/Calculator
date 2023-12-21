function dis(val) {
    if (!val.includes("$")) val = "$" + val;
    document.getElementById("result").value =
        val.replace("$", document.getElementById("result").value); 
}

function solve() { 
    let x = document.getElementById("result").value.replace(/[a-z]+/g, "Math.$&");
    let y = eval(x) 
    document.getElementById("result").value = y 
} 

function clr() {
    document.getElementById("result").value = ""
}
