window.onload = () => {
    const countEl = document.getElementById('myCount');
    countEl.addEventListener("click", function(){
        countEl.innerHTML = Number(countEl.innerHTML) + 1;
    })
}
