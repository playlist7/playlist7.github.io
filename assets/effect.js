$(document).ready(function(){
        $(".content__list-member").hide()
        $(".content__btn-member").click(function(){
            $(".content__list-member").toggle(1000)
        })
        $(".gif, .gif2").hide()
        $(".firework").hide()
        $(".content__btn-end").click(function(){
            $(".firework").toggle()
            $(".gif2").show(500)
        })
  });
