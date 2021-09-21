const team = [
    {
        name: "Julien",
        occupation: "Dev back-end"  
    },
    {
        name: "Nico",
        occupation: "Futur ultras 🔴🔵"
    },
]

let list = document.querySelector('#team')

for (let i = 0; i < team.length; i++) {
    let li = document.createElement('li')
    li.innerHTML = team[i].name + ' - ' + team[i].occupation
    list.appendChild(li)
}
