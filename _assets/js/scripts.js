// Move page

function movePage(step, distance) {
    $('html, body').animate({
        scrollTop: ( $(step).offset().top ) - distance
    }, 1000);
}

// Get the title by class

function getTitles(classTitle) {
    var titlesArray = [],
    allTitles       = document.getElementsByClassName(classTitle);

    for ( var i = 0; i < allTitles.length; i++ ) {
        var current = allTitles[i],
        currentText = current.children[0].text,
        currentID   = currentText.replace(/\s/g, '-').toLowerCase(),
        titleObj    = {},
        lastArray   = titlesArray.length;

        // Add an ID for every title
        current.setAttribute('id', currentID);

        // Filling the object
        titleObj.value = currentText;
        titleObj.data = currentID;

        // Adding the title object to array
        titlesArray[lastArray] = titleObj;
    }

    return titlesArray;
}


jQuery(document).ready(function($) {

    var titles = getTitles('title');

    // Autocomplete input

    $('#autocomplete').autocomplete({
        lookup: titles,
        onSelect: function (suggestion) {
            var selected = $('#' + suggestion.data),
            snippet      = selected.parents('.snippet');
            movePage(selected, 50);
            $('.snippet').removeClass('active');
            snippet.addClass('active');
        }
    });

});
