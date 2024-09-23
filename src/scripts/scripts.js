function showDetails(detailsId) {
    var details = document.querySelectorAll('.details'); 
    details.forEach(function (detail) {

      if (detail.id !== detailsId && detail.classList.contains('active')) {
        detail.classList.remove('active');
      }
    });
  
    var currentDetails = document.getElementById(detailsId);
    currentDetails.classList.toggle('active');
  }

  function startCountdown(targetDate) {
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
  
    const countdownInterval = setInterval(() => {
      const now = new Date();
      const timeDifference = targetDate - now;
  
      if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";
        return;
      }
  
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      updateTime(daysElement, days);
      updateTime(hoursElement, hours);
      updateTime(minutesElement, minutes);
      updateTime(secondsElement, seconds);
    }, 1000);
  }
  
  function updateTime(element, newValue) {
    const currentValue = element.textContent;
  
    if (currentValue !== String(newValue).padStart(2, '0')) {
      element.textContent = String(newValue).padStart(2, '0');
    }
  }
  
  const targetDate = new Date('2024-11-16T00:00:00');
  startCountdown(targetDate);

  function copiarText() {
    
        var copyButton = document.querySelectorAll('.copyButton'); 
        copyButton.addEventListener("click", function() {

        var chave = 38992087401 ;

        navigator.clipboard.writeText(chave).then(function() {
            toastr.success("Chave Pix Copiada!");
        })
      });
  }

 /* document.getElementById("copyButton").addEventListener("click", function() {

    var chave = 38992087401 ;

    navigator.clipboard.writeText(chave).then(function() {

        toastr.success("Chave Pix Copiada!");

    })
});
*/

	$(document).ready(function() {
    toastr.options = {
      'closeButton': true,
      'debug': false,
      'newestOnTop': false,
      'progressBar': false,
      'positionClass': 'toast-top-right',
      'preventDuplicates': false,
      'showDuration': '1000',
      'hideDuration': '1000',
      'timeOut': '5000',
      'extendedTimeOut': '1000',
      'showEasing': 'swing',
      'hideEasing': 'linear',
      'showMethod': 'fadeIn',
      'hideMethod': 'fadeOut',
    }
  });
// Toast Image and Progress Bar
  $('#image').click(function(event) {
    toastr.options.progressBar = true,
    toastr.info('<img src="https://image.flaticon.com/icons/svg/34/34579.svg" style="width:150px;">', 'Toast Image')
  });


// Toast Position
  $('#position').click(function(event) {
    var pos = $('input[name=position]:checked', '#positionForm').val();
    toastr.options.positionClass = "toast-" + pos;
    toastr.options.preventDuplicates = false;
    toastr.info('This sample position', 'Toast Position')
  });
