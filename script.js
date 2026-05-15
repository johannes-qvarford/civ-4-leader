const IMG_PATH = 'img/leaders'

const TRAIT_COLORS = {
  Aggressive: '#c0392b',
  Charismatic: '#e67e22',
  Creative: '#8e44ad',
  Expansive: '#27ae60',
  Financial: '#f1c40f',
  Imperialistic: '#2c3e50',
  Industrious: '#d35400',
  Organized: '#2980b9',
  Philosophical: '#1abc9c',
  Protective: '#7f8c8d',
  Spiritual: '#9b59b6',
}

const LEADERS = [
  { id: 'alexander',     name: 'Alexander',       civ: 'Greece',        traits: ['Aggressive', 'Philosophical'],    image: '9/9a/Alexander_(Civ4).png' },
  { id: 'asoka',         name: 'Asoka',           civ: 'India',         traits: ['Organized', 'Spiritual'],         image: '3/31/Asoka_(Civ4).png' },
  { id: 'augustus',      name: 'Augustus Caesar', civ: 'Rome',          traits: ['Imperialistic', 'Creative'],      image: 'c/c4/Augustus_Caesar_(Civ4).png' },
  { id: 'bismarck',      name: 'Bismarck',        civ: 'Germany',       traits: ['Expansive', 'Industrious'],       image: '3/38/Bismarck_(Civ4).png' },
  { id: 'boudica',       name: 'Boudica',         civ: 'Celtia',        traits: ['Charismatic', 'Aggressive'],      image: 'a/a9/Boudica_(Civ4).png' },
  { id: 'catherine',     name: 'Catherine',       civ: 'Russia',        traits: ['Creative', 'Imperialistic'],      image: 'f/f0/Catherine_(Civ4).png' },
  { id: 'charlemagne',   name: 'Charlemagne',     civ: 'Holy Rome',     traits: ['Imperialistic', 'Protective'],    image: '6/6a/Charlemagne_(Civ4).png' },
  { id: 'churchill',     name: 'Churchill',       civ: 'England',       traits: ['Charismatic', 'Protective'],      image: '2/21/Churchill_(Civ4).png' },
  { id: 'cyrus',         name: 'Cyrus',           civ: 'Persia',        traits: ['Charismatic', 'Imperialistic'],   image: 'c/c6/Cyrus_(Civ4).png' },
  { id: 'darius',        name: 'Darius I',        civ: 'Persia',        traits: ['Financial', 'Organized'],         image: '0/0e/Darius_I_(Civ4).png' },
  { id: 'degaulle',      name: 'De Gaulle',       civ: 'France',        traits: ['Charismatic', 'Industrious'],     image: '0/02/De_Gaulle_(Civ4).png' },
  { id: 'frederick',     name: 'Frederick',       civ: 'Germany',       traits: ['Philosophical', 'Creative'],      image: '2/28/Frederick_(Civ4).png' },
  { id: 'gandhi',        name: 'Gandhi',          civ: 'India',         traits: ['Philosophical', 'Spiritual'],     image: '2/21/Gandhi_(Civ4).png' },
  { id: 'genghis',       name: 'Genghis Khan',    civ: 'Mongolia',      traits: ['Aggressive', 'Imperialistic'],    image: '6/6e/Genghis_Khan_(Civ4).png' },
  { id: 'gilgamesh',     name: 'Gilgamesh',       civ: 'Sumeria',       traits: ['Protective', 'Creative'],         image: 'a/a2/Gilgamesh_(Civ4).png' },
  { id: 'hammurabi',     name: 'Hammurabi',       civ: 'Babylonia',     traits: ['Aggressive', 'Organized'],        image: '2/2b/Hammurabi_(Civ4).png' },
  { id: 'hatshepsut',    name: 'Hatshepsut',      civ: 'Egypt',         traits: ['Spiritual', 'Creative'],          image: 'f/f7/Hatshepsut_(Civ4).png' },
  { id: 'huayna',        name: 'Huayna Capac',    civ: 'Inca',          traits: ['Financial', 'Industrious'],       image: 'b/bd/Huayna_Capac_(Civ4).png' },
  { id: 'isabella',      name: 'Isabella',        civ: 'Spain',         traits: ['Expansive', 'Spiritual'],         image: '6/6f/Isabella_(Civ4).png' },
  { id: 'joao',          name: 'Joao II',         civ: 'Portugal',      traits: ['Imperialistic', 'Expansive'],     image: '5/5e/Joao_II_(Civ4).png' },
  { id: 'julius',        name: 'Julius Caesar',   civ: 'Rome',          traits: ['Organized', 'Imperialistic'],     image: '6/65/Julius_Caesar_(Civ4).png' },
  { id: 'justinian',     name: 'Justinian I',     civ: 'Byzantine',     traits: ['Imperialistic', 'Spiritual'],     image: '7/7f/Justinian_I_(Civ4).png' },
  { id: 'kublai',        name: 'Kublai Khan',     civ: 'Mongolia',      traits: ['Creative', 'Imperialistic'],      image: '5/58/Kublai_Khan_(Civ4).png' },
  { id: 'louis',         name: 'Louis XIV',       civ: 'France',        traits: ['Creative', 'Industrious'],        image: 'b/b0/Louis_XIV_(Civ4).png' },
  { id: 'mansa',         name: 'Mansa Musa',      civ: 'Mali',          traits: ['Financial', 'Spiritual'],         image: '1/1d/Mansa_Musa_(Civ4).png' },
  { id: 'mao',           name: 'Mao Zedong',      civ: 'China',         traits: ['Expansive', 'Protective'],        image: 'c/c1/Mao_Zedong_(Civ4).png' },
  { id: 'mehmed',        name: 'Mehmed II',       civ: 'Ottoman',       traits: ['Expansive', 'Organized'],         image: '0/03/Mehmed_II_(Civ4).png' },
  { id: 'montezuma',     name: 'Montezuma',       civ: 'Aztec',         traits: ['Aggressive', 'Spiritual'],        image: '7/78/Montezuma_(Civ4).png' },
  { id: 'napoleon',      name: 'Napoleon',        civ: 'France',        traits: ['Charismatic', 'Aggressive'],      image: '3/31/Napoleon_(Civ4).png' },
  { id: 'pacal',         name: 'Pacal II',        civ: 'Maya',          traits: ['Expansive', 'Financial'],         image: 'b/be/Pacal_II_(Civ4).png' },
  { id: 'pericles',      name: 'Pericles',        civ: 'Greece',        traits: ['Creative', 'Philosophical'],      image: '7/7a/Pericles_(Civ4).png' },
  { id: 'peter',         name: 'Peter',           civ: 'Russia',        traits: ['Expansive', 'Philosophical'],     image: 'e/e4/Peter_(Civ4).png' },
  { id: 'qin',           name: 'Qin Shi Huang',   civ: 'China',         traits: ['Industrious', 'Financial'],       image: 'd/db/Qin_Shi_Huang_(Civ4).png' },
  { id: 'ragnar',        name: 'Ragnar',          civ: 'Vikings',       traits: ['Financial', 'Aggressive'],        image: '6/6f/Ragnar_(Civ4).png' },
  { id: 'ramesses',      name: 'Ramesses II',     civ: 'Egypt',         traits: ['Industrious', 'Spiritual'],       image: '8/8b/Ramesses_II_(Civ4).png' },
  { id: 'roosevelt',     name: 'Roosevelt',       civ: 'America',       traits: ['Industrious', 'Organized'],       image: 'e/ed/Roosevelt_(Civ4).png' },
  { id: 'saladin',       name: 'Saladin',         civ: 'Arabia',        traits: ['Philosophical', 'Spiritual'],     image: '1/1a/Saladin_(Civ4).png' },
  { id: 'shaka',         name: 'Shaka',           civ: 'Zulu',          traits: ['Aggressive', 'Expansive'],        image: '3/3d/Shaka_(Civ4).png' },
  { id: 'sittingbull',   name: 'Sitting Bull',    civ: 'Native America', traits: ['Philosophical', 'Protective'],    image: 'c/c2/Sitting_Bull_(Civ4).png' },
  { id: 'stalin',        name: 'Stalin',          civ: 'Russia',        traits: ['Aggressive', 'Industrious'],      image: '9/97/Stalin_(Civ4).png' },
  { id: 'suleiman',      name: 'Suleiman',        civ: 'Ottoman',       traits: ['Imperialistic', 'Philosophical'], image: '5/59/Suleiman_(Civ4).png' },
  { id: 'suryavarman',   name: 'Suryavarman II',  civ: 'Khmer',         traits: ['Expansive', 'Creative'],          image: '5/5b/Suryavarman_II_(Civ4).png' },
  { id: 'tokugawa',      name: 'Tokugawa',        civ: 'Japan',         traits: ['Aggressive', 'Protective'],       image: 'e/ed/Tokugawa_(Civ4).png' },
  { id: 'victoria',      name: 'Victoria',        civ: 'England',       traits: ['Financial', 'Expansive'],         image: '5/55/Victoria_(Civ4).png' },
  { id: 'wangkon',       name: 'Wang Kon',        civ: 'Korea',         traits: ['Financial', 'Protective'],        image: 'b/b1/Wang_Kon_(Civ4).png' },
  { id: 'washington',    name: 'Washington',      civ: 'America',       traits: ['Charismatic', 'Expansive'],      image: '5/54/Washington_(Civ4).png' },
  { id: 'willem',        name: 'Willem van Oranje', civ: 'Netherlands',  traits: ['Financial', 'Creative'],          image: 'e/e8/Willem_van_Oranje_(Civ4).png' },
  { id: 'zao',           name: 'Zara Yaqob',      civ: 'Ethiopia',      traits: ['Organized', 'Creative'],          image: '1/11/Zara_Yaqob_(Civ4).png' },
]

