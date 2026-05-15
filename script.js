const IMG_PATH = 'img/leaders'
const STORAGE_KEY = 'civ4-leader-picks'
const SLOT_COUNT = 8
const MAX_SUGGESTIONS = 8

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
  { id: 'alexander',     name: 'Alexander',       civ: 'Greece',        traits: ['Aggressive', 'Philosophical'] },
  { id: 'asoka',         name: 'Asoka',           civ: 'India',         traits: ['Organized', 'Spiritual'] },
  { id: 'augustus',      name: 'Augustus Caesar', civ: 'Rome',          traits: ['Imperialistic', 'Creative'] },
  { id: 'bismarck',      name: 'Bismarck',        civ: 'Germany',       traits: ['Expansive', 'Industrious'] },
  { id: 'boudica',       name: 'Boudica',         civ: 'Celtia',        traits: ['Charismatic', 'Aggressive'] },
  { id: 'catherine',     name: 'Catherine',       civ: 'Russia',        traits: ['Creative', 'Imperialistic'] },
  { id: 'charlemagne',   name: 'Charlemagne',     civ: 'Holy Rome',     traits: ['Imperialistic', 'Protective'] },
  { id: 'churchill',     name: 'Churchill',       civ: 'England',       traits: ['Charismatic', 'Protective'] },
  { id: 'cyrus',         name: 'Cyrus',           civ: 'Persia',        traits: ['Charismatic', 'Imperialistic'] },
  { id: 'darius',        name: 'Darius I',        civ: 'Persia',        traits: ['Financial', 'Organized'] },
  { id: 'degaulle',      name: 'De Gaulle',       civ: 'France',        traits: ['Charismatic', 'Industrious'] },
  { id: 'frederick',     name: 'Frederick',       civ: 'Germany',       traits: ['Philosophical', 'Creative'] },
  { id: 'gandhi',        name: 'Gandhi',          civ: 'India',         traits: ['Philosophical', 'Spiritual'] },
  { id: 'genghis',       name: 'Genghis Khan',    civ: 'Mongolia',      traits: ['Aggressive', 'Imperialistic'] },
  { id: 'gilgamesh',     name: 'Gilgamesh',       civ: 'Sumeria',       traits: ['Protective', 'Creative'] },
  { id: 'hammurabi',     name: 'Hammurabi',       civ: 'Babylonia',     traits: ['Aggressive', 'Organized'] },
  { id: 'hatshepsut',    name: 'Hatshepsut',      civ: 'Egypt',         traits: ['Spiritual', 'Creative'] },
  { id: 'huayna',        name: 'Huayna Capac',    civ: 'Inca',          traits: ['Financial', 'Industrious'] },
  { id: 'isabella',      name: 'Isabella',        civ: 'Spain',         traits: ['Expansive', 'Spiritual'] },
  { id: 'joao',          name: 'Joao II',         civ: 'Portugal',      traits: ['Imperialistic', 'Expansive'] },
  { id: 'julius',        name: 'Julius Caesar',   civ: 'Rome',          traits: ['Organized', 'Imperialistic'] },
  { id: 'justinian',     name: 'Justinian I',     civ: 'Byzantine',     traits: ['Imperialistic', 'Spiritual'] },
  { id: 'kublai',        name: 'Kublai Khan',     civ: 'Mongolia',      traits: ['Creative', 'Imperialistic'] },
  { id: 'louis',         name: 'Louis XIV',       civ: 'France',        traits: ['Creative', 'Industrious'] },
  { id: 'mansa',         name: 'Mansa Musa',      civ: 'Mali',          traits: ['Financial', 'Spiritual'] },
  { id: 'mao',           name: 'Mao Zedong',      civ: 'China',         traits: ['Expansive', 'Protective'] },
  { id: 'mehmed',        name: 'Mehmed II',       civ: 'Ottoman',       traits: ['Expansive', 'Organized'] },
  { id: 'montezuma',     name: 'Montezuma',       civ: 'Aztec',         traits: ['Aggressive', 'Spiritual'] },
  { id: 'napoleon',      name: 'Napoleon',        civ: 'France',        traits: ['Charismatic', 'Aggressive'] },
  { id: 'pacal',         name: 'Pacal II',        civ: 'Maya',          traits: ['Expansive', 'Financial'] },
  { id: 'pericles',      name: 'Pericles',        civ: 'Greece',        traits: ['Creative', 'Philosophical'] },
  { id: 'peter',         name: 'Peter',           civ: 'Russia',        traits: ['Expansive', 'Philosophical'] },
  { id: 'qin',           name: 'Qin Shi Huang',   civ: 'China',         traits: ['Industrious', 'Financial'] },
  { id: 'ragnar',        name: 'Ragnar',          civ: 'Vikings',       traits: ['Financial', 'Aggressive'] },
  { id: 'ramesses',      name: 'Ramesses II',     civ: 'Egypt',         traits: ['Industrious', 'Spiritual'] },
  { id: 'roosevelt',     name: 'Roosevelt',       civ: 'America',       traits: ['Industrious', 'Organized'] },
  { id: 'saladin',       name: 'Saladin',         civ: 'Arabia',        traits: ['Philosophical', 'Spiritual'] },
  { id: 'shaka',         name: 'Shaka',           civ: 'Zulu',          traits: ['Aggressive', 'Expansive'] },
  { id: 'sittingbull',   name: 'Sitting Bull',    civ: 'Native America', traits: ['Philosophical', 'Protective'] },
  { id: 'stalin',        name: 'Stalin',          civ: 'Russia',        traits: ['Aggressive', 'Industrious'] },
  { id: 'suleiman',      name: 'Suleiman',        civ: 'Ottoman',       traits: ['Imperialistic', 'Philosophical'] },
  { id: 'suryavarman',   name: 'Suryavarman II',  civ: 'Khmer',         traits: ['Expansive', 'Creative'] },
  { id: 'tokugawa',      name: 'Tokugawa',        civ: 'Japan',         traits: ['Aggressive', 'Protective'] },
  { id: 'victoria',      name: 'Victoria',        civ: 'England',       traits: ['Financial', 'Expansive'] },
  { id: 'wangkon',       name: 'Wang Kon',        civ: 'Korea',         traits: ['Financial', 'Protective'] },
  { id: 'washington',    name: 'Washington',      civ: 'America',       traits: ['Charismatic', 'Expansive'] },
  { id: 'willem',        name: 'Willem van Oranje', civ: 'Netherlands',  traits: ['Financial', 'Creative'] },
  { id: 'zao',           name: 'Zara Yaqob',      civ: 'Ethiopia',      traits: ['Organized', 'Creative'] },
]

