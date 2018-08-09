$(function(){
    networking({
        url:"./plugs/data.json",
        success:function (response) {
            $('.friend').html(`
                <p class="btn-friend btn">好友<span class='firss'></span></p>
                <ul class = "people-friend people">
                    <li>
                        <img src="${response.a.head}">
                        <h3>${response.a.name}<span>(${response.a.state})</span></h3>
                        <p>${response.a.style}</p>
                    </li>
                    <li>
                        <img src="${response.b.head}">
                        <h3>${response.b.name}<span>(${response.b.state})</span></h3>
                        <p>${response.b.style}</p>
                    </li>
                    <li>
                        <img src="${response.c.head}">
                        <h3>${response.c.name}<span>(${response.c.state})</span></h3>
                        <p>${response.c.style}</p>
                    </li>
                </ul>
            `)
            $('.workmate').html(`
                <p class="btn-workmate btn">同事<span class='worss'></span></p>
                <ul class = "people-workmate people">
                    <li>
                        <img src="${response.d.head}">
                        <h3>${response.d.name}<span>(${response.d.state})</span></h3>
                        <p>${response.d.style}</p>
                    </li>
                    <li>
                        <img src="${response.e.head}">
                        <h3>${response.e.name}<span>(${response.e.state})</span></h3>
                        <p>${response.e.style}</p>
                    </li>
                    <li>
                        <img src="${response.f.head}">
                        <h3>${response.f.name}<span>(${response.f.state})</span></h3>
                        <p>${response.f.style}</p>
                    </li>
                </ul>
            `)
            $('.family').html(`
                <p class='btn-family btn'>家人<span class='famss'></span></p>
                <ul class = "people-family people">
                    <li>
                        <img src="${response.g.head}">
                        <h3>${response.g.name}<span>(${response.g.state})</span></h3>
                        <p>${response.g.style}</p>
                    </li>
                    <li>
                        <img src="${response.h.head}">
                        <h3>${response.h.name}<span>(${response.h.state})</span></h3>
                        <p>${response.h.style}</p>
                    </li>
                    <li>
                        <img src="${response.i.head}">
                        <h3>${response.i.name}<span>(${response.i.state})</span></h3>
                        <p>${response.i.style}</p>
                    </li>
                </ul>
            `)

            var fir = patch('在线', $('.friend li').text()),
                firs = patch('离线', $('.friend li').text());
            $('.firss').text(fir+"/"+(fir+firs));
            var wor = patch('在线', $('.workmate li').text()),
                worss = patch('离线', $('.workmate li').text());
            $('.worss').text(wor+"/"+(wor+worss));
            var fam = patch('在线', $('.family li').text()),
                famss = patch('离线', $('.family li').text());
            $('.famss').text(fam+"/"+(fam+famss));
            function patch(re,s){
            re=eval("/"+re+"/ig")
            return s.match(re).length;
            }


            $('.btn').on('click',(e)=>{
                $(e.target.nextElementSibling).slideToggle('slow','linear',()=>{

                })
            })
        }
    });


    $('.add').on('click',()=>{
        $('form').css({
            display:'block'
        })
        $('.add').css({
            display:'none'
        })
    })
    $('.add-group').on('click',()=>{
        $('main').append(`
            <div>${$('.group-name').val()}</div>
        `)
        $('form').css({
            display:"none"
        })
        $('form input').val('');
        $('.add').css({
            display:"block"
        })
    })
});