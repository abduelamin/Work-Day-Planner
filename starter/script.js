$(document).ready(function () {
    const container = $('.container');
    const Hour = dayjs().format('H');
      let currentDate = dayjs().format(`MMMM DD YYYY`);
      let currentTime = dayjs().format(`h:mm:ss A`)
      $(`#currentDay`).text(`${currentDate} ${currentTime}`)
  
    setInterval(updateTime, 1000);
  
    function inputColor() {
      
      // Check if it's midnight (00:00)
  if (Hour == `00`) {
    // Reset all time blocks to show as future
    $('.time-block input').each(function() {
      $(this).removeClass('past present').addClass('future');
    });
  } else {
    // Apply the color coding based on the current time
    $('.time-block').each(function() {
      const plannerHour = parseInt($(this).data('time'));

      const input = $(this).find('.description'); // Finds the input element

      input.toggleClass('past', plannerHour < Hour);
      input.toggleClass('present', plannerHour === Hour);
      input.toggleClass('future', plannerHour > Hour);
    });
  }
}

      
      inputColor();
      
      setInterval(inputColor, 60000);
      
  
  
    const saveToLocalStorage = () => {
      container.find('.saveBtn').on('click', function () {
        const descriptionElement = $(this).siblings('.description');
        const hourElement = $(this).siblings('.hour');
        const hour = hourElement.text().trim();
        const description = descriptionElement.val().trim();
  
        localStorage.setItem(hour, description);
      });
    }
  
    saveToLocalStorage();
  });
  






















