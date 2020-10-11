var located = new Vue({
    el: "#Index",
    data: { index_font: "首页" },
    methods: {
        dj1() {

            // 隐藏
            var box1 = document.getElementsByClassName("box1");
            box1[0].style.top = 50 + 'px'
            var player01 = document.getElementById("player01");
            player01.getVueInstance().play();
            player01.getVueInstance().setMuted(false);
            // 2
            // var box2 = document.getElementsByClassName("box2");
            // box2[0].style.top = -500 + 'px'
            // var player02 = document.getElementById("player02");
            // player02.getVueInstance().pause();
            // 3
            // var box3 = document.getElementsByClassName("box3");
            // box3[0].style.top = -500 + 'px'
            // var player03 = document.getElementById("player03");
            // player03.getVueInstance().pause();

        },
        dj2() {
            // 2
            var box2 = document.getElementsByClassName("box2");
            box2[0].style.top = 50 + 'px'
            var player02 = document.getElementById("player02");
            player02.getVueInstance().play()

            // 1 
            var box1 = document.getElementsByClassName("box1");
            box1[0].style.top = -500 + 'px'
            var player01 = document.getElementById("player01");
            player01.getVueInstance().pause();
            // 3
            var box3 = document.getElementsByClassName("box3");
            box3[0].style.top = -500 + 'px'
            var player03 = document.getElementById("player03");
            player03.getVueInstance().pause();
        },
        dj3() {
            // 3
            var box3 = document.getElementsByClassName("box3");
            box3[0].style.top = 50 + 'px'
            var player03 = document.getElementById("player03");
            player03.getVueInstance().play();
            // 1
            var box1 = document.getElementsByClassName("box1");
            box1[0].style.top = -500 + 'px'
            var player01 = document.getElementById("player01");
            player01.getVueInstance().pause();
            // 2
            var box2 = document.getElementsByClassName("box2");
            box2[0].style.top = -500 + 'px'
            var player02 = document.getElementById("player02");
            player02.getVueInstance().pause();
        },
        dj4() {},
        djtwo() {
            // left2
            var left_box2 = document.getElementsByClassName("left_box2");
            left_box2[0].style.display = 'none'

            // 1
            var box1 = document.getElementsByClassName("box1");
            // 2
            var box2 = document.getElementsByClassName("box2");
            // 3
            var box3 = document.getElementsByClassName("box3");
            // 1
            box1[0].style.top = 50 + 'px'
            box1[0].style.left = 200 + 'px'
            var people1 = document.getElementsByClassName("people1");
            people1[0].style.display = "inline"

            // 2
            box2[0].style.top = 50 + 'px'
            box2[0].style.left = 600 + 'px'
            var people2 = document.getElementsByClassName("people2");
            people2[0].style.display = "inline"

            // 3
            box3[0].style.top = 50 + 'px'
            box3[0].style.left = 1000 + 'px'
            var people3 = document.getElementsByClassName("people3");
            people3[0].style.display = "inline"

        }

    },
    mounted() {
        var left1_inner = document.getElementsByClassName("left1_inner");
        var win_h = document.documentElement.clientHeight - 50;
        left1_inner[0].style.height = win_h + 'px';
        var player01 = document.getElementById("player01");
        player01.getVueInstance().getVolume()
    }
})