const set = 'SWSH10'
const noParallelList = [1, 17, 18, 25, 26, 27, 30, 39, 40, 46, 49, 50, 53, 54, 72, 73, 78, 81, 83, 84, 87, 94, 98, 99, 101, 102, 113, 114, 117, 133, 134, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216]
const nonHoloHoloRares = [45, 69, 97, 100, 107, 135, 147]
const cardNames = ["None", "Beedrill V", "Hisuian Voltorb", "Hisuian Electrode", "Scyther", "Scyther", "Yanma", "Yanmega", "Heracross", "Kricketot", "Kricketune", "Combee", "Vespiquen", "Leafeon", "Shaymin", "Petilil", "Hisuian Lilligant", "Hisuian Lilligant V", "Hisuian Lilligant VSTAR", "Rowlet", "Dartrix", "Ponyta", "Rapidash", "Cyndaquil", "Quilava", "Heatran V", "Heatran VMAX", "Radiant Heatran", "Psyduck", "Golduck", "Starmie V", "Swinub", "Piloswine", "Mamoswine", "Mantine", "Barboach", "Whiscash", "Regice", "Glaceon", "Origin Forme Palkia V", "Origin Forme Palkia VSTAR", "Oshawott", "Dewott", "Hisuian Basculin", "Hisuian Basculegion", "Keldeo", "Radiant Greninja", "Bergmite", "Hisuian Avalugg", "Galarian Mr. Rime V", "Luxray V", "Regieleki", "Hisuian Typhlosion", "Hisuian Typhlosion V", "Hisuian Typhlosion VSTAR", "Togepi", "Togetic", "Togekiss", "Misdreavus", "Mismagius", "Ralts", "Kirlia", "Gallade", "Drifloon", "Drifblim", "Uxie", "Mesprit", "Azelf", "Diancie", "Wyrdeer", "Hisuian Growlithe", "Hisuian Arcanine", "Machamp V", "Machamp VMAX", "Sudowoodo", "Regirock", "Cranidos", "Rampardos", "Lucario V", "Hippopotas", "Hippowdon", "Radiant Hawlucha", "Hisuian Decidueye", "Hisuian Decidueye V", "Hisuian Decidueye VSTAR", "Kleavor", "Kleavor", "Kleavor V", "Hisuian Qwilfish", "Hisuian Qwilfish", "Hisuian Overqwil", "Hisuian Overqwil", "Hisuian Sneasel", "Hisuian Sneasler", "Hisuian Sneasler V", "Poochyena", "Mightyena", "Absol", "Darkrai V", "Darkrai", "Hisuian Samurott", "Hisuian Samurott V", "Hisuian Samurott VSTAR", "Nickit", "Thievul", "Magnemite", "Magneton", "Magnezone", "Registeel", "Shieldon", "Bastiodon", "Bronzor", "Bronzong", "Origin Forme Dialga V", "Origin Forme Dialga VSTAR", "Pawniard", "Bisharp", "Garchomp V", "Regidrago", "Eevee", "Hoothoot", "Noctowl", "Teddiursa", "Ursaring", "Ursaluna", "Stantler", "Miltank", "Glameow", "Purugly", "Chatot", "Regigigas", "Rufflet", "Hisuian Braviary", "Oranguru V", "Wyrdeer V", "Adaman", "Canceling Cologne", "Choy", "Cyllene", "Dark Patch", "Energy Loto", "Feather Ball", "Gapejaw Bog", "Gardenia's Vigor", "Grant", "Gutsy Pickaxe", "Hisuian Heavy Ball", "Irida", "Jubilife Village", "Kamado", "Roxanne", "Spicy Seasoned Curry", "Supereffective Glasses", "Sweet Honey", "Switch Cart", "Temple of Sinnoh", "Trekking Shoes", "Unidentified Fossil", "Wait and See Turbo", "Zisu", "Beedrill V", "Beedrill V", "Hisuian Lilligant V", "Hisuian Lilligant V", "Virizion V", "Heatran V", "Starmie V", "Origin Forme Palkia V", "Luxray V", "Hisuian Typhlosion V", "Jirachi V", "Machamp V", "Machamp V", "Hisuian Decidueye V", "Hisuian Sneasler V", "Hisuian Sneasler V", "Hisuian Samurott V", "Origin Forme Dialga V", "Garchomp V", "Oranguru V", "Wyrdeer V", "Adaman", "Choy", "Cyllene", "Gardenia's Vigor", "Grant", "Irida", "Kamado", "Roxanne", "Zisu", "Hisuian Lilligant VSTAR", "Heatran VMAX", "Origin Forme Palkia VSTAR", "Hisuian Typhlosion VSTAR", "Machamp VMAX", "Hisuian Decidueye VSTAR", "Kleavor VSTAR", "Hisuian Samurott VSTAR", "Origin Forme Dialga VSTAR", "Adaman", "Choy", "Cyllene", "Gardenia’s Vigor", "Grant", "Irida", "Kamado", "Roxanne", "Zisu", "Origin Form Palkia VSTAR", "Hisuian Samurott VSTAR", "Origin Form Dialga VSTAR", "Choice Belt", "Jubilife Village", "Path to the Peak", "Temple of Sinnoh", "Trekking Boots", "Double Turbo Energy"]

