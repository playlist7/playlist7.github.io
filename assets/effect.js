$(document).ready(function(){
        $(".content__list-member").hide()
        $(".content__btn-member").click(function(){
            $(".content__list-member").toggle(1000)
        })
        $(".gif, .gif2").hide()
        $(".song[data-index='0'], .btn-toggle-play").click(function(){
            $(".gif").show(500)
        })
        $(".song[data-index!='0']").click(function(){
            $(".gif").hide(500)
        })
        $(".firework").hide()
        $(".content__btn-end").click(function(){
            $(".firework").toggle()
            $(".gif2").show(500)
        })
  });