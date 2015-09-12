function clickSubmit(nextpage) {
    var radios = document.getElementsByName("mark1");
    var useranswer = getUserAnswer(radios);
    var question = document.getElementById("question");
    var isAnswerCorrect = (question.getAttribute("data-correct-answer") === useranswer) ? 1 : 0;
    if (question.getAttribute("data-question-type") === "quant") {
        isAnswerCorrect = typeof(QueryString.quant) === 'undefined' ? isAnswerCorrect : Number(QueryString.quant)+isAnswerCorrect;
    }
    location.href = nextpage+isAnswerCorrect;
}

function clickReset() {
    var radios = document.getElementsByName("mark1");
    radios = reset(radios);
}

function getUserAnswer(radios) {
    var useranswer;
    for (i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            useranswer = radios[i].value;
        }
    }
    return useranswer;
}

function reset(radios) {
    for (i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radios[i].checked = false;
        }
    }
    return radios;
}

var QueryString = function () {
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = decodeURIComponent(pair[1]);
        } else if (typeof query_string[pair[0]] === "string") {
            var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
            query_string[pair[0]] = arr;
        } else {
            query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
    }
    return query_string;
}();


function displayOptions(optionsId, visib) {
    document.getElementById(optionsId).style.visibility = visib;
}

function clickDualSubmit() {

 var radios = document.getElementsByName("mark1");
 var useranswer1 = getUserAnswer(radios);
 var radios = document.getElementsByName("mark2");
 var useranswer2 = getUserAnswer(radios);
 var question1 = document.getElementById("options1");
 var question2 = document.getElementById("options2");
 var isAnswerCorrect = (question1.getAttribute("data-correct-answer") === useranswer1
     &&  question2.getAttribute("data-correct-answer") === useranswer2) ? 1 : 0;
 location.href='./Video.html'+window.location.search+'&verb='+isAnswerCorrect;
}

function clickDualReset() {
 var radios1 = document.getElementsByName("mark1");
 radios1 = reset(radios1);
 radios2 = document.getElementsByName("mark2");
 radios2 = reset(radios2);
 displayOptions('options1', 'hidden');
 displayOptions('options2', 'hidden');
}

function getScore() {
    location.href = './ScoreCard.html'+window.location.search;
}

function clickFinish() {
    location.href = './index.html'
}
