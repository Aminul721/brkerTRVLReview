/* Script on ready
---------------------------------*/
$(document).ready(function () {
$('.banner-section h1').each(function (index, element) {
        var heading = $(element),
            word_array, last_word, first_part;

        word_array = heading.html().split(/\s+/); // split on spaces
        last_word = word_array.pop(); // pop the last word
        first_part = word_array.join(' '); // rejoin the first words together

        heading.html([first_part, ' <span>', last_word, '</span>'].join(''));
    });
$('.banner-section .category_h1').each(function (index, element) {
        var heading = $(element),
            word_array, last_word, first_part;

        word_array = heading.html().split(/\s+/); // split on spaces
        last_word = word_array.pop(); // pop the last word
        first_part = word_array.join(' '); // rejoin the first words together

        heading.html([first_part, ' <span>', last_word, '</span>'].join(''));
    });
    
});