document.getElementById('clear-btn').addEventListener('click',function(){
    const container = document.getElementById('activity')
    const all = container.querySelectorAll('p')
    all.forEach (p => p.remove())
})