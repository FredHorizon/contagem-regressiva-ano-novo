const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)

const updateContdown = () => {
  const currentTime = new Date()

  // Obter a diferença entre a zero hora do primeiro dia do ano que vem e a data atual
  // O resulta será a quantidade de milisegundos que restam para a zero hora do primeiro dia do ano que vem.
  const difference = newYearTime - currentTime

  // Cálculo do tempo restante que falta para o dia 01 do ano que vem chegar
  // Em SEGUNDOS
  const seconds = Math.floor(difference / 1000)
  // Em MINUTOS
  const minutes = Math.floor(difference / 1000 / 60)
  // Em HORAS (Mas levar em conta as horas que já se passaram nesse momento)
  const hours = Math.floor(difference / 1000 / 60 / 60)
  // Em DIAS
  const days = Math.floor(difference / 1000 / 60 / 60 / 24)

  console.log(days)
}

updateContdown()
