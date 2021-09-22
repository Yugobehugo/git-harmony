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
        name: "Nico",
        occupation: "Futur ultras 🔴🔵"
    },
    {
        name: "Hugo",
        occupation: "Twittos"
    },
]

let list = document.querySelector('#team')

function renderTeam() {
    for (let i = 0; i < team.length; i++) {
        let li = document.createElement('li')
        li.innerHTML = team[i].name + ' - ' + team[i].occupation
        list.appendChild(li)
    }
}

renderTeam()

document.querySelector('.new-submit').addEventListener('click', (e) => {
    e.preventDefault()
    let name = document.querySelector('.new-member').value
    let occupation = document.querySelector('.new-occupation').value

    if (name !== '' && occupation !== '') {
        let li = document.createElement('li')
        li.innerHTML = name + ' - ' + occupation
        list.appendChild(li)
        document.querySelector('.new-member').value = ''
        document.querySelector('.new-occupation').value = ''
    } else {
        alert('Les champs ne peuvent pas être nuls')
    }

})