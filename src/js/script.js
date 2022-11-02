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