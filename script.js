const team = [
    {
        name: "Julien",
        occupation: "Dev back-end"  
    },
    {
        name: "Margaux",
        occupation: "Trop Belle"
    },
    {
        name: "Margaux",
        occupation: "Trop Belle" 
    },
    {
        name: "Nico",
        occupation: "Futur ultras 🔴🔵"
    },
    {
        name: "Hugo",
        occupation: "Twittos"
    },
]

let list = document.querySelector('#team')

for (let i = 0; i < team.length; i++) {
    let li = document.createElement('li')
    li.innerHTML = team[i].name + ' - ' + team[i].occupation
    list.appendChild(li)
}