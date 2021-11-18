const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')

const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)

const updateCountdown = () => {
  const currentTime = new Date()

  // Obter a diferença entre a zero hora do primeiro dia do ano que vem e a data atual
  // O resulta será a quantidade de milisegundos que restam para a zero hora do primeiro dia do ano que vem.
  const difference = newYearTime - currentTime

  // Cálculo do tempo restante que falta para o dia 01 do ano que vem chegar
  // Em DIAS para o no atual acabar
  const days = Math.floor(difference / 1000 / 60 / 60 / 24)
  // Em HORAS para o dia corrente (de hoje, de agora) acabar
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24
  // Em MINUTOS para a hora corrente acabar
  const minutes = Math.floor(difference / 1000 / 60) % 60
  // Em SEGUNDOS para o minuto corrente acabar
  const seconds = Math.floor(difference / 1000) % 60

  secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds // ternário para que continue com 2 dígitos
  minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
  hoursContainer.textContent = hours < 10 ? '0' + hours : hours
  daysContainer.textContent = days < 10 ? '0' + days : days
}

// Invoca a função a cada segundo
setInterval(updateCountdown, 1000)
