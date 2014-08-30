$(document).ready(function () {

    var days =[
        {
            name : 'Ind Day',
            day : 16
        },
        {
            name : 'Labor Day',
            day : 2
        }
    ];

    var t = $('table');
    t.addClass('classy');

    function insertEvent (name, day) {
        if (name.length) {
            console.log('name is ' + name)
        }  else {
            console.error('no name!');
            return;
        }

        console.log(day);

        if (day > 0) {
            console.log('day is ' + day)
        }  else {
            console.error('no day!');
            return;
        }

        var offset = 1;

        $($('td')[offset + (day - 1)]).append('<span class="event">' + name + '</span>')

    }




    var btn = $('#submitter');

    btn.on('click', function (evt) {
      evt.preventDefault();

      var name = $('[name="eventName"]').val();
      var day = $('[name="eventDay"]').val();

      insertEvent(name, day);

    });

    $('td').on('click', function (event) {
        console.log(event);

        var day = $(event.target).children('.date').text();

        $('[name="eventDay"]').val(day);
     });

    $('#eventName').on('keyup', function (event) {
        console.log($('#eventName').val());
    });


// initial setup

$.each(days, function (index, date) {
    insertEvent(date.name, date.day);
})

});