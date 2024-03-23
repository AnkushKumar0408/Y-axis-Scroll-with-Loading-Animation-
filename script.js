let tl = gsap.timeline()

function time(){
    var a = 0
    setInterval(function(){
        a += Math.floor(Math.random()*15)
        if(a<100){
            document.querySelector("#loader h1").innerHTML = a+"%"
        }
        else{
            a=100
            document.querySelector("#loader h1").innerHTML = a+"%"
        }
        
    },150)
}

tl.to("#loader h1",{
    delay : .5,
    duration : 1.5,
    onStart : time()
})

tl.to("#loader",{
    top : "-100vh",
    delay : .5,
    duration : 2
})

tl.to("#page1 h1",{
    transform : "translateX(-400%)",
    fontWeight : "100",
    scrollTrigger : {
        trigger : "#page1",
        scroller : "body",
        // markers : true,
        start : "top 0",
        end : "top -1000%",
        scrub : 3,
        pin : true
    }
})
