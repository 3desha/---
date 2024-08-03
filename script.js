const move = document.getElementById('move')
const form = document.getElementById('form')
const button = document.getElementById('button')
let name1, name2;
button.addEventListener('click', function(){
  name1 = document.getElementById('name1').value
  name2 = document.getElementById('name2').value
  //form.style.display = 'none';
  form.remove()
  move.textContent = 'ходит '+ name1;
})
let count = 0;
function click(element){
  count++;
  if (element.textContent == ''){
  if (count%2==0){
    move.textContent = 'ходит ' + name1;
    element.textContent = 'X';
    }
  else{
    move.textContent = 'ходит ' + name2;
    element.textContent = '0';
    }
  }
}
const container1 = document.getElementById('container1');
container1.addEventListener('click', function(){
  click(this)
  game()
})
const container2 = document.getElementById('container2')
container2.addEventListener('click', function(){
  click(this)
  game()
})
const container3 = document.getElementById('container3')
container3.addEventListener('click', function(){
  click(this)
  game()
})
const container4 = document.getElementById('container4')
container4.addEventListener('click', function(){
  click(this)
  game()
})
const container5 = document.getElementById('container5')
container5.addEventListener('click', function(){
  click(this)
  game()
})
const container6 = document.getElementById('container6')
container6.addEventListener('click', function(){
  click(this)
  game()
})
const container7 = document.getElementById('container7')
container7.addEventListener('click', function(){
  click(this)
  game()
})
const container8 = document.getElementById('container8')
container8.addEventListener('click', function(){
  click(this)
  game()
})
const container9 = document.getElementById('container9')
container9.addEventListener('click', function(){
  click(this)
  game()
})
function game(){
  if (container1.textContent == 'X' && container2.textContent =='X' && container3.textContent=='X'){alert(`Победил ${name2}`)}
  else if (container4.textContent == 'X' && container5.textContent =='X' && container6.textContent=='X'){alert(`Победил ${name2}`)}
  else if (container7.textContent == 'X' && container8.textContent =='X' && container9.textContent=='X'){alert(`Победил ${name2}`)}
  else if (container1.textContent == 'X' && container4.textContent =='X' && container7.textContent=='X'){alert(`Победил ${name2}`)}
  else if (container2.textContent == 'X' && container5.textContent =='X' && container8.textContent=='X'){alert(`Победил ${name2}`)}
  else if (container3.textContent == 'X' && container6.textContent =='X' && container9.textContent=='X'){alert(`Победил ${name2}`)}
  else if (container1.textContent == 'X' && container5.textContent =='X' && container9.textContent=='X'){alert(`Победил ${name2}`)}
  else if (container3.textContent == 'X' && container5.textContent =='X' && container7.textContent=='X'){alert(`Победил ${name2}`)}
    else if (container1.textContent == '0' && container2.textContent =='0' && container3.textContent=='0'){alert(`Победил ${name1}`)}
    else if (container4.textContent == '0' && container5.textContent =='0' && container6.textContent=='0'){alert(`Победил ${name1}`)}
    else if (container7.textContent == '0' && container8.textContent =='0' && container9.textContent=='0'){alert(`Победил ${name1}`)}
    else if (container1.textContent == '0' && container4.textContent =='0' && container7.textContent=='0'){alert(`Победил ${name1}`)}
    else if (container2.textContent == '0' && container5.textContent =='0' && container8.textContent=='0'){alert(`Победил ${name1}`)}
    else if (container3.textContent == '0' && container6.textContent =='0' && container9.textContent=='0'){alert(`Победил ${name1}`)}
    else if (container1.textContent == '0' && container5.textContent =='0' && container9.textContent=='0'){alert(`Победил ${name1}`)}
    else if (container3.textContent == '0' && container5.textContent =='0' && container7.textContent=='0'){alert(`Победил ${name1}`)}
    else if(count==9){
      alert('Ничья')
    }
  }
