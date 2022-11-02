//loadJSON(myData);
loadLocalJSON();

function loadJSON(){
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
        myData(JSON.parse(req.responseText).record.posts);
    }
    };

    req.open("GET", "https://api.jsonbin.io/v3/b/63626fae65b57a31e6aaa6a6?meta=false>", true);
    req.send();
}

function loadLocalJSON() {
    fetch("http://localhost:3000/posts")
        .then(res => res.json())
        .then(data => myData(data))
}

function myData(posts) {
    var main = document.getElementsByTagName("main")
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i]

        var article = document.createElement("article");
        var ul = document.createElement("ul");
        ul.className="articleHeader"

        var profile = document.createElement("li");
        var profilePic = document.createElement("img");
        profilePic.src="res/images/user.png"
        profilePic.width=40
        profilePic.height=40
        profile.appendChild(profilePic)

        var date = document.createElement("li");
        const dateData = post.createTime
        var dateText = document.createTextNode(dateData.substring(11,16) + " " + dateData.substring(0, 10))
        date.appendChild(dateText)

        ul.appendChild(profile)
        ul.appendChild(date)
        article.appendChild(ul)

        var message = document.createElement("div")
        var messageText = document.createTextNode(post.body)
        message.appendChild(messageText)
        article.appendChild(message)

        if (post.picture!="") {
            var postPicture = document.createElement("img");
            postPicture.src=post.picture
            postPicture.maxWidth="100%"
            postPicture.maxHeight="100%"
            article.appendChild(postPicture)
        }

        var likeButton = document.createElement("img");
        likeButton.src="res/images/like.png"
        likeButton.width=40
        likeButton.height=40
        article.appendChild(likeButton)

        main[0].appendChild(article)
    }
}
