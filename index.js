const inputs=document.querySelectorAll('.controls input');
function update(){
    const suffix=this.getAttribute('data-size')||'';
    //const variable=`--${this.name}`;
    //const value=this.value+suffix;
    document.querySelector('input').style.setProperty(`--${this.name}`,this.value+suffix);
}
inputs.forEach(input => input.addEventListener('change',update));
inputs.forEach(input => input.addEventListener('mousemove',update));
