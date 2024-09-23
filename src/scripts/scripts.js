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

    document.getElementById("copyButton").addEventListener("click", function() {

      var chave = 38992087401 ;

      navigator.clipboard.writeText(chave).then(function() {

          alert("Chave Pix copiado!");
      }).catch(function(err) {
        alert("Erro ao copiar a chave pix! ", err);
      });
  });
