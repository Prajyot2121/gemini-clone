import React, { useState } from 'react'
import { URL } from '../url'
import Answers from './components/Answers'

function Container() {

  const [queistion, setQueistion] = useState('')
  const [result, setResult] = useState(undefined)

  const payload = {
    "contents": [{ "parts": [{ "text": queistion }] }]
  }



  const askQuestion = async () => {
    let response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(payload)
    })

    response = await response.json();

    let datasting = response.candidates[0].content.parts[0].text
    datasting = datasting.split("* ")
    datasting = datasting.map((item) => item.trim())

    setResult(datasting)
    console.log(datasting)



  }



  return (
    <>
      <div className="container-1">
        <div className="result ">
          <h1>GEMINI</h1>

          <ul>
            {result && result.map((item, index) => (
              <li key={index+ Math.random}>
                <Answers ans={item} index={index} />
              </li>
            ))}


          </ul>

        </div>
        <div className="searchbox bg-black text-white  rounded-4xl flex  border border-zinc-700">
          <input type="text" value={queistion} onChange={(event) => setQueistion(event.target.value)} className="w-full h-full p-3 outline-none" placeholder="Ask me Anything" />
          <button onClick={askQuestion}>Ask</button>
        </div>

      </div>
    </>
  )
}

export default Container
