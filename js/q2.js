'use strict'


function starPattern(){
for (var i = 0; i < 6; i++){
    for (var j = 0; j < i; j++){
        document.write('*');
    }
    document.write('<br>')
}
}

starPattern();