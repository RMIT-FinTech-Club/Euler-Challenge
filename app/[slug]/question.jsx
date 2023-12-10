import Input from './input'
import questions from './questions'

export default function Question({slug}) {
    return (
        <div className="space-y-8">
            <p className="text-gray-300">{questions[slug].detail}</p>
            {/* <p className="text-gray-300">{questions[slug].answer}</p> */}
            <Input slug={slug} answer={questions[slug].answer} />
        </div>
    )
}