const LEADER_DISPLAYS = LEADERS.map(l => ({
  leader: l,
  display: `${l.name} (${l.civ})`,
}))

// --- Utility ---

function levenshtein(a, b) {
  const m = a.length, n = b.length
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
  for (let i = 0; i <= m; i++) dp[i][0] = i
  for (let j = 0; j <= n; j++) dp[0][j] = j
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
    }
  }
  return dp[m][n]
}

function getSuggestions(query) {
  if (!query.trim()) return []
  const q = query.toLowerCase().trim()
  const scored = LEADER_DISPLAYS.map(({ leader, display }) => {
    const target = display.toLowerCase()
    let d = levenshtein(q, target)
    if (target.startsWith(q)) d -= q.length * 0.5
    return { leader, display, score: d }
  })
  scored.sort((a, b) => a.score - b.score)
  return scored.slice(0, MAX_SUGGESTIONS)
}

// --- Persistence ---

function savePicks() {
  const picks = inputs.map(input => input.dataset.leaderId || '')
  localStorage.setItem(STORAGE_KEY, JSON.stringify(picks))
}

function loadPicks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return
    const picks = JSON.parse(saved)
    if (!Array.isArray(picks) || picks.length !== SLOT_COUNT) return
    for (let i = 0; i < SLOT_COUNT; i++) {
      const leader = LEADERS.find(l => l.id === picks[i])
      if (leader) {
        inputs[i].value = `${leader.name} (${leader.civ})`
        inputs[i].dataset.leaderId = leader.id
      }
    }
  } catch {}
}

