const title = document.querySelector('h1');

let defaultValue = title.innerHTML;
let count = 1;

const loop = () => {
  if (count == defaultValue.length+1) count = 1
  title.innerHTML = defaultValue.substring(0,count++)

  setTimeout(loop, 0.5*1000)
}


loop()