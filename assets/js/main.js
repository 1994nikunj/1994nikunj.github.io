// CODE BLOCKS
jQuery(document).ready(function ($) {
    $('.level-bar-inner').css('width', '0');
    $(window).on('load', function () {
        $('.level-bar-inner').each(function () {

            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 800);
        });
    });
});

// SHOW/HIDE CODE BLOCKS
var showButtons = document.getElementsByClassName("show-button");

// Update the text content of all buttons
for (var i = 0; i < showButtons.length; i++) {
    var showButton = showButtons[i];
    var targetID = showButton.getAttribute("data-target");
    var targetSection = document.getElementById(targetID);
    var sectionName = showButton.textContent;

    showButton.textContent = sectionName;
    showButton.addEventListener("click", createToggleFunction(showButton, targetSection, sectionName));
}

function createToggleFunction(button, section, sectionName) {
    return function () {
        if (section.classList.contains("hidden")) {
            section.classList.remove("hidden");
            button.textContent = sectionName;
        } else {
            section.classList.add("hidden");
            button.textContent = sectionName;
        }
    };
}