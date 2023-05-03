$(function() {
    $("#accordion").accordion({
        collapsible: true,
        activate: function(event, ui) {
            if (ui.newPanel.is(":visible")) {
                ui.oldPanel.hide();
            }
        }
    });
});