document.getElementById("get-color-scheme-btn").addEventListener('click', function() {
    const seedColor = document.getElementById('seed-color').value
    const colorModeSelection = document.getElementById("color-mode-selection").value
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor.substring(1)}&count=6&mode=${colorModeSelection}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let html = ''
            data.colors.forEach(color => {
                html += `
                <div class='color-column'>
                    <div class='col' style="background-color: ${color.hex.value}"></div>
                    <div class='hexcode'>${color.hex.value}</div>
                </div>
                `
            })
            document.getElementById('color-column-container').innerHTML = html
        })
})


