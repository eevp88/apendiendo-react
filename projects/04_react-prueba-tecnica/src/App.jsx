import { useEffect, useState } from "react"
const URL_RAMDOM_CAT_FACT = 'https://catfact.ninja/fact'
export function App() {
  const [fact, setFact] = useState('loren ipsum cat fact whaterver')
  const [urlImagen, setUrlImagen] = useState()

  // una responsabilidad,  recuperar la sita
  useEffect(() => {
    fetch(URL_RAMDOM_CAT_FACT)
      .then(res => res.json())
      .then(data =>{
        const { fact } = data
        setFact(data.fact)
        const firstWord = fact.split(' ', 3).join(' ')
        console.log(firstWord)

      })
  }, [])

  return (
    <>
      <h1>App de gatos!!!</h1>
      <main>
        {fact && <p>{fact}</p>}
      </main>
    </>

  )
}