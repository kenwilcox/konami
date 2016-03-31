(function() {
    'use strict';
    
    var konami = [];

    var konamiCheck = function(keyCodeArray) {
        var ret = false;
        var count = 0;
        var correct = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
        if (keyCodeArray.length === correct.length) {
            for (var i = 0; i < keyCodeArray.length; i++) {
                if (keyCodeArray[i] === correct[i]) {
                    count++;
                }
            }
        }
        if (count === correct.length) {
            ret = true;
        }

        return ret;
    };

    var konamiCode = function(event) {
        konami.push(event.keyCode);
        // if the length is greater than what we're looking for
        if (konami.length > 10) {
            //shift (drop old keyCodes)
            konami.shift();
        }

        if (konamiCheck(konami) === true) {
            alert("Going to Code Works!");
            window.open('http://portal.boisecodeworks.com/', '_blank');
            konami = [];
        }
    };

    document.addEventListener('keyup', konamiCode);
})();