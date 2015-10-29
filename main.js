var question_list = [
    {'label_1': '1', 'label_2': 'un'},
    {'label_1': '2', 'label_2': 'deux'},
    {'label_1': '3', 'label_2': 'trois'},
    {'label_1': '4', 'label_2': 'quatre'},
    {'label_1': '5', 'label_2': 'cinq'},
    {'label_1': '6', 'label_2': 'six'},
    {'label_1': '7', 'label_2': 'sept'},
    {'label_1': '8', 'label_2': 'huit'},
    {'label_1': '9', 'label_2': 'neuf'},
    {'label_1': '10', 'label_2': 'dix'},
    {'label_1': '11', 'label_2': 'onze'},
    {'label_1': '12', 'label_2': 'douze'},
    {'label_1': '13', 'label_2': 'treize'},
    {'label_1': '14', 'label_2': 'quatroze'},
    {'label_1': '15', 'label_2': 'quinze'},
    {'label_1': '16', 'label_2': 'seize'},
    {'label_1': '17', 'label_2': 'dix-sept'},
    {'label_1': '18', 'label_2': 'dix-huit'},
    {'label_1': '19', 'label_2': 'dix-neuf'},
    {'label_1': '20', 'label_2': 'vingt'},
    {'label_1': '21', 'label_2': 'vingt et un'},
    {'label_1': '22', 'label_2': 'vingt-deux'},
    {'label_1': '23', 'label_2': 'vingt-trios'},
    {'label_1': '24', 'label_2': 'vingt-quatre'},
    {'label_1': '25', 'label_2': 'vingt-cinq'},
    {'label_1': '26', 'label_2': 'vingt-six'},
    {'label_1': '27', 'label_2': 'vingt-sept'},
    {'label_1': '28', 'label_2': 'vingt-huit'},
    {'label_1': '29', 'label_2': 'vingt-neuf'},
    {'label_1': '30', 'label_2': 'trente'},
    {'label_1': '31', 'label_2': 'trente et un'},
    {'label_1': '32', 'label_2': 'trente-deux'},
    {'label_1': '33', 'label_2': 'trente-trois'},
    {'label_1': '34', 'label_2': 'trente-quatre'},
    {'label_1': '35', 'label_2': 'trente-cinq'},
    {'label_1': '36', 'label_2': 'trente-six'},
    {'label_1': '37', 'label_2': 'trente-sept'},
    {'label_1': '38', 'label_2': 'trente-huit'},
    {'label_1': '39', 'label_2': 'trente-neuf'},
    {'label_1': '40', 'label_2': 'quarante'},
    {'label_1': '41', 'label_2': 'quarante et un'},
    {'label_1': '42', 'label_2': 'quarante-deux'},
    {'label_1': '43', 'label_2': 'quarante-trois'},
    {'label_1': '44', 'label_2': 'quarante-quatre'},
    {'label_1': '45', 'label_2': 'quarante-cinq'},
    {'label_1': '46', 'label_2': 'quarante-six'},
    {'label_1': '47', 'label_2': 'quarante-sept'},
    {'label_1': '48', 'label_2': 'quarante-huit'},
    {'label_1': '49', 'label_2': 'quarante-neuf'},
    {'label_1': '50', 'label_2': 'cinquante'},
];

var app = app || {};
app = (function(module, $, question_list) {
    var question = null;

    function answerProcessing(value) {
        var $answer_card = $('#templates .block').clone();

        $answer_card.find('.header').html(question.question);
        if (question.answer == value) {
            console.log('Correct answer.');
            $answer_card.addClass('status-correct');
            $answer_card.find('.answer')[0].innerHTML = value;
            $answer_card.find('.footer')[0].innerHTML = "";
            
        } else {
            console.log('Incorrect answer. Correct: ' + question.answer);
            $answer_card.addClass('status-wrong');
            $answer_card.find('.answer')[0].innerHTML = value;
            $answer_card.find('.footer')[0].innerHTML += question.answer;

        }
        
        $("#question-block").after($answer_card);
        question = getNewQuestion(question_list);
        showQuestion();
    }

    function showQuestion() {
        var $cont = $('#question-container');
        var $answer_input = $('#answer_input');

        $cont.text(question.question);
        $answer_input.val('');
    }

    function initForm(id, submitCallback) {
        var $form = $('#' + id);
        if ($form.length > 0) {

            $form.on('submit', function(event) {
                event.preventDefault();
                
                var answer_input = $('#answer_input');
                if (answer_input.length > 0) {
                    submitCallback(answer_input.val());
                } else {
                    console.log('Input doesn\'t exists.');
                }
            });
        }
    }

    function getNewQuestion(question_list) {
        if (question_list === null || question_list.length === 0) {
            console.warn('Question list is empty.');
            return null;
        }

        var choosen_id = Math.floor(Math.random() * question_list.length);
        var choosen_order = Math.round(Math.random());

        if (choosen_order === 1) {
            return {
                'question' : question_list[choosen_id].label_2,
                'answer' : question_list[choosen_id].label_1
            };
        }
        return {
            'question' : question_list[choosen_id].label_1,
            'answer' : question_list[choosen_id].label_2
        };
    }

    module.init = function(formId) {
        initForm(formId, function(value){ answerProcessing(value) });
        question = getNewQuestion(question_list);
        showQuestion();
    }

    return module;
}(app, jQuery, question_list));

app.init('answer_form');