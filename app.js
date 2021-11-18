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

  console.log(days, hours, minutes, seconds)
}

updateCountdown()
