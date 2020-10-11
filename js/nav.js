//导航栏
var ul = document.getElementsByTagName("ul");
var li = document.getElementsByTagName("li")
for (var i = 0; i < li.length; i++) {
    li[i].onclick = function() {
        this.classList.add("li_")
        for (var i = 0; i < li.length; i++) {
            if (li[i] != this) {
                li[i].classList.remove("li_")
            }
        }
    }
}