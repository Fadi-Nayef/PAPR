

var emploies=prompt('how many employer do you have');


if (emploies >=10 && emploies<=20){
    alert('you welcome');}
        else if (emploies <10 || emploies>20)

            {
            alert('sorry your capacity dosent match')
        }
    for(var i=0 ; i<5 ; i++ ){

    }

    
var mask = prompt("which mask is better full face or half face?");
 while (mask !=='half' && mask!=='full'){
     mask=prompt('please write full or half only');

 }


var numberOfShows=prompt('how many resp you need?');

var choosen='';

for(var i=0 ; i<numberOfShows ; i++){

    if (mask == 'full') {
        choosen +='<img src="javafiles/6800_4.jpg"/></br>';
    } else if (mask =='half') {
        choosen +='<img src="javafiles/6200.jpg"/></br>';
    } else {
        alert('you need to type full or half ');
    }
}
document.write(choosen);

