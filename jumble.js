
$(document).ready(function(){
    /* lang functionality */
    var CONSTANTS = {
        'glTitle':'Pódesme ler?',
'enTitle':'Can you read me?',
'glIntro':'Dacordo cun investigador da Universidade De Cambridge, non importa a orde das letras nunha palabra. O único importante é que a primeira e a derradeira letra estean no sitio correcto.',
'enIntro':"According to a researcher at Cambridge University, it doesn't matter in what order the letters in a word are, the only important thing is that the first and last letter be at the right place.",
'glTextHelper':'Escribe o teu texto aquí',
'enTextHelper':'Write your text here',
'glButton':'embarullar!',
'enButton':'jumble!'
    };

    /* change to galician */
    $('#gl-btn').click(function(){
        $('html').attr('lang','gl');
        $('h1').text(CONSTANTS.glTitle);
        $('#quote').text(CONSTANTS.glIntro);
        $('#text-helper').text(CONSTANTS.glTextHelper);
        $('#submit-btn').text(CONSTANTS.glButton);
    });
    /* change to english */
    $('#en-btn').click(function(){
        $('html').attr('lang','en');
        $('h1').text(CONSTANTS.enTitle);
        $('#quote').text(CONSTANTS.enIntro);
        $('#text-helper').text(CONSTANTS.enTextHelper);
        $('#submit-btn').text(CONSTANTS.enButton);
    });

    /* jumble text functionality */

    function jumbleText(text) {
        //split text
        var jumbleArray = text.split(" ");
        var newArray = [];
        $.each(jumbleArray, function(index,el){
            if(el.length > 3) {
                // exclude first and last from shuffling
                var toJumble = el.substr(1, el.length-2);
                // shuffle word
                var shuffled =  shuffleWord(toJumble);
                var w  = el.substr(0,1)+shuffled+el.substr(el.length-1,el.length);
                newArray.push(w);
            } else {
                newArray.push(el);
            }
        });

        //shuffled text
        return(newArray.join(' '));
    };

    function shuffleWord(word) {
        //split to char array
        var wordArray = word.split("");
        wordArray.sort(function(){ return 0.5 - Math.random()});
        return(wordArray.join(''));
    };

    $('#submit-btn').click(function(){
        //get text
        var text = $('textarea').val();
        //sanitize -> no need using val()?
        //jumble
        var jumble = 'JUMBLED TEXT';
        jumble = jumbleText(text);
        //set jumbled text
        $('textarea').val(jumble);
    });
});
