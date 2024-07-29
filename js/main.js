$(function(){
    $('.swiper-button-stop').click(function(){
        $(this).toggleClass('stop')
        $('.swiper-button-go').toggleClass('play')
    })

    // 퀵메뉴
    $('.quick li:last').click(function(e){
        e.preventDefault()
        $('html').animate({
            scrollTop: '0'
        },1000)
    })
    $(window).scroll(function(){
        if($(this).scrollTop() >= 200 && $(this).scrollTop() <= 4200){
            $('.quicksection').addClass('on')
            $('header').addClass('on')
        }
        else {
            $('.quicksection').removeClass('on')
            $('header').removeClass('on')
        }
    })
    // 팝업창
    $('.allmenu').click(function(e){
        e.preventDefault()
        $('.popupbox').stop().fadeIn(500)
        $('body').css({
            'overflow': 'hidden'
        })
    })
    $('.close').click(function(e){
        e.preventDefault()
        $('.popupbox').stop().fadeOut(500)
        $('body').css({
            'overflow': 'visible'
        })
    })

    // 탭메뉴
    $('.listbox > *:gt(0)').hide()
    $('.smalltitle li').click(function(){
        $('.smalltitle li').removeClass('on')
        $(this).addClass('on')

        let idx = $(this).index()
        $('.listbox > *').hide()
        $('.listbox > *').eq(idx).show()
    })
    //공유탭머뉴

    $('.sharetab li').click(function(e){
        e.preventDefault()
        $('.sharetab li').removeClass('on')
        $(this).addClass('on')

        let shareidx = $(this).index()
        $('.sharesection > *').hide()
        $('.swiper-button-next').show()
        $('.swiper-button-prev').show()
        $('.sharesection > *').eq(shareidx).show()
    })
    // footer 버튼
    $('.bottomright .button').click(function(){
        $('.button .buttonlist').toggleClass('on')
        $('.changebutton').toggleClass('on')
    })
})


// window.addEventListener('scroll', function(){
//     console.log(window.scrollY)
// })