const STORAGE_KEY = 'civ4-leader-picks'

function savePicks() {
  const picks = []
  for (let i = 0; i < 8; i++) {
    picks.push(document.getElementById(`leader-${i}`).value)
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(picks))
}

function loadPicks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return
    const picks = JSON.parse(saved)
    if (!Array.isArray(picks) || picks.length !== 8) return
    for (let i = 0; i < 8; i++) {
      document.getElementById(`leader-${i}`).value = picks[i]
    }
  } catch {}
}

const selectorsEl = document.getElementById('selectors')
const resultsEl = document.getElementById('results')

for (let i = 0; i < 8; i++) {
  const group = document.createElement('div')
  group.className = 'selector-group'

  const label = document.createElement('label')
  label.textContent = `Leader ${i + 1}`
  label.htmlFor = `leader-${i}`

  const select = document.createElement('select')
  select.id = `leader-${i}`
  select.dataset.index = i

  const blank = document.createElement('option')
  blank.value = ''
  blank.textContent = '— Select —'
  select.appendChild(blank)

  for (const l of LEADERS) {
    const opt = document.createElement('option')
    opt.value = l.id
    opt.textContent = `${l.name} (${l.civ})`
    select.appendChild(opt)
  }

  select.addEventListener('change', () => {
    savePicks()
    render()
  })
  group.appendChild(label)
  group.appendChild(select)
  selectorsEl.appendChild(group)
}

