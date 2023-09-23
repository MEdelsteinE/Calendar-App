
$(function () {
 var date = dayjs().format('/' + '/' + '');
 var timeBlocks = $('.time-block');

    timeBlocks.each(function () {
        var timeBlock = $(this);

        if (timeBlock < curHour) {
            
            $(this).addClass("past");
        } else if (timeBlock === curHour) {
            
            $(this).addClass("present");
        } else {
            
            $(this).addClass("future");
        }

        // var timeBlockHour = timeBlock.attr('id').split('-')[1];
        var curHour = dayjs().hour();
     });

    var currDate = new Date();
    var formatDate = currDate.toLocaleString();
    $('#currentDay').text(formatDate);

    var btns = $('.time-block button');
    //Event listener for save buttons
     $('.fa-save').on('click', function() {
        var timeBlock = $(this).closest('.time-block');
        var timeID = timeBlock.attr('id');
        var useInput =timeBlock.find('textarea').val();

        localStorage.setItem(timeID, useInput);
     });
      
     //This will loop through all the time blocks
     
$(".time-block").each(function() {
    var timeID = $(this).attr("id"); // Get the ID of the time block
    var useInput = localStorage.getItem(timeID);

    $(this).find("textarea").val(useInput);
});

btns.click(storeEvent)

});

        
     

     








    
    









    




