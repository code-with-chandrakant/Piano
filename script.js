// document.getElementsByClassName('key')[0].style.color = "red";
// document.getElementsByClassName('key')[1].style.color = "red";
// document.getElementsByClassName('key')[2].style.color = "red";
// document.getElementsByClassName('key')[3].style.color = "red";
// document.getElementsByClassName('key')[4].style.color = "red";
// document.getElementsByClassName('key')[5].style.color = "red";
// document.getElementsByClassName('key')[6].style.color = "red";








let buttonArray = document.querySelectorAll('.key');
 for(let i=0; i<=buttonArray.length; i++)
 {
    let buttonText = buttonArray[i].innerHTML;
    buttonArray[i].addEventListener('click', function(){
        // alert (`Button ${buttonArray[i].innerHTML} was clicked`);
        switch (buttonText) {
            case 'a':
                let sound1 = new Audio('./sound/sound1.wav');
        sound1.play();
                break;
                case 's':
                let sound2 = new Audio('./sound/sound2.wav');
        sound2.play();
                break;
                case 'd':
                let sound3 = new Audio('./sound/sound3.wav');
        sound3.play();
                break;
                case 'f':
                let sound4 = new Audio('./sound/sound4.wav');
        sound4.play();
                break;
                case 'j':
                let sound5 = new Audio('./sound/sound5.wav');
        sound5.play();
                break;
                case 'k':
                let sound6= new Audio('./sound/sound6.wav');
        sound6.play();
                break;
                case 'l':
                let sound7 = new Audio('./sound/sound7.wav');
        sound7.play();
                break;
                
        
            default:
                case 'a':
                let sound = new Audio('./sound/sound1.wav');
        sound1.play();
                break;
               
                
        }
        
    });
 }







//  let button1 = document.getElementById('key1');
//  let button2 = document.getElementById('key2');
//  let button3 = document.getElementById('key3');
//  let button4 = document.getElementById('key4');
//  let button5 = document.getElementById('key5');
//  let button6 = document.getElementById('key6');
//  let button7 = document.getElementById('key7');
 


//  button1.addEventListener('click', function() {
//     alert('Button A clicked!');
//   });
//   button2.addEventListener('click', function() {
//     alert('Button B clicked!');
//   });
//   button3.addEventListener('click', function() {
//     alert('Button C clicked!');
//   });
//   button4.addEventListener('click', function() {
//     alert('Button D clicked!');
//   });
//   button5.addEventListener('click', function() {
//     alert('Button E clicked!');
//   });
//   button6.addEventListener('click', function() {
//     alert('Button F clicked!');
//   });
//   button7.addEventListener('click', function() {
//     alert('Button G clicked!');
//   });



// let buttonArray = document.querySelectorAll('.key1');
// buttonArray[0].addEventListener('click', function(){
//   this.style.color = "red";
// })