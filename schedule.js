  $(document).ready(function() {

    $('#calendar').fullCalendar({
        defaultView: 'agendaWeek',
        allDaySlot: false,
      header: {
        left: 'title',
        right: 'prev,next today',
        center: ''
      },
      defaultDate: '2018-06-24',
      navLinks: true, // can click day/week names to navigate views
      selectable: true,
      selectHelper: true,
      select: function(start, end) {
        var eventData = {
            title: 'class',
            start: start,
            end: end
        };
        $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
        $('#calendar').fullCalendar('unselect');
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: []
    });

    $('.topic').click(function(){
        $('.topic').removeClass('selected');
        $(this).addClass('selected');
    })
});