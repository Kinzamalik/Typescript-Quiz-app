
export const getQuizDetails = async(totalQuestions:number,level:string)=>{
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&category=9&difficulty=${level}&type=multiple`)
    let {results} = await res.json();

    return results;
}