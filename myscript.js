var reg = "blockchain technology|block chain technology|blockchain tech|block chain tech"

document.body.innerHTML = document.body.innerHTML.replace(new RegExp("("+ reg + ")", "gi"), "Bitcoin");
