// Select color input
// Select size input
var color, height, weight;

color = $('#colorPicker');
height = $('#inputHeight');
weight = $('#inputWeight');


// When size is submitted by the user, call makeGrid()

$(document).ready(function () {
    $('#sizePicker').submit(function makeGrid(grid) {
        $('table tr').remove();
        var rows = height.val();
        var columns = weight.val();
        for (var i = 1; i <= rows; i++) {
            $('table').append('<tr></tr>');
            for (var j = 1; j <= columns; j++) {
                $('tr:last').append('<td></td>');
                $('td').attr("class", 'cells');
            }
        }
        grid.preventDefault();
        $('.cells').click(function (event) {
            var paint = color.val();
            $(event.target).css('background-color', paint);
        });
    });
});
