loadJSON(myData);

function loadJSON(success){
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
        success(JSON.parse(req.responseText));
    }
    };

    req.open("GET", "https://api.jsonbin.io/v3/b/63626fae65b57a31e6aaa6a6?meta=false>", true);
    req.send();
}

function myData(Data) {
    //all of data with metadata
    console.log(Data)
    //all of data without metadata
    console.log(Data.record);
}

function myData(Data) {
    //all of data with metadata
    console.log(Data)
        //all of data without metadata
    console.log(Data.record);
}

var a_parent = document.querySelectorAll(".picture");
var dd_menu_a = document.querySelectorAll(".dd_menu_item");

a_parent.forEach(function(aitem) {

    aitem.addEventListener("click", function() {
        a_parent.forEach(function(aitem) {
            aitem.classList.remove("active");
        })
        dd_menu_a.forEach(function(dd_menu_item) {
            dd_menu_item.classList.remove("active");
        })
        aitem.classList.add("active");
    })
})

dd_menu_a.forEach(function(dd_menu_item) {

    dd_menu_item.addEventListener("click", function() {
        dd_menu_a.forEach(function(dd_menu_item) {
            dd_menu_item.classList.remove("active");
        })
        dd_menu_item.classList.add("active");
    })
})
