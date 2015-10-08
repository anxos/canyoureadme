
$(document).ready(function(){
    /* lang functionality */
    var CONSTANTS = {
        'glMainTitle':'Pódesme ler?',
'enMainTitle':'Can you read me?',
'glTitle':'Pdóesme ler?',
'enTitle':'Can you raed me?',
'glIntro':'Dacordo cun investigador da Universidade De Cambridge, non importa a orde das letras nunha palabra. O único importante é que a primeira e a derradeira letra estean no sitio correcto.',
'enIntro':"According to a researcher at Cambridge University, it doesn't matter in what order the letters in a word are, the only important thing is that the first and last letter be at the right place.",
'glTextHelper':'Escribe o teu texto aquí',
'enTextHelper':'Write your text here',
'glButton':'embarullar!',
'enButton':'jumble!',
'glTextarea':'Docardo cun ivnetsidagor da Udiianvdsere De Cagrmidbe, non irpmtoa a odre das letras nhnua plraaba. O único irtamponte é que a primreia e a dirrredaea letra easten no sitio corrceto',
'enTextarea':"Accondrig to a rsceeraher at Cmabrdige Uviintrsey , it dsneo't mtater in what oderr the lreetts in a word are, the only inpmtoart tnhig is that the first and lsat ltteer be at the right plcae",
'glFirefox':'Eu recomendo ',
'enFirefox':'I recommend ',
'glImageCredit':'Imaxe de Fondo ',
'enImageCredit':'Background image ',
'glTwitter':'Feito por ',
'enTwitter':'Made by ',
'glErase': 'borrar',
'enErase':'erase'
    };

    /* change to galician */
    $('#gl-btn').click(function(){
        $('html').attr('lang','gl');
        $('title').text(CONSTANTS.glMainTitle);
        $('h1').text(CONSTANTS.glTitle);
        $('#quote').text(CONSTANTS.glIntro);
        $('span#text-helper').text(CONSTANTS.glTextHelper);
        $('#submit-btn').text(CONSTANTS.glButton);
        $('textarea').val(CONSTANTS.glTextarea);
        $('span#firefox').text(CONSTANTS.glFirefox);
        $('span#image-credit').text(CONSTANTS.glImageCredit);
        $('span#twitter-handle').text(CONSTANTS.glTwitter);
        $('button#erase-btn').text(CONSTANTS.glErase);
    });
    /* change to english */
    $('#en-btn').click(function(){
        $('html').attr('lang','en');
        $('title').text(CONSTANTS.enMainTitle);
        $('h1').text(CONSTANTS.enTitle);
        $('#quote').text(CONSTANTS.enIntro);
        $('span#text-helper').text(CONSTANTS.enTextHelper);
        $('#submit-btn').text(CONSTANTS.enButton);
        $('textarea').val(CONSTANTS.enTextarea); 
        $('span#firefox').text(CONSTANTS.enFirefox);
        $('span#image-credit').text(CONSTANTS.enImageCredit);
        $('span#twitter-handle').text(CONSTANTS.enTwitter);
        $('button#erase-btn').text(CONSTANTS.enErase);

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


    /* clean textarea */
    $('button#erase-btn').click(function(){
        $('textarea').val('');   
    });

    /* submit text */
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