// --- UI Components ---

function createAutocomplete(index) {
  const wrapper = document.createElement('div')
  wrapper.className = 'autocomplete-wrapper'

  const input = document.createElement('input')
  input.type = 'text'
  input.id = `leader-${index}`
  input.autocomplete = 'off'
  input.placeholder = 'Type a leader name...'
  wrapper.appendChild(input)

  const dropdown = document.createElement('div')
  dropdown.className = 'suggestions'
  wrapper.appendChild(dropdown)

  let activeIndex = -1
  let currentSuggestions = []

  function showDropdown(suggestions) {
    dropdown.innerHTML = ''
    activeIndex = -1
    currentSuggestions = suggestions
    if (suggestions.length === 0) {
      dropdown.style.display = 'none'
      return
    }
    dropdown.style.display = 'block'
    for (let i = 0; i < suggestions.length; i++) {
      const item = document.createElement('div')
      item.className = 'suggestion-item'
      item.textContent = suggestions[i].display
      item.dataset.index = i
      dropdown.appendChild(item)
    }
  }

  function selectSuggestion(s) {
    input.value = s.display
    input.dataset.leaderId = s.leader.id
    dropdown.style.display = 'none'
    savePicks()
    render()
  }

  dropdown.addEventListener('click', e => {
    const item = e.target.closest('.suggestion-item')
    if (!item) return
    selectSuggestion(currentSuggestions[+item.dataset.index])
  })

  dropdown.addEventListener('mousedown', e => {
    if (e.target.closest('.suggestion-item')) e.preventDefault()
  })

  input.addEventListener('input', () => {
    if (!input.value.trim()) {
      delete input.dataset.leaderId
      dropdown.style.display = 'none'
      savePicks()
      render()
      return
    }
    showDropdown(getSuggestions(input.value))
  })

  input.addEventListener('keydown', e => {
    const items = dropdown.children
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      activeIndex = Math.min(activeIndex + 1, items.length - 1)
      for (let i = 0; i < items.length; i++) {
        items[i].classList.toggle('active', i === activeIndex)
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      activeIndex = Math.max(activeIndex - 1, -1)
      for (let i = 0; i < items.length; i++) {
        items[i].classList.toggle('active', i === activeIndex)
      }
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault()
      items[activeIndex].click()
    } else if (e.key === 'Escape') {
      dropdown.style.display = 'none'
      activeIndex = -1
    }
  })

  input.addEventListener('blur', () => {
    setTimeout(() => { dropdown.style.display = 'none' }, 200)
  })

  return { wrapper, input }
}

function createLeaderCard(leader) {
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

  return card
}

// --- Bootstrap ---

const selectorsEl = document.getElementById('selectors')
const resultsEl = document.getElementById('results')
const inputs = []

for (let i = 0; i < SLOT_COUNT; i++) {
  const group = document.createElement('div')
  group.className = 'selector-group'

  const label = document.createElement('label')
  label.textContent = `Leader ${i + 1}`
  label.htmlFor = `leader-${i}`

  const { wrapper, input } = createAutocomplete(i)
  inputs.push(input)
  group.appendChild(label)
  group.appendChild(wrapper)
  selectorsEl.appendChild(group)
}

loadPicks()

function render() {
  const selections = inputs.map(input => input.dataset.leaderId || '')
  resultsEl.innerHTML = ''

  for (let i = 0; i < SLOT_COUNT; i++) {
    const leader = LEADERS.find(l => l.id === selections[i])
    resultsEl.appendChild(createLeaderCard(leader))
  }
}

render()