loadPicks()

function render() {
  const selections = []
  for (let i = 0; i < 8; i++) {
    const sel = document.getElementById(`leader-${i}`)
    selections.push(sel.value)
  }

  resultsEl.innerHTML = ''

  for (let i = 0; i < 8; i++) {
    const leaderId = selections[i]
    const leader = LEADERS.find(l => l.id === leaderId)
    const card = document.createElement('div')
    card.className = `leader-card${leader ? ' active' : ''}`

    const portrait = document.createElement('div')
    portrait.className = 'leader-portrait'

    if (leader) {
      const img = document.createElement('img')
      img.src = `${IMG_PATH}/${leader.id}.webp`
      img.alt = leader.name
      img.loading = 'lazy'
      portrait.appendChild(img)
    } else {
      portrait.style.background = '#333'
    }

    card.appendChild(portrait)

    const name = document.createElement('div')
    name.className = 'leader-name'
    name.textContent = leader ? leader.name : '—'
    card.appendChild(name)

    const civ = document.createElement('div')
    civ.className = 'leader-civ'
    civ.textContent = leader ? leader.civ : ''
    card.appendChild(civ)

    const traits = document.createElement('div')
    traits.className = 'leader-traits'
    if (leader) {
      for (const t of leader.traits) {
        const badge = document.createElement('span')
        badge.className = 'trait-badge'
        badge.textContent = t
        badge.style.background = TRAIT_COLORS[t] || '#555'
        traits.appendChild(badge)
      }
    }
    card.appendChild(traits)

    resultsEl.appendChild(card)
  }
}

render()
