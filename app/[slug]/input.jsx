'use client'
import Link from "next/link";
import Button from "../component/button";
import { useState } from "react";

export default function Input({slug, answer}) {
    // create value from local storage
    let finishQuestion = localStorage.getItem(slug);

    const [isValid, setIsValid] = useState(null);
    const [response, setResponse] = useState(null);
    const [status, setStatus] = useState('blue');

    const submit = (e) => {
        e.preventDefault();
        console.log(answer)
        if (e.target.answer.value == answer) {
            // set isValid to true, add object question 1 and set to true in local storage
            setIsValid(true);
            setResponse('Your answer is correct!');
            setStatus('green');
            localStorage.setItem(slug, true);
        } else {
            setIsValid(false);
            setResponse('Your answer is incorrect! Please try again.');
            setStatus('red');
        }
    };

    return (
        <>
            <form onSubmit={submit} className="space-y-1">
                <div className="flex space-x-1 items-center">
                    <input disabled={finishQuestion} value={finishQuestion && answer} name="answer" type="text" className={`focus:outline-dashed outline-${status}-400 outline-2 w-auto rounded bg-gray-700 pl-4 font-medium text-gray-200`}/>
                    <Button  disabled={finishQuestion} type="submit">Submit</Button>
                </div>
                {isValid ? 
                    <p className="text-green-400">{response} Go to <Link href={nextQuestion(slug)} className="underline">{nextQuestion(slug)}</Link></p> 
                : 
                    <p className={`text-red-400`}>{response}</p>
                }
            </form>
        </>
    )
}

const nextQuestion = (slug) => {
    const questionNumber = slug.charAt(slug.length - 1);
    const nextQuestionNumber = parseInt(questionNumber) + 1;

    if (nextQuestionNumber > 3) {
        return null;
    }
    return `question${nextQuestionNumber}`;
}