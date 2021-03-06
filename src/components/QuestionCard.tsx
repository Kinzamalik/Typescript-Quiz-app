import React, { useState } from 'react';
import {QuestionPropsType} from './../Types/quiz_types'

const QuestionCard:React.FC<QuestionPropsType> =({question,options,callback})=>{

    let [selectedAns,setSelectedAns] = useState('')

    let handleSelection = (ev:any) =>{
        setSelectedAns(ev.target.value)
    }

    return(
        <div className="question_container">
        <div className="question">
           <h4> {question}</h4>
        </div>

        <form onSubmit={(e:React.FormEvent<EventTarget>)=>callback(e,selectedAns)}
        className="question_form"
        >
            {
                options.map((opt:string,ind:number)=>{
                    return(
                        <div key={ind}>
                           
                        <label  className="radio" >
                            <input 
                            type="radio"
                            name="opt"
                            required
                            value={opt}
                            checked={selectedAns === opt}
                            onChange={handleSelection}
                            />
                            {opt}
                        </label>
                        </div>
                    )
                })
            }
            <input type="submit" className="submit"/>
        </form>

        </div>
    )
}

export default QuestionCard;