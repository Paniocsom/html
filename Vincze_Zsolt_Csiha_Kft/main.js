$(document).ready(function() {
    $('#nav1').click(function(){
        $('#nav1').addClass("active");
        $('#nav2').removeClass("active");
        $('#nav3').removeClass("active");
    });
    $('#nav2').click(function(){
        $('#nav2').addClass("active");
        $('#nav1').removeClass("active");
        $('#nav3').removeClass("active");
    }); 
    $('#nav3').click(function(){
        $('#nav3').addClass("active");
        $('#nav1').removeClass("active");
        $('#nav2').removeClass("active");
    });
    $('#submitButton').click(function(){
        alert("Message sent!");
    });
});

window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('toTopBtn').style.display = "block";
    } else {
        document.getElementById('toTopBtn').style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}   