function restoreLocalStorage() {
    if (!localStorage.length) {
        for (let i = 1; i <= 216; i++) {
            if (!(`${set} - ${i} - ${cardNames[i]} - Standard` in localStorage)) {
                localStorage.setItem(`${set} - ${i} - ${cardNames[i]} - Standard`, 0)
            }
            if (!(`${set} - ${i} - ${cardNames[i]} - Parallel` in localStorage) && !noParallelList.includes(i)) {
                localStorage.setItem(`${set} - ${i} - ${cardNames[i]} - Parallel`, 0)
            }
            if (!(`${set} - ${i} - ${cardNames[i]} - Prerelease` in localStorage) && nonHoloHoloRares.includes(i)) {
                localStorage.setItem(`${set} - ${i} - ${cardNames[i]} - Prerelease`, 0)
            }
        }
    }
}

function drawPage() {
    for (let i = 1; i <= 216; i++) {

        let item = document.createElement("div")
        item.className="item"

        let title = document.createElement("span")
        title.className="title"
        title.innerHTML=`${i.toString().padStart(3, '0')} - ${cardNames[i]}`

        let card = document.createElement("img")
        card.className="card"
        card.src=`images/cards/${i}.png`

        let counter_div = document.createElement("div")
        counter_div.className="counter_div"

        let counters_a = document.createElement("div")
        counters_a.className="counters_a"

        let add_a = document.createElement("img")
        add_a.src="images/buttons/chevron_right_white_24dp.svg"
        add_a.className="add_a"
        add_a.onclick=function() {
            j = localStorage.getItem(`${set} - ${i} - ${cardNames[i]} - Standard`)
            localStorage.setItem(`${set} - ${i} - ${cardNames[i]} - Standard`, parseInt(j) + 1)
            document.getElementById(`${set} - ${i} - ${cardNames[i]} - Standard`).innerHTML = localStorage.getItem(`${set} - ${i} - ${cardNames[i]} - Standard`)
        }

        let minus_a = document.createElement("img")
        minus_a.src="images/buttons/chevron_left_white_24dp.svg"
        minus_a.className="minus_a"
        minus_a.onclick=function(){
            j = localStorage.getItem(`${set} - ${i} - ${cardNames[i]} - Standard`)
            if (j >= 1) {
                localStorage.setItem(`${set} - ${i} - ${cardNames[i]} - Standard`, parseInt(j) - 1)
                document.getElementById(`${set} - ${i} - ${cardNames[i]} - Standard`).innerHTML = localStorage.getItem(`${set} - ${i} - ${cardNames[i]} - Standard`)
            }
        }

        let quantity_a = document.createElement("span")
        quantity_a.className="quantity_a"
        quantity_a.id=`${set} - ${i} - ${cardNames[i]} - Standard`
        quantity_a.innerHTML=localStorage.getItem(`${set} - ${i} - ${cardNames[i]} - Standard`)

        if (!noParallelList.includes(i)) {
            var counters_b = document.createElement("div")
            counters_b.className="counters_b"

            var add_b = document.createElement("img")
            add_b.src="images/buttons/chevron_right_white_24dp.svg"
            add_b.className="add_b"
            add_b.onclick=function() {
                j = localStorage.getItem(`${set} - ${i} - ${cardNames[i]} - Parallel`)
                localStorage.setItem(`${set} - ${i} - ${cardNames[i]} - Parallel`, parseInt(j) + 1)
                document.getElementById(`${set} - ${i} - ${cardNames[i]} - Parallel`).innerHTML = localStorage.getItem(`${set} - ${i} - ${cardNames[i]} - Parallel`)
            }

            var minus_b = document.createElement("img")
            minus_b.src="images/buttons/chevron_left_white_24dp.svg"
            minus_b.className="minus_b"
            minus_b.onclick=function(){
                j = localStorage.getItem(`${set} - ${i} - ${cardNames[i]} - Parallel`)
                if (j >= 1) {
                    localStorage.setItem(`${set} - ${i} - ${cardNames[i]} - Parallel`, parseInt(j) - 1)
                    document.getElementById(`${set} - ${i} - ${cardNames[i]} - Parallel`).innerHTML = localStorage.getItem(`${set} - ${i} - ${cardNames[i]} - Parallel`)
                }
            }

            var quantity_b = document.createElement("span")
            quantity_b.className="quantity_b"
            quantity_b.id=`${set} - ${i} - ${cardNames[i]} - Parallel`
            quantity_b.innerHTML=localStorage.getItem(`${set} - ${i} - ${cardNames[i]} - Parallel`)
        }

        item.appendChild(title)
        item.appendChild(card)
        counters_a.appendChild(minus_a)
        counters_a.appendChild(quantity_a)
        counters_a.appendChild(add_a)
        if (!noParallelList.includes(i)) {
            counters_b.appendChild(minus_b)
            counters_b.appendChild(quantity_b)
            counters_b.appendChild(add_b)
        }
        counter_div.append(counters_a)
        if (!noParallelList.includes(i)) {
            counter_div.append(counters_b)
        }
        item.append(counter_div)

        document.getElementById("container").appendChild(item)
    }
}

function localStorageToCSV() {
    let csv = ''
    data = Object.keys(localStorage).sort((a, b) => a.split(' - ')[1] - b.split(' - ')[1] || b.split(' - ')[3].localeCompare(a.split(' - ')[3]))
    for (key of data) {
        csv += `${key}, ${localStorage.getItem(key)}\n`
    }
    return csv
}

function downloadBlob(content, filename, contentType) {
    var blob = new Blob([content], { type: contentType });
    var url = URL.createObjectURL(blob);

    var pom = document.createElement('a');
    pom.href = url;
    pom.setAttribute('download', filename);
    pom.click();
}

function clearData() {
    localStorage.clear()
    location.reload()
}