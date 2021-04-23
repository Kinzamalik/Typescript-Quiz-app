import React from 'react';
import {QuestionPropsType} from './../Types/quiz_types'

const QuestionCard:React.FC<QuestionPropsType> =({question,options,callback})=>{
    return(
        <div className="question_container">
        <div className="question">
           <h4> {question}</h4>
        </div>

        <form onSubmit={callback}>
            {
                options.map((opt:string,ind:number)=>{
                    return(
                        <div key={ind}>
                        <label>
                            <input 
                            type="radio"
                            name="opt"
                            value={opt}
                            />
                            {opt}
                        </label>
                        </div>
                    )
                })
            }
            <input type="submit"/>
        </form>

        </div>
    )
}

export default QuestionCard;