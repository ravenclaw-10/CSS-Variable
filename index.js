const inputs=document.querySelectorAll('.controls input');
function update(){
    console.log(this.value);
}
inputs.forEach(input => input.addEventListener('change',update));
inputs.forEach(input => input.addEventListener('mousemove',update));
