$(document).ready(function () {

    var days =[
        {
            name : 'holiday 1',
            day : 16
        },
        {
            name : 'holiday 2',
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




//    $('#submitter').on('click', function (evt) {
//         evt.preventDefault();

//         console.log ('clicked button!');

//         var nameField = $('#eventName');
//         var dayField = $('[name="eventDay"]');

//         var name = nameField.val();
//         var day = dayField.val();

//         insertEvent(name, day);

//         nameField.val('');
//         dayField.val('');

//         $('#myModal').modal('hide');

//     });

    var btn = $('#submitter');

    btn.on('click', function (evt) {
      evt.preventDefault();

      var name = $('[name="eventName"]').val();
      var day = $('[name="eventDay"]').val();

      insertEvent(name, day);

      $('eventName').val('');
      $('[name="eventDay"]').val();

      $('#myModal').modal('hide');

    });

    $('td').on('click', function (event) {
        console.log(event);

        var day = $(event.target).children('.date').text();

        $('[name="eventDay"]').val(day);

        $('#myModal').modal('toggle');
     });

    $('#eventName').on('keyup', function (event) {
        console.log($('#eventName').val());
    });


// initial setup

$.each(days, function (index, date) {
    insertEvent(date.name, date.day);
})

});