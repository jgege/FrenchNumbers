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
    {'label_1': '51', 'label_2': 'cinquante et un'},
    {'label_1': '52', 'label_2': 'cinquante-deux'},
    {'label_1': '53', 'label_2': 'cinquante-trois'},
    {'label_1': '54', 'label_2': 'cinquante-quatre'},
    {'label_1': '55', 'label_2': 'cinquante-cinq'},
    {'label_1': '56', 'label_2': 'cinquante-six'},
    {'label_1': '57', 'label_2': 'cinquante-sept'},
    {'label_1': '58', 'label_2': 'cinquante-huit'},
    {'label_1': '59', 'label_2': 'cinquante-neuf'},
    {'label_1': '60', 'label_2': 'soixante'},
    {'label_1': '61', 'label_2': 'soixante et un'},
    {'label_1': '62', 'label_2': 'soixante-deux'},
    {'label_1': '63', 'label_2': 'soixante-trois'},
    {'label_1': '64', 'label_2': 'soixante-quatre'},
    {'label_1': '65', 'label_2': 'soixante-cinq'},
    {'label_1': '66', 'label_2': 'soixante-six'},
    {'label_1': '67', 'label_2': 'soixante-sept'},
    {'label_1': '68', 'label_2': 'soixante-huit'},
    {'label_1': '69', 'label_2': 'soixante-neuf'},
    {'label_1': '70', 'label_2': 'soixante-dix'},
    {'label_1': '71', 'label_2': 'soixante et onze'},
    {'label_1': '72', 'label_2': 'soixante-douze'},
    {'label_1': '73', 'label_2': 'soixante-treize'},
    {'label_1': '74', 'label_2': 'soixante-quatorze'},
    {'label_1': '75', 'label_2': 'soixante-quinze'},
    {'label_1': '76', 'label_2': 'soixante-seize'},
    {'label_1': '77', 'label_2': 'soixante-dix-sept'},
    {'label_1': '78', 'label_2': 'soixante-dix-huit'},
    {'label_1': '79', 'label_2': 'soixante-dix-neuf'},
    {'label_1': '80', 'label_2': 'quatre-vingts'},
    {'label_1': '81', 'label_2': 'quatre-vingt-un'},
    {'label_1': '82', 'label_2': 'quatre-vingt-deux'},
    {'label_1': '83', 'label_2': 'quatre-vingt-trois'},
    {'label_1': '84', 'label_2': 'quatre-vingt-quatre'},
    {'label_1': '85', 'label_2': 'quatre-vingt-cinq'},
    {'label_1': '86', 'label_2': 'quatre-vingt-six'},
    {'label_1': '87', 'label_2': 'quatre-vingt-sept'},
    {'label_1': '88', 'label_2': 'quatre-vingt-huit'},
    {'label_1': '89', 'label_2': 'quatre-vingt-neuf'},
    {'label_1': '90', 'label_2': 'quatre-vingt-dix'},
    {'label_1': '91', 'label_2': 'quatre-vingt-onze'},
    {'label_1': '92', 'label_2': 'quatre-vingt-douze'},
    {'label_1': '93', 'label_2': 'quatre-vingt-treize'},
    {'label_1': '94', 'label_2': 'quatre-vingt-quatorze'},
    {'label_1': '95', 'label_2': 'quatre-vingt-quinze'},
    {'label_1': '96', 'label_2': 'quatre-vingt-seize'},
    {'label_1': '97', 'label_2': 'quatre-vingt-dix-sept'},
    {'label_1': '98', 'label_2': 'quatre-vingt-dix-huit'},
    {'label_1': '99', 'label_2': 'quatre-vingt-dix-neuf'},

    {'label_1': '100', 'label_2': 'cent'},
    {'label_1': '101', 'label_2': 'cent un'},
    {'label_1': '102', 'label_2': 'cent deux'},
    {'label_1': '103', 'label_2': 'cent trois'},
    {'label_1': '104', 'label_2': 'cent quatre'},
    {'label_1': '105', 'label_2': 'cent cinq'},
    {'label_1': '106', 'label_2': 'cent six'},
    {'label_1': '107', 'label_2': 'cent sept'},
    {'label_1': '108', 'label_2': 'cent huit'},
    {'label_1': '109', 'label_2': 'cent neuf'},
    {'label_1': '110', 'label_2': 'cent dix'},
    {'label_1': '111', 'label_2': 'cent onze'},
    {'label_1': '112', 'label_2': 'cent douze'},
    {'label_1': '113', 'label_2': 'cent treize'},
    {'label_1': '114', 'label_2': 'cent quatorze'},
    {'label_1': '115', 'label_2': 'cent quinze'},
    {'label_1': '116', 'label_2': 'cent seize'},
    {'label_1': '117', 'label_2': 'cent dix-sept'},
    {'label_1': '118', 'label_2': 'cent dix-huit'},
    {'label_1': '119', 'label_2': 'cent dix-neuf'},
    {'label_1': '120', 'label_2': 'cent vingt'},
    {'label_1': '121', 'label_2': 'cent vingt et un'},
    {'label_1': '122', 'label_2': 'cent vingt-deux'},
    {'label_1': '123', 'label_2': 'cent vingt-trois'},
    {'label_1': '124', 'label_2': 'cent vingt-quatre'},
    {'label_1': '125', 'label_2': 'cent vingt-cinq'},
    {'label_1': '126', 'label_2': 'cent vingt-six'},
    {'label_1': '127', 'label_2': 'cent vingt-sept'},
    {'label_1': '128', 'label_2': 'cent vingt-huit'},
    {'label_1': '129', 'label_2': 'cent vingt-neuf'},
    {'label_1': '130', 'label_2': 'cent trente'},
    {'label_1': '131', 'label_2': 'cent trente et un'},
    {'label_1': '132', 'label_2': 'cent trente-deux'},
    {'label_1': '133', 'label_2': 'cent trente-trois'},
    {'label_1': '134', 'label_2': 'cent trente-quatre'},
    {'label_1': '135', 'label_2': 'cent trente-cinq'},
    {'label_1': '136', 'label_2': 'cent trente-six'},
    {'label_1': '137', 'label_2': 'cent trente-sept'},
    {'label_1': '138', 'label_2': 'cent trente-huit'},
    {'label_1': '139', 'label_2': 'cent trente-neuf'},
    {'label_1': '140', 'label_2': 'cent quarante'},
    {'label_1': '141', 'label_2': 'cent quarante et un'},
    {'label_1': '142', 'label_2': 'cent quarante-deux'},
    {'label_1': '143', 'label_2': 'cent quarante-trois'},
    {'label_1': '144', 'label_2': 'cent quarante-quatre'},
    {'label_1': '145', 'label_2': 'cent quarante-cinq'},
    {'label_1': '146', 'label_2': 'cent quarante-six'},
    {'label_1': '147', 'label_2': 'cent quarante-sept'},
    {'label_1': '148', 'label_2': 'cent quarante-huit'},
    {'label_1': '149', 'label_2': 'cent quarante-neuf'},

];

var app = app || {};
app = (function(module, $, question_list) {
    var question = null;

    function answerProcessing(value) {
        var $answer_card = $('#templates .block').clone();

        $answer_card.find('.header').html(question.question);
        if (question.answer == value) {
            $answer_card.addClass('status-correct');
            $answer_card.find('.answer')[0].innerHTML = value;
            $answer_card.find('.footer')[0].innerHTML = "";            
        } else {
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
        if (isNaN(question.answer)) {
            $answer_input.removeAttr('pattern');
        } else {
            $answer_input.attr('pattern', '[0-9.]+');
        }
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