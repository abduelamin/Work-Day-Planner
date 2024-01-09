$(document).ready(function () {
    const Hour = dayjs().format('H');
    

    const time = () => {
        let currentDate = dayjs().format(`MMMM DD YYYY`);
        let currentTime = dayjs().format(`h:mm:ss A`)
        $(`#currentDay`).text(`${currentDate} ${currentTime}`)}
        
        setInterval(time, 1000);
  
    function inputColor() {
        // Check if it's midnight (00:00)
        if (Hour === '00') {
          // Reset all input boxes to show as future
          $('.time-block input').each(function() {
            localStorage.clear();
            $(this).removeClass('past present').addClass('future');
          });
        } else {
          // Apply the color coding based on the current time to input boxes
          $('.time-block').each(function() {
            const plannerHour = parseInt($(this).data('time'));
      
            const input = $(this).find('.description');
      
            input.toggleClass('past', plannerHour < Hour);
            input.toggleClass('present', plannerHour === Hour);
            input.toggleClass('future', plannerHour > Hour);
          });
        }
      }
      

      
      inputColor();
      
      setInterval(inputColor, 36000000 );
      
      
  
      // This function sets up the event listener for all save buttons
const setupSaveEventListeners = () => {
    const saveBtns = $('.saveBtn');
  
    saveBtns.click((e) => {
     
      // Save the input value to local storage
      localStorage.setItem(`${input.parent().data('time')}`, input.val());
    });
  };
  
  // This function loads the saved values from local storage and sets them to the input fields
  const loadFromLocalStorage = () => {
    const timeBlocks = $('.time-block');
  
    timeBlocks.each(function () {
      const input = $(this).find('.description');
       
      // This code is saying get the localStorage item based on the key I gave above and store it in the storedvalue. This key will give the value thats stored inside this key. therefore stored value = input.val() technically.

      // If the input contains text then give that input box the value sotred inside the storedValue variable on the page load.
      const storedValue = localStorage.getItem(`${$(this).data('time')}`);
      if (storedValue !== null) {
        input.val(storedValue);
      }
    });
  };
  
  // Call the setup function and load saved values on page load
  setupSaveEventListeners();
  loadFromLocalStorage();
  

})
  