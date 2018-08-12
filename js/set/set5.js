 function playPeste()
{
   var audio = document.getElementById("audioPeste");
   audio.play();
}
function playBroasca()
{
   var audio = document.getElementById("audioBroasca");
   audio.play();
}
function playCana()
{
   var audio = document.getElementById("audioCana");
   audio.play();
}

function playPisica()
{
   var audio = document.getElementById("audioPisica");
   audio.play();
}

function playSarpe()
{
   var audio = document.getElementById("audioSarpe");
   audio.play();
}

function playCopac()
{
   var audio = document.getElementById("audioCopac");
   audio.play();
}

function playBanana()
{
   var audio = document.getElementById("audioBanana");
   audio.play();
}
    function playSoarece()
{
   var audio = document.getElementById("audioSoarece");
   audio.play();
}


$(document).ready(function(){
    var firstClick, secondClick;

    $(".left").on('click', function(){
        if(firstClick == undefined)
        {
            firstClick = $(this).attr('attr-letter');
        }
        else
        {
            alert("selecteaza te rog din coloana din dreapta")
        }
    })

    $(".right").on('click', function(){
        if(secondClick == undefined)
        {
            secondClick = $(this).attr('attr-letter');
        }

        if(firstClick === secondClick)
        {
            alert("Bun");
            firstClick = undefined;
            secondClick = undefined;
        }
        else
        {
            alert("mai incearca");
            secondClick = undefined;
        }


    })
})