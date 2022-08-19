import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [translatedString, setTranslatedString] = useState(0);

  const count = useRef(0);
  const myInput1 = useRef(null);
  const myInput2 = useRef(null);

  useEffect(() => {
    count.current++;
    myInput2.current.focus();
    merge(value1, value2)
  }, [value1])

  useEffect(() => {
    count.current++;
    myInput1.current.focus();
    merge(value1, value2)
  }, [value2])

  const merge = (string1, string2) => {
    let length = 0,
      text = "";

    length = string1?.length > string2?.length
      ? string1.length
      : string2?.length

    for(let i = 0; i < length; i++) {
      text += string1[i] || "";
      text += string2[i] || "";
    }

    setTranslatedString(text);
  }

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Exercício #1" />
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{translatedString} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>
        <input
          type="text"
          className="input"
          value={value1}
          ref={myInput1}
          onChange={e => setValue1(e.target.value)}
        />
      </div>

      <SectionTitle title="Exercício #2" />
      <div className="center">
        <input 
          type="text" 
          className="input"
          value={value2}
          ref={myInput2}
          onChange={e => setValue2(e.target.value)}
        />
      </div>
    </div>
  )
}

export default UseRef
