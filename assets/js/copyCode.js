 document
    .querySelectorAll('.highlight')
    .forEach(function (pre) {
      var button = document.createElement('button');
      var copyText = 'copy';
      button.className = 'copy';
      button.type = 'button';
      button.ariaLabel = 'Copy code to clipboard';
      button.innerText = copyText;
      var flag = 1;
      button.addEventListener('click', function () {
        flag = 2;
        var code = pre.querySelector('code').innerText.trim();
        navigator.clipboard.writeText(code);
        button.innerText = 'copied';
        var color = getComputedStyle(document.documentElement).getPropertyValue('--global-theme-color');
        
        button.style.color = color;
        button.style.borderColor = color;
        
         $('#button').prop('disabled', true);
        clickTimeOut = setTimeout(function () {
           $('#button').prop('disabled', false);
          button.innerText = copyText;
          var old_color = getComputedStyle(document.documentElement).getPropertyValue('--global-text-color');
          button.style.color = old_color;
           button.style.borderColor = old_color;
          flag = 1;
        }, 2500);
        
      });
      
      pre.addEventListener("mouseover", function () {
        if (flag == 1) {
            button.style.color = getComputedStyle(document.documentElement).getPropertyValue('--global-text-color');
            button.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--global-text-color');
        }
        } );
      
 //     pre.addEventListener("mouseout", function(){button.style.color = getComputedStyle(document.documentElement).getPropertyValue('--global-text-color')});

      pre.appendChild(button);
    });